// To say what you do to a thing, put bǎ and the thing before the action.
// Pattern: Who + bǎ + thing + nòng + result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "ba",
  words: [
    {
      word: "ba3",
      en: "puts the thing first: bǎ + thing + action",
      ru: "ставит вещь вперёд: bǎ + вещь + действие",
    },
  ],
  prose: {
    en: [
      "**To say what you do to a thing**, put {{word:ba3}} and the thing before the action.",
      "",
      "**Who + {{word:ba3}} + thing + {{word:nong4}} + result**",
    ],
    ru: [
      "**Чтобы сказать, что вы делаете с вещью**, поставьте {{word:ba3}} и вещь перед действием.",
      "",
      "**Кто + {{word:ba3}} + вещь + {{word:nong4}} + результат**",
    ],
    tldr: {
      en: "{{word:ba3}} + thing comes before the action: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
      ru: "{{word:ba3}} + вещь ставится перед действием: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
    },
    necessity: {
      en: "Now you can say exactly which thing you changed.",
      ru: "Теперь вы можете точно сказать, какую вещь вы изменили.",
    },
  },
  info: {
    en: "{{word:ba3}} + thing + {{word:nong4}} + result: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}. (I fixed the tool.)",
    ru: "{{word:ba3}} + вещь + {{word:nong4}} + результат: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}. (Я починил инструмент.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我把工具弄好了。",
      en: "I fixed the tool.",
      ru: "Я починил инструмент.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:nong4}} {{word:huai4}} {{word:le}}.",
      hanzi: "他把盒子弄坏了。",
      en: "He broke the box.",
      ru: "Он сломал коробку.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:shui3}} {{word:nong4}} {{word:re4}}.",
      hanzi: "把水弄热。",
      en: "Heat up the water.",
      ru: "Нагрей воду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:kou3}} {{word:nong4}} {{word:da4}} {{word:le}}.",
      hanzi: "他把口弄大了。",
      en: "He made the opening bigger.",
      ru: "Он сделал отверстие больше.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:shui3}} {{word:dou1}} {{word:nong4}} {{word:re4}} {{word:le}}.",
      hanzi: "他把水都弄热了。",
      en: "He made all the water hot.",
      ru: "Он нагрел всю воду.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:he2zi}} {{word:nong4}}-{{word:kai1}} {{word:le}}.",
      hanzi: "我把盒子弄开了。",
      en: "I got the box open.",
      ru: "Я открыл коробку.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:huo3}} {{word:guan1}} {{word:le}}.",
      hanzi: "他把火关了。",
      en: "He turned off the fire.",
      ru: "Он выключил огонь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:nong4}}-{{word:luan4}} {{word:le}}.",
      hanzi: "他把我的衣服弄乱了。",
      en: "He messed up my clothes.",
      ru: "Он раскидал мою одежду.",
    },
  ],
  exercises: [
    {
      en: "I fixed the box.",
      ru: "Я починил коробку.",
      answer: "{{Word:wo3}} {{word:ba3}} {{word:he2zi}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我把盒子弄好了。",
    },
    {
      en: "Turn the light off.",
      ru: "Выключи свет.",
      answer: "{{Word:ba3}} {{word:deng1}} {{word:guan1}} {{word:le}}.",
      hanzi: "把灯关了。",
    },
  ],
  faq: [
    // when do I use bǎ? (doing something to a thing, with a result)
    {
      question: { en: "When do I use {{word:ba3}}?", ru: "Когда нужно {{word:ba3}}?" },
      en: "When you do something to a thing, and it ends up a certain way: fixed, broken, finished. {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:huai4}} {{word:le}} (I broke the tool). Just looking at a thing doesn't change it, so {{Word:wo3}} {{word:kan4}} {{word:gong1ju4}} has no {{word:ba3}}.",
      ru: "Когда вы что-то делаете с вещью и она в итоге становится какой-то: починенной, сломанной, законченной. {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:huai4}} {{word:le}} (Я сломал инструмент). Если просто смотреть на вещь, она не меняется, поэтому в {{Word:wo3}} {{word:kan4}} {{word:gong1ju4}} нет {{word:ba3}}.",
    },
  ],
});
