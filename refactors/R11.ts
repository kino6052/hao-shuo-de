// R11: composite review, batch 11 (ranks 1001-1100), as the author decided it at
// /__review/?batch=11 (review/decisions/batch-11.json): 82 approved, 18 edited.
//   Approved proposals (review/proposals/batch-11.mjs): 任务, 作家, 使, 压力, 广告,
//   建立, 引起.
//   The author's own forms:
//   - 业务 yào zuò-de (as 任务, 项目); 事业 gōng-zuò; 人才 zuò gōng-zuò hěn hǎo-de rén.
//   - 严重 zhòng-yào, or duì X hěn zhòng-yào; 关键 zuì yǒu zhòng-yào-de bù-fen.
//   - 主题 shì shuō X-de; 保证 shuō X shì zhēn-de.
//   - 内容 lǐ-miàn-de dōng-xi, or for a video, a text: kàn-de, shuō-de.
//   - 包括 also X yě yǒu Y; 基础 also cóng líng kāishǐ.
//   - 坚持 "zuì hòu ba X xia-qu" (read as: zuì hòu bǎ X zuò xià-qù; zuò dào zuì hòu stays).
//   - 媒体 news creators; 总统 guó-jiā-de jué-dìng-zhě; 才能 néng-lì.
//   - 成员 shì X rén-de yī bù-fen; 成立 shì X shí-jiān kāishǐ-de.
//   - 优惠 and 反应 stay as they were.
// Run: npm run refactor -- refactors/R11.ts [--write]

import proposals from "../review/proposals/batch-11.mjs";

const W = (id) => `{{word:${id}}}`;
const THING = `${W("dong1")}-{{light:xi1}}`;

const approved = (zh) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}) },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  // -- the approved proposals --------------------------------------------------------
  ...["任务", "作家", "使", "压力", "广告", "建立", "引起"].map((zh) => approved(zh)),

  // -- the author's own forms ----------------------------------------------------------
  form("业务", [`${W("yao4")} ${W("zuo4")}-${W("de")}`], ["要做的"], { literal: "what is to be done" }),
  form("严重", [`${W("zhong4")}-${W("yao4")}`, `${W("dui4")} X ${W("hen3")} ${W("zhong4")}-${W("yao4")}`], ["重要", "对X很重要"], { literal: "important / important to X", fit: "natural" }),
  form("主题", [`${W("shi4")} ${W("shuo1")} X-${W("de")}`], ["是说X的"], { literal: "what it is about" }),
  form("事业", [`${W("gong1")}-${W("zuo4")}`], ["工作"], { literal: "work", fit: "natural" }),
  form("人才", [`${W("zuo4")} ${W("gong1")}-${W("zuo4")} ${W("hen3")} ${W("hao3")}-${W("de")} ${W("ren2")}`], ["做工作很好的人"], { literal: "a person who works very well" }),
  form("保证", [`${W("shuo1")} X ${W("shi4")} ${W("zhen1")}-${W("de")}`], ["说X是真的"], { literal: "say that X is true" }),
  form("关键", [`${W("zui4")} ${W("you3")} ${W("zhong4")}-${W("yao4")}-${W("de")} ${W("bu4")}-{{light:fen1}}`], ["最有重要的部分"], { literal: "the most important part" }),
  form("内容", [`${W("li3")}-${W("mian4")}-${W("de")} ${THING}`, `${W("kan4")}-${W("de")}`, `${W("shuo1")}-${W("de")}`], ["里面的东西", "看的", "说的"], { literal: "what is inside / what you watch / what is said" }),
  { op: "composite", zh: "包括", addForm: [`X ${W("ye3")} ${W("you3")} Y`, "X也有Y"], set: { literal: "X has Y inside / X also has Y" } },
  form("坚持", [`${W("zui4")} ${W("hou4")} ${W("ba3")} X ${W("zuo4")} ${W("xia4")}-${W("qu4")}`, `${W("zuo4")} ${W("dao4")} ${W("zui4")} ${W("hou4")}`], ["最后把X做下去", "做到最后"], { literal: "carry X on to the end" }),
  { op: "composite", zh: "基础", addForm: [`${W("cong2")} ${W("ling2")} ${W("kai1shi3")}`, "从零开始"], set: { literal: "the lowest part / start from zero" } },
  form("媒体", [`${W("zuo4")} ${W("xin1#new")}-${W("de")} ${W("zhi1dao4")}-${W("de")} ${THING}-${W("de")} ${W("ren2")}`], ["做新的知道的东西的人"], { literal: "people who make the news" }),
  form("总统", [`${W("guo2")}-${W("jia1")}-${W("de")} ${W("jue2")}-${W("ding4")}-${W("zhe3")}`], ["国家的决定者"], { literal: "the one who decides for the country" }),
  form("成员", [`${W("shi4")} X ${W("ren2")}-${W("de")} ${W("yi1")} ${W("bu4")}-{{light:fen1}}`], ["是X人的一部分"], { literal: "be a part of X's people" }),
  form("成立", [`${W("shi4")} X ${W("shi2")}-${W("jian1")} ${W("kai1shi3")}-${W("de")}`], ["是X时间开始的"], { literal: "it began at time X" }),
  form("才能", [`${W("neng2")}-${W("li4")}`], ["能力"], { literal: "ability", fit: "natural" }),

  { op: "reviewed", from: 1001, to: 1100 },
];
