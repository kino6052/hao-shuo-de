// R9c: colours made of obvious things. Blue, green and yellow leave core: blue is
// tiān-de yán-sè (the colour of the sky), green zhí-wù-de yán-sè (plants),
// yellow jīn-de yán-sè (gold). Red, white and black stay core.
// Run: npm run refactor -- refactors/R9c.ts [--write]

const text = (file, from, to) => ({ op: "text", file, from, to });
const LESSONS = "src/content/lessons/";
const COMP = "src/data/composites/";

export default [
  // sentences that would read oddly with the new forms: change them first
  text(`${LESSONS}colors/what-color.ts`,
    `      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:lan2}}-{{word:se4}}.",
      hanzi: "我爱蓝色。",
      en: "I love blue.",
      ru: "Я люблю синий цвет.",`,
    `      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hong2}}-{{word:se4}}.",
      hanzi: "我爱红色。",
      en: "I love red.",
      ru: "Я люблю красный цвет.",`),
  text(`${LESSONS}colors/color-thing.ts`,
    `      pinyin: "{{Word:huang2}}-{{word:se4}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "黄色的植物。",
      en: "A yellow plant.",
      ru: "Жёлтое растение.",`,
    `      pinyin: "{{Word:bai2}}-{{word:se4}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "白色的植物。",
      en: "A white plant.",
      ru: "Белое растение.",`),
  text(`${LESSONS}inside-a-sentence/and-or.ts`,
    `{{word:hong2}}-{{word:se4}}-{{word:de}} {{word:hai2}}-{{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}?",`,
    `{{word:hong2}}-{{word:se4}}-{{word:de}} {{word:hai2}}-{{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}?",`),
  text(`${COMP}tian-天.ts`,
    `      pinyin: "{{Word:tian1}} {{word:hen3}} {{word:lan2}}.",
      hanzi: "天很蓝。",
      en: "The sky is very blue.",
      ru: "Небо очень синее.",`,
    `      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "明天我在家。",
      en: "Tomorrow I'll be at home.",
      ru: "Завтра я буду дома.",`),

  // blue and yellow become "the colour of ..." (green only had the lán-sè stand-in)
  { op: "refs", pattern: "\\{\\{(w|W)ord:lan2\\}\\}-\\{\\{word:se4\\}\\}", to: "{{$1ord:tian1}}-{{word:de}} {{word:yan2se4}}", hanzi: ["蓝色", "天的颜色"], label: "lán-sè -> tiān-de yán-sè" },
  { op: "refs", pattern: "\\{\\{(w|W)ord:huang2\\}\\}-\\{\\{word:se4\\}\\}", to: "{{$1ord:jin1}}-{{word:de}} {{word:yan2se4}}", hanzi: ["黄色", "金的颜色"], label: "huáng-sè -> jīn-de yán-sè" },

  // the sky was the example of blue; now the sky is what blue is made of
  text(`${LESSONS}colors/is-color.ts`,
    `      en: "The sky is blue.",
      ru: "Небо синее.",
      answer: "{{Word:tian1}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "天是天的颜色的。",`,
    `      en: "The water is blue.",
      ru: "Вода синяя.",
      answer: "{{Word:shui3}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "水是天的颜色的。",`),
  text(`${COMP}weishenme-为什么.ts`,
    `{{Word:wei4}}-{{word:shen2me}} {{word:tian1}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}?",
      hanzi: "为什么天是天的颜色的？",
      en: "Why is the sky blue?",
      ru: "Почему небо синее?",`,
    `{{Word:wei4}}-{{word:shen2me}} {{word:shui3}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}?",
      hanzi: "为什么水是天的颜色的？",
      en: "Why is the water blue?",
      ru: "Почему вода синяя?",`),
];
