// Claude's proposals for review batch 2 (composite ranks 101-200), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, why }. Entries not
// listed are proposed as they are. Shown at /__review/?batch=2 (vite-plugin-review.js).
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default {
  "被": {
    hsd: [`X ${W("rang4")} Y + verb`],
    tts: ["X让Y…"],
    literal: "X lets Y do it",
    fit: "natural",
    why: "Spoken Mandarin already uses 让 for the passive: wǒ-de bāo ràng tā ná-zǒu le, my bag got taken by him. Now that ràng is a core word, 被 needn't be a skip.",
  },
  "所以": {
    hsd: [`X, ${W("jiu4")} Y`, `${W("yin1wei4")} ${W("zhe4")}-${L("ge4")}`],
    tts: ["X，就Y", "因为这个"],
    literal: "X, then Y / because of this",
    fit: "natural",
    why: "Mandarin often says so with 就 alone (tā lèi le, jiù shuì-jiào le) or with 因为这个, because of this. Both are better than leaving it out.",
  },
  "电脑": {
    hsd: [`${W("suan4")}-${W("de")} ${W("ji1")}`],
    tts: ["算的机"],
    literal: "the calculating machine",
    fit: "plain",
    why: "Mandarin's other word for a computer is 计算机, the calculating machine; jī says it more closely than gōng-jù, and matches kàn-de jī for the TV.",
  },
  "子": {
    hsd: [W("zi")],
    tts: ["子"],
    literal: "noun ending",
    fit: "word",
    why: "zi is a core word now (yàng-zi, hái-zi), so this is no longer a skip.",
  },
  "当然": {
    hsd: [`${W("bu4")} ${W("yong4")} ${W("shuo1")}`],
    tts: ["不用说"],
    literal: "no need to say",
    fit: "natural",
    why: "不用说 (it goes without saying) is the Mandarin set phrase; bù yòng wèn, no need to ask, is our own.",
  },
  "电": {
    hsd: [`${W("rang4")}-${W("ji1")}-${W("qi4")}-${W("dong4")}-${W("de")} ${W("li4")}`],
    tts: ["让机器动的力"],
    literal: "the force that makes machines move",
    why: "Shorter and clearer with ràng and jī-qì: the power that makes machines go, instead of the strength that helps us make tools.",
  },
  "电话": {
    hsd: [
      `${W("hua4")}-${W("ji1")}`,
      `${W("gei3")}-${W("yuan3")}-${W("de")}-${W("ren2")}-${W("shuo1")}-${W("de")} ${W("gong1")}-${W("ju4")}`,
    ],
    tts: ["话机", "给远的人说的工具"],
    literal: "talk machine / a tool for talking to people far away",
    fit: "natural",
    why: "话机 is Mandarin for a telephone set, and huà is a core word now. It pairs with shǒu-jī, the mobile.",
  },
  "简单": {
    hsd: [`${W("bu4")} ${W("nan2")}`, `${W("bu4")}-${L("fen1")}-${W("hen3")}-${W("shao3")}-${W("de")}`],
    tts: ["不难", "部分很少的"],
    literal: "not hard / with few parts",
    fit: "natural",
    why: "不难, not hard, is how Mandarin says easy every day. The parts description stays for simple as in not complicated.",
  },
  "纸": {
    hsd: [`${W("zai4")}-${W("shang4")}-${W("mian4")}-${W("xie3")}-${W("zi4")}-${W("de")} ${W("dong1")}-${L("xi1")}`],
    tts: ["在上面写字的东西"],
    literal: "the thing you write characters on",
    why: "zì is a core word now: the thing you write characters on is shorter and plainer than the thing that helps people write on it.",
  },
};
