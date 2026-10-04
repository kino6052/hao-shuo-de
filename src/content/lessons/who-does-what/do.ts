// To say what someone does, put the verb after the who, and the what after
// the verb. Pattern: Who + verb + what
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "do",
  words: [
    {
      term: "{{word:chi1}}",
      hanzi: "吃",
      en: "eat, drink",
      ru: "есть, пить",
    },
    {
      term: "{{word:kan4}}",
      hanzi: "看",
      en: "look, read",
      ru: "смотреть, читать",
    },
    {
      term: "{{word:ting1}}",
      hanzi: "听",
      en: "listen, hear",
      ru: "слушать, слышать",
    },
    {
      term: "{{word:shuo1}}",
      hanzi: "说",
      en: "say, speak",
      ru: "говорить",
    },
    {
      term: "{{word:xie3}}",
      hanzi: "写",
      en: "write",
      ru: "писать",
    },
    {
      term: "{{word:mi3fan4}}",
      hanzi: "米饭",
      en: "rice",
      ru: "рис",
    },
  ],
  prose: {
    en: [
      "**To say what someone does**, put the verb after the who, and the what after the verb.",
      "",
      "**Who + verb + what**",
      "",
      "A verb is an action word: {{word:chi1}} (eat), {{word:kan4}} (look), {{word:shuo1}} (speak).",
      "The order shows who does what. Swap them, and the meaning swaps: {{Word:wo3}} {{word:kan4}} {{word:ta1}} / {{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
    ],
    ru: [
      "**Чтобы сказать, что кто-то делает**, поставьте глагол после того, кто делает, а то, что делают, — после глагола.",
      "",
      "**Кто + глагол + что**",
      "",
      "Глагол — это слово-действие: {{word:chi1}} (есть), {{word:kan4}} (смотреть), {{word:shuo1}} (говорить).",
      "Порядок слов показывает, кто что делает. Поменяйте слова местами — и смысл поменяется: {{Word:wo3}} {{word:kan4}} {{word:ta1}} / {{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
      "В русском смысл держат окончания, а в китайском окончаний нет — эту работу делает порядок слов.",
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
    en: "Who + verb + what: {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}. (I eat rice.)",
    ru: "Кто + глагол + что: {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}. (Я ем рис.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}.",
      hanzi: "我吃米饭。",
      en: "I eat rice.",
      ru: "Я ем рис.",
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
  ],
  exercises: [
    {
      en: "I listen to you.",
      ru: "Я слушаю тебя.",
      answer: "{{Word:wo3}} {{word:ting1}} {{word:ni3}}.",
      hanzi: "我听你。",
    },
    {
      en: "She eats rice.",
      ru: "Она ест рис.",
      answer: "{{Word:ta1}} {{word:chi1}} {{word:mi3fan4}}.",
      hanzi: "她吃米饭。",
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
  ],
  faq: [
    // how do I say "ate" or "will eat"? (the verb never changes; Lesson {{lesson:when-it-happens}})
    {
      question: { en: "How do I say \"ate\" or \"will eat\"?", ru: "Как сказать «ел» или «буду есть»?" },
      en: "The verb never changes. {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}} can mean \"I eat rice\", \"I ate rice\", or \"I'll eat rice\". The situation tells you when, and Lesson {{lesson:when-it-happens}} adds small words for it.",
      ru: "Глагол никогда не меняется. {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}} может значить «Я ем рис», «Я ел рис» или «Я буду есть рис». Когда — понятно из ситуации, а в уроке {{lesson:when-it-happens}} появятся маленькие слова для этого.",
    },
    // can chī mean drink? (in Hao-shuo-de yes; everyday Mandarin has a separate word)
    {
      question: {
        en: "Can I use {{word:chi1}} for drinking?",
        ru: "Можно ли сказать {{word:chi1}}, когда пьёшь?",
      },
      en: "In Hao-shuo-de, yes: {{word:chi1}} {{word:shui3}}. Everyday Mandarin usually has a separate word for \"drink\", but {{word:chi1}} is understood.",
      ru: "В Hǎo-shuō-de — да: {{word:chi1}} {{word:shui3}}. В обычном китайском для «пить» обычно есть отдельное слово, но {{word:chi1}} поймут.",
    },
  ],
});
