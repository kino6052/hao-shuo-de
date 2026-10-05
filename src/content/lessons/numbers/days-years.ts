// To count days and years, put the number right before tiān (day) or nián
// (year), with no -ge. Pattern: number + tiān / nián
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "days-years",
  words: [
    {
      word: "tian1",
      en: "day; the sky",
      ru: "день; небо",
    },
    {
      word: "nian2",
      en: "year",
      ru: "год",
    },
    {
      word: "xin1",
      sense: "new",
      en: "new (in {{word:xin1}}-{{word:nian2}}: New Year)",
      ru: "новый (в {{word:xin1}}-{{word:nian2}} — Новый год)",
    },
  ],
  prose: {
    en: [
      "**To count days and years**, put the number right before {{word:tian1}} (day) or {{word:nian2}} (year), with no -ge.",
      "",
      "**number + {{word:tian1}} / {{word:nian2}}**",
      "",
      "{{word:ming2}}-{{word:tian1}} (the bright day) is tomorrow, {{word:hou4}}-{{word:tian1}} the day after, and {{word:qian2}}-{{word:tian1}} the day before yesterday. {{word:qu4}}-{{word:nian2}} (the gone year) is last year, and {{word:ming2}}-{{word:nian2}} is next year.",
      "{{word:tian1}} is also the sky: {{word:tian1}}-{{word:qi4}} (sky air) is the weather.",
      "{{word:qian2}}-{{word:yi1}}-{{word:tian1}} is yesterday, and {{word:xin1}}-{{word:nian2}} (新年: here 新 means new) is the New Year.",
    ],
    ru: [
      "**Чтобы считать дни и годы**, ставьте число прямо перед {{word:tian1}} (день) или {{word:nian2}} (год), без -ge.",
      "",
      "**число + {{word:tian1}} / {{word:nian2}}**",
      "",
      "{{word:ming2}}-{{word:tian1}} («светлый день») — завтра, {{word:hou4}}-{{word:tian1}} — послезавтра, {{word:qian2}}-{{word:tian1}} — позавчера. {{word:qu4}}-{{word:nian2}} («ушедший год») — прошлый год, {{word:ming2}}-{{word:nian2}} — следующий.",
      "{{word:tian1}} — это ещё и небо: {{word:tian1}}-{{word:qi4}} («небесный воздух») — погода.",
      "{{word:qian2}}-{{word:yi1}}-{{word:tian1}} — вчера, а {{word:xin1}}-{{word:nian2}} (新年: здесь 新 значит «новый») — Новый год.",
    ],
    tldr: {
      en: "number + {{word:tian1}} / {{word:nian2}}: {{word:san1}} {{word:tian1}}, three days. {{word:ming2}}-{{word:tian1}} is tomorrow.",
      ru: "число + {{word:tian1}} / {{word:nian2}}: {{word:san1}} {{word:tian1}} — три дня. {{word:ming2}}-{{word:tian1}} — завтра.",
    },
    necessity: {
      en: "Now you can say how many days or years, and talk about tomorrow and next year.",
      ru: "Теперь вы можете сказать, сколько дней или лет, и говорить о завтрашнем дне и следующем годе.",
    },
  },
  info: {
    en: "number + {{word:tian1}} / {{word:nian2}}: {{word:san1}} {{word:tian1}} (three days); {{word:ming2}}-{{word:tian1}} (tomorrow), {{word:qu4}}-{{word:nian2}} (last year)",
    ru: "число + {{word:tian1}} / {{word:nian2}}: {{word:san1}} {{word:tian1}} (три дня); {{word:ming2}}-{{word:tian1}} (завтра), {{word:qu4}}-{{word:nian2}} (в прошлом году)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:deng3}} {{word:le}} {{word:san1}} {{word:tian1}}.",
      hanzi: "我等了三天。",
      en: "I waited three days.",
      ru: "Я ждал три дня.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}} {{word:liu2}} {{word:le}} {{word:shi2}} {{word:nian2}}.",
      hanzi: "他在这里留了十年。",
      en: "He stayed here for ten years.",
      ru: "Он пробыл здесь десять лет.",
    },
    {
      pinyin: "{{Word:yi1}} {{word:nian2}} {{word:you3}} {{word:shi2}}-{{word:er4}}-ge {{word:yue4}}.",
      hanzi: "一年有十二个月。",
      en: "A year has twelve months.",
      ru: "В году двенадцать месяцев.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "明天我去。",
      en: "I'll go tomorrow.",
      ru: "Я пойду завтра.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:nian2}} {{word:wo3}}-{{word:men}} {{word:qu4}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "明年我们去很远的地方。",
      en: "Next year we're going somewhere far away.",
      ru: "В следующем году мы поедем далеко.",
    },
    {
      pinyin: "{{Word:qu4}}-{{word:nian2}} {{word:hen3}} {{word:re4}}.",
      hanzi: "去年很热。",
      en: "Last year was hot.",
      ru: "В прошлом году было жарко.",
    },
    {
      pinyin: "{{Word:tian1}}-{{word:qi4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "天气很好。",
      en: "The weather is nice.",
      ru: "Погода хорошая.",
    },
    {
      pinyin: "{{Word:qian2}}-{{word:yi1}}-{{word:tian1}} {{word:wo3}} {{word:qu4}} {{word:le}}.",
      hanzi: "前一天我去了。",
      en: "I went yesterday.",
      ru: "Вчера я ходил.",
    },
  ],
  exercises: [
    {
      en: "I waited two days.",
      ru: "Я ждал два дня.",
      answer: "{{Word:wo3}} {{word:deng3}} {{word:le}} {{word:liang3}} {{word:tian1}}.",
      hanzi: "我等了两天。",
    },
    {
      en: "Tomorrow I'm going home.",
      ru: "Завтра я иду домой.",
      answer: "{{Word:ming2}}-{{word:tian1}} {{word:wo3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "明天我回家。",
    },
    {
      en: "next year",
      ru: "в следующем году",
      answer: "{{Word:ming2}}-{{word:nian2}}",
      hanzi: "明年",
    },
    {
      en: "Yesterday was hot.",
      ru: "Вчера было жарко.",
      answer: "{{Word:qian2}}-{{word:yi1}}-{{word:tian1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "前一天很热。",
    },
    {
      en: "Happy New Year!",
      ru: "С Новым годом!",
      answer: "{{Word:xin1}}-{{word:nian2}} {{word:hao3}}!",
      hanzi: "新年好！",
    },
  ],
  faq: [
    // why no ge before tiān and nián? (they count themselves, like cì)
    {
      question: {
        en: "Why is there no -ge in {{word:san1}} {{word:tian1}}?",
        ru: "Почему в {{word:san1}} {{word:tian1}} нет -ge?",
      },
      en: "{{word:tian1}} and {{word:nian2}} are already units, like {{word:ci4}} (times): the number goes straight in front. {{word:san1}}-ge {{word:tian1}} sounds wrong.",
      ru: "{{word:tian1}} и {{word:nian2}} — уже единицы счёта, как {{word:ci4}} (раз): число ставится прямо перед ними. {{word:san1}}-ge {{word:tian1}} звучит неправильно.",
    },
  ],
});
