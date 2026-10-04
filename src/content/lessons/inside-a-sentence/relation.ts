// To say how two people get along, use guānxi (relationship). méi-yǒu guānxi
// is "it doesn't matter". Pattern: A hé B-de guānxi + hěn + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "relation",
  words: [
    {
      word: "guan1xi",
      en: "relationship",
      ru: "отношения, связь",
    },
  ],
  prose: {
    en: [
      "**To say how two people get along**, use {{word:guan1xi}} (relationship).",
      "",
      "**A {{word:he2}} B-{{word:de}} {{word:guan1xi}} + {{word:hen3}} + adjective**",
      "",
      "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}! (\"there's no connection\") means \"it doesn't matter\" or \"never mind\".",
    ],
    ru: [
      "**Чтобы сказать, как ладят двое**, используйте {{word:guan1xi}} (отношения).",
      "",
      "**A {{word:he2}} B-{{word:de}} {{word:guan1xi}} + {{word:hen3}} + прилагательное**",
      "",
      "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}! («нет связи») значит «ничего страшного» или «неважно».",
    ],
    tldr: {
      en: "{{word:guan1xi}} is relationship. {{word:mei2}}-{{word:you3}} {{word:guan1xi}} means it doesn't matter.",
      ru: "{{word:guan1xi}} — отношения. {{word:mei2}}-{{word:you3}} {{word:guan1xi}} — ничего страшного.",
    },
    necessity: {
      en: "Now you can say who gets along, and say never mind.",
      ru: "Теперь вы можете сказать, кто с кем ладит, и ответить «ничего страшного».",
    },
  },
  info: {
    en: "A {{word:he2}} B-{{word:de}} {{word:guan1xi}}, relationship: {{Word:wo3}} {{word:he2}} {{word:ta1}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}. (He and I get along well.) {{Word:mei2}}-{{word:you3}} {{word:guan1xi}}! (It doesn't matter!)",
    ru: "A {{word:he2}} B-{{word:de}} {{word:guan1xi}} — отношения: {{Word:wo3}} {{word:he2}} {{word:ta1}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}. (У нас с ним хорошие отношения.) {{Word:mei2}}-{{word:you3}} {{word:guan1xi}}! (Ничего страшного!)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我和他的关系很好。",
      en: "He and I get along well.",
      ru: "У нас с ним хорошие отношения.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}}-{{word:de}} {{word:guan1xi}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "他们的关系不好。",
      en: "They don't get along.",
      ru: "У них плохие отношения.",
    },
    {
      pinyin: "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}!",
      hanzi: "没有关系！",
      en: "It doesn't matter!",
      ru: "Ничего страшного!",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:he2}} {{word:na4}}-ge {{word:you3}} {{word:guan1xi}} {{word:ma}}?",
      hanzi: "这个和那个有关系吗？",
      en: "Does this have to do with that?",
      ru: "Это как-то связано с тем?",
    },
  ],
  exercises: [
    {
      en: "It doesn't matter!",
      ru: "Ничего страшного!",
      answer: "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}!",
      hanzi: "没有关系！",
    },
    {
      en: "My parents and I get along well.",
      ru: "У меня с родителями хорошие отношения.",
      answer: "{{Word:wo3}} {{word:he2}} {{word:fu4mu3}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我和父母的关系很好。",
    },
  ],
});
