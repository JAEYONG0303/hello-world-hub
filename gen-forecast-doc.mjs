// gen-forecast-doc.mjs — content/career-ai.json → CAREER_AI_FORECAST.md 생성.
// 문서는 생성물이다. 내용을 고치려면 JSON 을 고치고 다시 생성한다 (npm run build 에 포함).

import { readFileSync, writeFileSync } from "node:fs";

const d = JSON.parse(readFileSync(new URL("./content/career-ai.json", import.meta.url), "utf8"));
const L = [];
const h = (n, t) => L.push("", "#".repeat(n) + " " + t, "");
const li = (arr, p = "- ") => arr.forEach((x) => L.push(p + x));

L.push("# CAREER_AI_FORECAST — AI 미래 전망과 내 준비 기준 문서");
L.push("");
L.push(`> 생성물. 원본은 \`content/career-ai.json\` (v${d.meta.version}, 마지막 업데이트 ${d.meta.updated}). 수정은 JSON 에서만 하고 \`node gen-forecast-doc.mjs\` 로 다시 만든다.`);
L.push(`> 기준 시점 ${d.meta.baseline_year}년, 전망 범위 ${d.meta.horizon_year}년까지. 홈페이지 "AI FUTURE & CAREER" 카테고리와 같은 데이터다.`);

h(2, "1. 나의 직무 방향");
L.push(d.career.direction, "");
L.push("**추천 직무**"); li(d.career.jobs);
L.push("", "**현재 강점**"); li(d.career.strengths);
L.push("", "**보강이 필요한 부분**"); li(d.career.gaps);

h(2, "2. AI 미래 전망 기준본");
L.push("**핵심 결론**: " + d.headline, "");
L.push("| ID | 전망 | 확률 | 신뢰 | 변화·조건 | 업데이트 |", "|---|---|---|---|---|---|");
for (const f of d.forecasts) L.push(`| ${f.id} | ${f.title} | ${f.probability}% | ${f.confidence} | ${f.change} | ${f.updated} |`);

h(2, "3. 기존 전망과 충돌하는 지점");
L.push("| 기존 전망 | 현재 증거 | 수정된 판단 | 내게 미치는 영향 |", "|---|---|---|---|");
for (const c of d.conflicts) L.push(`| ${c.old} | ${c.evidence} | ${c.revised} | ${c.impact} |`);

h(2, "4. 시장 신호 (수집 자료)");
if (!d.signals.length) L.push("_아직 등록된 신호 없음. `python scripts/ai_signals.py --collect` → `/career-signals review` 로 추가._");
else {
  L.push("| 날짜 | 기관 | 제목 | 분류 | 전망 | 영향 | 신뢰 | 확인일 |", "|---|---|---|---|---|---|---|---|");
  for (const s of [...d.signals].sort((a, b) => b.published_at.localeCompare(a.published_at)))
    L.push(`| ${s.published_at} | ${s.publisher} | [${s.title}](${s.source_url}) | ${s.category} | ${s.forecast_id} | ${s.impact} | ${s.confidence} | ${s.checked_at} |`);
}

h(2, "5. 검증 능력의 정의");
L.push(`"${d.validation_definition.statement}"`, "");
for (const a of d.validation_definition.areas) { L.push(`**${a.name}**`); li(a.items); L.push(""); }

h(2, "6. 내가 준비해야 할 역량 (우선순위)");
for (const s of [...d.skills].sort((a, b) => a.priority - b.priority)) {
  L.push(`### ${s.priority}순위: ${s.skill} — ${s.status}`);
  L.push(`- 현재: ${s.current}`, `- 증거: ${s.evidence}`, `- 목표(완료 기준): ${s.target}`, `- 다음 행동: ${s.next_action}`);
  if (s.topics && s.topics.length) L.push("- 항목: " + s.topics.join(" · "));
  L.push("");
}

h(2, "7. 90일 실행 계획");
L.push("| 기간 | 할 일 | 결과물 | 완료 조건 | 상태 |", "|---|---|---|---|---|");
for (const r of d.roadmap) L.push(`| ${r.weeks} | ${r.tasks.join("; ")} | ${r.deliverables.join("; ")} | ${r.done} | ${r.status} |`);

h(2, "8. 검증 체크리스트");
L.push("적용 프로젝트: " + d.checklist.projects.join(", "), "");
for (const g of d.checklist.groups) { L.push(`**${g.name}**`); li(g.items, "- [ ] "); L.push(""); }

h(2, "9. 수집 출처와 갱신 규칙");
L.push("**우선 출처**"); li(d.sources.trusted);
L.push("", "**수집하지 않을 자료**"); li(d.sources.excluded);
L.push("", "**수집 주기**: " + Object.entries(d.sources.cadence).map(([k, v]) => `${k}=${v}`).join(", "));
L.push("**가중치**: " + Object.entries(d.sources.weights).map(([k, v]) => `${k}=${v}`).join(", "));
L.push(`**확률 변경 상한**: 자료 하나당 ±${d.sources.max_probability_change_per_source}%p. 상충 자료는 양쪽 모두 표시.`);
L.push("", "**갱신 절차**: 원문 URL·발행기관 확인 → 발표일/확인일 구분 → 중복 확인 → 핵심 주장 추출 → 강화/약화/중립 분류 → 신뢰도 평가 → 확률 변경 필요 판단 → 변경 전후·이유 기록 → 데이터 갱신 → 검증·빌드 성공 후 업로드");

h(2, "10. 데이터 구조");
L.push("```json", JSON.stringify({ id: "고유 식별자", title: "자료 제목", publisher: "발행 기관", source_url: "원문 주소", published_at: "발표일", checked_at: "확인일", category: "model | agent | cost | reliability | jobs | governance", summary: "핵심 내용", evidence: "전망 판단에 사용한 근거", forecast_id: "연결되는 전망", impact: "strengthen | weaken | neutral", confidence: "high | medium | low" }, null, 2), "```");
L.push("동일 URL·동일 제목은 중복 저장하지 않는다. 내용이 바뀌면 삭제하지 않고 `content/signals-history.jsonl` 에 스냅샷을 남긴다.");

h(2, "11. 변경 이력");
L.push("| 날짜 | 무엇이 추가됐나 | 전망 변경 | 확률 변경 | 이유 | 출처 |", "|---|---|---|---|---|---|");
for (const c of [...d.changelog].reverse()) L.push(`| ${c.date} | ${c.what} | ${c.forecast_changes || "-"} | ${c.probability_changes || "-"} | ${c.reason} | ${c.source} |`);

L.push("", `_마지막 업데이트: ${d.meta.updated} · 생성: ${new Date().toISOString().slice(0, 10)}_`, "");
writeFileSync(new URL("./CAREER_AI_FORECAST.md", import.meta.url), L.join("\n"), "utf8");
console.log("[doc] CAREER_AI_FORECAST.md 생성 (" + d.signals.length + " signals, " + d.changelog.length + " changes)");
