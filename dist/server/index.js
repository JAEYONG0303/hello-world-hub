// 자동 생성 파일 - 직접 수정하지 마세요.
// 원본: index.html / 생성: npm run build
const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Hello World — Jaeyong</title>
<meta name="description" content="재용의 개인 대시보드">
<meta name="robots" content="noindex,nofollow">
<style>
:root{--bg:#080912;--panel:#111321;--line:#252a40;--text:#f5f6ff;--muted:#9298b4;--violet:#9c7bff;--cyan:#57d7f3;--green:#9ee6b1;--orange:#ffb86b}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(circle at 84% 0%,#242051 0,#0d1020 28%,var(--bg) 58%);color:var(--text);font:14px/1.5 Inter,ui-sans-serif,system-ui,sans-serif;min-height:100vh}
body:before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.28;background-image:radial-gradient(#fff 1px,transparent 1px);background-size:53px 53px}
.wrap{max-width:1180px;margin:auto;padding:32px 24px 72px;position:relative}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:42px;gap:16px}
.brand{font-size:18px;font-weight:800;letter-spacing:-.03em}
.brand span{color:var(--violet)}
.date{color:var(--muted);font-size:12px;text-align:right}
.sync{display:block;color:#6d7391;font-size:11px;margin-top:3px}
.intro{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:28px}
.eyebrow,.label{color:var(--violet);font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
.title{font-size:clamp(34px,6vw,68px);line-height:1;margin:10px 0 0;letter-spacing:-.06em}
.titlemark{display:inline-block;color:var(--cyan);font-size:.22em;letter-spacing:.16em;text-transform:uppercase;vertical-align:top;margin:8px 0 0 12px;opacity:.9}
.subtitle{color:var(--muted);max-width:330px;margin:0 0 4px}
.statusline{display:flex;gap:8px;flex-wrap:wrap;margin-top:22px;color:#aeb4d0;font-size:11px}.statusline span{border:1px solid #29304a;border-radius:99px;padding:6px 10px;background:#101326aa}.statusline i{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--green);margin-right:6px;box-shadow:0 0 10px var(--green)}
.grid{display:grid;grid-template-columns:1.15fr .85fr;gap:14px}
.card{background:linear-gradient(145deg,rgba(22,25,42,.96),rgba(12,14,26,.96));border:1px solid var(--line);border-radius:16px;padding:20px;box-shadow:0 14px 40px #02030b55}
.wide{grid-column:1/-1}
.cardhead{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:10px}
.cardhead h2{font-size:12px;letter-spacing:.12em;margin:0;color:#dfe3ff}
.pill{font-size:11px;color:var(--green);border:1px solid #335841;border-radius:99px;padding:4px 8px;white-space:nowrap}
.task{display:flex;align-items:center;gap:12px;padding:13px 0;border-top:1px solid #20243a;cursor:pointer;min-height:46px}
.task:first-of-type{border-top:0;padding-top:0}
.check{width:17px;height:17px;border:1px solid #59617e;border-radius:50%;flex:none;transition:.15s}
.task.done .check{background:var(--violet);border-color:var(--violet);box-shadow:inset 0 0 0 4px #17172a}
.task.done .tasktext{color:#777d99;text-decoration:line-through}
.tasktext{flex:1}
.meta{color:var(--muted);font-size:11px}
.week{display:grid;gap:10px}
.weekitem{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:12px;background:#181b2c;border-radius:11px}
.weekitem b{font-size:13px}
.tag{color:var(--cyan);font-size:11px;white-space:nowrap}
.habits{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
.habit{padding:12px 8px;border-radius:10px;text-align:center;background:#171a2b;color:var(--muted);font-size:11px}
.habit strong{display:block;color:var(--text);font-size:18px;margin-bottom:3px}
.habit.hot strong{color:var(--orange)}
.note{color:#d7dbf2;font-size:15px;line-height:1.65}
.focus{border-color:#51418b;background:linear-gradient(135deg,#191631,#111321)}
.focus p{font-size:20px;line-height:1.25;letter-spacing:-.03em;margin:0}

/* 섹션 블록 */
.block{margin-top:46px}
.blockhead{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #1c2033}
.blockhead h2{font-size:13px;letter-spacing:.12em;margin:0;color:#dfe3ff}
.blockhead .sub{color:var(--muted);font-size:11px;text-align:right}

/* 학습 프로젝트 */
.projgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.proj{background:linear-gradient(145deg,rgba(22,25,42,.96),rgba(12,14,26,.96));border:1px solid var(--line);border-radius:16px;padding:20px;transition:.2s}
.proj.is-done{opacity:.55}
.projtop{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.projname{font-size:16px;font-weight:700;letter-spacing:-.02em;margin:0}
.projtech{color:var(--muted);font-size:12px;margin:7px 0 0}
.projfoot{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:16px}
.status{font-size:11px;font-weight:700;border-radius:99px;padding:6px 11px;border:1px solid;background:none;cursor:pointer;font-family:inherit;min-height:32px;white-space:nowrap}
.status[data-s="todo"]{color:var(--muted);border-color:#333a55}
.status[data-s="doing"]{color:var(--violet);border-color:#5b4a9e;background:#9c7bff14}
.status[data-s="done"]{color:var(--cyan);border-color:#2f5f70;background:#57d7f30f}
span.status{cursor:default}
.projlink{color:var(--cyan);font-size:11px;text-decoration:none;min-height:32px;line-height:32px}
.projlink:hover{text-decoration:underline}
.more{background:none;border:1px solid #2b3149;color:#c3c8e4;font-family:inherit;font-size:11px;border-radius:9px;padding:8px 12px;cursor:pointer;min-height:36px}
.more:hover{border-color:var(--violet);color:#fff}
.files{display:none;margin-top:14px;padding-top:14px;border-top:1px solid #20243a}
.files.open{display:block}
.file{color:#aeb4d0;font-size:12px;padding:6px 0;border-bottom:1px solid #171b2b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.file:last-child{border-bottom:0}
.filemore{color:#6d7391;font-size:11px;margin-top:8px}

/* AI 학습 경로 */
.aigrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.ai{display:flex;flex-direction:column;background:linear-gradient(145deg,rgba(22,25,42,.96),rgba(12,14,26,.96));border:1px solid var(--line);border-radius:16px;padding:18px;transition:.2s}
.ai.is-done{opacity:.55}
.ai:hover{transform:translateY(-2px);border-color:var(--violet)}
.ainum{color:var(--violet);font-size:11px;font-weight:800;letter-spacing:.14em}
.aititle{font-size:15px;font-weight:700;margin:8px 0 0;letter-spacing:-.02em}
.aitopic{color:var(--muted);font-size:12px;margin:7px 0 0;flex:1}
.ailink{display:inline-block;margin-top:14px;color:var(--cyan);font-size:12px;text-decoration:none;min-height:32px;line-height:32px}
.ailink:hover{text-decoration:underline}
.ai .status{margin-top:12px;align-self:flex-start}

/* 아카이브 */
.arcgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.arc{border:1px solid var(--line);border-radius:14px;padding:17px;background:#101324}
.arc b{display:block;font-size:14px}
.arc small{color:var(--muted);display:block;margin-top:6px}
.lock{display:inline-block;margin-top:12px;font-size:11px;color:var(--orange);border:1px solid #6b4f2b;border-radius:99px;padding:5px 10px}

@media(max-width:980px){
 .aigrid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:760px){
 .wrap{padding:22px 16px 56px}
 .top{margin-bottom:30px}
 .intro{display:block}
 .subtitle{margin-top:15px}
 .grid{grid-template-columns:1fr}
 .wide{grid-column:auto}
 .projgrid,.aigrid,.arcgrid{grid-template-columns:1fr}
 .block{margin-top:34px}
 .more,.status{min-height:44px;padding-left:16px;padding-right:16px}
 .ailink{min-height:44px;line-height:44px}
}
</style>
</head>
<body>
<main class="wrap">

<header class="top">
  <div class="brand">hello<span>world</span> / 재용</div>
  <div class="date"><span id="today-date">—</span><span class="sync" id="sync">동기화 확인 중…</span></div>
</header>

<section class="intro">
  <div>
    <div class="eyebrow">personal operating system</div>
    <h1 class="title">Make it<br><span style="color:var(--violet)">meaningful.</span><span class="titlemark">jaeyong / 01</span></h1>
    <div class="statusline"><span><i></i>private space</span><span>4 learning tracks</span><span>1 active focus</span></div>
  </div>
  <p class="subtitle">오늘의 집중을 기록하고,<br>다음 궤도로 이동하세요.</p>
</section>

<!-- 1. 오늘 / 이번 주 -->
<section class="grid">
  <article class="card">
    <div class="cardhead"><h2>TODAY</h2><span class="pill" id="today-count">—</span></div>
    <div id="today"></div>
  </article>
  <article class="card">
    <div class="cardhead"><h2>THIS WEEK</h2><span class="tag" id="week-count">—</span></div>
    <div class="week" id="week"></div>
  </article>
</section>

<!-- 보조 카드 -->
<section class="grid" style="margin-top:14px">
  <article class="card">
    <div class="cardhead"><h2>HABITS</h2><span class="meta">this week</span></div>
    <div class="habits">
      <div class="habit hot"><strong>4</strong>deep work</div>
      <div class="habit"><strong>3</strong>운동</div>
      <div class="habit"><strong>5</strong>기록</div>
    </div>
  </article>
  <article class="card">
    <div class="cardhead"><h2>WEEKLY REVIEW</h2><span class="meta">sun 23:00</span></div>
    <p class="note">이번 주에 배운 것과<br>다음 주에 놓지 않을 한 가지.</p>
  </article>
  <article class="card focus wide">
    <div class="cardhead"><h2>SEPTEMBER FOCUS</h2><span class="pill">in orbit</span></div>
    <p>데이터로 문제를 읽고,<br><span style="color:var(--cyan)">작은 결과물로 증명하기.</span></p>
  </article>
</section>

<!-- 2. 학습 프로젝트 -->
<section class="block">
  <div class="blockhead">
    <h2>LEARNING PROJECTS</h2>
    <span class="sub">학원수업 아카이브 · 상태를 눌러 변경</span>
  </div>
  <div class="projgrid" id="projects"></div>
</section>

<!-- 2-b. 노션 프로젝트 보관소 (연동됐을 때만 노출) -->
<section class="block" id="notion-block" hidden>
  <div class="blockhead">
    <h2>PROJECT ARCHIVE</h2>
    <span class="sub">노션 프로젝트 보관소</span>
  </div>
  <div class="projgrid" id="notion-projects"></div>
</section>

<!-- 3. AI 학습 경로 -->
<section class="block">
  <div class="blockhead">
    <h2>AI LEARNING PATH</h2>
    <span class="sub">젠스파크 AI 강의 · Notion</span>
  </div>
  <div class="aigrid" id="ai"></div>
</section>

<!-- 4. 자료 아카이브 -->
<section class="block">
  <div class="blockhead">
    <h2>ARCHIVE</h2>
    <span class="sub">개인 전용 · 기본 비공개</span>
  </div>
  <div class="arcgrid" id="archive"></div>
</section>

</main>

<!-- 빌드 시 sync-notion.mjs 결과가 주입된다. 연동 전에는 null. -->
<script id="synced" type="application/json">null</script>

<script>
(function () {
  "use strict";

  var STORE = "hw.dashboard.v1";
  var CYCLE = { todo: "doing", doing: "done", done: "todo" };
  var LABEL = { todo: "시작 전", doing: "진행 중", done: "완료" };

  var DATA = {
    today: [
      { id: "t1", text: "가장 중요한 일 하나 끝내기", meta: "09:00" },
      { id: "t2", text: "빅데이터분석기사 학습", meta: "60 min" },
      { id: "t3", text: "채용 일정 확인하기", meta: "15 min" }
    ],
    week: [
      { text: "빅분기 1과목 복습", tag: "study" },
      { text: "지원 현황 정리", tag: "career" },
      { text: "프로젝트 등록", tag: "build" }
    ],
    projects: [
      { id: "basic", name: "데이터분석 기초", tech: "NumPy · Pandas · 전처리 · 시각화 · 통계",
        status: "done", updated: "2026-09-01", count: 54,
        files: ["LAB 1-1. Numpy 시작하기", "LAB 1-4 ndarray 형태 변환", "LAB 4-3 데이터 정제 - 결측치",
                "LAB 7-1 LinePlot", "LAB 10-11 회귀분석", "LAB 10-15 시계열 분석",
                "Apple Quality", "Diamonds", "Insurance"] },
      { id: "gis", name: "GIS", tech: "QGIS · 서울 공간데이터 · shapefile",
        status: "done", updated: "2026-01-09", count: 20,
        files: ["LAB 9. QGIS 데이터 활용", "송파구-맥도날드-서비스영역 분석",
                "송파구 지하철역 도보 5분 공동주택", "송파구-긴급위험지역 (P2L)",
                "강남구 지진해일대피소", "서울시 구경계", "서울시 응급실 위치정보"] },
      { id: "ml", name: "머신러닝", tech: "회귀 · 분류 · 군집 · 앙상블 · 시계열",
        status: "doing", updated: "2026-03-18", count: 40,
        files: ["LAB 2. 군집분석 (K-Means)", "LAB 7. PCA", "LAB 23. 지도학습-RandomForest",
                "LAB 25. 지도학습-XGboost", "LAB 29. 로지스틱-선형 SHAP",
                "LAB 36. AutoARIMA", "LAB 38. 시계열-Prophet", "LAB 39. 코인예측", "Final Project"] },
      { id: "dl", name: "딥러닝", tech: "인공신경망 · 튜닝 · 결과 해석",
        status: "doing", updated: "2026-03-10", count: 5,
        files: ["LAB 1. 딥러닝 - 인공신경망", "LAB 2. 다중선형 + 튜닝 + 결과해석",
                "LAB 3. 인공신경망-이항분류", "LAB 4. 인공신경망-다항분류",
                "LAB 5. 비정형-다항분류 (이미지 2,498장)"] }
    ],
    ai: [
      { id: "ai1", num: "01", title: "기초", topic: "검색과 대화의 시작", status: "done",
        url: "https://jolly-shrine-63f.notion.site/1-2e0e4917eeaa83b1beda81c99936dd50" },
      { id: "ai2", num: "02", title: "이미지 & 디자인", topic: "시각 콘텐츠 제작", status: "doing",
        url: "https://jolly-shrine-63f.notion.site/2-AI-e89e4917eeaa83c2835701fe13c28780" },
      { id: "ai3", num: "03", title: "문서 & 영상", topic: "PPT부터 숏폼까지", status: "todo",
        url: "https://jolly-shrine-63f.notion.site/3-AI-PPT-3fee4917eeaa821882a6813091d299c8" },
      { id: "ai4", num: "04", title: "고급 활용", topic: "리서치 · 자동화 · 개발", status: "todo",
        url: "https://jolly-shrine-63f.notion.site/4-AI-0a0e4917eeaa8311a32081ad314dfb8f" }
    ],
    archive: [
      { name: "태블로 교육자료", note: "개인정보 블러 처리본 · 165p", href: "/tableau-training-redacted.pdf" },
      { name: "빅분기 요약본", note: "필기 정리 · 오답 노트" },
      { name: "장기요양 데이터셋", note: "급여 통계 · 대시보드 원본" }
    ]
  };

  // ── 노션 동기화 데이터 병합 ────────────────
  // 빌드 때 주입된 값이 있으면 목업 위에 덮어쓴다. 없으면 목업 그대로 동작한다.
  var SYNCED = (function () {
    try {
      var el = document.getElementById("synced");
      return el ? JSON.parse(el.textContent) : null;
    } catch (e) { return null; }
  })();

  if (SYNCED) {
    if (SYNCED.ai && SYNCED.ai.length) {
      SYNCED.ai.forEach(function (row) {
        for (var i = 0; i < DATA.ai.length; i++) {
          if (DATA.ai[i].id !== row.id) continue;
          if (row.title) DATA.ai[i].title = row.title;
          if (row.status) DATA.ai[i].status = row.status;
          if (row.url) DATA.ai[i].url = row.url;
          break;
        }
      });
    }
    if (SYNCED.tasks && SYNCED.tasks.length) {
      DATA.today = SYNCED.tasks.slice(0, 6).map(function (t) {
        return { id: t.id, text: t.text, meta: t.due || "", done: !!t.done };
      });
    }
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
    catch (e) { return {}; }
  }
  function save() {
    state.syncedAt = Date.now();
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
    paintSync();
  }

  var state = load();
  if (!state.today) state.today = {};
  if (!state.status) state.status = {};

  function statusOf(id, fallback) { return state.status[id] || fallback; }

  function $(id) { return document.getElementById(id); }

  function renderToday() {
    var host = $("today");
    host.innerHTML = "";
    var done = 0;
    DATA.today.forEach(function (t) {
      // 내가 직접 토글한 값이 있으면 그것이 우선, 없으면 노션 값을 초기값으로
      var isDone = Object.prototype.hasOwnProperty.call(state.today, t.id)
        ? !!state.today[t.id]
        : !!t.done;
      if (isDone) done++;
      var row = document.createElement("div");
      row.className = "task" + (isDone ? " done" : "");
      row.setAttribute("role", "button");
      row.setAttribute("tabindex", "0");
      row.innerHTML = '<i class="check"></i><span class="tasktext"></span><span class="meta"></span>';
      row.querySelector(".tasktext").textContent = t.text;
      row.querySelector(".meta").textContent = t.meta;
      function toggle() {
        // 저장값이 없으면 노션에서 온 초기값을 기준으로 뒤집는다.
        // (그냥 state 만 뒤집으면 노션이 완료로 준 항목의 첫 클릭이 먹히지 않는다)
        state.today[t.id] = !isDone;
        save();
        renderToday();
      }
      row.addEventListener("click", toggle);
      row.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
      host.appendChild(row);
    });
    $("today-count").textContent = done + " / " + DATA.today.length;
  }

  function renderWeek() {
    var host = $("week");
    host.innerHTML = "";
    DATA.week.forEach(function (w) {
      var el = document.createElement("div");
      el.className = "weekitem";
      el.innerHTML = "<b></b><span class=\\"tag\\"></span>";
      el.querySelector("b").textContent = w.text;
      el.querySelector(".tag").textContent = w.tag;
      host.appendChild(el);
    });
    $("week-count").textContent = "0" + DATA.week.length + " goals";
  }

  function statusButton(id, fallback, onChange) {
    var btn = document.createElement("button");
    btn.className = "status";
    function paint() {
      var s = statusOf(id, fallback);
      btn.dataset.s = s;
      btn.textContent = LABEL[s];
      btn.setAttribute("aria-label", "상태: " + LABEL[s] + ", 눌러서 변경");
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      state.status[id] = CYCLE[statusOf(id, fallback)];
      save();
      paint();
      onChange();
    });
    paint();
    return btn;
  }

  function renderProjects() {
    var host = $("projects");
    host.innerHTML = "";
    DATA.projects.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "proj";
      card.innerHTML =
        '<div class="projtop"><div><h3 class="projname"></h3><p class="projtech"></p></div>' +
        '<span class="meta"></span></div>' +
        '<div class="projfoot"></div>' +
        '<div class="files"></div>';
      card.querySelector(".projname").textContent = p.name;
      card.querySelector(".projtech").textContent = p.tech;
      card.querySelector(".projtop .meta").textContent = p.updated;

      function sync() { card.classList.toggle("is-done", statusOf(p.id, p.status) === "done"); }

      var files = card.querySelector(".files");
      p.files.forEach(function (f) {
        var d = document.createElement("div");
        d.className = "file";
        d.textContent = f;
        files.appendChild(d);
      });
      if (p.count > p.files.length) {
        var rest = document.createElement("div");
        rest.className = "filemore";
        rest.textContent = "외 " + (p.count - p.files.length) + "개";
        files.appendChild(rest);
      }

      var foot = card.querySelector(".projfoot");
      foot.appendChild(statusButton(p.id, p.status, sync));

      var more = document.createElement("button");
      more.className = "more";
      more.textContent = "상세보기 · " + p.count + "개";
      more.setAttribute("aria-expanded", "false");
      more.addEventListener("click", function () {
        var open = files.classList.toggle("open");
        more.setAttribute("aria-expanded", String(open));
        more.textContent = open ? "접기" : "상세보기 · " + p.count + "개";
      });
      foot.appendChild(more);

      sync();
      host.appendChild(card);
    });
  }

  function renderAI() {
    var host = $("ai");
    host.innerHTML = "";
    DATA.ai.forEach(function (a) {
      var card = document.createElement("article");
      card.className = "ai";
      card.innerHTML =
        '<div class="ainum"></div><h3 class="aititle"></h3><p class="aitopic"></p>' +
        '<a class="ailink" target="_blank" rel="noopener noreferrer">Notion 열기 ↗</a>';
      card.querySelector(".ainum").textContent = "PART " + a.num;
      card.querySelector(".aititle").textContent = a.title;
      card.querySelector(".aitopic").textContent = a.topic;
      card.querySelector(".ailink").href = a.url;

      function sync() { card.classList.toggle("is-done", statusOf(a.id, a.status) === "done"); }
      card.appendChild(statusButton(a.id, a.status, sync));
      sync();
      host.appendChild(card);
    });
  }

  // 노션에서 온 프로젝트 보관소. 상태의 원본은 노션이라 여기선 읽기 전용으로 보여준다.
  function renderNotionProjects() {
    var rows = SYNCED && SYNCED.projects;
    if (!rows || !rows.length) return;

    var host = $("notion-projects");
    host.innerHTML = "";
    rows.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "proj" + (p.status === "done" ? " is-done" : "");
      card.innerHTML =
        '<div class="projtop"><div><h3 class="projname"></h3><p class="projtech"></p></div>' +
        '<span class="meta"></span></div><div class="projfoot"></div>';
      card.querySelector(".projname").textContent = p.name;
      card.querySelector(".projtech").textContent = p.category || "";
      card.querySelector(".projtop .meta").textContent = p.edited || "";

      var foot = card.querySelector(".projfoot");
      var chip = document.createElement("span");
      chip.className = "status";
      chip.dataset.s = p.status;
      chip.textContent = LABEL[p.status];
      foot.appendChild(chip);

      if (p.url) {
        var link = document.createElement("a");
        link.className = "projlink";
        link.href = p.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "노션에서 열기 ↗";
        foot.appendChild(link);
      }
      host.appendChild(card);
    });
    $("notion-block").hidden = false;
  }

  function renderArchive() {
    var host = $("archive");
    host.innerHTML = "";
    DATA.archive.forEach(function (a) {
      var el = document.createElement("div");
      el.className = "arc";
      el.innerHTML = "<b></b><small></small>" + (a.href ? "<a class=\\"projlink\\" target=\\"_blank\\" rel=\\"noreferrer\\">자료 열기 ↗</a>" : "") + "<span class=\\"lock\\">비공개 · 로컬 보관</span>";
      el.querySelector("b").textContent = a.name;
      el.querySelector("small").textContent = a.note;
      if (a.href) el.querySelector("a").href = a.href;
      host.appendChild(el);
    });
  }

  function paintSync() {
    var el = $("sync");
    var parts = [];

    if (SYNCED && SYNCED.syncedAt) {
      parts.push("노션 " + new Intl.DateTimeFormat("ko-KR",
        { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" })
        .format(new Date(SYNCED.syncedAt)));
    } else {
      parts.push("로컬 데이터");
    }

    if (state.syncedAt) {
      parts.push("내 변경 " + new Intl.DateTimeFormat("ko-KR",
        { hour: "2-digit", minute: "2-digit" }).format(new Date(state.syncedAt)));
    }

    el.textContent = parts.join(" · ");
  }

  function paintDate() {
    $("today-date").textContent = new Intl.DateTimeFormat("ko-KR",
      { year: "numeric", month: "long", day: "numeric", weekday: "long" }).format(new Date());
  }

  paintDate();
  renderToday();
  renderWeek();
  renderProjects();
  renderNotionProjects();
  renderAI();
  renderArchive();
  paintSync();
})();
</script>
</body>
</html>
`;
export default {
  async fetch() {
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
};
