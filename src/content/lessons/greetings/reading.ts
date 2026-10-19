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
      "The girl asks, \"What are you called?\" I say, \"I am called Student.\" Miao-miao says, \"You did not say hello.\" I say, \"Hello!\" The girl laughs. I say, \"Thank you.\" The girl says, \"Never mind.\" I say, \"Goodbye!\" Do not be afraid.",
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
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:wen4}}: {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
      hanzi: "小女人问：你叫什么？",
      en: "The girl asks: \"What are you called?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}} {{word:jiao4}} {{word:xue2}}-{{word:sheng1}}.",
      hanzi: "我说：我叫学生。",
      en: "I say: \"I am called Student.\"",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:shuo1}}: {{Word:ni3}} {{word:mei2}} {{word:shuo1}} \"Nǐ hǎo\".",
      hanzi: "喵喵说：你没说你好。",
      en: "Miao-miao says: \"You did not say hello.\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:ni3}} {{word:hao3}}!",
      hanzi: "我说：你好！",
      en: "I say: \"Hello!\"",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:xiao4}} {{word:le}}.",
      hanzi: "小女人笑了。",
      en: "The girl laughed.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:xie4}}-{{light:xie4}}.",
      hanzi: "我说：谢谢。",
      en: "I say: \"Thank you.\"",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:shuo1}}: {{Word:mei2}} {{word:guan1xi}}.",
      hanzi: "小女人说：没关系。",
      en: "She says: \"Never mind.\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:zai4}}-{{word:jian4}}!",
      hanzi: "我说：在见！",
      en: "I say: \"Goodbye!\"",
    },
    {
      pinyin: "{{Word:bie2}} {{word:pa4}}.",
      hanzi: "别怕。",
      en: "Do not be afraid.",
    },
  ],
  exercises: [
    {
      en: "The girl asks: \"What are you called?\"",
      answer: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:wen4}}: {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
      hanzi: "小女人问：你叫什么？",
    },
  ],
});
