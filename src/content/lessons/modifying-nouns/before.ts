// To put an adjective before a noun, join them with -de. Pattern:
// adjective-de + NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "before",
  words: [
    {
      word: "de",
      en: "joins an adjective to a noun",
      ru: "связывает прилагательное с существительным",
    },
  ],
  prose: {
    en: [
      "**To put an adjective before a noun**, join them with -{{word:de}} (like \"{{word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}}\").",
      "",
      "**adjective-{{word:de}} + NOUN**",
      "",
      "Mandarin speakers often drop -{{word:de}} after a short adjective: {{word:da4}} {{word:di4}}-{{light:fang1}}. Hao-shuo-de always keeps it. With -{{word:de}}, it's always correct Mandarin, so it's the only rule you need.",
    ],
    ru: [
      "**Чтобы поставить прилагательное перед существительным**, соедините их с помощью -{{word:de}} (например, «{{word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}}»).",
      "",
      "**прилагательное-{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "Носители китайского часто опускают -{{word:de}} после короткого прилагательного: {{word:da4}} {{word:di4}}-{{light:fang1}}. В Hǎo-shuō-de его всегда сохраняют. С -{{word:de}} это всегда правильный китайский, так что это единственное правило, которое вам нужно.",
    ],
    tldr: {
      en: "To put an adjective before a noun, join them with {{word:de}}.",
      ru: "Чтобы поставить прилагательное перед существительным, соедините их с помощью {{word:de}}.",
    },
    necessity: {
      en: "Now you can say \"a big place\", not only \"the place is big\".",
      ru: "Теперь можно сказать «большое место», а не только «место большое».",
    },
  },
  info: {
    en: "adjective + -{{word:de}} + NOUN: {{word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}} (a big place)",
    ru: "прилагательное + -{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ: {{word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}} (большое место)",
  },
  examples: [
    {
      pinyin: "{{Word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "大的地方。",
      en: "A big place.",
      ru: "Большое место.",
    },
    {
      pinyin: "{{Word:hao3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}}.",
      hanzi: "好的爸爸妈妈。",
      en: "Good parents.",
      ru: "Хорошие родители.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xiao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这是小的地方。",
      en: "This is a small place.",
      ru: "Это маленькое место.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:shui3}}.",
      hanzi: "这是好的水。",
      en: "This is good water.",
      ru: "Это хорошая вода.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:da4}}-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这是大的动物。",
      en: "This is a big animal.",
      ru: "Это большое животное.",
    },
  ],
  exercises: [
    {
      en: "a big place",
      ru: "большое место",
      answer: "{{Word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
      hanzi: "大的地方",
    },
    {
      en: "good parents",
      ru: "хорошие родители",
      answer: "{{Word:hao3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}}",
      hanzi: "好的爸爸妈妈",
    },
  ],
});
