// To answer yes or no, repeat the verb for "yes", or put bù before it for
// "no". Pattern: verb. / bù + verb.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "answer",
  prose: {
    en: [
      "**To answer yes or no**, repeat the verb for \"yes\", or put {{word:bu4}} before it for \"no\".",
      "",
      "**verb. / {{word:bu4}} + verb.**",
      "",
      "Chinese has no single word for \"yes\" or \"no\". You can also answer {{word:shi4}} (\"yes, it is\") or {{word:bu4}} {{word:shi4}} (\"no, it isn't\").",
    ],
    ru: [
      "**Чтобы ответить «да» или «нет»**, повторите глагол — это «да», или поставьте перед ним {{word:bu4}} — это «нет».",
      "",
      "**глагол. / {{word:bu4}} + глагол.**",
      "",
      "В китайском нет одного слова для «да» или «нет». Можно также ответить {{word:shi4}} («да, это так») или {{word:bu4}} {{word:shi4}} («нет, не так»).",
    ],
    tldr: {
      en: "To answer yes, repeat the verb. To answer no, put {{word:bu4}} before it.",
      ru: "Чтобы ответить «да», повторите глагол. Чтобы ответить «нет», поставьте перед ним {{word:bu4}}.",
    },
    necessity: {
      en: "Chinese has no single word for \"yes\" or \"no\".",
      ru: "В китайском нет одного слова для «да» или «нет».",
    },
  },
  info: {
    en: "verb. / {{word:bu4}} + verb., yes / no: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? {{Word:ting1}}. (Do you listen? Yes, I do.)",
    ru: "глагол. / {{word:bu4}} + глагол. — да / нет: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? {{Word:ting1}}. (Ты слушаешь? Да, слушаю.)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? {{Word:ting1}}.",
      hanzi: "你听不听？听。",
      en: "Do you listen? Yes, I do.",
      ru: "Ты слушаешь? Да, слушаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? {{Word:bu4}} {{word:ting1}}.",
      hanzi: "你听不听？不听。",
      en: "Do you listen? No, I don't.",
      ru: "Ты слушаешь? Нет, не слушаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}}-{{word:mei2}}-{{word:you3}} {{word:shui3}}? {{Word:you3}}.",
      hanzi: "你有没有水？有。",
      en: "Do you have water? Yes, I do.",
      ru: "У тебя есть вода? Да, есть.",
    },
  ],
  exercises: [
    {
      en: "Answer \"Do you have a bag?\" with yes.",
      ru: "Ответьте «да» на вопрос «У тебя есть сумка?».",
      answer: "{{Word:you3}}.",
      hanzi: "有。",
    },
  ],
});
