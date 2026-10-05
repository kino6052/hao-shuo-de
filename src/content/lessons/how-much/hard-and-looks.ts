// To say something is difficult, use nán like any other adjective; hǎo- and nán-
// before kàn say how something looks. Pattern: Thing + hěn + nán /
// hǎo-kàn / nán-kàn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "hard-and-looks",
  words: [
    {
      word: "nan2",
      en: "difficult, hard to do",
      ru: "трудный, сложный",
    },
    {
      word: "gan1jing4",
      en: "clean",
      ru: "чистый",
    },
  ],
  prose: {
    en: [
      "**To say something is difficult**, use {{word:nan2}} like any other adjective: {{Word:zhe4}} {{word:hen3}} {{word:nan2}}.",
      "",
      "**Thing + {{word:hen3}} + {{word:nan2}} / {{word:hao3}}-{{word:kan4}} / {{word:nan2}}-{{word:kan4}}**",
      "",
      "{{word:hao3}} and {{word:nan2}} go before a verb to say what it's like to do: {{word:hao3}}-{{word:kan4}} (good to look at) is beautiful, and {{word:nan2}}-{{word:kan4}} (hard to look at) is ugly.",
      "Other verbs work the same way: {{word:hao3}}-{{word:chi1}} is tasty, {{word:hao3}}-{{word:ting1}} sounds nice, {{word:nan2}}-{{word:ting1}} sounds bad.",
      "{{word:gan1jing4}} is clean, and {{word:bu4}} {{word:gan1jing4}} is dirty.",
    ],
    ru: [
      "**Чтобы сказать, что что-то трудно**, используйте {{word:nan2}}, как любое другое прилагательное: {{Word:zhe4}} {{word:hen3}} {{word:nan2}}.",
      "",
      "**Вещь + {{word:hen3}} + {{word:nan2}} / {{word:hao3}}-{{word:kan4}} / {{word:nan2}}-{{word:kan4}}**",
      "",
      "{{word:hao3}} и {{word:nan2}} ставят перед глаголом, чтобы сказать, каково это делать: {{word:hao3}}-{{word:kan4}} («хорошо смотреть») — красивый, а {{word:nan2}}-{{word:kan4}} («трудно смотреть») — некрасивый.",
      "С другими глаголами так же: {{word:hao3}}-{{word:chi1}} — вкусный, {{word:hao3}}-{{word:ting1}} — приятно звучит, {{word:nan2}}-{{word:ting1}} — звучит плохо.",
      "{{word:gan1jing4}} — чистый, а {{word:bu4}} {{word:gan1jing4}} — грязный.",
    ],
    tldr: {
      en: "{{word:nan2}} means difficult. {{word:hao3}}-{{word:kan4}} is beautiful, {{word:nan2}}-{{word:kan4}} is ugly.",
      ru: "{{word:nan2}} значит «трудный, сложный». {{word:hao3}}-{{word:kan4}} — красивый, {{word:nan2}}-{{word:kan4}} — некрасивый.",
    },
    necessity: {
      en: "Now you can say that something is difficult, and how it looks.",
      ru: "Теперь вы можете сказать, что что-то трудно, и как что-то выглядит.",
    },
  },
  info: {
    en: "{{word:hen3}} {{word:nan2}}, difficult; {{word:hao3}}-{{word:kan4}} / {{word:nan2}}-{{word:kan4}}, beautiful / ugly: {{Word:ta1}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}. (She's beautiful.)",
    ru: "{{word:hen3}} {{word:nan2}} — трудно; {{word:hao3}}-{{word:kan4}} / {{word:nan2}}-{{word:kan4}} — красивый / некрасивый: {{Word:ta1}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}. (Она красивая.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:hen3}} {{word:nan2}}.",
      hanzi: "这很难。",
      en: "This is difficult.",
      ru: "Это трудно.",
    },
    {
      pinyin: "{{Word:xue2}} {{word:xie3}} {{word:bu4}} {{word:nan2}}.",
      hanzi: "学写不难。",
      en: "Learning to write isn't difficult.",
      ru: "Научиться писать нетрудно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "她很好看。",
      en: "She's beautiful.",
      ru: "Она красивая.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:bao1}} {{word:hen3}} {{word:nan2}}-{{word:kan4}}.",
      hanzi: "这个包很难看。",
      en: "This bag is ugly.",
      ru: "Эта сумка некрасивая.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:hen3}} {{word:hao3}}-{{word:chi1}}.",
      hanzi: "这个很好吃。",
      en: "This is tasty.",
      ru: "Это вкусно.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:gan1jing4}}.",
      hanzi: "这个房间很干净。",
      en: "This room is very clean.",
      ru: "Эта комната очень чистая.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}} {{word:bu4}} {{word:gan1jing4}}.",
      hanzi: "我的手不干净。",
      en: "My hands are dirty.",
      ru: "У меня грязные руки.",
    },
  ],
  exercises: [
    {
      en: "This is difficult.",
      ru: "Это трудно.",
      answer: "{{Word:zhe4}} {{word:hen3}} {{word:nan2}}.",
      hanzi: "这很难。",
    },
    {
      en: "The bag is ugly.",
      ru: "Сумка некрасивая.",
      answer: "{{Word:bao1}} {{word:hen3}} {{word:nan2}}-{{word:kan4}}.",
      hanzi: "包很难看。",
    },
    {
      en: "The water is clean.",
      ru: "Вода чистая.",
      answer: "{{Word:shui3}} {{word:hen3}} {{word:gan1jing4}}.",
      hanzi: "水很干净。",
    },
  ],
});
