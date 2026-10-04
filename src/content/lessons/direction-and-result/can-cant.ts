// To say you can or can't get the result, put de or bù between the verb and
// the result. Pattern: verb-de-result / verb-bù-result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "can-cant",
  prose: {
    en: [
      "**To say you can or can't get the result**, put {{word:de}} (can) or {{word:bu4}} (can't) between the verb and the result.",
      "",
      "**verb-{{word:de}}-result / verb-{{word:bu4}}-result**",
      "",
      "{{word:kan4}}-{{word:bu4}}-{{word:dao4}} is \"can't see\", {{word:chi1}}-{{word:bu4}}-{{word:wan2}} is \"can't finish eating\", and {{word:na2}}-{{word:bu4}}-{{word:dong4}} is \"can't lift\". It works with direction words too: {{word:jin4}}-{{word:bu4}}-{{word:qu4}}, \"can't get in\".",
    ],
    ru: [
      "**Чтобы сказать, получается результат или нет**, поставьте {{word:de}} (получается) или {{word:bu4}} (не получается) между глаголом и результатом.",
      "",
      "**глагол-{{word:de}}-результат / глагол-{{word:bu4}}-результат**",
      "",
      "{{word:kan4}}-{{word:bu4}}-{{word:dao4}} — «не видно», {{word:chi1}}-{{word:bu4}}-{{word:wan2}} — «не могу доесть», {{word:na2}}-{{word:bu4}}-{{word:dong4}} — «не могу поднять». Со словами направления тоже работает: {{word:jin4}}-{{word:bu4}}-{{word:qu4}} — «не могу войти».",
    ],
    tldr: {
      en: "verb-{{word:bu4}}-result is can't: {{word:kan4}}-{{word:bu4}}-{{word:dao4}}, can't see. verb-{{word:de}}-result is can.",
      ru: "глагол-{{word:bu4}}-результат — не получается: {{word:kan4}}-{{word:bu4}}-{{word:dao4}} — не видно. глагол-{{word:de}}-результат — получается.",
    },
    necessity: {
      en: "Now you can say you can't see, can't hear, or can't finish.",
      ru: "Теперь вы можете сказать, что вам не видно, не слышно или не доесть.",
    },
  },
  info: {
    en: "verb-{{word:de}}-result / verb-{{word:bu4}}-result, can / can't: {{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}. (I can't see it.)",
    ru: "глагол-{{word:de}}-результат / глагол-{{word:bu4}}-результат — получается / не получается: {{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}. (Мне не видно.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}.",
      hanzi: "我看不到。",
      en: "I can't see it.",
      ru: "Мне не видно.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:de}}-{{word:dao4}} {{word:ma}}?",
      hanzi: "你听得到吗？",
      en: "Can you hear it?",
      ru: "Тебе слышно?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:bu4}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我找不到我的衣服。",
      en: "I can't find my clothes.",
      ru: "Я не могу найти свою одежду.",
    },
    {
      pinyin: "{{Word:mi3fan4}} {{word:hen3}} {{word:duo1}}, {{word:wo3}} {{word:chi1}}-{{word:bu4}}-{{word:wan2}}.",
      hanzi: "米饭很多，我吃不完。",
      en: "There's a lot of rice. I can't finish it.",
      ru: "Риса много, я не могу всё доесть.",
    },
    {
      pinyin: "{{Word:he2zi}} {{word:hen3}} {{word:da4}}, {{word:wo3}} {{word:na2}}-{{word:bu4}}-{{word:dong4}}.",
      hanzi: "盒子很大，我拿不动。",
      en: "The box is too big. I can't lift it.",
      ru: "Коробка слишком большая, я не могу её поднять.",
    },
    {
      pinyin: "{{Word:kou3}} {{word:hen3}} {{word:xiao3}}, {{word:wo3}}-{{word:men}} {{word:jin4}}-{{word:bu4}}-{{word:qu4}}.",
      hanzi: "口很小，我们进不去。",
      en: "The opening is small. We can't get in.",
      ru: "Проём маленький, мы не можем войти.",
    },
  ],
  exercises: [
    {
      en: "I can't hear it.",
      ru: "Мне не слышно.",
      answer: "{{Word:wo3}} {{word:ting1}}-{{word:bu4}}-{{word:dao4}}.",
      hanzi: "我听不到。",
    },
    {
      en: "Can you see it?",
      ru: "Тебе видно?",
      answer: "{{Word:ni3}} {{word:kan4}}-{{word:de}}-{{word:dao4}} {{word:ma}}?",
      hanzi: "你看得到吗？",
    },
  ],
  faq: [
    // is kàn-bù-dào the same as bù néng kàn? (no: you look, but the result doesn't come)
    {
      question: {
        en: "Is {{word:kan4}}-{{word:bu4}}-{{word:dao4}} the same as {{word:bu4}} {{word:neng2}} {{word:kan4}}?",
        ru: "{{word:kan4}}-{{word:bu4}}-{{word:dao4}} — то же самое, что {{word:bu4}} {{word:neng2}} {{word:kan4}}?",
      },
      en: "No. {{word:bu4}} {{word:neng2}} {{word:kan4}} is \"you can't look\" or \"you're not allowed to look\". {{word:kan4}}-{{word:bu4}}-{{word:dao4}} is \"you look, but you can't see it\": you try, and the result doesn't come.",
      ru: "Нет. {{word:bu4}} {{word:neng2}} {{word:kan4}} — «смотреть не получится» или «смотреть нельзя». {{word:kan4}}-{{word:bu4}}-{{word:dao4}} — «смотришь, но не видно»: вы пытаетесь, а результата нет.",
    },
  ],
});
