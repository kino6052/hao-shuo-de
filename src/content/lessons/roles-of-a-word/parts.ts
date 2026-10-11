// To say whose part it is, put -de between the owner and the part. Pattern:
// owner-de + part
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "parts",
  words: [
    {
      word: "bi2zi",
      en: "nose",
      ru: "нос",
    },
    {
      word: "mao2",
      en: "hair, fur",
      ru: "волосы, шерсть",
    },
    {
      word: "ya2",
      en: "tooth",
      ru: "зуб",
    },
    {
      word: "du4zi",
      en: "belly",
      ru: "живот",
    },
  ],
  prose: {
    en: [
      "**To say whose part it is**, put -{{word:de}} between the owner and the part: {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bi2zi}}, the animal's nose.",
      "",
      "**owner-{{word:de}} + part**",
      "",
      "{{word:mao2}} is fur: {{word:tou2}}-{{word:fa1}} (the fur on the head) is hair.",
    ],
    ru: [
      "**Чтобы сказать, чья это часть**, поставьте -{{word:de}} между владельцем и частью: {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bi2zi}} — нос животного.",
      "",
      "**владелец-{{word:de}} + часть**",
      "",
      "{{word:mao2}} — это шерсть: {{word:tou2}}-{{word:fa1}} («шерсть на голове») — это волосы.",
    ],
    tldr: {
      en: "owner-{{word:de}} + part: {{word:wo3}}-{{word:de}} {{word:bi2zi}}, my nose.",
      ru: "владелец-{{word:de}} + часть: {{word:wo3}}-{{word:de}} {{word:bi2zi}} — мой нос.",
    },
    necessity: {
      en: "Now you can talk about the parts of people and animals.",
      ru: "Теперь вы можете говорить о частях тела людей и животных.",
    },
  },
  info: {
    en: "adjective-{{word:de}} + noun: {{word:hao3}}-{{word:de}} {{word:ren2}} (a good person). Whose: {{word:wo3}}-{{word:de}} {{word:bi2zi}} (my nose).",
    ru: "прилагательное-{{word:de}} + существительное: {{word:hao3}}-{{word:de}} {{word:ren2}} (хороший человек). Чьё: {{word:wo3}}-{{word:de}} {{word:bi2zi}} (мой нос).",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的鼻子很大。",
      en: "My nose is big.",
      ru: "У меня большой нос.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:bai2}}.",
      hanzi: "我的牙很白。",
      en: "My teeth are white.",
      ru: "У меня белые зубы.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "动物的鼻子很小。",
      en: "The animal's nose is small.",
      ru: "У животного маленький нос.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:shen1ti3}}-{{word:de}} {{word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "动物身体的外面很硬。",
      en: "The animal's skin is hard.",
      ru: "У животного твёрдая кожа.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "动物的牙很硬。",
      en: "The animal's teeth are hard.",
      ru: "У животного крепкие зубы.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "这个动物的毛是白色的。",
      en: "This animal's fur is white.",
      ru: "Шерсть у этого животного белая.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}}-{{word:fa1}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "他的头发是黑色的。",
      en: "His hair is black.",
      ru: "У него чёрные волосы.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:du4zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的肚子很大。",
      en: "My belly is big.",
      ru: "У меня большой живот.",
    },
  ],
  exercises: [
    {
      en: "My nose is small.",
      ru: "У меня маленький нос.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的鼻子很小。",
    },
    {
      en: "His teeth are white.",
      ru: "У него белые зубы.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:bai2}}.",
      hanzi: "他的牙很白。",
    },
    {
      en: "His belly is small.",
      ru: "У него маленький живот.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:du4zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "他的肚子很小。",
    },
    {
      en: "Her skin is white.",
      ru: "У неё белая кожа.",
      answer: "{{Word:ta1}} {{word:shen1ti3}}-{{word:de}} {{word:wai4}}-{{word:mian4}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "她身体的外面是白色的。",
    },
    {
      en: "This animal's fur is white.",
      ru: "Шерсть у этого животного белая.",
      answer: "{{Word:zhe4}}-ge {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "这个动物的毛是白色的。",
    },
  ],
  faq: [
    // how do I know which job -de is doing?
    {
      question: {
        en: "How do I know which job -{{word:de}} is doing?",
        ru: "Как понять, какую работу делает -{{word:de}}?",
      },
      en: "Look at what's right before and after it. Before a noun, it describes the noun: {{word:hao3}}-{{word:de}} {{word:ren2}}. After a verb, with nothing after it, it's the thing: {{word:chi1}}-{{word:de}}. After a verb and before an adjective, it says how: {{word:shuo1}}-{{word:de}} {{word:hao3}}.",
      ru: "Посмотрите, что стоит прямо перед ним и после него. Перед существительным оно описывает это существительное: {{word:hao3}}-{{word:de}} {{word:ren2}}. После глагола, когда дальше ничего нет, это вещь: {{word:chi1}}-{{word:de}}. После глагола и перед прилагательным оно говорит «как»: {{word:shuo1}}-{{word:de}} {{word:hao3}}.",
    },
    // are all these -de the same word? (same sound; the "how" one is a different character)
    {
      question: {
        en: "Are all these -{{word:de}} the same word?",
        ru: "Все эти -{{word:de}} — одно и то же слово?",
      },
      en: "They sound the same, so Hao-shuo-de writes them all as -{{word:de}}. In Chinese characters, the \"how\" one ({{word:shuo1}}-{{word:de}} {{word:hao3}}) is written differently.",
      ru: "Звучат они одинаково, поэтому Hǎo-shuō-de пишет их все как -{{word:de}}. Иероглифами то -de, которое говорит «как» ({{word:shuo1}}-{{word:de}} {{word:hao3}}), пишется по-другому.",
    },
  ],
});
