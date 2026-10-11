// Claude's proposals for review batch 7 (composite ranks 601-700), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=7.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const PLACE = `${W("di4")}-${L("fang1")}`;
const THING = `${W("dong1")}-${L("xi1")}`;

export default {
  "光": {
    hsd: [`${W("rang4")}-${W("ren2")}-${W("kan4")}-${W("dao4")}-${W("de")} ${THING}`, `${W("wan2")} ${W("le")}`],
    tts: ["让人看到的东西", "完了"],
    literal: "a thing that lets people see / used up",
    fit: "plain",
    why: "The sun doesn't give anything; light is what lets a person see (the chair rule). The second form is the used-up sense.",
  },
  "单位": {
    hsd: [`${W("zuo4")}-${W("gong1")}-${W("de")} ${PLACE}`],
    tts: ["做工的地方"],
    literal: "the place where one does work",
    why: "gōng is work, so the workplace is the place where people zuò-gōng.",
  },
  "周": {
    hsd: [`${W("qi1")}-${W("tian1")}`],
    tts: ["七天"],
    literal: "seven days",
    fit: "natural",
    transparent: true,
    why: "Days are tiān (as in 周末 in batch 6); rì is the sun.",
  },
  "城": {
    hsd: [`${W("you3")}-${W("hen3")}-${W("duo1")}-${W("jia1")}-${W("de")} ${PLACE}`],
    tts: ["有很多家的地方"],
    literal: "the place with very many homes",
    why: "Only the joining: the part before -de is one chain, which the Word Builder can read.",
  },
  "市": {
    hsd: [`${W("you3")}-${W("hen3")}-${W("duo1")}-${W("jia1")}-${W("de")} ${PLACE}`],
    tts: ["有很多家的地方"],
    literal: "the place with very many homes",
    why: "As for 城: only the joining.",
  },
  "字典": {
    hsd: [`${W("you3")}-${W("hen3")}-${W("duo1")}-${W("ci2")}-${W("de")} ${W("shu1")}`],
    tts: ["有很多词的书"],
    literal: "a book with very many words",
    why: "shū is a core word, so a dictionary is a book with many words; no need for xiě-de dōng-xi.",
  },
  "极": {
    hsd: [`${W("hen3")}-${W("hen3")}`],
    tts: ["很很"],
    literal: "very very",
    fit: "plain",
    why: "极 is stronger than 真; saying hěn twice is the way to turn it up, as in the doubling lesson.",
  },
  "母亲": {
    hsd: [W("ma1ma")],
    tts: ["妈妈"],
    literal: "mom",
    fit: "plain",
    why: "母亲 is the formal word for mother; māma is the same person, and the long description added nothing.",
  },
  "考虑": {
    hsd: [`${W("xiang3")}-${W("xiang3")}`],
    tts: ["想想"],
    literal: "think a little",
    fit: "plain",
    why: "Considering is thinking, so xiǎng (not kàn), like 思考 in batch 6.",
  },
  "肯定": {
    hsd: [`${W("yi1")}-${W("ding4")}`],
    tts: ["一定"],
    literal: "one-fixed",
    fit: "natural",
    transparent: true,
    why: "yī-dìng is Mandarin's own word for definitely and uses only core words (dìng is core).",
  },
};
