// A number alone says how old someone is. Pattern: Who + number
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "age",
  prose: {
    en: [
      "**To say how old someone is**, say the person (I, you, he or she) and a number. Nothing else is needed.",
      "",
      "**Who + number**",
      "",
      "{{Word:wo3}} {{word:er4}}-{{word:shi2}} is \"I am twenty\". Put the time first to say when: {{word:xian4}}-{{word:zai4}} {{word:wo3}} {{word:shi2}}-{{word:jiu3}}, now I am nineteen.",
    ],
    ru: [
      "**Чтобы сказать, сколько кому лет**, скажите, о ком речь (я, ты, он или она), и число. Больше ничего не нужно.",
      "",
      "**Кто + число**",
      "",
      "{{Word:wo3}} {{word:er4}}-{{word:shi2}} — «Мне двадцать». Время можно поставить первым: {{word:xian4}}-{{word:zai4}} {{word:wo3}} {{word:shi2}}-{{word:jiu3}} — сейчас мне девятнадцать.",
    ],
    tldr: {
      en: "A number alone says the age: {{Word:wo3}} {{word:er4}}-{{word:shi2}}, I am twenty.",
      ru: "Возраст — это просто число: {{Word:wo3}} {{word:er4}}-{{word:shi2}} — мне двадцать.",
    },
    necessity: {
      en: "Now you can say how old you and others are.",
      ru: "Теперь вы можете сказать, сколько лет вам и другим.",
    },
  },
  info: {
    pattern: "age-number",
    en: "Who + number: {{Word:wo3}} {{word:er4}}-{{word:shi2}}. (I am twenty.)",
    ru: "Кто + число: {{Word:wo3}} {{word:er4}}-{{word:shi2}}. (Мне двадцать.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:er4}}-{{word:shi2}}.",
      hanzi: "我二十。",
      en: "I am twenty.",
      ru: "Мне двадцать.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:san1}}-{{word:shi2}}.",
      hanzi: "你三十。",
      en: "You are thirty.",
      ru: "Тебе тридцать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:wu3}}-{{word:shi2}}.",
      hanzi: "他五十。",
      en: "He is fifty.",
      ru: "Ему пятьдесят.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:wo3}} {{word:shi2}}-{{word:jiu3}}.",
      hanzi: "线在我十九。",
      en: "Now I am nineteen.",
      ru: "Сейчас мне девятнадцать.",
    },
  ],
  exercises: [
    {
      en: "I am thirty.",
      ru: "Мне тридцать.",
      answer: "{{Word:wo3}} {{word:san1}}-{{word:shi2}}.",
      hanzi: "我三十。",
    },
    {
      en: "She is forty.",
      ru: "Ей сорок.",
      answer: "{{Word:ta1}} {{word:si4}}-{{word:shi2}}.",
      hanzi: "他四十。",
    },
    {
      en: "You are fifteen.",
      ru: "Тебе пятнадцать.",
      answer: "{{Word:ni3}} {{word:shi2}}-{{word:wu3}}.",
      hanzi: "你十五。",
    },
    {
      en: "Now I am twenty-one.",
      ru: "Сейчас мне двадцать один.",
      answer: "{{Word:xian4}}-{{word:zai4}} {{word:wo3}} {{word:er4}}-{{word:shi2}}-{{word:yi1}}.",
      hanzi: "线在我二十一。",
    },
  ],
});
