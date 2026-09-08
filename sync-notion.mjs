// Notion → data/notion.json 동기화.
//
// 토큰은 이 파일에도, 배포물에도 남지 않는다. 빌드 환경의 환경변수에서만 읽는다.
//   NOTION_TOKEN      필수. notion.so/my-integrations 에서 만든 내부 통합 시크릿
//   NOTION_TASKS_DB   선택. TODAY/THIS WEEK 를 채울 데이터베이스 ID
//
// 토큰이 없으면 조용히 종료한다 → build.mjs 가 내장 목업으로 폴백하므로
// 연동 전에도 사이트는 그대로 동작한다.
//
//   node sync-notion.mjs

import { writeFileSync, mkdirSync } from "node:fs";

const TOKEN = process.env.NOTION_TOKEN;
const TASKS_DB = process.env.NOTION_TASKS_DB;
// 노션 '프로젝트 보관소' 데이터베이스. 다른 DB를 쓰려면 환경변수로 덮어쓴다.
const PROJECTS_DB = process.env.NOTION_PROJECTS_DB || "3cd03811541180af83c4e90faaa171d5";
const VERSION = "2022-06-28";

// AI 학습 경로 4개 파트. id 는 index.html 의 카드 id 와 맞춘다.
const AI_PAGES = [
  { id: "ai1", num: "01", pageId: "2e0e4917eeaa83b1beda81c99936dd50",
    url: "https://jolly-shrine-63f.notion.site/1-2e0e4917eeaa83b1beda81c99936dd50" },
  { id: "ai2", num: "02", pageId: "e89e4917eeaa83c2835701fe13c28780",
    url: "https://jolly-shrine-63f.notion.site/2-AI-e89e4917eeaa83c2835701fe13c28780" },
  { id: "ai3", num: "03", pageId: "3fee4917eeaa821882a6813091d299c8",
    url: "https://jolly-shrine-63f.notion.site/3-AI-PPT-3fee4917eeaa821882a6813091d299c8" },
  { id: "ai4", num: "04", pageId: "0a0e4917eeaa8311a32081ad314dfb8f",
    url: "https://jolly-shrine-63f.notion.site/4-AI-0a0e4917eeaa8311a32081ad314dfb8f" }
];

if (!TOKEN) {
  console.log("[notion] NOTION_TOKEN 없음 → 동기화 건너뜀 (목업 데이터 사용)");
  process.exit(0);
}

async function api(path, init = {}) {
  const res = await fetch("https://api.notion.com/v1" + path, {
    ...init,
    headers: {
      "Authorization": "Bearer " + TOKEN,
      "Notion-Version": VERSION,
      "Content-Type": "application/json",
      ...(init.headers || {})
    }
  });
  if (!res.ok) {
    throw new Error(`${init.method || "GET"} ${path} → ${res.status} ${await res.text()}`);
  }
  return res.json();
}

// 속성값에서 사람이 읽을 텍스트를 뽑는다. 속성 유형이 무엇이든 최대한 대응.
function plain(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "title":
    case "rich_text":
      return (prop[prop.type] || []).map(t => t.plain_text).join("").trim();
    case "select":
      return prop.select ? prop.select.name : "";
    case "status":
      return prop.status ? prop.status.name : "";
    case "multi_select":
      return (prop.multi_select || []).map(s => s.name).join(" · ");
    case "date":
      return prop.date ? prop.date.start : "";
    case "checkbox":
      return prop.checkbox ? "done" : "";
    default:
      return "";
  }
}

function titleOf(page) {
  const props = page.properties || {};
  for (const key of Object.keys(props)) {
    if (props[key].type === "title") return plain(props[key]);
  }
  return "";
}

// 노션의 다양한 상태 표기를 대시보드의 3단계로 정규화
function normalizeStatus(raw) {
  const s = String(raw || "").toLowerCase();
  if (/(완료|done|complete|완독)/.test(s)) return "done";
  if (/(진행|doing|in progress|학습중)/.test(s)) return "doing";
  return "todo";
}

