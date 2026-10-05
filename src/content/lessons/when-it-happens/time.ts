// To say when, put the time first, then a comma, then the rest. Pattern:
// Time, who + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "time",
  words: [
    {
      word: "shi2",
      sense: "time",
      en: "time (in {{word:shi2}}-{{word:jian1}})",
      ru: "время (в {{word:shi2}}-{{word:jian1}})",
    },
    {
      word: "jian1",
      en: "between",
      ru: "между",
    },
    {
      word: "ri4",
      en: "sun, day",
      ru: "солнце, день",
    },
  ],
  prose: {
    en: [
      "**To say when**, put the time first, then a comma, then the rest.",
      "",
      "**Time, who + verb**",
      "",
      "{{word:shi2}}-{{word:jian1}} means \"time\". {{word:ri4}} is the sun, or the day. {{word:yue4}} is the moon, or the night.",
      "{{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} (\"moon time\") means \"at night\".",
      "{{word:xian4}}-{{word:zai4}} means now: {{Word:xian4}}-{{word:zai4}}, {{word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
    ],
    ru: [
      "**Чтобы сказать, когда**, сначала назовите время, потом поставьте запятую, а потом всё остальное.",
      "",
      "**Время, кто + глагол**",
      "",
      "{{word:shi2}}-{{word:jian1}} значит «время». {{word:ri4}} — это солнце или день. {{word:yue4}} — луна или ночь.",
      "{{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} («лунное время») значит «ночью».",
      "{{word:xian4}}-{{word:zai4}} значит «сейчас»: {{Word:xian4}}-{{word:zai4}}, {{word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
    ],
    tldr: {
      en: "Say the time first: {{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:shui4jiao4}}.",
      ru: "Сначала назовите время: {{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:shui4jiao4}}.",
    },
    necessity: {
      en: "Now you can say when things happen.",
      ru: "Теперь вы можете сказать, когда что-то происходит.",
    },
  },
  info: {
    en: "Time first: {{Word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:shui4jiao4}}. (At night, I sleep.) {{Word:xian4}}-{{word:zai4}}, … (Now, …)",
    ru: "Сначала время: {{Word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:shui4jiao4}}. (Ночью я сплю.) {{Word:xian4}}-{{word:zai4}}, … (Сейчас …)",
  },
  examples: [
    {
      pinyin: "{{Word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:shui4jiao4}}.",
      hanzi: "月的时间，我睡觉。",
      en: "At night, I sleep.",
      ru: "Ночью я сплю.",
    },
    {
      pinyin: "{{Word:ri4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:chi1}}.",
      hanzi: "日的时间，我吃。",
      en: "In the daytime, I eat.",
      ru: "Днём я ем.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:ni3}} {{word:chi1}}?",
      hanzi: "什么时间你吃？",
      en: "When do you eat?",
      ru: "Когда ты ешь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ri4}}.",
      hanzi: "我看日。",
      en: "I look at the sun.",
      ru: "Я смотрю на солнце.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:yue4}}.",
      hanzi: "我看月。",
      en: "I look at the moon.",
      ru: "Я смотрю на луну.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}}, {{word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
      hanzi: "现在，我要睡觉。",
      en: "Now I want to sleep.",
      ru: "Сейчас я хочу спать.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:shi4}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}}?",
      hanzi: "现在是什么时间？",
      en: "What time is it now?",
      ru: "Который сейчас час?",
    },
  ],
  exercises: [
    {
      en: "When do you sleep?",
      ru: "Когда ты спишь?",
      answer: "{{Word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:ni3}} {{word:shui4jiao4}}?",
      hanzi: "什么时间你睡觉？",
    },
    {
      en: "The sun is big.",
      ru: "Солнце большое.",
      answer: "{{Word:ri4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "日很大。",
    },
  ],
});
