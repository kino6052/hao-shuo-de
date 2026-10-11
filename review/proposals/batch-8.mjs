// Claude's proposals for review batch 8 (composite ranks 701-800), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=8.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const PLACE = `${W("di4")}-${L("fang1")}`;
const THING = `${W("dong1")}-${L("xi1")}`;
const parts = (...ids) => ids.map((id) => W(id)).join("-");

export default {
  "课本": {
    hsd: [`${W("xue2")}-${W("de")} ${W("shu1")}`],
    tts: ["学的书"],
    literal: "the book for studying",
    why: "shū is a core word, so a textbook is the book you study from; no xiě-de dōng-xi.",
  },
  "书店": {
    hsd: [`${parts("mai3", "shu1", "de")} ${PLACE}`],
    tts: ["买书的地方"],
    literal: "the place where one buys books",
    why: "Same reason: shū is core, so the shop is where you buy books.",
  },
  "读书": {
    hsd: [`${W("kan4")} ${W("shu1")}`],
    tts: ["看书"],
    literal: "look at books",
    fit: "natural",
    transparent: true,
    why: "kàn shū is how Mandarin says read, and it uses only core words.",
  },
  "表": {
    hsd: [`${parts("kan4", "dian3", "yong4", "de")} ${W("gong1")}-${L("ju4")}`],
    tts: ["看点用的工具"],
    literal: "a tool used for looking at the time",
    why: "A watch doesn't look; people look at it. The tool is described by what a person uses it for (as 杯子).",
  },
  "票": {
    hsd: [`${parts("rang4", "ren2", "jin4", "qu4", "de", "xie3", "de")} ${THING}`],
    tts: ["让人进去的写的东西"],
    literal: "a written thing that lets a person go in",
    why: "A ticket can't 'can'; it lets a person in (the chair rule).",
  },
  "身份证": {
    hsd: [`${parts("rang4", "ren2", "zhi1dao4", "ni3", "shi4", "shei2", "de", "xie3", "de")} ${THING}`],
    tts: ["让人知道你是谁的写的东西"],
    literal: "a written thing that lets people know who you are",
    why: "The card doesn't 'say'; it lets people know who you are.",
  },
  "药": {
    hsd: [`${parts("shen1ti3", "bu4", "hao3", "de", "ren2", "chi1", "de")} ${THING}`],
    tts: ["身体不好的人吃的东西"],
    literal: "what a person whose body isn't well eats",
    why: "Medicine doesn't make anyone well by itself in this language; it is what the unwell person eats.",
  },
  "心情": {
    hsd: [`${W("xin1")}-${W("li3")}-${W("de")} ${W("yang4")}-${L("zi")}`],
    tts: ["心里的样子"],
    literal: "the way things are in the heart",
    why: "xīn-lǐ alone is just 'in the heart'; mood is how it is there, as 情况 is how things are now.",
  },
  "季节": {
    hsd: [`${W("nian2")}-${W("de")} ${W("yi1")}-${W("bu4")}-${L("fen1")}`],
    tts: ["年的一部分"],
    literal: "a part of the year",
    why: "A season is a part of the year, like 春天 (nián-de dì-yī bù-fen); the twelve months were too long.",
  },
  "农民": {
    hsd: [`${parts("rang4", "zhi2wu4", "da4", "de")} ${W("ren2")}`],
    tts: ["让植物大的人"],
    literal: "a person who makes plants grow big",
    why: "zuò zhíwù is 'make plants'; a farmer makes them grow (ràng … dà).",
  },
  "美丽": {
    hsd: [`${W("hen3")}-${W("hao3")}-${W("kan4")}`],
    tts: ["很好看"],
    literal: "very good to look at",
    fit: "plain",
    why: "美 and 美丽 had the same form; 美丽 is the stronger one, hěn hǎo-kàn.",
  },
  "明星": {
    hsd: [`${parts("zai4", "kan4", "de", "ji1", "li3", "de")} ${W("ren2")}`],
    tts: ["在看的机里的人"],
    literal: "a person inside the watching machine",
    why: "明星 had the same form as 名人; a star is the person you see inside the watching machine (as 节目).",
  },
  "天空": {
    hsd: [`${W("tian1")}-${W("shang4")}`],
    tts: ["天上"],
    literal: "up in the sky",
    fit: "natural",
    transparent: true,
    why: "tiān-shàng is the plain word and uses two core words.",
  },
  "味道": {
    hsd: [`${W("kou3")}-${W("li3")}-${W("de")} ${W("yang4")}-${L("zi")}`],
    tts: ["口里的样子"],
    literal: "the way it is in the mouth",
    why: "wèi in 味道 isn't 为 (wèi); taste is how something is in the mouth.",
  },
};
