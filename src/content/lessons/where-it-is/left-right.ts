// To say left or right, use zuǒbiān and yòubiān, like pángbiān. Pattern:
// Thing + zài + (X-de) zuǒbiān / yòubiān
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "left-right",
  words: [
    {
      word: "zuo3bian1",
      en: "left",
      ru: "слева, левая сторона",
    },
    {
      word: "you4bian1",
      en: "right",
      ru: "справа, правая сторона",
    },
  ],
  prose: {
    en: [
      "**To say left or right**, use {{word:zuo3bian1}} (left) and {{word:you4bian1}} (right). They work like {{word:pang2bian1}}.",
      "",
      "**Thing + {{word:zai4}} + (X-{{word:de}}) {{word:zuo3bian1}} / {{word:you4bian1}}**",
    ],
    ru: [
      "**Чтобы сказать «слева» или «справа»**, используйте {{word:zuo3bian1}} (слева) и {{word:you4bian1}} (справа). Они работают как {{word:pang2bian1}}.",
      "",
      "**Вещь + {{word:zai4}} + (X-{{word:de}}) {{word:zuo3bian1}} / {{word:you4bian1}}**",
    ],
    tldr: {
      en: "{{word:zuo3bian1}} is left, {{word:you4bian1}} is right: {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}, on my left.",
      ru: "{{word:zuo3bian1}} — слева, {{word:you4bian1}} — справа: {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}} — слева от меня.",
    },
    necessity: {
      en: "Now you can say which side something is on.",
      ru: "Теперь вы можете сказать, с какой стороны что-то находится.",
    },
  },
  info: {
    en: "{{word:zuo3bian1}} / {{word:you4bian1}}, left / right: {{Word:he2zi}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}. (The box is on my left.)",
    ru: "{{word:zuo3bian1}} / {{word:you4bian1}} — слева / справа: {{Word:he2zi}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}. (Коробка слева от меня.)",
  },
  examples: [
    {
      pinyin: "{{Word:he2zi}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}.",
      hanzi: "盒子在我的左边。",
      en: "The box is on my left.",
      ru: "Коробка слева от меня.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:you4bian1}}.",
      hanzi: "他在你的右边。",
      en: "He's on your right.",
      ru: "Он справа от тебя.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:you4bian1}} {{word:ma}}?",
      hanzi: "水在右边吗？",
      en: "Is the water on the right?",
      ru: "Вода справа?",
    },
    {
      pinyin: "{{Word:zuo3bian1}}-{{word:de}} {{word:he2zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "左边的盒子很大。",
      en: "The box on the left is big.",
      ru: "Коробка слева большая.",
    },
  ],
  exercises: [
    {
      en: "The tool is on the left.",
      ru: "Инструмент слева.",
      answer: "{{Word:gong1ju4}} {{word:zai4}} {{word:zuo3bian1}}.",
      hanzi: "工具在左边。",
    },
    {
      en: "My home is on the right.",
      ru: "Мой дом справа.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:you4bian1}}.",
      hanzi: "我的家在右边。",
    },
  ],
});
