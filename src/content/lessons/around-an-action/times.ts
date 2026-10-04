// To say how many times, put cì after hěn duō or duō-shǎo. Pattern: verb +
// hěn duō cì
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "times",
  words: [
    {
      word: "ci4",
      en: "time, as in \"many times\"",
      ru: "раз, как в «много раз»",
    },
  ],
  prose: {
    en: [
      "**To say how many times**, put {{word:ci4}} (time) after {{word:hen3}} {{word:duo1}} or {{word:duo1}}-{{word:shao3}}.",
      "",
      "**verb + {{word:hen3}} {{word:duo1}} {{word:ci4}} / {{word:duo1}}-{{word:shao3}} {{word:ci4}}?**",
      "",
      "{{word:zhe4}}-{{word:ci4}} is \"this time\". With numbers (Lesson {{lesson:numbers}}), {{word:ci4}} counts: two times, three times.",
    ],
    ru: [
      "**Чтобы сказать, сколько раз**, поставьте {{word:ci4}} (раз) после {{word:hen3}} {{word:duo1}} или {{word:duo1}}-{{word:shao3}}.",
      "",
      "**глагол + {{word:hen3}} {{word:duo1}} {{word:ci4}} / {{word:duo1}}-{{word:shao3}} {{word:ci4}}?**",
      "",
      "{{word:zhe4}}-{{word:ci4}} — «в этот раз». С числами (урок {{lesson:numbers}}) {{word:ci4}} считает: два раза, три раза.",
    ],
    tldr: {
      en: "{{word:hen3}} {{word:duo1}} {{word:ci4}} is many times. {{word:zhe4}}-{{word:ci4}} is this time.",
      ru: "{{word:hen3}} {{word:duo1}} {{word:ci4}} — «много раз». {{word:zhe4}}-{{word:ci4}} — «в этот раз».",
    },
    necessity: {
      en: "Now you can say how often something happens.",
      ru: "Теперь вы можете сказать, как часто что-то бывает.",
    },
  },
  info: {
    en: "{{word:hen3}} {{word:duo1}} {{word:ci4}}, many times: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}. (I've seen it many times.)",
    ru: "{{word:hen3}} {{word:duo1}} {{word:ci4}} — много раз: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}. (Я видел это много раз.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}.",
      hanzi: "我看过很多次。",
      en: "I've seen it many times.",
      ru: "Я видел это много раз.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:chi1}}-{{word:guo4}} {{word:duo1}}-{{word:shao3}} {{word:ci4}}?",
      hanzi: "你吃过多少次？",
      en: "How many times have you eaten it?",
      ru: "Сколько раз ты это ел?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:ci4}} {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "这次我等你。",
      en: "This time I'll wait for you.",
      ru: "В этот раз я тебя подожду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}.",
      hanzi: "他说过很多次。",
      en: "He's said it many times.",
      ru: "Он говорил это много раз.",
    },
  ],
  exercises: [
    {
      en: "I've eaten it many times.",
      ru: "Я ел это много раз.",
      answer: "{{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}.",
      hanzi: "我吃过很多次。",
    },
  ],
});
