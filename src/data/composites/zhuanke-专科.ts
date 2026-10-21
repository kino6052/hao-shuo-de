import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8889,
  phase: 4,
  zh: "专科",
  py: "zhuānkē",
  en: "specialized field; junior college; specialty",
  ru: "специальность; колледж",
  pos: "noun",
  hsd: [
    "{{word:zhi3}} {{word:xue2}} {{word:yi1}}-{{word:zhong3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:xue2}}-{{word:xiao4}}",
    "{{word:zhi3}} {{word:zuo4}} {{word:yi1}}-{{word:zhong3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["只学一种东西的学校", "只做一种东西的部分"],
  literal: "a school that studies only one kind of thing / the part that does only one kind of thing",
  fit: "plain",
  topics: ["studying"],
  isA: ["place"],
  proposed: true,
});
