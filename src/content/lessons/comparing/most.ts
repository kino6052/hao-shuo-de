// To say the most, put zuì before the adjective. zuì-hòu is "last". Pattern:
// Thing + zuì + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "most",
  words: [
    {
      term: "{{word:zui4}}",
      hanzi: "最",
      en: "most",
      ru: "самый",
    },
  ],
  prose: {
    en: [
      "**To say the most**, put {{word:zui4}} (most) before the adjective.",
      "",
      "**Thing + {{word:zui4}} + adjective**",
      "",
      "{{word:zui4}}-{{word:hou4}} (most behind) is \"last\": {{Word:ta1}} {{word:zui4}}-{{word:hou4}} {{word:lai2}}, he came last.",
    ],
    ru: [
      "**Чтобы сказать «самый»**, поставьте {{word:zui4}} (самый) перед прилагательным.",
      "",
      "**Вещь + {{word:zui4}} + прилагательное**",
      "",
      "{{word:zui4}}-{{word:hou4}} («самый задний») — это «последний»: {{Word:ta1}} {{word:zui4}}-{{word:hou4}} {{word:lai2}} — он пришёл последним.",
    ],
    tldr: {
      en: "{{word:zui4}} + adjective is the most: {{word:zui4}} {{word:da4}}, the biggest.",
      ru: "{{word:zui4}} + прилагательное — «самый»: {{word:zui4}} {{word:da4}} — самый большой.",
    },
    necessity: {
      en: "Now you can say which one is the biggest or the best.",
      ru: "Теперь вы можете сказать, что самое большое или самое лучшее.",
    },
  },
  info: {
    en: "{{word:zui4}} + adjective, the most: {{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}. (This one is the biggest.)",
    ru: "{{word:zui4}} + прилагательное — самый: {{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}. (Этот самый большой.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}.",
      hanzi: "这个最大。",
      en: "This one is the biggest.",
      ru: "Этот самый большой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zui4}} {{word:kuai4}}.",
      hanzi: "他最快。",
      en: "He's the fastest.",
      ru: "Он самый быстрый.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:zui4}} {{word:hao3}}?",
      hanzi: "什么最好？",
      en: "What's best?",
      ru: "Что лучше всего?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zui4}} {{word:ai4}} {{word:shui3guo3}}.",
      hanzi: "我最爱水果。",
      en: "I love fruit the most.",
      ru: "Больше всего я люблю фрукты.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zui4}}-{{word:hou4}} {{word:lai2}}.",
      hanzi: "他最后来。",
      en: "He came last.",
      ru: "Он пришёл последним.",
    },
  ],
  exercises: [
    {
      en: "This one is the biggest.",
      ru: "Этот самый большой.",
      answer: "{{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}.",
      hanzi: "这个最大。",
    },
  ],
});
