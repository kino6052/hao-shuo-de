// Language-independent block sequence for lesson-16 ("Particles and Other Special Words").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Note: the original content used `{{word:ye3}}` ("also") in its examples
// without ever listing it in the vocab fence -- added here as a proper vocab
// entry, since its prose paragraph does formally introduce it.
// No exercise/answer section existed in the original -- none added here.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TInfo,
  TInfoItem,
  TExample,
} from "../../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "lowly, below, downward" (metaphorical sense of the Lesson 15 spatial noun). */
  vocabXiamian: TVocab;
  /** Vocabulary: "different, altered". */
  vocabButong: TVocab;
  /** Vocabulary: "and". */
  vocabHe: TVocab;
  /** Vocabulary: "cold, cool". */
  vocabLeng: TVocab;
  /** Vocabulary: "door, hole, opening" (bare pinyin -- not yet in the dictionary). */
  vocabDong: TVocab;
  /** Vocabulary: "to open, begin" (extends the Lesson 9 sense "to begin to, start to"). */
  vocabKaishi: TVocab;
  /** Vocabulary: "same, similar, sibling". */
  vocabYiyang: TVocab;
  /** Vocabulary: "sweet, fragrant". */
  vocabTian: TVocab;
  /** Vocabulary: "but, however". */
  vocabDanshi: TVocab;
  /** Vocabulary: "to, for, from the perspective of" (extends the Lesson 7 sense "to, for, give"). */
  vocabGei: TVocab;
  /** Vocabulary: "also" (sequences a second action/state on the same subject). */
  vocabYe: TVocab;
  /** Vocabulary: "God" (literally "love from above" -- a compound, not a dedicated word). */
  vocabShangdeAi: TVocab;

  /** Grammar: dui4...lai2shuo1 marks perspective, he2 connects subjects, ye3 sequences states on one subject. */
  proseDuiHeYe: TProse;
  /** Grammar rule box: Perspective and Connection -- dui4...lai2shuo1, he2, ye3. */
  infoPerspectiveConnection: TInfo & {
    items: [TInfoItem, TInfoItem, TInfoItem];
  };

  /** Example: duì wǒ lái shuō, tián-de dōngxi hěn hǎo. */
  example1: TExample;
  /** Example: duì shàngmiàn-de ài lái shuō, quánbù dìfāng hěn hǎo. */
  example2: TExample;
  /** Example: fùmǔ-de dìfāng hěn xiǎo, yě hěn lěng. */
  example3: TExample;
  /** Example: dànshì nánrén hé nǚrén zài zuò dōngxi, yě juéde hěn hǎo. */
  example4: TExample;
  /** Example: wǒ-de yīyàng-de nǚrén kāishǐ le dòng hào hé dòng hào-liǎng. */
  example5: TExample;
  /** Example: nǐ-de dìfāng shì hēisè-de, bù-shì bùtóng-de dìfāng. */
  example6: TExample;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabXiamian: { type: "vocab", term: "{{word:xia4}}", ttsText: "下面" },
  vocabButong: { type: "vocab", term: "{{word:bu4tong2}}", ttsText: "不同" },
  vocabHe: { type: "vocab", term: "{{word:he2}}", ttsText: "和" },
  vocabLeng: { type: "vocab", term: "{{word:leng3}}", ttsText: "冷" },
  vocabDong: { type: "vocab", term: "dòng" },
  vocabKaishi: { type: "vocab", term: "{{word:kai1shi3}}", ttsText: "开始" },
  vocabYiyang: { type: "vocab", term: "{{word:yi1yang4}}", ttsText: "一样" },
  vocabTian: { type: "vocab", term: "{{word:tian2}}", ttsText: "甜" },
  vocabDanshi: { type: "vocab", term: "{{word:dan4shi4}}", ttsText: "但是" },
  vocabGei: { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  vocabYe: { type: "vocab", term: "{{word:ye3}}", ttsText: "也" },
  vocabShangdeAi: {
    type: "vocab",
    term: "{{word:shang4}}-{{word:de}} {{word:ai4}}",
    ttsText: "上面的爱",
  },

  proseDuiHeYe: { type: "prose" },
  infoPerspectiveConnection: {
    type: "info",
    subtype: "grammar",
    tag: "sentences/perspective-and-connection",
    items: [{}, {}, {}],
  },

  example1: {
    type: "example",
    pinyin:
      "{{Word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, {{word:tian2}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}.",
  },
  example2: {
    type: "example",
    pinyin:
      "{{Word:dui4}} {{word:shang4}}-{{word:de}} {{word:ai4}} {{word:lai2}} {{word:shuo1}}, {{word:quan2bu4}} {{word:di4fang1}} {{word:hen3}} {{word:hao3}}.",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:fu4mu3}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xiao3}}, {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:dan4shi4}} {{word:nan2ren2}} {{word:he2}} {{word:nv3ren2}} {{word:zai4}} {{word:nong4}} {{word:dong1xi}}, {{word:ye3}} {{word:jue2de}} {{word:hen3}} {{word:hao3}}.",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:wo3}}-{{word:de}} {{word:yi1yang4}}-{{word:de}} {{word:nv3ren2}} {{word:kai1shi3}} {{word:le}} dòng {{word:hao4}} {{word:he2}} dòng {{word:hao4}}-{{word:liang3}}.",
  },
  example6: {
    type: "example",
    pinyin:
      "{{Word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}, {{word:bu4}}-{{word:shi4}} {{word:bu4tong2}}-{{word:de}} {{word:di4fang1}}.",
  },
};

export default shape;
