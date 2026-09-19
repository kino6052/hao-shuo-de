// Language-independent block sequence for lesson-15 ("Proper Names & Geography").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "way, street, method, path". */
  { type: "vocab", term: "{{word:fang1fa3}}", ttsText: "方法" },
  /** Vocabulary: "name" (compound: "the word you're called"). */
  { type: "vocab", term: "{{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}}", ttsText: "你叫的词" },
  /** Vocabulary: "to fight, battle, compete against". */
  { type: "vocab", term: "{{word:da3}}", ttsText: "打" },

  /** Grammar: proper names are quoted, and behave as adjectives placed before the noun they identify. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Proper Names as Adjectives. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "nouns/proper-names", items: [{ items: [{}, {}, {}] }] },

  /** Example: wǒ-de nǐ-jiào-de cí shì "Apu". */
  { type: "example", pinyin: '{{Word:wo3}}-{{word:de}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}} {{word:shi4}} "Apu".' },
  /** Example: "Afeililiya" dìfāng yǒu hěn-duō rén. */
  { type: "example", pinyin: '"Afeililiya" {{word:di4fang1}} {{word:you3}} {{word:hen3}}-{{word:duo1}} {{word:ren2}}.' },
  /** Example: "Zhongguo" nǚrén qù nà-ge dìfāng. */
  { type: "example", pinyin: '"Zhongguo" {{word:nv3ren2}} {{word:qu4}} {{word:na4}}-ge {{word:di4fang1}}.' },
  /** Example: "Belin" dìfāng zài "Deguo" dìfāng. */
  { type: "example", pinyin: '"Belin" {{word:di4fang1}} {{word:zai4}} "Deguo" {{word:di4fang1}}.' },
  /** Example: nǐ zhīdào-bù-zhīdào "Yingyu"? */
  { type: "example", pinyin: '{{Word:ni3}} {{word:zhi1dao4}}-{{word:bu4}}-{{word:zhi1dao4}} "Yingyu"?' },
  /** Example: "Sulu" nánrén dǎ huài-rén. */
  { type: "example", pinyin: '"Sulu" {{word:nan2ren2}} {{word:da3}} {{word:huai4}}-{{word:ren2}}.' },
  /** Example: zhè-ge hěn-duō-rén-de-dìfāng hěn dà. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}}-{{word:di4fang1}} {{word:hen3}} {{word:da4}}." },

  /** Exercise 1: Are you from Germany? */
  { type: "exercise" },
  /** Exercise 2: What is your name? */
  { type: "exercise" },
  /** Exercise 3: I am going to England. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
