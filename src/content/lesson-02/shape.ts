// Language-independent block sequence for lesson-02 ("Words and Sentences").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "thing, something, being". */
  { type: "vocab", term: "{{word:dong1xi}}", ttsText: "东西" },
  /** Vocabulary: "person, human". */
  { type: "vocab", term: "{{word:ren2}}", ttsText: "人" },
  /** Vocabulary: "fruit, vegetable". */
  { type: "vocab", term: "{{word:shui3guo3}}", ttsText: "水果" },
  /** Vocabulary: "document, written thing". */
  { type: "vocab", term: "{{word:xie3}}-{{word:de}} {{word:dong1xi}}", ttsText: "写的东西" },
  /** Vocabulary: "woman, female". */
  { type: "vocab", term: "{{word:nv3ren2}}", ttsText: "女人" },
  /** Vocabulary: "this". */
  { type: "vocab", term: "{{word:zhe4}}", ttsText: "这" },
  /** Vocabulary: "animal, land mammal". */
  { type: "vocab", term: "{{word:dong4wu4}}", ttsText: "动物" },

  /** Grammar: what a noun is; NOUN + shì + NOUN; nouns carry no number by themselves. */
  { type: "prose" },

  /** Example: zhè shì rén. */
  { type: "example", pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ren2}}.", ttsText: "这是人。" },
  /** Example: zhè shì shuǐguǒ. */
  { type: "example", pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shui3guo3}}.", ttsText: "这是水果。" },
  /** Example: xiě-de dōngxi shì dōngxi. */
  { type: "example", pinyin: "{{Word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.", ttsText: "写的东西是东西。" },
  /** Example: rén shì nǚrén. */
  { type: "example", pinyin: "{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}.", ttsText: "人是女人。" },
  /** Example: dòngwù shì dōngxi. */
  { type: "example", pinyin: "{{Word:dong4wu4}} {{word:shi4}} {{word:dong1xi}}.", ttsText: "动物是东西。" },
  /** Example: nǚrén shì rén. */
  { type: "example", pinyin: "{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.", ttsText: "女人是人。" },

  /** Exercise 1: Something is something. */
  { type: "exercise" },
  /** Exercise 2: This is a document. */
  { type: "exercise" },
  /** Exercise 3: The woman is a person. */
  { type: "exercise" },
  /** Exercise 4: Humans are beings. */
  { type: "exercise" },
  /** Exercise 5: The animal is female. */
  { type: "exercise" },
  /** Exercise 6: Fruits are things. */
  { type: "exercise" },
  /** Exercise 7: This is a piece of paper. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer", ttsText: "东西是东西。" },
  /** Answer 2. */
  { type: "answer", ttsText: "这是写的东西。" },
  /** Answer 3. */
  { type: "answer", ttsText: "女人是人。" },
  /** Answer 4. */
  { type: "answer", ttsText: "人是东西。" },
  /** Answer 5. */
  { type: "answer", ttsText: "动物是女人。" },
  /** Answer 6. */
  { type: "answer", ttsText: "水果是东西。" },
  /** Answer 7. */
  { type: "answer", ttsText: "这是写的东西。" },
];

export default shape;
