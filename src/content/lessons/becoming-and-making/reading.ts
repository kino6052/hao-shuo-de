// reading: the Miao-miao story of this lesson, first in plain English, then in Hao-shuo-de
// sentence by sentence. Only words and patterns from this lesson and the ones before it.
// Draft for the author to review (WRITING_PLAN.md, review/writing/miao-miao-stories-preview.md).
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "reading",
  prose: {
    en: [
      "**The story**",
      "",
      "My home is very messy. All my things are on the floor. I put the things in the bag. I make my home clean. Now it is clean. The girl's toy is broken. I fix the toy. The girl loves her toy. I have a plant. The plant has grown big. Then Miao-miao makes the home messy again!",
    ],
    tldr: {
      en: "A short story that uses only what you have learned so far.",
    },
    necessity: {
      en: "Reading real sentences is how the patterns stay in your head.",
    },
  },
  info: {
    kind: "note",
    en: "Every sentence in the story uses only words and patterns from this lesson and the ones before it.",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:luan4}}.",
      hanzi: "我的家很乱。",
      en: "My home is very messy.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:dou1}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "我的东西都在地上。",
      en: "All my things are on the floor.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:fang4}} {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "我把东西放在包里。",
      en: "I put the things in the bag.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:jia1}} {{word:zuo4}} {{word:gan1jing4}} {{word:le}}.",
      hanzi: "我把家做干净了。",
      en: "I made my home clean.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:gan1jing4}} {{word:le}}.",
      hanzi: "家干净了。",
      en: "The home is clean now.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:wan2r}}-{{word:ju4}} {{word:huai4}} {{word:le}}.",
      hanzi: "小女人的玩儿具坏了。",
      en: "The girl's toy is broken.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:wan2r}}-{{word:ju4}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我把玩儿具做好了。",
      en: "I fixed the toy.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:hen3}} {{word:ai4}} {{word:ta1}}-{{word:de}} {{word:wan2r}}-{{word:ju4}}.",
      hanzi: "小女人很爱他的玩儿具。",
      en: "The girl loves her toy.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:zhi2wu4}}.",
      hanzi: "我有植物。",
      en: "I have a plant.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:bian4}} {{word:da4}} {{word:le}}.",
      hanzi: "植物变大了。",
      en: "The plant has grown big.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:you4}} {{word:ba3}} {{word:jia1}} {{word:zuo4}} {{word:luan4}} {{word:le}}!",
      hanzi: "喵喵又把家做乱了！",
      en: "Miao-miao made the home messy again!",
    },
  ],
  exercises: [
    {
      en: "I fixed the toy.",
      answer: "{{Word:wo3}} {{word:ba3}} {{word:wan2r}}-{{word:ju4}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我把玩儿具做好了。",
    },
  ],
});
