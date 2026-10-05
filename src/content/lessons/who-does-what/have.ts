// To say you have something, use yǒu. For "don't have", say méi-yǒu. Pattern:
// Who + yǒu / méi-yǒu + thing
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "have",
  words: [
    {
      word: "you3",
      en: "have; there is",
      ru: "иметь; есть, имеется",
    },
    {
      word: "mei2",
      en: "not, but only with {{word:you3}}: {{word:mei2}}-{{word:you3}} means \"don't have\"",
      ru: "не, но только с {{word:you3}}: {{word:mei2}}-{{word:you3}} значит «нет, не иметь»",
    },
    {
      word: "jin1",
      en: "money",
      ru: "деньги",
    },
  ],
  prose: {
    en: [
      "**To say you have something**, use {{word:you3}}. For \"don't have\", say {{word:mei2}}-{{word:you3}}.",
      "",
      "**Who + {{word:you3}} / {{word:mei2}}-{{word:you3}} + thing**",
      "",
      "{{word:you3}} is the one verb that doesn't use {{word:bu4}}.",
    ],
    ru: [
      "**Чтобы сказать, что у вас что-то есть**, используйте {{word:you3}}. Чтобы сказать «нет», говорите {{word:mei2}}-{{word:you3}}.",
      "",
      "**Кто + {{word:you3}} / {{word:mei2}}-{{word:you3}} + вещь**",
      "",
      "В русском говорят «у меня есть», а в китайском — «я имею»: {{Word:wo3}} {{word:you3}} {{word:jin1}}.",
      "{{word:you3}} — единственный глагол, который не использует {{word:bu4}}.",
    ],
    tldr: {
      en: "{{word:you3}} is have. For \"don't have\", say {{word:mei2}}-{{word:you3}}, never {{word:bu4}} {{word:you3}}.",
      ru: "{{word:you3}} — «иметь». Чтобы сказать «нет», говорите {{word:mei2}}-{{word:you3}}, но никогда {{word:bu4}} {{word:you3}}.",
    },
    necessity: {
      en: "Now you can say what you have and don't have.",
      ru: "Теперь вы можете сказать, что у вас есть и чего нет.",
    },
  },
  info: {
    en: "{{word:mei2}}-{{word:you3}}, for \"don't have\": {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}. (I don't have money.)",
    ru: "{{word:mei2}}-{{word:you3}} — «нет, не иметь»: {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}. (У меня нет денег.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:dong4wu4}}.",
      hanzi: "我有动物。",
      en: "I have an animal.",
      ru: "У меня есть животное.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我没有金。",
      en: "I don't have money.",
      ru: "У меня нет денег.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:shui3}}.",
      hanzi: "他有水。",
      en: "He has water.",
      ru: "У него есть вода.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:jin1}}.",
      hanzi: "她有金。",
      en: "She has money.",
      ru: "У неё есть деньги.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:dong1xi}}.",
      hanzi: "他没有东西。",
      en: "He doesn't have anything.",
      ru: "У него ничего нет.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jin1}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "我的金很少。",
      en: "I have very little money.",
      ru: "У меня очень мало денег.",
    },
  ],
  exercises: [
    {
      en: "He doesn't have money.",
      ru: "У него нет денег.",
      answer: "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "他没有金。",
    },
  ],
});
