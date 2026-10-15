// Xià before a thing can mean falls. Pattern: tiān-shàng xià + thing
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "rain",
  prose: {
    en: [
      "**To say it rains**, say that water falls from the sky: {{word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}}.",
      "",
      "**{{word:tian1}}-{{word:shang4}} + {{word:xia4}} + thing**",
      "",
      "{{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}} is \"It's raining\". Say {{word:bu4}} {{word:xia4}} when it isn't: {{word:tian1}}-{{word:shang4}} {{word:bu4}} {{word:xia4}} {{word:shui3}}.",
    ],
    ru: [
      "**Чтобы сказать «идёт дождь»**, скажите, что с неба падает вода: {{word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}}.",
      "",
      "**{{word:tian1}}-{{word:shang4}} + {{word:xia4}} + вещь**",
      "",
      "{{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}} — «Идёт дождь». Если дождя нет, скажите {{word:bu4}} {{word:xia4}}: {{word:tian1}}-{{word:shang4}} {{word:bu4}} {{word:xia4}} {{word:shui3}}.",
    ],
    tldr: {
      en: "{{Word:xia4}} + thing: the thing falls. {{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}, it's raining.",
      ru: "{{Word:xia4}} + вещь — вещь падает. {{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}} — идёт дождь.",
    },
    necessity: {
      en: "Now you can talk about the rain.",
      ru: "Теперь вы можете говорить о дожде.",
    },
  },
  info: {
    pattern: "xia-fall",
    en: "{{Word:tian1}}-{{word:shang4}} + {{word:xia4}} + thing: {{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}. (It's raining.)",
    ru: "{{Word:tian1}}-{{word:shang4}} + {{word:xia4}} + вещь: {{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}. (Идёт дождь.)",
  },
  examples: [
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}.",
      hanzi: "天上下水了。",
      en: "It's raining.",
      ru: "Идёт дождь.",
    },
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:bu4}} {{word:xia4}} {{word:shui3}}.",
      hanzi: "天上不下水。",
      en: "It isn't raining.",
      ru: "Дождя нет.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:jia1}}, {{word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}.",
      hanzi: "我在家，天上下水了。",
      en: "I'm at home, and it's raining.",
      ru: "Я дома, и идёт дождь.",
    },
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:hen3}} {{word:duo1}} {{word:shui3}} {{word:le}}.",
      hanzi: "天上下很多水了。",
      en: "It's raining a lot.",
      ru: "Идёт сильный дождь.",
    },
  ],
  exercises: [
    {
      en: "It's raining.",
      ru: "Идёт дождь.",
      answer: "{{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}.",
      hanzi: "天上下水了。",
    },
    {
      en: "It isn't raining.",
      ru: "Дождя нет.",
      answer: "{{Word:tian1}}-{{word:shang4}} {{word:bu4}} {{word:xia4}} {{word:shui3}}.",
      hanzi: "天上不下水。",
    },
    {
      en: "I'm at home, and it's raining.",
      ru: "Я дома, и идёт дождь.",
      answer: "{{Word:wo3}} {{word:zai4}} {{word:jia1}}, {{word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}.",
      hanzi: "我在家，天上下水了。",
    },
  ],
});
