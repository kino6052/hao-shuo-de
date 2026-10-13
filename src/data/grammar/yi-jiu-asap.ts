import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yi-jiu-asap", {
  meaning: {
    eng: "Yī, a verb, jiù and another verb says as soon as: yī kàn jiù zhīdào, you know as soon as you look.",
    rus: "Yī, глагол, jiù и ещё глагол значат «как только»: yī kàn jiù zhīdào — как только посмотришь, поймёшь.",
  },
  covers: [],
  template: { hsd: "{{word:yi1}} + verb + {{word:jiu4}} + verb", eng: "As soon as one, the other" },
  rules: [
    { lhs: "VP", hsd: "=yi1 VP =jiu4 VP", eng: "yī, a verb, jiù, and a verb" },
  ],
  examples: [
    ["Nà-gè yī kàn jiù zhīdào.", "That is obvious."],
  ],
});
