// Dà and xiǎo together name the size. Pattern: thing-de + dà-xiǎo
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "size",
  scene: "Acts out 'zhè-ge bāo-de dà-xiǎo hěn hǎo': the student fits a bag exactly into a small cupboard, hands on hips with pride; Miao-miao tries to squeeze in beside it. Blue: the bag.",
  prose: {
    en: [
      "**To name how big something is**, put {{word:da4}} and {{word:xiao3}} together: {{word:da4}}-{{word:xiao3}} is the size.",
      "",
      "**Thing + {{word:de}} + {{word:da4}}-{{word:xiao3}}**",
      "",
      "{{Word:zhe4}}-{{light:ge4}} {{word:bao1}} {{word:hen3}} {{word:da4}} says the bag is big. {{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}} talks about its size: the size of this bag is good.",
    ],
    ru: [
      "**Чтобы назвать, насколько что-то велико**, поставьте {{word:da4}} и {{word:xiao3}} вместе: {{word:da4}}-{{word:xiao3}} — размер.",
      "",
      "**Вещь + {{word:de}} + {{word:da4}}-{{word:xiao3}}**",
      "",
      "{{Word:zhe4}}-{{light:ge4}} {{word:bao1}} {{word:hen3}} {{word:da4}} — сумка большая. {{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}} — речь о размере: размер этой сумки хороший.",
    ],
    tldr: {
      en: "{{Word:da4}}-{{word:xiao3}} is the size: {{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}}.",
      ru: "{{Word:da4}}-{{word:xiao3}} — размер: {{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}}.",
    },
    necessity: {
      en: "Now you can talk about the size of things.",
      ru: "Теперь вы можете говорить о размере вещей.",
    },
  },
  info: {
    pattern: "da-xiao-size",
    en: "Thing + {{word:de}} + {{word:da4}}-{{word:xiao3}}: {{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}}. (The size of this bag is good.)",
    ru: "Вещь + {{word:de}} + {{word:da4}}-{{word:xiao3}}: {{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}}. (Размер этой сумки хороший.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个包的大小很好。",
      en: "The size of this bag is good.",
      ru: "Размер этой сумки хороший.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "那个地方的大小很大。",
      en: "That place is very big.",
      ru: "То место очень большое.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}} {{word:qiu2}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:ma}}?",
      hanzi: "你知道这个球的大小吗？",
      en: "Do you know the size of this ball?",
      ru: "Ты знаешь размер этого мяча?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:zhi1dao4}} {{word:da4}}-{{word:xiao3}}.",
      hanzi: "我想知道大小。",
      en: "I want to know the size.",
      ru: "Я хочу знать размер.",
    },
  ],
  exercises: [
    {
      en: "The size of this ball is good.",
      ru: "Размер этого мяча хороший.",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:qiu2}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个球的大小很好。",
    },
    {
      en: "Do you know the size of that bag?",
      ru: "Ты знаешь размер той сумки?",
      answer: "{{Word:ni3}} {{word:zhi1dao4}} {{word:na4}}-{{light:ge4}} {{word:bao1}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:ma}}?",
      hanzi: "你知道那个包的大小吗？",
    },
    {
      en: "I don't know the size.",
      ru: "Я не знаю размер.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:da4}}-{{word:xiao3}}.",
      hanzi: "我不知道大小。",
    },
  ],
});
