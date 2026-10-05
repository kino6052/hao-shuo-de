// To say how someone is toward someone, put duì and the person before the
// adjective. Pattern: A + duì + B + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "toward",
  words: [
    {
      word: "dui4",
      en: "toward, for",
      ru: "к, по отношению к, для",
    },
  ],
  prose: {
    en: [
      "**To say how someone is toward someone**, put {{word:dui4}} and the person before the adjective.",
      "",
      "**A + {{word:dui4}} + B + adjective**",
      "",
      "{{word:dui4}} X {{word:lai2}} {{word:shuo1}} means \"for X\": {{word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, for me.",
    ],
    ru: [
      "**Чтобы сказать, как кто-то относится к кому-то**, поставьте {{word:dui4}} и человека перед прилагательным.",
      "",
      "**A + {{word:dui4}} + B + прилагательное**",
      "",
      "{{word:dui4}} X {{word:lai2}} {{word:shuo1}} значит «для X»: {{word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}} — для меня.",
    ],
    tldr: {
      en: "{{word:dui4}} + person + adjective: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}, he's good to me.",
      ru: "{{word:dui4}} + человек + прилагательное: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}} — он ко мне хорошо относится.",
    },
    necessity: {
      en: "Now you can say how things are for someone.",
      ru: "Теперь вы можете сказать, каково что-то для кого-то.",
    },
  },
  info: {
    en: "A {{word:dui4}} B + adjective, toward / for: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}. (He's good to me.)",
    ru: "A {{word:dui4}} B + прилагательное — к кому / для кого: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}. (Он ко мне хорошо относится.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他对我很好。",
      en: "He's good to me.",
      ru: "Он ко мне хорошо относится.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:dui4}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "水对植物很好。",
      en: "Water is good for plants.",
      ru: "Вода полезна для растений.",
    },
    {
      pinyin: "{{Word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, {{word:zhe4}}-ge {{word:hen3}} {{word:hao3}}.",
      hanzi: "对我来说，这个很好。",
      en: "For me, this is good.",
      ru: "Для меня это хорошо.",
    },
    {
      pinyin: "{{Word:ri4}} {{word:dui4}} {{word:shen1ti3}}-{{word:de}} {{word:wai4}}-{{word:mian4}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "日对身体的外面不好。",
      en: "The sun is bad for your skin.",
      ru: "Солнце вредно для кожи.",
    },
  ],
  exercises: [
    {
      en: "The sun is good for plants.",
      ru: "Солнце полезно для растений.",
      answer: "{{Word:ri4}} {{word:dui4}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "日对植物很好。",
    },
  ],
});
