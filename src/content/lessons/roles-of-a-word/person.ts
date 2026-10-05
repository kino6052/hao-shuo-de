// To name the one who does something, put -de rén after the verb. Pattern:
// verb-de rén
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "person",
  words: [
    {
      word: "er2",
      en: "child, son; {{word:nv3}}-{{word:er2}}: daughter",
      ru: "ребёнок, сын; {{word:nv3}}-{{word:er2}} — дочь",
    },
    {
      word: "zi",
      en: "a noun ending: {{word:er2}}-{{light:zi}}, son",
      ru: "окончание существительного: {{word:er2}}-{{light:zi}} — сын",
    },
    {
      word: "hai2",
      sense: "child",
      en: "child (in {{word:hai2}}-{{light:zi}})",
      ru: "ребёнок (в {{word:hai2}}-{{light:zi}})",
    },
  ],
  prose: {
    en: [
      "**To name the one who does something**, put -{{word:de}} {{word:ren2}} after the verb.",
      "",
      "**verb-{{word:de}} {{word:ren2}}**",
      "Family words: {{word:er2}}-{{light:zi}} (son), {{word:nv3}}-{{word:er2}} (daughter), {{word:hai2}}-{{light:zi}} (child; here {{word:hai2}} is written 孩). {{word:zi}} is a light ending many nouns have.",
    ],
    ru: [
      "**Чтобы назвать того, кто что-то делает**, поставьте -{{word:de}} {{word:ren2}} после глагола.",
      "",
      "**глагол-{{word:de}} {{word:ren2}}**",
      "Слова семьи: {{word:er2}}-{{light:zi}} (сын), {{word:nv3}}-{{word:er2}} (дочь), {{word:hai2}}-{{light:zi}} (ребёнок; здесь {{word:hai2}} пишется 孩). {{word:zi}} — лёгкое окончание многих существительных.",
    ],
    tldr: {
      en: "verb-{{word:de}} {{word:ren2}} is the one who does it: {{word:xie3}}-{{word:de}} {{word:ren2}}, the one who writes.",
      ru: "глагол-{{word:de}} {{word:ren2}} — тот, кто это делает: {{word:xie3}}-{{word:de}} {{word:ren2}} — тот, кто пишет.",
    },
    necessity: {
      en: "Now you can name people by what they do.",
      ru: "Теперь вы можете называть людей по тому, что они делают.",
    },
  },
  info: {
    en: "verb-{{word:de}} {{word:ren2}}, the one who: {{word:xie3}}-{{word:de}} {{word:ren2}} (the one who writes)",
    ru: "глагол-{{word:de}} {{word:ren2}} — тот, кто: {{word:xie3}}-{{word:de}} {{word:ren2}} (тот, кто пишет)",
  },
  examples: [
    {
      pinyin: "{{Word:xie3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "写的人。",
      en: "The one who writes.",
      ru: "Тот, кто пишет.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:shuo1}}-{{word:de}} {{word:ren2}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}}.",
      hanzi: "那个说的人是我的爸爸妈妈。",
      en: "The one speaking is my parent.",
      ru: "Тот, кто говорит, — мой родитель.",
    },
    {
      pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "知道的人不说。",
      en: "The one who knows doesn't talk.",
      ru: "Кто знает, тот не говорит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yi1}}-ge {{word:er2}}-{{light:zi}}.",
      hanzi: "我有一个儿子。",
      en: "I have a son.",
      ru: "У меня есть сын.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:nv3}}-{{word:er2}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "她的女儿很小。",
      en: "Her daughter is little.",
      ru: "Её дочь маленькая.",
    },
    {
      pinyin: "{{Word:hai2}}-{{light:zi}} {{word:zai4}} {{word:jia1}}-{{word:li3}} {{word:wan2r}}.",
      hanzi: "孩子在家里玩儿。",
      en: "The child is playing at home.",
      ru: "Ребёнок играет дома.",
    },
  ],
  exercises: [
    {
      en: "the one who speaks",
      ru: "тот, кто говорит",
      answer: "{{Word:shuo1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "说的人。",
    },
    {
      en: "My son is big.",
      ru: "Мой сын большой.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:er2}}-{{light:zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的儿子很大。",
    },
    {
      en: "Her daughter loves books.",
      ru: "Её дочь любит книги.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:nv3}}-{{word:er2}} {{word:ai4}} {{word:shu1}}.",
      hanzi: "她的女儿爱书。",
    },
  ],
});
