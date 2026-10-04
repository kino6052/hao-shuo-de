// To leave the noun out when it is clear, say just the number and gè.
// Pattern: number-gè
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "count-alone",
  prose: {
    en: [
      "**To leave the noun out**, when it's clear what you mean, say just the number and {{word:ge4}}.",
      "",
      "**number-{{word:ge4}}**",
      "",
      "{{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge is \"he wants six\": six of whatever you're talking about.",
    ],
    ru: [
      "**Чтобы не повторять существительное**, когда и так понятно, о чём речь, назовите только число и {{word:ge4}}.",
      "",
      "**число-{{word:ge4}}**",
      "",
      "{{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge — «он хочет шесть»: шесть того, о чём вы говорите.",
    ],
    tldr: {
      en: "When the noun is clear, say just the number and {{word:ge4}}: {{word:liu4}}-ge, six of them.",
      ru: "Когда вещь понятна, назовите только число и {{word:ge4}}: {{word:liu4}}-ge — шесть штук.",
    },
    necessity: {
      en: "Now you can say how many without repeating the noun.",
      ru: "Теперь вы можете сказать «сколько», не повторяя существительное.",
    },
  },
  info: {
    en: "number-ge, without the noun: {{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge. (He wants six.)",
    ru: "число-ge без существительного: {{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge. (Он хочет шесть.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge.",
      hanzi: "他要六个。",
      en: "He wants six.",
      ru: "Он хочет шесть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qi1}}-ge.",
      hanzi: "我要七个。",
      en: "I want seven.",
      ru: "Я хочу семь.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:san1}}-ge, {{word:ta1}} {{word:you3}} {{word:wu3}}-ge.",
      hanzi: "我有三个，他有五个。",
      en: "I have three, and he has five.",
      ru: "У меня три, а у него пять.",
    },
  ],
  exercises: [
    {
      en: "I want six.",
      ru: "Я хочу шесть.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:liu4}}-ge.",
      hanzi: "我要六个。",
    },
  ],
});
