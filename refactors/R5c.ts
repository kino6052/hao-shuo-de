// R5c: dì 第's sense lists real Mandarin words, so dì-yī … dì-shí become
// composites (first … tenth), each said with dì and the number.
// Run: npm run refactor -- refactors/R5c.ts [--write]

const W = (id) => `{{word:${id}}}`;

const ORDERS = [
  ["一", "yi1", "dìyī", "first", "первый"],
  ["二", "er4", "dìèr", "second", "второй"],
  ["三", "san1", "dìsān", "third", "третий"],
  ["四", "si4", "dìsì", "fourth", "четвёртый"],
  ["五", "wu3", "dìwǔ", "fifth", "пятый"],
  ["六", "liu4", "dìliù", "sixth", "шестой"],
  ["七", "qi1", "dìqī", "seventh", "седьмой"],
  ["八", "ba1", "dìbā", "eighth", "восьмой"],
  ["九", "jiu3", "dìjiǔ", "ninth", "девятый"],
  ["十", "shi2", "dìshí", "tenth", "десятый"],
];

export default ORDERS.map(([n, id, py, en, ru], i) => ({
  op: "composite", zh: `第${n}`,
  create: { rank: 5430 + i, phase: 4, py, en, ru, pos: "number" },
  set: { hsd: [`${W("di4")}-${W(id)}`], tts: [`第${n}`], fit: "natural", transparent: true, proposed: true },
}));
