import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "four-colors",
  prose: {
    en: [
      "<h2>One year, four colors</h2>",
      "The lessons follow one school year, from September to the next summer.",
      "The pictures are black lines on white, with one color for each season: orange in autumn, blue in winter, pale green in spring, yellow in summer.",
      "The color is only a clock. It tells you where in the year you are.",
    ],
    ru: [
      "<h2>Один год, четыре цвета</h2>",
      "Уроки идут вслед за одним учебным годом: от сентября до следующего лета.",
      "Картинки нарисованы чёрными линиями на белом, и у каждого времени года свой цвет: оранжевый осенью, синий зимой, бледно-зелёный весной, жёлтый летом.",
      "Цвет — это просто часы. Он подсказывает, в какой части года вы находитесь.",
    ],
  },
  image: {
    file: "intro-4-seasons",
    alt: {
      en: "Four small pictures of the same street corner, one for each season, each with one color: orange, blue, pale green, yellow.",
      ru: "Четыре маленькие картинки одного и того же угла улицы, по одной на каждое время года, и у каждой свой цвет: оранжевый, синий, бледно-зелёный, жёлтый.",
    },
    pinyin: "{{Word:yi1}} {{word:nian2}}.",
    hanzi: "一年。",
    en: "One year.",
    ru: "Один год.",
  },
});
