// D62 (with the author): bāo 包 (bag) is the container word instead of hézi
// 盒子 (box): a bag is the most useful container, and 包 builds Mandarin's
// own words: shū-bāo (schoolbag), miàn-bāo (bread), bāo-zi (bun), hóng-bāo.
// Composites that used hézi for things that aren't bags get new forms.
// Run: npm run refactor -- refactors/D62.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const thing = `${W("dong1")}-${L("xi1")}`;
const form = (zh, hsd, tts, literal) => ({ op: "composite", zh, set: { hsd: [hsd], tts: [tts], fit: "plain", literal, proposed: true } });

export default [
  {
    op: "add", id: "bao1", hanzi: "包", category: "containers-materials",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `bag; any container you carry things in: ${W("bao1")}-${W("li3")}, in the bag; ${W("shu1")}-${W("bao1")}, schoolbag; ${W("mian4")}-${W("bao1")}, bread`,
      rus: `сумка; любая ёмкость, в которой носят вещи: ${W("bao1")}-${W("li3")} — в сумке; ${W("shu1")}-${W("bao1")} — портфель; ${W("mian4")}-${W("bao1")} — хлеб`,
      zh: "包，袋子",
    },
    necessity: {
      index: 4,
      eng: `The container: what holds things (${W("bao1")}-${W("li3")} ${W("you3")} ${W("shen2me")}?), and Mandarin's schoolbag, bread and bun.`,
      rus: `Ёмкость: то, в чём лежат вещи (${W("bao1")}-${W("li3")} ${W("you3")} ${W("shen2me")}?), а ещё портфель, хлеб и булочка.`,
    },
  },
  { op: "replace", id: "he2zi", with: W("bao1"), hanzi: { "盒子": "包" } },
  { op: "card", id: "bao1", to: "questions/yes-no", en: "bag, container", ru: "сумка" },

  // things hézi stood for that aren't bags
  form("电视", `${W("kan4")}-${W("de")} ${W("ji1")}`, "看的机", "the watching machine"),
  form("节目", `${W("kan4")}-${W("de")}-${W("ji1")}-${W("li3")}-${W("de")} ${thing}`, "看的机里的东西", "what's in the watching machine"),
  form("冰箱", `${W("leng3")}-${W("de")} ${W("ji1")}`, "冷的机", "the cold machine"),
  form("电池", `${W("fang4")}-${W("li4")}-${W("de")} ${W("xiao3")}-${W("de")} ${thing}`, "放力的小的东西", "the small thing that keeps power"),
  form("杯子", `${W("he1")}-${W("shui3")}-${W("yong4")}-${W("de")} ${thing}`, "喝水用的东西", "what you drink water from"),
  form("碗", `${W("chi1")}-${W("fan4")}-${W("yong4")}-${W("de")} ${thing}`, "吃饭用的东西", "what you eat a meal from"),
  form("锅", `${W("zuo4")}-${W("fan4")}-${W("yong4")}-${W("de")} ${thing}`, "做饭用的东西", "what you cook in"),
  form("邮箱", `${W("fang4")}-${W("xie3")}-${W("de")}-${thing}-${W("de")} ${W("di4")}-${L("fang1")}`, "放写的东西的地方", "where written things are put"),
  form("背包", `${W("zai4")}-${W("shen1ti3")}-${W("hou4")}-${W("mian4")}-${W("de")} ${W("bao1")}`, "在身体后面的包", "the bag on your back"),

  { op: "composite", zh: "包", set: { fit: "word", proposed: true } },
  { op: "compounds" },
  { op: "refs", label: "bāo-zi light", pattern: "\\{\\{(w|W)ord:bao1\\}\\}-\\{\\{word:zi\\}\\}", to: "{{$1ord:bao1}}-{{light:zi}}" },
];
