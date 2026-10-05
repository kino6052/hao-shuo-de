// I want to do something. Who + yào + verb.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "want",
  words: [
    {
      word: "yao4",
      en: "want; want to",
      ru: "хотеть; хотеть что-то сделать",
    },
    {
      word: "deng3",
      en: "wait",
      ru: "ждать",
    },
    {
      word: "yi1fu",
      en: "clothes",
      ru: "одежда",
    },
    {
      word: "xiang3",
      en: "think; would like to",
      ru: "думать; хотеть",
    },
  ],
  prose: {
    en: [
      "**To say you want to do something**, put {{word:yao4}} (want) before the verb.",
      "",
      "**Who + {{word:yao4}} + verb**",
      "",
      "It works with a thing too: {{Word:wo3}} {{word:yao4}} {{word:shui3}} means \"I want water\".",
      "{{word:xiang3}} + verb is a softer want: would like to. On its own, {{word:xiang3}} is think.",
    ],
    ru: [
      "**Чтобы сказать, что вы хотите что-то сделать**, поставьте {{word:yao4}} (хотеть) перед глаголом.",
      "",
      "**Кто + {{word:yao4}} + глагол**",
      "",
      "С вещью тоже работает: {{Word:wo3}} {{word:yao4}} {{word:shui3}} значит «Я хочу воды».",
      "{{word:xiang3}} + глагол — мягкое «хочу»: хотелось бы. Само по себе {{word:xiang3}} — «думать».",
    ],
    tldr: {
      en: "Put {{word:yao4}} before a verb to say you want to do it.",
      ru: "Поставьте {{word:yao4}} перед глаголом, чтобы сказать, что хотите это сделать.",
    },
    necessity: { en: "Now you can say what you want.", ru: "Теперь вы можете сказать, чего хотите." },
  },
  info: {
    en: "{{word:yao4}} + verb, want to: {{Word:wo3}} {{word:yao4}} {{word:chi1}}. (I want to eat.)",
    ru: "{{word:yao4}} + глагол — хотеть: {{Word:wo3}} {{word:yao4}} {{word:chi1}}. (Я хочу есть.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "我要吃。",
      en: "I want to eat.",
      ru: "Я хочу есть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:wen4}} {{word:ni3}}.",
      hanzi: "我要问你。",
      en: "I want to ask you.",
      ru: "Я хочу тебя спросить.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shuo1}} {{word:shen2me}}?",
      hanzi: "你要说什么？",
      en: "What do you want to say?",
      ru: "Что ты хочешь сказать?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:zhao3}} {{word:yi1fu}}.",
      hanzi: "她要找衣服。",
      en: "She wants to look for clothes.",
      ru: "Она хочет поискать одежду.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:deng3}} {{word:ma}}?",
      hanzi: "你要等吗？",
      en: "Do you want to wait?",
      ru: "Ты хочешь подождать?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我要喝水。",
      en: "I want to drink water.",
      ru: "Я хочу попить воды.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我想吃饭。",
      en: "I'd like to eat.",
      ru: "Я хочу есть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:mai3}} {{word:shen2me}}?",
      hanzi: "你想买什么？",
      en: "What would you like to buy?",
      ru: "Что ты хочешь купить?",
    },
  ],
  exercises: [
    {
      en: "I want to wait.",
      ru: "Я хочу подождать.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:deng3}}.",
      hanzi: "我要等。",
    },
    {
      en: "What do you want to eat?",
      ru: "Что ты хочешь съесть?",
      answer: "{{Word:ni3}} {{word:yao4}} {{word:chi1}} {{word:shen2me}}?",
      hanzi: "你要吃什么？",
    },
    {
      en: "Do you want to look at my clothes?",
      ru: "Хочешь посмотреть на мою одежду?",
      answer: "{{Word:ni3}} {{word:yao4}} {{word:kan4}} {{word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:ma}}?",
      hanzi: "你要看我的衣服吗？",
    },
    {
      en: "I'd like to drink water.",
      ru: "Я хочу пить.",
      answer: "{{Word:wo3}} {{word:xiang3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我想喝水。",
    },
  ],
  faq: [
    // yào also means "going to"
    {
      question: { en: "Does {{word:yao4}} only mean \"want\"?", ru: "{{word:yao4}} значит только «хотеть»?" },
      en: "It also means \"going to\". {{Word:wo3}} {{word:yao4}} {{word:chi1}} can be \"I want to eat\" or \"I'm going to eat\". The situation tells you which.",
      ru: "Ещё оно значит «собираться». {{Word:wo3}} {{word:yao4}} {{word:chi1}} может быть «Я хочу есть» или «Я собираюсь поесть». Что именно — понятно из ситуации.",
    },
    // how do I say "don't want"? (wǒ bù yào chī; bù yào + verb alone is "don't!")
    {
      question: { en: "How do I say \"don't want\"?", ru: "Как сказать «не хочу»?" },
      en: "Put {{word:bu4}} before {{word:yao4}}: {{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:chi1}} (I don't want to eat). Careful: with no who, {{Word:bu4}} {{word:yao4}} + verb means \"Don't …!\". Lesson {{lesson:greetings-and-feelings}} shows this.",
      ru: "Поставьте {{word:bu4}} перед {{word:yao4}}: {{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:chi1}} (Я не хочу есть). Осторожно: если не сказано, кто, то {{Word:bu4}} {{word:yao4}} + глагол значит «Не …!». Об этом — в уроке {{lesson:greetings-and-feelings}}.",
    },
  ],
});
