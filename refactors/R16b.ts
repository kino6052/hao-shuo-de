// R16b: the leftovers of the composite review (decided by judgment, the author said "the remaining
// things you do according to your best judgment").
//   - 需 (1222, undecided since batch 13): approved as it was, "yào", the same form as 需要.
//   - 戏 (1502, "something similar to show, we need to find a better word"): the author's form stays
//     first (gěi rén kàn-de dōng-xi, the family of 展示 / 表现 / 播放); a second form joins the family
//     of 演员 (zuò-gěi-rén-kàn-de rén): zuò-gěi-rén-kàn-de dōng-xi. No new core word.
//   - 动画 keeps its description: dòng-huà would need the draw sense of huà next to dòng, and that
//     sense is taught with miàn (where-it-is), earlier than dòng.
// Run: npm run refactor -- refactors/R16b.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default [
  {
    op: "composite", zh: "戏",
    set: {
      hsd: [
        `${W("gei3")} ${W("ren2")} ${W("kan4")}-${W("de")} ${W("dong1")}-${L("xi1")}`,
        `${W("zuo4")}-${W("gei3")}-${W("ren2")}-${W("kan4")}-${W("de")} ${W("dong1")}-${L("xi1")}`,
      ],
      tts: ["给人看的东西", "做给人看的东西"],
      literal: "a thing for people to look at / a thing made for people to look at",
    },
  },
  { op: "reviewed", from: 1222, to: 1222 },
];
