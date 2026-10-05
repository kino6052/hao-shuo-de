// D60b (BOOK_PLAN.md D60, as decided with the author): words that change
// sentences.
//   - yòu stays 又 (again) and nán stays 难 (difficult); 右 (right) and 男
//     (male) become their senses, so yòubiān and nánrén split.
//   - bùfen becomes bù (sense 部, part) + fēn, written bù-{{light:fen1}}.
//   - fùmǔ leaves for the words bàba 爸爸 and māma 妈妈: parents are
//     bàba-māma (爸爸妈妈).
//   - nòng leaves for zuò 做 (do, make): zuò's old meaning, sit 坐, becomes a
//     sense used in zuò-xià, zuò-zài and zuò-chē, and 作 (work) a sense in
//     gōng-zuò, zuò-zhě, zuò-yòng, dòng-zuò and xiě-zuò.
// kāishǐ stays a word. Run: npm run refactor -- refactors/D60b.ts [--write]

const noun = { eng: "noun", rus: "существительное", zh: "名词" };
const verb = { eng: "verb", rus: "глагол", zh: "动词" };
const w = (pos, eng, rus, zh, index, needEng, needRus) => ({ pos, definition: { eng, rus, zh }, necessity: { index, eng: needEng, rus: needRus } });

export default [
  // -- right: a sense of yòu 又 -------------------------------------------------
  {
    op: "sense", id: "you4", key: "right", hanzi: "右", eng: "right (side)", rus: "правый",
    why: { eng: "Written 右, {{word:you4}} means right in {{word:you4}}-{{word:bian1}}; on its own it is again.", rus: "Записанное как 右, {{word:you4}} значит «правый» в {{word:you4}}-{{word:bian1}}; само по себе — «снова»." },
    compounds: ["you4 bian1"],
  },
  {
    op: "split", id: "you4bian1", into: ["you4", "bian1"], senses: { you4: "right" },
    cards: { you4: { en: "right (in {{word:you4}}-{{word:bian1}}: right side)", ru: "правый (в {{word:you4}}-{{word:bian1}} — правая сторона)" } },
  },
  { op: "relation", kind: "antonyms", add: ["zuo3", "you4"] },

  // -- male: a sense of nán 难 ----------------------------------------------------
  {
    op: "sense", id: "nan2", key: "male", hanzi: "男", eng: "male", rus: "мужской",
    why: { eng: "Written 男, {{word:nan2}} means male in {{word:nan2}}-{{word:ren2}} (man) and {{word:nan2}}-{{word:sheng1}} (boy); on its own it is difficult.", rus: "Записанное как 男, {{word:nan2}} значит «мужской» в {{word:nan2}}-{{word:ren2}} (мужчина) и {{word:nan2}}-{{word:sheng1}} (мальчик); само по себе — «трудный»." },
    compounds: ["nan2 ren2", "nan2 sheng1"],
  },
  {
    op: "split", id: "nan2ren2", into: ["nan2", "ren2"], senses: { nan2: "male" },
    cards: { nan2: { en: "male (in {{word:nan2}}-{{word:ren2}}: man)", ru: "мужской (в {{word:nan2}}-{{word:ren2}} — мужчина)" } },
  },

  // -- part: bùfen -> bù (sense 部) + fēn -------------------------------------------
  {
    op: "sense", id: "bu4", key: "part", hanzi: "部", eng: "part", rus: "часть",
    why: { eng: "Written 部, {{word:bu4}} means part in {{word:bu4}}-{{light:fen1}}; on its own it is not.", rus: "Записанное как 部, {{word:bu4}} значит «часть» в {{word:bu4}}-{{light:fen1}}; само по себе — «не»." },
    compounds: ["bu4 fen1"],
  },
  {
    op: "split", id: "bu4fen", into: ["bu4", "fen1"], light: ["fen1"], senses: { bu4: "part" },
    words: {
      fen1: w(noun, "part, share; minute; to divide: {{word:bu4}}-{{light:fen1}}, a part; {{word:fen1}}-{{word:kai1}}, to separate", "часть, доля; минута; делить: {{word:bu4}}-{{light:fen1}} — часть; {{word:fen1}}-{{word:kai1}} — разделить", "分", 4,
        "Part, divide: {{word:da4}} {{word:bu4}}-{{light:fen1}} is most, and minutes and points are counted with it.", "Часть, делить: {{word:da4}} {{word:bu4}}-{{light:fen1}} — большинство; им же считают минуты и очки."),
    },
    cards: {
      bu4: { en: "part (in {{word:bu4}}-{{light:fen1}})", ru: "часть (в {{word:bu4}}-{{light:fen1}})" },
      fen1: { en: "part, divide; {{word:bu4}}-{{light:fen1}}: part", ru: "часть, делить; {{word:bu4}}-{{light:fen1}} — часть" },
    },
  },

  // -- parents: fùmǔ -> bàba māma (whole words, not roots) ----------------------------
  {
    op: "add", id: "ba4ba", hanzi: "爸爸", category: "people-kinship",
    ...w(noun, "dad: {{word:ba4ba}}-{{word:ma1ma}}, mom and dad, parents", "папа: {{word:ba4ba}}-{{word:ma1ma}} — мама и папа, родители", "爸爸", 4,
      "Dad, and with {{word:ma1ma}}, the parents ({{word:ba4ba}}-{{word:ma1ma}}).", "Папа, а с {{word:ma1ma}} — родители ({{word:ba4ba}}-{{word:ma1ma}})."),
  },
  {
    op: "add", id: "ma1ma", hanzi: "妈妈", category: "people-kinship",
    ...w(noun, "mom: {{word:ba4ba}}-{{word:ma1ma}}, mom and dad, parents", "мама: {{word:ba4ba}}-{{word:ma1ma}} — мама и папа, родители", "妈妈", 4,
      "Mom, and with {{word:ba4ba}}, the parents ({{word:ba4ba}}-{{word:ma1ma}}).", "Мама, а с {{word:ba4ba}} — родители ({{word:ba4ba}}-{{word:ma1ma}})."),
  },
  { op: "replace", id: "fu4mu3", with: "{{word:ba4ba}}-{{word:ma1ma}}", hanzi: { "父母": "爸爸妈妈" } },
  { op: "card", id: "ba4ba", to: "modifying-nouns/like", en: "dad; {{word:ba4ba}}-{{word:ma1ma}}: parents", ru: "папа; {{word:ba4ba}}-{{word:ma1ma}} — родители" },
  { op: "card", id: "ma1ma", to: "modifying-nouns/like", en: "mom", ru: "мама" },

  // -- sit: zuò keeps 坐 only in zuò-xià, zuò-zài, zuò-chē -----------------------------
  { op: "composite", zh: "坐下", create: { rank: 5401, phase: 4, py: "zuòxià", en: "sit down", ru: "сесть" }, set: { hsd: ["{{word:zuo4}}-{{word:xia4}}"], tts: ["坐下"], fit: "natural", transparent: true } },
  { op: "composite", zh: "坐在", create: { rank: 5402, phase: 4, py: "zuòzài", en: "sit at, sit on", ru: "сидеть на, в" }, set: { hsd: ["{{word:zuo4}}-{{word:zai4}}"], tts: ["坐在"], fit: "natural", transparent: true, note: "Verb + zài, listed so zuò keeps its sense sit here." } },
  { op: "composite", zh: "坐车", create: { rank: 5403, phase: 4, py: "zuòchē", en: "ride (a car, bus, train)", ru: "ехать (на машине, автобусе)" }, set: { hsd: ["{{word:zuo4}}-{{word:che1}}"], tts: ["坐车"], fit: "natural", transparent: true } },
  { op: "refs", label: "zuò zài / zuò chē -> joined", pattern: "\\{\\{(w|W)ord:zuo4\\}\\} \\{\\{word:(zai4|che1)\\}\\}", to: "{{$1ord:zuo4}}-{{word:$2}}" },
  {
    op: "refs", label: "sit: zuò -> zuò-xià", pattern: "\\{\\{(w|W)ord:zuo4\\}\\}(?!-\\{\\{word:(xia4|zai4|che1)\\}\\})", to: "{{$1ord:zuo4}}-{{word:xia4}}",
    hanzi: ["坐(?![下在车])", "坐下"],
  },
  {
    op: "edit", id: "zuo4",
    set: {
      hanzi: "做",
      pos: verb,
      definition: {
        eng: "to do, make: {{word:zuo4}}-{{word:hao3}}, do well, finish; {{word:zuo4}} {{word:dong1}}-{{light:xi1}}, make things",
        rus: "делать: {{word:zuo4}}-{{word:hao3}} — сделать, доделать; {{word:zuo4}} {{word:dong1}}-{{light:xi1}} — делать вещи",
        zh: "做",
      },
      necessity: {
        index: 5,
        eng: "Do, make: the all-purpose action. Most work and making verbs are described with it.",
        rus: "Делать — универсальное действие. Через него описывают почти любую работу.",
      },
      senses: {
        sit: {
          hanzi: "坐", eng: "sit", rus: "сидеть",
          why: { eng: "Written 坐, {{word:zuo4}} means sit in {{word:zuo4}}-{{word:xia4}} (sit down), {{word:zuo4}}-{{word:zai4}} (sit at) and {{word:zuo4}}-{{word:che1}} (ride); on its own it is do.", rus: "Записанное как 坐, {{word:zuo4}} значит «сидеть» в {{word:zuo4}}-{{word:xia4}} (сесть), {{word:zuo4}}-{{word:zai4}} (сидеть на) и {{word:zuo4}}-{{word:che1}} (ехать); само по себе — «делать»." },
          compounds: ["zuo4 xia4", "zuo4 zai4", "zuo4 che1"],
        },
        work: {
          hanzi: "作", eng: "work", rus: "работа",
          why: { eng: "Written 作, {{word:zuo4}} means work in {{word:gong1}}-{{word:zuo4}} (work, job), {{word:zuo4}}-{{word:zhe3}} (author), {{word:zuo4}}-{{word:yong4}} (use, effect), {{word:dong4}}-{{word:zuo4}} (movement) and {{word:xie3}}-{{word:zuo4}} (writing).", rus: "Записанное как 作, {{word:zuo4}} значит «работа» в {{word:gong1}}-{{word:zuo4}} (работа), {{word:zuo4}}-{{word:zhe3}} (автор), {{word:zuo4}}-{{word:yong4}} (действие, польза), {{word:dong4}}-{{word:zuo4}} (движение) и {{word:xie3}}-{{word:zuo4}} (письмо, сочинение)." },
          compounds: ["gong1 zuo4", "zuo4 zhe3", "zuo4 yong4", "dong4 zuo4", "xie3 zuo4"],
        },
      },
    },
  },
  { op: "uncard", id: "zuo4" },
  { op: "card", id: "zuo4", sense: "sit", to: "direction-and-result/body", en: "sit; {{word:zuo4}}-{{word:xia4}}: sit down", ru: "сидеть; {{word:zuo4}}-{{word:xia4}} — сесть" },
  { op: "category", id: "zuo4", to: "state-change-general" },

  // -- do: nòng -> zuò ---------------------------------------------------------------------
  // Opening: bǎ hézi kāi le (把盒子开了), not zuò-kāi (dǎ-kāi would come before dǎ is taught).
  { op: "text", file: "src/content/lessons/becoming-and-making/ba.ts", from: '{{word:he2zi}} {{word:nong4}}-{{word:kai1}} {{word:le}}.",\n      hanzi: "我把盒子弄开了。",', to: '{{word:he2zi}} {{word:kai1}} {{word:le}}.",\n      hanzi: "我把盒子开了。",' },
  { op: "replace", id: "nong4", with: "{{word:zuo4}}", hanzi: { "弄": "做" } },
  { op: "card", id: "zuo4", to: "becoming-and-making/make", en: "do, make", ru: "делать" },
  { op: "composite", zh: "弄", set: { fit: "plain", proposed: true, note: "Hao-shuo-de says zuò for any doing; Mandarin also has 弄 for handling and fixing." } },
  { op: "text", file: "src/lib/word-builder.js", from: '"zuo3", "you4bian1", "fu4jin4",', to: '"zuo3", "fu4jin4",' },
  { op: "text", file: "src/lib/word-builder.js", from: 'export const START_VERBS = ["nong4", "qu4", "chi1", "kan4"];', to: 'export const START_VERBS = ["zuo4", "qu4", "chi1", "kan4"];' },

  // nòng-xià-qù (keep on doing, push down) would now read zuò-xià, sit: other forms.
  { op: "composite", zh: "坚持", set: { hsd: ["{{word:zuo4}} {{word:dao4}} {{word:zui4}} {{word:hou4}}"], tts: ["做到最后"], literal: "do it to the end", proposed: true } },
  { op: "composite", zh: "压", set: { hsd: ["{{word:yong4}} {{word:li4}} {{word:fang4}}-{{word:xia4}}-{{word:qu4}}"], tts: ["用力放下去"], literal: "put down with force", proposed: true } },

  { op: "compounds" },
];
