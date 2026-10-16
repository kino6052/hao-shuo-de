// To say how you make a thing end up, put bǎ and the thing before the describing word.
// Pattern: Who + bǎ + thing + describing word
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "ba-clean",
  scene: "Acts out 'wǒ bǎ fáng-jiān gānjìng': the student sweeps the floor of a tidy room with a broom, a clean line of sunlight on the boards; Miao-miao sits on the one clean spot. Green: the broom.",
  words: [],
  prose: {
    en: [
      "**To say how you make a thing end up**, put {{word:ba3}} and the thing before a describing word.",
      "",
      "**Who + {{word:ba3}} + thing + describing word**",
    ],
    ru: [
      "**Чтобы сказать, какой вы делаете вещь**, поставьте {{word:ba3}} и вещь перед словом-описанием.",
      "",
      "**Кто + {{word:ba3}} + вещь + слово-описание**",
    ],
    tldr: {
      en: "{{word:ba3}} + thing + describing word: {{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}. (I make the room clean.)",
      ru: "{{word:ba3}} + вещь + слово-описание: {{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}. (Я делаю комнату чистой.)",
    },
    necessity: {
      en: "Now you can say how you want a thing to end up, with no action word.",
      ru: "Теперь вы можете сказать, какой вы хотите сделать вещь, без слова действия.",
    },
  },
  info: {
    pattern: "ba-make-clean",
    en: "{{word:ba3}} + thing + describing word: {{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}. (I make the room clean.) The describing word says how the thing ends up.",
    ru: "{{word:ba3}} + вещь + слово-описание: {{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}. (Я делаю комнату чистой.) Слово-описание говорит, какой вещь станет.",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}.",
      hanzi: "我把房间干净。",
      en: "I make the room clean.",
      ru: "Я делаю комнату чистой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:yi1fu}} {{word:gan1jing4}}.",
      hanzi: "他把衣服干净。",
      en: "He makes the clothes clean.",
      ru: "Он делает одежду чистой.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:gong1}}-{{word:ju4}} {{word:gan1jing4}}.",
      hanzi: "把工具干净。",
      en: "Make the tool clean.",
      ru: "Сделай инструмент чистым.",
    },
  ],
  exercises: [
    {
      en: "I make the clothes clean.",
      ru: "Я делаю одежду чистой.",
      answer: "{{Word:wo3}} {{word:ba3}} {{word:yi1fu}} {{word:gan1jing4}}.",
      hanzi: "我把衣服干净。",
    },
    {
      en: "Make the room clean.",
      ru: "Сделай комнату чистой.",
      answer: "{{Word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}.",
      hanzi: "把房间干净。",
    },
  ],
  faq: [
    // how is this different from the first bǎ? (a describing word instead of an action word)
    {
      question: { en: "How is this different from the first {{word:ba3}}?", ru: "Чем это отличается от первого {{word:ba3}}?" },
      en: "The first one ends with an action and a result: {{Word:wo3}} {{word:ba3}} {{word:bao1}} {{word:zuo4}} {{word:hao3}} {{word:le}}. This one ends with just the describing word: how the thing ends up.",
      ru: "Первый заканчивается действием и результатом: {{Word:wo3}} {{word:ba3}} {{word:bao1}} {{word:zuo4}} {{word:hao3}} {{word:le}}. Этот заканчивается одним словом-описанием: какой вещь станет.",
    },
  ],
});
