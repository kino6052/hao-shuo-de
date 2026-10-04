// To say someone also does something, put yě (also) right before the verb.
// Pattern: Who + yě + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "also-do",
  words: [
    {
      term: "{{word:ye3}}",
      hanzi: "也",
      en: "also, too",
      ru: "тоже, также",
    },
    {
      term: "{{word:zhi2wu4}}",
      hanzi: "植物",
      en: "plant",
      ru: "растение",
    },
    {
      term: "{{word:huo3}}",
      hanzi: "火",
      en: "fire",
      ru: "огонь",
    },
    {
      term: "{{word:kong1qi4}}",
      hanzi: "空气",
      en: "air",
      ru: "воздух",
    },
    {
      term: "{{word:kai1}}",
      hanzi: "开",
      en: "open; turn on",
      ru: "открывать; включать",
    },
    {
      term: "{{word:guan1}}",
      hanzi: "关",
      en: "close; turn off",
      ru: "закрывать; выключать",
    },
  ],
  prose: {
    en: [
      "**To say someone also does something**, put {{word:ye3}} (also) right before the verb.",
      "",
      "**Who + {{word:ye3}} + verb**",
      "",
      "{{word:ye3}} comes after the who, never at the start of the sentence.",
    ],
    ru: [
      "**Чтобы сказать, что кто-то тоже делает что-то**, поставьте {{word:ye3}} (тоже) прямо перед глаголом.",
      "",
      "**Кто + {{word:ye3}} + глагол**",
      "",
      "{{word:ye3}} стоит после того, кто делает, и никогда — в начале предложения.",
    ],
    tldr: {
      en: "Put {{word:ye3}} right before the verb: {{Word:wo3}} {{word:ye3}} {{word:chi1}}, I eat too.",
      ru: "Поставьте {{word:ye3}} прямо перед глаголом: {{Word:wo3}} {{word:ye3}} {{word:chi1}} — я тоже ем.",
    },
    necessity: {
      en: "Now you can add one more person or thing.",
      ru: "Теперь вы можете добавить что-то к тому, о чем вы говорите.",
    },
  },
  info: {
    en: "{{word:ye3}} + verb, also: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. (I eat too.)",
    ru: "{{word:ye3}} + глагол — тоже: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. (Я тоже ем.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ye3}} {{word:chi1}}.",
      hanzi: "我也吃。",
      en: "I eat too.",
      ru: "Я тоже ем.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ye3}} {{word:yao4}} {{word:ma}}?",
      hanzi: "你也要吗？",
      en: "Do you want some too?",
      ru: "Ты тоже хочешь?",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:ye3}} {{word:yao4}} {{word:kong1qi4}}.",
      hanzi: "植物也要空气。",
      en: "Plants need air too.",
      ru: "Растениям тоже нужен воздух.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ye3}} {{word:zai4}} {{word:ta1}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
      hanzi: "我也在他的旁边。",
      en: "I'm beside him too.",
      ru: "Я тоже рядом с ним.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ye3}} {{word:bu4}} {{word:dong4}}.",
      hanzi: "他也不动。",
      en: "He doesn't move either.",
      ru: "Он тоже не двигается.",
    },
    {
      pinyin: "{{Word:bie2de}} {{word:ren2}} {{word:ye3}} {{word:lai2}} {{word:le}}.",
      hanzi: "别的人也来了。",
      en: "The other people came too.",
      ru: "Другие люди тоже пришли.",
    },
    {
      pinyin: "{{Word:he2zi}} {{word:kai1}} {{word:le}}, {{word:kou3}} {{word:ye3}} {{word:kai1}} {{word:le}}.",
      hanzi: "盒子开了，口也开了。",
      en: "The box is open, and the door is open too.",
      ru: "Коробка открыта, и дверь тоже открыта.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:guan1}} {{word:le}} {{word:huo3}}, {{word:ta1}} {{word:ye3}} {{word:guan1}} {{word:le}}.",
      hanzi: "我关了火，他也关了。",
      en: "I turned off the fire, and so did he.",
      ru: "Я выключил огонь, и он тоже.",
    },
  ],
  exercises: [
    {
      en: "I want some too.",
      ru: "Я тоже хочу.",
      answer: "{{Word:wo3}} {{word:ye3}} {{word:yao4}}.",
      hanzi: "我也要。",
    },
    {
      en: "The plant is small.",
      ru: "Растение маленькое.",
      answer: "{{Word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "植物很小。",
    },
    {
      en: "The fire is really hot.",
      ru: "Огонь правда горячий.",
      answer: "{{Word:huo3}} {{word:zhen1}} {{word:re4}}.",
      hanzi: "火真热。",
    },
    {
      en: "The air here is cold.",
      ru: "Воздух здесь холодный.",
      answer: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "这里的空气很冷。",
    },
    {
      en: "Is the box open?",
      ru: "Коробка открыта?",
      answer: "{{Word:he2zi}} {{word:kai1}} {{word:le}} {{word:ma}}?",
      hanzi: "盒子开了吗？",
    },
    {
      en: "Turn off the fire!",
      ru: "Выключи огонь!",
      answer: "{{Word:guan1}} {{word:huo3}}!",
      hanzi: "关火！",
    },
  ],
  faq: [
    // how do I say "me too"? (wǒ yě shì, or repeat the verb)
    {
      question: { en: "How do I say \"me too\"?", ru: "Как сказать «я тоже»?" },
      en: "Say {{Word:wo3}} {{word:ye3}} {{word:shi4}}, or repeat the verb: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. {{word:ye3}} needs something after it, so {{word:wo3}} {{word:ye3}} alone isn't a sentence.",
      ru: "Скажите {{Word:wo3}} {{word:ye3}} {{word:shi4}} или повторите глагол: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. После {{word:ye3}} обязательно что-то нужно, поэтому одно {{word:wo3}} {{word:ye3}} — ещё не предложение.",
    },
  ],
});
