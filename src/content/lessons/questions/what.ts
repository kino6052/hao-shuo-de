// To ask "what?", put shénme right where the answer would go. Pattern: Who +
// verb + shénme?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "what",
  words: [
    {
      word: "shen2me",
      en: "what, which",
      ru: "что, какой",
    },
    {
      word: "wen4",
      en: "ask",
      ru: "спрашивать",
    },
    {
      word: "zhao3",
      en: "look for",
      ru: "искать",
    },
    {
      word: "mai3",
      en: "buy",
      ru: "покупать",
    },
  ],
  prose: {
    en: [
      "**To ask \"what?\"**, put {{word:shen2me}} right where the answer would go.",
      "",
      "**Who + verb + {{word:shen2me}}?**",
      "",
      "The rest of the sentence stays the same. {{word:shen2me}} {{word:ren2}} means who.",
    ],
    ru: [
      "**Чтобы спросить «что?»**, поставьте {{word:shen2me}} туда, где стоял бы ответ.",
      "",
      "**Кто + глагол + {{word:shen2me}}?**",
      "",
      "Остальное предложение не меняется. {{word:shen2me}} {{word:ren2}} значит «кто».",
    ],
    tldr: {
      en: "Put {{word:shen2me}} (what) right where the answer would go.",
      ru: "Поставьте {{word:shen2me}} (что) туда, где стоял бы ответ.",
    },
    necessity: {
      en: "You don't need to move any words to ask a question.",
      ru: "Чтобы задать вопрос, не нужно переставлять слова.",
    },
  },
  info: {
    en: "{{word:shen2me}} where the answer goes: {{Word:ni3}} {{word:zhao3}} {{word:shen2me}}? (What are you looking for?)",
    ru: "{{word:shen2me}} там, где стоит ответ: {{Word:ni3}} {{word:zhao3}} {{word:shen2me}}? (Что ты ищешь?)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zhao3}} {{word:shen2me}}?",
      hanzi: "你找什么？",
      en: "What are you looking for?",
      ru: "Что ты ищешь?",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "这是什么？",
      en: "What is this?",
      ru: "Что это?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:wen4}} {{word:shen2me}}?",
      hanzi: "他问什么？",
      en: "What does he ask?",
      ru: "О чём он спрашивает?",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:ren2}} {{word:chi1}} {{word:zhe4}}-ge?",
      hanzi: "什么人吃这个？",
      en: "Who eats this?",
      ru: "Кто это ест?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}} {{word:he2zi}}.",
      hanzi: "我找盒子。",
      en: "I'm looking for a box.",
      ru: "Я ищу коробку.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:mai3}} {{word:shen2me}}?",
      hanzi: "你买什么？",
      en: "What are you buying?",
      ru: "Что ты покупаешь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:he2zi}}.",
      hanzi: "我买盒子。",
      en: "I'm buying a box.",
      ru: "Я покупаю коробку.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mai3}} {{word:gong1}}-{{word:ju4}} {{word:ma}}?",
      hanzi: "他买工具吗？",
      en: "Is he buying a tool?",
      ru: "Он покупает инструмент?",
    },
  ],
  exercises: [
    {
      en: "What tools do you have?",
      ru: "Какие у тебя есть инструменты?",
      answer: "{{Word:ni3}} {{word:you3}} {{word:shen2me}} {{word:gong1}}-{{word:ju4}}?",
      hanzi: "你有什么工具？",
    },
    {
      en: "Who is asking?",
      ru: "Кто спрашивает?",
      answer: "{{Word:shen2me}} {{word:ren2}} {{word:wen4}}?",
      hanzi: "什么人问？",
    },
    {
      en: "Are you buying a tool?",
      ru: "Ты покупаешь инструмент?",
      answer: "{{Word:ni3}} {{word:mai3}} {{word:gong1}}-{{word:ju4}} {{word:ma}}?",
      hanzi: "你买工具吗？",
    },
  ],
});
