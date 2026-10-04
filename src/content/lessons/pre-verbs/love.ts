// I love to do something. Who + ài + verb.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "love",
  words: [
    {
      term: "{{word:ai4}}",
      hanzi: "爱",
      en: "love; love to",
      ru: "любить; любить что-то делать",
    },
  ],
  prose: {
    en: [
      "**To say you love to do something**, put {{word:ai4}} (love) before the verb.",
      "",
      "**Who + {{word:ai4}} + verb**",
      "",
      "It works with a person or a thing too: {{Word:wo3}} {{word:ai4}} {{word:ni3}} means \"I love you\".",
    ],
    ru: [
      "**Чтобы сказать, что вы любите что-то делать**, поставьте {{word:ai4}} (любить) перед глаголом.",
      "",
      "**Кто + {{word:ai4}} + глагол**",
      "",
      "С человеком или вещью тоже работает: {{Word:wo3}} {{word:ai4}} {{word:ni3}} значит «Я тебя люблю».",
    ],
    tldr: {
      en: "Put {{word:ai4}} before a verb to say you love doing it.",
      ru: "Поставьте {{word:ai4}} перед глаголом, чтобы сказать, что любите это делать.",
    },
    necessity: {
      en: "Now you can talk about what you like.",
      ru: "Теперь вы можете говорить о том, что вам нравится.",
    },
  },
  info: {
    en: "{{word:ai4}} + verb, love to: {{Word:wo3}} {{word:ai4}} {{word:chi1}}. (I love to eat.)",
    ru: "{{word:ai4}} + глагол — любить: {{Word:wo3}} {{word:ai4}} {{word:chi1}}. (Я люблю поесть.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:chi1}}.",
      hanzi: "我爱吃。",
      en: "I love to eat.",
      ru: "Я люблю поесть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ting1}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我爱听你说。",
      en: "I love listening to you talk.",
      ru: "Я люблю слушать, как ты говоришь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ai4}} {{word:kan4}}.",
      hanzi: "她爱看。",
      en: "She loves to read.",
      ru: "Она любит читать.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:ni3}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我爱看你的衣服。",
      en: "I love looking at your clothes.",
      ru: "Я люблю смотреть на твою одежду.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ai4}} {{word:xie3}} {{word:ma}}?",
      hanzi: "你爱写吗？",
      en: "Do you love to write?",
      ru: "Ты любишь писать?",
    },
  ],
  exercises: [
    {
      en: "She loves to eat fruit.",
      ru: "Она любит есть фрукты.",
      answer: "{{Word:ta1}} {{word:ai4}} {{word:chi1}} {{word:shui3guo3}}.",
      hanzi: "她爱吃水果。",
    },
  ],
});
