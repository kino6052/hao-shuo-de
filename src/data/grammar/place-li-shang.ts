import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("place-li-shang", {
  meaning: {
    eng: "Says in or on something: lǐ (in) or shàng (on) joins the place.",
    rus: "Говорит «внутри» или «на»: lǐ («в») или shàng («на») присоединяется к месту.",
  },
  covers: [],
  template: { hsd: "Thing + {{word:zai4}} + place-{{word:li3}} / place-{{word:shang4}}", eng: "The thing is in / on the place" },
  rules: [
    { lhs: "NP", hsd: "NP =li3", eng: "a place and lǐ: inside it" },
    { lhs: "NP", hsd: "NP =shang4", eng: "a place and shàng: on it" },
  ],
  taught: "where-it-is/in-on-under",
  examples: [
    ["Shuǐ zài bāo-lǐ.", "The water is in the bag."],
    ["Gōng-jù zài dì-shàng.", "The tool is on the floor."],
  ],
});
