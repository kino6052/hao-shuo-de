// A number and jīn says how much money. Pattern: thing + yào + number + jīn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "price",
  prose: {
    en: [
      "**To say what something costs**, use {{word:yao4}}, a number and {{word:jin1}} (money).",
      "",
      "**Thing + {{word:yao4}} + number + {{word:jin1}}**",
      "",
      "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}} is \"This costs ten\". For a low price, say {{word:hen3}} {{word:shao3}} {{word:jin1}}, very little money: {{word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}} means this is cheap.",
    ],
    ru: [
      "**Чтобы сказать, сколько что-то стоит**, используйте {{word:yao4}}, число и {{word:jin1}} (деньги).",
      "",
      "**Вещь + {{word:yao4}} + число + {{word:jin1}}**",
      "",
      "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}} — «Это стоит десять». Чтобы сказать «дёшево», скажите {{word:hen3}} {{word:shao3}} {{word:jin1}} — очень мало денег: {{word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}} — это дёшево.",
    ],
    tldr: {
      en: "{{Word:yao4}} + number + {{word:jin1}} is the price: {{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}}, this costs ten.",
      ru: "{{Word:yao4}} + число + {{word:jin1}} — цена: {{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}} — это стоит десять.",
    },
    necessity: {
      en: "Now you can say what things cost.",
      ru: "Теперь вы можете сказать, сколько что стоит.",
    },
  },
  info: {
    pattern: "price-jin",
    en: "Thing + {{word:yao4}} + number + {{word:jin1}}: {{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}}. (This costs ten.)",
    ru: "Вещь + {{word:yao4}} + число + {{word:jin1}}: {{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}}. (Это стоит десять.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}} {{word:jin1}}.",
      hanzi: "这个要十金。",
      en: "This costs ten.",
      ru: "Это стоит десять.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:yao4}} {{word:wu3}} {{word:jin1}}.",
      hanzi: "那个要五金。",
      en: "That costs five.",
      ru: "То стоит пять.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:yao4}} {{word:er4}}-{{word:shi2}} {{word:jin1}}.",
      hanzi: "这个书要二十金。",
      en: "This book costs twenty.",
      ru: "Эта книга стоит двадцать.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}}.",
      hanzi: "这个要很少金。",
      en: "This is cheap.",
      ru: "Это дёшево.",
    },
  ],
  exercises: [
    {
      en: "This book costs twenty.",
      ru: "Эта книга стоит двадцать.",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:yao4}} {{word:er4}}-{{word:shi2}} {{word:jin1}}.",
      hanzi: "这个书要二十金。",
    },
    {
      en: "That costs fifteen.",
      ru: "То стоит пятнадцать.",
      answer: "{{Word:na4}}-{{light:ge4}} {{word:yao4}} {{word:shi2}}-{{word:wu3}} {{word:jin1}}.",
      hanzi: "那个要十五金。",
    },
    {
      en: "This bag is cheap.",
      ru: "Эта сумка дешёвая.",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:bao1}} {{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}}.",
      hanzi: "这个包要很少金。",
    },
  ],
});
