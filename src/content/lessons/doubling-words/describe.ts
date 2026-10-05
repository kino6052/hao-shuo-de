// To make a describing word stronger and livelier, say it twice, then add
// -de. Pattern: adjective-adjective-de
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "describe",
  prose: {
    en: [
      "**To make a describing word stronger and livelier**, say it twice, then add -{{word:de}}.",
      "",
      "**adjective-adjective-{{word:de}}**",
      "",
      "Don't add {{word:hen3}}: saying it twice already does that job. {{word:hao3}}-{{word:hao3}} before a verb means \"well, properly\": {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! And {{word:yi1}}-{{word:dian3}}-{{word:dian3}} is \"just a tiny bit\".",
    ],
    ru: [
      "**Чтобы сделать описательное слово сильнее и живее**, скажите его два раза и добавьте -{{word:de}}.",
      "",
      "**прилагательное-прилагательное-{{word:de}}**",
      "",
      "В русском тоже так бывает: «белый-белый», «чуть-чуть».",
      "Не добавляйте {{word:hen3}}: повтор уже делает эту работу. {{word:hao3}}-{{word:hao3}} перед глаголом значит «хорошо, как следует»: {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! А {{word:yi1}}-{{word:dian3}}-{{word:dian3}} — «совсем чуть-чуть».",
    ],
    tldr: {
      en: "Say a describing word twice, then -{{word:de}}, to make it stronger: {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
      ru: "Скажите описательное слово дважды и добавьте -{{word:de}}, чтобы усилить: {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
    },
    necessity: {
      en: "Now you can describe things more vividly.",
      ru: "Теперь вы можете описывать вещи ярче.",
    },
  },
  info: {
    en: "adjective-adjective-{{word:de}}, stronger: {{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}. (The moon is nice and round.) {{word:hao3}}-{{word:hao3}} + verb, well: {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! (Study hard!)",
    ru: "прилагательное-прилагательное-{{word:de}} — сильнее: {{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}. (Луна круглая-круглая.) {{word:hao3}}-{{word:hao3}} + глагол — как следует: {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! (Учись хорошенько!)",
  },
  examples: [
    {
      pinyin: "{{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
      hanzi: "月圆圆的。",
      en: "The moon is nice and round.",
      ru: "Луна круглая-круглая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:re4}}-{{word:re4}}-{{word:de}} {{word:shui3}}.",
      hanzi: "我要热热的水。",
      en: "I want some nice hot water.",
      ru: "Я хочу горяченькой воды.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1xi}} {{word:xiao3}}-{{word:xiao3}}-{{word:de}}, {{word:dan4shi4}} {{word:tian2}}-{{word:tian2}}-{{word:de}}.",
      hanzi: "植物生的东西小小的，但是甜甜的。",
      en: "The fruit is tiny, but nice and sweet.",
      ru: "Фрукт маленький-маленький, но сладкий-сладкий.",
    },
    {
      pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:xue2}}!",
      hanzi: "好好学！",
      en: "Study hard!",
      ru: "Учись хорошенько!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:zhe4}}-ge {{word:hao3}}-{{word:hao3}}-{{word:de}}.",
      hanzi: "我觉得这个好好的。",
      en: "I think this one is perfectly fine.",
      ru: "Мне кажется, этот вполне хороший.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}}-{{word:dian3}} {{word:shui3}}.",
      hanzi: "我要一点点水。",
      en: "I want just a tiny bit of water.",
      ru: "Я хочу совсем чуть-чуть воды.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:huo2}}-{{word:de}} {{word:hao3}}-{{word:hao3}}-{{word:de}}.",
      hanzi: "植物活得好好的。",
      en: "The plant is alive and well.",
      ru: "Растение живое и здоровое.",
    },
  ],
  exercises: [
    {
      en: "The water is nice and cold.",
      ru: "Вода холодненькая.",
      answer: "{{Word:shui3}} {{word:leng3}}-{{word:leng3}}-{{word:de}}.",
      hanzi: "水冷冷的。",
    },
    {
      en: "Sleep well!",
      ru: "Спи хорошенько!",
      answer: "{{Word:hao3}}-{{word:hao3}} {{word:shui4jiao4}}!",
      hanzi: "好好睡觉！",
    },
  ],
  faq: [
    // does hǎo-hǎo kàn mean "look carefully"? (yes, or "really good-looking")
    {
      question: {
        en: "Does {{word:hao3}}-{{word:hao3}} {{word:kan4}} mean \"look carefully\"?",
        ru: "{{word:hao3}}-{{word:hao3}} {{word:kan4}} значит «посмотри внимательно»?",
      },
      en: "It can. But it also means \"really good-looking\": {{word:hao3}} {{word:kan4}} (good to look at) made stronger. The situation tells you which.",
      ru: "Может значить. Но ещё это «очень красивый»: {{word:hao3}} {{word:kan4}} («хорошо смотреть»), только сильнее. Что именно — понятно из ситуации.",
    },
  ],
});
