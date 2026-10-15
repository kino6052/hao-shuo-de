// To say you remember, use jì-de. Pattern: Who + jì-de + person or thing; bù jì-de is forgot
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "remember",
  words: [
    {
      word: "ji4",
      en: "remember; {{word:ji4}}-{{light:de2}}: remember",
      ru: "помнить; {{word:ji4}}-{{light:de2}} — помнить",
    },
  ],
  prose: {
    en: [
      "**To say you remember**, use {{word:ji4}}-{{light:de2}}.",
      "",
      "**Who + {{word:ji4}}-{{light:de2}} + person or thing**",
      "",
      "To say you forgot, add {{word:bu4}}: {{Word:wo3}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:ni3}}, I don't remember you.",
    ],
    ru: [
      "**Чтобы сказать, что вы помните**, используйте {{word:ji4}}-{{light:de2}}.",
      "",
      "**Кто + {{word:ji4}}-{{light:de2}} + человек или вещь**",
      "",
      "Чтобы сказать «забыл», добавьте {{word:bu4}}: {{Word:wo3}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:ni3}} — я тебя не помню.",
    ],
    tldr: {
      en: "{{word:ji4}}-{{light:de2}} is remember: {{Word:wo3}} {{word:ji4}}-{{light:de2}} {{word:ni3}}, I remember you.",
      ru: "{{word:ji4}}-{{light:de2}} — «помнить»: {{Word:wo3}} {{word:ji4}}-{{light:de2}} {{word:ni3}} — я помню тебя.",
    },
    necessity: {
      en: "Now you can say what you remember, and what you don't.",
      ru: "Теперь вы можете сказать, что помните, а что нет.",
    },
  },
  info: {
    pattern: "svo",
    en: "Who + {{word:ji4}}-{{light:de2}} + person or thing, remember: {{Word:wo3}} {{word:ji4}}-{{light:de2}} {{word:ni3}}. (I remember you.)",
    ru: "Кто + {{word:ji4}}-{{light:de2}} + человек или вещь — помнить: {{Word:wo3}} {{word:ji4}}-{{light:de2}} {{word:ni3}}. (Я помню тебя.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ji4}}-{{light:de2}} {{word:ni3}}.",
      hanzi: "我记得你。",
      en: "I remember you.",
      ru: "Я помню тебя.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ji4}}-{{light:de2}} {{word:wo3}}-{{word:de}} {{word:jia1}} {{word:ma}}?",
      hanzi: "你记得我的家吗？",
      en: "Do you remember my home?",
      ru: "Ты помнишь мой дом?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:zhe4}}-ge {{word:ren2}}.",
      hanzi: "他不记得这个人。",
      en: "He doesn't remember this person.",
      ru: "Он не помнит этого человека.",
    },
  ],
  exercises: [
    {
      en: "Do you remember me?",
      ru: "Ты меня помнишь?",
      answer: "{{Word:ni3}} {{word:ji4}}-{{light:de2}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你记得我吗？",
    },
    {
      en: "I don't remember this person.",
      ru: "Я не помню этого человека.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:ji4}}-{{light:de2}} {{word:zhe4}}-ge {{word:ren2}}.",
      hanzi: "我不记得这个人。",
    },
  ],
});
