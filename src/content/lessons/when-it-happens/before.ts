// To say you have done something before, put guò after the verb. Pattern: Who
// + verb-guò
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "before",
  words: [
    {
      word: "yue4",
      en: "moon, night",
      ru: "луна, ночь",
    },
    {
      word: "guo4",
      en: "after a verb: have done before",
      ru: "после глагола: уже когда-то делал",
    },
  ],
  prose: {
    en: [
      "**To say you have done something before**, put {{word:guo4}} after the verb.",
      "",
      "**Who + verb-{{word:guo4}}**",
      "",
      "Join it to the verb with a hyphen: {{word:chi1}}-{{word:guo4}}.",
    ],
    ru: [
      "**Чтобы сказать, что вы уже когда-то что-то делали**, поставьте {{word:guo4}} после глагола.",
      "",
      "**Кто + глагол-{{word:guo4}}**",
      "",
      "Присоедините его к глаголу через дефис: {{word:chi1}}-{{word:guo4}}.",
    ],
    tldr: {
      en: "Put {{word:guo4}} after a verb to say you have done it before.",
      ru: "Поставьте {{word:guo4}} после глагола, чтобы сказать, что уже когда-то это делали.",
    },
    necessity: {
      en: "Now you can talk about things you have tried.",
      ru: "Теперь вы можете говорить о том, что уже пробовали.",
    },
  },
  info: {
    en: "verb-{{word:guo4}}, done before: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:zhe4}}-ge {{word:dong4wu4}}. (I've seen this animal before.)",
    ru: "глагол-{{word:guo4}} — уже когда-то делал: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:zhe4}}-ge {{word:dong4wu4}}. (Я уже видел это животное.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:zhe4}}-ge {{word:dong4wu4}}.",
      hanzi: "我看过这个动物。",
      en: "I've seen this animal before.",
      ru: "Я уже видел это животное.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:guo4}} {{word:yue4}} {{word:ma}}?",
      hanzi: "你看过月吗？",
      en: "Have you ever looked at the moon?",
      ru: "Ты когда-нибудь смотрел на луну?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:guo4}}.",
      hanzi: "他说过。",
      en: "He has said it before.",
      ru: "Он это уже говорил.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:fa1}}-{{word:sheng1}}-{{word:guo4}}.",
      hanzi: "这发生过。",
      en: "This has happened before.",
      ru: "Такое уже случалось.",
    },
  ],
  exercises: [
    {
      en: "I've heard it before.",
      ru: "Я это уже слышал.",
      answer: "{{Word:wo3}} {{word:ting1}}-{{word:guo4}}.",
      hanzi: "我听过。",
    },
    {
      en: "The moon is small.",
      ru: "Луна маленькая.",
      answer: "{{Word:yue4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "月很小。",
    },
  ],
  faq: [
    // le vs guò
    {
      question: {
        en: "What's the difference between {{word:le}} and -{{word:guo4}}?",
        ru: "Чем {{word:le}} отличается от -{{word:guo4}}?",
      },
      en: "{{word:le}} says it's done: {{Word:wo3}} {{word:chi1}} {{word:le}} (I ate, I've eaten). -{{word:guo4}} says it has happened at least once, some time before: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:zhe4}}-ge {{word:dong4wu4}} (I've seen this animal before).",
      ru: "{{word:le}} говорит, что дело сделано: {{Word:wo3}} {{word:chi1}} {{word:le}} (Я поел). -{{word:guo4}} говорит, что это хотя бы раз уже было когда-то раньше: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:zhe4}}-ge {{word:dong4wu4}} (Я уже видел это животное).",
    },
  ],
});
