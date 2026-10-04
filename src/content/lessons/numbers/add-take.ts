// To add, put the numbers together (fàng zài yī-qǐ). To take away, use ná.
// Pattern: A, B fàng zài yī-qǐ, shì C / cóng A lǐ-miàn ná B, shì C
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "add-take",
  words: [
    {
      term: "{{word:suan4}}",
      hanzi: "算",
      en: "calculate, work out",
      ru: "считать, вычислять",
    },
  ],
  prose: {
    en: [
      "**To add**, put the numbers together with {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. **To take away**, use {{word:na2}} (take).",
      "",
      "**A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} C / {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B, {{word:shi4}} C**",
      "",
      "To ask for the answer, end with {{word:shi4}} {{word:duo1}}-{{word:shao3}}? You know {{word:na2}} (take) from Lesson {{lesson:direction-and-result}}: {{Word:na2}} {{word:yi1}}-ge! (Take one!)",
      "{{word:suan4}} is \"work it out\": {{Word:wo3}} {{word:suan4}} {{word:yi1xia4}}, let me work it out.",
    ],
    ru: [
      "**Чтобы сложить**, сложите числа вместе с помощью {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. **Чтобы отнять**, используйте {{word:na2}} (взять).",
      "",
      "**A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} C / {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B, {{word:shi4}} C**",
      "",
      "Чтобы спросить ответ, закончите словами {{word:shi4}} {{word:duo1}}-{{word:shao3}}? {{word:na2}} (взять) вы знаете из урока {{lesson:direction-and-result}}: {{Word:na2}} {{word:yi1}}-ge! (Возьми одну!)",
      "{{word:suan4}} — «посчитать»: {{Word:wo3}} {{word:suan4}} {{word:yi1xia4}} — дай-ка я посчитаю.",
    ],
    tldr: {
      en: "Add: put the numbers together with {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. Take away: {{word:na2}}.",
      ru: "Сложить: соедините числа с {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. Отнять: {{word:na2}}.",
    },
    necessity: { en: "Now you can add and take away.", ru: "Теперь вы можете складывать и вычитать." },
  },
  info: {
    en: "A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, add: {{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}. (3 + 4 = 7) {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B, take away: {{Word:cong2}} {{word:qi1}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}, {{word:shi4}} {{word:si4}}. (7 − 3 = 4)",
    ru: "A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} — сложить: {{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}. (3 + 4 = 7) {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B — отнять: {{Word:cong2}} {{word:qi1}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}, {{word:shi4}} {{word:si4}}. (7 − 3 = 4)",
  },
  examples: [
    {
      pinyin: "{{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}.",
      hanzi: "三、四放在一起，是七。",
      en: "Three and four put together is seven. (3 + 4 = 7)",
      ru: "Три и четыре вместе — семь. (3 + 4 = 7)",
    },
    {
      pinyin: "{{Word:wu3}}, {{word:wu3}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:shi2}}.",
      hanzi: "五、五放在一起，是十。",
      en: "Five and five together is ten. (5 + 5 = 10)",
      ru: "Пять и пять вместе — десять. (5 + 5 = 10)",
    },
    {
      pinyin: "{{Word:cong2}} {{word:qi1}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}, {{word:shi4}} {{word:si4}}.",
      hanzi: "从七里面拿三，是四。",
      en: "Take three from seven, and it's four. (7 − 3 = 4)",
      ru: "Возьми три из семи — будет четыре. (7 − 3 = 4)",
    },
    {
      pinyin: "{{Word:cong2}} {{word:shi2}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:liu4}}, {{word:shi4}} {{word:duo1}}-{{word:shao3}}?",
      hanzi: "从十里面拿六，是多少？",
      en: "Take six from ten: how much is it? (10 − 6 = ?)",
      ru: "Возьми шесть из десяти — сколько будет? (10 − 6 = ?)",
    },
    {
      pinyin: "{{Word:na2}} {{word:yi1}}-ge!",
      hanzi: "拿一个！",
      en: "Take one!",
      ru: "Возьми одну!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:suan4}} {{word:yi1xia4}}.",
      hanzi: "我算一下。",
      en: "Let me work it out.",
      ru: "Дай-ка я посчитаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:suan4}} {{word:ma}}?",
      hanzi: "你能算吗？",
      en: "Can you work it out?",
      ru: "Ты можешь посчитать?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:suan4}} {{word:le}}, {{word:shi4}} {{word:qi1}}.",
      hanzi: "我算了，是七。",
      en: "I worked it out: it's seven.",
      ru: "Я посчитал: семь.",
    },
  ],
  exercises: [
    {
      en: "Two and six together is eight.",
      ru: "Два и шесть вместе — восемь.",
      answer: "{{Word:er4}}, {{word:liu4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:ba1}}.",
      hanzi: "二、六放在一起，是八。",
    },
    {
      en: "Take two from nine: it's seven.",
      ru: "Возьми два из девяти — будет семь.",
      answer: "{{Word:cong2}} {{word:jiu3}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:er4}}, {{word:shi4}} {{word:qi1}}.",
      hanzi: "从九里面拿二，是七。",
    },
    {
      en: "Let me work it out.",
      ru: "Дай-ка я посчитаю.",
      answer: "{{Word:wo3}} {{word:suan4}} {{word:yi1xia4}}.",
      hanzi: "我算一下。",
    },
  ],
  faq: [
    // is there a word for "plus"? (no -- fàng zài yī-qǐ and ná)
    {
      question: { en: "Is there a word for \"plus\"?", ru: "Есть ли слово «плюс»?" },
      en: "Mandarin has words for plus, minus, times, and divided by. Hao-shuo-de doesn't need them: put the numbers together ({{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}), or take them away ({{word:na2}}).",
      ru: "В китайском есть слова для «плюс», «минус», «умножить» и «разделить». В Hǎo-shuō-de они не нужны: числа складывают вместе ({{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}) или забирают ({{word:na2}}).",
    },
  ],
});
