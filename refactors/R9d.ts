// R9d: finish the colour change. lán and huáng leave core; the module that
// taught lán (is-color) now explains "the colour of <thing>" for blue, green
// and yellow. 蓝 and 绿色 take the same forms; the word-builder's colour list
// loses the two words.
// Run: npm run refactor -- refactors/R9d.ts [--write]

const text = (file, from, to) => ({ op: "text", file, from, to });
const IS = "src/content/lessons/colors/is-color.ts";
const COMP = "src/data/composites/";
const BLUE = "{{word:tian1}}-{{word:de}} {{word:yan2se4}}";
const GREEN = "{{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}}";
const YELLOW = "{{word:jin1}}-{{word:de}} {{word:yan2se4}}";

export default [
  // composites
  text(`${COMP}lan-蓝.ts`,
    `  hsd: ["{{word:lan2}}", "${BLUE}"],
  tts: ["蓝", "天的颜色"],`,
    `  hsd: ["${BLUE}"],
  tts: ["天的颜色"],
  literal: "the colour of the sky",`),
  text(`${COMP}luse-绿色.ts`,
    `  hsd: ["${BLUE}"],
  tts: ["天的颜色"],
  literal: "blue-green",
  fit: "plain",
  note: "lán-sè covers green too.",`,
    `  hsd: ["${GREEN}"],
  tts: ["植物的颜色"],
  literal: "the colour of plants",
  fit: "plain",
  note: "Blue, green and yellow are named by an obvious thing: the sky, plants, gold.",`),
  text(`${COMP}huangse-黄色.ts`,
    `  hsd: ["${YELLOW}"],
  tts: ["金的颜色"],`,
    `  hsd: ["${YELLOW}"],
  tts: ["金的颜色"],
  literal: "the colour of gold",`),

  // the lesson: say it, and explain it
  text(IS,
    `      "**Thing + {{word:shi4}} + color-{{word:de}}**",
    ],`,
    `      "**Thing + {{word:shi4}} + color-{{word:de}}**",
      "",
      "Blue, green and yellow have no word of their own. Name a thing that has the color: ${BLUE} (the color of the sky) is blue, ${GREEN} (the color of plants) is green, and ${YELLOW} (the color of gold) is yellow.",
    ],`),
  text(IS,
    `      "**Вещь + {{word:shi4}} + цвет-{{word:de}}**",
    ],`,
    `      "**Вещь + {{word:shi4}} + цвет-{{word:de}}**",
      "",
      "У синего, зелёного и жёлтого нет своих слов. Назовите вещь такого цвета: ${BLUE} (цвет неба) — синий, ${GREEN} (цвет растений) — зелёный, а ${YELLOW} (цвет золота) — жёлтый.",
    ],`),
  text(IS,
    `    // why does lán-sè mean blue and green? (Hao-shuo-de choice; describe green)
    {
      question: {
        en: "Why does ${BLUE} mean blue and green?",
        ru: "Почему ${BLUE} значит и синий, и зелёный?",
      },
      en: "In full Mandarin, ${BLUE} is blue, and green has its own word. Hao-shuo-de keeps the list short, so it uses ${BLUE} for both. To make green clear, describe it: ${GREEN} (the color of plants).",
      ru: "В полном китайском ${BLUE} — это синий, а для зелёного есть своё слово. Hǎo-shuō-de держит список коротким, поэтому ${BLUE} — это и синий, и голубой, и зелёный. Чтобы ясно сказать «зелёный», опишите его: ${GREEN} (цвет растений).",
    },`,
    `    // why are blue, green and yellow made of other words? (Hao-shuo-de choice)
    {
      question: {
        en: "Why is blue ${BLUE}, not a word of its own?",
        ru: "Почему «синий» — это ${BLUE}, а не отдельное слово?",
      },
      en: "In full Mandarin, blue, green and yellow each have a word. Hao-shuo-de keeps the list short, so it names these colors by a thing that has them: the sky, plants, gold. The same way works for any other color: say the color of a thing you both know.",
      ru: "В полном китайском у синего, зелёного и жёлтого есть свои слова. Hǎo-shuō-de держит список коротким и называет эти цвета через вещь, у которой они есть: небо, растения, золото. Так можно сказать о любом другом цвете: назовите цвет вещи, которую знаете вы оба.",
    },`),
  text(IS,
    `      en: "The water is blue.",
      ru: "Вода синяя.",`,
    `      en: "The bag is green.",
      ru: "Сумка зелёная.",
      answer: "{{Word:bao1}} {{word:shi4}} ${GREEN}-{{word:de}}.",
      hanzi: "包是植物的颜色的。",
    },
    {
      en: "The water is blue.",
      ru: "Вода синяя.",`),

  // lán and huáng are gone from core
  { op: "remove", id: "lan2" },
  { op: "remove", id: "huang2" },
  text("src/lib/word-builder.js",
    `const COLORS = new Set(["bai2", "hei1", "hong2", "huang2", "lan2"]);`,
    `const COLORS = new Set(["bai2", "hei1", "hong2"]);`),
  text("src/lib/word-builder.test.js",
    `color: word(node("huang2")),`,
    `color: word(node("hong2")),`),
  text("src/lib/word-builder.test.js",
    `xiǎo-de huáng-de dòng-wù`,
    `xiǎo-de hóng-de dòng-wù`),
];
