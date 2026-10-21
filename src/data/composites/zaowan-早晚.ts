import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7031,
  phase: 4,
  zh: "早晚",
  py: "zǎowǎn",
  en: "morning and evening; sooner or later",
  ru: "утром и вечером; рано или поздно",
  pos: "adverb",
  hsd: [
    "{{word:zao3}}-{{word:wan3}}",
    "{{word:zao3}}-{{word:shang4}} {{word:he2}} {{word:wan3}}-{{word:shang4}}",
    "{{word:you3}} {{word:yi1}}-{{word:tian1}} {{word:yi1}}-{{word:ding4}}",
  ],
  tts: ["早晚", "早上和晚上", "有一天一定"],
  literal: "early-late / morning and evening / one day for sure",
  fit: "plain",
  topics: ["times-of-day"],
  isA: ["time-of-day-word"],
  proposed: true,
});
