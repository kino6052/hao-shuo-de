// Duì on its own says right. Pattern: duì / bù duì
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "right",
  prose: {
    en: [
      "**On its own, {{word:dui4}} says something is right.** {{Word:bu4}} {{word:dui4}} says it is wrong.",
      "",
      "**Thing + {{word:dui4}} / {{word:bu4}} {{word:dui4}}**",
      "",
      "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}} is \"What you say is right\". Compare the last point: {{word:dui4}} before a person points at them.",
    ],
    ru: [
      "**Само по себе {{word:dui4}} значит «верно».** {{Word:bu4}} {{word:dui4}} — «неверно».",
      "",
      "**Вещь + {{word:dui4}} / {{word:bu4}} {{word:dui4}}**",
      "",
      "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}} — «То, что ты говоришь, верно». Сравните с предыдущим пунктом: {{word:dui4}} перед человеком направлено на него.",
    ],
    tldr: {
      en: "{{Word:dui4}} alone is right, {{word:bu4}} {{word:dui4}} is wrong: {{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}.",
      ru: "{{Word:dui4}} — верно, {{word:bu4}} {{word:dui4}} — неверно: {{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}.",
    },
    necessity: {
      en: "Now you can say that something is right or wrong.",
      ru: "Теперь вы можете сказать, что что-то верно или неверно.",
    },
  },
  info: {
    pattern: "dui-correct",
    en: "Thing + {{word:dui4}} / {{word:bu4}} {{word:dui4}}: {{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}. (What you say is right.)",
    ru: "Вещь + {{word:dui4}} / {{word:bu4}} {{word:dui4}}: {{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}. (То, что ты говоришь, верно.)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}.",
      hanzi: "你说的对。",
      en: "What you say is right.",
      ru: "То, что ты говоришь, верно.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "你说的不对。",
      en: "What you say is wrong.",
      ru: "То, что ты говоришь, неверно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dui4}}.",
      hanzi: "这个对。",
      en: "This is right.",
      ru: "Это верно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}.",
      hanzi: "他知道你说的对。",
      en: "He knows what you say is right.",
      ru: "Он знает, что ты говоришь верно.",
    },
  ],
  exercises: [
    {
      en: "That is right.",
      ru: "То верно.",
      answer: "{{Word:na4}}-{{light:ge4}} {{word:dui4}}.",
      hanzi: "那个对。",
    },
    {
      en: "This is wrong.",
      ru: "Это неверно.",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "这个不对。",
    },
    {
      en: "What he writes is wrong.",
      ru: "То, что он пишет, неверно.",
      answer: "{{Word:ta1}} {{word:xie3}}-{{word:de}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "他写的不对。",
    },
  ],
});
