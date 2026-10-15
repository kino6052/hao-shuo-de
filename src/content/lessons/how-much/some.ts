// Yǒu-xiē before a noun means some. Pattern: yǒu-xiē + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "some",
  prose: {
    en: [
      "**To say some of them**, put {{word:you3}}-{{word:xie1}} before the noun.",
      "",
      "**{{word:you3}}-{{word:xie1}} + noun**",
      "",
      "{{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}} is \"Some people aren't coming\". The rest of the group is left out: {{word:you3}}-{{word:xie1}} {{word:shu1}} {{word:hen3}} {{word:hao3}} says some books are good.",
    ],
    ru: [
      "**Чтобы сказать «некоторые»**, поставьте {{word:you3}}-{{word:xie1}} перед существительным.",
      "",
      "**{{word:you3}}-{{word:xie1}} + существительное**",
      "",
      "{{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}} — «Некоторые не придут». Остальные остаются за кадром: {{word:you3}}-{{word:xie1}} {{word:shu1}} {{word:hen3}} {{word:hao3}} — некоторые книги хорошие.",
    ],
    tldr: {
      en: "{{Word:you3}}-{{word:xie1}} + noun means some: {{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}}, some people aren't coming.",
      ru: "{{Word:you3}}-{{word:xie1}} + существительное — «некоторые»: {{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}} — некоторые не придут.",
    },
    necessity: {
      en: "Now you can speak about some of them, not all.",
      ru: "Теперь вы можете говорить о некоторых, а не о всех.",
    },
  },
  info: {
    pattern: "you-xie-some",
    en: "{{Word:you3}}-{{word:xie1}} + noun: {{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}}. (Some people aren't coming.)",
    ru: "{{Word:you3}}-{{word:xie1}} + существительное: {{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}}. (Некоторые не придут.)",
  },
  examples: [
    {
      pinyin: "{{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "有些人不来。",
      en: "Some people aren't coming.",
      ru: "Некоторые не придут.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:xie1}} {{word:shu1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "有些书很好。",
      en: "Some books are good.",
      ru: "Некоторые книги хорошие.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:xie1}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "有些地方很冷。",
      en: "Some places are cold.",
      ru: "Некоторые места холодные.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "有些人不吃。",
      en: "Some people don't eat.",
      ru: "Некоторые не едят.",
    },
  ],
  exercises: [
    {
      en: "Some places are hot.",
      ru: "Некоторые места жаркие.",
      answer: "{{Word:you3}}-{{word:xie1}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "有些地方很热。",
    },
    {
      en: "Some people don't come.",
      ru: "Некоторые люди не приходят.",
      answer: "{{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "有些人不来。",
    },
    {
      en: "Some books are big.",
      ru: "Некоторые книги большие.",
      answer: "{{Word:you3}}-{{word:xie1}} {{word:shu1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "有些书很大。",
    },
  ],
});
