import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8100,
  phase: 4,
  zh: "晕车",
  py: "yùnchē",
  en: "get carsick; motion sickness (in a vehicle)",
  ru: "укачивает в транспорте",
  pos: "verb",
  hsd: [
    "{{word:zuo4}}-{{word:che1}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:tou2}} {{word:hen3}} {{word:luan4}}",
    "{{word:zai4}} {{word:che1}}-{{word:shang4}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["坐车的时候头很乱", "在车上的时候身体不好"],
  literal: "when sitting in a car the head is very messy / when sitting in a car the body is not well",
  fit: "plain",
  topics: ["pain-and-feeling-unwell"],
  isA: ["being-affected"],
  proposed: true,
});
