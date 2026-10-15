import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "cat",
  prose: {
    en: [
      "<h2>A cat who likes it simple</h2>",
      "This book has a story, and the story has a cat.",
      "Miao-miao is a small white cat. It knows Chinese. It also knows Hao-shuo-de.",
      "People can make a thing very complicated. Miao-miao asks one small question, and the problem gets smaller.",
      "Miao-miao belongs to a person you will never see. That person only ever spoke Hao-shuo-de to it.",
    ],
    ru: [
      "<h2>Кошка, которая любит попроще</h2>",
      "У этой книги есть история, а в истории есть кошка.",
      "Miao-miao — маленькая белая кошка. Она знает китайский. И Hǎo-shuō-de она тоже знает.",
      "Люди умеют сильно всё усложнять. Miao-miao задаёт один маленький вопрос, и проблема становится меньше.",
      "Miao-miao принадлежит человеку, которого вы никогда не увидите. Этот человек говорил с ней только на Hǎo-shuō-de.",
    ],
  },
  image: {
    file: "intro-4-cover",
    alt: {
      en: "Miao-miao the cat sits alone on a doorstep, a small white cat with two orange autumn leaves beside it.",
      ru: "Кошка Miao-miao сидит одна на пороге: маленькая белая кошка и два оранжевых осенних листа рядом.",
    },
    pinyin: "{{Word:wo3}} {{word:shi4}} \"Miāo-miao\".",
    hanzi: "我是喵喵。",
    en: "I am Miao-miao.",
    ru: "Я Miao-miao.",
  },
});
