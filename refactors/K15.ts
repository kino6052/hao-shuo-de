// K15: fixes after K10-K14 (Claude, 2026-10-21): the colloquial-form gate wants a constructive form or `transparent`;
// these twenty entries say it in the ordinary short way and have no second form, so they are marked transparent.
// Run: npm run refactor -- refactors/K15.ts [--diff] [--write]

const T = (zh) => ({ op: "composite", zh, set: { transparent: true } });

export default ["感", "抱歉", "迟到", "赶紧", "赶快", "购物", "偶尔", "全身", "勇敢", "干活儿", "晚安", "不仅", "曾", "即使", "接收", "无", "最终", "生存", "处", "另"].map(T);
