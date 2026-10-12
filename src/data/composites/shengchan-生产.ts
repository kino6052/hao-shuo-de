import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1147,
  phase: 3,
  zh: "生产",
  py: "shēngchǎn",
  en: "produce",
  ru: "производить",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:chu1}}", "{{word:sheng1}}"],
  tts: ["做出", "生"],
  literal: "make come out / bring forth",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:chu1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他做出很多。",
      en: "He produces a lot.",
      ru: "Он производит много.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zuo4}}-{{word:chu1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我们做出好的东西。",
      en: "We produce good things.",
      ru: "Мы производим хорошие вещи.",
    },
  ],
});
