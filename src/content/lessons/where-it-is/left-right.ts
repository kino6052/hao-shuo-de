// To say left or right, use zuǒ-biān and yòu-biān, like pángbiān. Pattern:
// Thing + zài + (X-de) zuǒ-biān / yòu-biān
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "left-right",
  words: [
    {
      word: "zuo3",
      en: "left; {{word:zuo3}}-{{word:bian1}}: left side",
      ru: "левый; {{word:zuo3}}-{{word:bian1}} — левая сторона",
    },
    {
      word: "you4",
      sense: "right",
      en: "right (in {{word:you4}}-{{word:bian1}}: right side)",
      ru: "правый (в {{word:you4}}-{{word:bian1}} — правая сторона)",
    },
  ],
  prose: {
    en: [
      "**To say left or right**, use {{word:zuo3}}-{{word:bian1}} (left) and {{word:you4}}-{{word:bian1}} (right). They work like {{word:pang2bian1}}.",
      "",
      "**Thing + {{word:zai4}} + (X-{{word:de}}) {{word:zuo3}}-{{word:bian1}} / {{word:you4}}-{{word:bian1}}**",
    ],
    ru: [
      "**Чтобы сказать «слева» или «справа»**, используйте {{word:zuo3}}-{{word:bian1}} (слева) и {{word:you4}}-{{word:bian1}} (справа). Они работают как {{word:pang2bian1}}.",
      "",
      "**Вещь + {{word:zai4}} + (X-{{word:de}}) {{word:zuo3}}-{{word:bian1}} / {{word:you4}}-{{word:bian1}}**",
    ],
    tldr: {
      en: "{{word:zuo3}}-{{word:bian1}} is left, {{word:you4}}-{{word:bian1}} is right: {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}, on my left.",
      ru: "{{word:zuo3}}-{{word:bian1}} — слева, {{word:you4}}-{{word:bian1}} — справа: {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}} — слева от меня.",
    },
    necessity: {
      en: "Now you can say which side something is on.",
      ru: "Теперь вы можете сказать, с какой стороны что-то находится.",
    },
  },
  info: {
    en: "{{word:zuo3}}-{{word:bian1}} / {{word:you4}}-{{word:bian1}}, left / right: {{Word:bao1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}. (The bag is on my left.)",
    ru: "{{word:zuo3}}-{{word:bian1}} / {{word:you4}}-{{word:bian1}} — слева / справа: {{Word:bao1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}. (Сумка слева от меня.)",
  },
  examples: [
    {
      pinyin: "{{Word:bao1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "包在我的左边。",
      en: "The bag is on my left.",
      ru: "Сумка слева от меня.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:you4}}-{{word:bian1}}.",
      hanzi: "他在你的右边。",
      en: "He's on your right.",
      ru: "Он справа от тебя.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:you4}}-{{word:bian1}} {{word:ma}}?",
      hanzi: "水在右边吗？",
      en: "Is the water on the right?",
      ru: "Вода справа?",
    },
    {
      pinyin: "{{Word:zuo3}}-{{word:bian1}}-{{word:de}} {{word:bao1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "左边的包很大。",
      en: "The bag on the left is big.",
      ru: "Сумка слева большая.",
    },
  ],
  exercises: [
    {
      en: "The tool is on the left.",
      ru: "Инструмент слева.",
      answer: "{{Word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "工具在左边。",
    },
    {
      en: "My home is on the right.",
      ru: "Мой дом справа.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:you4}}-{{word:bian1}}.",
      hanzi: "我的家在右边。",
    },
  ],
});
