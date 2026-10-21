import { word } from "../../lib/word.ts";

export default word("hua4", {
  term: "huà",
  hanzi: "话",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "words, speech, what is said: {{word:shuo1}} {{word:hua4}}, talk; {{word:dui4}}-{{word:hua4}}, a conversation",
    rus: "слова, речь, сказанное: {{word:shuo1}} {{word:hua4}} — разговаривать; {{word:dui4}}-{{word:hua4}} — разговор",
    zh: "话",
  },
  necessity: {
    index: 4,
    eng: "Talk ({{word:shuo1}} {{word:hua4}}): what is said, as a thing.",
    rus: "Разговор ({{word:shuo1}} {{word:hua4}}): сказанное как вещь.",
  },
  topics: ["languages"],
  isA: ["language-thing"],
  senses: {
    draw: {
      hanzi: "画",
      eng: "draw, picture",
      rus: "рисовать, картина",
      why: {
        eng: "Written 画, {{word:hua4}} means draw, picture in {{word:hua4}}-{{word:mian4}} (picture, scene); on its own it is words.",
        rus: "Записанное как 画, {{word:hua4}} значит «рисовать, картина» в {{word:hua4}}-{{word:mian4}} (картинка, кадр); само по себе — «слова».",
      },
      compounds: ["hua4 mian4"],
    },
  },
  paraphrase: { forms: ["{{word:shuo1}}-{{word:de}} {{word:ci2}}"], verdict: "fine" },
});
