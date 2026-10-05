// To say part of something, use bù-fen (part). Pattern: zhè / nà / dà + bù-fen
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "part",
  words: [
    {
      word: "bu4",
      sense: "part",
      en: "part (in {{word:bu4}}-{{light:fen1}})",
      ru: "часть (в {{word:bu4}}-{{light:fen1}})",
    },
    {
      word: "fen1",
      en: "part, divide; {{word:bu4}}-{{light:fen1}}: part",
      ru: "часть, делить; {{word:bu4}}-{{light:fen1}} — часть",
    },
  ],
  prose: {
    en: [
      "**To say part of something**, use {{word:bu4}}-{{light:fen1}} (part).",
      "",
      "**{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4}}-{{light:fen1}}**",
      "",
      "{{word:da4}} {{word:bu4}}-{{light:fen1}} (the big part) means most: {{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:ren2}}, most people.",
    ],
    ru: [
      "**Чтобы сказать о части чего-то**, используйте {{word:bu4}}-{{light:fen1}} (часть).",
      "",
      "**{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4}}-{{light:fen1}}**",
      "",
      "{{word:da4}} {{word:bu4}}-{{light:fen1}} («большая часть») значит «большинство»: {{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:ren2}} — большинство людей.",
    ],
    tldr: {
      en: "{{word:bu4}}-{{light:fen1}} means part. {{word:da4}} {{word:bu4}}-{{light:fen1}} means most.",
      ru: "{{word:bu4}}-{{light:fen1}} значит «часть». {{word:da4}} {{word:bu4}}-{{light:fen1}} — «большинство».",
    },
    necessity: {
      en: "Now you can talk about some of it, not all of it.",
      ru: "Теперь вы можете говорить о части, а не обо всём.",
    },
  },
  info: {
    en: "{{word:bu4}}-{{light:fen1}}, part: {{Word:zhe4}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:hao3}}. (This part is good.) {{word:da4}} {{word:bu4}}-{{light:fen1}}: most.",
    ru: "{{word:bu4}}-{{light:fen1}} — часть: {{Word:zhe4}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:hao3}}. (Эта часть хорошая.) {{word:da4}} {{word:bu4}}-{{light:fen1}} — большинство.",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这部分很好。",
      en: "This part is good.",
      ru: "Эта часть хорошая.",
    },
    {
      pinyin: "{{Word:na4}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "那部分很热。",
      en: "That part is hot.",
      ru: "Та часть горячая.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:ren2}} {{word:ai4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "大部分人爱动物。",
      en: "Most people love animals.",
      ru: "Большинство людей любят животных.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "大部分植物很小。",
      en: "Most plants are small.",
      ru: "Большинство растений маленькие.",
    },
  ],
  exercises: [
    {
      en: "Most people love animals.",
      ru: "Большинство людей любят животных.",
      answer: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:ren2}} {{word:ai4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "大部分人爱动物。",
    },
  ],
});