async function fetchAI() {
  const out = [];
  for (const p of AI_PAGES) {
    try {
      const page = await api("/pages/" + p.pageId);
      const props = page.properties || {};
      const statusProp = Object.keys(props).find(
        k => props[k].type === "status" || props[k].type === "select" || props[k].type === "checkbox"
      );
      out.push({
        id: p.id,
        num: p.num,
        title: titleOf(page) || null,
        status: statusProp ? normalizeStatus(plain(props[statusProp])) : null,
        url: page.url || p.url,
        edited: page.last_edited_time || null
      });
      console.log(`[notion] PART ${p.num} 읽음`);
    } catch (e) {
      console.warn(`[notion] PART ${p.num} 실패 → 목업 유지 (${e.message.slice(0, 90)})`);
    }
  }
  return out;
}

async function fetchTasks() {
  if (!TASKS_DB) return null;
  try {
    const res = await api("/databases/" + TASKS_DB + "/query", {
      method: "POST",
      body: JSON.stringify({ page_size: 20 })
    });
    return res.results.map(page => {
      const props = page.properties || {};
      const statusKey = Object.keys(props).find(
        k => props[k].type === "status" || props[k].type === "checkbox"
      );
      const dateKey = Object.keys(props).find(k => props[k].type === "date");
      return {
        id: page.id.replace(/-/g, "").slice(0, 12),
        text: titleOf(page),
        done: statusKey ? normalizeStatus(plain(props[statusKey])) === "done" : false,
        due: dateKey ? plain(props[dateKey]) : ""
      };
    }).filter(t => t.text);
  } catch (e) {
    console.warn("[notion] 태스크 DB 실패 → 목업 유지 (" + e.message.slice(0, 90) + ")");
    return null;
  }
}

// 노션 '프로젝트 보관소' — 프로젝트명 + 분류 + 상태
async function fetchProjects() {
  if (!PROJECTS_DB) return null;
  try {
    const res = await api("/databases/" + PROJECTS_DB + "/query", {
      method: "POST",
      body: JSON.stringify({ page_size: 30 })
    });
    const rows = res.results.map(page => {
      const props = page.properties || {};
      const keys = Object.keys(props);

      // 분류와 상태가 둘 다 '선택' 속성일 수 있다. 유형만으로는 구분되지 않으므로
      // status 유형을 우선 쓰고, 없으면 값이 진행/완료처럼 읽히는 선택 속성을 상태로 본다.
      let statusKey = keys.find(k => props[k].type === "status");
      const selects = keys.filter(k => props[k].type === "select");
      if (!statusKey) {
        statusKey = selects.find(k => /(완료|진행|시작|done|doing|todo)/i.test(plain(props[k])));
      }
      const categoryKey = selects.find(k => k !== statusKey);

      return {
        id: page.id.replace(/-/g, "").slice(0, 12),
        name: titleOf(page),
        category: categoryKey ? plain(props[categoryKey]) : "",
        status: statusKey ? normalizeStatus(plain(props[statusKey])) : "todo",
        url: page.url || "",
        edited: (page.last_edited_time || "").slice(0, 10)
      };
    }).filter(p => p.name);
    console.log(`[notion] 프로젝트 보관소 ${rows.length}건 읽음`);
    return rows;
  } catch (e) {
    console.warn("[notion] 프로젝트 보관소 실패 → 생략 (" + e.message.slice(0, 90) + ")");
    return null;
  }
}

const payload = {
  syncedAt: new Date().toISOString(),
  ai: await fetchAI(),
  tasks: await fetchTasks(),
  projects: await fetchProjects()
};

mkdirSync(new URL("./data/", import.meta.url), { recursive: true });
writeFileSync(new URL("./data/notion.json", import.meta.url), JSON.stringify(payload, null, 1));
console.log("[notion] data/notion.json 저장 완료");
