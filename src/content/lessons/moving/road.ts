// To talk about the way to a place, use lù (road, way); chē (car) goes on it.
// Pattern: lù hěn yuǎn / zhīdào lù / lù-shàng
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "road",
  words: [
    {
      word: "lu4",
      en: "road, path, way",
      ru: "дорога, путь",
    },
    {
      word: "che1",
      en: "car, vehicle",
      ru: "машина, транспорт",
    },
    {
      word: "xiao4",
      sense: "school",
      en: "school (in {{word:xue2}}-{{word:xiao4}})",
      ru: "школа (в {{word:xue2}}-{{word:xiao4}})",
    },
  ],
  prose: {
    en: [
      "**To talk about the way to a place**, use {{word:lu4}} (road, way).",
      "",
      "**{{word:lu4}} {{word:hen3}} {{word:yuan3}} / {{word:zhi1dao4}} {{word:lu4}} / {{word:lu4}}-{{word:shang4}}**",
      "",
      "{{word:che1}} is a car, or anything on wheels that carries you: {{Word:che1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}}, the car is on the road.",
      "A school is {{word:xue2}}-{{word:xiao4}} (学校): here 校 means school.",
    ],
    ru: [
      "**Чтобы говорить о дороге куда-то**, используйте {{word:lu4}} (дорога, путь).",
      "",
      "**{{word:lu4}} {{word:hen3}} {{word:yuan3}} / {{word:zhi1dao4}} {{word:lu4}} / {{word:lu4}}-{{word:shang4}}**",
      "",
      "{{word:che1}} — машина или всё, что возит вас на колёсах: {{Word:che1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}} — машина на дороге.",
      "Школа — {{word:xue2}}-{{word:xiao4}} (学校): здесь 校 значит «школа».",
    ],
    tldr: {
      en: "{{word:lu4}} is the road or the way: {{Word:lu4}} {{word:hen3}} {{word:yuan3}}, it's a long way.",
      ru: "{{word:lu4}} — дорога или путь: {{Word:lu4}} {{word:hen3}} {{word:yuan3}} — путь далёкий.",
    },
    necessity: { en: "Now you can ask the way.", ru: "Теперь вы можете спросить дорогу." },
  },
  info: {
    en: "{{word:lu4}}, road, way: {{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}? (Do you know the way?) {{word:che1}}, car: {{Word:che1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}}. (The car is on the road.)",
    ru: "{{word:lu4}} — дорога, путь: {{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}? (Ты знаешь дорогу?) {{word:che1}} — машина: {{Word:che1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}}. (Машина на дороге.)",
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
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:lu4}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "我的家在路的左边。",
      en: "My home is on the left side of the road.",
      ru: "Мой дом слева от дороги.",
    },
    {
      pinyin: "{{Word:che1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}}.",
      hanzi: "车在路上。",
      en: "The car is on the road.",
      ru: "Машина на дороге.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:che1}} {{word:zai4}} {{word:fu4jin4}}.",
      hanzi: "我的车在附近。",
      en: "My car is nearby.",
      ru: "Моя машина поблизости.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:xiao4}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "学校很远。",
      en: "The school is far.",
      ru: "Школа далеко.",
    },
  ],
  exercises: [
    {
      en: "Do you know the way?",
      ru: "Ты знаешь дорогу?",
      answer: "{{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}?",
      hanzi: "你知道路吗？",
    },
    {
      en: "Where is your car?",
      ru: "Где твоя машина?",
      answer: "{{Word:ni3}}-{{word:de}} {{word:che1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的车在哪里？",
    },
    {
      en: "I'm going to school.",
      ru: "Я иду в школу.",
      answer: "{{Word:wo3}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "我去学校。",
    },
  ],
});
