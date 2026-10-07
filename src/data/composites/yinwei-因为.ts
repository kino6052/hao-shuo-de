import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 33,
  phase: 1,
  zh: "因为",
  py: "yīnwèi",
  en: "because",
  ru: "потому что",
  pos: "preposition",
  hsd: ["{{word:yin1wei4}}"],
  tts: ["因为"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he1}} {{word:shui3}}, {{word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "我喝水，因为我很热。",
      en: "I'm drinking water because I'm hot.",
      ru: "Я пью воду, потому что мне жарко.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mei2}} {{word:lai2}}, {{word:yin1wei4}} {{word:ta1}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "他没来，因为他身体不好。",
      en: "He didn't come because he isn't well.",
      ru: "Он не пришёл, потому что плохо себя чувствует.",
    },
  ],
});
