// R12: composite review, batch 12 (ranks 1101-1200), as the author decided it at
// /__review/?batch=12 (review/decisions/batch-12.json): 88 approved, 11 edited.
//   Approved proposals (review/proposals/batch-12.mjs): 指出 ràng rén kàn-dào, 文章 xiě-de huà,
//   消费 yòng, 程度 duō dà, 职业 gōng-zuò.
//   The author's own forms:
//   - 报道 gěi xīn-"wén" (news is xīn-"wén"); 掌握 zhīdào hěn hǎo; 控制 bǎ X zuò Y.
//   - 智能 gāo-míng, and the same for 聪明 (smart / intelligent are one form).
//   - 正常 píng-cháng (and 平常 puts it first, so the two share it).
//   - 特点 zhēn hǎo-de dì-fang, or X bǐ Y hěn bù yī-yàng; 特色 is a synonym of 特点
//     (same first form), or yīnwèi X rén zhīdào zhè-ge.
//   - 疑问 bù zhīdào duì bù duì / kě-néng duì kě-néng bù duì; 确定 wǒ zhīdào shì duì-de.
//   - 自动 tā bù yào bié rén-de bāng jiù dòng; 行为 zuò-fǎ / shēng-huó fāng-fǎ / fāng-fǎ.
//   - 效果 jié-guǒ stays (it shares 结果's form).
// Run: npm run refactor -- refactors/R12.ts [--write]

import proposals from "../review/proposals/batch-12.mjs";

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const PING_CHANG = `${W("ping2")}-${W("chang2")}`;
const GAO_MING = `${W("gao1")}-${W("ming2")}`;
const NEWS = `${W("xin1#new")}-"wén"`;
const GOOD_PLACE = `${W("zhen1")} ${W("hao3")}-${W("de")} ${W("di4")}-${L("fang1")}`;

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
  ...["指出", "文章", "消费", "程度", "职业"].map((zh) => approved(zh)),

  // -- the author's own forms ----------------------------------------------------------
  form("报道", [`${W("gei3")} ${NEWS}`], ["给新闻"], { literal: "give the news" }),
  form("掌握", [`${W("zhi1dao4")} ${W("hen3")} ${W("hao3")}`], ["知道很好"], { literal: "know it well" }),
  form("控制", [`${W("ba3")} X ${W("zuo4")} Y`], ["把X做Y"], { literal: "make X do Y" }),
  form("智能", [GAO_MING], ["高明"], { literal: "high and bright", fit: "natural" }),
  // smart / intelligent: 聪明 shares gāo-míng (its old form stays as an alternate)
  form("聪明", [GAO_MING, `${W("tou2")} ${W("hen3")} ${W("hao3")}`], ["高明", "头很好"], { fit: "natural" }),
  form("正常", [PING_CHANG], ["平常"], { literal: "usual", fit: "natural" }),
  form("平常", [PING_CHANG, `${W("he2")} ${W("bie2")}-${W("de")} ${W("yi1")}-${W("yang4")}`], ["平常", "和别的一样"]),
  form("特点", [GOOD_PLACE, `X ${W("bi3")} Y ${W("hen3")} ${W("bu4")} ${W("yi1")}-${W("yang4")}`], ["真好的地方", "X比Y很不一样"], { literal: "a really good place / X is very different from Y" }),
  form("特色", [GOOD_PLACE, `${W("yin1wei4")} X ${W("ren2")} ${W("zhi1dao4")} ${W("zhe4")}-${L("ge4")}`], ["真好的地方", "因为X人知道这个"], { literal: "a really good place / people know this because of X" }),
  form("疑问", [`${W("bu4")} ${W("zhi1dao4")} ${W("dui4")} ${W("bu4")} ${W("dui4")}`, `${W("ke3")}-${W("neng2")} ${W("dui4")} ${W("ke3")}-${W("neng2")} ${W("bu4")} ${W("dui4")}`], ["不知道对不对", "可能对可能不对"], { literal: "don't know if it's right or not / may be right, may be wrong" }),
  form("确定", [`${W("wo3")} ${W("zhi1dao4")} ${W("shi4")} ${W("dui4")}-${W("de")}`], ["我知道是对的"], { literal: "I know it is right" }),
  form("自动", [`${W("ta1")} ${W("bu4")} ${W("yao4")} ${W("bie2")} ${W("ren2")}-${W("de")} ${W("bang1")} ${W("jiu4")} ${W("dong4")}`], ["他不要别人的帮就动"], { literal: "it moves without anyone's help" }),
  form("行为", [`${W("zuo4")}-${W("fa3")}`, `${W("sheng1")}-${W("huo2")} ${W("fang1")}-${W("fa3")}`, `${W("fang1")}-${W("fa3")}`], ["做法", "生活方法", "方法"], { literal: "the way of doing / the way of living / the way" }),

  { op: "reviewed", from: 1101, to: 1200 },
];
