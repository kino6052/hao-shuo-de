// D61c (with the author): rooms. fáng 房 joins, so a room is fáng-jiān (房间)
// and a house fáng-zi (房子); 卫 becomes a sense of wèi, so the bathroom is
// wèi-shēng-jiān (卫生间) and clean, hygiene wèi-shēng (卫生). Both are taught
// with "where is ...?" in Space 1.
// Run: npm run refactor -- refactors/D61c.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default [
  {
    op: "add", id: "fang2", hanzi: "房", category: "places-as-things",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `house, room: ${W("fang2")}-${W("jian1")}, a room; ${W("fang2")}-${L("zi")}, a house`,
      rus: `дом, комната: ${W("fang2")}-${W("jian1")} — комната; ${W("fang2")}-${L("zi")} — дом`,
      zh: "房，房子，房间",
    },
    necessity: {
      index: 4,
      eng: `Rooms and houses (${W("fang2")}-${W("jian1")}, ${W("fang2")}-${L("zi")}): where people live, room by room.`,
      rus: `Комнаты и дома (${W("fang2")}-${W("jian1")}, ${W("fang2")}-${L("zi")}): где живут люди, комната за комнатой.`,
    },
  },
  {
    op: "sense", id: "wei4", key: "guard", hanzi: "卫", eng: "guard, keep clean", rus: "охранять, беречь",
    why: {
      eng: `Written 卫, ${W("wei4")} means guarding health in ${W("wei4")}-${W("sheng1")} (clean, hygiene) and ${W("wei4")}-${W("sheng1")}-${W("jian1")} (bathroom); on its own it is for.`,
      rus: `Записанное как 卫, ${W("wei4")} значит «беречь здоровье» в ${W("wei4")}-${W("sheng1")} (чистота, гигиена) и ${W("wei4")}-${W("sheng1")}-${W("jian1")} (туалет); само по себе — «для».`,
    },
    compounds: ["wei4 sheng1", "wei4 sheng1 jian1"],
  },
  { op: "card", id: "fang2", to: "where-it-is/where-question", en: `house, room; ${W("fang2")}-${W("jian1")}: room`, ru: `дом, комната; ${W("fang2")}-${W("jian1")} — комната` },
  { op: "card", id: "wei4", sense: "guard", to: "where-it-is/where-question", en: `keep clean (in ${W("wei4")}-${W("sheng1")}-${W("jian1")}: bathroom)`, ru: `беречь (в ${W("wei4")}-${W("sheng1")}-${W("jian1")} — туалет)` },
  { op: "composite", zh: "洗手间", addForm: [`${W("wei4")}-${W("sheng1")}-${W("jian1")}`, "卫生间"] },
  { op: "compounds" },
  { op: "refs", label: "fáng-zi light", pattern: "\\{\\{(w|W)ord:fang2\\}\\}-\\{\\{word:zi\\}\\}", to: "{{$1ord:fang2}}-{{light:zi}}" },
];
