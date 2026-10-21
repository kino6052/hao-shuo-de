import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7256,
  phase: 4,
  zh: "砍",
  py: "kǎn",
  en: "chop; cut down",
  ru: "рубить",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:cong2}} {{word:shang4}}-{{word:mian4}} {{word:yong4}}-{{word:li4}} {{word:da3}}-{{word:xia4}}-{{word:qu4}}",
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:yong4}}-{{word:li4}} {{word:da3}} X, {{word:rang4}} X {{word:bian4}} {{word:xiao3}}",
  ],
  tts: ["用工具从上面用力打下去", "用工具用力打X，让X变小"],
  literal: "use a tool to hit down hard from above / use a tool to hit X hard, make X become small",
  fit: "plain",
  topics: ["breaking-and-taking-apart"],
  isA: ["handling-action"],
  proposed: true,
});
