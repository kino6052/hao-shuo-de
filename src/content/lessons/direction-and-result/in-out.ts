// To say in, out, and back, use jìn, chū, and huí; add lái or qù to show
// which way. Pattern: jìn / chū / huí + lái / qù
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "in-out",
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
  ],
  prose: {
    en: [
      "**To say in, out, and back**, use {{word:jin4}} (go in), {{word:chu1}} (go out), and {{word:hui2}} (go back). Add {{word:lai2}} or {{word:qu4}} to show which way, like {{word:shang4}}-{{word:lai2}} (Lesson {{lesson:moving}}).",
      "",
      "**{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:jin4}}-{{word:lai2}} is \"come in\", toward the speaker. {{word:chu1}}-{{word:qu4}} is \"go out\", away from the speaker. A place goes right after: {{word:hui2}} {{word:jia1}} is \"go home\".",
    ],
    ru: [
      "**Чтобы сказать «внутрь», «наружу» и «обратно»**, используйте {{word:jin4}} (входить), {{word:chu1}} (выходить) и {{word:hui2}} (возвращаться). Добавьте {{word:lai2}} или {{word:qu4}}, чтобы показать направление, как в {{word:shang4}}-{{word:lai2}} (урок {{lesson:moving}}).",
      "",
      "**{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:jin4}}-{{word:lai2}} — «войти сюда», к говорящему. {{word:chu1}}-{{word:qu4}} — «выйти отсюда», от говорящего. Место ставится сразу после: {{word:hui2}} {{word:jia1}} — «пойти домой».",
    ],
    tldr: {
      en: "{{word:jin4}} is in, {{word:chu1}} is out, {{word:hui2}} is back. Add {{word:lai2}} or {{word:qu4}}: {{word:jin4}}-{{word:lai2}}!",
      ru: "{{word:jin4}} — внутрь, {{word:chu1}} — наружу, {{word:hui2}} — обратно. Добавьте {{word:lai2}} или {{word:qu4}}: {{word:jin4}}-{{word:lai2}}!",
    },
    necessity: {
      en: "Now you can come in, go out, and go home.",
      ru: "Теперь вы можете войти, выйти и пойти домой.",
    },
  },
  info: {
    en: "{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}, in / out / back: {{Word:ni3}} {{word:jin4}}-{{word:lai2}}! (Come in!) {{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}. (I want to go home.)",
    ru: "{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}} — внутрь / наружу / обратно: {{Word:ni3}} {{word:jin4}}-{{word:lai2}}! (Входи!) {{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}. (Я хочу домой.)",
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
      pinyin: "{{Word:ta1}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他出去了。",
      en: "He went out.",
      ru: "Он вышел.",
    },
    {
      pinyin: "{{Word:dong4wu4}} {{word:cong2}} {{word:he2zi}}-{{word:li3}} {{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "动物从盒子里出来了。",
      en: "The animal came out of the box.",
      ru: "Животное вылезло из коробки.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}}, {{word:zai4}} {{word:fu4jin4}} {{word:wan2r}}.",
      hanzi: "我们出去，在附近玩儿。",
      en: "Let's go out and play nearby.",
      ru: "Давай выйдем и поиграем поблизости.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "我要回家。",
      en: "I want to go home.",
      ru: "Я хочу домой.",
    },
    {
      pinyin: "{{Word:fu4mu3}} {{word:hui2}}-{{word:lai2}} {{word:le}}.",
      hanzi: "父母回来了。",
      en: "Mom and Dad are back.",
      ru: "Мама и папа вернулись.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hui2}}-{{word:qu4}} {{word:le}} {{word:ma}}?",
      hanzi: "她回去了吗？",
      en: "Did she go back?",
      ru: "Она уже ушла обратно?",
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
  ],
});
