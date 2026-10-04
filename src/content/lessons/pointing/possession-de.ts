// Grammar: whose it is, with -de (the same -de as Lesson
// {{lesson:modifying-nouns}}'s adjectives). [from old L04]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "possession-de",
  words: [
    {
      term: "{{word:jia1}}",
      hanzi: "家",
      en: "home, family",
      ru: "дом, семья",
    },
    {
      term: "{{word:tou2}}",
      hanzi: "头",
      en: "head",
      ru: "голова",
    },
    {
      term: "{{word:shou3}}",
      hanzi: "手",
      en: "hand",
      ru: "рука",
    },
    {
      term: "{{word:jiao3}}",
      hanzi: "脚",
      en: "foot",
      ru: "нога, ступня",
    },
  ],
  prose: {
    en: [
      "To say whose something is, add <code>-{{word:de}}</code> (from Lesson {{lesson:modifying-nouns}}): <audio-example zh=\"我的\">{{word:wo3}}-{{word:de}}</audio-example> (\"my\"), <audio-example zh=\"你的\">{{word:ni3}}-{{word:de}}</audio-example> (\"your\").",
      "It's the same <code>-{{word:de}}</code> that joins an adjective to a noun.",
    ],
    ru: [
      "Чтобы сказать, чьё что-то, добавьте <code>-{{word:de}}</code> (из урока {{lesson:modifying-nouns}}): <audio-example zh=\"我的\">{{word:wo3}}-{{word:de}}</audio-example> («мой»), <audio-example zh=\"你的\">{{word:ni3}}-{{word:de}}</audio-example> («твой»).",
      "Это то же самое <code>-{{word:de}}</code>, которое связывает прилагательное с существительным.",
    ],
    tldr: {
      en: "Add {{word:de}} to say whose it is: {{word:wo3}}-{{word:de}} means \"my\".",
      ru: "Добавьте {{word:de}}, чтобы сказать, чьё это: {{word:wo3}}-{{word:de}} значит «мой».",
    },
    necessity: {
      en: "Now you can say who something belongs to.",
      ru: "Теперь вы можете сказать, кому что-то принадлежит.",
    },
  },
  info: {
    en: "{{word:wo3}}-{{word:de}} / {{word:ni3}}-{{word:de}} + noun, whose: {{word:wo3}}-{{word:de}} {{word:shui3guo3}} (my fruit)",
    ru: "{{word:wo3}}-{{word:de}} / {{word:ni3}}-{{word:de}} + существительное — чей: {{word:wo3}}-{{word:de}} {{word:shui3guo3}} (мой фрукт)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shui3guo3}}.",
      hanzi: "我的水果。",
      en: "My fruit.",
      ru: "Мой фрукт.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "你的家。",
      en: "Your family.",
      ru: "Твоя семья.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我的好的人。",
      en: "My good person.",
      ru: "Мой хороший человек.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:tou2}}.",
      hanzi: "我的头。",
      en: "My head.",
      ru: "Моя голова.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "你的脚很大。",
      en: "Your feet are big.",
      ru: "У тебя большие ноги.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的手很大。",
      en: "My hands are big.",
      ru: "У меня большие руки.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "他的头很小。",
      en: "His head is small.",
      ru: "У него маленькая голова.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "她的脚很小。",
      en: "Her feet are small.",
      ru: "У неё маленькие ноги.",
    },
  ],
  exercises: [
    {
      en: "Your fruit is good.",
      ru: "Твой фрукт хороший.",
      answer: "{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你的水果很好。",
    },
    {
      en: "That is your family.",
      ru: "Это твоя семья.",
      answer: "{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "那是你的家。",
    },
    {
      en: "Your hand is big.",
      ru: "У тебя большая рука.",
      answer: "{{Word:ni3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "你的手很大。",
    },
    {
      en: "Her head is big.",
      ru: "У неё большая голова.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:da4}}.",
      hanzi: "她的头很大。",
    },
    {
      en: "My feet are small.",
      ru: "У меня маленькие ноги.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的脚很小。",
    },
  ],
  faq: [
    // can I drop -de in wǒ-de jiā? (often, for family and home; -de is always correct)
    {
      question: {
        en: "Can I say {{word:wo3}} {{word:jia1}} without -{{word:de}}?",
        ru: "Можно сказать {{word:wo3}} {{word:jia1}} без -{{word:de}}?",
      },
      en: "Mandarin speakers often do, for family and home: {{word:wo3}} {{word:jia1}}. With -{{word:de}}, it's always correct, so Hao-shuo-de keeps it.",
      ru: "Носители китайского часто так говорят о семье и доме: {{word:wo3}} {{word:jia1}}. С -{{word:de}} всегда правильно, поэтому в Hǎo-shuō-de его сохраняют.",
    },
  ],
});
