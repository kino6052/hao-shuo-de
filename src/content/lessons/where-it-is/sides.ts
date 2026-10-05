// To say in front, behind, or beside, join miàn (side) to qián (front) or hòu
// (back), or use pángbiān (beside). Pattern: Thing + zài + X-de qián-miàn /
// hòu-miàn / pángbiān
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "sides",
  words: [
    {
      word: "qian2",
      en: "front; qián-miàn: in front",
      ru: "перед; qián-miàn: впереди",
    },
    {
      word: "bian1",
      en: "side",
      ru: "сторона",
    },
    {
      word: "pang2bian1",
      en: "beside, next to",
      ru: "рядом, возле",
    },
  ],
  prose: {
    en: [
      "**To say in front, behind, or beside**, join {{word:mian4}} (side) to {{word:qian2}} (front) or {{word:hou4}} (back), or use {{word:pang2bian1}} (beside).",
      "",
      "**Thing + {{word:zai4}} + X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:pang2bian1}}**",
      "",
      "{{word:mian4}} joins the others too: {{word:li3}}-{{word:mian4}} (inside), {{word:shang4}}-{{word:mian4}} (on top), {{word:xia4}}-{{word:mian4}} (below).",
      "{{word:pang2bian1}} means beside, and {{word:bian1}} is a side: {{word:zhe4}}-{{word:bian1}} is this side, {{word:na4}}-{{word:bian1}} is that side.",
    ],
    ru: [
      "**Чтобы сказать «перед», «за» или «рядом»**, присоедините {{word:mian4}} (сторона) к {{word:qian2}} (перед) или {{word:hou4}} (зад) или используйте {{word:pang2bian1}} (рядом).",
      "",
      "**Вещь + {{word:zai4}} + X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:pang2bian1}}**",
      "",
      "{{word:mian4}} присоединяется и к другим словам: {{word:li3}}-{{word:mian4}} (внутри), {{word:shang4}}-{{word:mian4}} (сверху), {{word:xia4}}-{{word:mian4}} (внизу).",
      "{{word:pang2bian1}} значит «рядом», а {{word:bian1}} — сторона: {{word:zhe4}}-{{word:bian1}} — эта сторона, {{word:na4}}-{{word:bian1}} — та сторона.",
    ],
    tldr: {
      en: "Join {{word:mian4}} to {{word:qian2}} or {{word:hou4}} for in front or behind. {{word:pang2bian1}} means beside.",
      ru: "Присоедините {{word:mian4}} к {{word:qian2}} или {{word:hou4}}: «впереди» или «сзади». {{word:pang2bian1}} значит «рядом».",
    },
    necessity: {
      en: "Now you can place things around other things.",
      ru: "Теперь вы можете расположить одни вещи вокруг других.",
    },
  },
  info: {
    en: "X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:xia4}}-{{word:mian4}} / {{word:pang2bian1}}: {{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}. (I'm beside you.)",
    ru: "X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:xia4}}-{{word:mian4}} / {{word:pang2bian1}}: {{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}. (Я рядом с тобой.)",
  },
  examples: [
    {
      pinyin: "{{Word:ren2}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "人在我的前面。",
      en: "Someone is in front of me.",
      ru: "Передо мной кто-то есть.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:jia1}}-{{word:de}} {{word:hou4}}-{{word:mian4}}.",
      hanzi: "动物在家的后面。",
      en: "The animal is behind the house.",
      ru: "Животное за домом.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "我在你的旁边。",
      en: "I'm beside you.",
      ru: "Я рядом с тобой.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:de}} {{word:qian2}}-{{word:mian4}} {{word:you3}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "家的前面有动物。",
      en: "There is an animal in front of the house.",
      ru: "Перед домом животное.",
    },
    {
      pinyin: "{{Word:ba4ba}}-{{word:ma1ma}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "爸爸妈妈在我的旁边。",
      en: "My parents are beside me.",
      ru: "Мои родители рядом со мной.",
    },
    {
      pinyin: "{{Word:bao1}} {{word:zai4}} {{word:na4}}-{{word:bian1}}.",
      hanzi: "包在那边。",
      en: "The bag is on that side.",
      ru: "Сумка на той стороне.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "他在我的旁边。",
      en: "He's beside me.",
      ru: "Он рядом со мной.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:zai4}} {{word:bao1}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "植物在包的旁边。",
      en: "The plant is beside the bag.",
      ru: "Растение рядом с сумкой.",
    },
  ],
  exercises: [
    {
      en: "The animal is under the bag.",
      ru: "Животное под сумкой.",
      answer: "{{Word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:bao1}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "动物在包的下面。",
    },
    {
      en: "I'm in front of you.",
      ru: "Я перед тобой.",
      answer: "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "我在你的前面。",
    },
    {
      en: "She is beside me.",
      ru: "Она рядом со мной.",
      answer: "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "她在我的旁边。",
    },
    {
      en: "He is on this side.",
      ru: "Он на этой стороне.",
      answer: "{{Word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:bian1}}.",
      hanzi: "他在这边。",
    },
    {
      en: "The man is beside the house.",
      ru: "Мужчина возле дома.",
      answer: "{{Word:nan2}}-{{word:ren2}} {{word:zai4}} {{word:jia1}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "男人在家的旁边。",
    },
    {
      en: "The bag is on this side.",
      ru: "Сумка с этой стороны.",
      answer: "{{Word:bao1}} {{word:zai4}} {{word:zhe4}}-{{word:bian1}}.",
      hanzi: "包在这边。",
    },
    {
      en: "The sun is above us.",
      ru: "Солнце над нами.",
      answer: "{{Word:ri4}} {{word:zai4}} {{word:wo3}}-{{word:men}}-{{word:de}} {{word:shang4}}-{{word:mian4}}.",
      hanzi: "日在我们的上面。",
    },
  ],
  faq: [
    // -lǐ vs lǐ-miàn
    {
      question: {
        en: "What's the difference between -{{word:li3}} and {{word:li3}}-{{word:mian4}}?",
        ru: "Чем -{{word:li3}} отличается от {{word:li3}}-{{word:mian4}}?",
      },
      en: "-{{word:li3}} joins a place: {{word:bao1}}-{{word:li3}}. {{word:li3}}-{{word:mian4}} can also stand on its own: {{Word:ta1}} {{word:zai4}} {{word:li3}}-{{word:mian4}} (She's inside).",
      ru: "-{{word:li3}} присоединяется к месту: {{word:bao1}}-{{word:li3}}. {{word:li3}}-{{word:mian4}} может стоять и само по себе: {{Word:ta1}} {{word:zai4}} {{word:li3}}-{{word:mian4}} (Она внутри).",
    },
  ],
});
