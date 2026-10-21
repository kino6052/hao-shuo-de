import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7523,
  phase: 4,
  zh: "报社",
  py: "bàoshè",
  en: "newspaper office",
  ru: "редакция газеты",
  pos: "noun",
  hsd: [
    "{{word:xie3}} {{word:xin1#new}}-\"wén\"-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:xie3}} {{word:xin1#new}}-\"wén\"-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["写新\"闻\"的地方", "写新\"闻\"的工作的地方"],
  literal: "a place where the news is written / a place where the work of writing the news is done",
  fit: "plain",
  topics: ["news-and-events"],
  isA: ["place"],
  proposed: true,
});
