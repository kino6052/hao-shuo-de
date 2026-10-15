import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "how-it-talks",
  prose: {
    en: [
      "<h2>How Miao-miao talks</h2>",
      "Every lesson starts with one picture. In it, Miao-miao says one thing that the lesson teaches.",
      "Under the picture you read two things: what Miao-miao says in Hao-shuo-de, and what it means.",
      "Press the speaker to hear the same sentence in Chinese.",
      "The simple version comes first, and the Chinese comes after. The difference is the joke, and it is also the lesson.",
      "The pictures never have words in them. When someone speaks, the bubble holds a small picture instead.",
    ],
    ru: [
      "<h2>Как говорит Miao-miao</h2>",
      "Каждый урок начинается с одной картинки. На ней Miao-miao говорит что-то одно из того, чему учит урок.",
      "Под картинкой вы читаете две вещи: что Miao-miao говорит на Hǎo-shuō-de и что это значит.",
      "Нажмите на динамик, чтобы услышать это же предложение по-китайски.",
      "Сначала идёт простой вариант, а китайский — после него. Разница между ними — это и шутка, и урок.",
      "На картинках никогда нет слов. Когда кто-то говорит, в облачке вместо слов маленькая картинка.",
    ],
  },
  image: {
    file: "intro-4-bubbles",
    alt: {
      en: "Miao-miao sits on a table and the student sits across from it. Each has a speech bubble with a small picture of a bowl; Miao-miao's bubble also has a smile.",
      ru: "Miao-miao сидит на столе, напротив сидит студент. У каждого облачко с маленькой картинкой миски; в облачке Miao-miao ещё и улыбка.",
    },
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}} {{word:fan4}}.",
    hanzi: "我要吃饭。",
    en: "I want to eat.",
    ru: "Я хочу есть.",
  },
});
