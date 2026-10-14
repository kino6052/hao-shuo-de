// C1: the connections the author named in the word review (notes on the paraphrases), stored as
// connections (maps/connections.ts), plus the synonyms of tā that the author asked for.
// Run: npm run refactor -- refactors/C1.ts [--check] [--write]
//
// Where a note named a word the paraphrase already uses (nǚ's rén, shēngyīn's ěrduo and tīng), the
// "defined-by" relations already hold the link; it is stored here too, so it stays if the form changes.

export default [
  { op: "connect", words: ["ba4ba", "ren2"], why: "Bàba is said as a rén: the one who made me and is not a woman." },
  { op: "connect", words: ["ma1ma", "ba4ba"], why: "Parents: māma and bàba are said the same way, one a woman and one not." },
  { op: "connect", words: ["ma1ma", "ren2"], why: "Māma is said as a nǚ-rén: a woman who made me." },
  { op: "connect", words: ["nv3", "ren2"], why: "Nǚ is said as a rén who can have children." },
  { op: "connect", words: ["ren2", "dong4", "wu4"], why: "Rén is said as a dòng-wù (an animal) that can speak and write; the link is to the compound dòng-wù." },
  { op: "connect", words: ["ci2", "shuo1", "hua4"], why: "Cí is the smallest part of a huà (talk), and shuō is how you say it." },
  { op: "connect", words: ["guan1xi", "bi3"], why: "Guānxi is said as how X and Y compare (bǐ)." },
  { op: "connect", words: ["li4", "shen1ti3"], why: "Lì is said as something in the shēntǐ that can lift heavy things." },
  { op: "connect", words: ["sheng1yin1", "er3duo", "ting1"], why: "Shēngyīn is said as what the ěrduo hears (tīng)." },
  { op: "connect", words: ["you2", "shui3"], why: "Yóu is said as a shuǐ that is not like other shuǐ: you cook with it." },
  { op: "connect", words: ["xue2", "zhi1dao4"], why: "Xué is said with zhīdào and zhīdào with xué: each needs the other (circular)." },
  { op: "connect", words: ["yang4", "zhong3"], why: "Yàng and zhǒng would be said with each other (circular), so yàng is an atom." },
  { op: "connect", words: ["xiang3", "yao4", "jue2"], why: "Xiǎng leans on yào (wanting) and on jué-de (feeling); it might itself be an atom." },
  { op: "connect", words: ["yue4", "ri4"], why: "Yuè and rì are both used for the calendar, so they go together." },
  {
    op: "connect",
    words: ["qu4", "zou3", "fei1", "tong1", "dong4", "dao4"],
    why: "Words of going and moving: qù, zǒu, fēi, tōng, dòng, dào and others like them. The author is still thinking how to express this family; nothing is decided.",
    proposed: true,
  },
  { op: "relation", kind: "synonyms", add: ["ta1", "bie2"] },
  { op: "relation", kind: "synonyms", addPhrase: ["ta1", "{{word:bu4}}-{{word:tong2}}"] },
];
