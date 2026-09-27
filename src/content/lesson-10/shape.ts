// Language-independent block sequence for lesson-10 ("More Modifiers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TInfo,
  TInfoItem,
  TExample,
  TExercise,
  TAnswer,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "not, no". */
  vocabBu: TVocab;
  /** Vocabulary: "bad, negative, broken". */
  vocabHuai: TVocab;
  /** Vocabulary: "many, a lot, very". */
  vocabDuo: TVocab;
  /** Vocabulary: "parent, ancestor". */
  vocabFumu: TVocab;
  /** Vocabulary: "one, united". */
  vocabYi: TVocab;
  /** Vocabulary: "power, energy". */
  vocabLiliang: TVocab;

  /** Grammar: "strong" is built by composing you3 + li4liang4, bound with -de. */
  proseBuildingAdjective: TProse;
  /** Grammar rule box: Building an Adjective (word composition when the dictionary lacks one). */
  infoBuildingAdjective: TInfo & { items: [TInfoItem] };

  /** Grammar: an adjective placed before another adjective or verb acts as an adverb. */
  proseAdjectivesAsAdverbs: TProse;
  /** Grammar rule box: Adjectives as Adverbs. */
  infoAdjectivesAsAdverbs: TInfo & { items: [TInfoItem] };

  /** Grammar: le attached to an adjective marks a change of state (not simply "it is"). */
  proseStateChange: TProse;
  /** Grammar rule box: State Change with le. */
  infoStateChange: TInfo & { items: [TInfoItem] };
  /** Grammar rule box: The Causative Rule -- ba3...bian4 turns an adjective into a caused action. */
  infoCausative: TInfo & { items: [TInfoItem & { items: [TInfoItem] }] };

  /** Example: nǐ-de zuò-de hěn hǎo. */
  example1: TExample;
  /** Example: shuǐ gěi wǒ lìliàng. */
  example2: TExample;
  /** Example: nǐ shì yǒu-lìliàng-de nánrén. */
  example3: TExample;
  /** Example: zhīdào-de rén kàn xiě-de dōngxi. */
  example4: TExample;
  /** Example: xiǎo-de nǚrén méiyǒu hǎo-de tīng fùmǔ. */
  example5: TExample;
  /** Example: shuǐ hǎo le. */
  example6: TExample;
  /** Example: méiyǒu rén shì huài-de. */
  example7: TExample;
  /** Example: nánrén-de fùmǔ duō-de kàn xiě-de dōngxi. */
  example8: TExample;

  /** Exercise 1: The man doesn't eat bad fruit. */
  exercise1: TExercise;
  /** Exercise 2: Eating makes me tall. */
  exercise2: TExercise;
  /** Exercise 3: I know Hao-shuo-de a bit. */
  exercise3: TExercise;
  /** Exercise 4: The community has become strong. */
  exercise4: TExercise;

  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 3. */
  answer3: TAnswer;
  /** Answer 4. */
  answer4: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabBu: { type: "vocab", term: "{{word:bu4}}", ttsText: "不" },
  vocabHuai: { type: "vocab", term: "{{word:huai4}}", ttsText: "坏" },
  vocabDuo: { type: "vocab", term: "{{word:duo1}}", ttsText: "多" },
  vocabFumu: { type: "vocab", term: "{{word:fu4mu3}}", ttsText: "父母" },
  vocabYi: { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  vocabLiliang: { type: "vocab", term: "{{word:li4liang4}}", ttsText: "力量" },

  proseBuildingAdjective: { type: "prose" },
  infoBuildingAdjective: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/composition",
    items: [{}],
  },

  proseAdjectivesAsAdverbs: { type: "prose" },
  infoAdjectivesAsAdverbs: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/adverbial-use",
    items: [{}],
  },

  proseStateChange: { type: "prose" },
  infoStateChange: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/state-change",
    items: [{}],
  },
  infoCausative: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/causative",
    items: [{ items: [{}] }],
  },

  example1: {
    type: "example",
    pinyin:
      "{{Word:ni3}}-{{word:de}} {{word:nong4}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "你的做的很好。",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:gei3}} {{word:wo3}} {{word:li4liang4}}.",
    ttsText: "水给我力量。",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:ni3}} {{word:shi4}} {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}.",
    ttsText: "你是有力量的男人。",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "知道的人看写的东西。",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:xiao3}}-{{word:de}} {{word:nv3ren2}} méiyǒu {{word:hao3}}-{{word:de}} {{word:ting1}} {{word:fu4mu3}}.",
    ttsText: "小的女人没有好的听父母。",
  },
  example6: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hao3}} {{word:le}}.",
    ttsText: "水好了。",
  },
  example7: {
    type: "example",
    pinyin: "Méiyǒu {{word:ren2}} {{word:shi4}} {{word:huai4}}-{{word:de}}.",
    ttsText: "没有人是坏的。",
  },
  example8: {
    type: "example",
    pinyin:
      "{{Word:nan2ren2}}-{{word:de}} {{word:fu4mu3}} {{word:duo1}}-{{word:de}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "男人的父母多的看写的东西。",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },

  answer1: { type: "answer", ttsText: "男人不吃坏的水果。" },
  answer2: { type: "answer", ttsText: "吃把我变大。" },
  answer3: { type: "answer", ttsText: "好说的，我知道的不多。" },
  answer4: { type: "answer", ttsText: "群有力量了。" },
};

export default shape;
