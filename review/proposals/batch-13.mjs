// Claude's proposals for review batch 13 (composite ranks 1201-1300, plus five entries carried
// over from earlier batches), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=13.
// `synonyms` marks the entries that mean the same as another composite (any rank), so they can
// share one form; `antonyms` marks the opposites; the review page shows them as
// "Synonym of" and "Opposite of". `extras` are entries of earlier batches that were never
// decided or reviewed: rank -> why they are here.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

// A form in short notation: words separated by spaces, parts of a word by hyphens,
// "~id" for a light sound, a single capital letter (X, Y, A, B) as it is, a trailing comma kept.
const f = (s) =>
  s
    .split(" ")
    .map((tok) => {
      const comma = tok.endsWith(",") ? "," : "";
      const t = comma ? tok.slice(0, -1) : tok;
      return t.split("-").map((p) => (/^[A-Z]$/.test(p) ? p : p.startsWith("~") ? L(p.slice(1)) : W(p))).join("-") + comma;
    })
    .join(" ");
const P = (forms, tts, literal, why, extra = {}) => ({ hsd: forms.map(f), tts, literal, ...extra, why });

export const extras = {
  324: "Never shown to you: in batch 6 it changed from jué-de to xiǎng (xiǎng is 'think'). It shares its form with 信.",
  512: "In batch 6 you were unsure ('probably just bian, or mianr').",
  585: "No decision in batch 6.",
  639: "No decision in batch 7.",
  666: "No decision in batch 7.",
};

export default {
  // -- carried over ------------------------------------------------------------------
  "墙": P(
    ["fang2-jian1-de ying4-de mian4", "ying4-de bian1"],
    ["房间的硬的面", "硬的边"],
    "the hard face of a room / a hard edge",
    "You were unsure between bian and mian. A wall is the hard side of a room (miàn is a face or side, as in 上面); the second form is the hard edge.",
  ),
  "发展": P(
    ["yi1-dian3 yi1-dian3 bian4 hao3", "bian4 da4, bian4 hao3"],
    ["一点一点变好", "变大，变好"],
    "get better little by little / get bigger, get better",
    "To develop is to grow better step by step, so 'yī-diǎn yī-diǎn biàn hǎo'; the old form stays as the second.",
  ),
  "家庭": P(
    ["jia1-li3-de ren2"],
    ["家里的人"],
    "the people at home",
    "Was 'jiā', the same as 家, 房子 and 住房. A family is the people at home; it is the second form of 家人, so the two are linked.",
  ),
  "服务": P(
    ["bang1-ren2-de2-jin1", "bang1"],
    ["帮人得金", "帮"],
    "help people, get money",
    "Was 'bāng', the same as 帮. A service is helping people for money, as 卖 is giving things for money (gěi-dōng-xi-dé-jīn).",
  ),

  // -- batch 13 ----------------------------------------------------------------------
  "证明": P(
    ["rang4 ren2 zhi1dao4 shi4 zhen1-de"],
    ["让人知道是真的"],
    "make people know it is true",
    "ràng is the word for making someone see or know (as in 指出); jiào is only 'tell someone to'.",
  ),
  "调查": P(
    ["hao3-hao3 kan4, zhao3 zhen1-de"],
    ["好好看，找真的"],
    "look carefully, find what is true",
    "Now it has no form of its own. To investigate is to look carefully and find what is true (检查 and 查看 only look carefully).",
  ),
  "责任": P(
    ["ba3 X zuo4 hao3-de dong1-~xi1"],
    ["把X做好的东西"],
    "the thing of making X well done",
    "Now close to 任务 and 项目 (yào zuò-de). Like 负责 (bǎ X zuò-hǎo), responsibility is making X come out well.",
  ),
  "足够": P(
    ["hao3 le", "you3 le, bu4 yao4 duo1-de le"],
    ["好了", "有了，不要多的了"],
    "it is fine / I have it, I don't need more",
    "A synonym of 够 (hǎo le), so it takes the same form first. The old form stays as the second.",
  ),
  "重点": P(
    ["zui4 you3 zhong4-yao4-de bu4-~fen1", "zhong4-dian3"],
    ["最有重要的部分", "重点"],
    "the most important part",
    "A synonym of 关键, so it takes the same form first. The old 'zhòng-diǎn' stays as the second.",
  ),
  "重量": P(
    ["duo1 zhong4"],
    ["多重"],
    "how heavy",
    "The old form was about lifting. Weight is how heavy it is, in the pattern of 数量 (duō-shǎo) and 程度 (duō dà).",
  ),
  "交流": P(
    ["yi1-qi3 shuo1, yi1-qi3 ting1"],
    ["一起说，一起听"],
    "talk together, listen together",
    "An exchange goes both ways: speaking and listening together. The old 'hé rén shuō' only speaks.",
  ),
  "信任": P(
    ["xiang3 shi4 zhen1-de", "xiang3 X shuo1-de shi4 zhen1-de"],
    ["想是真的", "想X说的是真的"],
    "think it is true / think what X says is true",
    "A synonym of 相信 and 信, so it takes their form first. Trusting someone is the second form: what they say is true.",
  ),
  "停止": P(
    ["bu4 dong4", "bu4 zuo4 le"],
    ["不动", "不做了"],
    "not moving / not doing it any more",
    "A synonym of 停 (bù dòng), so it takes the same form first. The old 'bù zuò le' stays as the second.",
  ),
  "允许": P(
    ["rang4"],
    ["让"],
    "let",
    "Allow is let, the same as 让 (ràng). The old 'jiào X + verb' was a copy of one of 让's forms, and jiào is 'tell'.",
  ),
  "关注": P(
    ["kan4 X zen3me-yang4"],
    ["看X怎么样"],
    "see how X is doing",
    "It had the form of 检查 and 查看 (hǎo-hǎo kàn) by accident, but following something is not checking it. To follow is to see how X is doing.",
  ),
  "办公": P(
    ["zai4 fang2-jian1-li3 gong1-zuo4"],
    ["在房间里工作"],
    "work in a room",
    "Was 'zuò', the same as 15 other words. Office work is work done in a room.",
  ),
  "办公室": P(
    ["gong1-zuo4-de fang2-jian1"],
    ["工作的房间"],
    "the room for work",
    "Was 'zuò-de dì-fang', which also fits a factory (厂). The office is the room where people gōng-zuò.",
  ),
  "合适": P(
    ["dui4 X hao3", "bu4 da4 bu4 xiao3"],
    ["对X好", "不大不小"],
    "good for X / not big, not small",
    "A synonym of 适合 (duì X hǎo), so it takes the same form first. The old 'bù dà bù xiǎo' stays as the second.",
  ),
  "吸引": P(
    ["rang4 ren2 xiang3 lai2"],
    ["让人想来"],
    "make people want to come",
    "ràng is 'make' and xiǎng is 'want' (jiào is 'tell'): to attract is to make people want to come.",
  ),
  "准": P(
    ["dui4", "hen3 dui4"],
    ["对", "很对"],
    "right / very right",
    "A synonym of 正确 (duì), so it takes the same form first. The old 'hěn duì' stays as the second, for 'very exact'.",
  ),
};

