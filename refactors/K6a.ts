// K6a: word classes, first three: the sentences of the book that parse once a word fills one more class.
// Found by `node scripts/kb.js classes`. Each is marked proposed: the parser uses it, the author has not accepted it.
// Not here: duō, zi, gānjìng and others, whose single sentences are better reworded; dui, xia, hǎo and nán, which
// a pattern rule covers for now.
// Run: npm run refactor -- refactors/K6a.ts [--check] [--write]

export default [
  {
    op: "classes",
    id: "tong4",
    add: {
      noun: {
        why: {
          eng: "Pain is also the thing you get: you have it, you do not only feel it.",
          rus: "Боль ещё и то, что получаешь: она у тебя есть, ты не только её чувствуешь.",
        },
        example: "Wǒ dé le tòng.",
        proposed: true,
      },
    },
  },
  {
    op: "classes",
    id: "mian4",
    add: {
      measure_word: {
        why: {
          eng: "Counts the sides of a thing: yī-miàn is one side, one page of a thing.",
          rus: "Считает стороны вещи: yī-miàn — одна сторона, одна страница вещи.",
        },
        example: "Wǒ kàn wǎng-shàng-de yī-miàn.",
        proposed: true,
      },
    },
  },
  {
    op: "classes",
    id: "bi3",
    add: {
      verb: {
        why: {
          eng: "To compare two things: bǐ yī-xià is compare for a moment; bǐ-de rén are the people who compare.",
          rus: "Сравнивать две вещи: bǐ yī-xià — сравнить на мгновение; bǐ-de rén — люди, которые сравнивают.",
        },
        example: "Tā shì bǐ-de rén.",
        proposed: true,
      },
    },
  },
];
