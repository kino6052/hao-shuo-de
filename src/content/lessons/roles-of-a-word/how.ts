// To say how someone does something, put -de after the verb, then the
// adjective. Pattern: Who + verb-de + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "how",
  prose: {
    en: [
      "**To say how someone does something**, put -{{word:de}} after the verb, then the adjective.",
      "",
      "**Who + verb-{{word:de}} + adjective**",
    ],
    ru: [
      "**Чтобы сказать, как кто-то что-то делает**, поставьте -{{word:de}} после глагола, а потом прилагательное.",
      "",
      "**Кто + глагол-{{word:de}} + прилагательное**",
      "",
      "В русском «хороший» превращается в «хорошо», а в китайском слово не меняется — эту работу делает -{{word:de}}.",
    ],
    tldr: {
      en: "verb-{{word:de}} + adjective says how: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}, she speaks well.",
      ru: "глагол-{{word:de}} + прилагательное говорит «как»: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}} — она хорошо говорит.",
    },
    necessity: {
      en: "Now you can say how well something is done.",
      ru: "Теперь вы можете сказать, насколько хорошо что-то сделано.",
    },
  },
  info: {
    en: "verb-{{word:de}} + adjective, how: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}. (She speaks well.)",
    ru: "глагол-{{word:de}} + прилагательное — как: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}. (Она хорошо говорит.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}.",
      hanzi: "她说得好。",
      en: "She speaks well.",
      ru: "Она хорошо говорит.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xie3}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你写得很好。",
      en: "You write very well.",
      ru: "Ты очень хорошо пишешь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chi1}}-{{word:de}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他吃得很多。",
      en: "He eats a lot.",
      ru: "Он много ест.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:bi3}} {{word:wo3}} {{word:hao3}}.",
      hanzi: "他说得比我好。",
      en: "He speaks better than me.",
      ru: "Он говорит лучше меня.",
    },
  ],
  exercises: [
    {
      en: "You write well.",
      ru: "Ты хорошо пишешь.",
      answer: "{{Word:ni3}} {{word:xie3}}-{{word:de}} {{word:hao3}}.",
      hanzi: "你写得好。",
    },
  ],
});
