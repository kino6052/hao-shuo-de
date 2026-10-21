import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7128,
  phase: 4,
  zh: "零食",
  py: "língshí",
  en: "snacks",
  ru: "перекус, лакомства",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:xiao3}}-{{word:de}} {{word:chi1}}-{{word:de}}",
    "{{word:zai4}} {{word:liang3}}-{{word:ci4}} {{word:chi1}}-{{word:fan4}} {{word:zhong1}}-{{word:jian1}} {{word:chi1}}-{{word:de}} {{word:xiao3}} {{word:chi1}}-{{word:de}}",
  ],
  tts: ["小小的吃的", "在两次吃饭中间吃的小吃的"],
  literal: "little things to eat / the little food eaten between two meals",
  fit: "plain",
  topics: ["sweets-and-snacks"],
  isA: ["snack-or-sweet"],
  proposed: true,
});
