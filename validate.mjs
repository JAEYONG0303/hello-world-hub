// validate.mjs — 빌드·배포 전 검사. 하나라도 실패하면 exit 1 (build 는 돌지 않고 기존 dist 유지).
//
//   node validate.mjs            구조 검사 (네트워크 없음)
//   node validate.mjs --links    + 신호·전망 URL HEAD 검사 (네트워크)
//   node validate.mjs --built    + dist/server/index.js 에 주입이 끝났는지 검사 (build 후)
//
// 검사 항목: content/career-ai.json 스키마 · 중복 URL/제목 · 날짜 형식 · 확률 범위 · 열거값
//           index.html 주입 자리 · 모바일 미디어쿼리 · 시크릿 패턴 · (built) 자리표시자 잔존 여부

import { readFileSync, existsSync } from "node:fs";

const args = new Set(process.argv.slice(2));
const errors = [];
const warn = [];
const fail = (m) => errors.push(m);

const JSON_PATH = new URL("./content/career-ai.json", import.meta.url);
const HTML_PATH = new URL("./index.html", import.meta.url);
const DIST_PATH = new URL("./dist/server/index.js", import.meta.url);

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const CATEGORY = new Set(["model", "agent", "cost", "reliability", "jobs", "governance"]);
const IMPACT = new Set(["strengthen", "weaken", "neutral"]);
const CONF = new Set(["high", "medium", "low"]);
const STATUS = new Set(["todo", "doing", "done"]);
const SECRET = /(sk-[A-Za-z0-9]{20,}|ntn_[A-Za-z0-9]{20,}|secret_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{30,})/;

// ── JSON ─────────────────────────────────────────
let data = null;
try {
  data = JSON.parse(readFileSync(JSON_PATH, "utf8"));
} catch (e) {
  fail("career-ai.json 파싱 실패: " + e.message);
}

