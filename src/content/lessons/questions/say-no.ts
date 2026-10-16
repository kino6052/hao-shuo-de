// To answer no, say shuō bù. Pattern: Who + shuō bù
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "say-no",
  scene: "Acts out 'tā shuō bù': Miao-miao sits with a firm face and a paw raised in refusal in front of a bowl of vegetables, the student apologising to the girl. Orange: the raised paw.",
  prose: {
    en: [
      "**To answer no**, say {{word:shuo1}} {{word:bu4}}: to say \"no\".",
      "",
      "**Who + {{word:shuo1}} {{word:bu4}}**",
      "",
      "Mind the order. {{Word:wo3}} {{word:shuo1}} {{word:bu4}} is \"I say no\". {{Word:wo3}} {{word:bu4}} {{word:shuo1}} is \"I don't speak\".",
    ],
    ru: [
      "**Чтобы ответить «нет»**, скажите {{word:shuo1}} {{word:bu4}} — «сказать нет».",
      "",
      "**Кто + {{word:shuo1}} {{word:bu4}}**",
      "",
      "Следите за порядком. {{Word:wo3}} {{word:shuo1}} {{word:bu4}} — «Я говорю нет». {{Word:wo3}} {{word:bu4}} {{word:shuo1}} — «Я не говорю».",
    ],
    tldr: {
      en: "{{Word:shuo1}} {{word:bu4}} says no. {{Word:bu4}} {{word:shuo1}} means not speaking.",
      ru: "{{Word:shuo1}} {{word:bu4}} — сказать нет. {{Word:bu4}} {{word:shuo1}} — не говорить.",
    },
    necessity: {
      en: "Now you can say no when someone asks you.",
      ru: "Теперь вы можете сказать «нет», когда вас спрашивают.",
    },
  },
  info: {
    pattern: "shuo-bu-say-no",
    en: "Who + {{word:shuo1}} {{word:bu4}}: {{Word:ta1}} {{word:shuo1}} {{word:bu4}}. (He says no.)",
    ru: "Кто + {{word:shuo1}} {{word:bu4}}: {{Word:ta1}} {{word:shuo1}} {{word:bu4}}. (Он говорит нет.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:bu4}}.",
      hanzi: "他说不。",
      en: "He says no.",
      ru: "Он говорит нет.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:bu4}}.",
      hanzi: "我说不。",
      en: "I say no.",
      ru: "Я говорю нет.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "我不说。",
      en: "I don't speak.",
      ru: "Я не говорю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}} {{word:bu4}} {{word:ma}}?",
      hanzi: "你说不吗？",
      en: "Do you say no?",
      ru: "Ты говоришь нет?",
    },
  ],
  exercises: [
    {
      en: "You say no.",
      ru: "Ты говоришь нет.",
      answer: "{{Word:ni3}} {{word:shuo1}} {{word:bu4}}.",
      hanzi: "你说不。",
    },
    {
      en: "She doesn't speak.",
      ru: "Она не говорит.",
      answer: "{{Word:ta1}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "他不说。",
    },
    {
      en: "Does he say no?",
      ru: "Он говорит нет?",
      answer: "{{Word:ta1}} {{word:shuo1}} {{word:bu4}} {{word:ma}}?",
      hanzi: "他说不吗？",
    },
  ],
});
