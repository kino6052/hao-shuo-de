// To say you make something so, put zuò (do, make) before the result.
// Pattern: Who + zuò + result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "make",
  words: [
    {
      word: "de2",
      en: "get",
      ru: "получать",
    },
    {
      word: "zuo4",
      en: "do, make",
      ru: "делать",
    },
  ],
  prose: {
    en: [
      "**To say you make something so**, put {{word:zuo4}} (do, make) before the result.",
      "",
      "**Who + {{word:zuo4}} + result**",
      "",
      "{{word:zuo4}} {{word:hao3}} is \"fix it\", and {{word:zuo4}} {{word:huai4}} is \"break it\". {{word:de2}} means get: {{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}? (What did you get?)",
    ],
    ru: [
      "**Чтобы сказать, что вы что-то сделали таким**, поставьте {{word:zuo4}} (делать) перед результатом.",
      "",
      "**Кто + {{word:zuo4}} + результат**",
      "",
      "{{word:zuo4}} {{word:hao3}} — «починить», а {{word:zuo4}} {{word:huai4}} — «сломать». {{word:de2}} значит «получать»: {{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}? (Что ты получил?)",
    ],
    tldr: {
      en: "{{word:zuo4}} + result: {{word:zuo4}} {{word:hao3}} means fix it.",
      ru: "{{word:zuo4}} + результат: {{word:zuo4}} {{word:hao3}} значит «починить».",
    },
    necessity: {
      en: "Now you can say what you did to something.",
      ru: "Теперь вы можете сказать, что вы сделали с чем-то.",
    },
  },
  info: {
    en: "{{word:zuo4}} + result, make it so: {{Word:wo3}} {{word:zuo4}} {{word:hao3}} {{word:le}}. (I fixed it.)",
    ru: "{{word:zuo4}} + результат — сделать таким: {{Word:wo3}} {{word:zuo4}} {{word:hao3}} {{word:le}}. (Я починил.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我做好了。",
      en: "I fixed it.",
      ru: "Я починил.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}} {{word:huai4}} {{word:le}}.",
      hanzi: "你做坏了。",
      en: "You broke it.",
      ru: "Ты сломал.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:zuo4}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你能做好吗？",
      en: "Can you fix it?",
      ru: "Ты можешь починить?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}?",
      hanzi: "你得了什么？",
      en: "What did you get?",
      ru: "Что ты получил?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:de2}} {{word:le}} {{word:hao3}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我得了好的衣服。",
      en: "I got nice clothes.",
      ru: "Я получил хорошую одежду.",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:zuo4}}-{{word:luan4}}!",
      hanzi: "不要做乱！",
      en: "Don't make a mess!",
      ru: "Не устраивай беспорядок!",
    },
  ],
  exercises: [
    {
      en: "What did he get?",
      ru: "Что он получил?",
      answer: "{{Word:ta1}} {{word:de2}} {{word:le}} {{word:shen2me}}?",
      hanzi: "他得了什么？",
    },
    {
      en: "Don't make a mess!",
      ru: "Не устраивай беспорядок!",
      answer: "{{Word:bu4}} {{word:yao4}} {{word:zuo4}}-{{word:luan4}}!",
      hanzi: "不要做乱！",
    },
  ],
});
