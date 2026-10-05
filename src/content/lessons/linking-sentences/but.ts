// To say but, put dàn-shì at the start of the second part. Pattern: sentence,
// dàn-shì + sentence
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "but",
  words: [
    {
      word: "dan4",
      en: "but; {{word:dan4}}-{{word:shi4}}: but",
      ru: "но; {{word:dan4}}-{{word:shi4}} — но",
    },
  ],
  prose: {
    en: [
      "**To say but**, put {{word:dan4}}-{{word:shi4}} at the start of the second part.",
      "",
      "**sentence, {{word:dan4}}-{{word:shi4}} + sentence**",
    ],
    ru: [
      "**Чтобы сказать «но»**, поставьте {{word:dan4}}-{{word:shi4}} в начало второй части.",
      "",
      "**предложение, {{word:dan4}}-{{word:shi4}} + предложение**",
    ],
    tldr: {
      en: "{{word:dan4}}-{{word:shi4}} means but: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4}}-{{word:shi4}} {{word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}.",
      ru: "{{word:dan4}}-{{word:shi4}} значит «но»: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4}}-{{word:shi4}} {{word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}.",
    },
    necessity: {
      en: "Now you can say two things that pull against each other.",
      ru: "Теперь вы можете сказать две вещи, которые тянут в разные стороны.",
    },
  },
  info: {
    en: "…, {{word:dan4}}-{{word:shi4}} …, but: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4}}-{{word:shi4}} {{word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}. (It looks good, but it doesn't taste good.)",
    ru: "…, {{word:dan4}}-{{word:shi4}} … — но: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4}}-{{word:shi4}} {{word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}. (Выглядит хорошо, но невкусно.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4}}-{{word:shi4}} {{word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "这个看起来很好，但是味道不好。",
      en: "It looks good, but it doesn't taste good.",
      ru: "Выглядит хорошо, но невкусно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}}, {{word:dan4}}-{{word:shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我要去，但是我没有金。",
      en: "I want to go, but I have no money.",
      ru: "Я хочу пойти, но у меня нет денег.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:xiao3}}, {{word:dan4}}-{{word:shi4}} {{word:hen3}} {{word:you3}} {{word:li4}}-{{word:qi4}}.",
      hanzi: "他很小，但是很有力气。",
      en: "He's small, but very strong.",
      ru: "Он маленький, но очень сильный.",
    },
    {
      pinyin: "{{Word:wei4}}-{{word:dao4}} {{word:hen3}} {{word:hao3}}, {{word:dan4}}-{{word:shi4}} {{word:hen3}} {{word:re4}}.",
      hanzi: "味道很好，但是很热。",
      en: "It tastes good, but it's very hot.",
      ru: "Вкусно, но очень горячо.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zhi2wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:huang2}}-{{word:se4}}-{{word:de}}, {{word:dan4}}-{{word:shi4}} {{word:bu4}} {{word:tian2}}.",
      hanzi: "这个植物生的东西是黄色的，但是不甜。",
      en: "This plant's fruit is yellow, but it isn't sweet.",
      ru: "Плоды этого растения жёлтые, но не сладкие.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:fang1}}-{{word:fa3}} {{word:hen3}} {{word:qi2guai4}}, {{word:dan4}}-{{word:shi4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个方法很奇怪，但是很好。",
      en: "This way is strange, but it's good.",
      ru: "Этот способ странный, но хороший.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:jiu3}}-ge, {{word:dan4}}-{{word:shi4}} {{word:ta1}} {{word:you3}} {{word:er4}}-{{word:shi2}}-ge.",
      hanzi: "我有九个，但是他有二十个。",
      en: "I have nine, but he has twenty.",
      ru: "У меня девять, а у него двадцать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:lao3}}, {{word:dan4}}-{{word:shi4}} {{word:ta1}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "他很老，但是他很快。",
      en: "He's old, but he's fast.",
      ru: "Он старый, но быстрый.",
    },
  ],
  exercises: [
    {
      en: "I want to eat, but I have no money.",
      ru: "Я хочу есть, но у меня нет денег.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}, {{word:dan4}}-{{word:shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我要吃，但是我没有金。",
    },
    {
      en: "This one is small, but it tastes good.",
      ru: "Это маленькое, но вкусное.",
      answer: "{{Word:zhe4}}-ge {{word:hen3}} {{word:xiao3}}, {{word:dan4}}-{{word:shi4}} {{word:wei4}}-{{word:dao4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个很小，但是味道很好。",
    },
    {
      en: "This is difficult, but I'm learning it.",
      ru: "Это трудно, но я учусь.",
      answer: "{{Word:zhe4}} {{word:hen3}} {{word:nan2}}, {{word:dan4}}-{{word:shi4}} {{word:wo3}} {{word:xue2}}.",
      hanzi: "这很难，但是我学。",
    },
  ],
});
