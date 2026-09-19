// Language-independent block sequence for lesson-13 ("Spatial Nouns").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "inside, between, internal organ". */
  { type: "vocab", term: "{{word:li3mian4}}", ttsText: "里面" },
  /** Vocabulary: "area behind, back". */
  { type: "vocab", term: "{{word:hou4mian4}}", ttsText: "后面" },
  /** Vocabulary: "area below, under, lower part, leg". */
  { type: "vocab", term: "{{word:xia4mian4}}", ttsText: "下面" },
  /** Vocabulary: "side, area beside, vicinity". */
  { type: "vocab", term: "{{word:pang2bian1}}", ttsText: "旁边" },
  /** Vocabulary: "area above, highest part, sky". */
  { type: "vocab", term: "{{word:shang4mian4}}", ttsText: "上面" },
  /** Vocabulary: "area in front, face, chest". */
  { type: "vocab", term: "{{word:qian2mian4}}", ttsText: "前面" },
  /** Vocabulary: "to go to, arrive at, move towards" (bare pinyin -- not yet in the dictionary). */
  { type: "vocab", term: "dào" },
  /** Vocabulary: "to walk, move, travel". */
  { type: "vocab", term: "{{word:qu4}}", ttsText: "去" },

  /** Grammar: zai4 marks static location, dào marks movement toward a destination. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Spatial Location -- Subject + zai4/dào + Target + Spatial Noun, plus the zai4-qu4-dào compound and standalone spatial nouns. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "nouns/spatial", items: [{}, {}, {}] },

  /** Example: wǒ zài nǐ-de pángbiān. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}." },
  /** Example: xiàmiàn-de dìfāng hěn yǒu lìliàng. */
  { type: "example", pinyin: "{{Word:xia4mian4}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}." },
  /** Example: dà-de gōngjù zài-qù-dào shàngmiàn-de dìfāng. */
  { type: "example", pinyin: "{{Word:da4}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}}-{{word:qu4}}-dào {{word:shang4mian4}}-{{word:de}} {{word:di4fang1}}." },
  /** Example: xiě-de dōngxi zài dòngwù-de xiàmiàn. */
  { type: "example", pinyin: "{{Word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:zai4}} {{word:dong4wu4}}-{{word:de}} {{word:xia4mian4}}." },
  /** Example: wǒ kàn-jiàn hēisè-de nǚrén zài dìfāng-de qiánmiàn. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:kan4}}-jiàn {{word:hei1se4}}-{{word:de}} {{word:nv3ren2}} {{word:zai4}} {{word:di4fang1}}-{{word:de}} {{word:qian2mian4}}." },
  /** Example: yánsè dōngxi zài hēisè-de pángbiān. */
  { type: "example", pinyin: "{{Word:yan2}}-sè {{word:dong1xi}} {{word:zai4}} {{word:hei1se4}}-{{word:de}} {{word:pang2bian1}}." },

  /** Exercise 1: Water is coming from the sky. */
  { type: "exercise" },
  /** Exercise 2: Protect your back. */
  { type: "exercise" },
  /** Exercise 3: What did you put the red clock next to? */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
