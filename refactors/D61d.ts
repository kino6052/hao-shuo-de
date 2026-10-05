// D61d (with the author): clean. gānjìng 干净 joins, so washing is using
// water to make something clean (yòng shuǐ ràng X gānjìng), dirty is
// bù gānjìng, and alcohol is water that makes your head messy
// (ràng-tóu-biàn-luàn-de shuǐ).
// Run: npm run refactor -- refactors/D61d.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default [
  {
    op: "add", id: "gan1jing4", term: "gānjìng", hanzi: "干净", category: "physical-property",
    pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
    definition: {
      eng: `clean: ${W("hen3")} ${W("gan1jing4")}, very clean; ${W("bu4")} ${W("gan1jing4")}, dirty; washing is ${W("yong4")} ${W("shui3")} ${W("rang4")} X ${W("gan1jing4")}`,
      rus: `чистый: ${W("hen3")} ${W("gan1jing4")} — очень чистый; ${W("bu4")} ${W("gan1jing4")} — грязный; мыть — ${W("yong4")} ${W("shui3")} ${W("rang4")} X ${W("gan1jing4")}`,
      zh: "干净",
    },
    necessity: {
      index: 4,
      eng: `Clean and dirty, and with it washing: use water to make it clean.`,
      rus: `Чистый и грязный, а с ним и мытьё: водой сделать чистым.`,
    },
  },
  { op: "card", id: "gan1jing4", to: "how-much/hard-and-looks", en: "clean", ru: "чистый" },
  { op: "compounds" },
  { op: "composite", zh: "脏", set: { hsd: [`${W("bu4")} ${W("gan1jing4")}`], tts: ["不干净"], fit: "natural", literal: "not clean", proposed: true } },
  { op: "composite", zh: "洗", set: { hsd: [`${W("yong4")} ${W("shui3")} ${W("rang4")} X ${W("gan1jing4")}`], tts: ["用水让X干净"], fit: "plain", literal: "use water to make X clean", proposed: true } },
  { op: "composite", zh: "洗澡", set: { hsd: [`${W("yong4")} ${W("shui3")} ${W("rang4")} ${W("shen1ti3")} ${W("gan1jing4")}`], tts: ["用水让身体干净"], fit: "plain", literal: "use water to make the body clean", proposed: true } },
  {
    op: "composite", zh: "洗手间",
    set: {
      hsd: [`${W("wei4")}-${W("sheng1")}-${W("jian1")}`, `${W("yong4")}-${W("shui3")}-${W("rang4")}-${W("shou3")}-${W("gan1jing4")}-${W("de")} ${W("di4")}-${L("fang1")}`],
      tts: ["卫生间", "用水让手干净的地方"], fit: "plain", literal: "bathroom / the place where water makes your hands clean", proposed: true,
    },
  },
  { op: "composite", zh: "酒", set: { hsd: [`${W("rang4")}-${W("tou2")}-${W("bian4")}-${W("luan4")}-${W("de")} ${W("shui3")}`], tts: ["让头变乱的水"], fit: "plain", literal: "water that makes your head messy", proposed: true } },
  { op: "composite", zh: "啤酒", set: { hsd: [`${W("huang2")}-${W("se4")}-${W("de")} ${W("rang4")}-${W("tou2")}-${W("bian4")}-${W("luan4")}-${W("de")} ${W("shui3")}`], tts: ["黄色的让头变乱的水"], fit: "plain", literal: "the yellow water that makes your head messy", proposed: true } },
];
