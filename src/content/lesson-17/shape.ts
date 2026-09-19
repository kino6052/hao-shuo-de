// Language-independent block sequence for lesson-17 ("Hunting Adventure").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// A story lesson: no grammar prose/info boxes or exercises, just vocab and
// a narrative built entirely from words taught in earlier lessons.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "to search, look for, hunt". */
  { type: "vocab", term: "{{word:zhao3}}", ttsText: "找" },
  /** Vocabulary: "head, mind, antlers/horns". */
  { type: "vocab", term: "{{word:tou2}}", ttsText: "头" },
  /** Vocabulary: "clothing, cloth, protective vest". */
  { type: "vocab", term: "{{word:yi1fu}}", ttsText: "衣服" },
  /** Vocabulary: "long flexible thing, string, rope, bowstring". */
  { type: "vocab", term: "{{word:xian4}}", ttsText: "线" },
  /** Vocabulary: "broken, botched, bad, to break/fail". */
  { type: "vocab", term: "{{word:huai4}}", ttsText: "坏" },
  /** Vocabulary: "long hard thing, stick, rod". */
  { type: "vocab", term: "{{word:gun4zi}}", ttsText: "棍子" },
  /** Vocabulary: "insect, bug, worm". */
  { type: "vocab", term: "{{word:chong2zi}}", ttsText: "虫子" },
  /** Vocabulary: "away, absent, to leave, run away" (bare pinyin -- not yet in the dictionary). */
  { type: "vocab", term: "líkāi" },

  /** Story line 1: Mawijo has a small house in the forest. */
  { type: "story", pinyin: '"Maweijiu" {{word:nan2ren2}} {{word:zai4}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:zhi2wu4}}-{{word:de}} {{word:di4fang1}} {{word:you3}} {{word:yi1}}-ge {{word:xiao3}} {{word:di4fang1}}.' },
  /** Story line 2: He wants to hunt, grabbing a bow and orange vest. */
  { type: "story", pinyin: "{{Word:ta1}} {{word:yao4}} {{word:zhao3}} {{word:dong4wu4}}, ná-{{word:le}} {{word:zhao3}}-{{word:de}} {{word:gong1ju4}} {{word:he2}} {{word:hong2se4}}-{{word:de}} {{word:yi1fu}}." },
  /** Story line 3: On day one, he sees only a blue flying animal. */
  { type: "story", pinyin: "{{Word:yi1}} {{word:shi2jian1}}, {{word:ta1}} zhǐ {{word:kan4}}-jiàn {{word:lan2se4}}-{{word:de}} huì-fēi-{{word:de}} {{word:dong4wu4}}, méiyǒu {{word:kan4}}-jiàn {{word:bu4tong2}}-{{word:de}} {{word:dong1xi}}." },
  /** Story line 4: The flying animal is eating little insects. */
  { type: "story", pinyin: "Huì-fēi-{{word:de}} {{word:dong4wu4}} {{word:zai4}} {{word:chi1}} {{word:xiao3}}-{{word:de}} {{word:chong2zi}}." },
  /** Story line 5: On day two, he hears a loud animal call. */
  { type: "story", pinyin: "Èr {{word:shi2jian1}}, {{word:ta1}} {{word:ting1}}-jiàn {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}}-{{word:de}} shēngyīn." },
  /** Story line 6: Mawijo waits in place. */
  { type: "story", pinyin: '"Maweijiu" {{word:liu2}}-{{word:zai4}} {{word:di4fang1}}.' },
  /** Story line 7: He sees a large moose. */
  { type: "story", pinyin: "{{Word:ta1}} {{word:kan4}}-jiàn {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}}." },
  /** Story line 8: The moose's head has antler-sticks. */
  { type: "story", pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:tou2}}-shàng {{word:you3}} {{word:gun4zi}} {{word:dong1xi}}." },
  /** Story line 9: Mawijo draws the bow, but the string breaks. */
  { type: "story", pinyin: '"Maweijiu" {{word:yong4}} {{word:zhao3}}-{{word:de}} {{word:gong1ju4}}, {{word:dan4shi4}} {{word:xian4}} {{word:huai4}}-{{word:le}}.' },
  /** Story line 10: The moose runs away. */
  { type: "story", pinyin: "{{Word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}} líkāi-{{word:le}}." },
];

export default shape;
