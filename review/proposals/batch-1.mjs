// Claude's proposals for review batch 1 (composite ranks 1-100), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, why }. Entries not
// listed are proposed as they are. Shown at /__review/?batch=1 (vite-plugin-review.js).
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default {
  "事": {
    hsd: [`${W("fa1")}-${W("sheng1")}-${W("de")} ${W("dong1")}-${L("xi1")}`, `${W("dong1")}-${L("xi1")}`],
    tts: ["发生的东西", "东西"],
    literal: "a thing that happens / a thing",
    why: "A matter is something that happens. 事 alone can't be shì here: on its own shì is 是, to be (its 事 sense lives only in méi-shì).",
  },
  "更": {
    hsd: [W("hai2")],
    tts: ["还"],
    literal: "still, even",
    fit: "plain",
    why: "In a comparison Mandarin itself says 还 for even more: tā bǐ wǒ hái gāo, he is even taller than me.",
  },
  "喜欢": {
    hsd: [W("ai4"), `${W("jue2")}-${L("de2")} X ${W("hao3")}`],
    tts: ["爱", "觉得X好"],
    literal: "love / find X good",
    why: "ài is strong for everyday liking; jué-de X hǎo (find X good) is the softer, everyday like.",
  },
};
