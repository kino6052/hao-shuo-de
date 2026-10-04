// To say thank you, say xiè-xie. To answer, say bù yòng xiè. Pattern: xiè-xie
// (nǐ)! / bù yòng xiè.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "thanks",
  words: [
    {
      term: "{{word:xie4}}",
      hanzi: "谢",
      en: "thank; xiè-xie: thank you",
      ru: "благодарить; xiè-xie: спасибо",
    },
  ],
  prose: {
    en: [
      "**To say thank you**, say {{word:xie4}}-xie: {{word:xie4}} (thank) said twice, with the second one short and light.",
      "",
      "**{{word:xie4}}-xie! / {{word:xie4}}-xie {{word:ni3}}!**",
      "",
      "To answer, say {{word:bu4}} {{word:yong4}} {{word:xie4}}: \"no need to thank me\". Lesson {{lesson:doubling-words}} shows more words you can say twice.",
    ],
    ru: [
      "**Чтобы сказать спасибо**, скажите {{word:xie4}}-xie: {{word:xie4}} (благодарить) два раза, причём второй раз — коротко и легко.",
      "",
      "**{{word:xie4}}-xie! / {{word:xie4}}-xie {{word:ni3}}!**",
      "",
      "В ответ говорят {{word:bu4}} {{word:yong4}} {{word:xie4}} — «не нужно благодарить». В уроке {{lesson:doubling-words}} — другие слова, которые можно сказать дважды.",
    ],
    tldr: {
      en: "{{word:xie4}}-xie is thank you. {{word:bu4}} {{word:yong4}} {{word:xie4}} is you're welcome.",
      ru: "{{word:xie4}}-xie — «спасибо». {{word:bu4}} {{word:yong4}} {{word:xie4}} — «не за что».",
    },
    necessity: { en: "Now you can thank people.", ru: "Теперь вы можете благодарить людей." },
  },
  info: {
    en: "{{word:xie4}}-xie, thank you: {{Word:xie4}}-xie {{word:ni3}}! (Thank you!) {{Word:bu4}} {{word:yong4}} {{word:xie4}}. (You're welcome.)",
    ru: "{{word:xie4}}-xie — спасибо: {{Word:xie4}}-xie {{word:ni3}}! (Спасибо тебе!) {{Word:bu4}} {{word:yong4}} {{word:xie4}}. (Не за что.)",
  },
  examples: [
    {
      pinyin: "{{Word:xie4}}-xie!",
      hanzi: "谢谢！",
      en: "Thank you!",
      ru: "Спасибо!",
    },
    {
      pinyin: "{{Word:xie4}}-xie {{word:ni3}}!",
      hanzi: "谢谢你！",
      en: "Thank you!",
      ru: "Спасибо тебе!",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yong4}} {{word:xie4}}.",
      hanzi: "不用谢。",
      en: "You're welcome.",
      ru: "Не за что.",
    },
    {
      pinyin: "{{Word:xie4}}-xie {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3}}.",
      hanzi: "谢谢你给我水。",
      en: "Thank you for giving me water.",
      ru: "Спасибо, что дал мне воды.",
    },
  ],
  exercises: [
    {
      en: "Thank you for giving me fruit.",
      ru: "Спасибо, что дал мне фрукты.",
      answer: "{{Word:xie4}}-xie {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3guo3}}.",
      hanzi: "谢谢你给我水果。",
    },
    {
      en: "You're welcome.",
      ru: "Не за что.",
      answer: "{{Word:bu4}} {{word:yong4}} {{word:xie4}}.",
      hanzi: "不用谢。",
    },
  ],
});
