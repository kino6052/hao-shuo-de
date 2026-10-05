// To say something became different, put biàn (become) before the adjective,
// and le after. Pattern: Thing + biàn + adjective + le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "became",
  words: [
    {
      word: "bian4",
      en: "become, change",
      ru: "становиться, меняться",
    },
  ],
  prose: {
    en: [
      "**To say something became different**, put {{word:bian4}} (become) before the adjective, and {{word:le}} after.",
      "",
      "**Thing + {{word:bian4}} + adjective + {{word:le}}**",
    ],
    ru: [
      "**Чтобы сказать, что что-то стало другим**, поставьте {{word:bian4}} (становиться) перед прилагательным, а {{word:le}} — после.",
      "",
      "**Вещь + {{word:bian4}} + прилагательное + {{word:le}}**",
    ],
    tldr: {
      en: "{{word:bian4}} + adjective + {{word:le}} means it became that.",
      ru: "{{word:bian4}} + прилагательное + {{word:le}} значит, что что-то стало таким.",
    },
    necessity: { en: "Now you can describe a change.", ru: "Теперь вы можете описать перемену." },
  },
  info: {
    en: "{{word:bian4}} + adjective + {{word:le}}, became: {{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}. (The water turned cold.)",
    ru: "{{word:bian4}} + прилагательное + {{word:le}} — стало: {{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}. (Вода стала холодной.)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
      hanzi: "水变冷了。",
      en: "The water turned cold.",
      ru: "Вода стала холодной.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bian4}} {{word:hao3}} {{word:le}}.",
      hanzi: "他变好了。",
      en: "He got better.",
      ru: "Ему стало лучше.",
    },
    {
      pinyin: "{{Word:kong1}}-{{word:qi4}} {{word:bian4}} {{word:re4}} {{word:le}}.",
      hanzi: "空气变热了。",
      en: "The air turned hot.",
      ru: "Воздух стал горячим.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bian4}} {{word:lao3}} {{word:le}}.",
      hanzi: "他变老了。",
      en: "He got old.",
      ru: "Он постарел.",
    },
    {
      pinyin: "{{Word:di4}}-{{word:shang4}} {{word:you3}} {{word:shui3}}.",
      hanzi: "地上有水。",
      en: "There's water on the floor.",
      ru: "На полу вода.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bian4}} {{word:gao1}} {{word:le}}.",
      hanzi: "他变高了。",
      en: "He got taller.",
      ru: "Он вырос.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:di4}}-{{light:fang1}} {{word:bian4}} {{word:ming2}} {{word:le}}.",
      hanzi: "这个地方变明了。",
      en: "This place got bright.",
      ru: "Здесь стало светло.",
    },
  ],
  exercises: [
    {
      en: "The water became hot.",
      ru: "Вода стала горячей.",
      answer: "{{Word:shui3}} {{word:bian4}} {{word:re4}} {{word:le}}.",
      hanzi: "水变热了。",
    },
    {
      en: "There's water on my clothes.",
      ru: "На моей одежде вода.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}}-{{word:shang4}} {{word:you3}} {{word:shui3}}.",
      hanzi: "我的衣服上有水。",
    },
  ],
  faq: [
    // biàn lěng le vs lěng le
    {
      question: {
        en: "Is there a difference between {{word:leng3}} {{word:le}} and {{word:bian4}} {{word:leng3}} {{word:le}}?",
        ru: "Есть ли разница между {{word:leng3}} {{word:le}} и {{word:bian4}} {{word:leng3}} {{word:le}}?",
      },
      en: "Both say it got cold. {{word:bian4}} makes the change itself the point: it turned cold.",
      ru: "Оба говорят, что стало холодно. {{word:bian4}} делает главным саму перемену: оно превратилось в холодное.",
    },
  ],
});
