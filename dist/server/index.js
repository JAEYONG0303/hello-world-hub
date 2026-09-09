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

/* 커리어·역량 지도 */
.careerhero{display:grid;grid-template-columns:1.1fr .9fr;gap:14px}
.careerlead{background:linear-gradient(135deg,#1b1838,#101827);border:1px solid #51418b;border-radius:16px;padding:22px}
.careerlead .label{display:block;margin-bottom:12px}.careerlead h3{font-size:clamp(22px,4vw,34px);line-height:1.15;letter-spacing:-.045em;margin:0}.careerlead p{color:#b6bdd8;margin:14px 0 0;max-width:600px}
.careerstats{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.careerstat{border:1px solid var(--line);border-radius:14px;padding:16px;background:#101324}.careerstat b{display:block;color:var(--cyan);font-size:21px;margin-bottom:4px}.careerstat span{color:var(--muted);font-size:11px}
.careergrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}.careeritem{border:1px solid var(--line);border-radius:13px;padding:15px;background:#101324}.careeritem b{display:block;font-size:13px;margin-bottom:5px}.careeritem span{color:var(--muted);font-size:11px;line-height:1.55}
.careercols{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.careerpanel{border:1px solid var(--line);border-radius:14px;padding:18px;background:#0e1120}.careerpanel h3{font-size:12px;letter-spacing:.1em;color:var(--violet);margin:0 0 12px}.careerpanel ol,.careerpanel ul{margin:0;padding-left:19px;color:#c5cbe4;font-size:12px}.careerpanel li{margin:8px 0}.careerlink{display:inline-block;margin-top:14px;color:var(--cyan);font-size:12px;text-decoration:none}.careerlink:hover{text-decoration:underline}.careerfoot{margin-top:14px;color:#6f7694;font-size:10px;line-height:1.6}

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

/* AI FUTURE & CAREER */
.afc{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.afc .wide{grid-column:1/-1}
.afc .card h2{display:flex;align-items:center;gap:8px}
.afchead{background:linear-gradient(135deg,#1b1838,#101827);border-color:#51418b}
.afchead p{font-size:16px;line-height:1.5;letter-spacing:-.02em;margin:0;color:#e6e8ff}
.afcmeta{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;font-size:11px;color:var(--muted)}.afcmeta span{border:1px solid #29304a;border-radius:99px;padding:5px 9px;background:#101326aa}
.fc{display:grid;gap:8px;margin-top:16px}
.fcrow{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;padding:10px 12px;background:#101324;border:1px solid var(--line);border-radius:11px}
.fcrow b{font-size:13px;font-weight:600}.fcrow small{display:block;color:var(--muted);font-size:11px;margin-top:3px}
.prob{display:flex;align-items:center;gap:8px;min-width:150px}
.bar{flex:1;height:6px;background:#1c2033;border-radius:99px;overflow:hidden}.bar i{display:block;height:100%;background:linear-gradient(90deg,var(--violet),var(--cyan))}
.prob strong{font-size:14px;color:var(--cyan);min-width:38px;text-align:right}
.conf{font-size:10px;color:var(--muted);border:1px solid #29304a;border-radius:99px;padding:2px 7px}
.conf[data-c="high"]{color:var(--green);border-color:#335841}.conf[data-c="low"]{color:var(--orange);border-color:#6b4f2b}
.tbl{width:100%;border-collapse:collapse;font-size:12px}.tbl th{color:var(--violet);font-size:10px;letter-spacing:.1em;text-align:left;padding:6px 8px;border-bottom:1px solid #252a40;font-weight:800}
.tbl td{padding:9px 8px;border-bottom:1px solid #171b2b;vertical-align:top;color:#c5cbe4;line-height:1.5}.tbl tr:last-child td{border-bottom:0}
.tbl td:first-child{color:#8b91ad}.tbl .impact{color:var(--cyan)}
.tblwrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
.sig{padding:12px 0;border-top:1px solid #20243a}.sig:first-child{border-top:0;padding-top:0}
.sig b{font-size:13px}.sig a{color:var(--cyan);text-decoration:none}.sig a:hover{text-decoration:underline}
.sig .meta{display:block;margin-top:4px}.sig p{margin:6px 0 0;color:#c5cbe4;font-size:12px}
.imp{font-size:10px;border-radius:99px;padding:2px 8px;border:1px solid;margin-left:6px}
.imp[data-i="strengthen"]{color:var(--green);border-color:#335841}.imp[data-i="weaken"]{color:var(--orange);border-color:#6b4f2b}.imp[data-i="neutral"]{color:var(--muted);border-color:#29304a}
.empty{color:#6d7391;font-size:12px;padding:8px 0}
.skill{padding:12px 0;border-top:1px solid #20243a;display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:start}.skill:first-child{border-top:0;padding-top:0}
.skill .num{color:var(--violet);font-weight:800;font-size:12px;padding-top:2px}
.skill b{font-size:13px}.skill .row{color:#aeb4d0;font-size:11px;margin-top:4px;line-height:1.55}.skill .row em{color:#6d7391;font-style:normal}
.skill .status{margin-top:0}
.rm{padding:12px 0;border-top:1px solid #20243a;display:grid;grid-template-columns:64px 1fr auto;gap:12px;align-items:start}.rm:first-child{border-top:0;padding-top:0}
.rm .wk{color:var(--cyan);font-weight:800;font-size:12px;padding-top:2px}
.rm .row{color:#aeb4d0;font-size:11px;margin-top:4px;line-height:1.55}.rm .row em{color:#6d7391;font-style:normal}
.ckbar{display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap}
.ckbar select{background:#101324;color:var(--text);border:1px solid #2b3149;border-radius:9px;padding:8px 10px;font:inherit;font-size:12px;min-height:36px}
.ckgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.ckgroup h4{margin:0 0 6px;font-size:11px;letter-spacing:.1em;color:var(--violet)}
.ck{display:flex;gap:8px;align-items:center;padding:6px 0;font-size:12px;color:#c5cbe4;cursor:pointer;min-height:30px}
.ck .check{width:15px;height:15px}.ck.done .check{background:var(--violet);border-color:var(--violet);box-shadow:inset 0 0 0 3px #17172a}.ck.done span{color:#777d99;text-decoration:line-through}
.log{padding:10px 0;border-top:1px solid #20243a;font-size:12px;color:#c5cbe4}.log:first-child{border-top:0;padding-top:0}.log b{color:var(--cyan);margin-right:8px}.log .meta{display:block;margin-top:3px}
.ctoday .task{padding:10px 0;min-height:40px}
@media(max-width:980px){
 .aigrid{grid-template-columns:repeat(2,1fr)}
 .ckgrid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:760px){
 .wrap{padding:22px 16px 56px}
 .top{margin-bottom:30px}
 .intro{display:block}
 .subtitle{margin-top:15px}
 .grid{grid-template-columns:1fr}
 .wide{grid-column:auto}
 .projgrid,.aigrid,.arcgrid{grid-template-columns:1fr}
 .careerhero,.careercols{grid-template-columns:1fr}
 .careergrid{grid-template-columns:1fr 1fr}
 .afc,.ckgrid{grid-template-columns:1fr}
 .afc .wide{grid-column:auto}
 .fcrow{grid-template-columns:1fr}.prob{min-width:0}
 .skill{grid-template-columns:auto 1fr}.skill .status{grid-column:2;justify-self:start}
 .rm{grid-template-columns:1fr}.rm .status{justify-self:start}
 /* 충돌표: 좁은 화면에서는 행을 세로로 쌓고 열 이름을 라벨로 붙인다 */
 .tbl thead{display:none}
 .tbl tr{display:block;padding:12px 0;border-bottom:1px solid #20243a}.tbl tr:last-child{border-bottom:0}
 .tbl td{display:block;padding:4px 0;border:0;font-size:12px}
 .tbl td:before{content:attr(data-h);display:block;color:var(--violet);font-size:10px;letter-spacing:.1em;font-weight:800;margin-bottom:2px}
 .block{margin-top:34px}
 .more,.status{min-height:44px;padding-left:16px;padding-right:16px}
 .ailink{min-height:44px;line-height:44px}
}
@media(max-width:480px){.careergrid,.careerstats{grid-template-columns:1fr}}
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

<!-- 2-c. 커리어·역량 지도 -->
<section class="block" id="career-skills">
  <div class="blockhead">
    <h2>CAREER &amp; SKILLS</h2>
    <span class="sub">질문 기록 · 시장 분석 · 90일 로드맵</span>
  </div>
  <div class="careerhero">
    <article class="careerlead">
      <span class="label">CURRENT DIRECTION</span>
      <h3>행정을 이해하고<br><span style="color:var(--cyan)">데이터로 개선하는 사람</span></h3>
      <p>보건·공공·대학 행정의 업무 맥락에 데이터 분석과 반복 업무 자동화를 결합하는 운영·기획형 포지션.</p>
    </article>
    <div class="careerstats">
      <div class="careerstat"><b>6개</b><span>반복 질문 카테고리</span></div>
      <div class="careerstat"><b>2개</b><span>공개 분석 프로젝트</span></div>
      <div class="careerstat"><b>1순위</b><span>보건·공공·대학 행정</span></div>
      <div class="careerstat"><b>90일</b><span>역량 연결 계획</span></div>
    </div>
  </div>
  <div class="careergrid" aria-label="질문 카테고리">
    <div class="careeritem"><b>취업·진로</b><span>병원·대학·공공기관 지원, 공고 탐색, 자기소개서와 면접</span></div>
    <div class="careeritem"><b>보건의료</b><span>병원 경영성과 논문, 의료기관 회계, 장기요양보험</span></div>
    <div class="careeritem"><b>데이터 프로젝트</b><span>장기요양·팜랜드·헬스뷰티·이커머스 행동 로그</span></div>
    <div class="careeritem"><b>통계·자격</b><span>다중회귀, 기초통계, 빅데이터분석기사, 사회조사분석사</span></div>
    <div class="careeritem"><b>SQL·개발</b><span>MySQL, BigQuery, Python, GitHub, HTML 대시보드</span></div>
    <div class="careeritem"><b>AI·자동화</b><span>행정 파일 취합·검증, 내부 데이터 보안, 에이전트 활용</span></div>
  </div>
  <div class="careercols">
    <article class="careerpanel">
      <h3>MARKET FIT</h3>
      <ul>
        <li>행정 채용의 기본은 Excel·문서 작성·규정 이해와 조정 능력.</li>
        <li>의료행정 직무기술서에는 데이터 분석과 전산 활용이 함께 요구됨.</li>
        <li>현재 강점은 순수 개발보다 보건의료 맥락을 아는 분석·운영에 있음.</li>
        <li>지원 직무: 기획, 성과관리, 사업운영, 통계, 연구행정.</li>
      </ul>
      <a class="careerlink" href="https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18662" target="_blank" rel="noopener noreferrer">채용시장 근거 보기 ↗</a>
    </article>
    <article class="careerpanel">
      <h3>NEXT 90 DAYS</h3>
      <ol>
        <li>지원 공고 20건을 모아 반복 업무와 우대역량 코딩</li>
        <li>프로그래머스 MySQL 중급 30문제와 Excel Power Query</li>
        <li>대학·병원 행정 파일 취합 자동화 사례 1개 완성</li>
        <li>논문·프로젝트·자동화를 STAR 면접 사례 4개로 변환</li>
      </ol>
    </article>
  </div>
  <p class="careerfoot">현재 앱에서 조회 가능한 대화·프로젝트 기록과 고용노동부·한국고용정보원 자료, 대표 의료행정 직무기술서를 바탕으로 정리. 전국 모든 채용공고를 계량 분석한 결과는 아님.</p>
</section>

<!-- 2-d. AI 미래 전망 × 커리어 준비 (원본: content/career-ai.json) -->
<section class="block" id="ai-future-career">
  <div class="blockhead">
    <h2>AI FUTURE &amp; CAREER</h2>
    <span class="sub" id="afc-sub">2026 → 2031 전망 · 역량 격차 · 90일 로드맵</span>
  </div>
  <div class="afc" id="afc">
    <article class="card afchead wide">
      <div class="cardhead"><h2>2031 AI 전망</h2><span class="pill" id="afc-updated">—</span></div>
      <p id="afc-headline"></p>
      <div class="afcmeta" id="afc-meta"></div>
      <div class="fc" id="afc-forecasts"></div>
    </article>
    <article class="card wide">
      <div class="cardhead"><h2>전망 충돌표</h2><span class="meta">기존 전망 vs 수정된 판단</span></div>
      <div class="tblwrap"><table class="tbl" id="afc-conflicts"></table></div>
    </article>
    <article class="card">
      <div class="cardhead"><h2>시장 신호</h2><span class="tag" id="afc-signal-count">—</span></div>
      <div id="afc-signals"></div>
    </article>
    <article class="card ctoday">
      <div class="cardhead"><h2>CAREER TODAY</h2><span class="pill" id="afc-today-count">—</span></div>
      <div id="afc-today"></div>
    </article>
    <article class="card wide">
      <div class="cardhead"><h2>MY SKILL GAP</h2><span class="meta">우선순위 · 상태를 눌러 변경</span></div>
      <div id="afc-skills"></div>
    </article>
    <article class="card wide">
      <div class="cardhead"><h2>90 DAY ROADMAP</h2><span class="tag" id="afc-roadmap-count">—</span></div>
      <div id="afc-roadmap"></div>
    </article>
    <article class="card wide">
      <div class="cardhead"><h2>VALIDATION CHECKLIST</h2><span class="meta" id="afc-ck-def"></span></div>
      <div class="ckbar"><label class="meta" for="afc-ck-project">프로젝트</label><select id="afc-ck-project"></select><span class="meta" id="afc-ck-count"></span></div>
      <div class="ckgrid" id="afc-checklist"></div>
    </article>
    <article class="card wide">
      <div class="cardhead"><h2>CHANGE LOG</h2><span class="meta" id="afc-log-count"></span></div>
      <div id="afc-changelog"></div>
    </article>
  </div>
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
<!-- 빌드 시 content/career-ai.json 이 주입된다. 로컬 미리보기(null)에서는 fetch 로 같은 파일을 읽는다. -->
<script id="career-ai" type="application/json">{"meta":{"title":"AI FUTURE & CAREER","baseline_year":2026,"horizon_year":2031,"version":1,"updated":"2026-09-09","owner":"재용","note":"이 파일이 화면(index.html)과 CAREER_AI_FORECAST.md 의 단일 원본이다. 수정은 여기서만 한다."},"headline":"AI는 인간처럼 모든 일을 독립적으로 수행하는 존재보다, 컴퓨터 안에서 여러 도구를 사용해 실제 업무를 처리하는 디지털 실무자 방향으로 발전할 가능성이 높다. 그러나 완전히 믿고 맡길 수 있는 직원보다는 빠르고 유능하지만 감독과 검증이 필요한 실무자에 가까울 것이다.","forecasts":[{"id":"F1","title":"문서·코드·브라우저·업무 프로그램을 오가며 과업 실행","probability":90,"confidence":"high","change":"챗봇에서 실제 작업을 수행하는 에이전트로 이동","updated":"2026-09-09"},{"id":"F2","title":"기업 내부 데이터와 연결된 사내 에이전트 확산","probability":85,"confidence":"high","change":"범용 AI보다 회사 규정·문서·시스템과 연결된 AI가 중요해짐","updated":"2026-09-09"},{"id":"F3","title":"AI 가격 하락과 중소형 모델의 일상 업무 투입","probability":85,"confidence":"high","change":"모든 업무에 가장 큰 모델을 쓰지 않고 난이도별 모델을 배치","updated":"2026-09-09"},{"id":"F4","title":"사무직의 업무 구성과 신입 역할 변화","probability":75,"confidence":"medium","change":"반복 업무는 줄고 검증·예외 처리·조정 책임은 커짐","updated":"2026-09-09"},{"id":"F5","title":"몇 시간에서 며칠짜리 디지털 업무의 제한적 자율 수행","probability":65,"confidence":"medium","change":"조건: 목표, 입력, 권한, 완료 기준이 명확한 업무","updated":"2026-09-09"},{"id":"F6","title":"사람 감독 없이 일반 사무직 전체 대체","probability":25,"confidence":"medium","change":"25% 이하로 본다","updated":"2026-09-09"},{"id":"F7","title":"대부분의 지식노동자가 5년 안에 실직","probability":15,"confidence":"medium","change":"15% 이하로 본다","updated":"2026-09-09"}],"conflicts":[{"id":"C1","old":"모델이 커질수록 가장 큰 모델이 대부분의 업무를 차지할 것이다.","evidence":"비용·속도·개인정보·난이도에 따라 모델을 나눠 쓰는 배치가 일반화되는 중 (F3 관련 신호 추적)","revised":"비용, 속도, 개인정보, 업무 난이도에 따라 여러 모델이 나뉘어 사용된다. 기업 경쟁력은 모델 크기보다 데이터 품질, 권한 관리, 업무 연결에서 발생한다.","impact":"모델 지식보다 데이터 품질·권한·업무 연결을 설계하는 역량이 내 차별점이 된다."},{"id":"C2","old":"긴 컨텍스트는 인간과 같은 기억이 된다.","evidence":"컨텍스트 확장과 검색·권한이 붙은 외부 기억 시스템이 함께 발전 (F2 관련)","revised":"많은 정보를 넣는 것과 필요한 정보를 정확히 선택하는 것은 다르다. 출처, 권한, 검색 기록이 붙은 외부 기억 시스템이 중요하다.","impact":"문서·데이터에 출처와 권한을 붙여 정리하는 습관이 곧 AI 활용 준비다."},{"id":"C3","old":"모델이 충분히 발전하면 환각은 거의 사라진다.","evidence":"환각률은 감소하지만 0이 되지 않으며, 그럴듯한 오답 문제가 보고됨 (F4·F5 관련)","revised":"환각은 감소하지만 완전히 사라지기 어렵다. 모델이 똑똑해질수록 잘못된 답도 더 설득력 있게 표현할 수 있다. 독립 재검산과 출처 검증이 계속 필요하다.","impact":"검증 능력(재검산·출처 대조)이 내 핵심 역량이 된다."},{"id":"C4","old":"AI가 직업을 통째로 대체한다.","evidence":"직업 단위보다 과업 단위 자동화가 먼저 진행 (F4·F6·F7 관련)","revised":"직업보다 직업 안의 반복 과업이 먼저 자동화된다. 신입이 숙련되기 위해 수행하던 단순 업무가 줄어들 가능성이 크다. 결과 검증, 예외 처리, 이해관계자 조정의 가치는 높아진다.","impact":"신입 시절 반복 업무로 배우던 것을 자동화 프로젝트와 검증 체크리스트로 대신 증명해야 한다."},{"id":"C5","old":"코딩을 몰라도 AI가 전부 만들어준다.","evidence":"생성은 쉬워졌지만 검토·보안·오류 판단은 사람 몫으로 남음 (F1·F5 관련)","revised":"문법 암기의 가치는 낮아질 수 있다. 코드, 데이터 구조, 보안, 오류를 읽고 검증하는 능력은 더 중요해진다.","impact":"SQL·Python 을 '쓰는' 것보다 '읽고 검증하는' 연습에 시간을 배분한다."}],"signals":[],"career":{"direction":"보건의료·공공·대학 행정을 이해하면서 데이터 분석과 업무 자동화를 수행하는 운영·기획형 인재","jobs":["병원 및 의료기관 행정","대학 행정 및 연구행정","공공기관 사업운영","기획 및 성과관리","통계 및 데이터 기반 행정","보건의료 데이터 운영","행정업무 자동화 및 디지털 전환 지원"],"strengths":["병원 경영성과 관련 석사논문","보건의료와 의료기관 구조 이해","다중회귀분석 경험","장기요양보험 데이터 분석","REES46 이커머스 행동 로그 EDA","대용량 데이터 표본 설계","세션·퍼널·리텐션·매출 하이라키 분석","Python 데이터 처리","Tableau 및 HTML 대시보드 제작","빅데이터분석기사 학습","AI 에이전트와 업무 자동화에 대한 관심"],"gaps":["Excel과 Power Query 실무","SQL 중급","행정업무 규칙 설계","데이터 검증 절차","자동화 전후 효과 측정","결과 보고와 이해관계자 커뮤니케이션","AI 사용 시 개인정보·권한·보안 관리"]},"validation_definition":{"statement":"정답 기준을 먼저 만들고, 입력 → 처리 → 결과를 단계별로 대조하며, 오류를 재현 가능한 형태로 설명하는 능력","areas":[{"name":"업무 규칙 정의","items":["조건, 예외, 기준일, 분모와 분자","판단 불가능한 경우를 별도로 분류"]},{"name":"입력 데이터 검사","items":["파일 수","전체 행 수","컬럼과 자료형","고유키 중복","필수 값 결측","값의 정상 범위","날짜 범위"]},{"name":"처리 과정 검사","items":["제외한 행 수와 이유","중복 제거 기준","조인 전후 행 수","집계 단위","예외 처리 기록"]},{"name":"결과 재검산","items":["Excel과 Python 결과 비교","전체 합계와 부서별 합계 비교","경계값 테스트","표본 수작업 대조","이전 기간과 증감 비교"]},{"name":"현실성 검토","items":["결과가 실제 업무 구조상 가능한지","예산, 인원, 기간, 규정과 충돌하지 않는지"]},{"name":"실행 기록과 복구","items":["읽은 파일","적용한 규칙","제외한 행","생성한 결과물","실행 전후 행 수","최종 승인자","원본 보존 여부"]}]},"skills":[{"id":"S1","priority":1,"skill":"Excel·Power Query","current":"기본 함수·피벗 사용","evidence":"SeSAC 과제, 장기요양 통계 정리","target":"같은 양식 학과별 Excel 파일 10개 이상을 자동 취합하고 누락·중복·형식 오류와 학과별 집계를 생성","next_action":"Power Query 폴더 병합으로 파일 10개 취합 실습","status":"doing","topics":["표와 구조화된 참조","XLOOKUP","SUMIFS·COUNTIFS","IF·IFS·IFERROR","피벗테이블","조건부 서식","데이터 유효성 검사","중복 및 결측 검사","날짜·문자열 정리","Power Query 폴더 병합"]},{"id":"S2","priority":2,"skill":"SQL","current":"SELECT·JOIN·GROUP BY 가능, 윈도우 함수 연습 중","evidence":"BigQuery sql_practice 데일리 5문제 (my agent)","target":"프로그래머스 MySQL 중급 30문제 + 문제별 분석 단위·고유키·분모·분자·중복 가능성 기록 + 주요 5문제 BigQuery 변환","next_action":"매일 /sql today 5문제, 풀이마다 검증 항목 기록","status":"doing","topics":["SELECT, WHERE, CASE","GROUP BY, HAVING","INNER JOIN, LEFT JOIN","서브쿼리와 CTE","날짜 및 문자열 함수","ROW_NUMBER, RANK, LAG","조건부 집계","중복 탐지","최신 레코드 선택"]},{"id":"S3","priority":3,"skill":"데이터 검증","current":"체크리스트 정의 완료, 프로젝트 적용 전","evidence":"VALIDATION CHECKLIST 카드","target":"모든 프로젝트에 입력·처리·결과 검증 체크리스트 적용","next_action":"장기요양·이커머스 프로젝트에 체크리스트 소급 적용(6주차)","status":"todo","topics":["입력: 원본 파일 수·행 수·컬럼·고유키·결측·범위·날짜","처리: 제외 행·중복 기준·조인 전후·집계 단위·예외","결과: 표본 대조·합계 재검산·이전 기간 비교·비정상 증감·범위와 한계"]},{"id":"S4","priority":4,"skill":"행정 자동화 프로젝트","current":"설계 단계","evidence":"my agent 모듈 D(대학 비교과 실적·수료 검증) 계획","target":"가짜 데이터로 입력 5종 → 출력 7종(통합 명단·오류 목록·수료 대상 초안·확인 필요 대상·학과별 집계·처리 로그·보고용 Excel)","next_action":"입력 파일 양식과 업무 규칙(수료 기준) 설계","status":"todo","topics":["입력: 학과별 신청자 명단·출석·필수 서류·프로그램별 수료 기준·학과 기준정보","출력: 통합 명단·누락/중복/형식 오류·수료 대상 초안·확인 필요 대상·학과별 실적·처리 로그·최종 보고 Excel"]},{"id":"S5","priority":5,"skill":"통계 기초","current":"빅분기 필기 수준","evidence":"빅데이터분석기사 학습, 다중회귀 논문","target":"아래 항목을 면접에서 예시와 함께 설명","next_action":"항목당 한 문단 설명 + 내 프로젝트 예시 연결","status":"doing","topics":["평균과 중앙값","표본과 모집단","표본 편향","상관관계와 인과관계","신뢰구간과 p-value","결측치와 이상치","회귀계수","과적합","분류 평가 지표","비율의 분모와 분자"]},{"id":"S6","priority":6,"skill":"AI 업무 위임과 보안","current":"my agent 프로젝트에서 규칙 적용 중","evidence":"CLAUDE.md 절대 규칙, PII 훅","target":"AI에게 맡길 때 목적·입력·규칙·예외·출력·검증·금지·승인 지점·개인정보 범위를 항상 명시","next_action":"위임 템플릿 1장 작성 후 모든 자동화에 첨부","status":"doing","topics":["목적","입력","업무 규칙","예외 처리","출력","검증 방법","임의 판단 금지 항목","사람의 최종 승인 지점","개인정보와 권한 범위"]}],"roadmap":[{"id":"R1","weeks":"1~2주","tasks":["Excel·Power Query 학습","학과별 파일 10개 자동 취합","결측·중복·형식 오류표 생성"],"deliverables":["취합 결과 Excel","오류표"],"done":"파일 10개가 한 번에 취합되고 오류표가 자동으로 나온다","status":"doing"},{"id":"R2","weeks":"3~5주","tasks":["프로그래머스 MySQL 중급 30문제","문제별 검증 항목 기록","BigQuery 문법 변환 연습"],"deliverables":["풀이 30건 + 검증 기록","BigQuery 변환 5건"],"done":"30문제 완료, 각 문제에 분석 단위·고유키·분모·분자·중복 가능성 기록","status":"doing"},{"id":"R3","weeks":"6주","tasks":["장기요양·이커머스 프로젝트에 검증 체크리스트 적용","분석 단위, 고유키, 제외 기준, 재검산 결과 명시"],"deliverables":["검증 절 추가된 프로젝트 문서 2건"],"done":"두 프로젝트 모두 입력·처리·결과 검증 절이 있다","status":"todo"},{"id":"R4","weeks":"7~10주","tasks":["대학 비교과 프로그램 실적 취합 자동화 프로젝트 완성","입력, 오류표, 결과표, 처리 로그, 사용 설명서 제작"],"deliverables":["실행 가능한 스크립트","오류표·결과표·처리 로그","사용 설명서"],"done":"설명서만 보고 제3자가 실행해 같은 결과를 얻는다","status":"todo"},{"id":"R5","weeks":"11주","tasks":["자동화 전후 작업 시간 비교","발견한 오류 수","사람이 확인해야 할 예외 수","업무 개선 효과 정리"],"deliverables":["효과 정리 1페이지"],"done":"전후 시간·오류 수·예외 수가 숫자로 적혀 있다","status":"todo"},{"id":"R6","weeks":"12주","tasks":["논문·프로젝트·자동화 경험을 STAR 면접 사례 4개로 작성","지원 기관에 따라 자기소개서 문장을 변형할 수 있게 정리"],"deliverables":["STAR 카드 4장","자소서 문장 변형표"],"done":"STAR 4장 각 2분 이내로 말할 수 있다","status":"todo"}],"checklist":{"projects":["대학 비교과 실적 자동화","장기요양 급여 분석","이커머스 행동 로그 EDA","채용공고 수집 파이프라인"],"groups":[{"id":"input","name":"입력 검증","items":["원본 파일 수","전체 행 수","컬럼과 자료형","고유키 중복","필수 값 결측","값의 범위","날짜 범위"]},{"id":"process","name":"처리 검증","items":["제외 행 수와 이유","중복 제거 기준","조인 전후 행 수","집계 단위","예외 처리"]},{"id":"result","name":"결과 검증","items":["표본 수작업 대조","전체 합계 재검산","이전 기간 비교","비정상적 증감 확인","분석 범위와 한계"]},{"id":"source","name":"출처 검증","items":["원문 URL 확인","발행기관 확인","발표일과 확인일 구분"]},{"id":"privacy","name":"개인정보 검증","items":["개인정보 컬럼 식별·마스킹","외부 AI 전송 여부 확인","권한 범위 기록"]},{"id":"approval","name":"사람 승인","items":["최종 승인자 지정","원본 보존 확인","실행 기록 남김"]}]},"today":[{"id":"c1","text":"프로그래머스 MySQL 문제 3개","meta":"/sql today"},{"id":"c2","text":"분석 단위·고유키·중복 가능성 기록","meta":"문제마다"},{"id":"c3","text":"Power Query로 같은 형식의 파일 여러 개 병합","meta":"실습"},{"id":"c4","text":"대학 비교과 실적 자동화 프로젝트의 입력 파일과 업무 규칙 설계","meta":"설계"}],"sources":{"trusted":["OpenAI Developers 및 공식 문서","Anthropic 공식 연구와 Economic Index","Stanford HAI AI Index","METR 연구","Epoch AI 연구","OECD AI 보고서","고용노동부","한국고용정보원","국가데이터처","ALIO 공식 채용공고","Work24 공식 채용정보"],"excluded":["출처 없는 블로그","광고성 AI 전망","유튜브 요약만 있는 자료","원문을 확인할 수 없는 재인용","작성일이나 발표일이 없는 게시물","커뮤니티의 확인되지 않은 주장"],"cadence":{"model_releases":"매일","labor_market":"주 1회","forecast_review":"월 1회","roadmap_progress":"매주"},"weights":{"official_docs_or_research":"high","government_statistics":"high","company_usage_data":"medium","expert_opinion":"low","single_case":"reference_only"},"max_probability_change_per_source":10},"changelog":[{"date":"2026-09-09","what":"AI FUTURE & CAREER 카테고리 최초 작성. 전망 7개, 충돌표 5개, 역량 6개, 90일 로드맵 6단계, 검증 체크리스트 6영역","forecast_changes":"없음(기준본)","probability_changes":"없음","reason":"2026-09-09 기준 전망 프롬프트를 기준본으로 채택","source":"사용자 작성 기준 문서"}]}</script>

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

  // ── AI FUTURE & CAREER ─────────────────────────
  // 원본은 content/career-ai.json 하나. 빌드 때 주입되면 그것을, 아니면(로컬 미리보기) fetch 로 읽는다.
  // 상태(역량·로드맵·체크리스트·오늘 할 일)는 같은 localStorage 키의 state.career 에 저장한다.
  if (!state.career) state.career = {};
  var C = state.career;
  if (!C.skills) C.skills = {};
  if (!C.roadmap) C.roadmap = {};
  if (!C.checklist) C.checklist = {};
  if (!C.today) C.today = {};

  function careerStatusButton(store, id, fallback, onChange) {
    var btn = document.createElement("button");
    btn.className = "status";
    function cur() { return store[id] || fallback; }
    function paint() {
      btn.dataset.s = cur();
      btn.textContent = LABEL[cur()];
      btn.setAttribute("aria-label", "상태: " + LABEL[cur()] + ", 눌러서 변경");
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      store[id] = CYCLE[cur()];
      save();
      paint();
      if (onChange) onChange();
    });
    paint();
    return btn;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function renderCareer(d) {
    if (!d || !d.forecasts) { $("afc-sub").textContent = "데이터를 불러오지 못했습니다 (content/career-ai.json)"; return; }
    var m = d.meta || {};
    $("afc-updated").textContent = "업데이트 " + (m.updated || "—");
    $("afc-headline").textContent = d.headline || "";
    var meta = $("afc-meta"); meta.innerHTML = "";
    [ "기준 " + m.baseline_year + " → " + m.horizon_year, "전망 " + d.forecasts.length + "개", "신호 " + (d.signals || []).length + "건", "v" + m.version ]
      .forEach(function (t) { meta.appendChild(el("span", "", t)); });

    // 1. 전망
    var fc = $("afc-forecasts"); fc.innerHTML = "";
    d.forecasts.forEach(function (f) {
      var row = el("div", "fcrow");
      var left = el("div"); left.appendChild(el("b", "", f.id + " · " + f.title));
      left.appendChild(el("small", "", f.change + " · 업데이트 " + f.updated));
      var prob = el("div", "prob");
      var bar = el("div", "bar"); var fill = el("i"); fill.style.width = f.probability + "%"; bar.appendChild(fill);
      prob.appendChild(bar); prob.appendChild(el("strong", "", f.probability + "%"));
      var conf = el("span", "conf", "신뢰 " + f.confidence); conf.dataset.c = f.confidence; prob.appendChild(conf);
      row.appendChild(left); row.appendChild(prob); fc.appendChild(row);
    });

    // 2. 충돌표
    var tb = $("afc-conflicts"); tb.innerHTML = "";
    var thead = el("thead"); var hr = el("tr");
    ["기존 전망", "현재 증거", "수정된 판단", "내게 미치는 영향"].forEach(function (h) { hr.appendChild(el("th", "", h)); });
    thead.appendChild(hr); tb.appendChild(thead);
    var tbody = el("tbody");
    var heads = ["기존 전망", "현재 증거", "수정된 판단", "내게 미치는 영향"];
    (d.conflicts || []).forEach(function (c) {
      var tr = el("tr");
      [c.old, c.evidence, c.revised, c.impact].forEach(function (v, i) {
        var td = el("td", i === 3 ? "impact" : "", v);
        td.setAttribute("data-h", heads[i]);  // 모바일 세로 배치용 라벨
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tb.appendChild(tbody);

    // 3. 시장 신호
    var sg = $("afc-signals"); sg.innerHTML = "";
    var signals = (d.signals || []).slice().sort(function (a, b) { return (b.published_at || "").localeCompare(a.published_at || ""); });
    $("afc-signal-count").textContent = signals.length + " signals";
    if (!signals.length) sg.appendChild(el("div", "empty", "아직 등록된 공식 자료가 없습니다. 수집 → 검토 → 반영 순서로 추가됩니다."));
    signals.slice(0, 8).forEach(function (s) {
      var box = el("div", "sig");
      var a = el("a"); a.href = s.source_url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.appendChild(el("b", "", s.title));
      box.appendChild(a);
      var imp = el("span", "imp", { strengthen: "강화", weaken: "약화", neutral: "중립" }[s.impact] || s.impact); imp.dataset.i = s.impact; box.appendChild(imp);
      box.appendChild(el("span", "meta", s.publisher + " · 발표 " + s.published_at + " · 확인 " + s.checked_at + " · " + s.forecast_id + " · 신뢰 " + s.confidence));
      box.appendChild(el("p", "", s.summary));
      sg.appendChild(box);
    });

    // 3-b. 오늘 할 일 (커리어)
    var td = $("afc-today"); td.innerHTML = ""; var doneN = 0;
    (d.today || []).forEach(function (t) {
      var isDone = !!C.today[t.id]; if (isDone) doneN++;
      var row = el("div", "task" + (isDone ? " done" : ""));
      row.setAttribute("role", "button"); row.setAttribute("tabindex", "0");
      row.appendChild(el("i", "check")); row.appendChild(el("span", "tasktext", t.text)); row.appendChild(el("span", "meta", t.meta || ""));
      function toggle() { C.today[t.id] = !isDone; save(); renderCareer(d); }
      row.addEventListener("click", toggle);
      row.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      td.appendChild(row);
    });
    $("afc-today-count").textContent = doneN + " / " + (d.today || []).length;

    // 4. 역량 격차
    var sk = $("afc-skills"); sk.innerHTML = "";
    (d.skills || []).slice().sort(function (a, b) { return a.priority - b.priority; }).forEach(function (s) {
      var row = el("div", "skill");
      row.appendChild(el("div", "num", s.priority + "순위"));
      var body = el("div"); body.appendChild(el("b", "", s.skill));
      var r1 = el("div", "row"); r1.innerHTML = "<em>현재</em> " + esc(s.current) + " · <em>증거</em> " + esc(s.evidence);
      var r2 = el("div", "row"); r2.innerHTML = "<em>목표</em> " + esc(s.target);
      var r3 = el("div", "row"); r3.innerHTML = "<em>다음 행동</em> " + esc(s.next_action);
      body.appendChild(r1); body.appendChild(r2); body.appendChild(r3);
      row.appendChild(body);
      row.appendChild(careerStatusButton(C.skills, s.id, s.status));
      sk.appendChild(row);
    });

    // 5. 90일 로드맵
    var rm = $("afc-roadmap"); rm.innerHTML = ""; var rmDone = 0;
    (d.roadmap || []).forEach(function (r) {
      if ((C.roadmap[r.id] || r.status) === "done") rmDone++;
      var row = el("div", "rm");
      row.appendChild(el("div", "wk", r.weeks));
      var body = el("div"); body.appendChild(el("b", "", r.tasks.join(" · ")));
      var r1 = el("div", "row"); r1.innerHTML = "<em>결과물</em> " + esc(r.deliverables.join(", "));
      var r2 = el("div", "row"); r2.innerHTML = "<em>완료 조건</em> " + esc(r.done);
      body.appendChild(r1); body.appendChild(r2);
      row.appendChild(body);
      row.appendChild(careerStatusButton(C.roadmap, r.id, r.status, function () { renderCareer(d); }));
      rm.appendChild(row);
    });
    $("afc-roadmap-count").textContent = rmDone + " / " + (d.roadmap || []).length + " done";

    // 6. 검증 체크리스트 (프로젝트별 저장)
    var ck = d.checklist || { projects: [], groups: [] };
    $("afc-ck-def").textContent = (d.validation_definition && d.validation_definition.statement) ? "\\"" + d.validation_definition.statement + "\\"" : "";
    var sel = $("afc-ck-project");
    if (!sel.options.length) {
      ck.projects.forEach(function (p) { var o = el("option", "", p); o.value = p; sel.appendChild(o); });
      sel.addEventListener("change", function () { C.ckProject = sel.value; save(); renderCareer(d); });
    }
    var project = C.ckProject && ck.projects.indexOf(C.ckProject) >= 0 ? C.ckProject : ck.projects[0];
    sel.value = project;
    if (!C.checklist[project]) C.checklist[project] = {};
    var grid = $("afc-checklist"); grid.innerHTML = ""; var ckTotal = 0, ckDone = 0;
    ck.groups.forEach(function (g) {
      var box = el("div", "ckgroup"); box.appendChild(el("h4", "", g.name));
      g.items.forEach(function (item, i) {
        var key = g.id + ":" + i; var on = !!C.checklist[project][key]; ckTotal++; if (on) ckDone++;
        var row = el("div", "ck" + (on ? " done" : "")); row.setAttribute("role", "checkbox"); row.setAttribute("aria-checked", String(on)); row.setAttribute("tabindex", "0");
        row.appendChild(el("i", "check")); row.appendChild(el("span", "", item));
        function toggle() { C.checklist[project][key] = !on; save(); renderCareer(d); }
        row.addEventListener("click", toggle);
        row.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
        box.appendChild(row);
      });
      grid.appendChild(box);
    });
    $("afc-ck-count").textContent = ckDone + " / " + ckTotal;

    // 7. 변경 이력
    var lg = $("afc-changelog"); lg.innerHTML = "";
    var logs = (d.changelog || []).slice().reverse();
    $("afc-log-count").textContent = logs.length + " changes";
    logs.slice(0, 10).forEach(function (c) {
      var row = el("div", "log");
      row.appendChild(el("b", "", c.date)); row.appendChild(document.createTextNode(c.what));
      row.appendChild(el("span", "meta", "전망 변경: " + (c.forecast_changes || "-") + " · 확률: " + (c.probability_changes || "-") + " · 이유: " + c.reason + " · 출처: " + c.source));
      lg.appendChild(row);
    });
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;" }[ch]; }); }

  function loadCareer() {
    var injected = null;
    try { var node = document.getElementById("career-ai"); injected = node ? JSON.parse(node.textContent) : null; } catch (e) { injected = null; }
    if (injected) { renderCareer(injected); return; }
    // 로컬 미리보기: 같은 원본 파일을 fetch 한다 (file:// 에서는 실패할 수 있음 → http.server 로 열 것)
    if (typeof fetch !== "function") { renderCareer(null); return; }
    fetch("content/career-ai.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(renderCareer)
      .catch(function () { renderCareer(null); });
  }

  paintDate();
  renderToday();
  renderWeek();
  renderProjects();
  renderNotionProjects();
  renderAI();
  renderArchive();
  paintSync();
  loadCareer();
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
