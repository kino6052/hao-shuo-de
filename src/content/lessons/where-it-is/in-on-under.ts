// To say in or on something, join lǐ (in) or shàng (on) to the place.
// Pattern: Thing + zài + place-lǐ / place-shàng
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "in-on-under",
  words: [
    {
      term: "{{word:shang4}}",
      hanzi: "上面",
      en: "on, up",
      ru: "на, вверх",
    },
    {
      term: "{{word:xia4}}",
      hanzi: "下面",
      en: "under, down",
      ru: "под, вниз",
    },
    {
      term: "{{word:mian4}}",
      hanzi: "面",
      en: "side; joins a place word: lǐ-miàn, qián-miàn",
      ru: "сторона; присоединяется к слову места: lǐ-miàn, qián-miàn",
    },
    {
      term: "{{word:di4}}",
      hanzi: "地",
      en: "floor, ground",
      ru: "пол, земля",
    },
  ],
  prose: {
    en: [
      "**To say in or on something**, join {{word:li3}} (in) or {{word:shang4}} (on) to the place.",
      "",
      "**Thing + {{word:zai4}} + place-{{word:li3}} / place-{{word:shang4}}**",
      "",
      "For under, say {{word:xia4}}-{{word:mian4}} (the bottom side): {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ],
    ru: [
      "**Чтобы сказать «в» или «на» чём-то**, присоедините {{word:li3}} (в) или {{word:shang4}} (на) к месту.",
      "",
      "**Вещь + {{word:zai4}} + место-{{word:li3}} / место-{{word:shang4}}**",
      "",
      "В русском «в» и «на» стоят перед словом, а в китайском — после него: {{word:he2zi}}-{{word:li3}}, «коробка-в».",
      "Чтобы сказать «под», говорите {{word:xia4}}-{{word:mian4}} (нижняя сторона): {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ],
    tldr: {
      en: "Join {{word:li3}} (in) or {{word:shang4}} (on) to the place: {{word:he2zi}}-{{word:li3}}, in the box.",
      ru: "Присоедините {{word:li3}} (в) или {{word:shang4}} (на) к месту: {{word:he2zi}}-{{word:li3}} — в коробке.",
    },
    necessity: {
      en: "Now you can say exactly where something is.",
      ru: "Теперь вы можете точно сказать, где что-то находится.",
    },
  },
  info: {
    en: "place-{{word:li3}} (in), place-{{word:shang4}} (on): {{Word:shui3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}. (The water is in the box.)",
    ru: "место-{{word:li3}} (в), место-{{word:shang4}} (на): {{Word:shui3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}. (Вода в коробке.)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
      hanzi: "水在盒子里。",
      en: "The water is in the box.",
      ru: "Вода в коробке.",
    },
    {
      pinyin: "{{Word:gong1ju4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "工具在地上。",
      en: "The tool is on the floor.",
      ru: "Инструмент на полу.",
    },
    {
      pinyin: "{{Word:shui3guo3}} {{word:zai4}} {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "水果在盒子的下面。",
      en: "The fruit is under the box.",
      ru: "Фрукт под коробкой.",
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
      pinyin: "{{Word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}} {{word:you3}} {{word:shui3}}.",
      hanzi: "盒子的下面有水。",
      en: "There is water under the box.",
      ru: "Под коробкой вода.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:zai4}} {{word:shui3}}-{{word:li3}}.",
      hanzi: "我的脚在水里。",
      en: "My feet are in the water.",
      ru: "Мои ноги в воде.",
    },
  ],
  exercises: [
    {
      en: "The fruit is in the box.",
      ru: "Фрукт в коробке.",
      answer: "{{Word:shui3guo3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
      hanzi: "水果在盒子里。",
    },
    {
      en: "The box is on the floor.",
      ru: "Коробка на полу.",
      answer: "{{Word:he2zi}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "盒子在地上。",
    },
  ],
  faq: [
    // why zài jiā but zài hézi-lǐ? (a thing needs -lǐ / -shàng to be a place)
    {
      question: {
        en: "Why is it {{word:zai4}} {{word:jia1}}, but {{word:zai4}} {{word:he2zi}}-{{word:li3}}?",
        ru: "Почему {{word:zai4}} {{word:jia1}}, но {{word:zai4}} {{word:he2zi}}-{{word:li3}}?",
      },
      en: "A home is already a place. A thing like a box needs -{{word:li3}} or -{{word:shang4}} to become one: in the box, on the box. {{word:zai4}} {{word:he2zi}} on its own sounds wrong.",
      ru: "Дом — это уже место. Вещь вроде коробки становится местом только с -{{word:li3}} или -{{word:shang4}}: в коробке, на коробке. {{word:zai4}} {{word:he2zi}} само по себе звучит неправильно.",
    },
  ],
});
