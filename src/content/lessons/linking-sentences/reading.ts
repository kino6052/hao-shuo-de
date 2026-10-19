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
      "I am late. Because the car stopped. The girl waits for me. The girl says, \"If you come, I will wait for you.\" I came, but the girl was not there. This plant did not die. This plant is alive. If I do not wait, I go back. Because I waited, the girl came.",
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
      pinyin: "{{Word:wo3}} {{word:lai2}}-{{word:wan3}} {{word:le}}.",
      hanzi: "我来晚了。",
      en: "I am late.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:che1}} {{word:bu4}} {{word:dong4}} {{word:le}}.",
      hanzi: "因为车不动了。",
      en: "Because the car stopped.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:deng3}} {{word:wo3}}.",
      hanzi: "小女人等我。",
      en: "The girl waits for me.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:shuo1}}: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "小女人说：如果你来，我就等你。",
      en: "The girl says: \"If you come, I will wait for you.\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:le}}, {{word:dan4}}-{{word:shi4}} {{word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:bu4}} {{word:zai4}}.",
      hanzi: "我来了，但是小女人不在。",
      en: "I came, but the girl was not there.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zhi2wu4}} {{word:mei2}} {{word:si3}}.",
      hanzi: "这个植物没死。",
      en: "This plant did not die.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zhi2wu4}} {{word:huo2}} {{word:le}}.",
      hanzi: "这个植物活了。",
      en: "This plant is alive.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:wo3}} {{word:bu4}} {{word:deng3}}, {{word:wo3}} {{word:jiu4}} {{word:hui2}}-{{word:qu4}}.",
      hanzi: "如果我不等，我就回去。",
      en: "If I do not wait, I go back.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:wo3}} {{word:deng3}}, {{word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:lai2}} {{word:le}}.",
      hanzi: "因为我等，小女人来了。",
      en: "Because I waited, the girl came.",
    },
  ],
  exercises: [
    {
      en: "The girl says: \"If you come, I will wait for you.\"",
      answer: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:shuo1}}: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "小女人说：如果你来，我就等你。",
    },
  ],
});
