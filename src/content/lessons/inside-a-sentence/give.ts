// To say you give something to someone, use gěi: the person first, then the
// thing. Pattern: Who + gěi + person + thing
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "give",
  scene: "Acts out 'gěi wǒ': the student holds out a hand and the girl puts a tangerine into it, Miao-miao looking up hoping for the peel. Yellow: the tangerine.",
  words: [
    {
      word: "gei3",
      en: "give; to, for",
      ru: "давать; кому, для",
    },
    {
      word: "huan4",
      en: "swap, change (one for another)",
      ru: "менять (одно на другое)",
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
      "{{word:huan4}} is to swap, to give one thing and take another: {{Word:wo3}} {{word:huan4}} {{word:che1}}, I change buses. {{word:huan4}} + person + verb says that now this person does it, in someone else's place: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}, I won't go, he goes instead.",
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
      "{{word:huan4}} — «менять»: отдать одно и взять другое: {{Word:wo3}} {{word:huan4}} {{word:che1}} — я делаю пересадку. {{word:huan4}} + человек + глагол говорит, что теперь это делает этот человек, вместо другого: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}} — я не пойду, пойдёт он.",
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
    en: "{{word:gei3}} + person + thing, give: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}. (I give you water.) {{word:huan4}} + person + verb, now they do it: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. (I won't go; he goes instead.)",
    ru: "{{word:gei3}} + человек + вещь — давать: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}. (Я даю тебе воду.) {{word:huan4}} + человек + глагол — теперь это делает он: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. (Я не пойду, пойдёт он.)",
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
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shu1}}, {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3}}, {{word:wo3}}-{{word:men}} {{word:huan4}}.",
      hanzi: "我给你书，你给我水，我们换。",
      en: "I give you a book, you give me water: we swap.",
      ru: "Я даю тебе книгу, ты мне воду: мы меняемся.",
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
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}.",
      hanzi: "我不去，换他去。",
      en: "I won't go; he goes instead.",
      ru: "Я не пойду, пойдёт он.",
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
      en: "I won't say it; you say it.",
      ru: "Я не скажу, скажи ты.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:shuo1}}, {{word:huan4}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我不说，换你说。",
    },
    {
      en: "I change buses.",
      ru: "Я делаю пересадку.",
      answer: "{{Word:wo3}} {{word:huan4}} {{word:che1}}.",
      hanzi: "我换车。",
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
    // how do I say "he goes instead of me"? (huàn goes before the one who does it now)
    {
      question: {
        en: "How do I say 'he goes instead of me'?",
        ru: "Как сказать «он идёт вместо меня»?",
      },
      en: "Say who doesn't do it, then {{word:huan4}} and who does: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. {{word:huan4}} goes before the one who does it now, never before the one who stops.",
      ru: "Скажите, кто не делает, затем {{word:huan4}} и кто делает: {{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}. {{word:huan4}} стоит перед тем, кто делает теперь, а не перед тем, кого заменяют.",
    },
  ],
});
