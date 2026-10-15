import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "you-arrive",
  prose: {
    en: [
      "<h2>You arrive</h2>",
      "You are the student. The story never gives you a name, so anyone can step in.",
      "It is September. You are an exchange student in a Chinese city, with one suitcase and no Chinese.",
      "You have one year. On your door there is a note in characters you cannot read yet.",
    ],
    ru: [
      "<h2>Вы приезжаете</h2>",
      "Вы — студент. В истории у вас нет имени, поэтому на ваше место может встать любой.",
      "Сентябрь. Вы приехали по обмену в китайский город с одним чемоданом и без китайского.",
      "У вас впереди год. На вашей двери записка иероглифами, которые вы пока не можете прочитать.",
    ],
  },
  image: {
    file: "intro-4-arrival",
    alt: {
      en: "In a hallway, the student with an orange scarf and a backpack stands at a door with a note on it. Miao-miao sits on the suitcase beside them.",
      ru: "В коридоре студент в оранжевом шарфе и с рюкзаком стоит у двери, на которой висит записка. Рядом на чемодане сидит Miao-miao.",
    },
    pinyin: "{{Word:ni3}} {{word:hao3}}! {{Word:wo3}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
    hanzi: "你好！我在这里。",
    en: "Hello! I am here.",
    ru: "Здравствуйте! Я здесь.",
  },
});
