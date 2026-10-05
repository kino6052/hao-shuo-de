// To say what time it is, put diǎn after the number. Pattern: number + diǎn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "clock",
  words: [
    {
      word: "dian3",
      en: "o'clock; yī-diǎn: a little",
      ru: "час (о времени); yī-diǎn: немного",
    },
    {
      word: "wan3",
      en: "late; {{word:wan3}}-{{light:shang4}}: evening",
      ru: "поздний; {{word:wan3}}-{{light:shang4}} — вечер",
    },
  ],
  prose: {
    en: [
      "**To say what time it is**, put {{word:dian3}} (o'clock) after the number.",
      "",
      "**number + {{word:dian3}}**",
      "",
      "Put the time before the verb: {{Word:wo3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}}. Ask with {{word:shen2me}} {{word:shi2}}-{{word:jian1}} (Lesson {{lesson:when-it-happens}}).",
      "{{word:wan3}}-{{light:shang4}} is the evening; {{word:wan3}} alone is late.",
    ],
    ru: [
      "**Чтобы сказать, который час**, поставьте {{word:dian3}} (час) после числа.",
      "",
      "**число + {{word:dian3}}**",
      "",
      "Время ставится перед глаголом: {{Word:wo3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}}. Спрашивайте с {{word:shen2me}} {{word:shi2}}-{{word:jian1}} (урок {{lesson:when-it-happens}}).",
      "{{word:wan3}}-{{light:shang4}} — вечер; само {{word:wan3}} — поздно.",
    ],
    tldr: {
      en: "number + {{word:dian3}} is the time: {{word:san1}}-{{word:dian3}} is three o'clock.",
      ru: "число + {{word:dian3}} — это время: {{word:san1}}-{{word:dian3}} — три часа.",
    },
    necessity: { en: "Now you can say what time it is.", ru: "Теперь вы можете сказать, который час." },
  },
  info: {
    en: "number + {{word:dian3}}, o'clock: {{Word:xian4}}-{{word:zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}}. (It's three o'clock now.)",
    ru: "число + {{word:dian3}} — час: {{Word:xian4}}-{{word:zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}}. (Сейчас три часа.)",
  },
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}}.",
      hanzi: "现在是三点。",
      en: "It's three o'clock now.",
      ru: "Сейчас три часа.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我十二点吃饭。",
      en: "I eat at twelve o'clock.",
      ru: "Я ем в двенадцать часов.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi2}}-{{word:dian3}} {{word:shui4jiao4}}.",
      hanzi: "他十点睡觉。",
      en: "He goes to sleep at ten.",
      ru: "Он ложится спать в десять.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:san1}}-{{word:dian3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "我三点回家。",
      en: "I go home at three.",
      ru: "Я иду домой в три.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi2}}-{{word:dian3}} {{word:tang3}}-{{word:xia4}}.",
      hanzi: "他十点躺下。",
      en: "He lies down at ten.",
      ru: "Он ложится в десять.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:wan3}}-{{light:shang4}} {{word:qi1}}-{{word:dian3}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我晚上七点吃饭。",
      en: "I eat at seven in the evening.",
      ru: "Я ужинаю в семь вечера.",
    },
    {
      pinyin: "{{Word:hen3}} {{word:wan3}} {{word:le}}.",
      hanzi: "很晚了。",
      en: "It's late.",
      ru: "Уже поздно.",
    },
  ],
  exercises: [
    {
      en: "It's five o'clock now.",
      ru: "Сейчас пять часов.",
      answer: "{{Word:xian4}}-{{word:zai4}} {{word:shi4}} {{word:wu3}}-{{word:dian3}}.",
      hanzi: "现在是五点。",
    },
    {
      en: "He goes to sleep at ten in the evening.",
      ru: "Он ложится спать в десять вечера.",
      answer: "{{Word:ta1}} {{word:wan3}}-{{light:shang4}} {{word:shi2}}-{{word:dian3}} {{word:shui4jiao4}}.",
      hanzi: "他晚上十点睡觉。",
    },
  ],
});
