// I can do something. Who + néng + verb; bù néng for can't.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "can",
  words: [
    {
      word: "neng2",
      en: "can",
      ru: "мочь",
    },
    {
      word: "yi3",
      en: "{{word:ke3}}-{{word:yi3}}: can, may",
      ru: "{{word:ke3}}-{{word:yi3}} — можно",
    },
  ],
  prose: {
    en: [
      "**To say you can do something**, put {{word:neng2}} (can) before the verb.",
      "",
      "**Who + {{word:neng2}} + verb**",
      "",
      "To say you can't, put {{word:bu4}} before {{word:neng2}}.",
      "{{word:ke3}}-{{word:yi3}} is can in the sense of may: it is allowed.",
    ],
    ru: [
      "**Чтобы сказать, что вы можете что-то сделать**, поставьте {{word:neng2}} (мочь) перед глаголом.",
      "",
      "**Кто + {{word:neng2}} + глагол**",
      "",
      "Чтобы сказать, что не можете, поставьте {{word:bu4}} перед {{word:neng2}}.",
      "{{word:ke3}}-{{word:yi3}} — «можно»: это разрешено.",
    ],
    tldr: {
      en: "Put {{word:neng2}} before a verb to say you can do it.",
      ru: "Поставьте {{word:neng2}} перед глаголом, чтобы сказать, что можете это сделать.",
    },
    necessity: {
      en: "Now you can say what you can and can't do.",
      ru: "Теперь вы можете сказать, что вы можете и чего не можете.",
    },
  },
  info: {
    items: [
      {
        en: "{{word:neng2}} + verb, can: {{Word:wo3}} {{word:neng2}} {{word:ting1}}. (I can hear.)",
        ru: "{{word:neng2}} + глагол — мочь: {{Word:wo3}} {{word:neng2}} {{word:ting1}}. (Я могу слышать.)",
      },
      {
        en: "For \"not\", put {{word:bu4}} first: {{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:chi1}}. (He can't eat.)",
        ru: "Чтобы сказать «не», поставьте {{word:bu4}} в начало: {{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:chi1}}. (Он не может есть.)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:ting1}}.",
      hanzi: "我能听。",
      en: "I can hear.",
      ru: "Я могу слышать.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:deng3}}.",
      hanzi: "我能等。",
      en: "I can wait.",
      ru: "Я могу подождать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:chi1}}.",
      hanzi: "他不能吃。",
      en: "He can't eat.",
      ru: "Он не может есть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:kan4}} {{word:ma}}?",
      hanzi: "你能看吗？",
      en: "Can you see?",
      ru: "Ты видишь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ke3}}-{{word:yi3}} {{word:kan4}} {{word:ma}}?",
      hanzi: "我可以看吗？",
      en: "May I look?",
      ru: "Можно посмотреть?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ke3}}-{{word:yi3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "你可以喝水。",
      en: "You can drink some water.",
      ru: "Можешь попить воды.",
    },
  ],
  exercises: [
    {
      en: "Can you write?",
      ru: "Ты можешь писать?",
      answer: "{{Word:ni3}} {{word:neng2}} {{word:xie3}} {{word:ma}}?",
      hanzi: "你能写吗？",
    },
    {
      en: "He can't wait.",
      ru: "Он не может ждать.",
      answer: "{{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:deng3}}.",
      hanzi: "他不能等。",
    },
    {
      en: "May I ask?",
      ru: "Можно спросить?",
      answer: "{{Word:wo3}} {{word:ke3}}-{{word:yi3}} {{word:wen4}} {{word:ma}}?",
      hanzi: "我可以问吗？",
    },
  ],
});
