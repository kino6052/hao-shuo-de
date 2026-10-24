// D67 (the author, 2026-10-24: "instead of using ti4 we should use huan as core vocab"; the choices
// left open in review/proposals/ti4-to-huan.md were Claude's call): huàn 换 (swap, change) comes into
// the core and tì 替 (in someone's place) leaves, so the core stays at 230.
//   - huàn takes tì's card in inside-a-sentence/give, next to gěi: giving one thing and taking
//     another. huàn + person + verb (wǒ bù qù, huàn tā qù) says someone else does it now; the
//     grammar pattern huan-person replaces ti-instead (renamed by hand before this list runs).
//   - "On someone's behalf" is bāng (already core, taught in everyday-patterns/help): the
//     composites that said tì X now say bāng X. huàn never takes that job: "tā huàn wǒ qù" is
//     not Mandarin.
//   - The huàn family gets the word: 换, 交换, 更换, 换乘 (huàn chē), 转机 (huàn fēi-jī), 转换, 汇率.
// Run: npm run refactor -- refactors/D67.ts [--check | --write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const text = (file, from, to) => ({ op: "text", file, from, to });
const set = (zh, hsd, tts, literal, fit = "plain", more = {}) => ({ op: "composite", zh, set: { hsd, tts, fit, literal, proposed: true, ...more } });
const GIVE = "src/content/lessons/inside-a-sentence/give.ts";
const READING = "src/content/lessons/inside-a-sentence/reading.ts";
const H = W("huan4");
const B = W("bang1");
const thing = `${W("dong1")}-${L("xi1")}`;

