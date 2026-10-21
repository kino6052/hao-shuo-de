import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8001,
  phase: 4,
  zh: "晴朗",
  py: "qínglǎng",
  en: "clear and sunny (of the sky)",
  ru: "ясный, безоблачный",
  pos: "adjective",
  hsd: [
    "{{word:ri4}} {{word:zai4}} {{word:tian1}} {{word:shang4}}, {{word:hen3}} {{word:ming2}}",
    "{{word:tian1}}-{{word:shang4}} {{word:mei2}}-{{word:you3}} {{word:dong1}}-{{light:xi1}}, {{word:hen3}} {{word:ming2}}",
  ],
  tts: ["日在天上，很明", "天上没有东西，很明"],
  literal: "the sun is in the sky, very bright / nothing in the sky, very bright",
  fit: "plain",
  topics: ["weather"],
  isA: ["sound-or-light-quality"],
  proposed: true,
});
