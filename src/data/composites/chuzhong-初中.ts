import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6605,
  phase: 4,
  zh: "初中",
  py: "chūzhōng",
  en: "junior high school; lower middle school",
  ru: "неполная средняя школа",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:xue2}} {{word:yi3}}-{{word:hou4}}-{{word:de}} {{word:xue2}}-{{word:xiao4}}",
    "{{word:xiao3}}-{{word:xue2}} {{word:yi3}}-{{word:hou4}}, {{word:gao1}}-{{word:zhong1}} {{word:yi3}}-{{word:qian2}}-{{word:de}} {{word:xue2}}-{{word:xiao4}}",
  ],
  tts: ["小学以后的学校", "小学以后，高中以前的学校"],
  literal: "the school after primary school / the school after primary school and before high school",
  fit: "plain",
  topics: ["school-buildings-and-grounds"],
  isA: ["building"],
  proposed: true,
});
