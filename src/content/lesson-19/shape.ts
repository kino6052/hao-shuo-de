// Language-independent block sequence for lesson-19 ("Relationships 1 — Inside a sentence").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): give / for (gěi), with (yòng), and / or (hé, huòzhě), and toward / for (duì), with qún, mō, dǎ.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-19).
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
  TInfo,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Relationships 1 — Inside a sentence */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "give; to, for". */
  vocabGei: TVocab;
  /** Vocabulary: "use; with". */
  vocabYong: TVocab;
  /** Vocabulary: "and (between nouns)". */
  vocabHe: TVocab;
  /** Vocabulary: "or". */
  vocabHuozhe: TVocab;
  /** Vocabulary: "toward, for". */
  vocabDui: TVocab;
  /** Vocabulary: "group". */
  vocabQun: TVocab;
  /** Vocabulary: "touch". */
  vocabMo: TVocab;
  /** Vocabulary: "hit". */
  vocabDa: TVocab;
  /** Say: To say you give something to someone, use gěi: the person first, then the thing. Pattern: Who + gěi + person + thing */
  proseGive: TProse;
  /** Example: gěi wǒ. */
  exampleGive1: TExample;
  /** Example: wǒ gěi nǐ shuǐ. */
  exampleGive2: TExample;
  /** Example: tā gěi wǒ yīfu. */
  exampleGive3: TExample;
  /** Example: wǒ gěi nǐ xiě. */
  exampleGive4: TExample;
  /** Say: To say what you do something with, put yòng and the thing before the verb. Pattern: Who + yòng + thing + verb */
  proseWith: TProse;
  /** Example: wǒ yòng gōngjù xiě. */
  exampleWith1: TExample;
  /** Example: tā yòng shǒu chī. */
  exampleWith2: TExample;
  /** Example: yòng shǒu mō. */
  exampleWith3: TExample;
  /** Example: tā yòng gùnzi dǎ. */
  exampleWith4: TExample;
  /** Example: wǒ yòng shǒu mō dòngwù. */
  exampleWith5: TExample;
  /** Example: bù yào yòng gùnzi dǎ dòngwù. */
  exampleWith6: TExample;
  /** Say: To join two nouns, put hé (and) or huòzhě (or) between them. Pattern: A + hé / huòzhě + B */
  proseAndOr: TProse;
  /** Example: nǐ hé wǒ. */
  exampleAndOr1: TExample;
  /** Example: wǒ hé tā qù shìchǎng. */
  exampleAndOr2: TExample;
  /** Example: wǒ yào zhè-ge huòzhě nà-ge. */
  exampleAndOr3: TExample;
  /** Example: chī shuǐguǒ huòzhě mǐfàn. */
  exampleAndOr4: TExample;
  /** Say: To say how someone is toward someone, put duì and the person before the describing word. Pattern: A + duì + B + describing word */
  proseToward: TProse;
  /** Example: tā duì wǒ hěn hǎo. */
  exampleToward1: TExample;
  /** Example: shuǐ duì zhíwù hěn hǎo. */
  exampleToward2: TExample;
  /** Example: duì wǒ lái shuō, zhè-ge hěn hǎo. */
  exampleToward3: TExample;
  /** Say: To talk about a group, use qún (group) in place of gè. Pattern: yī / zhè / nà + qún + noun */
  proseGroup: TProse;
  /** Example: yī-qún rén zài wài-miàn. */
  exampleGroup1: TExample;
  /** Example: nà-qún dòngwù hěn dà. */
  exampleGroup2: TExample;
  /** Example: wǒ gěi nà-qún rén shuǐ. */
  exampleGroup3: TExample;
  /** Grammar box: gěi, yòng, hé, huòzhě, duì. */
  infoInsideASentence: TInfo;
  /** Exercise 1: Give me the box. */
  exercise1: TExercise;
  /** Exercise 2: She writes with a stick. */
  exercise2: TExercise;
  /** Exercise 3: I want fruit and rice. */
  exercise3: TExercise;
  /** Exercise 4: this one or that one */
  exercise4: TExercise;
  /** Exercise 5: The sun is good for plants. */
  exercise5: TExercise;
  /** Exercise 6: a group of animals */
  exercise6: TExercise;
  /** Exercise 7: Don't hit him. */
  exercise7: TExercise;
  /** Exercise 8: Can I touch it? */
  exercise8: TExercise;
  /** Answer 1: gěi wǒ hézi. */
  answer1: TAnswer;
  /** Answer 2: tā yòng gùnzi xiě. */
  answer2: TAnswer;
  /** Answer 3: wǒ yào shuǐguǒ hé mǐfàn. */
  answer3: TAnswer;
  /** Answer 4: zhè-ge huòzhě nà-ge. */
  answer4: TAnswer;
  /** Answer 5: rì duì zhíwù hěn hǎo. */
  answer5: TAnswer;
  /** Answer 6: yī-qún dòngwù. */
  answer6: TAnswer;
  /** Answer 7: bù yào dǎ tā. */
  answer7: TAnswer;
  /** Answer 8: wǒ néng mō ma? */
  answer8: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabGei: { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  vocabYong: { type: "vocab", term: "{{word:yong4}}", ttsText: "用" },
  vocabHe: { type: "vocab", term: "{{word:he2}}", ttsText: "和" },
  vocabHuozhe: {
    type: "vocab",
    term: "{{word:huo4zhe3}}",
    ttsText: "或者",
  },
  vocabDui: { type: "vocab", term: "{{word:dui4}}", ttsText: "对" },
  vocabQun: { type: "vocab", term: "{{word:qun2}}", ttsText: "群" },
  vocabMo: { type: "vocab", term: "{{word:mo1}}", ttsText: "摸" },
  vocabDa: { type: "vocab", term: "{{word:da3}}", ttsText: "打" },
  proseGive: { type: "prose" },
  exampleGive1: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}}.",
    ttsText: "给我。",
  },
  exampleGive2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}.",
    ttsText: "我给你水。",
  },
  exampleGive3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:yi1fu}}.",
    ttsText: "她给我衣服。",
  },
  exampleGive4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:xie3}}.",
    ttsText: "我给你写。",
  },
  proseWith: { type: "prose" },
  exampleWith1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yong4}} {{word:gong1ju4}} {{word:xie3}}.",
    ttsText: "我用工具写。",
  },
  exampleWith2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}} {{word:chi1}}.",
    ttsText: "他用手吃。",
  },
  exampleWith3: {
    type: "example",
    pinyin: "{{Word:yong4}} {{word:shou3}} {{word:mo1}}.",
    ttsText: "用手摸。",
  },
  exampleWith4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:yong4}} {{word:gun4zi}} {{word:da3}}.",
    ttsText: "他用棍子打。",
  },
  exampleWith5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yong4}} {{word:shou3}} {{word:mo1}} {{word:dong4wu4}}.",
    ttsText: "我用手摸动物。",
  },
  exampleWith6: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:yong4}} {{word:gun4zi}} {{word:da3}} {{word:dong4wu4}}.",
    ttsText: "不要用棍子打动物。",
  },
  proseAndOr: { type: "prose" },
  exampleAndOr1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}}.",
    ttsText: "你和我。",
  },
  exampleAndOr2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:qu4}} {{word:shi4chang3}}.",
    ttsText: "我和他去市场。",
  },
  exampleAndOr3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge.",
    ttsText: "我要这个或者那个。",
  },
  exampleAndOr4: {
    type: "example",
    pinyin: "{{Word:chi1}} {{word:shui3guo3}} {{word:huo4zhe3}} {{word:mi3fan4}}.",
    ttsText: "吃水果或者米饭。",
  },
  proseToward: { type: "prose" },
  exampleToward1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "他对我很好。",
  },
  exampleToward2: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:dui4}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "水对植物很好。",
  },
  exampleToward3: {
    type: "example",
    pinyin: "{{Word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, {{word:zhe4}}-ge {{word:hen3}} {{word:hao3}}.",
    ttsText: "对我来说，这个很好。",
  },
  proseGroup: { type: "prose" },
  exampleGroup1: {
    type: "example",
    pinyin: "{{Word:yi1}}-{{word:qun2}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
    ttsText: "一群人在外面。",
  },
  exampleGroup2: {
    type: "example",
    pinyin: "{{Word:na4}}-{{word:qun2}} {{word:dong4wu4}} {{word:hen3}} {{word:da4}}.",
    ttsText: "那群动物很大。",
  },
  exampleGroup3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:gei3}} {{word:na4}}-{{word:qun2}} {{word:ren2}} {{word:shui3}}.",
    ttsText: "我给那群人水。",
  },
  infoInsideASentence: {
    type: "info",
    subtype: "grammar",
    tag: "relationships/inside-a-sentence",
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
  answer1: { type: "answer", ttsText: "给我盒子。" },
  answer2: { type: "answer", ttsText: "她用棍子写。" },
  answer3: { type: "answer", ttsText: "我要水果和米饭。" },
  answer4: { type: "answer", ttsText: "这个或者那个。" },
  answer5: { type: "answer", ttsText: "日对植物很好。" },
  answer6: { type: "answer", ttsText: "一群动物。" },
  answer7: { type: "answer", ttsText: "不要打他。" },
  answer8: { type: "answer", ttsText: "我能摸吗？" },
};

export default shape;
