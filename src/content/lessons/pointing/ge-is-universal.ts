// Hao-shuo-de keeps one measure word, gè: zhè-ge, nà-ge. [from old L11]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "ge-is-universal",
  words: [
    {
      word: "ge4",
      en: "goes between this / that / a number and a noun",
      ru: "ставится между «этот / тот» или числом и существительным",
    },
  ],
  prose: {
    en: [
      "Hao-shuo-de keeps only one of them: `{{word:ge4}}`.",
      "It works for everything: a person, an animal, a tool, a plant, or an idea.",
      "Put it after a pronoun: `{{word:zhe4}}-ge` means \"this one\", and `{{word:na4}}-ge` means \"that one\".",
      "Add a noun to say which thing: `{{word:zhe4}}-ge {{word:zhi2wu4}}` means \"this plant\".",
    ],
    ru: [
      "В Hǎo-shuō-de осталось только одно из них: `{{word:ge4}}`.",
      "Оно подходит для всего: человека, животного, инструмента, растения или мысли.",
      "Поставьте его после местоимения: `{{word:zhe4}}-ge` значит «вот этот», а `{{word:na4}}-ge` — «вон тот».",
      "Добавьте существительное, чтобы сказать, какая именно вещь: `{{word:zhe4}}-ge {{word:zhi2wu4}}` значит «это растение».",
    ],
    tldr: {
      en: "Hao-shuo-de uses {{word:ge4}} for everything.",
      ru: "В Hǎo-shuō-de {{word:ge4}} подходит для всего.",
    },
    necessity: {
      en: "You only need to learn one measure word.",
      ru: "Нужно выучить всего одно счётное слово.",
    },
  },
  info: {
    title: { en: "One Counting Word for Everything", ru: "Одно счётное слово для всего" },
    items: [
      {
        en: "{{word:zhe4}}, {{word:na4}}, or a number + ge + noun. The same `{{word:ge4}}` works with every noun.",
        ru: "{{word:zhe4}}, {{word:na4}} или число + ge + существительное. Одно и то же `{{word:ge4}}` подходит к любому существительному.",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-ge {{word:ren2}}.",
      hanzi: "这个人。",
      en: "This person.",
      ru: "Этот человек.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:dong4wu4}}.",
      hanzi: "那个动物。",
      en: "That animal.",
      ru: "То животное.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:nv3ren2}}.",
      hanzi: "那个女人。",
      en: "That woman.",
      ru: "Та женщина.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个植物很好。",
      en: "This plant is good.",
      ru: "Это растение хорошее.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:dong1xi}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "那个东西是植物。",
      en: "That thing is a plant.",
      ru: "Та вещь — растение.",
    },
  ],
  exercises: [
    {
      en: "This one is an animal.",
      ru: "Вот это — животное.",
      answer: "{{Word:zhe4}}-ge {{word:shi4}} {{word:dong4wu4}}.",
      hanzi: "这个是动物。",
    },
    {
      en: "That one is a woman.",
      ru: "Вон та — женщина.",
      answer: "{{Word:na4}}-ge {{word:shi4}} {{word:nv3ren2}}.",
      hanzi: "那个是女人。",
    },
    {
      en: "Say \"this person\", using ge.",
      ru: "Скажите «этот человек» с помощью ge.",
      answer: "{{Word:zhe4}}-ge {{word:ren2}}.",
      hanzi: "这个人。",
    },
    {
      en: "Say \"this animal\", using ge.",
      ru: "Скажите «это животное» с помощью ge.",
      answer: "{{Word:zhe4}}-ge {{word:dong4wu4}}.",
      hanzi: "这个动物。",
    },
    {
      en: "Say \"That plant is good.\", using ge.",
      ru: "Скажите «То растение хорошее.» с помощью ge.",
      answer: "{{Word:na4}}-ge {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那个植物很好。",
    },
  ],
  faq: [
    // is gè really right for everything? (other counting words exist; gè is understood)
    {
      question: {
        en: "Is {{word:ge4}} really right for everything?",
        ru: "{{word:ge4}} правда подходит для всего?",
      },
      en: "Full Mandarin has other counting words for some kinds of things. But {{word:ge4}} is the most common one, and people understand it with any noun.",
      ru: "В полном китайском для некоторых видов вещей есть другие счётные слова. Но {{word:ge4}} — самое частое, и его поймут с любым существительным.",
    },
  ],
});
