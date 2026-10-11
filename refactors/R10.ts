// R10: composite review, batch 10 (ranks 901-1000), as the author decided it at
// /__review/?batch=10 (review/decisions/batch-10.json): 67 approved, 33 edited.
//   Approved proposals (review/proposals/batch-10.mjs): 钥匙, 牙刷, 篮球, 戴, 抱, 科学.
//   The author's own forms:
//   - 邻居 zài-jiā-fùjìn-de rén; 醒 bù shuìjiào le / qǐ-lái / qǐ-lái-le.
//   - 阳光 rì fā-chū-de dēng ("or something like that"); 饭馆 chī-de dì-fang.
//   - 麻烦 nán zuò, also yǒu wèn-tí; 吹 fā-chū kōng-qì; 大米 fàn.
//   - 碗 ràng fàn fàng zài lǐ-miàn-de dōng-xi (passives use ràng: see check-passive).
//   - 筷子 "Zhōngguó"-de chī-de gōng-jù; 糖 tián-de dōng-xi; 随便 jiù kě-yǐ.
//   - 面条儿 "miàn"; 香 hǎo wèi-dào; 香蕉 jīn-de yánsè-de shuǐ-guǒ.
//   - 主席 jué-dìng-zhě; 产品 dōng-xi; 建设 bǎ X zuò qǐ-lái.
//   - 思想 xiǎng-de; 政治 guó-jiā lǐ-miàn-de guānxi; 数据 shù-"jù"; 文学 "wén"-xué.
//   - 权利 stays néng zuò-de dōng-xi; 标准 duì-de fāng-fǎ; 法 fǎ.
//   - 系统 yǒu duō bù-fen-de dōng-xi; 经济 jīn-de guānxi; 资源 yǒu-yòng-de dōng-xi;
//     项目 yào zuò-de.
// Run: npm run refactor -- refactors/R10.ts [--write]

import proposals from "../review/proposals/batch-10.mjs";

const W = (id) => `{{word:${id}}}`;
const THING = `${W("dong1")}-{{light:xi1}}`;
const PLACE = `${W("di4")}-{{light:fang1}}`;

const approved = (zh) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}) },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  // -- the approved proposals --------------------------------------------------------
  ...["钥匙", "牙刷", "篮球", "戴", "抱", "科学"].map((zh) => approved(zh)),

  // -- the author's own forms ----------------------------------------------------------
  form("邻居", [`${W("zai4")}-${W("jia1")}-${W("fu4jin4")}-${W("de")} ${W("ren2")}`], ["在家附近的人"], { literal: "a person who is near home" }),
  form("醒", [`${W("bu4")} ${W("shui4jiao4")} ${W("le")}`, `${W("qi3")}-${W("lai2")}`, `${W("qi3")}-${W("lai2")}-${W("le")}`], ["不睡觉了", "起来", "起来了"], { literal: "no longer asleep / get up" }),
  form("阳光", [`${W("ri4")} ${W("fa1")}-${W("chu1")}-${W("de")} ${W("deng1")}`], ["日发出的灯"], { literal: "the light the sun gives off" }),
  form("饭馆", [`${W("chi1")}-${W("de")} ${PLACE}`], ["吃的地方"], { literal: "a place to eat" }),
  form("麻烦", [`${W("nan2")} ${W("zuo4")}`, `${W("you3")} ${W("wen4")}-${W("ti2")}`], ["难做", "有问题"], { literal: "hard to do / has a problem", fit: "plain" }),
  form("吹", [`${W("fa1")}-${W("chu1")} ${W("kong1")}-${W("qi4")}`], ["发出空气"], { literal: "send out air" }),
  form("大米", [W("fan4")], ["饭"], { literal: "rice (a meal)", fit: "word" }),
  form("碗", [`${W("rang4")} ${W("fan4")} ${W("fang4")} ${W("zai4")} ${W("li3")}-${W("mian4")}-${W("de")} ${THING}`], ["让饭放在里面的东西"], { literal: "a thing that lets food be put inside" }),
  form("筷子", [`"Zhōngguó"-${W("de")} ${W("chi1")}-${W("de")} ${W("gong1")}-${W("ju4")}`], ["中国的吃的工具"], { literal: "China's tool for eating" }),
  form("糖", [`${W("tian2")}-${W("de")} ${THING}`], ["甜的东西"], { literal: "a sweet thing" }),
  form("随便", [`${W("jiu4")} ${W("ke3")}-${W("yi3")}`], ["就可以"], { literal: "then it's fine" }),
  form("面条儿", [`"miàn"`], ["面"], { literal: "noodles", fit: "name" }),
  form("香", [`${W("hao3")} ${W("wei4")}-${W("dao4")}`], ["好味道"], { literal: "a good taste/smell" }),
  form("香蕉", [`${W("jin1")}-${W("de")} ${W("yan2se4")}-${W("de")} ${W("shui3")}-${W("guo3")}`], ["金的颜色的水果"], { literal: "the fruit of the golden colour" }),
  form("主席", [`${W("jue2")}-${W("ding4")}-${W("zhe3")}`], ["决定者"], { literal: "one who decides" }),
  form("产品", [THING], ["东西"], { literal: "a thing", fit: "word" }),
  form("建设", [`${W("ba3")} X ${W("zuo4")} ${W("qi3")}-${W("lai2")}`], ["把X做起来"], { literal: "make X come up" }),
  form("思想", [`${W("xiang3")}-${W("de")}`], ["想的"], { literal: "what you think" }),
  form("政治", [`${W("guo2")}-${W("jia1")} ${W("li3")}-${W("mian4")}-${W("de")} ${W("guan1xi")}`], ["国家里面的关系"], { literal: "the relations inside a country" }),
  form("数据", [`${W("shu4")}-"jù"`], ["数据"], { literal: "numbers", fit: "name" }),
  form("文学", [`"wén"-${W("xue2")}`], ["文学"], { literal: "literature", fit: "name" }),
  form("标准", [`${W("dui4")}-${W("de")} ${W("fang1")}-${W("fa3")}`], ["对的方法"], { literal: "the right way" }),
  form("法", [W("fa3")], ["法"], { literal: "law", fit: "word" }),
  form("系统", [`${W("you3")}-${W("duo1")}-${W("bu4")}-{{light:fen1}}-${W("de")} ${THING}`], ["有多部分的东西"], { literal: "a thing with many parts" }),
  form("经济", [`${W("jin1")}-${W("de")} ${W("guan1xi")}`], ["金的关系"], { literal: "the relations of money" }),
  form("资源", [`${W("you3")}-${W("yong4")}-${W("de")} ${THING}`], ["有用的东西"], { literal: "useful things" }),
  form("项目", [`${W("yao4")} ${W("zuo4")}-${W("de")}`], ["要做的"], { literal: "what is to be done" }),

  { op: "reviewed", from: 901, to: 1000 },
];
