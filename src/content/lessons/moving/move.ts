// To say something moves, use dòng (move). Pattern: Who + dòng
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "move",
  words: [
    {
      word: "zou3",
      en: "walk, leave; {{word:zou3}}-{{word:lu4}}: walk",
      ru: "идти пешком, уходить; {{word:zou3}}-{{word:lu4}} — идти пешком",
    },
  ],
  prose: {
    en: [
      "**To say something moves**, use {{word:dong4}} (move).",
      "",
      "**Who + {{word:dong4}}**",
      "",
      "{{Word:bu4}} {{word:yao4}} {{word:dong4}}! means \"Don't move!\" And {{word:dong4}}-{{word:wu4}} (animal) is a \"moving thing\".",
      "{{word:zou3}} is to walk, and also to leave: {{Word:wo3}} {{word:zou3}} {{word:le}}, I'm off.",
    ],
    ru: [
      "**Чтобы сказать, что что-то двигается**, используйте {{word:dong4}} (двигаться).",
      "",
      "**Кто + {{word:dong4}}**",
      "",
      "{{Word:bu4}} {{word:yao4}} {{word:dong4}}! значит «Не двигайся!». А {{word:dong4}}-{{word:wu4}} (животное) — это «двигающаяся вещь».",
      "{{word:zou3}} — идти пешком, а ещё уходить: {{Word:wo3}} {{word:zou3}} {{word:le}} — я пошёл.",
    ],
    tldr: {
      en: "{{word:dong4}} means move: {{Word:ta1}} {{word:dong4}} {{word:le}}, it moved.",
      ru: "{{word:dong4}} значит «двигаться»: {{Word:ta1}} {{word:dong4}} {{word:le}} — оно сдвинулось.",
    },
    necessity: {
      en: "Now you can say something is moving, or tell it to stop.",
      ru: "Теперь вы можете сказать, что что-то двигается, или велеть ему остановиться.",
    },
  },
  info: {
    en: "{{word:dong4}}, move: {{Word:bu4}} {{word:yao4}} {{word:dong4}}! (Don't move!)",
    ru: "{{word:dong4}} — двигаться: {{Word:bu4}} {{word:yao4}} {{word:dong4}}! (Не двигайся!)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:dong4}} {{word:le}}.",
      hanzi: "它动了。",
      en: "It moved.",
      ru: "Оно сдвинулось.",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:dong4}}!",
      hanzi: "不要动！",
      en: "Don't move!",
      ru: "Не двигайся!",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:dong4}}.",
      hanzi: "动物在动。",
      en: "The animal is moving.",
      ru: "Животное двигается.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:dong4}} {{word:ma}}?",
      hanzi: "你能动吗？",
      en: "Can you move?",
      ru: "Ты можешь двигаться?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zou3}} {{word:le}}.",
      hanzi: "我走了。",
      en: "I'm off.",
      ru: "Я пошёл.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zou3}}-{{word:lu4}} {{word:qu4}}.",
      hanzi: "他走路去。",
      en: "He walks there.",
      ru: "Он идёт туда пешком.",
    },
  ],
  exercises: [
    {
      en: "Don't move!",
      ru: "Не двигайся!",
      answer: "{{Word:bu4}} {{word:yao4}} {{word:dong4}}!",
      hanzi: "不要动！",
    },
    {
      en: "We walk there.",
      ru: "Мы идём туда пешком.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:zou3}}-{{word:lu4}} {{word:qu4}}.",
      hanzi: "我们走路去。",
    },
  ],
});
