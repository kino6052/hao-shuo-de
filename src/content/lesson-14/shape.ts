// Language-independent block sequence for lesson-14 ("Particles and Other Special Words").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Note: the original content used `{{word:ye3}}` ("also") in its examples
// without ever listing it in the vocab fence -- added here as a proper vocab
// entry, since its prose paragraph does formally introduce it.
// No exercise/answer section existed in the original -- none added here.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "lowly, below, downward" (metaphorical sense of the Lesson 14 spatial noun). */
  { type: "vocab", term: "{{word:xia4mian4}}", ttsText: "下面" },
  /** Vocabulary: "different, altered". */
  { type: "vocab", term: "{{word:bu4tong2}}", ttsText: "不同" },
  /** Vocabulary: "and". */
  { type: "vocab", term: "{{word:he2}}", ttsText: "和" },
  /** Vocabulary: "cold, cool". */
  { type: "vocab", term: "{{word:leng3}}", ttsText: "冷" },
  /** Vocabulary: "door, hole, opening" (bare pinyin -- not yet in the dictionary). */
  { type: "vocab", term: "dòng" },
  /** Vocabulary: "to open, begin" (extends the Lesson 10 sense "to begin to, start to"). */
  { type: "vocab", term: "{{word:kai1shi3}}", ttsText: "开始" },
  /** Vocabulary: "same, similar, sibling". */
  { type: "vocab", term: "{{word:yi1yang4}}", ttsText: "一样" },
  /** Vocabulary: "sweet, fragrant". */
  { type: "vocab", term: "{{word:tian2}}", ttsText: "甜" },
  /** Vocabulary: "but, however". */
  { type: "vocab", term: "{{word:dan4shi4}}", ttsText: "但是" },
  /** Vocabulary: "to, for, from the perspective of" (extends the Lesson 9 sense "to, for, give"). */
  { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  /** Vocabulary: "also" (sequences a second action/state on the same subject). */
  { type: "vocab", term: "{{word:ye3}}", ttsText: "也" },
  /** Vocabulary: "God" (literally "love from above" -- a compound, not a dedicated word). */
  { type: "vocab", term: "{{word:shang4mian4}}-{{word:de}} {{word:ai4}}", ttsText: "上面的爱" },

  /** Grammar: dui4...lai2shuo1 marks perspective, he2 connects subjects, ye3 sequences states on one subject. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Perspective and Connection -- dui4...lai2shuo1, he2, ye3. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "sentences/perspective-and-connection", items: [{}, {}, {}] },

  /** Example: duì wǒ lái shuō, tián-de dōngxi hěn hǎo. */
  { type: "example", pinyin: "{{Word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, {{word:tian2}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}." },
  /** Example: duì shàngmiàn-de ài lái shuō, quánbù dìfāng hěn hǎo. */
  { type: "example", pinyin: "{{Word:dui4}} {{word:shang4mian4}}-{{word:de}} {{word:ai4}} {{word:lai2}} {{word:shuo1}}, {{word:quan2bu4}} {{word:di4fang1}} {{word:hen3}} {{word:hao3}}." },
  /** Example: fùmǔ-de dìfāng hěn xiǎo, yě hěn lěng. */
  { type: "example", pinyin: "{{Word:fu4mu3}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xiao3}}, {{word:ye3}} {{word:hen3}} {{word:leng3}}." },
  /** Example: dànshì nánrén hé nǚrén zài zuò dōngxi, yě juéde hěn hǎo. */
  { type: "example", pinyin: "{{Word:dan4shi4}} {{word:nan2ren2}} {{word:he2}} {{word:nv3ren2}} {{word:zai4}} {{word:zuo4}} {{word:dong1xi}}, {{word:ye3}} {{word:jue2de}} {{word:hen3}} {{word:hao3}}." },
  /** Example: wǒ-de yīyàng-de nǚrén kāishǐ le dòng hào hé dòng hào-liǎng. */
  { type: "example", pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1yang4}}-{{word:de}} {{word:nv3ren2}} {{word:kai1shi3}} {{word:le}} dòng {{word:hao4}} {{word:he2}} dòng {{word:hao4}}-{{word:liang3}}." },
  /** Example: nǐ-de dìfāng shì hēisè-de, bù-shì bùtóng-de dìfāng. */
  { type: "example", pinyin: "{{Word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}, {{word:bu4}}-{{word:shi4}} {{word:bu4tong2}}-{{word:de}} {{word:di4fang1}}." },
];

export default shape;
