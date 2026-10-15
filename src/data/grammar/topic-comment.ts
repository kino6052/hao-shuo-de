import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("topic-comment", {
  meaning: {
    eng: "A thing can come first as the topic, then a whole sentence about it: wǒ bàba shēntǐ hěn hǎo, as for my dad, his body is fine; shénme wǒ dōu yào, whatever it is, I want it.",
    rus: "Вещь может стоять первой как тема, а затем целое предложение о ней: wǒ bàba shēntǐ hěn hǎo — что до моего папы, у него здоровье хорошее; shénme wǒ dōu yào — что бы это ни было, я хочу.",
  },
  covers: [],
  template: { hsd: "Topic + sentence", eng: "As for the topic: the sentence" },
  rules: [
    { lhs: "S", hsd: "NP S", eng: "a topic, then a sentence about it" },
  ],
  taught: "questions/thing-first",
  examples: [
    ["Wǒ bàba shēntǐ hěn hǎo.", "My dad is healthy."],
    ["Shénme wǒ dōu yào.", "No matter what, I want it."],
  ],
});