if (data) {
  const req = ["meta", "headline", "forecasts", "conflicts", "signals", "career", "validation_definition", "skills", "roadmap", "checklist", "today", "sources", "changelog"];
  for (const k of req) if (!(k in data)) fail(`최상위 키 누락: ${k}`);

  if (data.meta && !DATE.test(data.meta.updated || "")) fail("meta.updated 는 YYYY-MM-DD");

  const ids = new Set();
  for (const f of data.forecasts || []) {
    if (!f.id || ids.has(f.id)) fail(`forecast id 누락/중복: ${f.id}`);
    ids.add(f.id);
    if (typeof f.probability !== "number" || f.probability < 0 || f.probability > 100) fail(`${f.id} probability 는 0~100 숫자`);
    if (!CONF.has(f.confidence)) fail(`${f.id} confidence 열거값 아님: ${f.confidence}`);
    if (!DATE.test(f.updated || "")) fail(`${f.id} updated 날짜 형식`);
    if (!f.title) fail(`${f.id} title 없음`);
  }

  const seenUrl = new Set(), seenTitle = new Set();
  for (const s of data.signals || []) {
    const tag = `signal ${s.id || "(id 없음)"}`;
    for (const k of ["id", "title", "publisher", "source_url", "published_at", "checked_at", "category", "summary", "evidence", "forecast_id", "impact", "confidence"])
      if (!s[k]) fail(`${tag}: ${k} 없음`);
    if (s.source_url && !/^https?:\/\//.test(s.source_url)) fail(`${tag}: source_url 형식`);
    if (s.published_at && !DATE.test(s.published_at)) fail(`${tag}: published_at 날짜 형식 (날짜 없는 자료는 반영 금지)`);
    if (s.checked_at && !DATE.test(s.checked_at)) fail(`${tag}: checked_at 날짜 형식`);
    if (s.category && !CATEGORY.has(s.category)) fail(`${tag}: category 열거값 아님`);
    if (s.impact && !IMPACT.has(s.impact)) fail(`${tag}: impact 열거값 아님`);
    if (s.confidence && !CONF.has(s.confidence)) fail(`${tag}: confidence 열거값 아님`);
    if (s.forecast_id && !ids.has(s.forecast_id)) fail(`${tag}: forecast_id ${s.forecast_id} 가 forecasts 에 없음`);
    if (s.source_url) { if (seenUrl.has(s.source_url)) fail(`${tag}: 중복 URL ${s.source_url}`); seenUrl.add(s.source_url); }
    if (s.title) { const t = s.title.trim().toLowerCase(); if (seenTitle.has(t)) fail(`${tag}: 중복 제목`); seenTitle.add(t); }
    if (s.summary && s.summary.length > 600) warn.push(`${tag}: summary 가 600자 초과 — 원문 복사가 아닌지 확인`);
  }

  for (const s of data.skills || []) {
    for (const k of ["id", "priority", "skill", "current", "evidence", "target", "next_action", "status"]) if (s[k] === undefined || s[k] === "") fail(`skill ${s.id}: ${k} 없음`);
    if (s.status && !STATUS.has(s.status)) fail(`skill ${s.id}: status 열거값 아님`);
  }
  for (const r of data.roadmap || []) {
    for (const k of ["id", "weeks", "tasks", "deliverables", "done", "status"]) if (!r[k]) fail(`roadmap ${r.id}: ${k} 없음`);
    if (r.status && !STATUS.has(r.status)) fail(`roadmap ${r.id}: status 열거값 아님`);
  }
  for (const c of data.changelog || []) {
    for (const k of ["date", "what", "reason", "source"]) if (!c[k]) fail(`changelog ${c.date}: ${k} 없음`);
    if (c.date && !DATE.test(c.date)) fail(`changelog 날짜 형식: ${c.date}`);
  }
  if (!(data.checklist && data.checklist.groups && data.checklist.groups.length)) fail("checklist.groups 비어 있음");
  if (SECRET.test(JSON.stringify(data))) fail("career-ai.json 에 시크릿 패턴이 있음");
}

// ── index.html ───────────────────────────────────
let html = "";
try { html = readFileSync(HTML_PATH, "utf8"); } catch (e) { fail("index.html 읽기 실패: " + e.message); }
if (html) {
  if (!html.includes('<script id="career-ai" type="application/json">null</script>')) fail("index.html 에 career-ai 주입 자리표시자 없음");
  if (!html.includes('id="ai-future-career"')) fail("index.html 에 #ai-future-career 섹션 없음");
  if (!/@media\s*\(max-width:\s*760px\)/.test(html)) fail("모바일 미디어쿼리(760px) 없음");
  if (SECRET.test(html)) fail("index.html 에 시크릿 패턴이 있음");
  const opens = (html.match(/<section\b/g) || []).length, closes = (html.match(/<\/section>/g) || []).length;
  if (opens !== closes) fail(`section 태그 불일치: 열림 ${opens} / 닫힘 ${closes}`);
}

// ── KPI 일치성 (소개 탭·채용 탭·홈 숫자가 서로 다른 곳에서 계산되어 어긋나는 것을 막는다) ──
const STATS_PATH = new URL("./content/stats.json", import.meta.url);
const FEED_PATH = new URL("./content/feed.json", import.meta.url);
let stats = null, feed = null;
try { if (existsSync(STATS_PATH)) stats = JSON.parse(readFileSync(STATS_PATH, "utf8")); } catch (e) { fail("stats.json 파싱 실패: " + e.message); }
try { if (existsSync(FEED_PATH)) feed = JSON.parse(readFileSync(FEED_PATH, "utf8")); } catch (e) { fail("feed.json 파싱 실패: " + e.message); }
if (stats && feed) {
  const feedJobsCount = (feed.items || []).filter((i) => i.channel === "jobs").length;
  if (stats.jobs && typeof stats.jobs.total === "number" && stats.jobs.total !== feedJobsCount)
    fail(`KPI 불일치: stats.json jobs.total(${stats.jobs.total}) !== feed.json 채용 항목 수(${feedJobsCount})`);
  const feedSourcesCount = ((feed.jobs_facets || {}).source || []).length;
  if (stats.jobs && typeof stats.jobs.sources_count === "number" && stats.jobs.sources_count !== feedSourcesCount)
    fail(`KPI 불일치: stats.json jobs.sources_count(${stats.jobs.sources_count}) !== feed.json 출처 수(${feedSourcesCount})`);
  if (stats.jobs && stats.jobs.by_source) {
    const sum = Object.values(stats.jobs.by_source).reduce((a, b) => a + b, 0);
    if (sum !== stats.jobs.total) fail(`KPI 불일치: stats.json jobs.by_source 합계(${sum}) !== jobs.total(${stats.jobs.total})`);
  }
} else if (!stats) {
  fail("content/stats.json 없음 — hub_stats.py 를 먼저 실행해야 함");
}
if (html) {
  const m = html.match(/<div class="rs-kpi" id="rs-kpi-jobs">([\s\S]*?)<\/div>\s*<\/div>/);
  if (m && /\d{2,}/.test(m[1])) fail("소개 탭 채용 공고 KPI 카드에 숫자가 하드코딩되어 있음(JS 로 채워야 함)");
}

// ── built ────────────────────────────────────────
if (args.has("--built")) {
  if (!existsSync(DIST_PATH)) fail("dist/server/index.js 없음");
  else {
    const built = readFileSync(DIST_PATH, "utf8");
    if (built.includes('id=\\"career-ai\\" type=\\"application/json\\">null<') || built.includes('id="career-ai" type="application/json">null<'))
      fail("빌드 산출물에 career-ai 데이터가 주입되지 않음(null 잔존)");
    if (SECRET.test(built)) fail("빌드 산출물에 시크릿 패턴이 있음");
    if (built.length < 20000) fail("빌드 산출물이 비정상적으로 작음");
  }
}

// ── links (optional) ─────────────────────────────
if (args.has("--links") && data) {
  const urls = new Set();
  for (const s of data.signals || []) if (s.source_url) urls.add(s.source_url);
  for (const u of urls) {
    try {
      const res = await fetch(u, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15000) });
      if (res.status >= 400) warn.push(`링크 ${res.status}: ${u}`);
    } catch (e) {
      warn.push(`링크 확인 실패: ${u} (${e.name})`);
    }
  }
}

for (const w of warn) console.warn("[validate] 경고:", w);
if (errors.length) {
  for (const e of errors) console.error("[validate] 오류:", e);
  console.error(`[validate] 실패 ${errors.length}건 — 빌드/배포 중단. 기존 dist 를 유지합니다.`);
  process.exit(1);
}
console.log(`[validate] 통과 (신호 ${data ? data.signals.length : 0}건, 전망 ${data ? data.forecasts.length : 0}개, 경고 ${warn.length})`);
