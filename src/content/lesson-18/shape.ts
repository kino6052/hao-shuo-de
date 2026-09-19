// Language-independent block sequence for lesson-18 ("Cooking Adventure").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// A story lesson: no grammar prose/info boxes or exercises, just vocab and
// a narrative built entirely from words taught in earlier lessons.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "to sleep, nap". */
  { type: "vocab", term: "{{word:shui4jiao4}}", ttsText: "睡觉" },
  /** Vocabulary: "to love". */
  { type: "vocab", term: "{{word:ai4}}", ttsText: "爱" },
  /** Vocabulary: "cereal, grain, rice". */
  { type: "vocab", term: "{{word:mi3fan4}}", ttsText: "米饭" },
  /** Vocabulary: "finished, past, end". */
  { type: "vocab", term: "{{word:wan2}}", ttsText: "完" },
  /** Vocabulary: "fire, heat source, cooking heat". */
  { type: "vocab", term: "{{word:huo3}}", ttsText: "火" },
  /** Vocabulary: "horizontal surface, floor, sofa". */
  { type: "vocab", term: "{{word:di4ban3}}", ttsText: "地板" },
  /** Vocabulary: "mouth, lips, door, opening". */
  { type: "vocab", term: "{{word:kou3}}", ttsText: "口" },

  /** Story line 1: Mawijo has a beloved woman/wife. */
  { type: "story", pinyin: '"Maweijiu" {{word:nan2ren2}} {{word:you3}} {{word:yi1}}-ge {{word:ta1}} {{word:ai4}}-{{word:de}} {{word:nv3ren2}}.' },
  /** Story line 2: Her name is Sili. */
  { type: "story", pinyin: '{{Word:ta1}}-{{word:de}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}} {{word:shi4}} "Sili".' },
  /** Story line 3: Sili is sleeping on the sofa. */
  { type: "story", pinyin: '"Sili" {{word:zai4}} {{word:di4ban3}}-shàng {{word:shui4jiao4}}.' },
  /** Story line 4: Yesterday, Sili tidied the place and washed the clothing. */
  { type: "story", pinyin: '{{Word:wan2}}-{{word:shi2jian1}}, "Sili" {{word:ba3}} {{word:di4fang1}} {{word:bian4}} {{word:hao3}}-{{word:le}}, {{word:ye3}} {{word:yong4}} {{word:shui3}} {{word:ba3}} {{word:yi1fu}} {{word:bian4}} {{word:xin1}}-{{word:le}}.' },
  /** Story line 5: What time will Mawijo arrive? */
  { type: "story", pinyin: '"Maweijiu" {{word:zai4}} {{word:shen2me}} {{word:shi2jian1}} dào?' },
  /** Story line 6: There is a noise! */
  { type: "story", pinyin: "{{Word:you3}} shēngyīn!" },
  /** Story line 7: Mawijo arrives at the door, carrying two small animals. */
  { type: "story", pinyin: '{{Word:zhe4}} {{word:shi2jian1}}, "Maweijiu" dào-{{word:le}} {{word:kou3}}-{{word:de}} {{word:pang2bian1}}, {{word:ta1}} ná-{{word:le}} {{word:liang3}}-ge {{word:xiao3}} {{word:dong4wu4}}.' },
  /** Story line 8: Sili feels very happy and kisses Mawijo's head. */
  { type: "story", pinyin: '"Sili" {{word:jue2de}} {{word:hen3}} {{word:hao3}}, {{word:yong4}} {{word:kou3}} {{word:mo1}} "Maweijiu"-{{word:de}} {{word:tou2}}.' },
  /** Story line 9: She uses fire to cook the animals and rice. */
  { type: "story", pinyin: "{{Word:ta1}} {{word:yong4}} {{word:huo3}} {{word:ba3}} {{word:dong4wu4}} {{word:he2}} {{word:mi3fan4}} {{word:bian4}} {{word:re4}}-{{word:le}}." },
  /** Story line 10: The food is wonderful! */
  { type: "story", pinyin: "{{Word:chi1}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}!" },
];

export default shape;