// entries that mean the same as another composite (any rank): zh -> [zh, ...]
export const synonyms = {
  "词典": ["字典"],
  "语音": ["发音"],
  "说明": ["解释"],
  "转变": ["变化", "改变", "变"],
  "达到": ["到达", "到"],
  "运用": ["使用", "应用", "利用", "用"],
  "造": ["制造", "制作"],
  "部": ["部分"],
  "重点": ["关键"],
  "销售": ["卖"],
  "需": ["需要"],
  "题目": ["问题", "题"],
  "食品": ["食物"],
  "足够": ["够"],
  "不得不": ["必须"],
  "不必": ["不用"],
  "不断": ["一直", "总是"],
  "举办": ["举行"],
  "办理": ["处理", "办"],
  "仔细": ["小心", "认真"],
  "以上": ["超过"],
  "价钱": ["价格"],
  "优点": ["好处"],
  "住房": ["房子", "房屋"],
  "家庭": ["家人"],
  "体育": ["运动", "锻炼"],
  "保": ["保护"],
  "相信": ["信"],
  "信任": ["相信", "信"],
  "停止": ["停"],
  "允许": ["让"],
  "农村": ["乡村"],
  "准": ["正确"],
  "减少": ["降低"],
  "区": ["区域", "地方"],
  "区别": ["差别"],
  "厂": ["工厂"],
  "取": ["拿"],
  "受": ["得到", "获得"],
  "另外": ["其他", "别的"],
  "号码": ["号"],
  "合适": ["适合"],
  "同样": ["一样", "相同", "同"],
  "名": ["名字", "姓名"],
  "向": ["往"],
  "周围": ["附近"],
  "命": ["生命", "活"],
  "图": ["图片", "图画", "画"],
  "图片": ["图", "图画", "照片"],
  "图画": ["图", "图片", "画"],
  "地点": ["位置", "地方"],
  "基本上": ["基本"],
};

// opposites: zh -> [zh, ...]
export const antonyms = {
  "足够": ["不够"],
  "以上": ["以下"],
  "以下": ["以上"],
  "上传": ["下载"],
  "优点": ["缺点"],
  "反对": ["同意", "赞成"],
  "减少": ["增加"],
  "出发": ["到达"],
  "分开": ["合"],
  "农村": ["城市"],
  "停止": ["开始"],
  "同样": ["不同"],
};
