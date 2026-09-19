// Language-independent block sequence for lesson-10 ("Greetings and Feelings").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "to feel, think". */
  { type: "vocab", term: "{{word:jue2de}}", ttsText: "觉得" },
  /** Vocabulary: "sound, noise" (bare pinyin -- not yet in the dictionary). */
  { type: "vocab", term: "shēngyīn" },
  /** Vocabulary: "to call, make an animal sound (used alongside the Quote Partition)". */
  { type: "vocab", term: "{{word:jiao4}}", ttsText: "叫" },
  /** Vocabulary: "sun, light". */
  { type: "vocab", term: "{{word:ri4}}", ttsText: "日" },

  /** Grammar: greetings/imperatives/blessings reuse ordinary sentence patterns instead of dedicated particles. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Greetings, Commands, and Blessings -- 4 patterns (greetings, imperatives, animal sounds, wishes). */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "expressions/greetings-and-wishes", items: [{}, {}, {}, {}] },

  /** Example: nǐ hǎo ma? */
  { type: "example", pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?" },
  /** Example: qù nǐ-de dìfāng! */
  { type: "example", pinyin: "{{Word:qu4}} {{word:ni3}}-{{word:de}} {{word:di4fang1}}!" },
  /** Example: bù shuō. Zuò dōngxi. */
  { type: "example", pinyin: "{{Word:bu4}} {{word:shuo1}}. {{Word:zuo4}} {{word:dong1xi}}." },
  /** Example: wǒ qù le. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:qu4}} {{word:le}}." },
  /** Example: nà-ge dòngwù jiào "wang-wang". */
  { type: "example", pinyin: '{{Word:na4}}-ge {{word:dong4wu4}} {{word:jiao4}} "wang-wang".' },
  /** Example: wèishénme nǐ juéde huài? */
  { type: "example", pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:jue2de}} {{word:huai4}}?" },
  /** Example: nǐ hěn dà! */
  { type: "example", pinyin: "{{Word:ni3}} {{word:hen3}} {{word:da4}}!" },
  /** Example: hǎo-hǎo-de rì! */
  { type: "example", pinyin: "{{Word:hao3}}-{{word:hao3}}-{{word:de}} {{word:ri4}}!" },
  /** Example: hǎo-hǎo juéde! */
  { type: "example", pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:jue2de}}!" },

  /** Exercise 1: Give the tool to me. */
  { type: "exercise" },
  /** Exercise 2: "Lisa" is happy. */
  { type: "exercise" },
  /** Exercise 3: Meow! */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
