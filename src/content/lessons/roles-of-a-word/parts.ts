// To say whose part it is, put -de between the owner and the part. Pattern:
// owner-de + part
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "parts",
  words: [
    {
      term: "{{word:bi2zi}}",
      hanzi: "鼻子",
      en: "nose",
      ru: "нос",
    },
    {
      term: "{{word:pi2fu1}}",
      hanzi: "皮肤",
      en: "skin",
      ru: "кожа",
    },
    {
      term: "{{word:mao2}}",
      hanzi: "毛",
      en: "hair, fur",
      ru: "волосы, шерсть",
    },
  ],
  prose: {
    en: [
      "**To say whose part it is**, put -{{word:de}} between the owner and the part: {{word:dong4wu4}}-{{word:de}} {{word:bi2zi}}, the animal's nose.",
      "",
      "**owner-{{word:de}} + part**",
      "",
      "{{word:mao2}} is fur: {{word:tou2}}-{{word:shang4}}-{{word:de}} {{word:mao2}} (the fur on the head) is hair.",
    ],
    ru: [
      "**Чтобы сказать, чья это часть**, поставьте -{{word:de}} между владельцем и частью: {{word:dong4wu4}}-{{word:de}} {{word:bi2zi}} — нос животного.",
      "",
      "**владелец-{{word:de}} + часть**",
      "",
      "{{word:mao2}} — это шерсть: {{word:tou2}}-{{word:shang4}}-{{word:de}} {{word:mao2}} («шерсть на голове») — это волосы.",
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
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:bi2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}.",
      hanzi: "你的鼻子是红色的。",
      en: "Your nose is red.",
      ru: "У тебя красный нос.",
    },
    {
      pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "动物的鼻子很小。",
      en: "The animal's nose is small.",
      ru: "У животного маленький нос.",
    },
    {
      pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:pi2fu1}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "动物的皮肤很硬。",
      en: "The animal's skin is hard.",
      ru: "У животного твёрдая кожа.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:pi2fu1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "我的皮肤很热。",
      en: "My skin is hot.",
      ru: "У меня горячая кожа.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:dong4wu4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
      hanzi: "这个动物的毛是白色的。",
      en: "This animal's fur is white.",
      ru: "Шерсть у этого животного белая.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:tou2}}-{{word:shang4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
      hanzi: "他头上的毛是黑色的。",
      en: "His hair is black.",
      ru: "У него чёрные волосы.",
    },
    {
      pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:mao2}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "动物的毛很硬。",
      en: "The animal's fur is stiff.",
      ru: "У животного жёсткая шерсть.",
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
      en: "Her skin is white.",
      ru: "У неё белая кожа.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:pi2fu1}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
      hanzi: "她的皮肤是白色的。",
    },
    {
      en: "This animal's fur is white.",
      ru: "Шерсть у этого животного белая.",
      answer: "{{Word:zhe4}}-ge {{word:dong4wu4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
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
