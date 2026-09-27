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
  /** Vocabulary: negation word used only with you3 ("not have"). */
  vocabMei: TVocab;
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

  /** Verbs are a way to say what someone does or what happens. */
  proseVerbs: TProse;

  /** Example: wo3 chi1 dong1xi. */
  verbsExample1: TExample;
  /** Example: ta1 shuo1 Hao3-shuo1-de. */
  verbsExample2: TExample;
  /** Example: wo3 you3 shui3guo3. */
  verbsExample3: TExample;

  /** Verbs need a special word to be negated, not bu */
  proseVerbNegation: TProse;

  /** Example: wo3 mei2-you3 shui3guo3. */
  negationExample1: TExample;
  /** Example: wo3 bu4 chi1 dong1xi. */
  negationExample2: TExample;
  /** Example: ta1 mei2-you3 dong1xi. */
  negationExample3: TExample;

  /** Grammar: verb is put after subject, the word next to it is the object or nothing. */
  proseWordOrderObject: TProse;

  /** Example: wo3 zhi1dao4 ta1. */
  wordOrderExample1: TExample;
  /** Example: ta1 zhi1dao4 wo3. */
  wordOrderExample2: TExample;

  /** Vocabulary: "grammar particle". */
  vocabLe: TVocab;
  /** Vocabulary: "to pass, go through". */
  vocabGuo: TVocab;
  /** Vocabulary: "continuation" */
  vocabularyZai: TVocab;
  /** Vocabulary: "will, going to (future)". */
  vocabHui: TVocab;

  /** Grammar: verbs carry no tense themselves, need other words; le is equivalent to simple past in English */
  proseLeCompletion: TProse;
  /** Grammar rule box: le. */
  infoCompletionMarker: TInfo & { items: [TInfoItem] };

  /** Example: wo3 chi1 le. */
  leExample1: TExample;

  proseGuo: TProse; // present perfect analog
  /** Example: wo3 ting1-guo Hao3-shuo1-de. */
  guoExample1: TExample;

  proseZai: TProse; // present continuous analog
  /** Example: ta1 zai4 chi1 dong1xi. */
  zaiExample1: TExample;

  proseHui: TProse; // future analog
  /** Example: wo3 hui4 chi1 dong1xi. */
  huiExample1: TExample;

  /** Grammar: 完，到，好 */
  completionMarkers: TProse;
  infoCompletionMarkers: TInfo & { items: [TInfoItem, TInfoItem, TInfoItem] };

  exampleCompletionMarker1: TExample;
  exampleCompletionMarker2: TExample;
  exampleCompletionMarker3: TExample;

  /** Vocabulary: "to rise, get up; begin". */
  vocabQi: TVocab;
  /** Vocabulary: "down, below, under". */
  vocabXia: TVocab;
  /** Vocabulary: "up, above, on". */
  vocabShang: TVocab;
  /** Vocabulary: "to come, arrive, happen". */
  vocabLai: TVocab;

  /** Grammar: directional complements qǐ/xià/shàng bind onto lái (or other verbs) via a hyphen. */
  proseDirectionalComplements: TProse;
  /** Grammar rule box: Directional Complements (qǐ-lái, xià-lái, shàng-lái). */
  infoDirectionalComplements: TInfo & {
    items: [TInfoItem, TInfoItem, TInfoItem];
  };

  /** Example: ta1 shuo1-qi3 Hao3-shuo1-de. */
  directionalExample1: TExample;
  /** Example: wo3 xia4-lai2 le. */
  directionalExample2: TExample;
  /** Example: ta1 shang4-lai2 le. */
  directionalExample3: TExample;

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
  vocabMei: { type: "vocab", term: "{{word:mei2}}", ttsText: "没" },
  vocabTing: { type: "vocab", term: "{{word:ting1}}", ttsText: "听" },
  vocabChi: { type: "vocab", term: "{{word:chi1}}", ttsText: "吃" },
  vocabZuo: { type: "vocab", term: "{{word:nong4}}", ttsText: "弄" },
  vocabZhidao: { type: "vocab", term: "{{word:zhi1dao4}}", ttsText: "知道" },
  vocabShuo: { type: "vocab", term: "{{word:shuo1}}", ttsText: "说" },

  proseVerbs: { type: "prose" },

  verbsExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "我吃东西。",
  },
  verbsExample2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}} Hǎo-shuō-de.",
    ttsText: "他说好说的。",
  },
  verbsExample3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:shui3guo3}}.",
    ttsText: "我有水果。",
  },

  proseVerbNegation: { type: "prose" },

  negationExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:shui3guo3}}.",
    ttsText: "我没有水果。",
  },
  negationExample2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bu4}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "我不吃东西。",
  },
  negationExample3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:dong1xi}}.",
    ttsText: "他没有东西。",
  },

  proseWordOrderObject: { type: "prose" },

  wordOrderExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:ta1}}.",
    ttsText: "我知道他。",
  },
  wordOrderExample2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:wo3}}.",
    ttsText: "他知道我。",
  },

  vocabLe: { type: "vocab", term: "{{word:le}}", ttsText: "了" },
  vocabGuo: { type: "vocab", term: "guò" },
  vocabularyZai: { type: "vocab", term: "{{word:zai4}}", ttsText: "在" },
  vocabHui: { type: "vocab", term: "{{word:hui4}}", ttsText: "会" },

  proseLeCompletion: { type: "prose" },
  infoCompletionMarker: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/aspect",
    items: [{}],
  },

  leExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}}.",
    ttsText: "我吃了。",
  },

  proseGuo: { type: "prose" },
  guoExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-guò Hǎo-shuō-de.",
    ttsText: "我听过好说的。",
  },

  proseZai: { type: "prose" },
  zaiExample1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "他在吃东西。",
  },

  proseHui: { type: "prose" },
  huiExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hui4}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "我会吃东西。",
  },

  completionMarkers: { type: "prose" },
  infoCompletionMarkers: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/resultative-complements",
    items: [{}, {}, {}],
  },

  exampleCompletionMarker1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ttsText: "我吃完了。",
  },
  exampleCompletionMarker2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-dào {{word:le}}.",
    ttsText: "我听到了。",
  },
  exampleCompletionMarker3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:nong4}}-{{word:hao3}} {{word:le}}.",
    ttsText: "我弄好了。",
  },

  vocabQi: { type: "vocab", term: "{{word:qi3}}", ttsText: "起" },
  vocabXia: { type: "vocab", term: "{{word:xia4}}", ttsText: "下" },
  vocabShang: { type: "vocab", term: "{{word:shang4}}", ttsText: "上" },
  vocabLai: { type: "vocab", term: "{{word:lai2}}", ttsText: "来" },

  proseDirectionalComplements: { type: "prose" },
  infoDirectionalComplements: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/directional-complements",
    items: [{}, {}, {}],
  },

  directionalExample1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} Hǎo-shuō-de.",
    ttsText: "他说起好说的。",
  },
  directionalExample2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:xia4}}-{{word:lai2}} {{word:le}}.",
    ttsText: "我下来了。",
  },
  directionalExample3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shang4}}-{{word:lai2}} {{word:le}}.",
    ttsText: "他上来了。",
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
