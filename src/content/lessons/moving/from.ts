// To say where you come from, put cóng (from) before the place, then lái.
// Pattern: Who + cóng + place + lái
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "from",
  words: [
    {
      term: "{{word:cong2}}",
      hanzi: "从",
      en: "from",
      ru: "из, от",
    },
  ],
  prose: {
    en: [
      "**To say where you come from**, put {{word:cong2}} (from) before the place, then {{word:lai2}}.",
      "",
      "**Who + {{word:cong2}} + place + {{word:lai2}}**",
    ],
    ru: [
      "**Чтобы сказать, откуда вы пришли**, поставьте {{word:cong2}} (из) перед местом, а потом {{word:lai2}}.",
      "",
      "**Кто + {{word:cong2}} + место + {{word:lai2}}**",
    ],
    tldr: {
      en: "Put {{word:cong2}} before the place you come from.",
      ru: "Поставьте {{word:cong2}} перед местом, откуда вы пришли.",
    },
    necessity: {
      en: "Now you can say where someone comes from.",
      ru: "Теперь вы можете сказать, откуда кто-то пришёл.",
    },
  },
  info: {
    en: "{{word:cong2}} + place + {{word:lai2}}: {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}}. (I come from home.)",
    ru: "{{word:cong2}} + место + {{word:lai2}}: {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}}. (Я пришёл из дома.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:lai2}}.",
      hanzi: "我从父母的家来。",
      en: "I come from my parents' home.",
      ru: "Я пришёл из дома родителей.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
      hanzi: "他从家来。",
      en: "He comes from home.",
      ru: "Он идёт из дома.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:cong2}} {{word:na3li3}} {{word:lai2}}?",
      hanzi: "你从哪里来？",
      en: "Where do you come from?",
      ru: "Откуда ты?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:qian2}}-{{word:mian4}} {{word:lai2}}.",
      hanzi: "他从前面来。",
      en: "He comes from the front.",
      ru: "Он идёт спереди.",
    },
  ],
  exercises: [
    {
      en: "She comes from home.",
      ru: "Она идёт из дома.",
      answer: "{{Word:ta1}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
      hanzi: "她从家来。",
    },
  ],
  faq: [
    // why cóng + place before lái?
    {
      question: {
        en: "Why does the place go in the middle of {{word:cong2}} … {{word:lai2}}?",
        ru: "Почему место стоит между {{word:cong2}} и {{word:lai2}}?",
      },
      en: "In Chinese, \"from where\" comes before the verb, like most details about an action. {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}} is \"I from home come\".",
      ru: "В китайском «откуда» стоит перед глаголом, как и большинство подробностей о действии. {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}} — это «я из дома пришёл».",
    },
  ],
});
