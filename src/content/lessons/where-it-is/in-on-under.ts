// To say in or on something, join lǐ (in) or shàng (on) to the place.
// Pattern: Thing + zài + place-lǐ / place-shàng
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "in-on-under",
  words: [
    {
      word: "shang4",
      hanzi: "上面",
      en: "on, up",
      ru: "на, вверх",
    },
    {
      word: "mian4",
      en: "side; joins a place word: lǐ-miàn, qián-miàn",
      ru: "сторона; присоединяется к слову места: lǐ-miàn, qián-miàn",
    },
    {
      word: "wang3",
      en: "net; the internet",
      ru: "сеть; интернет",
    },
  ],
  prose: {
    en: [
      "**To say in or on something**, join {{word:li3}} (in) or {{word:shang4}} (on) to the place.",
      "",
      "**Thing + {{word:zai4}} + place-{{word:li3}} / place-{{word:shang4}}**",
      "",
      "For under, say {{word:xia4}}-{{word:mian4}} (the bottom side): {{word:bao1}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
      "{{word:wang3}} is a net, and the internet too: {{word:zai4}} {{word:wang3}}-{{word:shang4}} is online.",
    ],
    ru: [
      "**Чтобы сказать «в» или «на» чём-то**, присоедините {{word:li3}} (в) или {{word:shang4}} (на) к месту.",
      "",
      "**Вещь + {{word:zai4}} + место-{{word:li3}} / место-{{word:shang4}}**",
      "",
      "В русском «в» и «на» стоят перед словом, а в китайском — после него: {{word:bao1}}-{{word:li3}}, «сумка-в».",
      "Чтобы сказать «под», говорите {{word:xia4}}-{{word:mian4}} (нижняя сторона): {{word:bao1}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
      "{{word:wang3}} — сеть, и интернет тоже: {{word:zai4}} {{word:wang3}}-{{word:shang4}} — в интернете.",
    ],
    tldr: {
      en: "Join {{word:li3}} (in) or {{word:shang4}} (on) to the place: {{word:bao1}}-{{word:li3}}, in the bag.",
      ru: "Присоедините {{word:li3}} (в) или {{word:shang4}} (на) к месту: {{word:bao1}}-{{word:li3}} — в сумке.",
    },
    necessity: {
      en: "Now you can say exactly where something is.",
      ru: "Теперь вы можете точно сказать, где что-то находится.",
    },
  },
  info: {
    en: "place-{{word:li3}} (in), place-{{word:shang4}} (on): {{Word:shui3}} {{word:zai4}} {{word:bao1}}-{{word:li3}}. (The water is in the bag.) {{word:wang3}}-{{word:shang4}}, online: {{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:zhao3}}. (I'm looking online.)",
    ru: "место-{{word:li3}} (в), место-{{word:shang4}} (на): {{Word:shui3}} {{word:zai4}} {{word:bao1}}-{{word:li3}}. (Вода в сумке.) {{word:wang3}}-{{word:shang4}} — в интернете: {{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:zhao3}}. (Я ищу в интернете.)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "水在包里。",
      en: "The water is in the bag.",
      ru: "Вода в сумке.",
    },
    {
      pinyin: "{{Word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "工具在地上。",
      en: "The tool is on the floor.",
      ru: "Инструмент на полу.",
    },
    {
      pinyin: "{{Word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:bao1}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "工具在包的下面。",
      en: "The tool is under the bag.",
      ru: "Инструмент под сумкой.",
    },
    {
      pinyin: "{{Word:yi1fu}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "衣服在家里。",
      en: "The clothes are in the house.",
      ru: "Одежда в доме.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "我的衣服在地上。",
      en: "My clothes are on the floor.",
      ru: "Моя одежда на полу.",
    },
    {
      pinyin: "{{Word:bao1}}-{{word:de}} {{word:xia4}}-{{word:mian4}} {{word:you3}} {{word:shui3}}.",
      hanzi: "包的下面有水。",
      en: "There is water under the bag.",
      ru: "Под сумкой вода.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:zai4}} {{word:shui3}}-{{word:li3}}.",
      hanzi: "我的脚在水里。",
      en: "My feet are in the water.",
      ru: "Мои ноги в воде.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:zhao3}}.",
      hanzi: "我在网上找。",
      en: "I'm looking for it online.",
      ru: "Я ищу это в интернете.",
    },
  ],
  exercises: [
    {
      en: "The money is in the bag.",
      ru: "Деньги в сумке.",
      answer: "{{Word:jin1}} {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "金在包里。",
    },
    {
      en: "The bag is on the floor.",
      ru: "Сумка на полу.",
      answer: "{{Word:bao1}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "包在地上。",
    },
    {
      en: "She's online.",
      ru: "Она в интернете.",
      answer: "{{Word:ta1}} {{word:zai4}} {{word:wang3}}-{{word:shang4}}.",
      hanzi: "她在网上。",
    },
    {
      en: "Are you online?",
      ru: "Ты в интернете?",
      answer: "{{Word:ni3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:ma}}?",
      hanzi: "你在网上吗？",
    },
  ],
  faq: [
    // why zài jiā but zài bāo-lǐ? (a thing needs -lǐ / -shàng to be a place)
    {
      question: {
        en: "Why is it {{word:zai4}} {{word:jia1}}, but {{word:zai4}} {{word:bao1}}-{{word:li3}}?",
        ru: "Почему {{word:zai4}} {{word:jia1}}, но {{word:zai4}} {{word:bao1}}-{{word:li3}}?",
      },
      en: "A home is already a place. A thing like a bag needs -{{word:li3}} or -{{word:shang4}} to become one: in the bag, on the bag. {{word:zai4}} {{word:bao1}} on its own sounds wrong.",
      ru: "Дом — это уже место. Вещь вроде сумки становится местом только с -{{word:li3}} или -{{word:shang4}}: в сумке, на сумке. {{word:zai4}} {{word:bao1}} само по себе звучит неправильно.",
    },
  ],
});
