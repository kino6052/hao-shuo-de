// To say "not", put bù right before the verb. Pattern: Who + bù + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "not",
  words: [
    {
      word: "hua4",
      en: "words, speech; {{word:shuo1}} {{word:hua4}}: talk",
      ru: "слова, речь; {{word:shuo1}} {{word:hua4}} — разговаривать",
    },
  ],
  prose: {
    en: [
      "**To say \"not\"**, put {{word:bu4}} right before the verb.",
      "",
      "**Who + {{word:bu4}} + verb**",
      "{{word:shuo1}} {{word:hua4}} (say words) is to talk.",
    ],
    ru: [
      "**Чтобы сказать «не»**, поставьте {{word:bu4}} прямо перед глаголом.",
      "",
      "**Кто + {{word:bu4}} + глагол**",
      "{{word:shuo1}} {{word:hua4}} («говорить слова») — разговаривать.",
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
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:he1}} {{word:shui3}}.",
      hanzi: "他不喝水。",
      en: "He doesn't drink water.",
      ru: "Он не пьёт воду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:shuo1}} {{word:hua4}}.",
      hanzi: "他不说话。",
      en: "He doesn't talk.",
      ru: "Он не разговаривает.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shuo1}} {{word:hua4}}.",
      hanzi: "我们说话。",
      en: "We're talking.",
      ru: "Мы разговариваем.",
    },
  ],
  exercises: [
    {
      en: "I don't write.",
      ru: "Я не пишу.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:xie3}}.",
      hanzi: "我不写。",
    },
    {
      en: "I don't talk.",
      ru: "Я не разговариваю.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:shuo1}} {{word:hua4}}.",
      hanzi: "我不说话。",
    },
  ],
});
