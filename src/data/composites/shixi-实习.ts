import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6493,
  phase: 4,
  zh: "实习",
  py: "shíxí",
  en: "do an internship; train on the job",
  ru: "проходить практику; стажироваться",
  pos: "verb",
  hsd: [
    "{{word:xue2}}-{{word:sheng1}} {{word:zai4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:xue2}}",
    "{{word:yi1}}-{{word:bian1}} {{word:gong1}}-{{word:zuo4}}, {{word:yi1}}-{{word:bian1}} {{word:xue2}}",
  ],
  tts: ["学生在工作的地方学", "一边工作，一边学"],
  literal: "a student learns at the place of work",
  fit: "plain",
  topics: ["studying"],
  isA: ["learning-and-teaching"],
  proposed: true,
});
