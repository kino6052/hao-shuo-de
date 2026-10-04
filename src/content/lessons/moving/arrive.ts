// To say you arrive somewhere, put dào (arrive) before the place. Pattern:
// Who + dào + place + le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "arrive",
  words: [
    {
      term: "{{word:dao4}}",
      hanzi: "到",
      en: "arrive, to",
      ru: "прибывать, доходить до",
    },
  ],
  prose: {
    en: [
      "**To say you arrive somewhere**, put {{word:dao4}} (arrive) before the place.",
      "",
      "**Who + {{word:dao4}} + place + {{word:le}}**",
    ],
    ru: [
      "**Чтобы сказать, что вы куда-то пришли**, поставьте {{word:dao4}} (прибывать) перед местом.",
      "",
      "**Кто + {{word:dao4}} + место + {{word:le}}**",
    ],
    tldr: {
      en: "Put {{word:dao4}} before a place to say you arrive there.",
      ru: "Поставьте {{word:dao4}} перед местом, чтобы сказать, что вы туда добрались.",
    },
    necessity: { en: "Now you can say you got there.", ru: "Теперь вы можете сказать, что добрались." },
  },
  info: {
    en: "{{word:dao4}} + place, arrive: {{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}. (I've arrived home.)",
    ru: "{{word:dao4}} + место — добраться: {{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}. (Я пришёл домой.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}.",
      hanzi: "我到家了。",
      en: "I've arrived home.",
      ru: "Я пришёл домой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:dao4}} {{word:na4}}-ge {{word:di4fang1}} {{word:le}}.",
      hanzi: "她到那个地方了。",
      en: "She got to that place.",
      ru: "Она добралась до того места.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:dao4}}?",
      hanzi: "什么时间你到？",
      en: "When do you arrive?",
      ru: "Когда ты приедешь?",
    },
  ],
  exercises: [
    {
      en: "We arrived home.",
      ru: "Мы пришли домой.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:dao4}} {{word:jia1}} {{word:le}}.",
      hanzi: "我们到家了。",
    },
  ],
  faq: [
    // dào vs qù
    {
      question: {
        en: "What's the difference between {{word:qu4}} and {{word:dao4}}?",
        ru: "Чем {{word:qu4}} отличается от {{word:dao4}}?",
      },
      en: "{{word:qu4}} is going toward a place. {{word:dao4}} is getting there: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} (I'm on my way), {{Word:wo3}} {{word:dao4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:le}} (I'm there now).",
      ru: "{{word:qu4}} — идти к месту. {{word:dao4}} — добраться до него: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} (я в пути), {{Word:wo3}} {{word:dao4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:le}} (я уже на месте).",
    },
  ],
});
