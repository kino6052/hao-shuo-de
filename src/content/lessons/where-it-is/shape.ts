// Language-independent block sequence for where-it-is ("Space 1 — Where it is").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): zài + place, asking where (nǎlǐ), in / on / under, and the side words (qián-miàn, hòu-miàn, pángbiān).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- where-it-is).
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
  TInfo,
  TFaq,
} from "../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Space 1 — Where it is */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "in, inside". */
  vocabLi: TVocab;
  /** Say: To say where someone or something is, put zài (be at) before the place. Pattern: Who + zài + place */
  proseWhere: TProse;
  /** Example: wǒ zài jiā. */
  exampleWhere1: TExample;
  /** Example: nǐ-de fùmǔ zài jiā ma? */
  exampleWhere2: TExample;
  /** Example: tā zài zhè-lǐ. */
  exampleWhere3: TExample;
  /** Example: tā liú zài jiā-lǐ. */
  exampleWhere4: TExample;
  /** Example: tā kěnéng zài jiā-lǐ. */
  exampleWhere5: TExample;
  /** Example: tā yòu zài jiā le. */
  exampleWhere6: TExample;
  /** Vocabulary: "where". */
  vocabNali: TVocab;
  /** Say: To ask "where?", put nǎlǐ where the place would go. Pattern: Who + zài nǎlǐ? */
  proseWhereQuestion: TProse;
  /** Example: nǐ zài nǎlǐ? */
  exampleWhereQuestion1: TExample;
  /** Example: hézi zài nǎlǐ? */
  exampleWhereQuestion2: TExample;
  /** Example: zài nà-lǐ. */
  exampleWhereQuestion3: TExample;
  /** Vocabulary: "on, up". */
  vocabShang: TVocab;
  /** Vocabulary: "under, down". */
  vocabXia: TVocab;
  /** Vocabulary: "side; joins a place word: lǐ-miàn, qián-miàn". */
  vocabMian: TVocab;
  /** Vocabulary: "floor, ground". */
  vocabDi: TVocab;
  /** Say: To say in or on something, join lǐ (in) or shàng (on) to the place. Pattern: Thing + zài + place-lǐ / place-shàng */
  proseInOnUnder: TProse;
  /** Example: shuǐ zài hézi-lǐ. */
  exampleInOnUnder1: TExample;
  /** Example: gōngjù zài dì-shàng. */
  exampleInOnUnder2: TExample;
  /** Example: shuǐguǒ zài hézi-de xià-miàn. */
  exampleInOnUnder3: TExample;
  /** Example: yīfu zài jiā-lǐ. */
  exampleInOnUnder4: TExample;
  /** Example: wǒ-de yīfu zài dì-shàng. */
  exampleInOnUnder5: TExample;
  /** Example: hézi-de xià-miàn yǒu shuǐ. */
  exampleInOnUnder6: TExample;
  /** Example: wǒ-de jiǎo zài shuǐ-lǐ. */
  exampleInOnUnder7: TExample;
  /** Vocabulary: "front; qián-miàn: in front". */
  vocabQian: TVocab;
  /** Vocabulary: "beside (in pángbiān)". */
  vocabPang: TVocab;
  /** Vocabulary: "side". */
  vocabBian: TVocab;
  /** Vocabulary: "beside, next to". */
  vocabPangbian: TVocab;
  /** Vocabulary: "left". */
  vocabZuobian: TVocab;
  /** Vocabulary: "right". */
  vocabYoubian: TVocab;
  /** Say: To say in front, behind, or beside, join miàn (side) to qián (front) or hòu (back), or use pángbiān (beside). Pattern: Thing + zài + X-de qián-miàn / hòu-miàn / pángbiān */
  proseSides: TProse;
  /** Example: rén zài wǒ-de qián-miàn. */
  exampleSides1: TExample;
  /** Example: dòngwù zài jiā-de hòu-miàn. */
  exampleSides2: TExample;
  /** Example: wǒ zài nǐ-de pángbiān. */
  exampleSides3: TExample;
  /** Example: tā zài lǐ-miàn. */
  exampleSides4: TExample;
  /** Example: jiā-de qián-miàn yǒu dòngwù. */
  exampleSides5: TExample;
  /** Example: fùmǔ zài wǒ-de pángbiān. */
  exampleSides6: TExample;
  /** Example: hézi zài nà-biān. */
  exampleSides7: TExample;
  /** Example: tā zài wǒ-de páng-biān. */
  exampleSides8: TExample;
  /** Example: shuǐguǒ zài hézi-de páng-biān. */
  exampleSides9: TExample;
  /** Example: hézi zài wǒ-de zuǒbiān. */
  exampleSides10: TExample;
  /** Example: tā zài nǐ-de yòubiān. */
  exampleSides11: TExample;
  /** Example: shuǐ zài yòubiān ma? */
  exampleSides12: TExample;
  /** Example: zuǒbiān-de hézi hěn dà. */
  exampleSides13: TExample;
  /** Grammar box: zài + place, nǎlǐ, place-lǐ / place-shàng, and the -miàn side words. */
  infoWhereThingsAre: TInfo;
  /** Exercise 1: Where is my tool? */
  exercise1: TExercise;
  /** Exercise 2: The fruit is in the box. */
  exercise2: TExercise;
  /** Exercise 3: The box is on the floor. */
  exercise3: TExercise;
  /** Exercise 4: The animal is under the box. */
  exercise4: TExercise;
  /** Exercise 5: I'm in front of you. */
  exercise5: TExercise;
  /** Exercise 6: She is beside me. */
  exercise6: TExercise;
  /** Exercise 7: He is on this side. */
  exercise7: TExercise;
  /** Exercise 8: The man is beside the house. */
  exercise8: TExercise;
  /** Exercise 9: The tool is on the left. */
  exercise9: TExercise;
  /** Exercise 10: My home is on the right. */
  exercise10: TExercise;
  /** Answer 1: wǒ-de gōngjù zài nǎlǐ? */
  answer1: TAnswer;
  /** Answer 2: shuǐguǒ zài hézi-lǐ. */
  answer2: TAnswer;
  /** Answer 3: hézi zài dì-shàng. */
  answer3: TAnswer;
  /** Answer 4: dòngwù zài hézi-de xià-miàn. */
  answer4: TAnswer;
  /** Answer 5: wǒ zài nǐ-de qián-miàn. */
  answer5: TAnswer;
  /** Answer 6: tā zài wǒ-de pángbiān. */
  answer6: TAnswer;
  /** Answer 7: tā zài zhè-biān. */
  answer7: TAnswer;
  /** Answer 8: nánrén zài jiā-de páng-biān. */
  answer8: TAnswer;
  /** Answer 9: gōngjù zài zuǒbiān. */
  answer9: TAnswer;
  /** Answer 10: wǒ-de jiā zài yòubiān. */
  answer10: TAnswer;
  /** FAQ: is zài (at) the same word as zài (right now)? (yes) */
  faqZaiSameWord: TFaq;
  /** FAQ: why zài jiā but zài hézi-lǐ? (a thing needs -lǐ / -shàng to be a place) */
  faqThingNeedsLi: TFaq;
  /** FAQ: -lǐ vs lǐ-miàn */
  faqLiOrLimian: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabLi: { type: "vocab", term: "{{word:li3}}", ttsText: "里面" },
  proseWhere: { type: "prose" },
  exampleWhere1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:jia1}}.",
    ttsText: "我在家。",
  },
  exampleWhere2: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:fu4mu3}} {{word:zai4}} {{word:jia1}} {{word:ma}}?",
    ttsText: "你的父母在家吗？",
  },
  exampleWhere3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
    ttsText: "他在这里。",
  },
  exampleWhere4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:liu2}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
    ttsText: "他留在家里。",
  },
  exampleWhere5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ke3neng2}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
    ttsText: "她可能在家里。",
  },
  exampleWhere6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:you4}} {{word:zai4}} {{word:jia1}} {{word:le}}.",
    ttsText: "他又在家了。",
  },
  vocabNali: { type: "vocab", term: "{{word:na3li3}}", ttsText: "哪里" },
  proseWhereQuestion: { type: "prose" },
  exampleWhereQuestion1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "你在哪里？",
  },
  exampleWhereQuestion2: {
    type: "example",
    pinyin: "{{Word:he2zi}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "盒子在哪里？",
  },
  exampleWhereQuestion3: {
    type: "example",
    pinyin: "{{Word:zai4}} {{word:na4}}-{{word:li3}}.",
    ttsText: "在那里。",
  },
  vocabShang: { type: "vocab", term: "{{word:shang4}}", ttsText: "上面" },
  vocabXia: { type: "vocab", term: "{{word:xia4}}", ttsText: "下面" },
  vocabMian: { type: "vocab", term: "{{word:mian4}}", ttsText: "面" },
  vocabDi: { type: "vocab", term: "{{word:di4}}", ttsText: "地" },
  proseInOnUnder: { type: "prose" },
  exampleInOnUnder1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
    ttsText: "水在盒子里。",
  },
  exampleInOnUnder2: {
    type: "example",
    pinyin: "{{Word:gong1ju4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ttsText: "工具在地上。",
  },
  exampleInOnUnder3: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:zai4}} {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ttsText: "水果在盒子的下面。",
  },
  exampleInOnUnder4: {
    type: "example",
    pinyin: "{{Word:yi1fu}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
    ttsText: "衣服在家里。",
  },
  exampleInOnUnder5: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ttsText: "我的衣服在地上。",
  },
  exampleInOnUnder6: {
    type: "example",
    pinyin: "{{Word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}} {{word:you3}} {{word:shui3}}.",
    ttsText: "盒子的下面有水。",
  },
  exampleInOnUnder7: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:zai4}} {{word:shui3}}-{{word:li3}}.",
    ttsText: "我的脚在水里。",
  },
  vocabQian: { type: "vocab", term: "{{word:qian2}}", ttsText: "前" },
  vocabPang: { type: "vocab", term: "{{word:pang2}}", ttsText: "旁" },
  vocabBian: { type: "vocab", term: "{{word:bian1}}", ttsText: "边" },
  vocabPangbian: {
    type: "vocab",
    term: "{{word:pang2bian1}}",
    ttsText: "旁边",
  },
  vocabZuobian: { type: "vocab", term: "{{word:zuo3bian1}}", ttsText: "左边" },
  vocabYoubian: { type: "vocab", term: "{{word:you4bian1}}", ttsText: "右边" },
  proseSides: { type: "prose" },
  exampleSides1: {
    type: "example",
    pinyin: "{{Word:ren2}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
    ttsText: "人在我的前面。",
  },
  exampleSides2: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:zai4}} {{word:jia1}}-{{word:de}} {{word:hou4}}-{{word:mian4}}.",
    ttsText: "动物在家的后面。",
  },
  exampleSides3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
    ttsText: "我在你的旁边。",
  },
  exampleSides4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:li3}}-{{word:mian4}}.",
    ttsText: "她在里面。",
  },
  exampleSides5: {
    type: "example",
    pinyin: "{{Word:jia1}}-{{word:de}} {{word:qian2}}-{{word:mian4}} {{word:you3}} {{word:dong4wu4}}.",
    ttsText: "家的前面有动物。",
  },
  exampleSides6: {
    type: "example",
    pinyin: "{{Word:fu4mu3}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}.",
    ttsText: "父母在我的旁边。",
  },
  exampleSides7: {
    type: "example",
    pinyin: "{{Word:he2zi}} {{word:zai4}} {{word:na4}}-{{word:bian1}}.",
    ttsText: "盒子在那边。",
  },
  exampleSides8: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
    ttsText: "他在我的旁边。",
  },
  exampleSides9: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:zai4}} {{word:he2zi}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
    ttsText: "水果在盒子的旁边。",
  },
  exampleSides10: {
    type: "example",
    pinyin: "{{Word:he2zi}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}.",
    ttsText: "盒子在我的左边。",
  },
  exampleSides11: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:you4bian1}}.",
    ttsText: "他在你的右边。",
  },
  exampleSides12: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:zai4}} {{word:you4bian1}} {{word:ma}}?",
    ttsText: "水在右边吗？",
  },
  exampleSides13: {
    type: "example",
    pinyin: "{{Word:zuo3bian1}}-{{word:de}} {{word:he2zi}} {{word:hen3}} {{word:da4}}.",
    ttsText: "左边的盒子很大。",
  },
  infoWhereThingsAre: {
    type: "info",
    subtype: "grammar",
    tag: "place/where-and-sides",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我的工具在哪里？" },
  answer2: { type: "answer", ttsText: "水果在盒子里。" },
  answer3: { type: "answer", ttsText: "盒子在地上。" },
  answer4: { type: "answer", ttsText: "动物在盒子的下面。" },
  answer5: { type: "answer", ttsText: "我在你的前面。" },
  answer6: { type: "answer", ttsText: "她在我的旁边。" },
  answer7: { type: "answer", ttsText: "他在这边。" },
  answer8: { type: "answer", ttsText: "男人在家的旁边。" },
  answer9: { type: "answer", ttsText: "工具在左边。" },
  answer10: { type: "answer", ttsText: "我的家在右边。" },
  faqZaiSameWord: { type: "faq" },
  faqThingNeedsLi: { type: "faq" },
  faqLiOrLimian: { type: "faq" },
};

export default shape;