export default [
  // -- the word ---------------------------------------------------------------------------------
  {
    op: "add", id: "huan4", hanzi: "换", term: "huàn", category: "mixing-passing-on-and-changing",
    pos: { eng: "verb", rus: "глагол", zh: "动词" },
    definition: {
      eng: `to swap, change one thing for another: ${H} ${W("che1")}, change buses; ${H} + person + verb, now that person does it: ${W("wo3")} ${W("bu4")} ${W("qu4")}, ${H} ${W("ta1")} ${W("qu4")}, I won't go, he goes instead`,
      rus: `менять, обменивать одно на другое: ${H} ${W("che1")} — сделать пересадку; ${H} + человек + глагол — теперь это делает он: ${W("wo3")} ${W("bu4")} ${W("qu4")}, ${H} ${W("ta1")} ${W("qu4")} — я не пойду, пойдёт он`,
      zh: "换，交换，更换",
    },
    necessity: {
      index: 4,
      eng: `Swap and change: ${H} ${W("yi1fu")}, change clothes. It also says whose turn it is: ${H} ${W("ni3")} ${W("shuo1")}, now you say it.`,
      rus: `Менять и обмениваться: ${H} ${W("yi1fu")} — переодеться. А ещё — чья очередь: ${H} ${W("ni3")} ${W("shuo1")} — теперь скажи ты.`,
    },
  },
  { op: "edit", id: "huan4", set: { isA: ["handling-action"] } },
  {
    op: "paraphrase", id: "huan4", forms: [`${W("gei3")} X, ${W("na2")} Y`], verdict: "fine",
    note: "The paraphrase says a swap; changing buses or clothes and someone else's turn take two clauses without it (xià chē, shàng bié-de chē; wǒ bù qù, tā qù). Mandarin's #852, almost three times as common as tì.",
  },
  { op: "card", id: "huan4", to: "inside-a-sentence/give", en: "swap, change (one for another)", ru: "менять (одно на другое)" },

  // -- the lesson: inside-a-sentence/give --------------------------------------------------------
  text(GIVE,
    `      "{{word:ti4}} before a verb means in someone's place: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}, he goes instead of me.",`,
    `      "{{word:huan4}} is to swap, to give one thing and take another: {{Word:wo3}} {{word:huan4}} {{word:che1}}, I change buses. {{word:huan4}} + person + verb says that now this person does it, in someone else's place: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}, I won't go, he goes instead.",`),
  text(GIVE,
    `      "{{word:ti4}} перед глаголом значит «вместо»: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}} — он идёт вместо меня.",`,
    `      "{{word:huan4}} — «менять»: отдать одно и взять другое: {{Word:wo3}} {{word:huan4}} {{word:che1}} — я делаю пересадку. {{word:huan4}} + человек + глагол говорит, что теперь это делает этот человек, вместо другого: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}} — я не пойду, пойдёт он.",`),
  // the info box, and its copy in the grammar overview (rebuilt after the write)
  ...[GIVE, "src/content/appendix-grammar.ts"].flatMap((file) => [
    text(file,
      `{{word:ti4}} + person + verb, instead of: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}. (He goes instead of me.)`,
      `{{word:huan4}} + person + verb, now they do it: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. (I won't go; he goes instead.)`),
    text(file,
      `{{word:ti4}} + человек + глагол — вместо: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}. (Он идёт вместо меня.)`,
      `{{word:huan4}} + человек + глагол — теперь это делает он: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. (Я не пойду, пойдёт он.)`),
  ]),
  text(GIVE,
    `      pinyin: "{{Word:wo3}} {{word:ti4}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我替你说。",
      en: "I'll say it for you.",
      ru: "Я скажу за тебя.",`,
    `      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shu1}}, {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3}}, {{word:wo3}}-{{word:men}} {{word:huan4}}.",
      hanzi: "我给你书，你给我水，我们换。",
      en: "I give you a book, you give me water: we swap.",
      ru: "Я даю тебе книгу, ты мне воду: мы меняемся.",`),
  text(GIVE,
    `      pinyin: "{{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "他替我去。",
      en: "He goes instead of me.",
      ru: "Он идёт вместо меня.",`,
    `      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}.",
      hanzi: "我不去，换他去。",
      en: "I won't go; he goes instead.",
      ru: "Я не пойду, пойдёт он.",`),
  text(GIVE,
    `      en: "He says it for me.",
      ru: "Он говорит за меня.",
      answer: "{{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:shuo1}}.",
      hanzi: "他替我说。",`,
    `      en: "I won't say it; you say it.",
      ru: "Я не скажу, скажи ты.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:shuo1}}, {{word:huan4}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我不说，换你说。",
    },
    {
      en: "I change buses.",
      ru: "Я делаю пересадку.",
      answer: "{{Word:wo3}} {{word:huan4}} {{word:che1}}.",
      hanzi: "我换车。",`),
  text(GIVE,
    `      en: "It can mean either. The situation tells you which.",
      ru: "И то и другое. Что именно — понятно из ситуации.",
    },
`,
    `      en: "It can mean either. The situation tells you which.",
      ru: "И то и другое. Что именно — понятно из ситуации.",
    },
    // how do I say "he goes instead of me"? (huàn goes before the one who does it now)
    {
      question: {
        en: "How do I say 'he goes instead of me'?",
        ru: "Как сказать «он идёт вместо меня»?",
      },
      en: "Say who doesn't do it, then {{word:huan4}} and who does: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. {{word:huan4}} goes before the one who does it now, never before the one who stops.",
      ru: "Скажите, кто не делает, затем {{word:huan4}} и кто делает: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. {{word:huan4}} стоит перед тем, кто делает теперь, а не перед тем, кого заменяют.",
    },
`),

  // the lesson's story: the girl stops carrying the bag, and I carry it instead
  text(READING,
    `I carry the bag for the girl.`,
    `The girl doesn't carry the bag; I carry it instead.`),
  text(READING,
    `      pinyin: "{{Word:wo3}} {{word:ti4}} {{word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:na2}} {{word:bao1}}.",
      hanzi: "我替小女人拿包。",
      en: "I carry the bag for the girl.",`,
    `      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:bu4}} {{word:na2}} {{word:bao1}}, {{word:huan4}} {{word:wo3}} {{word:na2}}.",
      hanzi: "小女人不拿包，换我拿。",
      en: "The girl doesn't carry the bag; I carry it instead.",`),

  // the English ways of saying it
  text("src/data/maps/english-constructions.ts",
    `patterns: ["ti-instead"], entries: ["替"], proposed: true },`,
    `patterns: ["huan-person", "bang-help"], entries: ["替", "代替"], note: "Huàn, the person, then the verb: now that person does it (wǒ bù qù, huàn tā qù). On someone's behalf is bāng: wǒ bāng nǐ shuō.", proposed: true },`),

  // -- the huàn family ---------------------------------------------------------------------------
  set("换", [H], ["换"], undefined, "word", {
    examples: [
      {
        pinyin: `{{Word:wo3}} ${H} ${W("che1")}.`,
        hanzi: "我换车。",
        en: "I change buses.",
        ru: "Я делаю пересадку.",
      },
      {
        pinyin: `{{Word:wo3}} ${W("bu4")} ${W("qu4")}, ${H} ${W("ta1")} ${W("qu4")}.`,
        hanzi: "我不去，换他去。",
        en: "I won't go; he goes instead.",
        ru: "Я не пойду, пойдёт он.",
      },
    ],
  }),
  set("交换", [H, `${W("ni3")} ${W("gei3")} ${W("wo3")}, ${W("wo3")} ${W("ye3")} ${W("gei3")} ${W("ni3")}`],
    ["换", "你给我，我也给你"], "swap / you give me, I also give you", "natural"),
  set("更换", [H, `${W("ba3")} X ${W("na2")}-${W("xia4")}, ${W("fang4")}-${W("shang4")} Y`],
    ["换", "把X拿下，放上Y"], "swap / take X off, put Y on", "natural"),
  set("换乘", [`${H} ${W("che1")}`, `${W("xia4")} ${W("che1")}, ${W("shang4")} ${W("bie2")}-${W("de")} ${W("che1")}`],
    ["换车", "下车，上别的车"], "change vehicles / get off the vehicle, ride another vehicle", "natural"),
  set("转机", [`${H} ${W("fei1")}-${W("ji1")}`, `${W("xia4")} ${W("fei1")}-${W("ji1")}, ${W("shang4")} ${W("bie2")}-${W("de")} ${W("fei1")}-${W("ji1")}`],
    ["换飞机", "下飞机，上别的飞机"], "change planes / get off a plane, get on another plane", "natural"),
  { op: "composite", zh: "转换", addForm: [H, "换"], set: { proposed: true } },
  set("汇率", [
    `${W("yi1")}-${L("ge4")} ${W("guo2")}-${W("de")} ${W("jin1")} ${W("neng2")} ${H} ${W("duo1")}-${W("shao3")} ${W("bie2")}-${W("de")} ${W("guo2")}-${W("de")} ${W("jin1")}`,
    `${W("gei3")} ${W("yi1")}-${L("ge4")} ${W("guo2")}-${W("de")} ${W("jin1")}, ${W("neng2")} ${W("de2")}-${W("dao4")} ${W("duo1")}-${W("shao3")} ${W("bie2")}-${W("de")} ${W("guo2")}-${W("de")} ${W("jin1")}`,
  ], ["一个国的金能换多少别的国的金", "给一个国的金，能得到多少别的国的金"],
  "how much of another country's money one country's money swaps for / give one country's money, how much of another country's money you can get"),

  // -- replacing: huàn ---------------------------------------------------------------------------
  set("替", [`${B} X`, `${H} X`], ["帮X", "换X"], "help X / swap in X", "plain", {
    note: "Acting for X is bāng X. When X takes someone's place, say huàn X before X's verb: wǒ bù qù, huàn tā qù.",
  }),
  set("代替", [H, `${W("bu4")} ${W("yong4")} X ${W("le")}, ${H} Y`], ["换", "不用X了，换Y"], "swap / no longer use X, swap in Y", "natural"),
  set("替代", [H, `${W("ke3")}-${W("yi3")} ${H} X-${W("de")} ${thing}`], ["换", "可以换X的东西"], "swap / a thing that can take X's place"),
  set("取代", [H, `${W("bu4")} ${W("yong4")} X ${W("le")}, ${H} Y`], ["换", "不用X了，换Y"], "swap / no longer use X, swap in Y"),
  set("代", [H, `${W("hen3")} ${W("chang2")}-${W("de")} ${W("shi2")}-${W("jian1")}`], ["换", "很长的时间"], "swap / a long time"),

  // -- on someone's behalf: bāng -----------------------------------------------------------------
  set("代表", [`${B} X ${W("shuo1")} ${W("hua4")}-${W("de")} ${W("ren2")}`, `${B} X ${W("shuo1")}`],
    ["帮X说话的人", "帮X说"], "a person who speaks for X / speak for X", "plain", {
      examples: [
        {
          pinyin: `{{Word:bang1}} ${W("wo3")}-${W("men")} ${W("shuo1")} ${W("hua4")}-${W("de")} ${W("ren2")} ${W("zai4")} ${W("zhe4")}-${W("li3")}.`,
          hanzi: "帮我们说话的人在这里。",
          en: "The person who speaks for us is here.",
          ru: "Здесь тот, кто говорит за нас.",
        },
        {
          pinyin: `{{Word:ta1}} ${B} ${W("wo3")}-${W("men")} ${W("shuo1")}.`,
          hanzi: "他帮我们说。",
          en: "He speaks for us.",
          ru: "Он говорит за нас.",
        },
      ],
    }),
  set("代理", [`${B} X ${W("zuo4")} X ${W("yao4")} ${W("zuo4")}-${W("de")}`, `${B} X ${W("zuo4")}`],
    ["帮X做X要做的", "帮X做"], "do for X what X has to do / do it for X"),
  set("大使", [`${W("zai4")} ${W("bie2")}-${W("de")} ${W("guo2")} ${B} ${W("ta1")}-${W("de")} ${W("guo2")} ${W("shuo1")} ${W("hua4")}-${W("de")} ${W("ren2")}`],
    ["在别的国帮他的国说话的人"], "a person who speaks for his country in another country"),
  set("转告", [`${W("ba3")} X ${W("shuo1")}-${W("de")} ${W("hua4")} ${W("shuo1")} ${W("gei3")} Y ${W("ting1")}`, `${B} X ${W("dui4")} Y ${W("shuo1")}`],
    ["把X说的话说给Y听", "帮X对Y说"], "tell Y the words X said / say it to Y for X"),
  set("转交", [`${B} ${W("wo3")} ${W("ba3")} X ${W("gei3")} Y`, `${W("ba3")} X ${W("na2")}-${W("gei3")} Y`],
    ["帮我把X给Y", "把X拿给Y"], "give X to Y for me / take X and give it to Y"),
  set("委托", [`${W("rang4")} ${W("bie2")}-${W("ren2")} ${B} ${W("wo3")} ${W("zuo4")}`, `${W("ba3")} X ${W("gei3")} Y ${W("zuo4")}`],
    ["让别人帮我做", "把X给Y做"], "let someone else do it for me / give X to Y to do"),

  // -- tì leaves the core ------------------------------------------------------------------------
  { op: "remove", id: "ti4" },
];
