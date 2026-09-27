// Language-independent block sequence for lesson-15 ("Spatial Nouns").
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
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "inside, between, internal organ". */
  vocabLimian: TVocab;
  /** Vocabulary: "area behind, back". */
  vocabHoumian: TVocab;
  /** Vocabulary: "area below, under, lower part, leg". */
  vocabXiamian: TVocab;
  /** Vocabulary: "side, area beside, vicinity". */
  vocabPangbian: TVocab;
  /** Vocabulary: "area above, highest part, sky". */
  vocabShangmian: TVocab;
  /** Vocabulary: "area in front, face, chest". */
  vocabQianmian: TVocab;
  /** Vocabulary: "to go to, arrive at, move towards" (bare pinyin -- not yet in the dictionary). */
  vocabDao: TVocab;
  /** Vocabulary: "to walk, move, travel". */
  vocabQu: TVocab;

  /** Grammar: zai4 marks static location, dào marks movement toward a destination. */
  proseZaiVsDao: TProse;
  /** Grammar rule box: Spatial Location -- Subject + zai4/dào + Target + Spatial Noun, plus the zai4-qu4-dào compound and standalone spatial nouns. */
  infoSpatialLocation: TInfo & { items: [TInfoItem, TInfoItem, TInfoItem] };

  /** Example: wǒ zài nǐ-de pángbiān. */
  example1: TExample;
  /** Example: xiàmiàn-de dìfāng hěn yǒu lìliàng. */
  example2: TExample;
  /** Example: dà-de gōngjù zài-qù-dào shàngmiàn-de dìfāng. */
  example3: TExample;
  /** Example: xiě-de dōngxi zài dòngwù-de xiàmiàn. */
  example4: TExample;
  /** Example: wǒ kàn-jiàn hēisè-de nǚrén zài dìfāng-de qiánmiàn. */
  example5: TExample;
  /** Example: yánsè dōngxi zài hēisè-de pángbiān. */
  example6: TExample;

  /** Exercise 1: Water is coming from the sky. */
  exercise1: TExercise;
  /** Exercise 2: Protect your back. */
  exercise2: TExercise;
  /** Exercise 3: What did you put the red clock next to? */
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

  vocabLimian: { type: "vocab", term: "{{word:li3}}", ttsText: "里面" },
  vocabHoumian: { type: "vocab", term: "{{word:hou4}}", ttsText: "后面" },
  vocabXiamian: { type: "vocab", term: "{{word:xia4}}", ttsText: "下面" },
  vocabPangbian: {
    type: "vocab",
    term: "{{word:pang2bian1}}",
    ttsText: "旁边",
  },
  vocabShangmian: { type: "vocab", term: "{{word:shang4}}", ttsText: "上面" },
  vocabQianmian: {
    type: "vocab",
    term: "{{word:qian2}}",
    ttsText: "前面",
  },
  vocabDao: { type: "vocab", term: "dào" },
  vocabQu: { type: "vocab", term: "{{word:qu4}}", ttsText: "去" },

  proseZaiVsDao: { type: "prose" },
  infoSpatialLocation: {
    type: "info",
    subtype: "grammar",
    tag: "nouns/spatial",
    items: [{}, {}, {}],
  },

  example1: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
  },
  example2: {
    type: "example",
    pinyin:
      "{{Word:xia4}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:da4}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}}-{{word:qu4}}-dào {{word:shang4}}-{{word:de}} {{word:di4fang1}}.",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:zai4}} {{word:dong4wu4}}-{{word:de}} {{word:xia4}}.",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:kan4}}-jiàn {{word:hei1se4}}-{{word:de}} {{word:nv3ren2}} {{word:zai4}} {{word:di4fang1}}-{{word:de}} {{word:qian2}}.",
  },
  example6: {
    type: "example",
    pinyin:
      "{{Word:yan2}}-sè {{word:dong1xi}} {{word:zai4}} {{word:hei1se4}}-{{word:de}} {{word:pang2bian1}}.",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
