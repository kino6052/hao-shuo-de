// To talk about a group, use qún (group) in place of gè. Pattern: yī / zhè /
// nà + qún + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "group",
  words: [
    {
      term: "{{word:qun2}}",
      hanzi: "群",
      en: "group",
      ru: "группа",
    },
  ],
  prose: {
    en: [
      "**To talk about a group**, use {{word:qun2}} (group) in place of {{word:ge4}}.",
      "",
      "**{{word:yi1}} / {{word:zhe4}} / {{word:na4}} + {{word:qun2}} + noun**",
    ],
    ru: [
      "**Чтобы говорить о группе**, используйте {{word:qun2}} (группа) вместо {{word:ge4}}.",
      "",
      "**{{word:yi1}} / {{word:zhe4}} / {{word:na4}} + {{word:qun2}} + существительное**",
    ],
    tldr: {
      en: "{{word:yi1}}-{{word:qun2}} {{word:ren2}} is a group of people.",
      ru: "{{word:yi1}}-{{word:qun2}} {{word:ren2}} — группа людей.",
    },
    necessity: { en: "Now you can talk about many at once.", ru: "Теперь вы можете говорить о многих сразу." },
  },
  info: {
    en: "{{word:yi1}} / {{word:zhe4}} / {{word:na4}} + {{word:qun2}} + noun, a group: {{Word:yi1}}-{{word:qun2}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}. (A group of people is outside.)",
    ru: "{{word:yi1}} / {{word:zhe4}} / {{word:na4}} + {{word:qun2}} + существительное — группа: {{Word:yi1}}-{{word:qun2}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}. (На улице группа людей.)",
  },
  examples: [
    {
      pinyin: "{{Word:yi1}}-{{word:qun2}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "一群人在外面。",
      en: "A group of people is outside.",
      ru: "На улице группа людей.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:qun2}} {{word:dong4wu4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "那群动物很大。",
      en: "That group of animals is big.",
      ru: "Та группа животных большая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:na4}}-{{word:qun2}} {{word:ren2}} {{word:shui3}}.",
      hanzi: "我给那群人水。",
      en: "I give that group of people water.",
      ru: "Я даю той группе людей воду.",
    },
    {
      pinyin: "{{Word:yi1}}-{{word:qun2}} {{word:dong4wu4}} {{word:zai4}} {{word:ni2}}-{{word:li3}} {{word:wan2r}}.",
      hanzi: "一群动物在泥里玩儿。",
      en: "A group of animals is playing in the mud.",
      ru: "Группа животных играет в грязи.",
    },
  ],
  exercises: [
    {
      en: "a group of animals",
      ru: "группа животных",
      answer: "{{Word:yi1}}-{{word:qun2}} {{word:dong4wu4}}.",
      hanzi: "一群动物。",
    },
  ],
});
