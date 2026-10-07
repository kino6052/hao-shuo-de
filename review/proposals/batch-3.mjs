// Claude's proposals for review batch 3 (composite ranks 201-300), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=3.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default {
  "这么": {
    hsd: [`${W("zhe4")}-${W("yang4")}`, W("zhen1")],
    tts: ["这样", "真"],
    literal: "like this / really",
    fit: "natural",
    why: "这样 is Mandarin's own like this, and it often stands where 这么 does: zhè-yàng zuò, do it like this. zhēn stays for so big.",
  },
  "那么": {
    hsd: [W("na4"), `${W("na4")}-${W("yang4")}`],
    tts: ["那", "那样"],
    literal: "well then / like that",
    fit: "natural",
    why: "nà for well then, as now; 那样 (like that) for the other half of 那么: nà-yàng hǎo, that good.",
  },
  "里": {
    hsd: [W("li3")],
    tts: ["里"],
    fit: "word",
    why: "The form is lǐ alone, but its hanzi said 里面. 里 is the word itself.",
  },
  "门": {
    hsd: [W("men2")],
    tts: ["门"],
    fit: "word",
    why: "mén is a core word now; kǒu (an opening) was the stand-in.",
  },
  "桌子": {
    hsd: [`${W("fang4")}-${W("dong1")}-${L("xi1")}-${W("de")} ${W("mian4")}r`],
    tts: ["放东西的面儿"],
    literal: "the surface you put things on",
    why: "A table is a surface, now that miànr is in: the surface you put things on, instead of a place.",
  },
  "跑": {
    hsd: [`${W("kuai4")} ${W("zou3")}`],
    tts: ["快走"],
    literal: "go fast",
    why: "zǒu is a core word now (in old Chinese 走 itself meant run): kuài zǒu is shorter than going fast on your feet.",
  },
  "头发": {
    hsd: [`${W("tou2")}-${L("fa1")}`, `${W("tou2")}-${W("shang4")}-${W("de")} ${W("mao2")}`],
    tts: ["头发", "头上的毛"],
    literal: "the fur on the head",
    fit: "natural",
    why: "The second form had lost its words (it read 在头发); it is the fur on the head again. Mandarin says tóufa with a light fa.",
  },
  "饿": {
    hsd: [`${W("xiang3")} ${W("chi1")}-${W("fan4")}`],
    tts: ["想吃饭"],
    literal: "want to eat",
    why: "With fàn and xiǎng in the core, hungry is the everyday wǒ xiǎng chī-fàn.",
  },
  "再见": {
    hsd: [`${W("zai4")}-${W("jian4")}`],
    tts: ["再见"],
    transparent: true,
    why: "zài-jiàn (see again) says itself; wǒ huì kàn-dào nǐ isn't needed after it.",
  },
  "打电话": {
    hsd: [`${W("da3")} ${W("hua4")}-${W("ji1")}`],
    tts: ["打话机"],
    literal: "hit the talk machine",
    fit: "plain",
    why: "电话 is huà-jī now, so a phone call is dǎ huà-jī, as Mandarin's dǎ diànhuà.",
  },
  "爸爸": {
    hsd: [W("ba4ba")],
    tts: ["爸爸"],
    fit: "word",
    why: "bàba is a core word, so the description after it isn't needed.",
  },
  "中文": {
    hsd: [`"Zhōngguó" ${W("hua4")}`],
    tts: ["中国话"],
    literal: "China speech",
    fit: "natural",
    why: "中国话 is the everyday Mandarin for Chinese, and huà is a core word now.",
  },
  "汉语": {
    hsd: [`"Zhōngguó" ${W("hua4")}`],
    tts: ["中国话"],
    literal: "China speech",
    fit: "natural",
    why: "The same as 中文: 中国话.",
  },
  "为了": {
    hsd: [`${W("wei4")}-${W("le")}`],
    tts: ["为了"],
    fit: "natural",
    why: "wèi and le are both core words, so 为了 is just wèi-le (it was left out).",
  },
  "图书馆": {
    hsd: [`${W("fang4")}-${W("shu1")}-${W("de")} ${W("di4")}-${L("fang1")}`],
    tts: ["放书的地方"],
    literal: "the place that keeps books",
    why: "shū is a core word now: the place that keeps books, instead of written things.",
  },
  "新闻": {
    hsd: [`${W("xin1#new")}-${W("ting1")}-${W("dao4")}-${W("de")} ${W("dong1")}-${L("xi1")}`],
    tts: ["新听到的东西"],
    literal: "newly heard things",
    why: "新闻 is new + heard; with xīn (new) on its own, xīn-tīng-dào-de dōng-xi says the same.",
  },
  "计算机": {
    hsd: [`${W("suan4")}-${W("de")} ${W("ji1")}`],
    tts: ["算的机"],
    literal: "the calculating machine",
    fit: "plain",
    why: "The same as 电脑 (batch 2): the calculating machine.",
  },
  "语言": {
    hsd: [W("hua4")],
    tts: ["话"],
    literal: "speech",
    fit: "plain",
    why: "Mandarin names languages with 话 (中国话, 英国话), and huà is a core word now.",
  },
  "介绍": {
    hsd: [`${W("rang4")} X ${W("zhi1dao4")}`],
    tts: ["让X知道"],
    literal: "let X know",
    fit: "natural",
    why: "ràng is the core word for let: ràng nǐ zhīdào, as Mandarin says it.",
  },
};
