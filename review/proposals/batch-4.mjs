// Claude's proposals for review batch 4 (composite ranks 301-400), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=4.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default {
  "回答": {
    hsd: [`${W("hui2")}-${W("hua4")}`, `${W("dui4")} ${W("wen4")}-${W("de")} ${W("ren2")} ${W("shuo1")}`],
    tts: ["回话", "对问的人说"],
    literal: "talk back / say to the one who asked",
    fit: "natural",
    why: "回话 (reply) is Mandarin, and huí and huà are both core words.",
  },
  "希望": {
    hsd: [W("xiang3")],
    tts: ["想"],
    literal: "would like",
    fit: "plain",
    why: "xiǎng (would like) is softer than yào (want, need), so it is closer to hope.",
  },
  "星期": {
    hsd: [`${W("qi1")}-${W("tian1")}`],
    tts: ["七天"],
    literal: "seven days",
    why: "The book counts days as number + tiān, with no -ge (Lesson numbers): qī-tiān, not qī-ge rì.",
  },
  "普通话": {
    hsd: [`"Zhōngguó" ${W("hua4")}`],
    tts: ["中国话"],
    literal: "China speech",
    fit: "natural",
    why: "The same as 中文 and 汉语 (batch 3): 中国话.",
  },
  "清楚": {
    hsd: [`${W("ming2")}-${W("bai2")}`],
    tts: ["明白"],
    literal: "bright-white",
    fit: "natural",
    why: "明白 means clear in Mandarin too (shuō-de hěn míng-bái, said clearly); hěn-bù-nán zhīdào-de was a stretch.",
  },
  "考试": {
    hsd: [`${W("kan4")}-${W("ni3")}-${W("xue2")}-${W("le")}-${W("shen2me")}-${W("de")} ${W("wen4")}-${W("ti2")}`],
    tts: ["看你学了什么的问题"],
    literal: "questions that see what you learned",
    why: "An exam is questions, and wèn-tí is in now: more exact than dōng-xi.",
  },
  "音乐": {
    hsd: [`${W("hao3")}-${W("ting1")}-${W("de")} ${W("sheng1yin1")}`],
    tts: ["好听的声音"],
    literal: "nice sounds",
    why: "Only the joining: hǎo-tīng (nice to hear) is one word, like hǎo-kàn.",
  },
  "高中": {
    hsd: [`${W("gao1")}-${W("zhong1")}`, `${W("da4")}-${W("xue2")}-${W("qian2")}-${W("de")} ${W("xue2")}-${W("xiao4")}`],
    tts: ["高中", "大学前的学校"],
    literal: "high middle / the school before university",
    why: "xué-xiào (school) is in now, so the second form says school.",
  },
  "上学": {
    hsd: [`${W("shang4")}-${W("xue2")}`, `${W("qu4")} ${W("xue2")}-${W("xiao4")}`],
    tts: ["上学", "去学校"],
    literal: "go up to learn / go to school",
    why: "qù xué-xiào (go to school) is how Mandarin says it too.",
  },
  "上班": {
    hsd: [`${W("qu4")} ${W("gong1")}-${W("zuo4")}`],
    tts: ["去工作"],
    literal: "go to work",
    fit: "natural",
    why: "qù gōng-zuò is everyday Mandarin; shàng zuò-de isn't.",
  },
  "上面": {
    hsd: [`${W("shang4")}-${W("mian4")}`],
    tts: ["上面"],
    transparent: true,
    why: "The second form, shàng, was written 上面 too: one form is enough.",
  },
  "下面": {
    hsd: [`${W("xia4")}-${W("mian4")}`],
    tts: ["下面"],
    transparent: true,
    why: "The same as 上面.",
  },
  "商店": {
    hsd: [`${W("mai3")}-${W("dong1")}-${L("xi1")}-${W("de")} ${W("di4")}-${L("fang1")}`],
    tts: ["买东西的地方"],
    literal: "the place to buy things",
    why: "Only the joining: the description up to -de is one chain.",
  },
  "店": {
    hsd: [`${W("mai3")}-${W("dong1")}-${L("xi1")}-${W("de")} ${W("di4")}-${L("fang1")}`],
    tts: ["买东西的地方"],
    literal: "the place to buy things",
    why: "The same as 商店.",
  },
  "好像": {
    hsd: [`${W("kan4")}-${W("qi3")}-${W("lai2")}`, `${W("ke3")}-${W("neng2")}`],
    tts: ["看起来", "可能"],
    literal: "looks like / maybe",
    fit: "natural",
    why: "看起来 (looks like) is how Mandarin says seem, from three core words.",
  },
  "常": {
    hsd: [`${W("chang2")}-${W("chang2")}`],
    tts: ["常常"],
    literal: "often",
    fit: "natural",
    why: "cháng is a core word (长, long), and 常 has the same sound: give cháng a sense 常 used only in cháng-cháng (常常, often), as shí has 时. Then 常 and 常常 (rank 840) are Mandarin's own.",
  },
  "干净": {
    hsd: [W("gan1jing4")],
    tts: ["干净"],
    fit: "word",
    why: "gānjìng is a core word, so the description after it isn't needed.",
  },
  "快乐": {
    hsd: [`${W("kai1")}-${W("xin1")}`],
    tts: ["开心"],
    literal: "open heart",
    fit: "natural",
    why: "The same as 高兴: kāi-xīn is the everyday happy.",
  },
};
