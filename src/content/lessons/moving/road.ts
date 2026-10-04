// To talk about the way to a place, use lù (road, way). Pattern: lù hěn yuǎn
// / zhīdào lù / lù-shàng
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "road",
  words: [
    {
      term: "{{word:lu4}}",
      hanzi: "路",
      en: "road, path, way",
      ru: "дорога, путь",
    },
  ],
  prose: {
    en: [
      "**To talk about the way to a place**, use {{word:lu4}} (road, way).",
      "",
      "**{{word:lu4}} {{word:hen3}} {{word:yuan3}} / {{word:zhi1dao4}} {{word:lu4}} / {{word:lu4}}-{{word:shang4}}**",
    ],
    ru: [
      "**Чтобы говорить о дороге куда-то**, используйте {{word:lu4}} (дорога, путь).",
      "",
      "**{{word:lu4}} {{word:hen3}} {{word:yuan3}} / {{word:zhi1dao4}} {{word:lu4}} / {{word:lu4}}-{{word:shang4}}**",
    ],
    tldr: {
      en: "{{word:lu4}} is the road or the way: {{Word:lu4}} {{word:hen3}} {{word:yuan3}}, it's a long way.",
      ru: "{{word:lu4}} — дорога или путь: {{Word:lu4}} {{word:hen3}} {{word:yuan3}} — путь далёкий.",
    },
    necessity: { en: "Now you can ask the way.", ru: "Теперь вы можете спросить дорогу." },
  },
  info: {
    en: "{{word:lu4}}, road, way: {{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}? (Do you know the way?)",
    ru: "{{word:lu4}} — дорога, путь: {{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}? (Ты знаешь дорогу?)",
  },
  examples: [
    {
      pinyin: "{{Word:lu4}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "路很远。",
      en: "It's a long way.",
      ru: "Путь далёкий.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}?",
      hanzi: "你知道路吗？",
      en: "Do you know the way?",
      ru: "Ты знаешь дорогу?",
    },
    {
      pinyin: "{{Word:lu4}}-{{word:shang4}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:ren2}}.",
      hanzi: "路上有很多人。",
      en: "There are lots of people on the road.",
      ru: "На дороге много людей.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:lu4}}-{{word:de}} {{word:zuo3bian1}}.",
      hanzi: "我的家在路的左边。",
      en: "My home is on the left side of the road.",
      ru: "Мой дом слева от дороги.",
    },
  ],
  exercises: [
    {
      en: "Do you know the way?",
      ru: "Ты знаешь дорогу?",
      answer: "{{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}?",
      hanzi: "你知道路吗？",
    },
  ],
});
