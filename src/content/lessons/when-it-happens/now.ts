// To say something is happening right now, put zài before the verb. Pattern:
// Who + zài + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "now",
  words: [
    {
      term: "{{word:zai4}}",
      hanzi: "在",
      en: "before a verb: right now",
      ru: "перед глаголом: как раз сейчас",
    },
    {
      term: "{{word:xian4zai4}}",
      hanzi: "现在",
      en: "now",
      ru: "сейчас",
    },
  ],
  prose: {
    en: [
      "**To say something is happening right now**, put {{word:zai4}} before the verb.",
      "",
      "**Who + {{word:zai4}} + verb**",
      "",
      "It works like \"-ing\" in English.",
    ],
    ru: [
      "**Чтобы сказать, что что-то происходит прямо сейчас**, поставьте {{word:zai4}} перед глаголом.",
      "",
      "**Кто + {{word:zai4}} + глагол**",
      "",
      "Это как русское «как раз сейчас»: {{Word:wo3}} {{word:zai4}} {{word:chi1}} — «Я как раз ем».",
    ],
    tldr: {
      en: "Put {{word:zai4}} before a verb to say it is happening right now.",
      ru: "Поставьте {{word:zai4}} перед глаголом, чтобы сказать, что это происходит прямо сейчас.",
    },
    necessity: { en: "Now you can say what is going on.", ru: "Теперь вы можете сказать, что происходит." },
  },
  info: {
    en: "{{word:zai4}} + verb, right now: {{Word:wo3}} {{word:zai4}} {{word:chi1}}. (I'm eating.)",
    ru: "{{word:zai4}} + глагол — как раз сейчас: {{Word:wo3}} {{word:zai4}} {{word:chi1}}. (Я как раз ем.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:chi1}}.",
      hanzi: "我在吃。",
      en: "I'm eating right now.",
      ru: "Я как раз ем.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "她在睡觉。",
      en: "She's sleeping.",
      ru: "Она спит.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:kan4}} {{word:shen2me}}?",
      hanzi: "你在看什么？",
      en: "What are you looking at?",
      ru: "На что ты смотришь?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:zai4}} {{word:shui4jiao4}}?",
      hanzi: "你为什么在睡觉？",
      en: "Why are you sleeping?",
      ru: "Почему ты спишь?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xian4zai4}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "他现在在睡觉。",
      en: "He's sleeping now.",
      ru: "Он сейчас спит.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ke3neng2}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "他可能在睡觉。",
      en: "He might be sleeping.",
      ru: "Он, может быть, спит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xue2}} {{word:xie3}}.",
      hanzi: "我在学写。",
      en: "I'm learning to write right now.",
      ru: "Я сейчас учусь писать.",
    },
  ],
  exercises: [
    {
      en: "Now I'm eating.",
      ru: "Сейчас я ем.",
      answer: "{{Word:xian4zai4}}, {{word:wo3}} {{word:zai4}} {{word:chi1}}.",
      hanzi: "现在，我在吃。",
    },
    {
      en: "He is waiting right now.",
      ru: "Он как раз ждёт.",
      answer: "{{Word:ta1}} {{word:zai4}} {{word:deng3}}.",
      hanzi: "他在等。",
    },
    {
      en: "What are you eating?",
      ru: "Что ты ешь?",
      answer: "{{Word:ni3}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?",
      hanzi: "你在吃什么？",
    },
  ],
});
