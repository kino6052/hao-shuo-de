// To say something changed, put le after the adjective. Pattern: Thing +
// adjective + le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "changed",
  words: [
    {
      term: "{{word:huai4}}",
      hanzi: "坏",
      en: "bad, broken",
      ru: "плохой, сломанный",
    },
    {
      term: "{{word:luan4}}",
      hanzi: "乱",
      en: "messy",
      ru: "в беспорядке",
    },
  ],
  prose: {
    en: [
      "**To say something changed**, put {{word:le}} after the adjective.",
      "",
      "**Thing + adjective + {{word:le}}**",
    ],
    ru: [
      "**Чтобы сказать, что что-то изменилось**, поставьте {{word:le}} после прилагательного.",
      "",
      "**Вещь + прилагательное + {{word:le}}**",
    ],
    tldr: {
      en: "{{word:le}} after an adjective means it changed: {{Word:shui3}} {{word:re4}} {{word:le}}, the water got hot.",
      ru: "{{word:le}} после прилагательного значит, что что-то изменилось: {{Word:shui3}} {{word:re4}} {{word:le}} — вода нагрелась.",
    },
    necessity: {
      en: "Now you can say how things turned out.",
      ru: "Теперь вы можете сказать, чем всё обернулось.",
    },
  },
  info: {
    en: "adjective + {{word:le}}, it changed: {{Word:shui3}} {{word:re4}} {{word:le}}. (The water got hot.)",
    ru: "прилагательное + {{word:le}} — изменилось: {{Word:shui3}} {{word:re4}} {{word:le}}. (Вода нагрелась.)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:re4}} {{word:le}}.",
      hanzi: "水热了。",
      en: "The water got hot.",
      ru: "Вода нагрелась.",
    },
    {
      pinyin: "{{Word:hao3}} {{word:le}}.",
      hanzi: "好了。",
      en: "It's better now.",
      ru: "Стало лучше.",
    },
    {
      pinyin: "{{Word:shui3guo3}} {{word:huai4}} {{word:le}}.",
      hanzi: "水果坏了。",
      en: "The fruit went bad.",
      ru: "Фрукт испортился.",
    },
    {
      pinyin: "{{Word:gong1ju4}} {{word:huai4}} {{word:le}}.",
      hanzi: "工具坏了。",
      en: "The tool is broken.",
      ru: "Инструмент сломался.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:luan4}} {{word:le}}.",
      hanzi: "家乱了。",
      en: "The house got messy.",
      ru: "В доме стал беспорядок.",
    },
  ],
  exercises: [
    {
      en: "The rice got cold.",
      ru: "Рис остыл.",
      answer: "{{Word:mi3fan4}} {{word:leng3}} {{word:le}}.",
      hanzi: "米饭冷了。",
    },
    {
      en: "My tool is broken.",
      ru: "Мой инструмент сломался.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:gong1ju4}} {{word:huai4}} {{word:le}}.",
      hanzi: "我的工具坏了。",
    },
  ],
  faq: [
    // is this le the same as in Lesson {{lesson:when-it-happens}}?
    {
      question: {
        en: "Is this {{word:le}} the same as in Lesson {{lesson:when-it-happens}}?",
        ru: "Это то же {{word:le}}, что в уроке {{lesson:when-it-happens}}?",
      },
      en: "It's the same word, with a slightly different job. After a verb, it says the action is done. After an adjective, it says something changed: {{Word:shui3}} {{word:re4}} {{word:le}} (The water got hot).",
      ru: "Это то же слово, но с немного другой работой. После глагола оно говорит, что действие сделано. После прилагательного — что что-то изменилось: {{Word:shui3}} {{word:re4}} {{word:le}} (Вода нагрелась).",
    },
  ],
});
