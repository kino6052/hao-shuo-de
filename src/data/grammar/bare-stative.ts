import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bare-stative", {
  meaning: {
    eng: "A noun and a describing word, with no hěn, can describe a place or a thing before de: rén shǎo, zhíwù duō de dì-fāng, a place with few people and many plants; or follow an order: chī shuǐ-guǒ, shēntǐ hǎo.",
    rus: "Существительное и описание без hěn могут описывать место или вещь перед de: rén shǎo, zhíwù duō de dì-fāng — место, где мало людей и много растений; или идти после приказа: chī shuǐ-guǒ, shēntǐ hǎo.",
  },
  covers: ["grammar:describe"],
  tags: ["describe", "cat:quality"],
  template: { hsd: "noun + describing word ({{word:de}}) + noun", eng: "The noun that is so" },
  rules: [
    { lhs: "Stative", hsd: "@noun @adjective", eng: "a noun and a describing word: few people" },
    { lhs: "Mod", hsd: "Stative de", eng: "a state before de: hard on the outside" },
    { lhs: "Mod", hsd: "Stative @comma Stative de", eng: "two states before de: few people, many plants" },
    { lhs: "Utt", hsd: "VP @comma Stative", eng: "an order, then a state" },
  ],
  taught: "modifying-nouns/before",
  examples: [
    ["Wǒ ài rén shǎo, zhíwù duō de dì-fāng.", "I love the countryside."],
    ["Chī shuǐ-guǒ, shēntǐ hǎo.", "Eat fruit and stay healthy."],
  ],
});
