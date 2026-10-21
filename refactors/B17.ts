// B17: composite review, batch 17 (the 114 new composites of K8 and K9), as the author decided it
// at /__review/?batch=17 (review/decisions/batch-17.json): 108 approved as they were, 6 edited.
// Named B17, not R17, because it is not a rank window: check-book counts the R<n> lists to know
// which ranks need two examples, and these ranks (5440+, frequency ranks 3000-5600) are not 1-1700.
//   The author's own forms:
//   - 冠军 dì-yī-hào-de rén (the number-one person; hào is the ordinal marker, hao4).
//   - 在乎 and 在意 guān-xīn (the same form as 关心, so the three share one form).
//   - 事故 méi xiǎng dào, huài le; 应得 bù dé dào bù duì; 昨晚 qián-yī-tiān wǎn-shàng: the author
//     kept the proposed forms. Open: the author wants several paraphrases for 事故 (one per
//     situation) and for 应得 (not drafted yet).
// Run: npm run refactor -- refactors/B17.ts [--write]

const W = (id) => `{{word:${id}}}`;
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

export default [
  form("冠军", [`${W("di4")}-${W("yi1")}-${W("hao4")}-${W("de")} ${W("ren2")}`], ["第一号的人"], { literal: "the person who is number one" }),
  form("在乎", [`${W("guan1")}-${W("xin1")}`], ["关心"], { literal: "close-heart (as in 关心)" }),
  form("在意", [`${W("guan1")}-${W("xin1")}`], ["关心"], { literal: "close-heart (as in 关心)" }),

  {
    op: "reviewed",
    zh: [
      "流行", "穷", "温暖", "笨", "烟", "湿", "糟糕", "好笑", "医学", "采用",
      "参考", "财产", "传统", "非洲", "工业", "恢复", "申请", "收入", "扩大", "连接",
      "内部", "欧洲", "宣布", "延长", "医疗", "有限", "运输", "注册", "资金", "大量",
      "共同", "登记", "发言", "富", "竞争", "冠军", "律师", "居民", "巨大", "失去",
      "信号", "性别", "强大", "事故", "私人", "完美", "意外", "大小", "画家", "批评",
      "宽", "可惜", "了不起", "随意", "威胁", "单一", "疯狂", "骄傲", "少见", "投票",
      "战斗", "战争", "自杀", "罪", "堆", "怀孕", "隐藏", "棕色", "冲突", "攻击",
      "官员", "民主", "评论", "资产", "愤怒", "军人", "强迫", "上级", "惊讶", "话筒",
      "喜剧", "典型", "革命", "公民", "官方", "坚定", "坚决", "纯", "预期", "外来",
      "军事", "广大", "一流", "幻想", "杰出", "金融", "所", "马", "去世", "在乎",
      "喜爱", "在意", "服", "助手", "大衣", "么", "告发", "告", "喜", "妈",
      "应得", "昨晚", "书桌", "知",
    ],
  },
];
