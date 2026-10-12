// R15: composite review, batch 15 (ranks 1401-1500), as the author decided it at
// /__review/?batch=15 (review/decisions/batch-15.json): 94 approved as they were, 5 edited.
//   The author's own forms:
//   - 胜 ná-dào bǐ bié rén hǎo-de jié-guǒ; 赞成 jué-de yī-yàng (shares 同意's form).
//   - 切 bǎ X biàn xiǎo "kuài" (kuài 块 is not core: kuài 快 is fast, so the sound is quoted).
//   - 幸运 duì X duō hǎo-de dōng-xi fā-shēng le.
//   - 幼儿园 hěn xiǎo-de hái-zi wánr hé xué-de dì-fang.
//   需 (1222, carried over from batch 13) was not decided and stays proposed.
// Run: npm run refactor -- refactors/R15.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  form("胜", [`${W("na2")}-${W("dao4")} ${W("bi3")} ${W("bie2")} ${W("ren2")} ${W("hao3")}-${W("de")} ${W("jie2")}-${W("guo3")}`], ["拿到比别人好的结果"], { literal: "get a result better than other people's" }),
  form("赞成", [`${W("jue2")}-${L("de2")} ${W("yi1")}-${W("yang4")}`], ["觉得一样"], { literal: "feel the same" }),
  form("切", [`${W("ba3")} X ${W("bian4")} ${W("xiao3")} "kuài"`], ["把X变小块"], { literal: "make X into small pieces" }),
  form("幸运", [`${W("dui4")} X ${W("duo1")} ${W("hao3")}-${W("de")} ${W("dong1")}-${L("xi1")} ${W("fa1")}-${W("sheng1")} ${W("le")}`], ["对X多好的东西发生了"], { literal: "many good things happen to X" }),
  form("幼儿园", [`${W("hen3")} ${W("xiao3")}-${W("de")} ${W("hai2")}-${L("zi")} ${W("wan2r")} ${W("he2")} ${W("xue2")}-${W("de")} ${W("di4")}-${L("fang1")}`], ["很小的孩子玩儿和学的地方"], { literal: "the place where very small children play and learn" }),

  { op: "reviewed", from: 1401, to: 1500 },
];
