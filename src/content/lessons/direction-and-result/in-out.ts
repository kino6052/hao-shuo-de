// To say in, out, and back, use jìn, chū, and huí; add lái or qù to show
// which way. Also tōng-guò (go through) and tōng-dào (lead to), bù tōng is
// blocked. Pattern: jìn / chū / huí + lái / qù
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "in-out",
  scene: "Acts out 'dòng-wù cóng bāo-lǐ chū-lái le': a small animal pops its head out of a bag on the floor, the student jumping back in surprise; Miao-miao sits calm. Green: the bag.",
  words: [
    {
      word: "jin4",
      en: "go in, enter",
      ru: "входить",
    },
    {
      word: "chu1",
      en: "go out, come out",
      ru: "выходить",
    },
    {
      word: "hui2",
      en: "go back, come back",
      ru: "возвращаться",
    },
    {
      word: "tong1",
      en: "go through, lead to",
      ru: "проходить через, вести (куда-то)",
    },
  ],
  prose: {
    en: [
      "**To say in, out, and back**, use {{word:jin4}} (go in), {{word:chu1}} (go out), and {{word:hui2}} (go back). Add {{word:lai2}} or {{word:qu4}} to show which way, like {{word:shang4}}-{{word:lai2}} (Lesson {{lesson:moving}}).",
      "",
      "**{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:jin4}}-{{word:lai2}} is \"come in\", toward the speaker. {{word:chu1}}-{{word:qu4}} is \"go out\", away from the speaker. A place goes right after: {{word:hui2}} {{word:jia1}} is \"go home\".",
      "",
      "**To say go through**, put {{word:tong1}}-{{word:guo4}} before the place. Here {{word:guo4}} means past, through, not \"have done before\". {{word:tong1}}-{{word:dao4}} says where a road leads: {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:jia1}}, the road leads home. {{word:bu4}} {{word:tong1}} means you can't get through.",
    ],
    ru: [
      "**Чтобы сказать «внутрь», «наружу» и «обратно»**, используйте {{word:jin4}} (входить), {{word:chu1}} (выходить) и {{word:hui2}} (возвращаться). Добавьте {{word:lai2}} или {{word:qu4}}, чтобы показать направление, как в {{word:shang4}}-{{word:lai2}} (урок {{lesson:moving}}).",
      "",
      "**{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:jin4}}-{{word:lai2}} — «войти сюда», к говорящему. {{word:chu1}}-{{word:qu4}} — «выйти отсюда», от говорящего. Место ставится сразу после: {{word:hui2}} {{word:jia1}} — «пойти домой».",
      "",
      "**Чтобы сказать «пройти через»**, поставьте {{word:tong1}}-{{word:guo4}} перед местом. Здесь {{word:guo4}} значит «мимо, насквозь», а не «когда-то делал». {{word:tong1}}-{{word:dao4}} говорит, куда ведёт дорога: {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:jia1}} — дорога ведёт домой. {{word:bu4}} {{word:tong1}} значит, что пройти нельзя.",
    ],
    tldr: {
      en: "{{word:jin4}} is in, {{word:chu1}} is out, {{word:hui2}} is back. Add {{word:lai2}} or {{word:qu4}}: {{word:jin4}}-{{word:lai2}}! {{word:tong1}}-{{word:guo4}} is go through.",
      ru: "{{word:jin4}} — внутрь, {{word:chu1}} — наружу, {{word:hui2}} — обратно. Добавьте {{word:lai2}} или {{word:qu4}}: {{word:jin4}}-{{word:lai2}}! {{word:tong1}}-{{word:guo4}} — пройти через.",
    },
    necessity: {
      en: "Now you can come in, go out, go home, and go through a place.",
      ru: "Теперь вы можете войти, выйти, пойти домой и пройти через место.",
    },
  },
  info: {
    pattern: "verb-result",
    en: "{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}, in / out / back: {{Word:ni3}} {{word:jin4}}-{{word:lai2}}! (Come in!) {{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}. (I want to go home.) {{word:tong1}}-{{word:guo4}} + place, go through; {{word:tong1}}-{{word:dao4}} + place, lead to: {{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}. (This road leads to my home.)",
    ru: "{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}} — внутрь / наружу / обратно: {{Word:ni3}} {{word:jin4}}-{{word:lai2}}! (Входи!) {{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}. (Я хочу домой.) {{word:tong1}}-{{word:guo4}} + место — пройти через; {{word:tong1}}-{{word:dao4}} + место — вести туда: {{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}. (Эта дорога ведёт к моему дому.)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:jin4}}-{{word:lai2}}!",
      hanzi: "你进来！",
      en: "Come in!",
      ru: "Входи!",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:jin4}}-{{word:qu4}}!",
      hanzi: "不要进去！",
      en: "Don't go in!",
      ru: "Не входи туда!",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:cong2}} {{word:bao1}}-{{word:li3}} {{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "动物从包里出来了。",
      en: "The animal came out of the bag.",
      ru: "Животное вылезло из сумки.",
    },
    {
      pinyin: "{{Word:ba4ba}}-{{word:ma1ma}} {{word:hui2}}-{{word:lai2}} {{word:le}}.",
      hanzi: "爸爸妈妈回来了。",
      en: "Mom and Dad are back.",
      ru: "Мама и папа вернулись.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hui2}}-{{word:qu4}} {{word:le}} {{word:ma}}?",
      hanzi: "她回去了吗？",
      en: "Did she go back?",
      ru: "Она уже ушла обратно?",
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
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:tong1}}-{{word:guo4}} {{word:zhe4}}-ge {{word:kou3}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "动物通过这个口出去了。",
      en: "The animal went out through this opening.",
      ru: "Животное вышло через этот проём.",
    },
  ],
  exercises: [
    {
      en: "Come in!",
      ru: "Входи!",
      answer: "{{Word:jin4}}-{{word:lai2}}!",
      hanzi: "进来！",
    },
    {
      en: "She went home.",
      ru: "Она пошла домой.",
      answer: "{{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:le}}.",
      hanzi: "她回家了。",
    },
    {
      en: "We went out.",
      ru: "Мы вышли.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "我们出去了。",
    },
    {
      en: "Does this road lead home?",
      ru: "Эта дорога ведёт домой?",
      answer: "{{Word:zhe4}}-ge {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:jia1}} {{word:ma}}?",
      hanzi: "这个路通到家吗？",
    },
  ],
});
