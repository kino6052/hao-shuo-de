// To say what someone does, put the verb after the who, and the what after
// the verb. Pattern: Who + verb + what
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "do",
  words: [
    {
      word: "chi1",
      en: "eat",
      ru: "есть",
    },
    {
      word: "kan4",
      en: "look, read",
      ru: "смотреть, читать",
    },
    {
      word: "ting1",
      en: "listen, hear",
      ru: "слушать, слышать",
    },
    {
      word: "shuo1",
      en: "say, speak",
      ru: "говорить",
    },
    {
      word: "xie3",
      en: "write",
      ru: "писать",
    },
    {
      word: "he1",
      en: "drink",
      ru: "пить",
    },
    {
      word: "fan4",
      en: "meal, rice; {{word:chi1}} {{word:fan4}}: eat",
      ru: "еда, рис; {{word:chi1}} {{word:fan4}} — есть",
    },
    {
      word: "zi4",
      en: "written character",
      ru: "иероглиф",
    },
  ],
  prose: {
    en: [
      "**To say what someone does**, put the verb after the who, and the what after the verb.",
      "",
      "**Who + verb + what**",
      "",
      "A verb is an action word: {{word:chi1}} (eat), {{word:he1}} (drink), {{word:kan4}} (look), {{word:shuo1}} (speak).",
      "The order shows who does what. Swap them, and the meaning swaps: {{Word:wo3}} {{word:kan4}} {{word:ta1}} / {{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
      "Eating is {{word:chi1}} {{word:fan4}} (eat a meal), and {{word:zi4}} is a written character: {{word:xie3}} {{word:zi4}}, write characters.",
    ],
    ru: [
      "**Чтобы сказать, что кто-то делает**, поставьте глагол после того, кто делает, а то, что делают, — после глагола.",
      "",
      "**Кто + глагол + что**",
      "",
      "Глагол — это слово-действие: {{word:chi1}} (есть), {{word:he1}} (пить), {{word:kan4}} (смотреть), {{word:shuo1}} (говорить).",
      "Порядок слов показывает, кто что делает. Поменяйте слова местами — и смысл поменяется: {{Word:wo3}} {{word:kan4}} {{word:ta1}} / {{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
      "В русском смысл держат окончания, а в китайском окончаний нет — эту работу делает порядок слов.",
      "«Есть» — это {{word:chi1}} {{word:fan4}} («есть еду»), а {{word:zi4}} — иероглиф: {{word:xie3}} {{word:zi4}} — писать иероглифы.",
    ],
    tldr: {
      en: "Say who does it, then the action, then what it is done to.",
      ru: "Сначала тот, кто делает, потом действие, потом то, над чем его совершают.",
    },
    necessity: {
      en: "Almost every sentence you make uses this order.",
      ru: "Почти каждое ваше предложение строится в таком порядке.",
    },
  },
  info: {
    en: "Who + verb + what: {{Word:wo3}} {{word:he1}} {{word:shui3}}. (I drink water.)",
    ru: "Кто + глагол + что: {{Word:wo3}} {{word:he1}} {{word:shui3}}. (Я пью воду.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我吃饭。",
      en: "I'm eating.",
      ru: "Я ем.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我喝水。",
      en: "I drink water.",
      ru: "Я пью воду.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}}.",
      hanzi: "我看他。",
      en: "I look at him.",
      ru: "Я смотрю на него.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
      hanzi: "他看我。",
      en: "He looks at me.",
      ru: "Он смотрит на меня.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ting1}} {{word:ni3}}.",
      hanzi: "我听你。",
      en: "I listen to you.",
      ru: "Я слушаю тебя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}.",
      hanzi: "她说。",
      en: "She speaks.",
      ru: "Она говорит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xie3}}.",
      hanzi: "我写。",
      en: "I write.",
      ru: "Я пишу.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xie3}} {{word:zi4}}.",
      hanzi: "我写字。",
      en: "I write characters.",
      ru: "Я пишу иероглифы.",
    },
  ],
  exercises: [
    {
      en: "I listen to you.",
      ru: "Я слушаю тебя.",
      answer: "{{Word:wo3}} {{word:ting1}} {{word:ni3}}.",
      hanzi: "我听你。",
    },
    {
      en: "She's eating.",
      ru: "Она ест.",
      answer: "{{Word:ta1}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "她吃饭。",
    },
    {
      en: "She drinks water.",
      ru: "Она пьёт воду.",
      answer: "{{Word:ta1}} {{word:he1}} {{word:shui3}}.",
      hanzi: "她喝水。",
    },
    {
      en: "You look at me.",
      ru: "Ты смотришь на меня.",
      answer: "{{Word:ni3}} {{word:kan4}} {{word:wo3}}.",
      hanzi: "你看我。",
    },
    {
      en: "They speak.",
      ru: "Они говорят.",
      answer: "{{Word:ta1}}-{{word:men}} {{word:shuo1}}.",
      hanzi: "他们说。",
    },
    {
      en: "She writes characters.",
      ru: "Она пишет иероглифы.",
      answer: "{{Word:ta1}} {{word:xie3}} {{word:zi4}}.",
      hanzi: "她写字。",
    },
  ],
  faq: [
    // how do I say "ate" or "will eat"? (the verb never changes; Lesson {{lesson:when-it-happens}})
    {
      question: { en: "How do I say \"ate\" or \"will eat\"?", ru: "Как сказать «ел» или «буду есть»?" },
      en: "The verb never changes. {{Word:wo3}} {{word:chi1}} {{word:fan4}} can mean \"I eat\", \"I ate\", or \"I'll eat\". The situation tells you when, and Lesson {{lesson:when-it-happens}} adds small words for it.",
      ru: "Глагол никогда не меняется. {{Word:wo3}} {{word:chi1}} {{word:fan4}} может значить «Я ем», «Я ел» или «Я буду есть». Когда — понятно из ситуации, а в уроке {{lesson:when-it-happens}} появятся маленькие слова для этого.",
    },
    // can chī mean drink? (no -- drinking is hē)
    {
      question: {
        en: "Can I use {{word:chi1}} for drinking?",
        ru: "Можно ли сказать {{word:chi1}}, когда пьёшь?",
      },
      en: "No, drinking has its own verb, {{word:he1}}: {{Word:wo3}} {{word:he1}} {{word:shui3}}. {{word:chi1}} is for food you chew.",
      ru: "Нет, для питья есть свой глагол, {{word:he1}}: {{Word:wo3}} {{word:he1}} {{word:shui3}}. {{word:chi1}} — для еды, которую жуют.",
    },
  ],
});
