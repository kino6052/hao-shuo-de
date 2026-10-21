import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("rang-make", {
  meaning: {
    eng: "Ràng and someone says make or let them: ràng shǒu gānjìng, make the hands clean; ràng tā lái, let him come.",
    rus: "Ràng и кто-то значат «сделать так, чтобы» или «позволить»: ràng shǒu gānjìng — сделать руки чистыми; ràng tā lái — пусть он придёт.",
  },
  covers: ["grammar:make"],
  tags: ["make", "cat:action", "cat:affection"],
  template: { hsd: "{{word:rang4}} + who + describing word / verb", eng: "Make or let them be so / do it" },
  rules: [
    { lhs: "VP", hsd: "=rang4 NP @adjective", eng: "ràng, someone, and a describing word: make them so" },
    { lhs: "VP", hsd: "=rang4 NP VP", eng: "ràng, someone, and a verb: let them do it" },
  ],
  taught: "becoming-and-making/make",
  examples: [
    ["Yòng shuǐ ràng shǒu gānjìng.", "Wash your hands."],
    ["Zhè-ge zhēn ràng rén kāi-xīn.", "This really makes people happy."],
  ],
});
