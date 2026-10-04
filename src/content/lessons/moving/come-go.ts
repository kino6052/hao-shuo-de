// To say you come or go somewhere, put lái (come) or qù (go) before the
// place. Pattern: Who + lái / qù + place
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "come-go",
  words: [
    {
      term: "{{word:lai2}}",
      hanzi: "来",
      en: "come",
      ru: "приходить",
    },
    {
      term: "{{word:qu4}}",
      hanzi: "去",
      en: "go",
      ru: "идти, уходить",
    },
  ],
  prose: {
    en: [
      "**To say you come or go somewhere**, put {{word:lai2}} (come) or {{word:qu4}} (go) before the place.",
      "",
      "**Who + {{word:lai2}} / {{word:qu4}} + place**",
      "",
      "On its own, it's an order: {{Word:qu4}}! (Go!)",
    ],
    ru: [
      "**Чтобы сказать, что вы приходите или идёте куда-то**, поставьте {{word:lai2}} (приходить) или {{word:qu4}} (идти) перед местом.",
      "",
      "**Кто + {{word:lai2}} / {{word:qu4}} + место**",
      "",
      "Само по себе это приказ: {{Word:qu4}}! (Иди!)",
    ],
    tldr: {
      en: "{{word:lai2}} is come, {{word:qu4}} is go. Put the place after them.",
      ru: "{{word:lai2}} — «приходить», {{word:qu4}} — «идти». Место ставится после них.",
    },
    necessity: { en: "Now you can say where you're going.", ru: "Теперь вы можете сказать, куда идёте." },
  },
  info: {
    en: "{{word:lai2}} / {{word:qu4}} + place: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}}. (I'm going to my parents' home.)",
    ru: "{{word:lai2}} / {{word:qu4}} + место: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}}. (Я иду домой к родителям.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我去父母的家。",
      en: "I'm going to my parents' home.",
      ru: "Я иду домой к родителям.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:lai2}} {{word:wo3}}-{{word:de}} {{word:jia1}} {{word:ma}}?",
      hanzi: "你来我的家吗？",
      en: "Are you coming to my home?",
      ru: "Ты придёшь ко мне домой?",
    },
    {
      pinyin: "{{Word:qu4}}!",
      hanzi: "去！",
      en: "Go!",
      ru: "Иди!",
    },
    {
      pinyin: "{{Word:lai2}}!",
      hanzi: "来！",
      en: "Come!",
      ru: "Иди сюда!",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}}-{{word:men}} {{word:qu4}} {{word:ni3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "吃完后，我们去你的家。",
      en: "After eating, we go to your home.",
      ru: "После еды мы идём к тебе домой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:lai2}} {{word:wo3}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
      hanzi: "他来我的旁边。",
      en: "He comes over beside me.",
      ru: "Он подходит ко мне.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:lai2}} {{word:yi1xia4}}.",
      hanzi: "你来一下。",
      en: "Come here a moment.",
      ru: "Подойди на минутку.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you4}} {{word:lai2}} {{word:le}}!",
      hanzi: "你又来了！",
      en: "You're here again!",
      ru: "Ты опять пришёл!",
    },
  ],
  exercises: [
    {
      en: "Where are you going?",
      ru: "Куда ты идёшь?",
      answer: "{{Word:ni3}} {{word:qu4}} {{word:na3li3}}?",
      hanzi: "你去哪里？",
    },
  ],
  faq: [
    // lái or qù depends on where the speaker is
    {
      question: {
        en: "How do I choose between {{word:lai2}} and {{word:qu4}}?",
        ru: "Как выбрать между {{word:lai2}} и {{word:qu4}}?",
      },
      en: "It depends on where the speaker is. {{word:lai2}} moves toward the speaker, {{word:qu4}} moves away. Someone downstairs calls {{word:xia4}}-{{word:lai2}}! (Come down!). Someone upstairs says {{word:xia4}}-{{word:qu4}}! (Go down!).",
      ru: "Это зависит от того, где говорящий. {{word:lai2}} — движение к говорящему, {{word:qu4}} — от него, как русские «при-» и «у-». Тот, кто внизу, зовёт: {{word:xia4}}-{{word:lai2}}! (Спускайся сюда!). Тот, кто наверху, говорит: {{word:xia4}}-{{word:qu4}}! (Спускайся туда!).",
    },
  ],
});
