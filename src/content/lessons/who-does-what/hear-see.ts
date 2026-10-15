// To say you hear or see someone do something, put the person between tīng or kàn
// and what they do. Pattern: Who + tīng / kàn + who + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "hear-see",
  prose: {
    en: [
      "**To say you hear or see someone do something**, put that person between {{word:ting1}} or {{word:kan4}} and what they do.",
      "",
      "**Who + {{word:ting1}} / {{word:kan4}} + who + verb**",
      "",
      "The person comes once: {{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}} is \"I hear you speak\". Don't say {{word:ni3}} twice.",
    ],
    ru: [
      "**Чтобы сказать, что вы слышите или видите чьё-то действие**, поставьте этого человека между {{word:ting1}} или {{word:kan4}} и тем, что он делает.",
      "",
      "**Кто + {{word:ting1}} / {{word:kan4}} + кто + глагол**",
      "",
      "Человек называется один раз: {{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}} — «Я слышу, как ты говоришь». Не говорите {{word:ni3}} дважды.",
    ],
    tldr: {
      en: "{{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}}: I hear you speak. The person goes between the two verbs.",
      ru: "{{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}} — я слышу, как ты говоришь. Человек стоит между двумя глаголами.",
    },
    necessity: {
      en: "Now you can say what you hear and see people do.",
      ru: "Теперь вы можете сказать, что слышите и видите у людей.",
    },
  },
  info: {
    pattern: "perceive-doing",
    en: "Who + {{word:ting1}} / {{word:kan4}} + who + verb: {{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}}. (I hear you speak.)",
    ru: "Кто + {{word:ting1}} / {{word:kan4}} + кто + глагол: {{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}}. (Я слышу, как ты говоришь.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ting1}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我听你说。",
      en: "I hear you speak.",
      ru: "Я слышу, как ты говоришь.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}} {{word:chi1}}.",
      hanzi: "我看他吃。",
      en: "I watch him eat.",
      ru: "Я смотрю, как он ест.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ting1}} {{word:wo3}} {{word:shuo1}} {{word:hua4}}.",
      hanzi: "他听我说话。",
      en: "He hears me talk.",
      ru: "Он слышит, как я говорю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:wo3}} {{word:xie3}}.",
      hanzi: "你看我写。",
      en: "You watch me write.",
      ru: "Ты смотришь, как я пишу.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我看他喝水。",
      en: "I watch him drink water.",
      ru: "Я смотрю, как он пьёт воду.",
    },
  ],
  exercises: [
    {
      en: "I hear him talk.",
      ru: "Я слышу, как он говорит.",
      answer: "{{Word:wo3}} {{word:ting1}} {{word:ta1}} {{word:shuo1}} {{word:hua4}}.",
      hanzi: "我听他说话。",
    },
    {
      en: "She watches me eat.",
      ru: "Она смотрит, как я ем.",
      answer: "{{Word:ta1}} {{word:kan4}} {{word:wo3}} {{word:chi1}}.",
      hanzi: "他看我吃。",
    },
    {
      en: "You hear me speak.",
      ru: "Ты слышишь, как я говорю.",
      answer: "{{Word:ni3}} {{word:ting1}} {{word:wo3}} {{word:shuo1}}.",
      hanzi: "你听我说。",
    },
    {
      en: "We watch you write.",
      ru: "Мы смотрим, как ты пишешь.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:kan4}} {{word:ni3}} {{word:xie3}}.",
      hanzi: "我们看你写。",
    },
  ],
});
