// To say you give something to someone, use gěi: the person first, then the
// thing. Pattern: Who + gěi + person + thing
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "give",
  words: [
    {
      word: "gei3",
      en: "give; to, for",
      ru: "давать; кому, для",
    },
    {
      word: "ti4",
      en: "instead of, in someone's place",
      ru: "вместо, за (кого-то)",
    },
  ],
  prose: {
    en: [
      "**To say you give something to someone**, use {{word:gei3}}: the person first, then the thing.",
      "",
      "**Who + {{word:gei3}} + person + thing**",
      "",
      "{{word:gei3}} before a verb means for or to: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:xie3}}, I write to you.",
      "",
      "{{word:ti4}} before a verb means in someone's place: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}, he goes instead of me.",
      "",
      "You know {{word:mai3}} (buy) from Lesson {{lesson:questions}}. A market is {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}, the place where you buy things.",
    ],
    ru: [
      "**Чтобы сказать, что вы даёте что-то кому-то**, используйте {{word:gei3}}: сначала человек, потом вещь.",
      "",
      "**Кто + {{word:gei3}} + человек + вещь**",
      "",
      "{{word:gei3}} перед глаголом значит «для» или «кому»: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:xie3}} — я пишу тебе.",
      "",
      "{{word:ti4}} перед глаголом значит «вместо»: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}} — он идёт вместо меня.",
      "",
      "{{word:mai3}} (покупать) вы знаете из урока {{lesson:questions}}. Рынок — это {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}, место, где покупают вещи.",
    ],
    tldr: {
      en: "{{word:gei3}} + person + thing: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}, I give you water.",
      ru: "{{word:gei3}} + человек + вещь: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}} — я даю тебе воду.",
    },
    necessity: { en: "Now you can say who gets what.", ru: "Теперь вы можете сказать, кто что получает." },
  },
  info: {
    pattern: "gei-give",
    en: "{{word:gei3}} + person + thing, give: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}. (I give you water.) {{word:ti4}} + person + verb, instead of: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}. (He goes instead of me.)",
    ru: "{{word:gei3}} + человек + вещь — давать: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}. (Я даю тебе воду.) {{word:ti4}} + человек + глагол — вместо: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}. (Он идёт вместо меня.)",
  },
  examples: [
    {
      pinyin: "{{Word:gei3}} {{word:wo3}}.",
      hanzi: "给我。",
      en: "Give it to me.",
      ru: "Дай мне.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}.",
      hanzi: "我给你水。",
      en: "I give you water.",
      ru: "Я даю тебе воду.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ti4}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我替你说。",
      en: "I'll say it for you.",
      ru: "Я скажу за тебя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:san1}}-ge, {{word:wo3}} {{word:gei3}} {{word:ta1}} {{word:si4}}-ge.",
      hanzi: "他给我三个，我给他四个。",
      en: "He gives me three, and I give him four.",
      ru: "Он даёт мне три, а я ему — четыре.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}}.",
      hanzi: "他给我一部分。",
      en: "He gives me part of it.",
      ru: "Он даёт мне часть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我去买东西。",
      en: "I'm going shopping.",
      ru: "Я иду за покупками.",
    },
    {
      pinyin: "{{Word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:fu4jin4}}.",
      hanzi: "买东西的地方在附近。",
      en: "The market is nearby.",
      ru: "Рынок поблизости.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "他替我去。",
      en: "He goes instead of me.",
      ru: "Он идёт вместо меня.",
    },
  ],
  exercises: [
    {
      en: "Give me the bag.",
      ru: "Дай мне сумку.",
      answer: "{{Word:gei3}} {{word:wo3}} {{word:bao1}}.",
      hanzi: "给我包。",
    },
    {
      en: "He says it for me.",
      ru: "Он говорит за меня.",
      answer: "{{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:shuo1}}.",
      hanzi: "他替我说。",
    },
  ],
  faq: [
    // does gěi nǐ xiě mean "write to you" or "write for you"? (either)
    {
      question: {
        en: "Does {{word:gei3}} {{word:ni3}} {{word:xie3}} mean \"write to you\" or \"write for you\"?",
        ru: "{{word:gei3}} {{word:ni3}} {{word:xie3}} — это «пишу тебе» или «пишу для тебя»?",
      },
      en: "It can mean either. The situation tells you which.",
      ru: "И то и другое. Что именно — понятно из ситуации.",
    },
  ],
});
