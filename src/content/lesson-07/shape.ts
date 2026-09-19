// Language-independent block sequence for lesson-07 ("More Modifiers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "not, no". */
  { type: "vocab", term: "{{word:bu4}}", ttsText: "不" },
  /** Vocabulary: "bad, negative, broken". */
  { type: "vocab", term: "{{word:huai4}}", ttsText: "坏" },
  /** Vocabulary: "many, a lot, very". */
  { type: "vocab", term: "{{word:duo1}}", ttsText: "多" },
  /** Vocabulary: "parent, ancestor". */
  { type: "vocab", term: "{{word:fu4mu3}}", ttsText: "父母" },
  /** Vocabulary: "one, united". */
  { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  /** Vocabulary: "power, energy". */
  { type: "vocab", term: "{{word:li4liang4}}", ttsText: "力量" },

  /** Grammar: "strong" is built by composing you3 + li4liang4, bound with -de. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Building an Adjective (word composition when the dictionary lacks one). */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "adjectives/composition", items: [{}] },

  /** Grammar: an adjective placed before another adjective or verb acts as an adverb. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Adjectives as Adverbs. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "adjectives/adverbial-use", items: [{}] },

  /** Grammar: le attached to an adjective marks a change of state (not simply "it is"). */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: State Change with le. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "adjectives/state-change", items: [{}] },
  /** Grammar rule box: The Causative Rule -- ba3...bian4 turns an adjective into a caused action. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "adjectives/causative", items: [{ items: [{}] }] },

  /** Example: nǐ-de zuò-de hěn hǎo. */
  { type: "example", pinyin: "{{Word:ni3}}-{{word:de}} {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:hao3}}.", ttsText: "你的做的很好。" },
  /** Example: shuǐ gěi wǒ lìliàng. */
  { type: "example", pinyin: "{{Word:shui3}} {{word:gei3}} {{word:wo3}} {{word:li4liang4}}.", ttsText: "水给我力量。" },
  /** Example: nǐ shì yǒu-lìliàng-de nánrén. */
  { type: "example", pinyin: "{{Word:ni3}} {{word:shi4}} {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}.", ttsText: "你是有力量的男人。" },
  /** Example: zhīdào-de rén kàn xiě-de dōngxi. */
  { type: "example", pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.", ttsText: "知道的人看写的东西。" },
  /** Example: xiǎo-de nǚrén méiyǒu hǎo-de tīng fùmǔ. */
  { type: "example", pinyin: "{{Word:xiao3}}-{{word:de}} {{word:nv3ren2}} méiyǒu {{word:hao3}}-{{word:de}} {{word:ting1}} {{word:fu4mu3}}.", ttsText: "小的女人没有好的听父母。" },
  /** Example: shuǐ hǎo le. */
  { type: "example", pinyin: "{{Word:shui3}} {{word:hao3}} {{word:le}}.", ttsText: "水好了。" },
  /** Example: méiyǒu rén shì huài-de. */
  { type: "example", pinyin: "Méiyǒu {{word:ren2}} {{word:shi4}} {{word:huai4}}-{{word:de}}.", ttsText: "没有人是坏的。" },
  /** Example: nánrén-de fùmǔ duō-de kàn xiě-de dōngxi. */
  { type: "example", pinyin: "{{Word:nan2ren2}}-{{word:de}} {{word:fu4mu3}} {{word:duo1}}-{{word:de}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.", ttsText: "男人的父母多的看写的东西。" },

  /** Exercise 1: The man doesn't eat bad fruit. */
  { type: "exercise" },
  /** Exercise 2: Eating makes me tall. */
  { type: "exercise" },
  /** Exercise 3: I know Hao-shuo-de a bit. */
  { type: "exercise" },
  /** Exercise 4: The community has become strong. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer", ttsText: "男人不吃坏的水果。" },
  /** Answer 2. */
  { type: "answer", ttsText: "吃把我变大。" },
  /** Answer 3. */
  { type: "answer", ttsText: "好说的，我知道的不多。" },
  /** Answer 4. */
  { type: "answer", ttsText: "群有力量了。" },
];

export default shape;
