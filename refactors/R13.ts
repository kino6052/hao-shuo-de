// R13: composite review, batch 13 (ranks 1201-1300 + the carried-over 墙 512, 发展 585, 家庭 639,
// 服务 666 and 相信 324), as the author decided it at /__review/?batch=13
// (review/decisions/batch-13.json): 98 approved, 6 edited. 需 (1222) was not decided: it stays
// proposed and goes to batch 14.
//   Approved proposals (review/proposals/batch-13.mjs): 墙, 发展, 家庭, 证明, 责任, 足够, 重点,
//   重量, 交流, 信任, 停止, 允许, 关注, 办公, 办公室, 合适, 吸引, 准.
//   The author's own forms:
//   - 服务 bāng-rén-de gōng-zuò; 过程 cóng kāishǐ dào wán de lù; 举 ná-qǐ-lái / bǎ X qǐ lái.
//   - 反对 shuō bù / shuō bù duì; 名 jiào-de cí / nǐ jiào-shénme.
//   - 调查 "should be a synonym of research": it takes 研究's form first (hǎo-hǎo kàn,
//     hǎo-hǎo xué) and keeps the author's hǎo-hǎo kàn, zhǎo zhēn-de as the second.
// Run: npm run refactor -- refactors/R13.ts [--write]

import proposals from "../review/proposals/batch-13.mjs";

const W = (id) => `{{word:${id}}}`;

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
  ...["墙", "发展", "家庭", "证明", "责任", "足够", "重点", "重量", "交流", "信任", "停止", "允许", "关注", "办公", "办公室", "合适", "吸引", "准"].map((zh) => approved(zh)),

  // -- the author's own forms ----------------------------------------------------------
  form("服务", [`${W("bang1")}-${W("ren2")}-${W("de")} ${W("gong1")}-${W("zuo4")}`], ["帮人的工作"], { literal: "the work of helping people" }),
  // research / investigate are synonyms: 研究's form first, the author's own second
  form(
    "调查",
    [`${W("hao3")}-${W("hao3")} ${W("kan4")}, ${W("hao3")}-${W("hao3")} ${W("xue2")}`, proposals["调查"].hsd[0]],
    ["好好看，好好学", "好好看，找真的"],
    { literal: "look carefully, study carefully / look carefully, find what is true" },
  ),
  form("过程", [`${W("cong2")} ${W("kai1shi3")} ${W("dao4")} ${W("wan2")} ${W("de")} ${W("lu4")}`], ["从开始到完的路"], { literal: "the road from start to finish" }),
  form("举", [`${W("na2")}-${W("qi3")}-${W("lai2")}`, `${W("ba3")} X ${W("qi3")} ${W("lai2")}`], ["拿起来", "把X起来"], { literal: "pick up / make X come up" }),
  form("反对", [`${W("shuo1")} ${W("bu4")}`, `${W("shuo1")} ${W("bu4")} ${W("dui4")}`], ["说不", "说不对"], { literal: "say no / say it's not right" }),
  form("名", [`${W("jiao4")}-${W("de")} ${W("ci2")}`, `${W("ni3")} ${W("jiao4")}-${W("shen2me")}`], ["叫的词", "你叫什么"], { literal: "the word it is called / what are you called" }),

  // -- reviewed (the proposed marks go; 需 1222 stays proposed) -----------------------
  { op: "reviewed", from: 324, to: 324 },
  { op: "reviewed", from: 512, to: 512 },
  { op: "reviewed", from: 585, to: 585 },
  { op: "reviewed", from: 639, to: 639 },
  { op: "reviewed", from: 666, to: 666 },
  { op: "reviewed", from: 1201, to: 1221 },
  { op: "reviewed", from: 1223, to: 1300 },
];
