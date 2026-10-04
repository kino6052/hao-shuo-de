// To say "not", put bù right before the verb. Pattern: Who + bù + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "not",
  prose: {
    en: [
      "**To say \"not\"**, put {{word:bu4}} right before the verb.",
      "",
      "**Who + {{word:bu4}} + verb**",
    ],
    ru: [
      "**Чтобы сказать «не»**, поставьте {{word:bu4}} прямо перед глаголом.",
      "",
      "**Кто + {{word:bu4}} + глагол**",
    ],
    tldr: {
      en: "Put {{word:bu4}} before a verb to say \"not\".",
      ru: "Поставьте {{word:bu4}} перед глаголом, чтобы сказать «не».",
    },
    necessity: {
      en: "Now you can say what someone doesn't do.",
      ru: "Теперь вы можете сказать, чего кто-то не делает.",
    },
  },
  info: {
    en: "{{word:bu4}} + verb, for \"not\": {{Word:ta1}} {{word:bu4}} {{word:xie3}}. (She doesn't write.)",
    ru: "{{word:bu4}} + глагол — «не»: {{Word:ta1}} {{word:bu4}} {{word:xie3}}. (Она не пишет.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:xie3}}.",
      hanzi: "她不写。",
      en: "She doesn't write.",
      ru: "Она не пишет.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "我不吃。",
      en: "I don't eat.",
      ru: "Я не ем.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bu4}} {{word:ting1}}.",
      hanzi: "你不听。",
      en: "You don't listen.",
      ru: "Ты не слушаешь.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "我不说。",
      en: "I don't speak.",
      ru: "Я не говорю.",
    },
  ],
  exercises: [
    {
      en: "I don't write.",
      ru: "Я не пишу.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:xie3}}.",
      hanzi: "我不写。",
    },
  ],
});
