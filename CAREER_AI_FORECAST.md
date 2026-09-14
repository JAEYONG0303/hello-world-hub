# CAREER_AI_FORECAST — AI 미래 전망과 내 준비 기준 문서

> 생성물. 원본은 `content/career-ai.json` (v2, 마지막 업데이트 2026-09-09). 수정은 JSON 에서만 하고 `node gen-forecast-doc.mjs` 로 다시 만든다.
> 기준 시점 2026년, 전망 범위 2031년까지. 홈페이지 "AI FUTURE & CAREER" 카테고리와 같은 데이터다.

## 1. 나의 직무 방향

보건의료·공공·대학 행정을 이해하면서 데이터 분석과 업무 자동화를 수행하는 운영·기획형 인재

**추천 직무**
- 병원 및 의료기관 행정
- 대학 행정 및 연구행정
- 공공기관 사업운영
- 기획 및 성과관리
- 통계 및 데이터 기반 행정
- 보건의료 데이터 운영
- 행정업무 자동화 및 디지털 전환 지원

**현재 강점**
- 병원 경영성과 관련 석사논문
- 보건의료와 의료기관 구조 이해
- 다중회귀분석 경험
- 장기요양보험 데이터 분석
- REES46 이커머스 행동 로그 EDA
- 대용량 데이터 표본 설계
- 세션·퍼널·리텐션·매출 하이라키 분석
- Python 데이터 처리
- Tableau 및 HTML 대시보드 제작
- 빅데이터분석기사 학습
- AI 에이전트와 업무 자동화에 대한 관심

**보강이 필요한 부분**
- Excel과 Power Query 실무
- SQL 중급
- 행정업무 규칙 설계
- 데이터 검증 절차
- 자동화 전후 효과 측정
- 결과 보고와 이해관계자 커뮤니케이션
- AI 사용 시 개인정보·권한·보안 관리

## 2. AI 미래 전망 기준본

**핵심 결론**: AI는 인간처럼 모든 일을 독립적으로 수행하는 존재보다, 컴퓨터 안에서 여러 도구를 사용해 실제 업무를 처리하는 디지털 실무자 방향으로 발전할 가능성이 높다. 그러나 완전히 믿고 맡길 수 있는 직원보다는 빠르고 유능하지만 감독과 검증이 필요한 실무자에 가까울 것이다.

| ID | 전망 | 확률 | 신뢰 | 변화·조건 | 업데이트 |
|---|---|---|---|---|---|
| F1 | 문서·코드·브라우저·업무 프로그램을 오가며 과업 실행 | 90% | high | 챗봇에서 실제 작업을 수행하는 에이전트로 이동 | 2026-09-09 |
| F2 | 기업 내부 데이터와 연결된 사내 에이전트 확산 | 85% | high | 범용 AI보다 회사 규정·문서·시스템과 연결된 AI가 중요해짐 | 2026-09-09 |
| F3 | AI 가격 하락과 중소형 모델의 일상 업무 투입 | 85% | high | 모든 업무에 가장 큰 모델을 쓰지 않고 난이도별 모델을 배치 | 2026-09-09 |
| F4 | 사무직의 업무 구성과 신입 역할 변화 | 75% | medium | 반복 업무는 줄고 검증·예외 처리·조정 책임은 커짐 | 2026-09-09 |
| F5 | 몇 시간에서 며칠짜리 디지털 업무의 제한적 자율 수행 | 65% | medium | 조건: 목표, 입력, 권한, 완료 기준이 명확한 업무 | 2026-09-09 |
| F6 | 사람 감독 없이 일반 사무직 전체 대체 | 25% | medium | 25% 이하로 본다 | 2026-09-09 |
| F7 | 대부분의 지식노동자가 5년 안에 실직 | 15% | medium | 15% 이하로 본다 | 2026-09-09 |

## 3. 기존 전망과 충돌하는 지점

