import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7811,
  phase: 4,
  zh: "换乘",
  py: "huànchéng",
  en: "transfer; change (vehicles)",
  ru: "делать пересадку",
  pos: "verb",
  hsd: [
    "{{word:huan4}} {{word:che1}}",
    "{{word:xia4}} {{word:che1}}, {{word:shang4}} {{word:bie2}}-{{word:de}} {{word:che1}}",
  ],
  tts: ["换车", "下车，上别的车"],
  literal: "change vehicles / get off the vehicle, ride another vehicle",
  fit: "natural",
  topics: ["trains-and-stations"],
  isA: ["moving-action"],
  proposed: true,
});
