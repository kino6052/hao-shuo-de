import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8746,
  phase: 4,
  zh: "科目",
  py: "kēmù",
  en: "subject; school subject; item",
  ru: "предмет; дисциплина",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}",
    "{{word:yi1}}-{{word:zhong3}} {{word:zai4}} {{word:xue2}}-{{word:xiao4}} {{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["学的一部分", "一种在学校学的东西"],
  literal: "one part of what is studied / one kind of thing studied at school",
  fit: "plain",
  topics: ["school-subjects-and-courses"],
  isA: ["idea"],
  proposed: true,
});
