// To say something became different, put biàn (become) before the adjective,
// and le after. Pattern: Thing + biàn + adjective + le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "became",
  words: [
    {
      term: "{{word:bian4}}",
      hanzi: "变",
      en: "become, change",
      ru: "становиться, меняться",
    },
    {
      term: "{{word:ni2}}",
      hanzi: "泥",
      en: "mud, paste",
      ru: "грязь, паста",
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
      pinyin: "{{Word:kong1qi4}} {{word:bian4}} {{word:re4}} {{word:le}}.",
      hanzi: "空气变热了。",
      en: "The air turned hot.",
      ru: "Воздух стал горячим.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:ni2}} {{word:le}}.",
      hanzi: "水变泥了。",
      en: "The water turned into mud.",
      ru: "Вода превратилась в грязь.",
    },
    {
      pinyin: "{{Word:di4}}-{{word:shang4}} {{word:you3}} {{word:ni2}}.",
      hanzi: "地上有泥。",
      en: "There's mud on the floor.",
      ru: "На полу грязь.",
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
      en: "There's mud on my clothes.",
      ru: "На моей одежде грязь.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}}-{{word:shang4}} {{word:you3}} {{word:ni2}}.",
      hanzi: "我的衣服上有泥。",
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
