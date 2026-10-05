// To ask how something is, put ma after the adjective. Pattern: Thing +
// adjective + ma?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "ask",
  words: [
    {
      word: "lao3",
      en: "old",
      ru: "старый",
    },
  ],
  prose: {
    en: [
      "**To ask how something is**, put {{word:ma}} after the adjective.",
      "",
      "**Thing + adjective + {{word:ma}}?**",
      "",
      "{{word:lao3}} means old, for people, animals, and plants. For young, say {{word:bu4}} {{word:lao3}}.",
    ],
    ru: [
      "**Чтобы спросить, какое что-то**, поставьте {{word:ma}} после прилагательного.",
      "",
      "**Вещь + прилагательное + {{word:ma}}?**",
      "",
      "{{word:lao3}} значит «старый» — о людях, животных и растениях. Чтобы сказать «молодой», говорите {{word:bu4}} {{word:lao3}}.",
    ],
    tldr: {
      en: "Put {{word:ma}} after an adjective to ask about it: {{Word:ni3}} {{word:leng3}} {{word:ma}}?",
      ru: "Поставьте {{word:ma}} после прилагательного, чтобы спросить: {{Word:ni3}} {{word:leng3}} {{word:ma}}?",
    },
    necessity: { en: "Now you can ask how someone is.", ru: "Теперь вы можете спросить, как у кого-то дела." },
  },
  info: {
    en: "adjective + {{word:ma}}?, asking: {{Word:ni3}} {{word:leng3}} {{word:ma}}? (Are you cold?)",
    ru: "прилагательное + {{word:ma}}? — вопрос: {{Word:ni3}} {{word:leng3}} {{word:ma}}? (Тебе холодно?)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:re4}} {{word:ma}}?",
      hanzi: "水热吗？",
      en: "Is the water hot?",
      ru: "Вода горячая?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:leng3}} {{word:ma}}?",
      hanzi: "你冷吗？",
      en: "Are you cold?",
      ru: "Тебе холодно?",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:shen1ti3}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你的身体好吗？",
      en: "Are you in good health?",
      ru: "Ты здоров?",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}} {{word:lao3}} {{word:ma}}?",
      hanzi: "你的爸爸妈妈老吗？",
      en: "Are your parents old?",
      ru: "Твои родители старые?",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:lao3}}.",
      hanzi: "那个动物很老。",
      en: "That animal is very old.",
      ru: "То животное очень старое.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shen1ti3}} {{word:zhen1}} {{word:re4}}.",
      hanzi: "我的身体真热。",
      en: "My body is really hot.",
      ru: "Моё тело правда горячее.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:you3}} {{word:jia4zhi2}} {{word:ma}}?",
      hanzi: "这个有价值吗？",
      en: "Is this worth anything?",
      ru: "Это чего-нибудь стоит?",
    },
    {
      pinyin: "{{Word:wei4}}-{{word:dao4}} {{word:hao3}} {{word:ma}}?",
      hanzi: "味道好吗？",
      en: "Does it taste good?",
      ru: "Вкусно?",
    },
  ],
  exercises: [
    {
      en: "Is the water sweet?",
      ru: "Вода сладкая?",
      answer: "{{Word:shui3}} {{word:tian2}} {{word:ma}}?",
      hanzi: "水甜吗？",
    },
    {
      en: "Is that animal old?",
      ru: "То животное старое?",
      answer: "{{Word:na4}}-ge {{word:dong4}}-{{word:wu4}} {{word:lao3}} {{word:ma}}?",
      hanzi: "那个动物老吗？",
    },
  ],
  faq: [
    // why no hěn in shuǐ rè ma?
    {
      question: {
        en: "Why is there no {{word:hen3}} in {{word:shui3}} {{word:re4}} {{word:ma}}?",
        ru: "Почему в {{word:shui3}} {{word:re4}} {{word:ma}} нет {{word:hen3}}?",
      },
      en: "A question doesn't need it: {{Word:shui3}} {{word:re4}} {{word:ma}}? asks \"Is the water hot?\". With {{word:hen3}}, it asks \"Is the water very hot?\".",
      ru: "В вопросе оно не нужно: {{Word:shui3}} {{word:re4}} {{word:ma}}? спрашивает «Вода горячая?». С {{word:hen3}} получится «Вода очень горячая?».",
    },
  ],
});