| 기존 전망 | 현재 증거 | 수정된 판단 | 내게 미치는 영향 |
|---|---|---|---|
| 모델이 커질수록 가장 큰 모델이 대부분의 업무를 차지할 것이다. | 비용·속도·개인정보·난이도에 따라 모델을 나눠 쓰는 배치가 일반화되는 중 (F3 관련 신호 추적) | 비용, 속도, 개인정보, 업무 난이도에 따라 여러 모델이 나뉘어 사용된다. 기업 경쟁력은 모델 크기보다 데이터 품질, 권한 관리, 업무 연결에서 발생한다. | 모델 지식보다 데이터 품질·권한·업무 연결을 설계하는 역량이 내 차별점이 된다. |
| 긴 컨텍스트는 인간과 같은 기억이 된다. | 컨텍스트 확장과 검색·권한이 붙은 외부 기억 시스템이 함께 발전 (F2 관련) | 많은 정보를 넣는 것과 필요한 정보를 정확히 선택하는 것은 다르다. 출처, 권한, 검색 기록이 붙은 외부 기억 시스템이 중요하다. | 문서·데이터에 출처와 권한을 붙여 정리하는 습관이 곧 AI 활용 준비다. |
| 모델이 충분히 발전하면 환각은 거의 사라진다. | 환각률은 감소하지만 0이 되지 않으며, 그럴듯한 오답 문제가 보고됨 (F4·F5 관련) | 환각은 감소하지만 완전히 사라지기 어렵다. 모델이 똑똑해질수록 잘못된 답도 더 설득력 있게 표현할 수 있다. 독립 재검산과 출처 검증이 계속 필요하다. | 검증 능력(재검산·출처 대조)이 내 핵심 역량이 된다. |
| AI가 직업을 통째로 대체한다. | 직업 단위보다 과업 단위 자동화가 먼저 진행 (F4·F6·F7 관련) | 직업보다 직업 안의 반복 과업이 먼저 자동화된다. 신입이 숙련되기 위해 수행하던 단순 업무가 줄어들 가능성이 크다. 결과 검증, 예외 처리, 이해관계자 조정의 가치는 높아진다. | 신입 시절 반복 업무로 배우던 것을 자동화 프로젝트와 검증 체크리스트로 대신 증명해야 한다. |
| 코딩을 몰라도 AI가 전부 만들어준다. | 생성은 쉬워졌지만 검토·보안·오류 판단은 사람 몫으로 남음 (F1·F5 관련) | 문법 암기의 가치는 낮아질 수 있다. 코드, 데이터 구조, 보안, 오류를 읽고 검증하는 능력은 더 중요해진다. | SQL·Python 을 '쓰는' 것보다 '읽고 검증하는' 연습에 시간을 배분한다. |

## 4. 시장 신호 (수집 자료)

