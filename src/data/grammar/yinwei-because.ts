import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yinwei-because", {
  meaning: {
    eng: "Yīnwèi starts the reason: yīnwèi it is cold, I am not going out. The reason can also come second, after a comma.",
    rus: "Yīnwèi начинает причину: yīnwèi холодно, я не иду на улицу. Причина может стоять и второй, после запятой.",
  },
  covers: ["grammar:because"],
  template: { hsd: "{{word:yin1wei4}} + reason, result", eng: "Because of the reason, the result" },
  rules: [
    { lhs: "Clause", hsd: "S", eng: "a sentence as one part of a longer one" },
    { lhs: "Clause", hsd: "VP", eng: "what is said, with no one named, as one part of a longer sentence" },
    { lhs: "Reason", hsd: "=yin1wei4 Clause", eng: "yīnwèi and the reason" },
    { lhs: "S", hsd: "Reason @comma S", eng: "the reason first, then the result" },
    { lhs: "S", hsd: "S @comma Reason", eng: "the result first, then the reason" },
  ],
  taught: "linking-sentences/because",
  examples: [
    ["Yīnwèi wǒ hěn lěng, wǒ bù qù wài-miàn.", "Because I'm cold, I'm not going outside."],
    ["Yīnwèi hěn rè, wǒ guān le huǒ.", "Because it was hot, I turned off the fire."],
    ["Wǒ bù chī, yīnwèi wǒ chī-wán le.", "I'm not eating, because I've finished."],
  ],
});
