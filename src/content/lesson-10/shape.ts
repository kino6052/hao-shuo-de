// Language-independent block sequence for lesson-10 ("More Modifiers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Absorbs the old standalone "Prepositions" lesson (gěi/zài/yòng/yīnwèi) --
// see BOOK_STRUCTURE.md. Framed here as "words that specify a relationship"
// rather than "coverbs"/"prepositions", since Hao-shuo-de doesn't want to
// lean on that grammatical terminology to explain what these words let you
// say.
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

  // ---- absorbed from the old "Prepositions" lesson --------------------

  /** Vocabulary: "to, for, give". */
  vocabGei: TVocab;
  /** Vocabulary: "at, in, present, existing". */
  vocabZai: TVocab;
  /** Vocabulary: "using, with, by means of". */
  vocabYong: TVocab;
  /** Vocabulary: "from, because of". */
  vocabYinwei: TVocab;

  /** Grammar: some words specify a relationship (to/for, at/in, using, because of) and sit right before the main verb. */
  proseRelationshipWords: TProse;
  /** Grammar rule box: Relationship Word Order. */
  infoRelationshipWordOrder: TInfo & { items: [TInfoItem] };
  /** Grammar: with no other action verb, the relationship word itself becomes the main predicate. */
  proseWordAsPredicate: TProse;

  /** Example: wǒ gěi tā zài-shuǐ-lǐ-de dòngwù. */
  example9: TExample;
  /** Example: wǒ zài dìfāng gěi tā zài-shuǐ-lǐ-de dòngwù. */
  example10: TExample;
  /** Example: wǒ zài dìfāng. */
  example11: TExample;
  /** Example: wǒ qù nǐ-de pángbiān. */
  example12: TExample;
  /** Example: wǒ-de fùmǔ qù kàn hěn-dà-de shuǐ. */
  example13: TExample;
  /** Example: yīnwèi zhè-ge, wǒ nòng le hěn duō. */
  example14: TExample;
  /** Example: wǒ yòng Hǎo-shuō-de shuō. */
  example15: TExample;

  /** Exercise 5: The worker uses tools. */
  exercise5: TExercise;
  /** Exercise 6: He gives things from his house. */
  exercise6: TExercise;
  /** Exercise 7: Why did you do it? */
  exercise7: TExercise;

  /** Answer 5. */
  answer5: TAnswer;
  /** Answer 6. */
  answer6: TAnswer;
  /** Answer 7. */
  answer7: TAnswer;
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
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:nong4}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "你的做的很好。",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:gei3}} {{word:wo3}} {{word:li4liang4}}.",
    ttsText: "水给我力量。",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shi4}} {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}.",
    ttsText: "你是有力量的男人。",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "知道的人看写的东西。",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:xiao3}}-{{word:de}} {{word:nv3ren2}} méiyǒu {{word:hao3}}-{{word:de}} {{word:ting1}} {{word:fu4mu3}}.",
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
    pinyin: "{{Word:nan2ren2}}-{{word:de}} {{word:fu4mu3}} {{word:duo1}}-{{word:de}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
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

  vocabGei: { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  vocabZai: { type: "vocab", term: "{{word:zai4}}", ttsText: "在" },
  vocabYong: { type: "vocab", term: "{{word:yong4}}", ttsText: "用" },
  vocabYinwei: { type: "vocab", term: "{{word:yin1wei4}}", ttsText: "因为" },

  proseRelationshipWords: { type: "prose" },
  infoRelationshipWordOrder: {
    type: "info",
    subtype: "grammar",
    tag: "relationships/word-order",
    items: [{}],
  },
  proseWordAsPredicate: { type: "prose" },

  example9: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}.",
  },
  example10: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}.",
  },
  example11: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}}.",
  },
  example12: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
  },
  example13: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:fu4mu3}} {{word:qu4}} {{word:kan4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}}.",
  },
  example14: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:zhe4}}-ge, {{word:wo3}} {{word:nong4}} {{word:le}} {{word:hen3}} {{word:duo1}}.",
  },
  example15: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yong4}} Hǎo-shuō-de {{word:shuo1}}.",
  },

  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },

  answer5: { type: "answer" },
  answer6: { type: "answer" },
  answer7: { type: "answer" },
};

export default shape;
