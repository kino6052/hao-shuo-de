// YL2: English glosses widened where an entry already means the word the English yardsticks ask for (KB_PLAN.md Phase 9,
// K30): 虽然 is "though" as well as "although", 讨论 "discussion" as well as "discuss". Only the English changes; the
// forms and the Russian stay. Made by Claude on 2026-10-22 without a review by the author.
// Run: npm run refactor -- refactors/YL2.ts [--diff] [--write]

export default [
  { op: "composite", zh: "反对", set: { en: "oppose; against (be against)" } },
  { op: "composite", zh: "虽然", set: { en: "although; though" } },
  { op: "composite", zh: "每", set: { en: "every; per" } },
  { op: "composite", zh: "几", set: { en: "how many; several; a few" } },
  { op: "composite", zh: "别的", set: { en: "other; else" } },
  { op: "composite", zh: "不错", set: { en: "not bad, pretty good, nice" } },
  { op: "composite", zh: "通过", set: { en: "pass through; through; by means of; via" } },
  { op: "composite", zh: "大家", set: { en: "everyone; everybody" } },
  { op: "composite", zh: "交流", set: { en: "communicate, exchange; communication" } },
  { op: "composite", zh: "黄金", set: { en: "gold; golden" } },
  { op: "composite", zh: "外部", set: { en: "outside; the outer part; external" } },
  { op: "composite", zh: "学术", set: { en: "scholarship, academic study; academic" } },
  { op: "composite", zh: "无法", set: { en: "unable (to); cannot" } },
  { op: "composite", zh: "创意", set: { en: "creativity; original idea; creative" } },
  { op: "composite", zh: "清醒", set: { en: "clear-headed; sober; conscious; wake up (come to)" } },
  { op: "composite", zh: "依赖", set: { en: "depend on; rely on; dependent (on)" } },
  { op: "composite", zh: "可能", set: { en: "maybe; likely; probable" } },
  { op: "composite", zh: "粘", set: { en: "stick; glue; paste; sticky" } },
  { op: "composite", zh: "破坏", set: { en: "destroy; damage; destruction" } },
  { op: "composite", zh: "讨论", set: { en: "discuss; discussion" } },
  { op: "composite", zh: "移动", set: { en: "move; mobile" } },
  { op: "composite", zh: "各种", set: { en: "all kinds of; various" } },
  { op: "composite", zh: "首要", set: { en: "of first importance; primary; chief; prime" } },
];
