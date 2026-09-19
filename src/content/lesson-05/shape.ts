// Language-independent block sequence for lesson-05 ("Verbs").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "to have, contain, carry". */
  { type: "vocab", term: "{{word:you3}}", ttsText: "有" },
  /** Vocabulary: "to listen to, hear, obey". */
  { type: "vocab", term: "{{word:ting1}}", ttsText: "听" },
  /** Vocabulary: "to eat, drink, consume; food". */
  { type: "vocab", term: "{{word:chi1}}", ttsText: "吃" },
  /** Vocabulary: "to make, do, work on". */
  { type: "vocab", term: "{{word:zuo4}}", ttsText: "做" },
  /** Vocabulary: "to know". */
  { type: "vocab", term: "{{word:zhi1dao4}}", ttsText: "知道" },
  /** Vocabulary: "to talk, speak, communicate". */
  { type: "vocab", term: "{{word:shuo1}}", ttsText: "说" },
  /** Vocabulary: "to rise, get up; begin". */
  { type: "vocab", term: "{{word:qi3}}", ttsText: "起" },
  /** Vocabulary: "down, below, under". */
  { type: "vocab", term: "{{word:xia4}}", ttsText: "下" },
  /** Vocabulary: "up, above, on". */
  { type: "vocab", term: "{{word:shang4}}", ttsText: "上" },
  /** Vocabulary: "to come, arrive, happen". */
  { type: "vocab", term: "{{word:lai2}}", ttsText: "来" },

  /** Grammar: word order alone marks the object, no marker particle needed. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: No Object Marker Needed (SVO). */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "verbs/word-order", items: [{}] },

  /** Grammar: verbs carry no tense; le marks completion, not simply "the past". */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: The Completion Marker le. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "verbs/aspect", items: [{}] },

  /** Grammar: words shift between verb/noun roles by position, e.g. chī vs chī-de-dōngxi. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: One Word, Several Jobs. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "words/category-flexibility", items: [{}] },

  /** Grammar: directional complements qǐ/xià/shàng bind onto lái (or other verbs) via a hyphen. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Directional Complements (qǐ-lái, xià-lái, shàng-lái). */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "verbs/directional-complements", items: [{}, {}, {}] },

  /** Example: wǒ zhīdào hǎo shuō-de. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:hao3}} {{word:shuo1}}-{{word:de}}.", ttsText: "我知道好说的。" },
  /** Example: nà-ge nánrén shì shuō-de rén. */
  { type: "example", pinyin: "{{Word:na4}}-ge {{word:nan2ren2}} {{word:shi4}} {{word:shuo1}}-{{word:de}} {{word:ren2}}.", ttsText: "那个男人是说的人。" },
  /** Example: dà-de dòngwù zài chī nǐ. */
  { type: "example", pinyin: "{{Word:da4}}-{{word:de}} {{word:dong4wu4}} {{word:zai4}} {{word:chi1}} {{word:ni3}}.", ttsText: "大的动物在吃你。" },
  /** Example: qún-de xiě-de dōngxi hěn hǎo. */
  { type: "example", pinyin: "{{Word:qun2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}.", ttsText: "群的写的东西很好。" },
  /** Example: nǐ zuò le xīn-de chī. */
  { type: "example", pinyin: "{{Word:ni3}} {{word:zuo4}} {{word:le}} {{word:xin1}}-{{word:de}} {{word:chi1}}.", ttsText: "你做了新的吃。" },
  /** Example: zhīdào-de rén tīng. */
  { type: "example", pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:ting1}}.", ttsText: "知道的人听。" },
  /** Example: zhīdào-de dìfāng yǒu xiě-de dōngxi. */
  { type: "example", pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:di4fang1}} {{word:you3}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.", ttsText: "知道的地方有写的东西。" },
  /** Example: tā shuō-qǐ Hǎo-shuō-de. */
  { type: "example", pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} Hǎo-shuō-de.", ttsText: "他说起好说的。" },

  /** Exercise 1: I will listen to you. */
  { type: "exercise" },
  /** Exercise 2: The woman obeyed the man. */
  { type: "exercise" },
  /** Exercise 3: The friends ate meat. */
  { type: "exercise" },
  /** Exercise 4: She mentions the community. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer", ttsText: "我听你。" },
  /** Answer 2. */
  { type: "answer", ttsText: "女人听了男人。" },
  /** Answer 3. */
  { type: "answer", ttsText: "好的人吃了动物。" },
  /** Answer 4. */
  { type: "answer", ttsText: "她说起群。" },
];

export default shape;
