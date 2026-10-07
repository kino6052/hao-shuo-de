// To say really, put zhēn before the adjective. Pattern: Thing + zhēn +
// adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "really",
  words: [
    {
      word: "zhi3",
      en: "only",
      ru: "только",
    },
  ],
  prose: {
    en: [
      "**To say really**, put {{word:zhen1}} before the adjective.",
      "",
      "**Thing + {{word:zhen1}} + adjective**",
      "",
      "On its own, it's a whole sentence: {{Word:zhen1}} {{word:re4}}! (It's really hot!)",
      "{{word:zhi3}} before the verb means only.",
    ],
    ru: [
      "**Чтобы сказать «правда, по-настоящему»**, поставьте {{word:zhen1}} перед прилагательным.",
      "",
      "**Вещь + {{word:zhen1}} + прилагательное**",
      "",
      "Само по себе это уже целое предложение: {{Word:zhen1}} {{word:re4}}! (Правда жарко!)",
      "{{word:zhi3}} перед глаголом значит «только».",
    ],
    tldr: {
      en: "{{word:zhen1}} before an adjective means really.",
      ru: "{{word:zhen1}} перед прилагательным значит «правда, по-настоящему».",
    },
    necessity: {
      en: "Now you can say how strongly you feel about something.",
      ru: "Теперь вы можете сказать, насколько сильно вы что-то чувствуете.",
    },
  },
  info: {
    en: "{{word:zhen1}} + adjective, really: {{Word:zhen1}} {{word:re4}}! (It's really hot!)",
    ru: "{{word:zhen1}} + прилагательное — правда: {{Word:zhen1}} {{word:re4}}! (Правда жарко!)",
  },
  examples: [
    {
      pinyin: "{{Word:zhen1}} {{word:re4}}!",
      hanzi: "真热！",
      en: "It's really hot!",
      ru: "Правда жарко!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "她真好。",
      en: "She's really nice.",
      ru: "Она правда хорошая.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zhen1}} {{word:tian2}}!",
      hanzi: "这个真甜！",
      en: "This is really sweet!",
      ru: "Это правда сладкое!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhen1}} {{word:kuai4}}!",
      hanzi: "你真快！",
      en: "You're really fast!",
      ru: "Ты правда быстрый!",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:shui3}}-{{word:de}} {{word:wei4}}-{{word:dao4}} {{word:zhen1}} {{word:hao3}}!",
      hanzi: "这个水的味道真好！",
      en: "This water tastes really good!",
      ru: "У этой воды правда хороший вкус!",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:che1}} {{word:zhen1}} {{word:kuai4}}!",
      hanzi: "这个车真快！",
      en: "This car is really fast!",
      ru: "Эта машина правда быстрая!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi3}} {{word:yao4}} {{word:shui3}}.",
      hanzi: "我只要水。",
      en: "I only want water.",
      ru: "Я хочу только воды.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi3}} {{word:you3}} {{word:yi1}}-ge.",
      hanzi: "他只有一个。",
      en: "He only has one.",
      ru: "У него только один.",
    },
  ],
  exercises: [
    {
      en: "The water is really hot.",
      ru: "Вода правда горячая.",
      answer: "{{Word:shui3}} {{word:zhen1}} {{word:re4}}.",
      hanzi: "水真热。",
    },
    {
      en: "That person is really fast.",
      ru: "Тот человек правда быстрый.",
      answer: "{{Word:na4}}-ge {{word:ren2}} {{word:zhen1}} {{word:kuai4}}.",
      hanzi: "那个人真快。",
    },
    {
      en: "You're really fast!",
      ru: "Ты правда быстрый!",
      answer: "{{Word:ni3}} {{word:zhen1}} {{word:kuai4}}!",
      hanzi: "你真快！",
    },
    {
      en: "I only drink water.",
      ru: "Я пью только воду.",
      answer: "{{Word:wo3}} {{word:zhi3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我只喝水。",
    },
  ],
});
