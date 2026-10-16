// Zhè-yàng before a verb says in this way. Pattern: Who + zhè-yàng + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "this-way",
  scene: "Acts out 'wǒ zhè-yàng zuò': the student bends and folds a paper boat slowly, demonstrating each fold to the girl who copies; the finished boat on a table. Green: the paper boat.",
  prose: {
    en: [
      "**To say how you do something, point at the way**: put {{word:zhe4}}-{{word:yang4}} (this way) before the verb.",
      "",
      "**Who + {{word:zhe4}}-{{word:yang4}} + verb**",
      "",
      "{{Word:ni3}} {{word:zen3me}} {{word:zuo4}}? asks how you do it. The answer: {{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}}, I do it like this.",
    ],
    ru: [
      "**Чтобы сказать, как вы что-то делаете, укажите на способ**: поставьте {{word:zhe4}}-{{word:yang4}} («вот так») перед глаголом.",
      "",
      "**Кто + {{word:zhe4}}-{{word:yang4}} + глагол**",
      "",
      "{{Word:ni3}} {{word:zen3me}} {{word:zuo4}}? — как ты это делаешь? Ответ: {{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}} — я делаю вот так.",
    ],
    tldr: {
      en: "{{Word:zhe4}}-{{word:yang4}} goes before the verb: {{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}}, I do it like this.",
      ru: "{{Word:zhe4}}-{{word:yang4}} стоит перед глаголом: {{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}} — я делаю вот так.",
    },
    necessity: {
      en: "Now you can show the way you do something.",
      ru: "Теперь вы можете показать, как что-то делается.",
    },
  },
  info: {
    pattern: "zhe-yang-this-way",
    en: "Who + {{word:zhe4}}-{{word:yang4}} + verb: {{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}}. (I do it like this.)",
    ru: "Кто + {{word:zhe4}}-{{word:yang4}} + глагол: {{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}}. (Я делаю вот так.)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zen3me}} {{word:zuo4}}?",
      hanzi: "你怎么做？",
      en: "How do you do it?",
      ru: "Как ты это делаешь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}}.",
      hanzi: "我这样做。",
      en: "I do it like this.",
      ru: "Я делаю вот так.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhe4}}-{{word:yang4}} {{word:chi1}}.",
      hanzi: "他这样吃。",
      en: "He eats like this.",
      ru: "Он ест вот так.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:yang4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这样很好。",
      en: "This way is good.",
      ru: "Так хорошо.",
    },
  ],
  exercises: [
    {
      en: "I write like this.",
      ru: "Я пишу вот так.",
      answer: "{{Word:wo3}} {{word:zhe4}}-{{word:yang4}} {{word:xie3}}.",
      hanzi: "我这样写。",
    },
    {
      en: "Do you do it like this?",
      ru: "Ты делаешь это вот так?",
      answer: "{{Word:ni3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}} {{word:ma}}?",
      hanzi: "你这样做吗？",
    },
    {
      en: "She eats like this.",
      ru: "Она ест вот так.",
      answer: "{{Word:ta1}} {{word:zhe4}}-{{word:yang4}} {{word:chi1}}.",
      hanzi: "他这样吃。",
    },
  ],
});
