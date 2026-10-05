// To say hello, say nǐ hǎo. Pattern: nǐ hǎo! / nǐ hǎo ma?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "hello",
  prose: {
    en: [
      "**To say hello**, say {{word:ni3}} {{word:hao3}}.",
      "",
      "**{{Word:ni3}} {{word:hao3}}! / {{Word:ni3}} {{word:hao3}} {{word:ma}}?**",
      "",
      "To many people, say {{word:ni3}}-{{word:men}} {{word:hao3}}.",
    ],
    ru: [
      "**Чтобы поздороваться**, скажите {{word:ni3}} {{word:hao3}}.",
      "",
      "**{{Word:ni3}} {{word:hao3}}! / {{Word:ni3}} {{word:hao3}} {{word:ma}}?**",
      "",
      "Если людей много, скажите {{word:ni3}}-{{word:men}} {{word:hao3}}.",
    ],
    tldr: {
      en: "{{Word:ni3}} {{word:hao3}}! means hello. {{Word:ni3}} {{word:hao3}} {{word:ma}}? means how are you?",
      ru: "{{Word:ni3}} {{word:hao3}}! — «привет». {{Word:ni3}} {{word:hao3}} {{word:ma}}? — «как дела?»",
    },
    necessity: {
      en: "It's the first thing you say to anyone.",
      ru: "Это первое, что вы говорите любому человеку.",
    },
  },
  info: {
    en: "{{Word:ni3}} {{word:hao3}}!, hello. {{Word:ni3}} {{word:hao3}} {{word:ma}}?, how are you?",
    ru: "{{Word:ni3}} {{word:hao3}}! — привет. {{Word:ni3}} {{word:hao3}} {{word:ma}}? — как дела?",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}!",
      hanzi: "你好！",
      en: "Hello!",
      ru: "Привет!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你好吗？",
      en: "How are you?",
      ru: "Как дела?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我很好。",
      en: "I'm fine.",
      ru: "У меня всё хорошо.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:le}}.",
      hanzi: "我去了。",
      en: "I'm off. / Bye.",
      ru: "Я пошёл. / Пока.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:cong2}} {{word:na3}}-{{word:li3}} {{word:lai2}}?",
      hanzi: "你从哪里来？",
      en: "Where are you from?",
      ru: "Откуда ты?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hui2}}-{{word:lai2}} {{word:le}}!",
      hanzi: "你回来了！",
      en: "You're back!",
      ru: "Ты вернулся!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}! {{Word:jin4}}-{{word:lai2}} {{word:zuo4}}!",
      hanzi: "你好！进来坐！",
      en: "Hi! Come in and sit down!",
      ru: "Привет! Заходи, садись!",
    },
  ],
  exercises: [
    {
      en: "Hello, everyone!",
      ru: "Всем привет!",
      answer: "{{Word:ni3}}-{{word:men}} {{word:hao3}}!",
      hanzi: "你们好！",
    },
  ],
  faq: [
    // is nǐ hǎo ma like "How are you?"
    {
      question: {
        en: "Is {{word:ni3}} {{word:hao3}} {{word:ma}} like \"How are you?\"",
        ru: "{{word:ni3}} {{word:hao3}} {{word:ma}} — это как «Как дела?»",
      },
      en: "It is, but people don't say it as often as English speakers say \"How are you?\". It's a real question, mostly for someone you haven't seen in a while. {{Word:ni3}} {{word:hao3}}! is the everyday hello.",
      ru: "Да, но его говорят реже, чем русское «Как дела?». Это настоящий вопрос, в основном к тому, кого вы давно не видели. {{Word:ni3}} {{word:hao3}}! — обычное «привет».",
    },
  ],
});
