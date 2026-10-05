// D64 (with the author): the door, and how to say affect.
//   - mén 门 (door) joins. Its tone keeps it apart from the plural men 们;
//     it gives mén-kǒu (doorway), chū-mén (go out) and, with 部, bù-mén
//     (department). Taught with kāi and guān: Kāi mén! Guān mén!
//   - affect, influence (影响): X bǎ Y biàn (X changes Y), or X duì Y hǎo /
//     bù hǎo (X is good / bad for Y).
// Run: npm run refactor -- refactors/D64.ts [--write]

const W = (id) => `{{word:${id}}}`;

export default [
  {
    op: "add", id: "men2", hanzi: "门", category: "places-as-things",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `door: ${W("kai1")} ${W("men2")}, open the door; ${W("men2")}-${W("kou3")}, doorway; ${W("chu1")}-${W("men2")}, go out`,
      rus: `дверь: ${W("kai1")} ${W("men2")} — открыть дверь; ${W("men2")}-${W("kou3")} — вход; ${W("chu1")}-${W("men2")} — выйти из дома`,
      zh: "门",
    },
    necessity: {
      index: 4,
      eng: `Doors: opening and closing them (${W("kai1")} ${W("men2")}, ${W("guan1")} ${W("men2")}), the doorway, and going out.`,
      rus: `Двери: открыть и закрыть (${W("kai1")} ${W("men2")}, ${W("guan1")} ${W("men2")}), вход и выход из дома.`,
    },
  },
  { op: "card", id: "men2", to: "also-and-all/light", en: "door", ru: "дверь" },
  { op: "senseCompounds", id: "bu4", key: "part", add: ["bu4 men2"] },
  { op: "compounds" },
  {
    op: "composite", zh: "影响",
    set: {
      hsd: [`X ${W("ba3")} Y ${W("bian4")}`, `X ${W("dui4")} Y ${W("hao3")}`, `X ${W("dui4")} Y ${W("bu4")} ${W("hao3")}`],
      tts: ["X把Y变", "X对Y好", "X对Y不好"], fit: "plain",
      literal: "X changes Y / X is good for Y / X is bad for Y", proposed: true,
    },
  },
];
