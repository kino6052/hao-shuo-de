// To say what someone said or asked, put shuō (say) or wèn (ask) after the
// person, then a colon, then their words. Pattern: Who + shuō / wèn: what was
// said
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "say-ask",
  scene: "Acts out 'tā wèn: zhè shì shénme?': the girl speaks with a bubble that holds a picture of the fruit and a question mark, the student answers with a bubble holding the same fruit and a smile. Orange: the question mark.",
  prose: {
    en: [
      "**To say what someone said or asked**, put {{word:shuo1}} (say) or {{word:wen4}} (ask) after the person, then a colon, then their words.",
      "",
      "**Who + {{word:shuo1}} / {{word:wen4}}: what was said**",
      "",
      "The words after the colon stay just as the person said them, so a question keeps its {{word:ma}} or its {{word:shen2me}}.",
    ],
    ru: [
      "**Чтобы передать, что кто-то сказал или спросил**, поставьте после человека {{word:shuo1}} (сказать) или {{word:wen4}} (спросить), затем двоеточие, затем его слова.",
      "",
      "**Кто + {{word:shuo1}} / {{word:wen4}}: что сказано**",
      "",
      "Слова после двоеточия остаются такими, как их сказали, поэтому вопрос сохраняет свой {{word:ma}} или {{word:shen2me}}.",
    ],
    tldr: {
      en: "Who + {{word:shuo1}} or {{word:wen4}}, a colon, then the words as they were said.",
      ru: "Кто + {{word:shuo1}} или {{word:wen4}}, двоеточие, затем слова, как их сказали.",
    },
    necessity: {
      en: "Stories and conversations are full of what people said and asked.",
      ru: "Рассказы и разговоры полны того, что люди сказали и спросили.",
    },
  },
  info: {
    pattern: "speech-quote",
    en: "Who + {{word:shuo1}} / {{word:wen4}}: what was said: {{Word:ta1}} {{word:wen4}}: {{Word:zhe4}} {{word:shi4}} {{word:shen2me}}? (She asks: What is this?)",
    ru: "Кто + {{word:shuo1}} / {{word:wen4}}: что сказано: {{Word:ta1}} {{word:wen4}}: {{Word:zhe4}} {{word:shi4}} {{word:shen2me}}? (Она спрашивает: что это?)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:wen4}}: {{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "他问：这是什么？",
      en: "She asks: \"What is this?\"",
      ru: "Она спрашивает: «Что это?»",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:zhe4}} {{word:shi4}} {{word:shui3}}.",
      hanzi: "我说：这是水。",
      en: "I say: \"This is water.\"",
      ru: "Я говорю: «Это вода».",
    },
    {
      pinyin: "{{Word:ta1}} {{word:wen4}}: {{Word:ni3}} {{word:chi1}} {{word:fan4}} {{word:ma}}?",
      hanzi: "他问：你吃饭吗？",
      en: "He asks: \"Are you eating?\"",
      ru: "Он спрашивает: «Ты ешь?»",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}} {{word:chi1}}.",
      hanzi: "我说：我吃。",
      en: "I say: \"I am.\"",
      ru: "Я говорю: «Ем».",
    },
  ],
  exercises: [
    {
      en: "Write: She asks: \"Is this water?\"",
      ru: "Напишите: Она спрашивает: «Это вода?»",
      answer: "{{Word:ta1}} {{word:wen4}}: {{Word:zhe4}} {{word:shi4}} {{word:shui3}} {{word:ma}}?",
      hanzi: "他问：这是水吗？",
    },
  ],
});
