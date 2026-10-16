// Qián and hòu before a counted span of time name the one before or after.
// Pattern: qián / hòu + number + counting word + span
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "before-after",
  scene: "Acts out 'qián yī-gè rì wǒ zài jiā': a calendar page torn off and lying on the floor, the student looking back over a shoulder at the day before; Miao-miao asleep on the day before. Green: the page.",
  prose: {
    en: [
      "**To name the day or month before or after**, put {{word:qian2}} (before) or {{word:hou4}} (after) in front of a counted span of time.",
      "",
      "**{{word:qian2}} / {{word:hou4}} + number + counting word + span**",
      "",
      "{{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} is the day before. {{Word:hou4}} {{word:shi2}}-{{word:er4}}-{{light:ge4}} {{word:yue4}} is the twelve months after.",
    ],
    ru: [
      "**Чтобы назвать день или месяц до или после**, поставьте {{word:qian2}} (до) или {{word:hou4}} (после) перед посчитанным промежутком времени.",
      "",
      "**{{word:qian2}} / {{word:hou4}} + число + счётное слово + промежуток**",
      "",
      "{{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} — день до. {{Word:hou4}} {{word:shi2}}-{{word:er4}}-{{light:ge4}} {{word:yue4}} — двенадцать месяцев после.",
    ],
    tldr: {
      en: "{{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} is the day before. {{Word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} is the day after.",
      ru: "{{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} — день до. {{Word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} — день после.",
    },
    necessity: {
      en: "Now you can place a day or a month before or after another.",
      ru: "Теперь вы можете поставить день или месяц до или после другого.",
    },
  },
  info: {
    pattern: "qian-hou-span",
    en: "{{Word:qian2}} / {{word:hou4}} + number + counting word + span: {{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} {{word:wo3}} {{word:zai4}} {{word:jia1}}. (The day before, I was at home.)",
    ru: "{{Word:qian2}} / {{word:hou4}} + число + счётное слово + промежуток: {{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} {{word:wo3}} {{word:zai4}} {{word:jia1}}. (Днём раньше я был дома.)",
  },
  examples: [
    {
      pinyin: "{{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "前一个日我在家。",
      en: "The day before, I was at home.",
      ru: "Днём раньше я был дома.",
    },
    {
      pinyin: "{{Word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "后一个日我去。",
      en: "The day after, I go.",
      ru: "Днём позже я иду.",
    },
    {
      pinyin: "{{Word:qian2}} {{word:liang3}}-{{light:ge4}} {{word:ri4}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "前两个日他不来。",
      en: "Two days before, he didn't come.",
      ru: "Двумя днями раньше он не пришёл.",
    },
    {
      pinyin: "{{Word:hou4}} {{word:shi2}}-{{word:er4}}-{{light:ge4}} {{word:yue4}} {{word:wo3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "后十二个月我回家。",
      en: "In the twelve months after, I go home.",
      ru: "Через двенадцать месяцев я иду домой.",
    },
  ],
  exercises: [
    {
      en: "The day after, he comes.",
      ru: "Днём позже он приходит.",
      answer: "{{Word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} {{word:ta1}} {{word:lai2}}.",
      hanzi: "后一个日他来。",
    },
    {
      en: "Two months before, he didn't come.",
      ru: "Двумя месяцами раньше он не пришёл.",
      answer: "{{Word:qian2}} {{word:liang3}}-{{light:ge4}} {{word:yue4}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "前两个月他不来。",
    },
    {
      en: "The day before, I was at home.",
      ru: "Днём раньше я был дома.",
      answer: "{{Word:qian2}} {{word:yi1}}-{{light:ge4}} {{word:ri4}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "前一个日我在家。",
    },
  ],
});
