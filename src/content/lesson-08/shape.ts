// Language-independent block sequence for lesson-08 ("Prepositions & Coverbs").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "to, for, give". */
  { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  /** Vocabulary: "at, in, present, existing". */
  { type: "vocab", term: "{{word:zai4}}", ttsText: "在" },
  /** Vocabulary: "using, with, by means of". */
  { type: "vocab", term: "{{word:yong4}}", ttsText: "用" },
  /** Vocabulary: "from, because of". */
  { type: "vocab", term: "{{word:yin1wei4}}", ttsText: "因为" },

  /** Grammar: coverbs introduce a noun phrase and sit right before the main verb. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Coverb Word Order. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "coverbs/word-order", items: [{}] },
  /** Grammar: with no other action verb, the coverb itself becomes the main predicate. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Example: wǒ gěi tā zài-shuǐ-lǐ-de dòngwù. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}." },
  /** Example: wǒ zài dìfāng gěi tā zài-shuǐ-lǐ-de dòngwù. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}." },
  /** Example: wǒ zài dìfāng. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}}." },
  /** Example: wǒ qù nǐ-de pángbiān. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:qu4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}." },
  /** Example: wǒ-de fùmǔ qù kàn hěn-dà-de shuǐ. */
  { type: "example", pinyin: "{{Word:wo3}}-{{word:de}} {{word:fu4mu3}} {{word:qu4}} {{word:kan4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}}." },
  /** Example: yīnwèi zhè-ge, wǒ zuò le hěn duō. */
  { type: "example", pinyin: "{{Word:yin1wei4}} {{word:zhe4}}-ge, {{word:wo3}} {{word:zuo4}} {{word:le}} {{word:hen3}} {{word:duo1}}." },
  /** Example: wǒ yòng Hǎo-shuō-de shuō. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:yong4}} Hǎo-shuō-de {{word:shuo1}}." },

  /** Exercise 1: The worker uses tools. */
  { type: "exercise" },
  /** Exercise 2: He gives things from his house. */
  { type: "exercise" },
  /** Exercise 3: Why did you do it? */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
