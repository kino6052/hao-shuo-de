// R3: composite review, batch 3 (ranks 201-300), as the author decided it at
// /__review/?batch=3 (review/decisions/batch-3.json): 88 approved, 12 edited.
//   Approved proposals (from review/proposals/batch-3.mjs): 这么 zhè-yàng,
//   那么 nà / nà-yàng, 里, 门, 桌子 fàng-dōng-xi-de miànr, 跑 kuài zǒu,
//   头发, 饿 xiǎng chī-fàn, 再见, 打电话 dǎ huà-jī, 爸爸, 中文 and 汉语
//   "Zhōngguó" huà, 为了 wèi-le, 计算机 suàn-de jī, 语言 huà, 介绍 ràng X zhīdào.
//   The author's own forms:
//   - ěrduo 耳朵 (ear) joins as a word, with yǎnjing in direction-and-result.
//   - 啊 is the sound "a", in quotes like names and animal sounds (Lesson 1).
//   - 刚 xiàn-zài (jiù) … le; 主要 dà bù-fen / zuì zhòng-yào; 公司
//     gōng-zuò-de dì-fang; 图书馆 yǒu-hěn-duō-de-shū-de dì-fang; 城市
//     guó-jiā-lǐ-de dì-fang; 新闻 xīn-de zhīdào-de dōng-xi; 保护 bù ràng X
//     biàn huài; 准备 zuò hǎo / kě-yǐ kāishǐ le (ready); 努力 yòng hěn-duō lì-qi.
//   - 忘, 忘记 (forget, ranks 396-397): xiàn-zài jiù bù zhīdào le.
// Run: npm run refactor -- refactors/R3.ts [--write]

import proposals from "../review/proposals/batch-3.mjs";

