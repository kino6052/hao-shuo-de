// I know how to do something. Who + zhīdào zěnme + verb.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "know-how",
  words: [
    {
      term: "{{word:zhi1dao4}}",
      hanzi: "知道",
      en: "know; know how to (with zěnme)",
      ru: "знать; уметь (с zěnme)",
    },
  ],
  prose: {
    en: [
      "**To say you know how to do something**, put {{word:zhi1dao4}} {{word:zen3me}} (know how) before the verb.",
      "",
      "**Who + {{word:zhi1dao4}} {{word:zen3me}} + verb**",
      "",
      "{{word:zhi1dao4}} by itself means \"know\": {{Word:wo3}} {{word:zhi1dao4}} means \"I know\".",
    ],
    ru: [
      "**Чтобы сказать, что вы умеете что-то делать**, поставьте {{word:zhi1dao4}} {{word:zen3me}} (знать как) перед глаголом.",
      "",
      "**Кто + {{word:zhi1dao4}} {{word:zen3me}} + глагол**",
      "",
      "Само по себе {{word:zhi1dao4}} значит «знать»: {{Word:wo3}} {{word:zhi1dao4}} значит «Я знаю».",
    ],
    tldr: {
      en: "{{word:zhi1dao4}} {{word:zen3me}} before a verb means \"know how to\".",
      ru: "{{word:zhi1dao4}} {{word:zen3me}} перед глаголом значит «уметь».",
    },
    necessity: {
      en: "Now you can say what you know how to do.",
      ru: "Теперь вы можете сказать, что вы умеете делать.",
    },
  },
  info: {
    en: "{{word:zhi1dao4}} {{word:zen3me}} + verb, know how to: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}. (I know how to write.)",
    ru: "{{word:zhi1dao4}} {{word:zen3me}} + глагол — уметь: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}. (Я умею писать.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}.",
      hanzi: "我知道怎么写。",
      en: "I know how to write.",
      ru: "Я умею писать.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:shuo1}} {{word:ma}}?",
      hanzi: "你知道怎么说吗？",
      en: "Do you know how to say it?",
      ru: "Ты знаешь, как это сказать?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:zen3me}} {{word:wen4}}.",
      hanzi: "她知道怎么问。",
      en: "She knows how to ask.",
      ru: "Она умеет спрашивать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}.",
      hanzi: "他不知道怎么写。",
      en: "He doesn't know how to write it.",
      ru: "Он не знает, как это написать.",
    },
  ],
  exercises: [
    {
      en: "I don't know how to say it.",
      ru: "Я не знаю, как это сказать.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:zen3me}} {{word:shuo1}}.",
      hanzi: "我不知道怎么说。",
    },
  ],
  faq: [
    // néng vs zhīdào zěnme for "can"
    {
      question: {
        en: "When do I use {{word:neng2}}, and when {{word:zhi1dao4}} {{word:zen3me}}?",
        ru: "Когда говорить {{word:neng2}}, а когда {{word:zhi1dao4}} {{word:zen3me}}?",
      },
      en: "{{word:neng2}} is being able to: {{Word:wo3}} {{word:neng2}} {{word:deng3}} (I can wait). {{word:zhi1dao4}} {{word:zen3me}} is knowing how, something you learned: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}} (I know how to write).",
      ru: "{{word:neng2}} — это «мочь», иметь возможность: {{Word:wo3}} {{word:neng2}} {{word:deng3}} (Я могу подождать). {{word:zhi1dao4}} {{word:zen3me}} — это «уметь», знать, как делать то, чему вы научились: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}} (Я умею писать).",
    },
  ],
});
