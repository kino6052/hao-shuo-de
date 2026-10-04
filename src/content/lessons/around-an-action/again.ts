// To say something happens again, put yòu before the verb and le after it.
// Pattern: Who + yòu + verb + le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "again",
  words: [
    {
      term: "{{word:you4}}",
      hanzi: "又",
      en: "again",
      ru: "снова, опять",
    },
  ],
  prose: {
    en: [
      "**To say something happens again**, put {{word:you4}} (again) before the verb, and {{word:le}} after it.",
      "",
      "**Who + {{word:you4}} + verb + {{word:le}}**",
      "",
      "To say you're about to do it again, add {{word:yao4}}: {{Word:wo3}} {{word:you4}} {{word:yao4}} {{word:chi1}} {{word:le}}.",
    ],
    ru: [
      "**Чтобы сказать, что что-то случилось снова**, поставьте {{word:you4}} (опять) перед глаголом, а {{word:le}} — после него.",
      "",
      "**Кто + {{word:you4}} + глагол + {{word:le}}**",
      "",
      "Чтобы сказать, что вы собираетесь сделать это снова, добавьте {{word:yao4}}: {{Word:wo3}} {{word:you4}} {{word:yao4}} {{word:chi1}} {{word:le}}.",
    ],
    tldr: {
      en: "Put {{word:you4}} before the verb to say it happened again.",
      ru: "Поставьте {{word:you4}} перед глаголом, чтобы сказать, что это случилось опять.",
    },
    necessity: {
      en: "Now you can say something happened again.",
      ru: "Теперь вы можете сказать, что что-то случилось снова.",
    },
  },
  info: {
    en: "{{word:you4}} + verb + {{word:le}}, again: {{Word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}. (He ate again.)",
    ru: "{{word:you4}} + глагол + {{word:le}} — опять: {{Word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}. (Он опять поел.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}.",
      hanzi: "他又吃了。",
      en: "He ate again.",
      ru: "Он опять поел.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you4}} {{word:shui4jiao4}} {{word:le}}!",
      hanzi: "你又睡觉了！",
      en: "You fell asleep again!",
      ru: "Ты опять заснул!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you4}} {{word:kan4}} {{word:le}} {{word:yi1xia4}}.",
      hanzi: "我又看了一下。",
      en: "I had another look.",
      ru: "Я посмотрел ещё раз.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you4}} {{word:yao4}} {{word:chi1}} {{word:le}}.",
      hanzi: "我又要吃了。",
      en: "I'm going to eat again.",
      ru: "Я опять собираюсь поесть.",
    },
  ],
  exercises: [
    {
      en: "She fell asleep again.",
      ru: "Она опять заснула.",
      answer: "{{Word:ta1}} {{word:you4}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "她又睡觉了。",
    },
  ],
});
