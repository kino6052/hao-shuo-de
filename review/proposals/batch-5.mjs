// Claude's proposals for review batch 5 (composite ranks 401-500), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=5.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const PLACE = `${W("di4")}-${L("fang1")}`;

export default {
  "懂": {
    hsd: [`${W("ming2")}-${W("bai2")}`, W("zhi1dao4")],
    tts: ["明白", "知道"],
    literal: "understand / know",
    fit: "natural",
    why: "明白 is Mandarin's everyday understand: wǒ bù míng-bái, I don't understand.",
  },
  "房间": {
    hsd: [`${W("fang2")}-${W("jian1")}`],
    tts: ["房间"],
    transparent: true,
    why: "fáng-jiān (house space) says itself; the description after it isn't needed.",
  },
  "接": {
    hsd: [`${W("na2")}-${W("dao4")}`],
    tts: ["拿到"],
    literal: "take-reach",
    fit: "plain",
    why: "To receive or pick up is to take and get it: ná-dào is closer than dé (get).",
  },
  "收": {
    hsd: [`${W("de2")}-${W("dao4")}`],
    tts: ["得到"],
    literal: "get-reach",
    fit: "natural",
    why: "得到 (get, obtain) is Mandarin, as 收到 is: dé-dào says the arriving that dé alone doesn't.",
  },
  "新年": {
    hsd: [`${W("xin1")}-${W("nian2")}`],
    tts: ["新年"],
    transparent: true,
    why: "Now that xīn means new on its own, xīn-nián says itself.",
  },
  "方便": {
    hsd: [`${W("hao3")}-${W("yong4")}`],
    tts: ["好用"],
    literal: "good to use",
    why: "Only the joining: hǎo-yòng is one word, like hǎo-kàn.",
  },
  "有用": {
    hsd: [`${W("you3")}-${W("yong4")}`],
    tts: ["有用"],
    literal: "has use",
    why: "Only the joining: yǒu-yòng is one word in Mandarin.",
  },
  "楼": {
    hsd: [`${W("gao1")}-${W("de")} ${W("fang2")}-${W("zi")}`],
    tts: ["高的房子"],
    literal: "a tall house",
    why: "A 楼 is a building of floors: a tall house says it better than a big home.",
  },
  "离开": {
    hsd: [W("zou3")],
    tts: ["走"],
    literal: "leave",
    fit: "natural",
    why: "Mandarin says leave with 走 every day: wǒ yào zǒu le. qù (go) says where, not leaving.",
  },
  "窗户": {
    hsd: [`${W("kan4")}-${W("wai4")}-${W("mian4")}-${W("de")} ${W("kou3")}`],
    tts: ["看外面的口"],
    literal: "the opening you look outside through",
    why: "mén is the door now, so the window can have its own description instead of kǒu.",
  },
  "累": {
    hsd: [`${W("mei2")}-${W("you3")} ${W("li4")} ${W("le")}`, `${W("yao4")} ${W("shui4jiao4")}`],
    tts: ["没有力了", "要睡觉"],
    literal: "no strength left / want to sleep",
    why: "Tired is having no strength left; wanting to sleep stays as the second form.",
  },
  "经常": {
    hsd: [`${W("chang2")}-${W("chang2")}`],
    tts: ["常常"],
    literal: "often",
    fit: "natural",
    why: "经常 and 常常 both mean often, and cháng-cháng is in now (batch 4).",
  },
  "老人": {
    hsd: [`${W("lao3")}-${W("ren2")}`],
    tts: ["老人"],
    literal: "old person",
    transparent: true,
    why: "Only the joining: lǎo-rén is one word.",
  },
  "花2": {
    hsd: [`${W("hao3")}-${W("kan4")}-${W("de")} ${W("zhi2wu4")}`],
    tts: ["好看的植物"],
    literal: "a pretty plant",
    why: "Only the joining: hǎo-kàn is one word.",
  },
  "记": {
    hsd: [`${W("hai2")} ${W("zhi1dao4")}`],
    tts: ["还知道"],
    literal: "still know",
    fit: "plain",
    why: "To remember is to still know; it pairs with forget, xiàn-zài bù zhīdào le.",
  },
  "记得": {
    hsd: [`${W("hai2")} ${W("zhi1dao4")}`],
    tts: ["还知道"],
    literal: "still know",
    fit: "plain",
    why: "The same as 记: hái zhīdào.",
  },
  "走路": {
    hsd: [`${W("zou3")}-${W("lu4")}`],
    tts: ["走路"],
    transparent: true,
    why: "zǒu-lù (walk the road) says itself.",
  },
  "超市": {
    hsd: [`${W("da4")}-${W("de")} ${W("mai3")}-${W("dong1")}-${L("xi1")}-${W("de")} ${PLACE}`],
    tts: ["大的买东西的地方"],
    literal: "a big place to buy things",
    why: "Only the joining, as for 商店: mǎi-dōng-xi-de dì-fang.",
  },
  "里面": {
    hsd: [`${W("li3")}-${W("mian4")}`],
    tts: ["里面"],
    transparent: true,
    why: "The second form, lǐ, was written 里面 too, as with 上面 and 下面.",
  },
  "雨": {
    hsd: [`${W("tian1")}-${W("shang4")}-${W("xia4")}-${W("lai2")}-${W("de")} ${W("shui3")}`],
    tts: ["天上下来的水"],
    literal: "water that comes down from the sky",
    why: "From the sky says it more surely than from above, and the chain is joined up.",
  },
  "下雨": {
    hsd: [`${W("tian1")}-${W("shang4")} ${W("xia4")} ${W("shui3")}`],
    tts: ["天上下水"],
    literal: "the sky drops water",
    why: "Mandarin itself uses 下 for rain falling (下雨): tiān-shàng xià shuǐ le, it's raining.",
  },
  "飞机": {
    hsd: [`${W("fei1")}-${W("ji1")}`],
    tts: ["飞机"],
    transparent: true,
    why: "fēi-jī (flying machine) says itself; the long description isn't needed.",
  },
  "餐厅": {
    hsd: [`${W("chi1")}-${W("fan4")}-${W("de")} ${PLACE}`],
    tts: ["吃饭的地方"],
    literal: "the place to eat",
    why: "Restaurant is chī-fàn-de dì-fang, as decided with fàn (D61).",
  },
  "饭店": {
    hsd: [`${W("chi1")}-${W("fan4")}-${W("de")} ${PLACE}`],
    tts: ["吃饭的地方"],
    literal: "the place to eat",
    why: "The same as 餐厅.",
  },
  "书包": {
    hsd: [`${W("shu1")}-${W("bao1")}`],
    tts: ["书包"],
    transparent: true,
    why: "shū and bāo are both core words, so shū-bāo says itself.",
  },
};
