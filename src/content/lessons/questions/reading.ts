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
      "The girl has something in her hand. I ask, \"What is this?\" She says, \"This is food.\" Something small moves in the corner. That is Zhi-zhi, the mouse. Zhi-zhi asks, \"Do you have money?\" Then I see the note on the door. The note asks, \"Who are you?\" I say, \"I am a person.\"",
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
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:you3}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "小女人有东西。",
      en: "The girl has something.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:wen4}}: {{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "我问：这是什么？",
      en: "I ask: \"What is this?\"",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}: {{Word:zhe4}} {{word:shi4}} {{word:fan4}}.",
      hanzi: "他说：这是饭。",
      en: "She says: \"This is food.\"",
    },
    {
      pinyin: "{{Word:na4}} {{word:shi4}} \"Zhī-zhī\".",
      hanzi: "那是吱吱。",
      en: "That is Zhi-zhi.",
    },
    {
      pinyin: "\"Zhī-zhī\" {{word:wen4}}: {{Word:ni3}} {{word:you3}} {{word:jin1}} {{word:ma}}?",
      hanzi: "吱吱问：你有金吗？",
      en: "Zhi-zhi asks: \"Do you have money?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:zi4}}.",
      hanzi: "我看字。",
      en: "I look at some characters.",
    },
    {
      pinyin: "{{Word:zi4}} {{word:wen4}}: {{Word:ni3}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "字问：你是谁？",
      en: "The characters ask: \"Who are you?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "我说：我是人。",
      en: "I say: \"I am a person.\"",
    },
  ],
  exercises: [
    {
      en: "I ask: \"What is this?\"",
      answer: "{{Word:wo3}} {{word:wen4}}: {{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "我问：这是什么？",
    },
  ],
});
