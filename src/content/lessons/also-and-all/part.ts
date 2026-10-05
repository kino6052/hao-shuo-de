// To say part of something, use bùfen (part). Pattern: zhè / nà / dà + bùfen
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "part",
  words: [
    {
      word: "bu4fen",
      en: "part",
      ru: "часть",
    },
  ],
  prose: {
    en: [
      "**To say part of something**, use {{word:bu4fen}} (part).",
      "",
      "**{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4fen}}**",
      "",
      "{{word:da4}} {{word:bu4fen}} (the big part) means most: {{Word:da4}} {{word:bu4fen}} {{word:ren2}}, most people.",
    ],
    ru: [
      "**Чтобы сказать о части чего-то**, используйте {{word:bu4fen}} (часть).",
      "",
      "**{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4fen}}**",
      "",
      "{{word:da4}} {{word:bu4fen}} («большая часть») значит «большинство»: {{Word:da4}} {{word:bu4fen}} {{word:ren2}} — большинство людей.",
    ],
    tldr: {
      en: "{{word:bu4fen}} means part. {{word:da4}} {{word:bu4fen}} means most.",
      ru: "{{word:bu4fen}} значит «часть». {{word:da4}} {{word:bu4fen}} — «большинство».",
    },
    necessity: {
      en: "Now you can talk about some of it, not all of it.",
      ru: "Теперь вы можете говорить о части, а не обо всём.",
    },
  },
  info: {
    en: "{{word:bu4fen}}, part: {{Word:zhe4}} {{word:bu4fen}} {{word:hen3}} {{word:hao3}}. (This part is good.) {{word:da4}} {{word:bu4fen}}: most.",
    ru: "{{word:bu4fen}} — часть: {{Word:zhe4}} {{word:bu4fen}} {{word:hen3}} {{word:hao3}}. (Эта часть хорошая.) {{word:da4}} {{word:bu4fen}} — большинство.",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:bu4fen}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这部分很好。",
      en: "This part is good.",
      ru: "Эта часть хорошая.",
    },
    {
      pinyin: "{{Word:na4}} {{word:bu4fen}} {{word:hen3}} {{word:re4}}.",
      hanzi: "那部分很热。",
      en: "That part is hot.",
      ru: "Та часть горячая.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4fen}} {{word:ren2}} {{word:ai4}} {{word:dong4wu4}}.",
      hanzi: "大部分人爱动物。",
      en: "Most people love animals.",
      ru: "Большинство людей любят животных.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4fen}} {{word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "大部分植物很小。",
      en: "Most plants are small.",
      ru: "Большинство растений маленькие.",
    },
  ],
  exercises: [
    {
      en: "Most people love animals.",
      ru: "Большинство людей любят животных.",
      answer: "{{Word:da4}} {{word:bu4fen}} {{word:ren2}} {{word:ai4}} {{word:dong4wu4}}.",
      hanzi: "大部分人爱动物。",
    },
  ],
});
