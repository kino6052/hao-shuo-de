// To name the thing an action is about, put -de after the verb. Pattern:
// verb-de
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "thing",
  words: [
    {
      word: "ci2",
      en: "word",
      ru: "слово",
    },
  ],
  prose: {
    en: [
      "**To name the thing an action is about**, put -{{word:de}} after the verb.",
      "",
      "**verb-{{word:de}}**",
      "",
      "One {{word:ci2}} (word) can do more than one job: {{word:chi1}} is eat, and {{word:chi1}}-{{word:de}} is food.",
    ],
    ru: [
      "**Чтобы назвать вещь, о которой идёт речь в действии**, поставьте -{{word:de}} после глагола.",
      "",
      "**глагол-{{word:de}}**",
      "",
      "Одно {{word:ci2}} (слово) может делать больше одной работы: {{word:chi1}} — «есть», а {{word:chi1}}-{{word:de}} — «еда».",
    ],
    tldr: {
      en: "verb-{{word:de}} names the thing: {{word:chi1}}-{{word:de}} is food, something to eat.",
      ru: "глагол-{{word:de}} называет вещь: {{word:chi1}}-{{word:de}} — еда, то, что едят.",
    },
    necessity: {
      en: "Now you can make new nouns from verbs you know.",
      ru: "Теперь вы можете делать новые существительные из знакомых глаголов.",
    },
  },
  info: {
    en: "verb-{{word:de}}, the thing: {{word:chi1}}-{{word:de}} (food, something to eat)",
    ru: "глагол-{{word:de}} — вещь: {{word:chi1}}-{{word:de}} (еда, то, что едят)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}-{{word:de}}.",
      hanzi: "我要吃的。",
      en: "I want something to eat.",
      ru: "Я хочу чего-нибудь поесть.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:xie3}}-{{word:de}}.",
      hanzi: "这是我写的。",
      en: "This is what I wrote.",
      ru: "Это то, что я написал.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:ci2}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "这个词是什么？",
      en: "What is this word?",
      ru: "Что это за слово?",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:ci2}} {{word:zen3me}} {{word:shuo1}}?",
      hanzi: "这个词怎么说？",
      en: "How do you say this word?",
      ru: "Как сказать это слово?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:zhe4}}-ge {{word:ci2}}.",
      hanzi: "我知道这个词。",
      en: "I know this word.",
      ru: "Я знаю это слово.",
    },
    {
      pinyin: "{{Word:shi2}}-ge {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:dou1}} {{word:huai4}} {{word:le}}.",
      hanzi: "十个吃的东西都坏了。",
      en: "All ten pieces of food went bad.",
      ru: "Вся еда — десять штук — испортилась.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chi1}}-{{word:de}} {{word:shi4}} {{word:zhi2wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他吃的是植物生的东西。",
      en: "What he's eating is fruit.",
      ru: "То, что он ест, — фрукты.",
    },
  ],
  exercises: [
    {
      en: "Do you have anything to eat?",
      ru: "У тебя есть что-нибудь поесть?",
      answer: "{{Word:ni3}} {{word:you3}} {{word:chi1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你有吃的吗？",
    },
    {
      en: "How do you write this word?",
      ru: "Как пишется это слово?",
      answer: "{{Word:zhe4}}-ge {{word:ci2}} {{word:zen3me}} {{word:xie3}}?",
      hanzi: "这个词怎么写？",
    },
  ],
});