const W = (id) => `{{word:${id}}}`;
const Wc = (id) => `{{Word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const LESSONS = "src/content/lessons/";

// an approved proposal as a composite op (its literal, fit and transparent too)
const approved = (zh, extra = {}) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}), ...extra },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  // -- approved proposals ------------------------------------------------------
  approved("这么", { note: "zhè-yàng zuò: do it like this. zhēn dà: so big." }),
  approved("那么"),
  approved("里"),
  approved("门"),
  approved("桌子"),
  approved("跑"),
  approved("头发"),
  approved("饿"),
  approved("再见"),
  approved("打电话"),
  approved("爸爸"),
  approved("中文"),
  approved("汉语"),
  approved("为了"),
  approved("计算机"),
  approved("语言"),
  approved("介绍"),

  // -- ěrduo 耳朵 joins ---------------------------------------------------------
  {
    op: "add", id: "er3duo", hanzi: "耳朵", category: "body",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `ear: ${W("er3duo")} ${W("bu4")} ${W("hao3")}, ${W("ting1")}-${W("bu4")}-${W("dao4")}, the ears are bad, (I) can't hear`,
      rus: `ухо: ${W("er3duo")} ${W("bu4")} ${W("hao3")}, ${W("ting1")}-${W("bu4")}-${W("dao4")} — уши плохие, не слышно`,
      zh: "耳朵",
    },
    necessity: {
      index: 3,
      eng: `The ear, as ${W("yan3jing")} is the eye: a part of the body is easier named than described.`,
      rus: `Ухо, как ${W("yan3jing")} — глаз: часть тела проще назвать, чем описать.`,
    },
  },
  { op: "card", id: "er3duo", to: "direction-and-result/can-cant", en: "ear", ru: "ухо" },
  {
    op: "text", file: `${LESSONS}direction-and-result/can-cant.ts`,
    from: `      ru: "У него хорошие глаза, ему видно.",
    },
  ],`,
    to: `      ru: "У него хорошие глаза, ему видно.",
    },
    {
      pinyin: "${Wc("wo3")}-${W("de")} ${W("er3duo")} ${W("bu4")} ${W("hao3")}, ${W("ting1")}-${W("bu4")}-${W("dao4")}.",
      hanzi: "我的耳朵不好，听不到。",
      en: "My ears are bad, I can't hear.",
      ru: "У меня плохие уши, мне не слышно.",
    },
  ],`,
  },
  {
    op: "text", file: `${LESSONS}direction-and-result/can-cant.ts`,
    from: `      hanzi: "她的眼睛很大。",
    },
  ],`,
    to: `      hanzi: "她的眼睛很大。",
    },
    {
      en: "Her ears are small.",
      ru: "У неё маленькие уши.",
      answer: "${Wc("ta1")}-${W("de")} ${W("er3duo")} ${W("hen3")} ${W("xiao3")}.",
      hanzi: "她的耳朵很小。",
    },
    {
      en: "His ears are good, he can hear it.",
      ru: "У него хорошие уши, ему слышно.",
      answer: "${Wc("ta1")}-${W("de")} ${W("er3duo")} ${W("hen3")} ${W("hao3")}, ${W("ting1")}-${W("de")}-${W("dao4")}.",
      hanzi: "他的耳朵很好，听得到。",
    },
  ],`,
  },
  // no more than 8 examples in a row: one eye sentence becomes an exercise
  {
    op: "text", file: `${LESSONS}direction-and-result/can-cant.ts`,
    from: `    {
      pinyin: "${Wc("ta1")}-${W("de")} ${W("yan3jing")} ${W("hen3")} ${W("hao3")}, ${W("kan4")}-${W("de")}-${W("dao4")}.",
      hanzi: "他的眼睛很好，看得到。",
      en: "His eyes are good, he can see it.",
      ru: "У него хорошие глаза, ему видно.",
    },
`,
    to: "",
  },
  {
    op: "text", file: `${LESSONS}direction-and-result/can-cant.ts`,
    from: `      hanzi: "她的眼睛很大。",
    },
`,
    to: `      hanzi: "她的眼睛很大。",
    },
    {
      en: "His eyes are good, he can see it.",
      ru: "У него хорошие глаза, ему видно.",
      answer: "${Wc("ta1")}-${W("de")} ${W("yan3jing")} ${W("hen3")} ${W("hao3")}, ${W("kan4")}-${W("de")}-${W("dao4")}.",
      hanzi: "他的眼睛很好，看得到。",
    },
`,
  },
  form("耳朵", [W("er3duo")], ["耳朵"], { literal: undefined, fit: "word" }),

  // -- 啊: a sound in quotes ----------------------------------------------------
  form("啊", ['"a"'], ["啊"], { fit: "natural", note: "A sound, written in quotes like names and animal sounds (Lesson 1)." }),

  // -- the author's other forms --------------------------------------------------
  form("刚",
    [`${W("xian4")}-${W("zai4")} … ${W("le")}`, `${W("xian4")}-${W("zai4")} ${W("jiu4")} … ${W("le")}`],
    ["现在…了", "现在就…了"], { literal: "now … has happened / right now … has happened" }),
  form("主要",
    [`${W("da4")} ${W("bu4")}-${L("fen1")}`, `${W("zui4")} ${W("zhong4")}-${W("yao4")}`],
    ["大部分", "最重要"], { literal: "most / most important" }),
  form("公司", [`${W("gong1")}-${W("zuo4")}-${W("de")} ${W("di4")}-${L("fang1")}`], ["工作的地方"], { literal: "the place where you work" }),
  form("图书馆", [`${W("you3")}-${W("hen3")}-${W("duo1")}-${W("de")}-${W("shu1")}-${W("de")} ${W("di4")}-${L("fang1")}`], ["有很多的书的地方"], { literal: "the place with many books" }),
  form("城市", [`${W("guo2")}-${W("jia1")}-${W("li3")}-${W("de")} ${W("di4")}-${L("fang1")}`], ["国家里的地方"], { literal: "a place in a country" }),
  form("新闻", [`${W("xin1#new")}-${W("de")} ${W("zhi1dao4")}-${W("de")} ${W("dong1")}-${L("xi1")}`], ["新的知道的东西"], { literal: "new things to know" }),
  form("保护", [`${W("bu4")} ${W("rang4")} X ${W("bian4")} ${W("huai4")}`], ["不让X变坏"], { literal: "not let X go bad" }),
  form("准备",
    [`${W("zuo4")} ${W("hao3")}`, `${W("ke3")}-${W("yi3")} ${W("kai1shi3")} ${W("le")}`],
    ["做好", "可以开始了"], { literal: "make it good / (ready:) can start now" }),
  form("努力", [`${W("yong4")} ${W("hen3")}-${W("duo1")} ${W("li4")}-${L("qi4")}`], ["用很多力气"], { literal: "use a lot of strength" }),
  form("忘", [`${W("xian4")}-${W("zai4")} ${W("jiu4")} ${W("bu4")} ${W("zhi1dao4")} ${W("le")}`], ["现在就不知道了"], { literal: "now just don't know anymore", proposed: undefined }),
  form("忘记", [`${W("xian4")}-${W("zai4")} ${W("jiu4")} ${W("bu4")} ${W("zhi1dao4")} ${W("le")}`], ["现在就不知道了"], { literal: "now just don't know anymore", proposed: undefined }),

  { op: "compounds" },
  { op: "reviewed", from: 201, to: 300 },
];
