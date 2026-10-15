// A thing can come first, then a whole sentence about it.
// Pattern: Thing + sentence about it
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "thing-first",
  prose: {
    en: [
      "**To talk about a thing, say the thing first**, then a whole sentence about it.",
      "",
      "**Thing + sentence about it**",
      "",
      "{{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}} is \"This, I don't eat\". {{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:ren2}} {{word:hen3}} {{word:duo1}} is \"This place, people are many\": this place has many people.",
      "Questions can start the same way: {{Word:zhe4}}-{{light:ge4}} {{word:zen3me}} {{word:shuo1}}? is \"This, how do you say it?\"",
    ],
    ru: [
      "**Чтобы поговорить о вещи, назовите её первой**, а потом скажите о ней целое предложение.",
      "",
      "**Вещь + предложение о ней**",
      "",
      "{{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}} — «Это я не ем». {{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:ren2}} {{word:hen3}} {{word:duo1}} — «Это место: людей много», то есть в этом месте много людей.",
      "Вопрос можно начать так же: {{Word:zhe4}}-{{light:ge4}} {{word:zen3me}} {{word:shuo1}}? — «Это как сказать?»",
    ],
    tldr: {
      en: "Say the thing first, then a sentence about it: {{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}}, this I don't eat.",
      ru: "Назовите вещь первой, потом скажите о ней: {{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}} — это я не ем.",
    },
    necessity: {
      en: "Now you can start with the thing you talk about.",
      ru: "Теперь вы можете начать с того, о чём говорите.",
    },
  },
  info: {
    pattern: "topic-comment",
    en: "Thing + sentence about it: {{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}}. (This, I don't eat.)",
    ru: "Вещь + предложение о ней: {{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}}. (Это я не ем.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "这个我不吃。",
      en: "This, I don't eat.",
      ru: "Это я не ем.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:shu1}} {{word:wo3}} {{word:kan4}}.",
      hanzi: "那个书我看。",
      en: "That book, I read.",
      ru: "Ту книгу я читаю.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "这个地方人很多。",
      en: "This place has many people.",
      ru: "В этом месте много людей.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zen3me}} {{word:shuo1}}?",
      hanzi: "这个怎么说？",
      en: "How do you say this?",
      ru: "Как это сказать?",
    },
  ],
  exercises: [
    {
      en: "That, I don't eat.",
      ru: "То я не ем.",
      answer: "{{Word:na4}}-{{light:ge4}} {{word:wo3}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "那个我不吃。",
    },
    {
      en: "This book, I don't read.",
      ru: "Эту книгу я не читаю.",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:wo3}} {{word:bu4}} {{word:kan4}}.",
      hanzi: "这个书我不看。",
    },
    {
      en: "That place has many people.",
      ru: "В том месте много людей.",
      answer: "{{Word:na4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "那个地方人很多。",
    },
    {
      en: "How do you write this?",
      ru: "Как это написать?",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:zen3me}} {{word:xie3}}?",
      hanzi: "这个怎么写？",
    },
  ],
});
