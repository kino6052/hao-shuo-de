import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("perceive-doing", {
  meaning: {
    eng: "Says you hear or see someone do something: tīng or kàn, then who, then what they do.",
    rus: "Говорит, что вы слышите или видите, как кто-то что-то делает: tīng или kàn, потом кто, потом что он делает.",
  },
  covers: [],
  template: { hsd: "Who + {{word:ting1}} / {{word:kan4}} + who + verb", eng: "Who hears / sees someone do the verb" },
  rules: [
    { lhs: "Sense", hsd: "=ting1", eng: "tīng, hear" },
    { lhs: "Sense", hsd: "=kan4", eng: "kàn, see" },
    { lhs: "VerbP", hsd: "Sense NP VP", eng: "hear or see someone, and what they do" },
  ],
  examples: [
    ["Wǒ tīng nǐ shuō.", "I hear you speak."],
    ["Wǒ ài tīng nǐ shuō.", "I love listening to you talk."],
  ],
});
