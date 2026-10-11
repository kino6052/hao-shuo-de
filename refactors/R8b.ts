// R8b: after R8 -- the Mandarin way first for 味道 (wèi-dào) and 天空 (tiān-kōng)
// (check-book); 平时 and 平常 use píng as the author asked, so píng-shí joins
// the "time" sense of shí and píng-cháng the "often" sense of cháng (check-sounds);
// 明星 yǒu-míng-de rén is spelled 有名的人 (a famous person).
// Run: npm run refactor -- refactors/R8b.ts [--write]

const W = (id) => `{{word:${id}}}`;
const text = (file, from, to) => ({ op: "text", file, from, to });

export default [
  { op: "composite", zh: "味道", set: { hsd: [`${W("wei4")}-${W("dao4")}`, `${W("kou3")}-${W("li3")}-${W("de")} ${W("yang4")}-{{light:zi}}`], tts: ["味道", "口里的样子"], fit: "natural" } },
  { op: "composite", zh: "天空", set: { hsd: [`${W("tian1")}-${W("kong1")}`, `${W("tian1")}-${W("shang4")}`], tts: ["天空", "天上"], fit: "natural" } },
  { op: "composite", zh: "明星", set: { tts: ["有名的人"], literal: "a person with a name (a famous person)" } },

  { op: "senseCompounds", id: "shi2", key: "time", add: ["ping2 shi2"] },
  text("src/data/words/shi2.ts",
    `{{word:you3}}-{{word:shi2}}; on its own it is ten.`,
    `{{word:you3}}-{{word:shi2}}, {{word:ping2}}-{{word:shi2}}; on its own it is ten.`),
  text("src/data/words/shi2.ts",
    `{{word:you3}}-{{word:shi2}}; само по себе`,
    `{{word:you3}}-{{word:shi2}}, {{word:ping2}}-{{word:shi2}}; само по себе`),
  { op: "senseCompounds", id: "chang2", key: "often", add: ["ping2 chang2"] },
  text("src/data/words/chang2.ts",
    `what goes on long and long again. On its own it is long.`,
    `what goes on long and long again, and in {{word:ping2}}-{{word:chang2}}: the ordinary day-to-day. On its own it is long.`),
  text("src/data/words/chang2.ts",
    `то, что длится и повторяется. Само по себе`,
    `то, что длится и повторяется, и в {{word:ping2}}-{{word:chang2}}: обычное, повседневное. Само по себе`),
];
