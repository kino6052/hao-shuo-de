// Claude's proposals for review batch 10 (composite ranks 901-1000), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=10.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const THING = `${W("dong1")}-${L("xi1")}`;
const parts = (...ids) => ids.map((id) => W(id)).join("-");

export default {
  "钥匙": {
    hsd: [`${parts("rang4", "ren2", "kai1", "men2", "de")} ${W("xiao3")}-${W("de")} ${W("gong1")}-${W("ju4")}`],
    tts: ["让人开门的小的工具"],
    literal: "a small tool that lets a person open the door",
    why: "A key opens a door, not a 'mouth' (kǒu is any opening); and it is people who open (the chair rule).",
  },
  "麻烦": {
    hsd: [`${W("nan2")} ${W("zuo4")}`],
    tts: ["难做"],
    literal: "hard to do",
    why: "nán is core (hard to do), so trouble is a thing that is nán zuò; no 'thing' needed for an adjective.",
  },
  "抱": {
    hsd: [`${W("yong4")} ${W("liang3")}-ge ${W("shou3")} ${W("na2")}`],
    tts: ["用两个手拿"],
    literal: "hold with two hands",
    why: "Plain ná is already 'take' (and 拿); a hug is held with both hands, unlike 抓 (one hand).",
  },
  "牙刷": {
    hsd: [`${W("rang4")} ${W("ya2")} ${W("gan1jing4")}-${W("de")} ${W("gong1")}-${W("ju4")}`],
    tts: ["让牙干净的工具"],
    literal: "a tool that makes the teeth clean",
    why: "yá is core now, so no need for 'the hard things in the mouth'; a person uses it to make teeth clean.",
  },
  "篮球": {
    hsd: [`${parts("yong4", "shou3", "wan2r", "de")} ${W("qiu2")}`],
    tts: ["用手玩儿的球"],
    literal: "the ball you play with your hands",
    why: "qiú (ball) is core now, so no need for 'the round thing'; same as 足球 (with the feet).",
  },
  "戴": {
    hsd: [`${W("ba3")} X ${W("fang4")} ${W("zai4")} ${W("shen1ti3")}-${W("shang4")}`],
    tts: ["把X放在身体上"],
    literal: "put X on the body",
    why: "Same wording as 穿 (bǎ yīfu fàng zài shēntǐ-shàng), with X for the hat or glasses.",
  },
  "政治": {
    hsd: [`${W("guo2")}-${W("jia1")} ${W("zen3me")} ${W("zuo4")} ${W("jue2")}-${W("ding4")}`],
    tts: ["国家怎么做决定"],
    literal: "how a country makes decisions",
    why: "The old form ended in 'de' with nothing after it. Politics is how a country decides (as 领导 is a person who makes decisions).",
  },
  "建设": {
    hsd: [`${W("zuo4")} ${W("da4")}-${W("de")} ${THING}`],
    tts: ["做大的东西"],
    literal: "make a big thing",
    why: "A bare zuò is 制定's word too; building is making something big (a house, a road).",
  },
  "科学": {
    hsd: [`${W("ren2")} ${W("zen3me")} ${W("zhi1dao4")} ${THING}`],
    tts: ["人怎么知道东西"],
    literal: "how people know things",
    why: "Plain xué-de is just 'learned'; science is the way people find out how things are.",
  },
};
