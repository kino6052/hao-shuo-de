// Language-independent block sequence for lesson-06 ("Questions and Answers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { TTitle, TSummary, TVocab, TProse, TInfo, TInfoItem, TExample, TExercise, TAnswer } from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "tool, machine, device". */
  vocabGongju: TVocab;
  /** Vocabulary: "he, she, it, they". */
  vocabTa: TVocab;
  /** Vocabulary: "or". */
  vocabHuozhe: TVocab;
  /** Vocabulary: "what, which". */
  vocabShenme: TVocab;
  /** Vocabulary: "why". */
  vocabWeishenme: TVocab;
  /** Vocabulary: "how". */
  vocabZenme: TVocab;

  /** Grammar: question words sit in-situ, exactly where the answer would go. */
  proseQuestionWordsInSitu: TProse;
  /** Callout: Yes-or-No Questions -- the ma particle and A-not-A reduplication. */
  infoYesNoQuestions: TInfo & { items: [TInfoItem & { items: [TInfoItem, TInfoItem] }] };
  /** Grammar: answering yes/no by repeating (or negating) the verb. */
  proseAnsweringYesNo: TProse;

  /** Example: shénme shì xīn-de? */
  example1: TExample;
  /** Example: shénme rén zài shuō? */
  example2: TExample;
  /** Example: tā yǒu-méi-yǒu hěn-duō-de shuǐguǒ? */
  example3: TExample;
  /** Example: yǒu. */
  example4: TExample;
  /** Example: nǐ tīng-bù-tīng fùmǔ? */
  example5: TExample;
  /** Example: bù tīng. */
  example6: TExample;
  /** Example: tā zài chī shénme? */
  example7: TExample;
  /** Example: nǐ gěi tā zài-shuǐ-lǐ-de dòngwù ma? */
  example8: TExample;
  /** Example: wèishénme nǐ gěi tā zài-shuǐ-lǐ-de dòngwù? */
  example9: TExample;
  /** Example: nǐ zěnme bǎ Hǎo-shuō-de biàn zhīdào? */
  example10: TExample;

  /** Exercise 1: What tools do you have? */
  exercise1: TExercise;
  /** Exercise 2: Does he listen? */
  exercise2: TExercise;
  /** Exercise 3: Is the tool small? */
  exercise3: TExercise;

  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 3. */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabGongju: { type: "vocab", term: "{{word:gong1ju4}}", ttsText: "工具" },
  vocabTa: { type: "vocab", term: "{{word:ta1}}", ttsText: "他" },
  vocabHuozhe: { type: "vocab", term: "{{word:huo4zhe3}}", ttsText: "或者" },
  vocabShenme: { type: "vocab", term: "{{word:shen2me}}", ttsText: "什么" },
  vocabWeishenme: { type: "vocab", term: "{{word:wei4shen2me}}", ttsText: "为什么" },
  vocabZenme: { type: "vocab", term: "{{word:zen3me}}", ttsText: "怎么" },

  proseQuestionWordsInSitu: { type: "prose" },
  infoYesNoQuestions: { type: "info", items: [{ items: [{}, {}] }] },
  proseAnsweringYesNo: { type: "prose" },

  example1: { type: "example", pinyin: "{{Word:shen2me}} {{word:shi4}} {{word:xin1}}-{{word:de}}?", ttsText: "什么是新的？" },
  example2: { type: "example", pinyin: "{{Word:shen2me}} {{word:ren2}} {{word:zai4}} {{word:shuo1}}?", ttsText: "什么人在说？" },
  example3: { type: "example", pinyin: "{{Word:ta1}} {{word:you3}}-méi-{{word:you3}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:shui3guo3}}?", ttsText: "他有没有很多的水果？" },
  example4: { type: "example", pinyin: "{{Word:you3}}.", ttsText: "有。" },
  example5: { type: "example", pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?", ttsText: "你听不听父母？" },
  example6: { type: "example", pinyin: "{{Word:bu4}} {{word:ting1}}.", ttsText: "不听。" },
  example7: { type: "example", pinyin: "{{Word:ta1}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?", ttsText: "它在吃什么？" },
  example8: { type: "example", pinyin: "{{Word:ni3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}} {{word:ma}}?", ttsText: "你给她在水里的动物吗？" },
  example9: { type: "example", pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}?", ttsText: "为什么你给她在水里的动物？" },
  example10: { type: "example", pinyin: "{{Word:ni3}} {{word:zen3me}} {{word:ba3}} Hǎo-shuō-de {{word:bian4}} {{word:zhi1dao4}}?", ttsText: "你怎么把好说的变知道？" },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer", ttsText: "你有什么工具？" },
  answer2: { type: "answer", ttsText: "他听不听？（或：他听吗？）" },
  answer3: { type: "answer", ttsText: "工具小不小？（或：工具小吗？）" },
};

export default shape;
