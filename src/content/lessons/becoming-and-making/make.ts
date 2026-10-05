// To say you make something so, put nòng (do, make) before the result.
// Pattern: Who + nòng + result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "make",
  words: [
    {
      word: "nong4",
      en: "do, make",
      ru: "делать",
    },
    {
      word: "de2",
      en: "get",
      ru: "получать",
    },
  ],
  prose: {
    en: [
      "**To say you make something so**, put {{word:nong4}} (do, make) before the result.",
      "",
      "**Who + {{word:nong4}} + result**",
      "",
      "{{word:nong4}} {{word:hao3}} is \"fix it\", and {{word:nong4}} {{word:huai4}} is \"break it\". {{word:de2}} means get: {{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}? (What did you get?)",
    ],
    ru: [
      "**Чтобы сказать, что вы что-то сделали таким**, поставьте {{word:nong4}} (делать) перед результатом.",
      "",
      "**Кто + {{word:nong4}} + результат**",
      "",
      "{{word:nong4}} {{word:hao3}} — «починить», а {{word:nong4}} {{word:huai4}} — «сломать». {{word:de2}} значит «получать»: {{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}? (Что ты получил?)",
    ],
    tldr: {
      en: "{{word:nong4}} + result: {{word:nong4}} {{word:hao3}} means fix it.",
      ru: "{{word:nong4}} + результат: {{word:nong4}} {{word:hao3}} значит «починить».",
    },
    necessity: {
      en: "Now you can say what you did to something.",
      ru: "Теперь вы можете сказать, что вы сделали с чем-то.",
    },
  },
  info: {
    en: "{{word:nong4}} + result, make it so: {{Word:wo3}} {{word:nong4}} {{word:hao3}} {{word:le}}. (I fixed it.)",
    ru: "{{word:nong4}} + результат — сделать таким: {{Word:wo3}} {{word:nong4}} {{word:hao3}} {{word:le}}. (Я починил.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我弄好了。",
      en: "I fixed it.",
      ru: "Я починил.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:nong4}} {{word:huai4}} {{word:le}}.",
      hanzi: "你弄坏了。",
      en: "You broke it.",
      ru: "Ты сломал.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:nong4}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你能弄好吗？",
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
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:nong4}}-{{word:luan4}}!",
      hanzi: "不要弄乱！",
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
      answer: "{{Word:bu4}} {{word:yao4}} {{word:nong4}}-{{word:luan4}}!",
      hanzi: "不要弄乱！",
    },
  ],
});
