// To say where you put a thing, put bǎ and the thing first, then fàng zài and
// the place. Pattern: Who + bǎ + thing + fàng zài + place
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "fang",
  words: [
    {
      term: "{{word:fang4}}",
      hanzi: "放",
      en: "put",
      ru: "класть, ставить",
    },
  ],
  prose: {
    en: [
      "**To say where you put a thing**, put {{word:ba3}} and the thing first, then {{word:fang4}} {{word:zai4}} (put at) and the place.",
      "",
      "**Who + {{word:ba3}} + thing + {{word:fang4}} {{word:zai4}} + place**",
    ],
    ru: [
      "**Чтобы сказать, куда вы положили вещь**, сначала поставьте {{word:ba3}} и вещь, потом {{word:fang4}} {{word:zai4}} (положить в) и место.",
      "",
      "**Кто + {{word:ba3}} + вещь + {{word:fang4}} {{word:zai4}} + место**",
    ],
    tldr: {
      en: "{{word:ba3}} + thing + {{word:fang4}} {{word:zai4}} + place says where you put it.",
      ru: "{{word:ba3}} + вещь + {{word:fang4}} {{word:zai4}} + место говорит, куда вы её положили.",
    },
    necessity: { en: "Now you can say where things go.", ru: "Теперь вы можете сказать, куда что положить." },
  },
  info: {
    en: "{{word:ba3}} + thing + {{word:fang4}} {{word:zai4}} + place, put: {{Word:wo3}} {{word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} {{word:le}}. (I put the clothes on the floor.)",
    ru: "{{word:ba3}} + вещь + {{word:fang4}} {{word:zai4}} + место — положить: {{Word:wo3}} {{word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} {{word:le}}. (Я положил одежду на пол.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} {{word:le}}.",
      hanzi: "我把衣服放在地上了。",
      en: "I put the clothes on the floor.",
      ru: "Я положил одежду на пол.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:gong1ju4}} {{word:fang4}} {{word:zai4}} {{word:he2zi}}-{{word:li3}} {{word:le}}.",
      hanzi: "他把工具放在盒子里了。",
      en: "He put the tool in the box.",
      ru: "Он положил инструмент в коробку.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:shui3guo3}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "把水果放在这里。",
      en: "Put the fruit here.",
      ru: "Положи фрукты сюда.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ba3}} {{word:wo3}}-{{word:de}} {{word:jin1}} {{word:fang4}} {{word:zai4}} {{word:na3li3}} {{word:le}}?",
      hanzi: "你把我的金放在哪里了？",
      en: "Where did you put my money?",
      ru: "Куда ты положил мои деньги?",
    },
  ],
  exercises: [
    {
      en: "Put the box here.",
      ru: "Положи коробку сюда.",
      answer: "{{Word:ba3}} {{word:he2zi}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "把盒子放在这里。",
    },
  ],
});
