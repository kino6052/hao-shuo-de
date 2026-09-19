// Language-independent block sequence for lesson-19 ("The Frontier").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// The book's closing lesson: no vocab, grammar prose, or exercises -- just a
// short send-off narrative built entirely from words taught earlier.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Story line 1: These lessons have equipped you with the basics of how the language works. */
  { type: "story", pinyin: "{{Word:zhe4}}-ge {{word:hen3}}-{{word:duo1}}-{{word:de}} kè-chéng {{word:gei3}} {{word:ni3}} {{word:xiao3}}-{{word:de}} {{word:fang1fa3}} {{word:zhi1dao4}} {{word:zhe4}}-ge {{word:shuo1}}." },
  /** Story line 2: The texts in Part 2 of this book provide further guidance. */
  { type: "story", pinyin: "{{Word:hou4mian4}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:gei3}} {{word:ni3}} gèng-{{word:duo1}}-{{word:de}} {{word:fang1fa3}}." },
  /** Story line 3: The official dictionary can be found at the back. */
  { type: "story", pinyin: "{{Word:duo1}}-{{word:ci2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:zai4}} {{word:hou4mian4}}." },
  /** Story line 4: It contains all the words and their structures/meanings. */
  { type: "story", pinyin: "{{Word:ta1}} {{word:li3mian4}} {{word:you3}}-{{word:le}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}} {{word:he2}} {{word:fang1fa3}}." },
  /** Story line 5: Now, everything depends completely on you. */
  { type: "story", pinyin: "{{Word:zhe4}} {{word:shi2jian1}}, {{word:dong1xi}} {{word:quan2bu4}} {{word:kan4}} {{word:ni3}}-{{word:de}}." },
  /** Story line 6: Go out and enjoy yourself! */
  { type: "story", pinyin: "{{Word:qu4}} {{word:qu4}}, {{word:wan2}} {{word:wan2}}." },
  /** Story line 7: Create things, play, and make yourself become good! */
  { type: "story", pinyin: "{{Word:zuo4}} {{word:dong1xi}}, {{word:wan2}}, {{word:ye3}} {{word:ba3}} {{word:ni3}} {{word:bian4}} {{word:hao3}}!" },
];

export default shape;
