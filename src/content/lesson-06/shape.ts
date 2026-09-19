// Language-independent block sequence for lesson-06 ("Questions and Answers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "tool, machine, device". */
  { type: "vocab", term: "{{word:gong1ju4}}", ttsText: "工具" },
  /** Vocabulary: "he, she, it, they". */
  { type: "vocab", term: "{{word:ta1}}", ttsText: "他" },
  /** Vocabulary: "or". */
  { type: "vocab", term: "{{word:huo4zhe3}}", ttsText: "或者" },
  /** Vocabulary: "what, which". */
  { type: "vocab", term: "{{word:shen2me}}", ttsText: "什么" },
  /** Vocabulary: "why". */
  { type: "vocab", term: "{{word:wei4shen2me}}", ttsText: "为什么" },
  /** Vocabulary: "how". */
  { type: "vocab", term: "{{word:zen3me}}", ttsText: "怎么" },

  /** Grammar: question words sit in-situ, exactly where the answer would go. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Callout: Yes-or-No Questions -- the ma particle and A-not-A reduplication. */
  { type: "info", hasTitle: true, items: [{ items: [{}, {}] }] },
  /** Grammar: answering yes/no by repeating (or negating) the verb. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Example: shénme shì xīn-de? */
  { type: "example", pinyin: "{{Word:shen2me}} {{word:shi4}} {{word:xin1}}-{{word:de}}?", ttsText: "什么是新的？" },
  /** Example: shénme rén zài shuō? */
  { type: "example", pinyin: "{{Word:shen2me}} {{word:ren2}} {{word:zai4}} {{word:shuo1}}?", ttsText: "什么人在说？" },
  /** Example: tā yǒu-méi-yǒu hěn-duō-de shuǐguǒ? */
  { type: "example", pinyin: "{{Word:ta1}} {{word:you3}}-méi-{{word:you3}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:shui3guo3}}?", ttsText: "他有没有很多的水果？" },
  /** Example: yǒu. */
  { type: "example", pinyin: "{{Word:you3}}.", ttsText: "有。" },
  /** Example: nǐ tīng-bù-tīng fùmǔ? */
  { type: "example", pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?", ttsText: "你听不听父母？" },
  /** Example: bù tīng. */
  { type: "example", pinyin: "{{Word:bu4}} {{word:ting1}}.", ttsText: "不听。" },
  /** Example: tā zài chī shénme? */
  { type: "example", pinyin: "{{Word:ta1}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?", ttsText: "它在吃什么？" },
  /** Example: nǐ gěi tā zài-shuǐ-lǐ-de dòngwù ma? */
  { type: "example", pinyin: "{{Word:ni3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}} {{word:ma}}?", ttsText: "你给她在水里的动物吗？" },
  /** Example: wèishénme nǐ gěi tā zài-shuǐ-lǐ-de dòngwù? */
  { type: "example", pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}?", ttsText: "为什么你给她在水里的动物？" },
  /** Example: nǐ zěnme bǎ Hǎo-shuō-de biàn zhīdào? */
  { type: "example", pinyin: "{{Word:ni3}} {{word:zen3me}} {{word:ba3}} Hǎo-shuō-de {{word:bian4}} {{word:zhi1dao4}}?", ttsText: "你怎么把好说的变知道？" },

  /** Exercise 1: What tools do you have? */
  { type: "exercise" },
  /** Exercise 2: Does he listen? */
  { type: "exercise" },
  /** Exercise 3: Is the tool small? */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer", ttsText: "你有什么工具？" },
  /** Answer 2. */
  { type: "answer", ttsText: "他听不听？（或：他听吗？）" },
  /** Answer 3. */
  { type: "answer", ttsText: "工具小不小？（或：工具小吗？）" },
];

export default shape;
