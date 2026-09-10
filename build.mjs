// index.html 을 배포용 Worker(dist/server/index.js)로 감싸는 빌드 스크립트.
// 원본은 index.html 하나뿐이며, 이 스크립트가 배포본을 생성한다.
//
// data/notion.json 이 있으면 그 내용을 페이지에 구워 넣는다(빌드 타임 동기화).
// 없으면 index.html 의 내장 목업이 그대로 쓰인다. 토큰은 배포물에 포함되지 않는다.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const src = new URL("./index.html", import.meta.url);
const dataFile = new URL("./data/notion.json", import.meta.url);
const outDir = new URL("./dist/server/", import.meta.url);
const outFile = new URL("./dist/server/index.js", import.meta.url);

let html = readFileSync(src, "utf8");

// ── 노션 데이터 주입 ──────────────────────────────
const PLACEHOLDER = '<script id="synced" type="application/json">null</script>';

if (existsSync(dataFile)) {
  let parsed = null;
  try {
    parsed = JSON.parse(readFileSync(dataFile, "utf8"));
  } catch (e) {
    console.warn("[build] data/notion.json 파싱 실패 → 목업 사용:", e.message);
  }
  if (parsed) {
    if (!html.includes(PLACEHOLDER)) {
      console.warn("[build] index.html 에서 주입 위치를 찾지 못함 → 목업으로 빌드");
    } else {
      // JSON 안의 </ 가 script 태그를 조기 종료시키는 것을 방지
      const safe = JSON.stringify(parsed).replace(/<\//g, "<\\/");
      html = html.replace(
        PLACEHOLDER,
        '<script id="synced" type="application/json">' + safe + "</script>"
      );
      console.log("[build] 노션 데이터 주입 완료 (" + (parsed.syncedAt || "시각 없음") + ")");
    }
  }
} else {
  console.log("[build] data/notion.json 없음 → 목업 데이터로 빌드");
}

// ── AI FUTURE & CAREER 데이터 주입 ─────────────────
// content/career-ai.json 이 단일 원본. 없거나 깨지면 빌드를 중단해 기존 dist 를 지킨다.
const careerFile = new URL("./content/career-ai.json", import.meta.url);
const CAREER_PLACEHOLDER = '<script id="career-ai" type="application/json">null</script>';
if (!existsSync(careerFile)) {
  console.error("[build] content/career-ai.json 없음 → 빌드 중단 (기존 dist 유지)");
  process.exit(1);
}
try {
  const career = JSON.parse(readFileSync(careerFile, "utf8"));
  if (!html.includes(CAREER_PLACEHOLDER)) {
    console.error("[build] index.html 에 career-ai 주입 자리가 없음 → 빌드 중단");
    process.exit(1);
  }
  html = html.replace(CAREER_PLACEHOLDER,
    '<script id="career-ai" type="application/json">' + JSON.stringify(career).replace(/<\//g, "<\\/") + "</script>");
  console.log("[build] career-ai 데이터 주입 완료 (v" + career.meta.version + ", " + career.meta.updated + ", 신호 " + career.signals.length + "건)");
} catch (e) {
  console.error("[build] content/career-ai.json 파싱 실패 → 빌드 중단:", e.message);
  process.exit(1);
}

// ── KPI 스트립 데이터 주입 (선택) ─────────────────
// content/stats.json 은 my agent 의 scripts/hub_stats.py 가 만든다. 없으면 null 유지 → 페이지가 fetch 로 폴백.
const statsFile = new URL("./content/stats.json", import.meta.url);
const STATS_PLACEHOLDER = '<script id="hub-stats" type="application/json">null</script>';
if (existsSync(statsFile) && html.includes(STATS_PLACEHOLDER)) {
  try {
    const stats = JSON.parse(readFileSync(statsFile, "utf8"));
    html = html.replace(STATS_PLACEHOLDER,
      '<script id="hub-stats" type="application/json">' + JSON.stringify(stats).replace(/<\//g, "<\\/") + "</script>");
    console.log("[build] stats 주입 완료 (" + (stats.updated || "날짜 없음") + ")");
  } catch (e) {
    console.warn("[build] content/stats.json 파싱 실패 → 주입 생략:", e.message);
  }
} else {
  console.log("[build] content/stats.json 없음 → KPI 는 런타임 fetch 폴백");
}

// ── 보건·의료 감시 데이터 주입 (선택) ───────────
const watchFile = new URL("./content/watch.json", import.meta.url);
const WATCH_PLACEHOLDER = '<script id="hub-watch" type="application/json">null</script>';
if (existsSync(watchFile) && html.includes(WATCH_PLACEHOLDER)) {
  try {
    const watch = JSON.parse(readFileSync(watchFile, "utf8"));
    html = html.replace(WATCH_PLACEHOLDER,
      '<script id="hub-watch" type="application/json">' + JSON.stringify(watch).replace(/<\//g, "<\\/") + "</script>");
    console.log("[build] watch 주입 완료 (" + (watch.meta && watch.meta.updated || "날짜 없음") + ", " + (watch.items || []).length + "건)");
  } catch (e) {
    console.warn("[build] content/watch.json 파싱 실패 → 주입 생략:", e.message);
  }
} else {
  console.log("[build] content/watch.json 없음 → 감시 섹션은 런타임 fetch 폴백");
}

// ── 피드 데이터 주입 (선택) ───────────────────
const feedFile = new URL("./content/feed.json", import.meta.url);
const FEED_PLACEHOLDER = '<script id="hub-feed" type="application/json">null</script>';
if (existsSync(feedFile) && html.includes(FEED_PLACEHOLDER)) {
  try {
    const feed = JSON.parse(readFileSync(feedFile, "utf8"));
    html = html.replace(FEED_PLACEHOLDER,
      '<script id="hub-feed" type="application/json">' + JSON.stringify(feed).replace(/<\//g, "<\\/") + "</script>");
    console.log("[build] feed 주입 완료 (" + (feed.meta && feed.meta.updated || "날짜 없음") + ", " + (feed.items || []).length + "건)");
  } catch (e) {
    console.warn("[build] content/feed.json 파싱 실패 → 주입 생략:", e.message);
  }
} else {
  console.log("[build] content/feed.json 없음 → 피드는 런타임 fetch 폴백");
}

// ── Worker 로 감싸기 ─────────────────────────────
const escaped = html
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\$\{/g, "\\${");

mkdirSync(outDir, { recursive: true });
writeFileSync(
  outFile,
  "// 자동 생성 파일 - 직접 수정하지 마세요.\n" +
  "// 원본: index.html / 생성: npm run build\n" +
  "const html = `" + escaped + "`;\n" +
  "export default {\n" +
  "  async fetch() {\n" +
  '    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });\n' +
  "  }\n" +
  "};\n"
);
console.log("built dist/server/index.js from index.html");
