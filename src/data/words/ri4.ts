import { word } from "../../lib/word.ts";

export default word("ri4", {
  term: "rì",
  hanzi: "日",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "sun, radiant light source, brightness, glow",
    rus: "солнце, источник яркого света, яркость, сияние",
    zh: "太阳，发光光源，明亮，光辉",
  },
  necessity: {
    index: 4,
    eng: "The sun, and with it the day. Day and night are said with the sun and the moon.",
    rus: "Солнце, а с ним и день. День и ночь говорят через солнце и луну.",
  },
  maps: "suno",
  paraphrase: {
    forms: [
      "{{word:tian1}}-{{word:shang4}} {{word:hen3}} {{word:ming2}}, {{word:hen3}} {{word:re4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    ],
    verdict: "clumsy",
    note: "It seems to simplify a lot: keep it for now, and see later whether we can do without it without losing expressiveness.",
  },
});
