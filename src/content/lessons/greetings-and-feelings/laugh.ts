// To say someone laughs or smiles, use xiào. Pattern: Who + xiào
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "laugh",
  prose: {
    en: [
      "**To say someone laughs or smiles**, use {{word:xiao4}}.",
      "",
      "**Who + {{word:xiao4}}**",
    ],
    ru: [
      "**Чтобы сказать, что кто-то смеётся или улыбается**, используйте {{word:xiao4}}.",
      "",
      "**Кто + {{word:xiao4}}**",
    ],
    tldr: {
      en: "{{word:xiao4}} is laugh or smile: {{Word:ta1}} {{word:xiao4}} {{word:le}}, she smiled.",
      ru: "{{word:xiao4}} — «смеяться» или «улыбаться»: {{Word:ta1}} {{word:xiao4}} {{word:le}} — она улыбнулась.",
    },
    necessity: {
      en: "Now you can say someone laughed.",
      ru: "Теперь вы можете сказать, что кто-то засмеялся.",
    },
  },
  info: {
    en: "Who + {{word:xiao4}}, laugh or smile: {{Word:ta1}} {{word:xiao4}} {{word:le}}. (She smiled.)",
    ru: "Кто + {{word:xiao4}} — смеяться или улыбаться: {{Word:ta1}} {{word:xiao4}} {{word:le}}. (Она улыбнулась.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xiao4}} {{word:le}}.",
      hanzi: "她笑了。",
      en: "She smiled.",
      ru: "Она улыбнулась.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:xiao4}}?",
      hanzi: "你为什么笑？",
      en: "Why are you laughing?",
      ru: "Почему ты смеёшься?",
    },
  ],
  exercises: [
    {
      en: "Don't laugh at me!",
      ru: "Не смейся надо мной!",
      answer: "{{Word:bu4}} {{word:yao4}} {{word:xiao4}} {{word:wo3}}!",
      hanzi: "不要笑我！",
    },
  ],
});
