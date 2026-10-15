// K4: a built form for each of the 19 composites that had a spelled form and no built form (K23).
// Drafted by Claude for the author to review as one batch; NOT applied yet.
// Each op adds one form after the Mandarin one and marks it built (the Mandarin one stays spelled).
// Six of them (现在, 发生, 时间, 觉得, 一下, 部分) are the only carriers of an NSM prime
// (NOW, HAPPEN, WHEN, THINK/FEEL, A SHORT TIME/MOMENT, PART): the new form is a second way to say the prime.
// Run: npm run refactor -- refactors/K4.ts [--write]

const W = (id: string) => `{{word:${id}}}`;
const L = (id: string) => `{{light:${id}}}`;

export default [
  { op: "composite", zh: "现在", addForm: [`${W("zhe4")}-${L("ge4")} ${W("shi2")}-${W("jian1")}`, "这个时间"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "发生", addForm: [`${W("chu1")} ${W("le")}`, "出了"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "国家", addForm: [W("guo2"), "国"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "时间", addForm: [`${W("nian2")} ${W("yue4")} ${W("ri4")} ${W("dian3")}`, "年月日点"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "一起", addForm: [`${W("yi1")}-${W("tong2")}`, "一同"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "男人", addForm: [`${W("bu4")} ${W("shi4")} ${W("nv3")}-${W("de")} ${W("ren2")}`, "不是女的人"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "觉得", addForm: [`${W("xin1")}-${W("li3")} ${W("xiang3")}`, "心里想"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "还是", addForm: [`X ${W("he2")} Y, ${W("na3")} ${W("yi1")}-${L("ge4")}`, "X和Y，哪一个"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "为了", addForm: [W("wei4"), "为"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "部分", addForm: [`${W("yi1")}-${W("xie1")}`, "一些"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "小时", addForm: [`${W("liu4")}-${W("shi2")}-${L("ge4")} ${W("fen1")}`, "六十个分"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "上网", addForm: [`${W("jin4")} ${W("wang3")}`, "进网"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "开会", addForm: [`${W("hen3")}-${W("duo1")}-${W("de")} ${W("ren2")} ${W("yi1")}-${W("qi3")} ${W("shuo1")} ${W("hua4")}`, "很多的人一起说话"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "记得", addForm: [`${W("hai2")} ${W("zhi1dao4")}`, "还知道"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "过去", addForm: [`${W("zou3")}-${W("guo4")}-${W("de")} ${W("shi2")}-${W("jian1")}`, "走过的时间"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "一下", addForm: [`${W("bu4")} ${W("chang2")}-${W("de")} ${W("shi2")}-${W("jian1")}`, "不长的时间"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "右边", addForm: [`${W("bu4")} ${W("shi4")} ${W("zuo3")}-${W("bian1")}-${W("de")} ${W("bian1")}`, "不是左边的边"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "打车", addForm: [`${W("jiao4")} ${W("che1")}`, "叫车"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "通过", addForm: [`${W("cong2")} X ${W("zou3")}-${W("guo4")}`, "从X走过"], set: { kinds: ["spelled", "built"] } },
  { op: "composite", zh: "通过", addForm: [`${W("yong4")} X`, "用X"], set: { kinds: ["spelled", "built", "built"] } },
];
