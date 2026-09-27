// Language-independent block sequence for lesson-05 ("Verbs").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TInfo,
  TInfoItem,
  TExample,
  TExercise,
  TAnswer,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. Verbs */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "to have, contain, carry". */
  vocabYou: TVocab;
  /** Vocabulary: "to listen to, hear, obey". */
  vocabTing: TVocab;
  /** Vocabulary: "to eat, drink, consume; food". */
  vocabChi: TVocab;
  /** Vocabulary: "to make, do, work on". */
  vocabZuo: TVocab;
  /** Vocabulary: "to know". */
  vocabZhidao: TVocab;
  /** Vocabulary: "to talk, speak, communicate". */
  vocabShuo: TVocab;
  /** Vocabulary: "to rise, get up; begin". */
  vocabQi: TVocab;
  /** Vocabulary: "down, below, under". */
  vocabXia: TVocab;
  /** Vocabulary: "up, above, on". */
  vocabShang: TVocab;
  /** Vocabulary: "to come, arrive, happen". */
  vocabLai: TVocab;
  /** Vocabulary: "grammar particle". */
  vocabLe: TVocab;
  /** Vocabulary: "to pass, go through". */
  vocabGuo: TVocab;

  /** Verbs are a way to say what someone does or what happens. */
  proseVerbs: TProse;

  /** Grammar: verb is put after subject, the word next to it is the object or nothing. */
  proseWordOrderObject: TProse;

  /** Grammar: verbs carry no tense; le is equivalent to simple past in English*/
  proseLeCompletion: TProse;
  /** Grammar rule box: le. */
  infoCompletionMarker: TInfo & { items: [TInfoItem] };

  /** Grammar: 完，到，好 */
  completionMarkers: TProse;
  infoCompletionMarkers: TInfo & { items: [TInfoItem, TInfoItem, TInfoItem] };

  exampleCompletionMarker1: TExample;
  exampleCompletionMarker2: TExample;
  exampleCompletionMarker3: TExample;

  /** Grammar: directional complements qǐ/xià/shàng bind onto lái (or other verbs) via a hyphen. */
  proseDirectionalComplements: TProse;
  /** Grammar rule box: Directional Complements (qǐ-lái, xià-lái, shàng-lái). */
  infoDirectionalComplements: TInfo & {
    items: [TInfoItem, TInfoItem, TInfoItem];
  };

  /** Example: wǒ zhīdào hǎo shuō-de. */
  example1: TExample;
  /** Example: nà-ge nánrén shì shuō-de rén. */
  example2: TExample;
  /** Example: dà-de dòngwù zài chī nǐ. */
  example3: TExample;
  /** Example: qún-de xiě-de dōngxi hěn hǎo. */
  example4: TExample;
  /** Example: nǐ zuò le xīn-de chī. */
  example5: TExample;
  /** Example: zhīdào-de rén tīng. */
  example6: TExample;
  /** Example: zhīdào-de dìfāng yǒu xiě-de dōngxi. */
  example7: TExample;
  /** Example: tā shuō-qǐ Hǎo-shuō-de. */
  example8: TExample;

  /** Exercise 1: I will listen to you. */
  exercise1: TExercise;
  /** Exercise 2: The woman obeyed the man. */
  exercise2: TExercise;
  /** Exercise 3: The friends ate meat. */
  exercise3: TExercise;
  /** Exercise 4: She mentions the community. */
  exercise4: TExercise;

  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 3. */
  answer3: TAnswer;
  /** Answer 4. */
  answer4: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabYou: { type: "vocab", term: "{{word:you3}}", ttsText: "有" },
  vocabTing: { type: "vocab", term: "{{word:ting1}}", ttsText: "听" },
  vocabChi: { type: "vocab", term: "{{word:chi1}}", ttsText: "吃" },
  vocabZuo: { type: "vocab", term: "{{word:nong4}}", ttsText: "做" },
  vocabZhidao: { type: "vocab", term: "{{word:zhi1dao4}}", ttsText: "知道" },
  vocabShuo: { type: "vocab", term: "{{word:shuo1}}", ttsText: "说" },
  vocabQi: { type: "vocab", term: "{{word:qi3}}", ttsText: "起" },
  vocabXia: { type: "vocab", term: "{{word:xia4}}", ttsText: "下" },
  vocabShang: { type: "vocab", term: "{{word:shang4}}", ttsText: "上" },
  vocabLai: { type: "vocab", term: "{{word:lai2}}", ttsText: "来" },

  proseWordOrderObject: { type: "prose" },
  proseLeCompletion: { type: "prose" },
  infoCompletionMarker: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/aspect",
    items: [{}],
  },

  proseDirectionalComplements: { type: "prose" },
  infoDirectionalComplements: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/directional-complements",
    items: [{}, {}, {}],
  },

  example1: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:zhi1dao4}} {{word:hao3}} {{word:shuo1}}-{{word:de}}.",
    ttsText: "我知道好说的。",
  },
  example2: {
    type: "example",
    pinyin:
      "{{Word:na4}}-ge {{word:nan2ren2}} {{word:shi4}} {{word:shuo1}}-{{word:de}} {{word:ren2}}.",
    ttsText: "那个男人是说的人。",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:da4}}-{{word:de}} {{word:dong4wu4}} {{word:zai4}} {{word:chi1}} {{word:ni3}}.",
    ttsText: "大的动物在吃你。",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:qun2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "群的写的东西很好。",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:ni3}} {{word:nong4}} {{word:le}} {{word:xin1}}-{{word:de}} {{word:chi1}}.",
    ttsText: "你做了新的吃。",
  },
  example6: {
    type: "example",
    pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:ting1}}.",
    ttsText: "知道的人听。",
  },
  example7: {
    type: "example",
    pinyin:
      "{{Word:zhi1dao4}}-{{word:de}} {{word:di4fang1}} {{word:you3}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "知道的地方有写的东西。",
  },
  example8: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} Hǎo-shuō-de.",
    ttsText: "他说起好说的。",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },

  answer1: { type: "answer", ttsText: "我听你。" },
  answer2: { type: "answer", ttsText: "女人听了男人。" },
  answer3: { type: "answer", ttsText: "好的人吃了动物。" },
  answer4: { type: "answer", ttsText: "她说起群。" },
};

export default shape;
