// Language-independent block sequence for lesson-16 ("Modification Stacking").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "plant, vegetation". */
  { type: "vocab", term: "{{word:zhi2wu4}}", ttsText: "植物" },
  /** Vocabulary: "body, physical state". */
  { type: "vocab", term: "{{word:shen1ti3}}", ttsText: "身体" },
  /** Vocabulary: "time, duration". */
  { type: "vocab", term: "{{word:shi2jian1}}", ttsText: "时间" },
  /** Vocabulary: "to wait". */
  { type: "vocab", term: "{{word:deng3}}", ttsText: "等" },

  /** Grammar: -de stacks a chain of modifiers before the noun, no separate re-grouping particle needed. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Modifier Stacking. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "modifiers/stacking", items: [{}] },

  /** Example: zhè-ge rì hěn hǎo. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:ri4}} {{word:hen3}} {{word:hao3}}." },
  /** Example: hěn-hǎo-de nǚrén gěi zhíwù shuǐ. */
  { type: "example", pinyin: "{{Word:hen3}}-{{word:hao3}}-{{word:de}} {{word:nv3ren2}} {{word:gei3}} {{word:zhi2wu4}} {{word:shui3}}." },
  /** Example: Hǎo-shuō-de-de qún gěi hěn-duō-de dōngxi. */
  { type: "example", pinyin: "Hǎo-shuō-de-{{word:de}} {{word:qun2}} {{word:gei3}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:dong1xi}}." },
  /** Example: děng hěn-cháng-de shíjiān. */
  { type: "example", pinyin: "{{Word:deng3}} {{word:hen3}}-cháng-{{word:de}} {{word:shi2jian1}}." },
  /** Example: bù yòng huài-de gōngjù. */
  { type: "example", pinyin: "{{Word:bu4}} {{word:yong4}} {{word:huai4}}-{{word:de}} {{word:gong1ju4}}." },

  /** Exercise 1: This battlefield is small. */
  { type: "exercise" },
  /** Exercise 2: Men with strong bodies were waiting. */
  { type: "exercise" },
  /** Exercise 3: The sun gives benefit to the plants. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
