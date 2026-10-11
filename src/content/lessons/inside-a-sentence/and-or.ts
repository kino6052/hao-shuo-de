// To join two nouns, put hé (and) between them; to give a choice, put hái-shì
// (or). Pattern: A + hé / hái-shì + B
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "and-or",
  words: [
    {
      word: "he2",
      en: "and (between nouns)",
      ru: "и (между существительными)",
    },
  ],
  prose: {
    en: [
      "**To join two nouns**, put {{word:he2}} (and) between them. **To give a choice**, put {{word:hai2}}-{{word:shi4}} (or).",
      "",
      "**A + {{word:he2}} / {{word:hai2}}-{{word:shi4}} + B**",
      "",
      "{{word:he2}} joins nouns only, not whole sentences. {{word:hai2}}-{{word:shi4}} asks the other person to choose, so it comes in a question.",
    ],
    ru: [
      "**Чтобы соединить два существительных**, поставьте между ними {{word:he2}} (и). **Чтобы предложить выбор**, поставьте {{word:hai2}}-{{word:shi4}} (или).",
      "",
      "**A + {{word:he2}} / {{word:hai2}}-{{word:shi4}} + B**",
      "",
      "{{word:he2}} соединяет только существительные, а не целые предложения. {{word:hai2}}-{{word:shi4}} просит собеседника выбрать, поэтому стоит в вопросе.",
    ],
    tldr: {
      en: "{{word:he2}} is and, {{word:hai2}}-{{word:shi4}} is or: {{word:ni3}} {{word:he2}} {{word:wo3}}, you and me.",
      ru: "{{word:he2}} — «и», {{word:hai2}}-{{word:shi4}} — «или»: {{word:ni3}} {{word:he2}} {{word:wo3}} — ты и я.",
    },
    necessity: {
      en: "Now you can talk about two things at once, or ask which one.",
      ru: "Теперь вы можете говорить о двух вещах сразу или спросить, какую из них.",
    },
  },
  info: {
    items: [
      {
        en: "A {{word:he2}} B, and (nouns only): {{word:ni3}} {{word:he2}} {{word:wo3}} (you and me)",
        ru: "A {{word:he2}} B — и (только для существительных): {{word:ni3}} {{word:he2}} {{word:wo3}} (ты и я)",
      },
      {
        en: "A {{word:hai2}}-{{word:shi4}} B, or (a choice): {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge? (this one or that one?)",
        ru: "A {{word:hai2}}-{{word:shi4}} B — или (выбор): {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge? (это или то?)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}}.",
      hanzi: "你和我。",
      en: "You and me.",
      ru: "Ты и я.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "我和他去外面。",
      en: "He and I go outside.",
      ru: "Мы с ним идём на улицу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge?",
      hanzi: "你要这个还是那个？",
      en: "Do you want this one or that one?",
      ru: "Ты хочешь это или то?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:na2}} {{word:bao1}} {{word:hai2}}-{{word:shi4}} {{word:gong1}}-{{word:ju4}}?",
      hanzi: "你拿包还是工具？",
      en: "Are you taking the bag or the tool?",
      ru: "Ты берёшь сумку или инструмент?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:hai2}}-{{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}?",
      hanzi: "你要红色的还是蓝色的？",
      en: "Do you want a red one or a blue one?",
      ru: "Ты хочешь красный или синий?",
    },
    {
      pinyin: "{{Word:liu4}}-ge {{word:nan2}}-{{word:ren2}} {{word:he2}} {{word:qi1}}-ge {{word:nv3}}-{{word:ren2}}.",
      hanzi: "六个男人和七个女人。",
      en: "Six men and seven women.",
      ru: "Шесть мужчин и семь женщин.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:ba1}}-ge {{word:hai2}}-{{word:shi4}} {{word:jiu3}}-ge?",
      hanzi: "你要八个还是九个？",
      en: "Do you want eight or nine?",
      ru: "Тебе восемь или девять?",
    },
  ],
  exercises: [
    {
      en: "I want fruit and water.",
      ru: "Я хочу фрукты и воду.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:shui3}}-{{word:guo3}} {{word:he2}} {{word:shui3}}.",
      hanzi: "我要水果和水。",
    },
    {
      en: "this one or that one?",
      ru: "это или то?",
      answer: "{{Word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge?",
      hanzi: "这个还是那个？",
    },
    {
      en: "The bag is between you and me.",
      ru: "Сумка между тобой и мной.",
      answer: "{{Word:bao1}} {{word:zai4}} {{word:ni3}} {{word:he2}} {{word:wo3}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "包在你和我中间。",
    },
  ],
  faq: [
    // how do I say "and" between two sentences? (a comma; yě)
    {
      question: {
        en: "How do I say \"and\" between two sentences?",
        ru: "Как сказать «и» между двумя предложениями?",
      },
      en: "Put them side by side with a comma: {{Word:wo3}} {{word:chi1}}, {{word:ta1}} {{word:shui4jiao4}} (I eat, and he sleeps). For \"too\", add {{word:ye3}}: {{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
      ru: "Поставьте их рядом через запятую: {{Word:wo3}} {{word:chi1}}, {{word:ta1}} {{word:shui4jiao4}} (Я ем, а он спит). Для «тоже» добавьте {{word:ye3}}: {{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    },
    // hái-shì asks for a choice
    {
      question: {
        en: "Can I use {{word:hai2}}-{{word:shi4}} in a plain sentence?",
        ru: "Можно ли использовать {{word:hai2}}-{{word:shi4}} в обычном предложении?",
      },
      en: "Mostly it asks: {{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge? makes the other person choose. To say \"either is fine\", use {{word:dou1}}: {{Word:zhe4}}-ge {{word:na4}}-ge {{word:dou1}} {{word:hao3}}.",
      ru: "В основном оно задаёт вопрос: {{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge? просит собеседника выбрать. Чтобы сказать «подойдёт любое», используйте {{word:dou1}}: {{Word:zhe4}}-ge {{word:na4}}-ge {{word:dou1}} {{word:hao3}}.",
    },
  ],
});
