// To count kinds, times, or parts, put the number before zhǒng, cì, or bùfen
// instead of gè. Pattern: number-zhǒng / number-cì / number-bùfen
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "count-kinds",
  prose: {
    en: [
      "**To count kinds, times, or parts**, put the number before {{word:zhong3}} (kind), {{word:ci4}} (time), or {{word:bu4fen}} (part) instead of {{word:ge4}}.",
      "",
      "**number-{{word:zhong3}} / number-{{word:ci4}} / number-{{word:bu4fen}}**",
    ],
    ru: [
      "**Чтобы посчитать виды, разы или части**, поставьте число перед {{word:zhong3}} (вид), {{word:ci4}} (раз) или {{word:bu4fen}} (часть) вместо {{word:ge4}}.",
      "",
      "**число-{{word:zhong3}} / число-{{word:ci4}} / число-{{word:bu4fen}}**",
    ],
    tldr: {
      en: "Count kinds with {{word:zhong3}} and times with {{word:ci4}}: {{word:san1}}-{{word:zhong3}}, {{word:san1}}-{{word:ci4}}.",
      ru: "Виды считают с {{word:zhong3}}, разы — с {{word:ci4}}: {{word:san1}}-{{word:zhong3}}, {{word:san1}}-{{word:ci4}}.",
    },
    necessity: {
      en: "Now you can say how many kinds, and how many times.",
      ru: "Теперь вы можете сказать, сколько видов и сколько раз.",
    },
  },
  info: {
    en: "number-{{word:zhong3}} / -{{word:ci4}} / -{{word:bu4fen}}, kinds / times / parts: {{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:san1}}-{{word:ci4}}. (I've been there three times.)",
    ru: "число-{{word:zhong3}} / -{{word:ci4}} / -{{word:bu4fen}} — виды / разы / части: {{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:san1}}-{{word:ci4}}. (Я был там три раза.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:san1}}-{{word:zhong3}} {{word:zhi2wu4}}.",
      hanzi: "我有三种植物。",
      en: "I have three kinds of plants.",
      ru: "У меня три вида растений.",
    },
    {
      pinyin: "{{Word:yi1}}-{{word:bu4fen}} {{word:ren2}} {{word:qu4}} {{word:le}}.",
      hanzi: "一部分人去了。",
      en: "Some of the people went.",
      ru: "Часть людей ушла.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:san1}}-{{word:ci4}}.",
      hanzi: "我去过三次。",
      en: "I've been there three times.",
      ru: "Я был там три раза.",
    },
  ],
  exercises: [
    {
      en: "I have two kinds of plants.",
      ru: "У меня два вида растений.",
      answer: "{{Word:wo3}} {{word:you3}} {{word:liang3}}-{{word:zhong3}} {{word:zhi2wu4}}.",
      hanzi: "我有两种植物。",
    },
  ],
});
