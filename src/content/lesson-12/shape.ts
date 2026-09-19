// Language-independent block sequence for lesson-12 ("Colors and la").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "yellow". */
  { type: "vocab", term: "{{word:huang2se4}}", ttsText: "黄色" },
  /** Vocabulary: "blue, green". */
  { type: "vocab", term: "{{word:lan2se4}}", ttsText: "蓝色" },
  /** Vocabulary: "red". */
  { type: "vocab", term: "{{word:hong2se4}}", ttsText: "红色" },
  /** Vocabulary: "black, dark". */
  { type: "vocab", term: "{{word:hei1se4}}", ttsText: "黑色" },
  /** Vocabulary: "white, pale". */
  { type: "vocab", term: "{{word:bai2se4}}", ttsText: "白色" },

  /** Grammar: no la particle -- context/condition is a fronted clause followed by a comma. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Fronted Context Clause. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "sentences/fronted-context", items: [{}] },
  /** Grammar: colors are two-syllable adjectives, binding to their noun with -de like any other. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Example: zhè-ge hēisè-de shíjiān, tā lái. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:hei1se4}}-{{word:de}} {{word:shi2jian1}}, {{word:ta1}} {{word:lai2}}." },
  /** Example: nǐ kàn-jiàn huángsè-de shuǐ, bù chī tā. */
  { type: "example", pinyin: "{{Word:ni3}} {{word:kan4}}-jiàn {{word:huang2se4}}-{{word:de}} {{word:shui3}}, {{word:bu4}} {{word:chi1}} {{word:ta1}}." },
  /** Example: lánsè-de gōngjù zài báisè-de dìfāng. */
  { type: "example", pinyin: "{{Word:lan2se4}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}} {{word:bai2se4}}-{{word:de}} {{word:di4fang1}}." },
  /** Example: shénme shíjiān nǐ fùmǔ lái? */
  { type: "example", pinyin: "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:fu4mu3}} {{word:lai2}}?" },
  /** Example: wǒ-de shēntǐ biàn lánsè, zhè-ge hěn huài. */
  { type: "example", pinyin: "{{Word:wo3}}-{{word:de}} {{word:shen1ti3}} {{word:bian4}} {{word:lan2se4}}, {{word:zhe4}}-ge {{word:hen3}} {{word:huai4}}." },
  /** Example: hěn-duō-rén-de dìfāng, wǒ hé nǐ hé tā hěn yǒu lìliàng. */
  { type: "example", pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:di4fang1}}, {{word:wo3}} {{word:he2}} {{word:ni3}} {{word:he2}} {{word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}." },

  /** Exercise 1: When the sun is red, it is the right time. */
  { type: "exercise" },
  /** Exercise 2: If we don't have any meat, we will eat fruit. */
  { type: "exercise" },
  /** Exercise 3: I feel bad because of the large battle. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
