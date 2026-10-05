// To turn a light on or off, put kāi or guān before dēng (lamp, light); míng
// (bright) says how much light there is. Pattern: kāi / guān + dēng; Thing +
// hěn + míng
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "light",
  words: [
    {
      word: "deng1",
      en: "lamp, light",
      ru: "лампа, свет",
    },
    {
      word: "ming2",
      en: "bright",
      ru: "яркий, светлый",
    },
  ],
  prose: {
    en: [
      "**To turn a light on or off**, put {{word:kai1}} or {{word:guan1}} before {{word:deng1}} (lamp, light).",
      "",
      "**{{word:kai1}} / {{word:guan1}} + {{word:deng1}}, Thing + {{word:hen3}} + {{word:ming2}}**",
      "",
      "{{word:ming2}} (bright) works like any adjective: {{Word:ri4}} {{word:hen3}} {{word:ming2}}, the sun is bright. {{word:bu4}} {{word:ming2}} is dark.",
      "Everyday Mandarin often has another word for a bright light, but {{word:ming2}} is understood.",
    ],
    ru: [
      "**Чтобы включить или выключить свет**, поставьте {{word:kai1}} или {{word:guan1}} перед {{word:deng1}} (лампа, свет).",
      "",
      "**{{word:kai1}} / {{word:guan1}} + {{word:deng1}}, Вещь + {{word:hen3}} + {{word:ming2}}**",
      "",
      "{{word:ming2}} (яркий) работает как любое прилагательное: {{Word:ri4}} {{word:hen3}} {{word:ming2}} — солнце яркое. {{word:bu4}} {{word:ming2}} — темно.",
      "В обычном китайском для яркого света часто есть другое слово, но {{word:ming2}} поймут.",
    ],
    tldr: {
      en: "{{word:kai1}} {{word:deng1}} turns the light on, {{word:guan1}} {{word:deng1}} turns it off. {{word:ming2}} is bright.",
      ru: "{{word:kai1}} {{word:deng1}} — включить свет, {{word:guan1}} {{word:deng1}} — выключить. {{word:ming2}} — яркий.",
    },
    necessity: {
      en: "Now you can turn the light on, and say if a place is bright or dark.",
      ru: "Теперь вы можете включить свет и сказать, светло где-то или темно.",
    },
  },
  info: {
    en: "{{word:kai1}} / {{word:guan1}} {{word:deng1}}, light on / off: {{Word:kai1}} {{word:deng1}}! (Turn on the light!) {{word:hen3}} {{word:ming2}}, bright: {{Word:deng1}} {{word:hen3}} {{word:ming2}}. (The light is bright.)",
    ru: "{{word:kai1}} / {{word:guan1}} {{word:deng1}} — включить / выключить свет: {{Word:kai1}} {{word:deng1}}! (Включи свет!) {{word:hen3}} {{word:ming2}} — яркий: {{Word:deng1}} {{word:hen3}} {{word:ming2}}. (Свет яркий.)",
  },
  examples: [
    {
      pinyin: "{{Word:kai1}} {{word:deng1}}!",
      hanzi: "开灯！",
      en: "Turn on the light!",
      ru: "Включи свет!",
    },
    {
      pinyin: "{{Word:deng1}} {{word:kai1}} {{word:le}}.",
      hanzi: "灯开了。",
      en: "The light is on.",
      ru: "Свет включён.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:deng1}} {{word:hen3}} {{word:ming2}}.",
      hanzi: "这个灯很明。",
      en: "This lamp is bright.",
      ru: "Эта лампа яркая.",
    },
    {
      pinyin: "{{Word:ri4}} {{word:hen3}} {{word:ming2}}.",
      hanzi: "日很明。",
      en: "The sun is bright.",
      ru: "Солнце яркое.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:di4fang1}} {{word:bu4}} {{word:ming2}}.",
      hanzi: "这个地方不明。",
      en: "This place is dark.",
      ru: "Здесь темно.",
    },
  ],
  exercises: [
    {
      en: "Turn off the light!",
      ru: "Выключи свет!",
      answer: "{{Word:guan1}} {{word:deng1}}!",
      hanzi: "关灯！",
    },
    {
      en: "The sun is bright.",
      ru: "Солнце яркое.",
      answer: "{{Word:ri4}} {{word:hen3}} {{word:ming2}}.",
      hanzi: "日很明。",
    },
  ],
});
