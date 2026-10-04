// To ask "why?" or "how?", put wèishénme (why) or zěnme (how) before the
// verb. Pattern: who + wèishénme / zěnme + verb?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "why-how",
  words: [
    {
      term: "{{word:wei4shen2me}}",
      hanzi: "为什么",
      en: "why",
      ru: "почему",
    },
    {
      term: "{{word:zen3me}}",
      hanzi: "怎么",
      en: "how",
      ru: "как",
    },
  ],
  prose: {
    en: [
      "**To ask \"why?\" or \"how?\"**, put {{word:wei4shen2me}} (why) or {{word:zen3me}} (how) before the verb.",
      "",
      "**Who + {{word:wei4shen2me}} / {{word:zen3me}} + verb?**",
      "",
      "{{word:wei4shen2me}} also goes before {{word:bu4}}: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}?",
    ],
    ru: [
      "**Чтобы спросить «почему?» или «как?»**, поставьте {{word:wei4shen2me}} (почему) или {{word:zen3me}} (как) перед глаголом.",
      "",
      "**Кто + {{word:wei4shen2me}} / {{word:zen3me}} + глагол?**",
      "",
      "{{word:wei4shen2me}} ставится и перед {{word:bu4}}: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}?",
    ],
    tldr: {
      en: "Put {{word:wei4shen2me}} (why) or {{word:zen3me}} (how) before the verb.",
      ru: "Поставьте {{word:wei4shen2me}} (почему) или {{word:zen3me}} (как) перед глаголом.",
    },
    necessity: {
      en: "Now you can ask for reasons and ways.",
      ru: "Теперь вы можете спрашивать о причинах и способах.",
    },
  },
  info: {
    items: [
      {
        en: "{{word:wei4shen2me}} + verb, why: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}? (Why don't you eat?)",
        ru: "{{word:wei4shen2me}} + глагол — почему: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}? (Почему ты не ешь?)",
      },
      {
        en: "{{word:zen3me}} + verb, how: {{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}? (How do you say this?)",
        ru: "{{word:zen3me}} + глагол — как: {{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}? (Как это сказать?)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}?",
      hanzi: "你为什么不吃？",
      en: "Why don't you eat?",
      ru: "Почему ты не ешь?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:wei4shen2me}} {{word:zhao3}} {{word:he2zi}}?",
      hanzi: "他为什么找盒子？",
      en: "Why is he looking for a box?",
      ru: "Почему он ищет коробку?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:wen4}}?",
      hanzi: "你为什么问？",
      en: "Why are you asking?",
      ru: "Почему ты спрашиваешь?",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}?",
      hanzi: "这个怎么说？",
      en: "How do you say this?",
      ru: "Как это сказать?",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zen3me}} {{word:xie3}}?",
      hanzi: "这个怎么写？",
      en: "How do you write this?",
      ru: "Как это пишется?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zen3me}} {{word:zhao3}} {{word:ta1}}?",
      hanzi: "你怎么找他？",
      en: "How do you find him?",
      ru: "Как его найти?",
    },
  ],
  exercises: [
    {
      en: "Why is he looking for water?",
      ru: "Почему он ищет воду?",
      answer: "{{Word:ta1}} {{word:wei4shen2me}} {{word:zhao3}} {{word:shui3}}?",
      hanzi: "他为什么找水？",
    },
    {
      en: "How do you write this?",
      ru: "Как это пишется?",
      answer: "{{Word:zhe4}}-ge {{word:zen3me}} {{word:xie3}}?",
      hanzi: "这个怎么写？",
    },
  ],
  faq: [
    // can wèishénme go at the start? (yes, but before the verb is the usual place)
    {
      question: {
        en: "Can {{word:wei4shen2me}} go at the start of the sentence?",
        ru: "Можно ли поставить {{word:wei4shen2me}} в начало предложения?",
      },
      en: "Yes, {{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}? is also correct Mandarin. Before the verb is the usual place, and it's the same place as {{word:zen3me}}, so Hao-shuo-de always puts it there.",
      ru: "Да, {{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}? — тоже правильный китайский. Но обычное место — перед глаголом, там же, где {{word:zen3me}}, поэтому в Hǎo-shuō-de его всегда ставят туда.",
    },
  ],
});
