// To say go through, use tōng-guò and the place; tōng-dào says where a road
// leads, and bù tōng is blocked. Pattern: tōng-guò + place / tōng-dào + place
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "through",
  words: [
    {
      term: "{{word:tong1}}",
      hanzi: "通",
      en: "go through, lead to",
      ru: "проходить через, вести (куда-то)",
    },
  ],
  prose: {
    en: [
      "**To say go through**, put {{word:tong1}}-{{word:guo4}} before the place. Here {{word:guo4}} means past, through, not \"have done before\".",
      "",
      "**{{word:tong1}}-{{word:guo4}} + place / {{word:tong1}}-{{word:dao4}} + place**",
      "",
      "{{word:tong1}}-{{word:dao4}} says where a road leads: {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:jia1}}, the road leads home. {{word:bu4}} {{word:tong1}} means you can't get through.",
    ],
    ru: [
      "**Чтобы сказать «пройти через»**, поставьте {{word:tong1}}-{{word:guo4}} перед местом. Здесь {{word:guo4}} значит «мимо, насквозь», а не «когда-то делал».",
      "",
      "**{{word:tong1}}-{{word:guo4}} + место / {{word:tong1}}-{{word:dao4}} + место**",
      "",
      "{{word:tong1}}-{{word:dao4}} говорит, куда ведёт дорога: {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:jia1}} — дорога ведёт домой. {{word:bu4}} {{word:tong1}} значит, что пройти нельзя.",
    ],
    tldr: {
      en: "{{word:tong1}}-{{word:guo4}} + place is go through; {{word:tong1}}-{{word:dao4}} + place is lead to.",
      ru: "{{word:tong1}}-{{word:guo4}} + место — пройти через; {{word:tong1}}-{{word:dao4}} + место — вести туда.",
    },
    necessity: {
      en: "Now you can say go through a place, and where a road leads.",
      ru: "Теперь вы можете сказать, что проходите через какое-то место и куда ведёт дорога.",
    },
  },
  info: {
    en: "{{word:tong1}}-{{word:guo4}} + place, go through; {{word:tong1}}-{{word:dao4}} + place, lead to: {{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}. (This road leads to my home.)",
    ru: "{{word:tong1}}-{{word:guo4}} + место — пройти через; {{word:tong1}}-{{word:dao4}} + место — вести туда: {{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}. (Эта дорога ведёт к моему дому.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:tong1}}-{{word:guo4}} {{word:zhe4}}-ge {{word:di4fang1}}.",
      hanzi: "我们通过这个地方。",
      en: "We go through this place.",
      ru: "Мы проходим через это место.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "这个路通到我的家。",
      en: "This road leads to my home.",
      ru: "Эта дорога ведёт к моему дому.",
    },
    {
      pinyin: "{{Word:lu4}} {{word:bu4}} {{word:tong1}}, {{word:wo3}}-{{word:men}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "路不通，我们回家。",
      en: "The road is blocked, so we're going home.",
      ru: "Дорога перекрыта, мы идём домой.",
    },
    {
      pinyin: "{{Word:dong4wu4}} {{word:tong1}}-{{word:guo4}} {{word:zhe4}}-ge {{word:kou3}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "动物通过这个口出去了。",
      en: "The animal went out through this opening.",
      ru: "Животное вышло через этот проём.",
    },
  ],
  exercises: [
    {
      en: "Does this road lead home?",
      ru: "Эта дорога ведёт домой?",
      answer: "{{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:jia1}} {{word:ma}}?",
      hanzi: "这个路通到家吗？",
    },
  ],
});