| 날짜 | 기관 | 제목 | 분류 | 전망 | 영향 | 신뢰 | 확인일 |
|---|---|---|---|---|---|---|---|
| 2026-09-09 | 고용노동부 | ['26.8월 취업자수는 18.4만명 증가해 2개월 연속 두자릿수 증가](https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19906) | jobs | F7 | weaken | high | 2026-09-09 |
| 2026-09-09 | 고용노동부 | [인공지능(AI) 시대 새로운 사회계약, 우리 사회가 나아갈 방향을 찾아가는 질문을 함께 모은다](https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19904) | governance | F4 | neutral | high | 2026-09-09 |
| 2026-09-09 | 고용노동부 | [한국고용정보원, 지방 일자리 박람회서 고용24 및 AI기반 맞춤형 고용서비스 선보여](https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19908) | agent | F2 | strengthen | high | 2026-09-09 |
| 2026-09-08 | OpenAI | [The Work Now Within Reach](https://openai.com/index/the-work-now-within-reach) | cost | F3 | strengthen | low | 2026-09-09 |
| 2026-09-06 | OpenAI | [Research acceleration: The view inside OpenAI](https://openai.com/index/research-acceleration-view-inside-openai) | agent | F5 | strengthen | medium | 2026-09-09 |
| 2026-09-03 | OpenAI | [GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra) | model | F1 | strengthen | high | 2026-09-09 |
| 2026-09-03 | OpenAI | [Legora reviewed 41 documents in minutes with GPT-6 Astra](https://openai.com/index/legora-financial-statement-review-with-astra) | agent | F4 | strengthen | low | 2026-09-09 |
| 2026-09-01 | OpenAI | [Healthcare organizations can now connect EHR and additional industry data to ChatGPT](https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources) | agent | F2 | strengthen | high | 2026-09-09 |
| 2026-09-01 | OpenAI | [How law firm Gilbert + Tobin governs and scales AI with OpenAI](https://openai.com/index/gilbert-tobin) | jobs | F4 | strengthen | medium | 2026-09-09 |
| 2026-08-26 | METR | [Brief independent investigation of agents' behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) | reliability | F6 | weaken | high | 2026-09-09 |
| 2026-06-26 | METR | [Summary of METR's predeployment evaluation of GPT-5.6 Sol](https://metr.org/blog/2026-06-26-gpt-5-6-sol/) | reliability | F5 | neutral | high | 2026-09-09 |
| 2026-05-11 | METR | [Measuring the Self-Reported Impact of Early-2026 AI on Technical Worker Productivity](https://metr.org/blog/2026-05-11-ai-usage-survey/) | jobs | F4 | strengthen | medium | 2026-09-09 |
| 2026-05-08 | METR | [Task Substitution and Uplift](https://metr.org/blog/2026-05-08-task-substitution-and-uplift/) | jobs | F4 | strengthen | high | 2026-09-09 |
| 2026-04-10 | METR | [MirrorCode: Evidence that AI can already do some weeks-long coding tasks](https://metr.org/blog/2026-04-10-mirrorcode-preliminary-results/) | agent | F5 | strengthen | medium | 2026-09-09 |

## 5. 검증 능력의 정의

"정답 기준을 먼저 만들고, 입력 → 처리 → 결과를 단계별로 대조하며, 오류를 재현 가능한 형태로 설명하는 능력"

**업무 규칙 정의**
- 조건, 예외, 기준일, 분모와 분자
- 판단 불가능한 경우를 별도로 분류

**입력 데이터 검사**
- 파일 수
- 전체 행 수
- 컬럼과 자료형
- 고유키 중복
- 필수 값 결측
- 값의 정상 범위
- 날짜 범위

**처리 과정 검사**
- 제외한 행 수와 이유
- 중복 제거 기준
- 조인 전후 행 수
- 집계 단위
- 예외 처리 기록

**결과 재검산**
- Excel과 Python 결과 비교
- 전체 합계와 부서별 합계 비교
- 경계값 테스트
- 표본 수작업 대조
- 이전 기간과 증감 비교

**현실성 검토**
- 결과가 실제 업무 구조상 가능한지
- 예산, 인원, 기간, 규정과 충돌하지 않는지

**실행 기록과 복구**
- 읽은 파일
- 적용한 규칙
- 제외한 행
- 생성한 결과물
- 실행 전후 행 수
- 최종 승인자
- 원본 보존 여부


## 6. 내가 준비해야 할 역량 (우선순위)

### 1순위: Excel·Power Query — doing
- 현재: 기본 함수·피벗 사용
- 증거: SeSAC 과제, 장기요양 통계 정리
- 목표(완료 기준): 같은 양식 학과별 Excel 파일 10개 이상을 자동 취합하고 누락·중복·형식 오류와 학과별 집계를 생성
- 다음 행동: Power Query 폴더 병합으로 파일 10개 취합 실습
- 항목: 표와 구조화된 참조 · XLOOKUP · SUMIFS·COUNTIFS · IF·IFS·IFERROR · 피벗테이블 · 조건부 서식 · 데이터 유효성 검사 · 중복 및 결측 검사 · 날짜·문자열 정리 · Power Query 폴더 병합

### 2순위: SQL — doing
- 현재: SELECT·JOIN·GROUP BY 가능, 윈도우 함수 연습 중
- 증거: BigQuery sql_practice 데일리 5문제 (my agent)
- 목표(완료 기준): 프로그래머스 MySQL 중급 30문제 + 문제별 분석 단위·고유키·분모·분자·중복 가능성 기록 + 주요 5문제 BigQuery 변환
- 다음 행동: 매일 /sql today 5문제, 풀이마다 검증 항목 기록
- 항목: SELECT, WHERE, CASE · GROUP BY, HAVING · INNER JOIN, LEFT JOIN · 서브쿼리와 CTE · 날짜 및 문자열 함수 · ROW_NUMBER, RANK, LAG · 조건부 집계 · 중복 탐지 · 최신 레코드 선택

### 3순위: 데이터 검증 — todo
- 현재: 체크리스트 정의 완료, 프로젝트 적용 전
- 증거: VALIDATION CHECKLIST 카드
- 목표(완료 기준): 모든 프로젝트에 입력·처리·결과 검증 체크리스트 적용
- 다음 행동: 장기요양·이커머스 프로젝트에 체크리스트 소급 적용(6주차)
- 항목: 입력: 원본 파일 수·행 수·컬럼·고유키·결측·범위·날짜 · 처리: 제외 행·중복 기준·조인 전후·집계 단위·예외 · 결과: 표본 대조·합계 재검산·이전 기간 비교·비정상 증감·범위와 한계

### 4순위: 행정 자동화 프로젝트 — todo
- 현재: 설계 단계
- 증거: my agent 모듈 D(대학 비교과 실적·수료 검증) 계획
- 목표(완료 기준): 가짜 데이터로 입력 5종 → 출력 7종(통합 명단·오류 목록·수료 대상 초안·확인 필요 대상·학과별 집계·처리 로그·보고용 Excel)
- 다음 행동: 입력 파일 양식과 업무 규칙(수료 기준) 설계
- 항목: 입력: 학과별 신청자 명단·출석·필수 서류·프로그램별 수료 기준·학과 기준정보 · 출력: 통합 명단·누락/중복/형식 오류·수료 대상 초안·확인 필요 대상·학과별 실적·처리 로그·최종 보고 Excel

### 5순위: 통계 기초 — doing
- 현재: 빅분기 필기 수준
- 증거: 빅데이터분석기사 학습, 다중회귀 논문
- 목표(완료 기준): 아래 항목을 면접에서 예시와 함께 설명
- 다음 행동: 항목당 한 문단 설명 + 내 프로젝트 예시 연결
- 항목: 평균과 중앙값 · 표본과 모집단 · 표본 편향 · 상관관계와 인과관계 · 신뢰구간과 p-value · 결측치와 이상치 · 회귀계수 · 과적합 · 분류 평가 지표 · 비율의 분모와 분자

### 6순위: AI 업무 위임과 보안 — doing
- 현재: my agent 프로젝트에서 규칙 적용 중
- 증거: CLAUDE.md 절대 규칙, PII 훅
- 목표(완료 기준): AI에게 맡길 때 목적·입력·규칙·예외·출력·검증·금지·승인 지점·개인정보 범위를 항상 명시
- 다음 행동: 위임 템플릿 1장 작성 후 모든 자동화에 첨부
- 항목: 목적 · 입력 · 업무 규칙 · 예외 처리 · 출력 · 검증 방법 · 임의 판단 금지 항목 · 사람의 최종 승인 지점 · 개인정보와 권한 범위


## 7. 90일 실행 계획

| 기간 | 할 일 | 결과물 | 완료 조건 | 상태 |
|---|---|---|---|---|
| 1~2주 | Excel·Power Query 학습; 학과별 파일 10개 자동 취합; 결측·중복·형식 오류표 생성 | 취합 결과 Excel; 오류표 | 파일 10개가 한 번에 취합되고 오류표가 자동으로 나온다 | doing |
| 3~5주 | 프로그래머스 MySQL 중급 30문제; 문제별 검증 항목 기록; BigQuery 문법 변환 연습 | 풀이 30건 + 검증 기록; BigQuery 변환 5건 | 30문제 완료, 각 문제에 분석 단위·고유키·분모·분자·중복 가능성 기록 | doing |
| 6주 | 장기요양·이커머스 프로젝트에 검증 체크리스트 적용; 분석 단위, 고유키, 제외 기준, 재검산 결과 명시 | 검증 절 추가된 프로젝트 문서 2건 | 두 프로젝트 모두 입력·처리·결과 검증 절이 있다 | todo |
| 7~10주 | 대학 비교과 프로그램 실적 취합 자동화 프로젝트 완성; 입력, 오류표, 결과표, 처리 로그, 사용 설명서 제작 | 실행 가능한 스크립트; 오류표·결과표·처리 로그; 사용 설명서 | 설명서만 보고 제3자가 실행해 같은 결과를 얻는다 | todo |
| 11주 | 자동화 전후 작업 시간 비교; 발견한 오류 수; 사람이 확인해야 할 예외 수; 업무 개선 효과 정리 | 효과 정리 1페이지 | 전후 시간·오류 수·예외 수가 숫자로 적혀 있다 | todo |
| 12주 | 논문·프로젝트·자동화 경험을 STAR 면접 사례 4개로 작성; 지원 기관에 따라 자기소개서 문장을 변형할 수 있게 정리 | STAR 카드 4장; 자소서 문장 변형표 | STAR 4장 각 2분 이내로 말할 수 있다 | todo |

## 8. 검증 체크리스트

적용 프로젝트: 대학 비교과 실적 자동화, 장기요양 급여 분석, 이커머스 행동 로그 EDA, 채용공고 수집 파이프라인

**입력 검증**
- [ ] 원본 파일 수
- [ ] 전체 행 수
- [ ] 컬럼과 자료형
- [ ] 고유키 중복
- [ ] 필수 값 결측
- [ ] 값의 범위
- [ ] 날짜 범위

**처리 검증**
- [ ] 제외 행 수와 이유
- [ ] 중복 제거 기준
- [ ] 조인 전후 행 수
- [ ] 집계 단위
- [ ] 예외 처리

**결과 검증**
- [ ] 표본 수작업 대조
- [ ] 전체 합계 재검산
- [ ] 이전 기간 비교
- [ ] 비정상적 증감 확인
- [ ] 분석 범위와 한계

**출처 검증**
- [ ] 원문 URL 확인
- [ ] 발행기관 확인
- [ ] 발표일과 확인일 구분

**개인정보 검증**
- [ ] 개인정보 컬럼 식별·마스킹
- [ ] 외부 AI 전송 여부 확인
- [ ] 권한 범위 기록

**사람 승인**
- [ ] 최종 승인자 지정
- [ ] 원본 보존 확인
- [ ] 실행 기록 남김


## 9. 수집 출처와 갱신 규칙

**우선 출처**
- OpenAI Developers 및 공식 문서
- Anthropic 공식 연구와 Economic Index
- Stanford HAI AI Index
- METR 연구
- Epoch AI 연구
- OECD AI 보고서
- 고용노동부
- 한국고용정보원
- 국가데이터처
- ALIO 공식 채용공고
- Work24 공식 채용정보

**수집하지 않을 자료**
- 출처 없는 블로그
- 광고성 AI 전망
- 유튜브 요약만 있는 자료
- 원문을 확인할 수 없는 재인용
- 작성일이나 발표일이 없는 게시물
- 커뮤니티의 확인되지 않은 주장

**수집 주기**: model_releases=매일, labor_market=주 1회, forecast_review=월 1회, roadmap_progress=매주
**가중치**: official_docs_or_research=high, government_statistics=high, company_usage_data=medium, expert_opinion=low, single_case=reference_only
**확률 변경 상한**: 자료 하나당 ±10%p. 상충 자료는 양쪽 모두 표시.

**갱신 절차**: 원문 URL·발행기관 확인 → 발표일/확인일 구분 → 중복 확인 → 핵심 주장 추출 → 강화/약화/중립 분류 → 신뢰도 평가 → 확률 변경 필요 판단 → 변경 전후·이유 기록 → 데이터 갱신 → 검증·빌드 성공 후 업로드

## 10. 데이터 구조

```json
{
  "id": "고유 식별자",
  "title": "자료 제목",
  "publisher": "발행 기관",
  "source_url": "원문 주소",
  "published_at": "발표일",
  "checked_at": "확인일",
  "category": "model | agent | cost | reliability | jobs | governance",
  "summary": "핵심 내용",
  "evidence": "전망 판단에 사용한 근거",
  "forecast_id": "연결되는 전망",
  "impact": "strengthen | weaken | neutral",
  "confidence": "high | medium | low"
}
```
동일 URL·동일 제목은 중복 저장하지 않는다. 내용이 바뀌면 삭제하지 않고 `content/signals-history.jsonl` 에 스냅샷을 남긴다.

## 11. 변경 이력

| 날짜 | 무엇이 추가됐나 | 전망 변경 | 확률 변경 | 이유 | 출처 |
|---|---|---|---|---|---|
| 2026-09-09 | 신호 추가 14건, 갱신 0건. OpenAI 사례(1Password·Playco·ATV·Legora·Gilbert+Tobin)는 기업 자체 자료·단일 사례라 medium/low 로 두고 확률 변경 근거로 쓰지 않음 | 없음 | 없음 | 2026-09-09 첫 정기 검토. 후보 50건 중 공식 출처·발표일·전망 관련성을 갖춘 12건 채택. 기준본 확률은 유지(첫 라운드, 상충 자료 병기). | METR, OpenAI, 고용노동부 |
| 2026-09-09 | AI FUTURE & CAREER 카테고리 최초 작성. 전망 7개, 충돌표 5개, 역량 6개, 90일 로드맵 6단계, 검증 체크리스트 6영역 | 없음(기준본) | 없음 | 2026-09-09 기준 전망 프롬프트를 기준본으로 채택 | 사용자 작성 기준 문서 |

_마지막 업데이트: 2026-09-09 · 생성: 2026-09-14_
