// To say something is done, put le after the verb. Pattern: Who + verb + le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "done",
  words: [
    {
      term: "{{word:le}}",
      hanzi: "了",
      en: "after a verb: it's done",
      ru: "после глагола: сделано",
    },
    {
      term: "{{word:shui4jiao4}}",
      hanzi: "睡觉",
      en: "sleep",
      ru: "спать",
    },
    {
      term: "{{word:fa1sheng1}}",
      hanzi: "发生",
      en: "happen",
      ru: "происходить, случаться",
    },
  ],
  prose: {
    en: [
      "**To say something is done**, put {{word:le}} after the verb.",
      "",
      "**Who + verb + {{word:le}}**",
      "",
      "Verbs never change. Small words (particles) like {{word:le}} show when.",
      "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? means \"What happened?\" ({{word:fa1sheng1}} is happen).",
    ],
    ru: [
      "**Чтобы сказать, что что-то сделано**, поставьте {{word:le}} после глагола.",
      "",
      "**Кто + глагол + {{word:le}}**",
      "",
      "Глаголы никогда не меняются. Когда это было, показывают маленькие слова (частицы), такие как {{word:le}}.",
      "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? значит «Что случилось?» ({{word:fa1sheng1}} — «случаться»).",
    ],
    tldr: {
      en: "Put {{word:le}} after a verb to say it is done.",
      ru: "Поставьте {{word:le}} после глагола, чтобы сказать, что это сделано.",
    },
    necessity: {
      en: "Now you can talk about what already happened.",
      ru: "Теперь вы можете говорить о том, что уже случилось.",
    },
  },
  info: {
    items: [
      {
        en: "verb + {{word:le}}, done: {{Word:wo3}} {{word:chi1}} {{word:le}}. (I ate.)",
        ru: "глагол + {{word:le}} — сделано: {{Word:wo3}} {{word:chi1}} {{word:le}}. (Я поел.)",
      },
      {
        en: "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? (What happened?)",
        ru: "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? (Что случилось?)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}}.",
      hanzi: "我吃了。",
      en: "I ate. / I've eaten.",
      ru: "Я поел.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "他睡觉了。",
      en: "He went to sleep.",
      ru: "Он лёг спать.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:le}} {{word:ma}}?",
      hanzi: "你看了吗？",
      en: "Did you see it?",
      ru: "Ты это видел?",
    },
    {
      pinyin: "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}?",
      hanzi: "发生了什么？",
      en: "What happened?",
      ru: "Что случилось?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:fa1sheng1}} {{word:le}} {{word:shen2me}} {{word:ma}}?",
      hanzi: "你知道发生了什么吗？",
      en: "Do you know what happened?",
      ru: "Ты знаешь, что случилось?",
    },
  ],
  exercises: [
    {
      en: "What happened?",
      ru: "Что случилось?",
      answer: "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}?",
      hanzi: "发生了什么？",
    },
    {
      en: "I slept.",
      ru: "Я поспал.",
      answer: "{{Word:wo3}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "我睡觉了。",
    },
  ],
  faq: [
    // does le mean the past? (no -- it says the action is done)
    {
      question: { en: "Does {{word:le}} mean the past?", ru: "{{word:le}} значит, что это было в прошлом?" },
      en: "Not exactly. {{word:le}} says the action is done. Chinese verbs have no past form, and when you talk about the past in general, you often don't need {{word:le}} at all.",
      ru: "Не совсем. {{word:le}} говорит, что действие завершено, — примерно как разница между «ел» и «поел». У китайских глаголов нет формы прошлого, и когда вы рассказываете о прошлом вообще, {{word:le}} часто совсем не нужно.",
    },
  ],
});
