// Language-independent block sequence for lesson-09 ("Pre-Verbs & Auxiliaries").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "to want, need, must, should". */
  { type: "vocab", term: "{{word:yao4}}", ttsText: "要" },
  /** Vocabulary: "can, may, be able to" (bare pinyin -- not yet in the dictionary). */
  { type: "vocab", term: "kěyǐ" },
  /** Vocabulary: "to know, know how to". */
  { type: "vocab", term: "{{word:zhi1dao4}}", ttsText: "知道" },
  /** Vocabulary: "to begin to, start to, manage to". */
  { type: "vocab", term: "{{word:kai1shi3}}", ttsText: "开始" },
  /** Vocabulary: "to become, change into". */
  { type: "vocab", term: "{{word:bian4}}", ttsText: "变" },

  /** Grammar: auxiliary verbs (intent/ability/change) sit right before the main predicate. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Auxiliary Verb Word Order. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "verbs/auxiliaries", items: [{}] },
  /** Grammar: bian4 steps directly into the main verb slot for a state change; kaishi3 marks a gradual/starting change. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: bian4 vs kaishi3. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "verbs/change-and-onset", items: [{}, {}] },

  /** Example: dìfāng biàn dà. */
  { type: "example", pinyin: "{{Word:di4fang1}} {{word:bian4}} {{word:da4}}." },
  /** Example: wǒ kāishǐ zhīdào Hǎo-shuō-de. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:kai1shi3}} {{word:zhi1dao4}} Hǎo-shuō-de." },
  /** Example: nǐ kěyǐ-bù-kěyǐ lái? */
  { type: "example", pinyin: "{{Word:ni3}} kěyǐ-{{word:bu4}}-kěyǐ {{word:lai2}}?" },
  /** Example: shuǐguǒ biàn huài le. */
  { type: "example", pinyin: "{{Word:shui3guo3}} {{word:bian4}} {{word:huai4}} {{word:le}}." },
  /** Example: wǒ yào liú zài wǒ fùmǔ-de dìfāng. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:yao4}} {{word:liu2}} {{word:zai4}} {{word:wo3}} {{word:fu4mu3}}-{{word:de}} {{word:di4fang1}}." },
  /** Example: zhíwù kāishǐ yǒu shuǐ. */
  { type: "example", pinyin: "{{Word:zhi2wu4}} {{word:kai1shi3}} {{word:you3}} {{word:shui3}}." },

  /** Exercise 1: You may keep your name. */
  { type: "exercise" },
  /** Exercise 2: The path becomes narrow. */
  { type: "exercise" },
  /** Exercise 3: Do you want to eat some fish? */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
