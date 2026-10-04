// To say not, or not very, put bù or bù hěn before the adjective. Pattern:
// Thing + bù (+ hěn) + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "not",
  prose: {
    en: [
      "**To say not, or not very**, put {{word:bu4}} or {{word:bu4}} {{word:hen3}} before the adjective.",
      "",
      "**Thing + {{word:bu4}} (+ {{word:hen3}}) + adjective**",
    ],
    ru: [
      "**Чтобы сказать «не» или «не очень»**, поставьте {{word:bu4}} или {{word:bu4}} {{word:hen3}} перед прилагательным.",
      "",
      "**Вещь + {{word:bu4}} (+ {{word:hen3}}) + прилагательное**",
    ],
    tldr: {
      en: "{{word:bu4}} before an adjective means not. {{word:bu4}} {{word:hen3}} means not very.",
      ru: "{{word:bu4}} перед прилагательным значит «не». {{word:bu4}} {{word:hen3}} — «не очень».",
    },
    necessity: {
      en: "Now you can say how something isn't.",
      ru: "Теперь вы можете сказать, каким что-то не является.",
    },
  },
  info: {
    en: "{{word:bu4}} / {{word:bu4}} {{word:hen3}} + adjective, not / not very: {{Word:shui3}} {{word:bu4}} {{word:leng3}}. (The water isn't cold.)",
    ru: "{{word:bu4}} / {{word:bu4}} {{word:hen3}} + прилагательное — не / не очень: {{Word:shui3}} {{word:bu4}} {{word:leng3}}. (Вода не холодная.)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:bu4}} {{word:leng3}}.",
      hanzi: "水不冷。",
      en: "The water isn't cold.",
      ru: "Вода не холодная.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:bu4}} {{word:hen3}} {{word:qi2guai4}}.",
      hanzi: "这个不很奇怪。",
      en: "This isn't very strange.",
      ru: "Это не очень странно.",
    },
    {
      pinyin: "{{Word:mi3fan4}} {{word:bu4}} {{word:re4}}.",
      hanzi: "米饭不热。",
      en: "The rice isn't hot.",
      ru: "Рис не горячий.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:kuai4}}.",
      hanzi: "我不快。",
      en: "I'm not fast.",
      ru: "Я не быстрый.",
    },
    {
      pinyin: "{{Word:wei4dao4}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "味道不好。",
      en: "It doesn't taste good.",
      ru: "Невкусно.",
    },
  ],
  exercises: [
    {
      en: "My parents aren't old.",
      ru: "Мои родители не старые.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:fu4mu3}} {{word:bu4}} {{word:lao3}}.",
      hanzi: "我的父母不老。",
    },
    {
      en: "The water isn't cold.",
      ru: "Вода не холодная.",
      answer: "{{Word:shui3}} {{word:bu4}} {{word:leng3}}.",
      hanzi: "水不冷。",
    },
    {
      en: "The rice doesn't taste good.",
      ru: "Рис невкусный.",
      answer: "{{Word:mi3fan4}}-{{word:de}} {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "米饭的味道不好。",
    },
  ],
  faq: [
    // bù hěn vs hěn bù (order matters)
    {
      question: {
        en: "Is {{word:bu4}} {{word:hen3}} the same as {{word:hen3}} {{word:bu4}}?",
        ru: "{{word:bu4}} {{word:hen3}} — то же самое, что {{word:hen3}} {{word:bu4}}?",
      },
      en: "No, the order matters. {{word:bu4}} {{word:hen3}} {{word:hao3}} is \"not very good\". {{word:hen3}} {{word:bu4}} {{word:hao3}} is \"very not good\": really bad.",
      ru: "Нет, порядок важен, как и в русском. {{word:bu4}} {{word:hen3}} {{word:hao3}} — «не очень хорошо». {{word:hen3}} {{word:bu4}} {{word:hao3}} — «очень нехорошо», то есть совсем плохо.",
    },
  ],
});
