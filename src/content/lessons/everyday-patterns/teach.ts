// To teach someone to do something, put jiāo and the person before the verb,
// like bāng. Pattern: Who + jiāo + person + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "teach",
  words: [
    {
      word: "jiao1",
      en: "teach",
      ru: "учить (кого-то)",
    },
  ],
  prose: {
    en: [
      "**To teach someone to do something**, put {{word:jiao1}} (teach) and the person before the verb, like {{word:bang1}}.",
      "",
      "**Who + {{word:jiao1}} + person + verb**",
      "",
      "{{word:jiao1}} has a high, flat tone. {{word:jiao4}}, with a falling tone, is \"call\" or \"let\" (Lesson {{lesson:greetings-and-feelings}}). {{word:jiao1}} and {{word:xue2}} go together: {{Word:ni3}} {{word:jiao1}}, {{word:wo3}} {{word:xue2}}.",
    ],
    ru: [
      "**Чтобы научить кого-то что-то делать**, поставьте {{word:jiao1}} (учить) и человека перед глаголом, как с {{word:bang1}}.",
      "",
      "**Кто + {{word:jiao1}} + человек + глагол**",
      "",
      "{{word:jiao1}} произносится высоким ровным тоном. {{word:jiao4}}, с падающим тоном, — это «называться» или «пусть» (урок {{lesson:greetings-and-feelings}}). {{word:jiao1}} и {{word:xue2}} ходят парой, как «учить» и «учиться»: {{Word:ni3}} {{word:jiao1}}, {{word:wo3}} {{word:xue2}}.",
    ],
    tldr: {
      en: "{{word:jiao1}} + person + verb is teach: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
      ru: "{{word:jiao1}} + человек + глагол — научить: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
    },
    necessity: {
      en: "Now you can teach, and ask to be taught.",
      ru: "Теперь вы можете учить других и просить научить вас.",
    },
  },
  info: {
    en: "{{word:jiao1}} + person + verb, teach: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}. (I'll teach you to write.)",
    ru: "{{word:jiao1}} + человек + глагол — научить: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}. (Я научу тебя писать.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
      hanzi: "我教你写。",
      en: "I'll teach you to write.",
      ru: "Я научу тебя писать.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:jiao1}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你能教我吗？",
      en: "Can you teach me?",
      ru: "Ты можешь меня научить?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jiao1}}, {{word:wo3}} {{word:xue2}}.",
      hanzi: "你教，我学。",
      en: "You teach, and I'll learn.",
      ru: "Ты учишь, а я учусь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiao1}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他教得很好。",
      en: "He teaches well.",
      ru: "Он хорошо учит.",
    },
  ],
  exercises: [
    {
      en: "Can you teach me?",
      ru: "Ты можешь меня научить?",
      answer: "{{Word:ni3}} {{word:neng2}} {{word:jiao1}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你能教我吗？",
    },
    {
      en: "I'll teach you to write.",
      ru: "Я научу тебя писать.",
      answer: "{{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
      hanzi: "我教你写。",
    },
  ],
});
