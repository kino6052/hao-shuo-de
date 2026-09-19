// Language-independent block sequence for lesson-03 ("Modifying Nouns").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Merged from the old lesson-03 ("Modifying Nouns": zhè-ge/nà-ge/duō -- count
// and concreteness) and lesson-04 ("Nouns and Adjectives": hěn/-de) into one
// "Modifying Nouns" lesson, since both are about the same thing: giving a
// noun number, concreteness, and description. Lessons 4-20 were renumbered
// down to 3-19 to close the gap this merge leaves -- see BOOK_STRUCTURE.md.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "special word hen3" -- neutral connector between a subject and an adjective. */
  { type: "vocab", term: "{{word:hen3}}", ttsText: "很" },
  /** Vocabulary: "that". */
  { type: "vocab", term: "{{word:na4}}", ttsText: "那" },
  /** Vocabulary: classifier "ge" -- one countable thing. */
  { type: "vocab", term: "{{word:ge4}}", ttsText: "个" },
  /** Vocabulary: "many, a lot". */
  { type: "vocab", term: "{{word:duo1}}", ttsText: "多" },
  /** Vocabulary: "water, liquid". */
  { type: "vocab", term: "{{word:shui3}}", ttsText: "水" },
  /** Vocabulary: "a place". */
  { type: "vocab", term: "{{word:di4fang1}}", ttsText: "地方" },
  /** Vocabulary: "little, small". */
  { type: "vocab", term: "{{word:xiao3}}", ttsText: "小" },
  /** Vocabulary: "good, simple, friendly". */
  { type: "vocab", term: "{{word:hao3}}", ttsText: "好" },
  /** Vocabulary: "big, important, tall". */
  { type: "vocab", term: "{{word:da4}}", ttsText: "大" },

  /** Grammar: zhè-ge/nà-ge count one specific thing. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Example: zhè-ge shì rén. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:shi4}} {{word:ren2}}.", ttsText: "这个是人。" },
  /** Example: nà-ge shì shuǐguǒ. */
  { type: "example", pinyin: "{{Word:na4}}-ge {{word:shi4}} {{word:shui3guo3}}.", ttsText: "那个是水果。" },

  /** Grammar: hěn as the neutral predicate connector for adjectives (Subject + hěn + Adjective). */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Example: shuǐ hěn hǎo. */
  { type: "example", pinyin: "{{Word:shui3}} {{word:hen3}} {{word:hao3}}.", ttsText: "水很好。" },

  /** Grammar: -de required to bind an adjective onto a noun when it has a modifier or is multi-character. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Example: zhè-ge shì hěn-xiǎo-de dìfāng. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:shi4}} {{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}.", ttsText: "这个是很小的地方。" },
  /** Example: zhè-ge shì yī-ge hěn-dà-de dòngwù. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:shi4}} {{word:yi1}}-ge {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}}.", ttsText: "这个是一个很大的动物。" },

  /** Grammar: duō names many, and ge drops out since duō isn't pointing at just one. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Example: duō-de dōngxi shì xiě-de dōngxi. */
  { type: "example", pinyin: "{{Word:duo1}}-{{word:de}} {{word:dong1xi}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.", ttsText: "多的东西是写的东西。" },

  /** Exercise 1: This one is an animal. */
  { type: "exercise" },
  /** Exercise 2: That one is a woman. */
  { type: "exercise" },
  /** Exercise 3: Many fruits are things. */
  { type: "exercise" },
  /** Exercise 4: That one is a document. */
  { type: "exercise" },
  /** Exercise 5: The place is small. */
  { type: "exercise" },
  /** Exercise 6: This is a good animal. */
  { type: "exercise" },
  /** Exercise 7: This is a big fruit. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer", ttsText: "这个是动物。" },
  /** Answer 2. */
  { type: "answer", ttsText: "那个是女人。" },
  /** Answer 3. */
  { type: "answer", ttsText: "多的水果是东西。" },
  /** Answer 4. */
  { type: "answer", ttsText: "那个是写的东西。" },
  /** Answer 5. */
  { type: "answer", ttsText: "地方很小。" },
  /** Answer 6. */
  { type: "answer", ttsText: "这个是好的动物。" },
  /** Answer 7. */
  { type: "answer", ttsText: "这个是一个很大的水果。" },
];

export default shape;
