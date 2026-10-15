// Jiù before a number and a counting word means only. Pattern: jiù + number + counting word
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "only",
  prose: {
    en: [
      "**To say only that many**, put {{word:jiu4}} before the number and the counting word.",
      "",
      "**{{word:jiu4}} + number + counting word**",
      "",
      "{{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}} is \"I have only one\". Don't mix it up with the last point: {{word:jiu4}} before a verb means then.",
    ],
    ru: [
      "**Чтобы сказать «только столько»**, поставьте {{word:jiu4}} перед числом и счётным словом.",
      "",
      "**{{word:jiu4}} + число + счётное слово**",
      "",
      "{{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}} — «У меня только один». Не путайте с предыдущим пунктом: {{word:jiu4}} перед глаголом значит «тогда».",
    ],
    tldr: {
      en: "{{Word:jiu4}} + number means only: {{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}, I have only one.",
      ru: "{{Word:jiu4}} + число — «только»: {{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}} — у меня только один.",
    },
    necessity: {
      en: "Now you can say there is only a little.",
      ru: "Теперь вы можете сказать, что есть лишь немного.",
    },
  },
  info: {
    pattern: "jiu-only",
    en: "{{Word:jiu4}} + number + counting word: {{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}. (I have only one.)",
    ru: "{{Word:jiu4}} + число + счётное слово: {{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}. (У меня только один.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "我就一个。",
      en: "I have only one.",
      ru: "У меня только один.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "家就一个。",
      en: "There is only one home.",
      ru: "Дом только один.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:jiu4}} {{word:san1}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "这个地方就三个人。",
      en: "There are only three people here.",
      ru: "В этом месте только три человека.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shu1}} {{word:jiu4}} {{word:liang3}}-{{light:ge4}}.",
      hanzi: "我的书就两个。",
      en: "I have only two books.",
      ru: "У меня только две книги.",
    },
  ],
  exercises: [
    {
      en: "I have only one.",
      ru: "У меня только один.",
      answer: "{{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "我就一个。",
    },
    {
      en: "He has only three.",
      ru: "У него только три.",
      answer: "{{Word:ta1}} {{word:jiu4}} {{word:san1}}-{{light:ge4}}.",
      hanzi: "他就三个。",
    },
    {
      en: "That place has only two people.",
      ru: "В том месте только два человека.",
      answer: "{{Word:na4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:jiu4}} {{word:liang3}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "那个地方就两个人。",
    },
  ],
});
