// Someone can be called or greeted first, then a comma and what is said. Pattern: Name, sentence
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "calling",
  scene: "Acts out 'māma, wǒ huí lái le!': a child-like student comes through a gate calling toward a house where a mother figure is at the door with open arms; Miao-miao runs ahead. Yellow: the gate.",
  prose: {
    en: [
      "**To speak to someone, call them first**, then a comma and what you say.",
      "",
      "**Name, sentence**",
      "",
      "{{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}} is \"Mom, I'm back\". A greeting works the same way: {{Word:ni3}} {{word:hao3}}, {{word:ni3}} {{word:shi4}} {{word:shei2}}? is \"Hello, who are you?\"",
    ],
    ru: [
      "**Чтобы обратиться к человеку, назовите его первым**, потом запятая и то, что вы говорите.",
      "",
      "**Имя, предложение**",
      "",
      "{{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}} — «Мама, я вернулся». Приветствие работает так же: {{Word:ni3}} {{word:hao3}}, {{word:ni3}} {{word:shi4}} {{word:shei2}}? — «Здравствуйте, кто вы?»",
    ],
    tldr: {
      en: "Call first, then a comma, then the sentence: {{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}}.",
      ru: "Сначала обращение, потом запятая и предложение: {{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}}.",
    },
    necessity: {
      en: "Now you can call someone and then speak to them.",
      ru: "Теперь вы можете позвать человека и заговорить с ним.",
    },
  },
  info: {
    pattern: "calling-hail",
    en: "Name, sentence: {{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}}. (Mom, I'm back.)",
    ru: "Имя, предложение: {{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}}. (Мама, я вернулся.)",
  },
  examples: [
    {
      pinyin: "{{Word:ma1ma}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}}!",
      hanzi: "妈妈，我回来了！",
      en: "Mom, I'm back!",
      ru: "Мама, я вернулся!",
    },
    {
      pinyin: "{{Word:ba4ba}}, {{word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "爸爸，你在哪里？",
      en: "Dad, where are you?",
      ru: "Папа, где ты?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}, {{word:ni3}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "你好，你是谁？",
      en: "Hello, who are you?",
      ru: "Здравствуйте, кто вы?",
    },
    {
      pinyin: "{{Word:ma1ma}}, {{word:wo3}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "妈妈，我要吃。",
      en: "Mom, I want to eat.",
      ru: "Мама, я хочу есть.",
    },
  ],
  exercises: [
    {
      en: "Dad, I'm back!",
      ru: "Папа, я вернулся!",
      answer: "{{Word:ba4ba}}, {{word:wo3}} {{word:hui2}} {{word:lai2}} {{word:le}}!",
      hanzi: "爸爸，我回来了！",
    },
    {
      en: "Mom, where are you?",
      ru: "Мама, где ты?",
      answer: "{{Word:ma1ma}}, {{word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "妈妈，你在哪里？",
    },
    {
      en: "Hello, who are you?",
      ru: "Здравствуйте, кто вы?",
      answer: "{{Word:ni3}} {{word:hao3}}, {{word:ni3}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "你好，你是谁？",
    },
  ],
});
