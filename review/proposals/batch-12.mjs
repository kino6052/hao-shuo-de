// Claude's proposals for review batch 12 (composite ranks 1101-1200), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=12.
// `synonyms` marks the entries that mean the same as another composite (any rank), so
// they can share one form; the review page shows them as "Synonym of".
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default {
  "指出": {
    hsd: [`${W("rang4")} ${W("ren2")} ${W("kan4")}-${W("dao4")}`],
    tts: ["让人看到"],
    literal: "make people see it",
    why: "ràng is the word for making someone see or do something (as in 介绍, 保护, and the passive); jiào is 'tell someone to'.",
  },
  "智能": {
    hsd: [`${W("tou2")} ${W("hen3")} ${W("hao3")}`],
    tts: ["头很好"],
    literal: "the head is very good",
    why: "A synonym of 聪明 (tóu hěn hǎo); the old form 'néng jué-de-de' is hard to say. So 智能手机 is a 'tóu hěn hǎo' phone.",
  },
  "文章": {
    hsd: [`${W("xie3")}-${W("de")} ${W("hua4")}`],
    tts: ["写的话"],
    literal: "talk that is written",
    why: "Now 文章 has the same form as 文件 (xiě-de dōng-xi), but an article and a document are not the same. An article is written talk.",
  },
  "消费": {
    hsd: [`${W("yong4")}`],
    tts: ["用"],
    literal: "use (money)",
    why: "Synonym of 花 and 花费, which you made 'yòng' earlier; one form for 'spend'. (The old 'yòng jīn' says it more exactly; say if you would rather give all three that form.)",
  },
  "程度": {
    hsd: [`${W("duo1")} ${W("da4")}`],
    tts: ["多大"],
    literal: "how big (it is)",
    why: "Now 程度 has the same form as 数量 (duō-shǎo); how much there is and how far it goes are different. Degree is 'how big'.",
  },
  "职业": {
    hsd: [`${W("gong1")}-${W("zuo4")}`],
    tts: ["工作"],
    literal: "work",
    why: "Synonym of 事业, which you made 'gōng-zuò' in batch 11; the old form 'zuò-de' says nothing.",
  },
};

// zh -> the composites it means the same as (shown on the page)
export const synonyms = {
  "效果": ["结果"],
  "整个": ["全", "全部", "整"],
  "时": ["时间"],
  "时代": ["时期"],
  "时期": ["时代"],
  "显示": ["展示", "表现"],
  "表现": ["展示", "显示"],
  "智能": ["聪明"],
  "有效": ["有用"],
  "服装": ["衣服"],
  "正常": ["平常"],
  "消费": ["花", "花费"],
  "特殊": ["特别"],
  "特点": ["特色"],
  "特色": ["特点"],
  "状况": ["情况"],
  "状态": ["情况"],
  "现实": ["实际"],
  "理由": ["原因"],
  "生产": ["产", "产生"],
  "生命": ["命"],
  "由": ["从", "自"],
  "自": ["从", "由"],
  "的确": ["确实"],
  "确实": ["的确"],
  "目标": ["目的"],
  "真正": ["真实"],
  "知名": ["著名", "有名"],
  "著名": ["知名", "有名"],
  "种类": ["种", "类"],
  "类": ["种", "种类"],
  "移": ["动", "移动"],
  "管理": ["管"],
  "经验": ["经历"],
  "能力": ["才能"],
  "色彩": ["颜色"],
  "表达": ["表示"],
  "观点": ["想法", "主意"],
  "解释": ["说明"],
  "职业": ["事业"],
};
