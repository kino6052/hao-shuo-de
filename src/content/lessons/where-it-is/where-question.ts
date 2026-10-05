// To ask "where?", put nǎ-lǐ where the place would go. Pattern: Who + zài
// nǎ-lǐ?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "where-question",
  words: [
    {
      word: "na3",
      en: "which; {{word:na3}}-{{word:li3}}: where",
      ru: "какой; {{word:na3}}-{{word:li3}} — где",
    },
  ],
  prose: {
    en: [
      "**To ask \"where?\"**, put {{word:na3}}-{{word:li3}} where the place would go.",
      "",
      "**Who + {{word:zai4}} {{word:na3}}-{{word:li3}}?**",
      "",
      "Answer with {{word:zhe4}}-{{word:li3}} (\"here\") or {{word:na4}}-{{word:li3}} (\"there\").",
    ],
    ru: [
      "**Чтобы спросить «где?»**, поставьте {{word:na3}}-{{word:li3}} туда, где стояло бы место.",
      "",
      "**Кто + {{word:zai4}} {{word:na3}}-{{word:li3}}?**",
      "",
      "Отвечайте {{word:zhe4}}-{{word:li3}} («здесь») или {{word:na4}}-{{word:li3}} («там»).",
    ],
    tldr: {
      en: "{{word:na3}}-{{word:li3}} means \"where\". Answer with {{word:zhe4}}-{{word:li3}} (here) or {{word:na4}}-{{word:li3}} (there).",
      ru: "{{word:na3}}-{{word:li3}} значит «где». Отвечайте {{word:zhe4}}-{{word:li3}} (здесь) или {{word:na4}}-{{word:li3}} (там).",
    },
    necessity: {
      en: "Now you can ask where things are.",
      ru: "Теперь вы можете спросить, где что находится.",
    },
  },
  info: {
    en: "{{word:na3}}-{{word:li3}}, where: {{Word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}}? (Where are you?)",
    ru: "{{word:na3}}-{{word:li3}} — где: {{Word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}}? (Где ты?)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你在哪里？",
      en: "Where are you?",
      ru: "Где ты?",
    },
    {
      pinyin: "{{Word:he2zi}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "盒子在哪里？",
      en: "Where is the box?",
      ru: "Где коробка?",
    },
    {
      pinyin: "{{Word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "在那里。",
      en: "It's over there.",
      ru: "Она вон там.",
    },
  ],
  exercises: [
    {
      en: "Where is my tool?",
      ru: "Где мой инструмент?",
      answer: "{{Word:wo3}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "我的工具在哪里？",
    },
  ],
});
