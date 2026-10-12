// R16: composite review, batch 16 (ranks 1501-1520, the last), as the author decided it at
// /__review/?batch=16 (review/decisions/batch-16.json): 14 approved as they were, 6 edited.
//   The author's own forms:
//   - 感动 xīn-dòng / ràng xīn jué-de hěn hǎo (the author's text had a trailing comma; the commas
//     there separate forms, as in 收拾, so it is two forms).
//   - 戏 stays gěi rén kàn-de dōng-xi; the author says a better word is needed (open).
//   - 抓紧 kuài-de zuò; 拼音 xiě-"Zhōngguó"-huà shēngyīn-de fāng-fǎ.
//   - 收拾 bǎ X gān-jìng / bǎ X bù luàn; 旅行 qù bié-de dì-fang wánr.
// Run: npm run refactor -- refactors/R16.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  form("感动", [`${W("xin1")}-${W("dong4")}`, `${W("rang4")} ${W("xin1")} ${W("jue2")}-${L("de2")} ${W("hen3")} ${W("hao3")}`], ["心动", "让心觉得很好"], { literal: "the heart moves / make the heart feel very good" }),
  form("抓紧", [`${W("kuai4")}-${W("de")} ${W("zuo4")}`], ["快的做"], { literal: "do it quickly" }),
  form("拼音", [`${W("xie3")}-"Zhōngguó"-${W("hua4")} ${W("sheng1yin1")}-${W("de")} ${W("fang1")}-${W("fa3")}`], ["写中国话声音的方法"], { literal: "the way to write the sounds of Chinese" }),
  form("收拾", [`${W("ba3")} X ${W("gan1jing4")}`, `${W("ba3")} X ${W("bu4")} ${W("luan4")}`], ["把X干净", "把X不乱"], { literal: "make X clean / make X not messy" }),
  form("旅行", [`${W("qu4")} ${W("bie2")}-${W("de")} ${W("di4")}-${L("fang1")} ${W("wan2r")}`], ["去别的地方玩儿"], { literal: "go to another place to play" }),

  { op: "reviewed", from: 1501, to: 1600 },
];
