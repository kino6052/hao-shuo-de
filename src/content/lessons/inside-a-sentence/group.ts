// To talk about many at once, say how many before the noun: hěn-duō (a lot
// of), zhè-xiē / nà-xiē (these, those). Pattern: hěn-duō / zhè-xiē / nà-xiē + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "group",
  prose: {
    en: [
      "**To talk about many at once**, say how many before the noun: {{word:hen3}}-{{word:duo1}} (a lot of), or {{word:zhe4}}-{{word:xie1}} / {{word:na4}}-{{word:xie1}} (these, those).",
      "",
      "**{{word:hen3}}-{{word:duo1}} / {{word:zhe4}}-{{word:xie1}} / {{word:na4}}-{{word:xie1}} + noun**",
      "",
      "There's no word for a group: a group of people is just {{word:hen3}}-{{word:duo1}} {{word:ren2}}, many people.",
    ],
    ru: [
      "**Чтобы говорить о многих сразу**, скажите перед существительным, сколько их: {{word:hen3}}-{{word:duo1}} (много) или {{word:zhe4}}-{{word:xie1}} / {{word:na4}}-{{word:xie1}} (эти, те).",
      "",
      "**{{word:hen3}}-{{word:duo1}} / {{word:zhe4}}-{{word:xie1}} / {{word:na4}}-{{word:xie1}} + существительное**",
      "",
      "Слова «группа» нет: группа людей — это просто {{word:hen3}}-{{word:duo1}} {{word:ren2}}, много людей.",
    ],
    tldr: {
      en: "{{word:hen3}}-{{word:duo1}} {{word:ren2}} is a lot of people; {{word:na4}}-{{word:xie1}} {{word:ren2}} is those people.",
      ru: "{{word:hen3}}-{{word:duo1}} {{word:ren2}} — много людей; {{word:na4}}-{{word:xie1}} {{word:ren2}} — те люди.",
    },
    necessity: { en: "Now you can talk about many at once.", ru: "Теперь вы можете говорить о многих сразу." },
  },
  info: {
    en: "{{word:hen3}}-{{word:duo1}} / {{word:zhe4}}-{{word:xie1}} / {{word:na4}}-{{word:xie1}} + noun, many: {{Word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}. (A lot of people are outside.)",
    ru: "{{word:hen3}}-{{word:duo1}} / {{word:zhe4}}-{{word:xie1}} / {{word:na4}}-{{word:xie1}} + существительное — много: {{Word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}. (На улице много людей.)",
  },
  examples: [
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "很多人在外面。",
      en: "A lot of people are outside.",
      ru: "На улице много людей.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:xie1}} {{word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "那些动物很大。",
      en: "Those animals are big.",
      ru: "Те животные большие.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:na4}}-{{word:xie1}} {{word:ren2}} {{word:shui3}}.",
      hanzi: "我给那些人水。",
      en: "I give those people water.",
      ru: "Я даю тем людям воду.",
    },
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}} {{word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:wan2r}}.",
      hanzi: "很多动物在水里玩儿。",
      en: "A lot of animals are playing in the water.",
      ru: "Много животных играет в воде.",
    },
  ],
  exercises: [
    {
      en: "a lot of animals",
      ru: "много животных",
      answer: "{{Word:hen3}}-{{word:duo1}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "很多动物。",
    },
  ],
});
