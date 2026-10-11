// R8: composite review, batch 8 (ranks 701-800), as the author decided it at
// /__review/?batch=8 (review/decisions/batch-8.json): 93 approved, 7 edited.
//   Approved proposals (from review/proposals/batch-8.mjs): 课本, 书店, 读书, 表,
//   票, 身份证, 药, 心情, 季节, 美丽, 天空, 味道.
//   The author's own forms:
//   - 语文 "Zhōngguó" huà, the same as 汉语, 中文 and 普通话 ("should be consistent
//     across similar entities"); 外语 follows: wài-guó-de huà.
//   - 领导 zuò jué-dìng-de rén ("decision maker").
//   - 农民 yòng dì gōng-zuò-de rén ("does work with the soil/ground").
//   - 明星 yǒu-míng-de rén.
//   - 高考 and 一半 stay as proposed in the review.
//   - 平 becomes a core word ("should be core vocab, and we need to change the
//     words that rely on it"): píng 平, flat, a feel/shape word in comparing/shape-feel.
//     The composite 平 goes; 水平, 平常 and 平时 say it the Mandarin way first.
// Run: npm run refactor -- refactors/R8.ts [--write]

import proposals from "../review/proposals/batch-8.mjs";

const W = (id) => `{{word:${id}}}`;
const SHAPE = "src/content/lessons/comparing/shape-feel.ts";

const approved = (zh, extra = {}) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}), ...extra },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });
const text = (file, from, to) => ({ op: "text", file, from, to });
const Q = `"Zhōngguó" ${W("hua4")}`;

export default [
  // -- píng 平: flat ------------------------------------------------------------------
  {
    op: "add", id: "ping2", hanzi: "平", category: "physical-property",
    pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
    definition: {
      eng: `flat, level, even: ${W("lu4")} ${W("hen3")} ${W("ping2")}, the road is flat; ${W("shui3")}-${W("ping2")}, level`,
      rus: `ровный, плоский: ${W("lu4")} ${W("hen3")} ${W("ping2")} — дорога ровная; ${W("shui3")}-${W("ping2")} — уровень`,
      zh: "平，平坦",
    },
    necessity: {
      index: 3,
      eng: `Flat, like the ground or water: ${W("ping2")}. It is in ${W("ping2")}-${W("chang2")}, ${W("ping2")}-${W("shi2")} and ${W("shui3")}-${W("ping2")}.`,
      rus: `Ровный, как земля или вода: ${W("ping2")}. Он есть в ${W("ping2")}-${W("chang2")}, ${W("ping2")}-${W("shi2")} и ${W("shui3")}-${W("ping2")}.`,
    },
  },
  { op: "card", id: "ping2", to: "comparing/shape-feel", en: "flat, level", ru: "ровный, плоский" },
  text(SHAPE,
    `      "{{word:zhong4}} is heavy.",`,
    `      "{{word:zhong4}} is heavy.",
      "{{word:ping2}} is flat: {{word:lu4}} {{word:hen3}} {{word:ping2}}, the road is flat.",`),
  text(SHAPE,
    `      "{{word:zhong4}} — тяжёлый.",`,
    `      "{{word:zhong4}} — тяжёлый.",
      "{{word:ping2}} — «ровный»: {{word:lu4}} {{word:hen3}} {{word:ping2}} — дорога ровная.",`),
  text(SHAPE,
    `      pinyin: "{{Word:wo3}} {{word:you3}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有长的东西。",
      en: "I have a stick.",
      ru: "У меня есть палка.",`,
    `      pinyin: "{{Word:lu4}} {{word:hen3}} {{word:ping2}}.",
      hanzi: "路很平。",
      en: "The road is flat.",
      ru: "Дорога ровная.",`),
  text(SHAPE,
    `      hanzi: "水很重。",
    },
  ],`,
    `      hanzi: "水很重。",
    },
    {
      en: "Is the road flat?",
      ru: "Дорога ровная?",
      answer: "{{Word:lu4}} {{word:ping2}} {{word:ma}}?",
      hanzi: "路平吗？",
    },
  ],`),
  // the words that rely on it: the Mandarin way first
  form("水平", [`${W("shui3")}-${W("ping2")}`, `${W("duo1")} ${W("hao3")}`], ["水平", "多好"], { fit: "natural" }),
  form("平常", [`${W("ping2")}-${W("chang2")}`, `${W("he2")} ${W("bie2")}-${W("de")} ${W("yi1")}-${W("yang4")}`], ["平常", "和别的一样"], { fit: "natural" }),
  form("平时", [`${W("ping2")}-${W("shi2")}`, `${W("da4")} ${W("bu4")}-{{light:fen1}} ${W("shi2")}-${W("jian1")}`], ["平时", "大部分时间"], { fit: "natural" }),

  // -- approved proposals -----------------------------------------------------------
  ...["课本", "书店", "读书", "表", "票", "身份证", "药", "心情", "季节", "美丽", "天空", "味道"].map((zh) => approved(zh)),

  // -- the author's own forms ---------------------------------------------------------
  form("语文", [Q], ["中国话"], { literal: "China speech", fit: "natural" }),
  form("外语", [`${W("wai4")}-${W("guo2")}-${W("de")} ${W("hua4")}`], ["外国的话"], { literal: "foreign speech" }),
  form("领导", [`${W("zuo4")} ${W("jue2")}-${W("ding4")}-${W("de")} ${W("ren2")}`], ["做决定的人"], { literal: "a person who makes the decisions" }),
  form("农民", [`${W("yong4")} ${W("di4")} ${W("gong1")}-${W("zuo4")}-${W("de")} ${W("ren2")}`], ["用地工作的人"], { literal: "a person who works with the ground" }),
  form("明星", [`${W("you3")}-${W("ming2")}-${W("de")} ${W("ren2")}`], ["有明的人"], { literal: "a person who has brightness" }),

  // -- the whole batch is reviewed ----------------------------------------------------
  { op: "reviewed", from: 701, to: 800 },
];
