// Pointing at more than one person: wǒ-men, nǐ-men, tā-men. [from old L04]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "plural-pointers",
  words: [
    {
      word: "men",
      en: "more than one person: {{word:wo3}}-{{word:men}} means \"we\"",
      ru: "больше одного человека: {{word:wo3}}-{{word:men}} значит «мы»",
    },
    {
      word: "xie1",
      en: "some; {{word:zhe4}}-{{word:xie1}}: these",
      ru: "несколько; {{word:zhe4}}-{{word:xie1}} — эти",
    },
  ],
  prose: {
    en: [
      "To point at more than one person, add {{word:men}}: {{word:wo3}}-{{word:men}} (\"we, us\"), {{word:ni3}}-{{word:men}} (\"you all\"), {{word:ta1}}-{{word:men}} (\"they, them\").",
      "{{word:men}} only goes after pronouns and other words for people. It doesn't go after other nouns.",
      "For many things, there is also {{word:xie1}}: {{word:zhe4}}-{{word:xie1}} (these), {{word:na4}}-{{word:xie1}} (those).",
    ],
    ru: [
      "Чтобы указать на нескольких людей, добавьте {{word:men}}: {{word:wo3}}-{{word:men}} («мы, нас»), {{word:ni3}}-{{word:men}} («вы»), {{word:ta1}}-{{word:men}} («они, их»).",
      "{{word:men}} ставится только после местоимений и других слов о людях. После остальных существительных его не ставят.",
      "Для многих вещей есть ещё {{word:xie1}}: {{word:zhe4}}-{{word:xie1}} (эти), {{word:na4}}-{{word:xie1}} (те).",
    ],
    tldr: {
      en: "Add {{word:men}} to say \"we\", \"you all\", and \"they\".",
      ru: "Добавьте {{word:men}}, чтобы сказать «мы», «вы» и «они».",
    },
    necessity: {
      en: "Now you can talk about groups of people.",
      ru: "Теперь вы можете говорить о группах людей.",
    },
  },
  info: {
    en: "{{word:wo3}} / {{word:ni3}} / {{word:ta1}} + -{{word:men}}, more than one: {{Word:wo3}}-{{word:men}}. (We.)",
    ru: "{{word:wo3}} / {{word:ni3}} / {{word:ta1}} + -{{word:men}} — больше одного: {{Word:wo3}}-{{word:men}}. (Мы.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}}.",
      hanzi: "我们",
      en: "We, us.",
      ru: "Мы, нас.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:men}}.",
      hanzi: "你们",
      en: "You all.",
      ru: "Вы (все).",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}}.",
      hanzi: "他们",
      en: "They, them.",
      ru: "Они, их.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:shi4}} {{word:wo3}}-{{word:de}}.",
      hanzi: "这些是我的。",
      en: "These are mine.",
      ru: "Это мои.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:xie1}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那些人很好。",
      en: "Those people are nice.",
      ru: "Те люди хорошие.",
    },
  ],
  exercises: [
    {
      en: "They are people.",
      ru: "Они люди.",
      answer: "{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "他们是人。",
    },
    {
      en: "These are big.",
      ru: "Эти большие.",
      answer: "{{Word:zhe4}}-{{word:xie1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这些很大。",
    },
  ],
});
