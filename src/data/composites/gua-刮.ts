import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8540,
  phase: 4,
  zh: "刮",
  py: "guā",
  en: "blow (of wind); scrape; shave off",
  ru: "дуть (о ветре); скрести; соскабливать",
  pos: "verb",
  hsd: [
    "{{word:kong1}}-{{word:qi4}} {{word:kuai4}} {{word:dong4}}",
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:ba3}} X {{word:shang4}}-{{word:mian4}} {{word:na2}}-{{word:zou3}}",
  ],
  tts: ["空气快动", "用工具把X上面拿走"],
  literal: "the air moves fast / use a tool to take away the top of X",
  fit: "plain",
  topics: ["weather"],
  isA: ["weather-happening"],
  proposed: true,
});
