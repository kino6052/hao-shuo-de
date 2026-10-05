// To say something is also like that, put yě before hěn and the adjective.
// Pattern: Thing + yě + hěn + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "also-is",
  prose: {
    en: [
      "**To say something is also like that**, put {{word:ye3}} before {{word:hen3}} and the adjective.",
      "",
      "**Thing + {{word:ye3}} + {{word:hen3}} + adjective**",
    ],
    ru: [
      "**Чтобы сказать, что вещь такая же как и другая**, поставьте {{word:ye3}} перед {{word:hen3}} и прилагательным.",
      "",
      "**Вещь + {{word:ye3}} + {{word:hen3}} + прилагательное**",
    ],
    tldr: {
      en: "{{word:ye3}} {{word:hen3}} + adjective: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}, she's cold too.",
      ru: "{{word:ye3}} {{word:hen3}} + прилагательное: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}} — ей тоже холодно.",
    },
    necessity: {
      en: "Now you can say two things are alike.",
      ru: "Теперь вы можете сказать, что две вещи похожи.",
    },
  },
  info: {
    en: "{{word:ye3}} {{word:hen3}} + adjective: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}. (She's cold too.)",
    ru: "{{word:ye3}} {{word:hen3}} + прилагательное: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}. (Ей тоже холодно.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我很冷，他也很冷。",
      en: "I'm cold, and he's cold too.",
      ru: "Мне холодно, и ему тоже холодно.",
    },
    {
      pinyin: "{{Word:kong1}}-{{word:qi4}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "空气也很冷。",
      en: "The air is cold too.",
      ru: "Воздух тоже холодный.",
    },
    {
      pinyin: "{{Word:huo3}} {{word:hen3}} {{word:re4}}, {{word:ri4}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "火很热，日也很热。",
      en: "The fire is hot, and the sun is hot too.",
      ru: "Огонь горячий, и солнце тоже горячее.",
    },
    {
      pinyin: "{{Word:ri4}} {{word:hen3}} {{word:yuan2}}, {{word:yue4}} {{word:ye3}} {{word:hen3}} {{word:yuan2}}.",
      hanzi: "日很圆，月也很圆。",
      en: "The sun is round, and the moon is round too.",
      ru: "Солнце круглое, и луна тоже круглая.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}} {{word:ye3}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "你的家也很远。",
      en: "Your home is far too.",
      ru: "Твой дом тоже далеко.",
    },
  ],
  exercises: [
    {
      en: "The water is hot too.",
      ru: "Вода тоже горячая.",
      answer: "{{Word:shui3}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "水也很热。",
    },
  ],
});
