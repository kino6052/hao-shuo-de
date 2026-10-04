// To say "after doing something", put hòu after the finished action, then a
// comma. Pattern: verb-wán hòu, the rest
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "after",
  words: [
    {
      term: "{{word:hou4}}",
      hanzi: "后",
      en: "after; behind",
      ru: "после; сзади",
    },
    {
      term: "{{word:liu2}}",
      hanzi: "留",
      en: "stay, keep",
      ru: "оставаться, оставлять",
    },
  ],
  prose: {
    en: [
      "**To say \"after doing something\"**, put {{word:hou4}} after the finished action, then a comma.",
      "",
      "**verb-{{word:wan2}} {{word:hou4}}, the rest**",
    ],
    ru: [
      "**Чтобы сказать «после того как»**, поставьте {{word:hou4}} после законченного действия, а потом запятую.",
      "",
      "**глагол-{{word:wan2}} {{word:hou4}}, остальное**",
    ],
    tldr: {
      en: "verb-{{word:wan2}} {{word:hou4}} means \"after doing it\".",
      ru: "глагол-{{word:wan2}} {{word:hou4}} значит «после того как сделал».",
    },
    necessity: {
      en: "Now you can put two actions in order.",
      ru: "Теперь вы можете расставить два действия по порядку.",
    },
  },
  info: {
    en: "verb-{{word:wan2}} {{word:hou4}}, after: {{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}. (After eating, I sleep.)",
    ru: "глагол-{{word:wan2}} {{word:hou4}} — после: {{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}. (После еды я сплю.)",
  },
  examples: [
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}.",
      hanzi: "吃完后，我睡觉。",
      en: "After eating, I sleep.",
      ru: "После еды я сплю.",
    },
    {
      pinyin: "{{Word:xie3}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:wan2r}}.",
      hanzi: "写完后，我玩儿。",
      en: "After writing, I play.",
      ru: "Закончив писать, я играю.",
    },
    {
      pinyin: "{{Word:kan4}}-{{word:wan2}} {{word:hou4}}, {{word:ni3}} {{word:shuo1}}.",
      hanzi: "看完后，你说。",
      en: "After reading, you speak.",
      ru: "Дочитав, ты говоришь.",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:fa1sheng1}} {{word:le}} {{word:shen2me}}?",
      hanzi: "吃完后，发生了什么？",
      en: "After eating, what happened?",
      ru: "Что случилось после еды?",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:ta1}} {{word:liu2}}.",
      hanzi: "吃完后，她留。",
      en: "After eating, she stays.",
      ru: "Поев, она остаётся.",
    },
    {
      pinyin: "{{Word:kan4}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:liu2}} {{word:zhe4}}-ge.",
      hanzi: "看完后，我留这个。",
      en: "After reading it, I'll keep this one.",
      ru: "Когда дочитаю, оставлю себе вот это.",
    },
  ],
  exercises: [
    {
      en: "After reading, I sleep.",
      ru: "После чтения я сплю.",
      answer: "{{Word:kan4}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}.",
      hanzi: "看完后，我睡觉。",
    },
    {
      en: "After eating, I'll stay.",
      ru: "После еды я останусь.",
      answer: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:hui4}} {{word:liu2}}.",
      hanzi: "吃完后，我会留。",
    },
  ],
});
