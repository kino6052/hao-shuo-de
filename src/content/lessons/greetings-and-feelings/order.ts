// To tell someone to do something, just say the verb. For don't, put bù yào
// first. Pattern: Verb! / bù yào + verb!
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "order",
  words: [
    {
      term: "{{word:pa4}}",
      hanzi: "怕",
      en: "be scared (of)",
      ru: "бояться",
    },
    {
      term: "{{word:xiao4}}",
      hanzi: "笑",
      en: "laugh, smile",
      ru: "смеяться, улыбаться",
    },
  ],
  prose: {
    en: [
      "**To tell someone to do something**, just say the verb. For don't, put {{word:bu4}} {{word:yao4}} first.",
      "",
      "**Verb! / {{word:bu4}} {{word:yao4}} + verb!**",
    ],
    ru: [
      "**Чтобы попросить кого-то что-то сделать**, просто скажите глагол. Чтобы сказать «не делай», поставьте впереди {{word:bu4}} {{word:yao4}}.",
      "",
      "**Глагол! / {{word:bu4}} {{word:yao4}} + глагол!**",
    ],
    tldr: {
      en: "A verb on its own is an order: {{Word:chi1}}! (Eat!) {{word:bu4}} {{word:yao4}} + verb means don't.",
      ru: "Глагол сам по себе — это просьба: {{Word:chi1}}! (Ешь!) {{word:bu4}} {{word:yao4}} + глагол — «не делай».",
    },
    necessity: {
      en: "Now you can ask people to do things.",
      ru: "Теперь вы можете просить людей что-то сделать.",
    },
  },
  info: {
    en: "A verb on its own is an order: {{Word:chi1}}! (Eat!) {{Word:bu4}} {{word:yao4}} + verb: don't.",
    ru: "Глагол сам по себе — просьба: {{Word:chi1}}! (Ешь!) {{Word:bu4}} {{word:yao4}} + глагол — не делай.",
  },
  examples: [
    {
      pinyin: "{{Word:chi1}}!",
      hanzi: "吃！",
      en: "Eat!",
      ru: "Ешь!",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:shuo1}}!",
      hanzi: "不要说！",
      en: "Don't talk!",
      ru: "Не говори!",
    },
    {
      pinyin: "{{Word:liu2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}!",
      hanzi: "留在这里！",
      en: "Stay here!",
      ru: "Оставайся здесь!",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:mo1}} {{word:wo3}}-{{word:de}} {{word:bi2zi}}!",
      hanzi: "不要摸我的鼻子！",
      en: "Don't touch my nose!",
      ru: "Не трогай мой нос!",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:nong4}}-{{word:hao3}} {{word:wei4dao4}}-{{word:de}} {{word:dong1xi}}!",
      hanzi: "给我弄好味道的东西！",
      en: "Pass me the salt! (the thing that makes it taste good)",
      ru: "Передай мне соль! (то, от чего вкус становится хорошим)",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:lai2}} {{word:jia1}}-{{word:li3}}!",
      hanzi: "如果你冷，来家里！",
      en: "If you're cold, come inside!",
      ru: "Если тебе холодно, заходи в дом!",
    },
    {
      pinyin: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:kai1shi3}}!",
      hanzi: "一，二，三，开始！",
      en: "One, two, three, go!",
      ru: "Раз, два, три, начали!",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:xiao4}}!",
      hanzi: "不要笑！",
      en: "Don't laugh!",
      ru: "Не смейся!",
    },
  ],
  exercises: [
    {
      en: "Don't wait!",
      ru: "Не жди!",
      answer: "{{Word:bu4}} {{word:yao4}} {{word:deng3}}!",
      hanzi: "不要等！",
    },
    {
      en: "I'm coming right now!",
      ru: "Я сейчас же приду!",
      answer: "{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:lai2}}!",
      hanzi: "我现在就来！",
    },
  ],
});
