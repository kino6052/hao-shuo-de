// Pointers: zhè (this) and nà (that) work like nouns. [from old L04]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "pointers-are-nouns",
  words: [
    {
      term: "{{word:na4}}",
      hanzi: "那",
      en: "that, those",
      ru: "тот, те",
    },
  ],
  prose: {
    en: [
      "We often point at people and things. In English we use words like \"this\", \"that\", \"I\", and \"you\". We call them pointers (pronouns).",
      "<audio-example zh=\"这\">{{word:zhe4}}</audio-example> means \"this\" and <audio-example zh=\"那\">{{word:na4}}</audio-example> means \"that\".",
      "A pronoun works just like a noun. It can even be a whole sentence by itself.",
    ],
    ru: [
      "Мы часто указываем на людей и вещи. В русском для этого есть слова «этот», «тот», «я» и «ты». Мы называем их словами-указателями (местоимениями).",
      "<audio-example zh=\"这\">{{word:zhe4}}</audio-example> значит «это, этот», а <audio-example zh=\"那\">{{word:na4}}</audio-example> — «то, тот».",
      "Местоимение работает так же, как существительное. Оно даже может само быть целым предложением.",
    ],
    tldr: {
      en: "{{word:zhe4}} (this) and {{word:na4}} (that) work like nouns.",
      ru: "{{word:zhe4}} (этот) и {{word:na4}} (тот) работают как существительные.",
    },
    necessity: { en: "Now you can point at things.", ru: "Теперь вы можете указывать на вещи." },
  },
  info: {
    en: "{{word:zhe4}}, this; {{word:na4}}, that. They work like nouns: {{Word:zhe4}}. (This.)",
    ru: "{{word:zhe4}} — это, {{word:na4}} — то. Они работают как существительные: {{Word:zhe4}}. (Это.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}.",
      hanzi: "这",
      en: "This.",
      ru: "Это.",
    },
    {
      pinyin: "{{Word:na4}}.",
      hanzi: "那",
      en: "That.",
      ru: "То.",
    },
  ],
  exercises: [
    {
      en: "That is a fruit.",
      ru: "То — фрукт.",
      answer: "{{Word:na4}} {{word:shi4}} {{word:shui3guo3}}.",
      hanzi: "那是水果。",
    },
  ],
});
