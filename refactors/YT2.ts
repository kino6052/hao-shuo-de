// YT2: four entries the YT1 split left on a page that is not theirs, moved to the page a learner would look on: throw
// and splash go with the throwing words, the library is a place in town, reading goes with books. Made by Claude on
// 2026-10-22 without a review by the author.
//
// The split's writers named more entries that sit loosely on their page; they stay where YT1 put them, for the author to
// decide: 枯燥 dull (describing people), 方面 aspect (places), 此次 this time and 周期 cycle (how often), 分布 be spread
// out (all and some), 移民 emigrate and 国籍 nationality (country), 美国人 (named countries), 找 and 寻找 look for
// (seeing), 反思 / 分类 / 调研 / 筛选 (checking), 当年 / 前途 / 前景 / 历经 (before and after), 宝 / 财物 (rich and
// poor), 扣 deduct or fasten, 地震 earthquake (land), 流行 popular (media), 安 peaceful, 自由 freedom (rights),
// 舒服 / 舒适 / 烂 / 灵活 (how it feels), 算了 forget it and 当 serve as (adverbs), 丢 lose and 占据 occupy (taking),
// 停 / 停止 / 止 stop and 引 lead (going), 镜头 lens and 耳机 earphone (computers), 争 / 加油 (matches), 繁荣 prosperous,
// 应该 / 该 / 应当 should (wanting), 博士 doctor's degree (classroom), 失去 lose / 替代 replace / 影响 affect /
// 反应 reaction (changing), 仪器 / 图表 / 笔记 / 奖学金 (studying), 听说 / 据说 / 约 / 约定 (talking), 牌 / 名单 / 签名
// (writing), 在乎 / 在意 / 希望 / 服 (knowing), 争夺 / 中奖 (getting), 便 / 合理 / 障碍 (easy and hard), 专门 / 亲自 /
// 好好 / 偷偷 / 直接 (degree), 看不起 / 看得起 / 荣誉 / 得了 / 也好 (praising), 盲 / 盲人 / 近视 / 毒 (illness),
// 对方 / 率领 / 带动 / 和谐 / 人际 (people together), 样 (much and little), 分散 / 过期 / 有着 / 沉 / 深入 / 背景 / 借 /
// 一边 / 排队 / 挑 / 事物 / 涉及 / 名片 / 资格 / 大会 / 开幕.
// Run: npm run refactor -- refactors/YT2.ts [--diff] [--write]

export default [
  { op: "composite", zh: "扔", set: { topics: ["throwing-spilling-and-cutting"] } },
  { op: "composite", zh: "泼", set: { topics: ["throwing-spilling-and-cutting"] } },
  { op: "composite", zh: "图书馆", set: { topics: ["places-in-town"] } },
  { op: "composite", zh: "读", set: { topics: ["books-and-paper"] } },
];
