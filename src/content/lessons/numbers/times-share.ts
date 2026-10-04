// To multiply, put a number together many times. To divide, see how many
// times you can take it away. Pattern: bǎ A fàng zài yī-qǐ B-cì / cóng C
// lǐ-miàn ná A, néng ná B-cì
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "times-share",
  prose: {
    en: [
      "**To multiply**, put a number together many times. **To divide**, see how many times you can take it away.",
      "",
      "**{{word:ba3}} A {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, {{word:shi4}} C / {{word:cong2}} C {{word:li3}}-{{word:mian4}} {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}}**",
    ],
    ru: [
      "**Чтобы умножить**, сложите число вместе много раз. **Чтобы разделить**, посмотрите, сколько раз его можно отнять.",
      "",
      "**{{word:ba3}} A {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, {{word:shi4}} C / {{word:cong2}} C {{word:li3}}-{{word:mian4}} {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}}**",
    ],
    tldr: {
      en: "Multiply: put it together many times. Divide: count how many times you can take it away.",
      ru: "Умножить: сложить вместе много раз. Разделить: посчитать, сколько раз можно отнять.",
    },
    necessity: { en: "Now you can multiply and divide.", ru: "Теперь вы можете умножать и делить." },
  },
  info: {
    en: "{{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, multiply: {{Word:ba3}} {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}-{{word:er4}}. (3 × 4 = 12) {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}}, divide: {{Word:cong2}} {{word:shi2}}-{{word:er4}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:si4}}, {{word:neng2}} {{word:na2}} {{word:san1}}-{{word:ci4}}. (12 ÷ 4 = 3)",
    ru: "{{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}} — умножить: {{Word:ba3}} {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}-{{word:er4}}. (3 × 4 = 12) {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}} — разделить: {{Word:cong2}} {{word:shi2}}-{{word:er4}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:si4}}, {{word:neng2}} {{word:na2}} {{word:san1}}-{{word:ci4}}. (12 ÷ 4 = 3)",
  },
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}-{{word:er4}}.",
      hanzi: "把四放在一起三次，是十二。",
      en: "Four put together three times is twelve. (3 × 4 = 12)",
      ru: "Четыре, сложенные три раза, — двенадцать. (3 × 4 = 12)",
    },
    {
      pinyin: "{{Word:ba3}} {{word:wu3}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:liang3}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}.",
      hanzi: "把五放在一起两次，是十。",
      en: "Five put together twice is ten. (2 × 5 = 10)",
      ru: "Пять, сложенные два раза, — десять. (2 × 5 = 10)",
    },
    {
      pinyin: "{{Word:cong2}} {{word:shi2}}-{{word:er4}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:si4}}, {{word:neng2}} {{word:na2}} {{word:san1}}-{{word:ci4}}.",
      hanzi: "从十二里面拿四，能拿三次。",
      en: "You can take four from twelve three times. (12 ÷ 4 = 3)",
      ru: "Из двенадцати можно взять четыре три раза. (12 ÷ 4 = 3)",
    },
    {
      pinyin: "{{Word:cong2}} {{word:shi2}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:wu3}}, {{word:neng2}} {{word:na2}} {{word:duo1}}-{{word:shao3}} {{word:ci4}}?",
      hanzi: "从十里面拿五，能拿多少次？",
      en: "How many times can you take five from ten? (10 ÷ 5 = ?)",
      ru: "Сколько раз можно взять пять из десяти? (10 ÷ 5 = ?)",
    },
  ],
  exercises: [
    {
      en: "Three put together three times is nine.",
      ru: "Три, сложенные три раза, — девять.",
      answer: "{{Word:ba3}} {{word:san1}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:jiu3}}.",
      hanzi: "把三放在一起三次，是九。",
    },
  ],
});
