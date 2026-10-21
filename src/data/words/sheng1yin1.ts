import { word } from "../../lib/word.ts";

export default word("sheng1yin1", {
  term: "shēngyīn",
  hanzi: "声音",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "sound, noise, voice", rus: "звук, шум, голос", zh: "声音，噪音，嗓音" },
  necessity: {
    index: 3,
    eng: "Sound, voice, noise. Music and speech are described from it.",
    rus: "Звук, голос, шум. Через него описывают музыку и речь.",
  },
  topics: ["senses"],
  isA: ["state-name"],
  maps: "kalama",
  paraphrase: {
    forms: ["{{word:er3duo}} {{word:ting1}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
    verdict: "clumsy",
  },
});
