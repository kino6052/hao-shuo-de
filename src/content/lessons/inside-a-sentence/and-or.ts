// To join two nouns, put hé (and) or huòzhě (or) between them. Pattern: A +
// hé / huòzhě + B
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "and-or",
  words: [
    {
      term: "{{word:he2}}",
      hanzi: "和",
      en: "and (between nouns)",
      ru: "и (между существительными)",
    },
    {
      term: "{{word:huo4zhe3}}",
      hanzi: "或者",
      en: "or",
      ru: "или",
    },
  ],
  prose: {
    en: [
      "**To join two nouns**, put {{word:he2}} (and) or {{word:huo4zhe3}} (or) between them.",
      "",
      "**A + {{word:he2}} / {{word:huo4zhe3}} + B**",
      "",
      "{{word:he2}} joins nouns only, not whole sentences.",
    ],
    ru: [
      "**Чтобы соединить два существительных**, поставьте между ними {{word:he2}} (и) или {{word:huo4zhe3}} (или).",
      "",
      "**A + {{word:he2}} / {{word:huo4zhe3}} + B**",
      "",
      "{{word:he2}} соединяет только существительные, а не целые предложения.",
    ],
    tldr: {
      en: "{{word:he2}} is and, {{word:huo4zhe3}} is or: {{word:ni3}} {{word:he2}} {{word:wo3}}, you and me.",
      ru: "{{word:he2}} — «и», {{word:huo4zhe3}} — «или»: {{word:ni3}} {{word:he2}} {{word:wo3}} — ты и я.",
    },
    necessity: {
      en: "Now you can talk about two things at once.",
      ru: "Теперь вы можете говорить о двух вещах сразу.",
    },
  },
  info: {
    items: [
      {
        en: "A {{word:he2}} B, and (nouns only): {{word:ni3}} {{word:he2}} {{word:wo3}} (you and me)",
        ru: "A {{word:he2}} B — и (только для существительных): {{word:ni3}} {{word:he2}} {{word:wo3}} (ты и я)",
      },
      {
        en: "A {{word:huo4zhe3}} B, or: {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge (this one or that one)",
        ru: "A {{word:huo4zhe3}} B — или: {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge (это или то)",
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
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge.",
      hanzi: "我要这个或者那个。",
      en: "I want this one or that one.",
      ru: "Я хочу это или то.",
    },
    {
      pinyin: "{{Word:chi1}} {{word:shui3guo3}} {{word:huo4zhe3}} {{word:mi3fan4}}.",
      hanzi: "吃水果或者米饭。",
      en: "Eat fruit or rice.",
      ru: "Ешь фрукты или рис.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:hong2se4}}-{{word:de}} {{word:huo4zhe3}} {{word:lan2se4}}-{{word:de}}.",
      hanzi: "我要红色的或者蓝色的。",
      en: "I want a red one or a blue one.",
      ru: "Я хочу красный или синий.",
    },
    {
      pinyin: "{{Word:liu4}}-ge {{word:nan2ren2}} {{word:he2}} {{word:qi1}}-ge {{word:nv3ren2}}.",
      hanzi: "六个男人和七个女人。",
      en: "Six men and seven women.",
      ru: "Шесть мужчин и семь женщин.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:ba1}}-ge {{word:huo4zhe3}} {{word:jiu3}}-ge.",
      hanzi: "我要八个或者九个。",
      en: "I want eight or nine.",
      ru: "Я хочу восемь или девять.",
    },
  ],
  exercises: [
    {
      en: "I want fruit and rice.",
      ru: "Я хочу фрукты и рис.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:shui3guo3}} {{word:he2}} {{word:mi3fan4}}.",
      hanzi: "我要水果和米饭。",
    },
    {
      en: "this one or that one",
      ru: "это или то",
      answer: "{{Word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge.",
      hanzi: "这个或者那个。",
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
    // huòzhě in a question asks yes or no
    {
      question: {
        en: "Can I use {{word:huo4zhe3}} in a question?",
        ru: "Можно ли использовать {{word:huo4zhe3}} в вопросе?",
      },
      en: "Yes, but then it's a yes-or-no question: {{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge {{word:ma}}? asks \"Do you want one of these?\". To make someone choose, full Mandarin uses a different word for \"or\".",
      ru: "Да, но тогда это вопрос «да или нет»: {{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge {{word:ma}}? спрашивает «Тебе нужно что-нибудь из этого?». Чтобы попросить выбрать, в полном китайском есть другое слово для «или».",
    },
  ],
});
