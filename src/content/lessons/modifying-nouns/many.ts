// To say many, put hěn-duō-de before the noun. Pattern: hěn-duō-de + NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "many",
  words: [
    {
      word: "duo1",
      en: "many, much",
      ru: "много",
    },
    {
      word: "shao3",
      en: "few, little",
      ru: "мало",
    },
  ],
  prose: {
    en: [
      "**To say many**, put {{word:hen3}}-{{word:duo1}}-{{word:de}} before the noun.",
      "",
      "**{{word:hen3}}-{{word:duo1}}-{{word:de}} + NOUN**",
      "",
      "{{word:duo1}} and {{word:shao3}} are special. Other adjectives can go before -{{word:de}} on their own ({{word:da4}}-{{word:de}} {{word:di4fang1}}), but these two need {{word:hen3}} in front: {{word:duo1}}-{{word:de}} {{word:ren2}} sounds wrong.",
      "",
      "After a noun, {{word:hen3}} {{word:duo1}} means there is a lot: {{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
      "{{word:shao3}} (few, little) is the opposite: {{Word:shui3}} {{word:hen3}} {{word:shao3}}, there is little water.",
    ],
    ru: [
      "**Чтобы сказать «много»**, поставьте {{word:hen3}}-{{word:duo1}}-{{word:de}} перед существительным.",
      "",
      "**{{word:hen3}}-{{word:duo1}}-{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "{{word:duo1}} и {{word:shao3}} — особые слова. Другие прилагательные могут стоять перед -{{word:de}} сами по себе ({{word:da4}}-{{word:de}} {{word:di4fang1}}), а этим двум нужно {{word:hen3}} впереди: {{word:duo1}}-{{word:de}} {{word:ren2}} звучит неправильно.",
      "",
      "После существительного {{word:hen3}} {{word:duo1}} значит, что чего-то много: {{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
      "{{word:shao3}} (мало) — противоположность: {{Word:shui3}} {{word:hen3}} {{word:shao3}}, воды мало.",
    ],
    tldr: {
      en: "{{word:hen3}}-{{word:duo1}}-{{word:de}} + noun means many. {{word:hen3}} {{word:shao3}} means few.",
      ru: "{{word:hen3}}-{{word:duo1}}-{{word:de}} + существительное — это «много». {{word:hen3}} {{word:shao3}} — «мало».",
    },
    necessity: {
      en: "Now you can say how many: a lot, or few.",
      ru: "Теперь вы можете сказать, сколько чего-то: много или мало.",
    },
  },
  info: {
    items: [
      {
        en: "{{word:hen3}}-{{word:duo1}}-{{word:de}} + NOUN: {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} (many people)",
        ru: "{{word:hen3}}-{{word:duo1}}-{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ: {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} (много людей)",
      },
      {
        en: "NOUN + {{word:hen3}} {{word:shao3}}: {{Word:ren2}} {{word:hen3}} {{word:shao3}}. (There are few people.)",
        ru: "СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} {{word:shao3}}: {{Word:ren2}} {{word:hen3}} {{word:shao3}}. (Людей мало.)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "很多的人。",
      en: "Many people.",
      ru: "Много людей.",
    },
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "很多的植物。",
      en: "A lot of plants.",
      ru: "Много растений.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "水很多。",
      en: "There is a lot of water.",
      ru: "Воды много.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "水很少。",
      en: "There is little water.",
      ru: "Воды мало.",
    },
    {
      pinyin: "{{Word:ren2}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "人很少。",
      en: "There are few people.",
      ru: "Людей мало.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "植物很少。",
      en: "There are few plants.",
      ru: "Растений мало.",
    },
  ],
  exercises: [
    {
      en: "many people",
      ru: "много людей",
      answer: "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}",
      hanzi: "很多的人",
    },
    {
      en: "There are a lot of plants.",
      ru: "Растений много.",
      answer: "{{Word:zhi2wu4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "植物很多。",
    },
    {
      en: "There are few people.",
      ru: "Людей мало.",
      answer: "{{Word:ren2}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "人很少。",
    },
  ],
  faq: [
    // does hěn-duō-de rén mean "very many people"? (no -- duō always takes hěn)
    {
      question: {
        en: "Does {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} mean \"very many people\"?",
        ru: "{{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} значит «очень много людей»?",
      },
      en: "No, just \"many people\". {{word:duo1}} can't go before a noun on its own, so it always takes {{word:hen3}}, and here {{word:hen3}} adds almost nothing.",
      ru: "Нет, просто «много людей». {{word:duo1}} не может стоять перед существительным само по себе, поэтому всегда берёт {{word:hen3}}, и здесь {{word:hen3}} почти ничего не добавляет.",
    },
  ],
});
