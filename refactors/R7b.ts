// R7b: now that shù 数 is a core word, the composites made of it say it the
// Mandarin way first (check-book): fēn-shù, shù-zì, shù-xué, rén-shù.
// Run: npm run refactor -- refactors/R7b.ts [--write]

const W = (id) => `{{word:${id}}}`;
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  form("分数", [`${W("fen1")}-${W("shu4")}`, `${W("hao3")}-${W("huai4")}-${W("de")} ${W("shu4")}`], ["分数", "好坏的数"], { fit: "natural" }),
  form("数字", [`${W("shu4")}-${W("zi4")}`], ["数字"], { fit: "natural", transparent: true, proposed: undefined }),
  form("数学", [`${W("shu4")}-${W("xue2")}`, `${W("fang4")}-${W("zai4")}-${W("yi1")}-${W("qi3")}-${W("he2")}-${W("na2")}-${W("de")} ${W("xue2")}`], ["数学", "放在一起和拿的学"], { fit: "natural" }),
  form("人数", [`${W("ren2")}-${W("shu4")}`, `${W("duo1")}-${W("shao3")} ${W("ren2")}`], ["人数", "多少人"], { fit: "natural" }),
];
