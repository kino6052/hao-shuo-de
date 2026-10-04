// Pointing at more than one person: wǒ-men, nǐ-men, tā-men. [from old L04]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "plural-pointers",
  words: [
    {
      term: "{{word:men}}",
      hanzi: "们",
      en: "more than one person: {{word:wo3}}-{{word:men}} means \"we\"",
      ru: "больше одного человека: {{word:wo3}}-{{word:men}} значит «мы»",
    },
  ],
  prose: {
    en: [
      "To point at more than one person, add {{word:men}}: {{word:wo3}}-{{word:men}} (\"we, us\"), {{word:ni3}}-{{word:men}} (\"you all\"), {{word:ta1}}-{{word:men}} (\"they, them\").",
      "{{word:men}} only goes after pronouns and other words for people. It doesn't go after other nouns.",
    ],
    ru: [
      "Чтобы указать на нескольких людей, добавьте {{word:men}}: {{word:wo3}}-{{word:men}} («мы, нас»), {{word:ni3}}-{{word:men}} («вы»), {{word:ta1}}-{{word:men}} («они, их»).",
      "{{word:men}} ставится только после местоимений и других слов о людях. После остальных существительных его не ставят.",
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
  ],
  exercises: [
    {
      en: "They are people.",
      ru: "Они люди.",
      answer: "{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "他们是人。",
    },
  ],
});
