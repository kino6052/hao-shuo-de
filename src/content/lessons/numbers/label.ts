// To say number one, number two, put hào after the number. Pattern: number +
// hào
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "label",
  words: [
    {
      word: "hao4",
      en: "number (as in number two)",
      ru: "номер (как в «номер два»)",
    },
  ],
  prose: {
    en: [
      "**To say number one, number two**, put {{word:hao4}} after the number.",
      "",
      "**number + {{word:hao4}}**",
    ],
    ru: [
      "**Чтобы сказать «номер один», «номер два»**, поставьте {{word:hao4}} после числа.",
      "",
      "**число + {{word:hao4}}**",
    ],
    tldr: {
      en: "number + {{word:hao4}}: {{word:er4}}-{{word:hao4}} is number two.",
      ru: "число + {{word:hao4}}: {{word:er4}}-{{word:hao4}} — номер два.",
    },
    necessity: {
      en: "Now you can name things by their number.",
      ru: "Теперь вы можете называть вещи по номерам.",
    },
  },
  info: {
    en: "number + {{word:hao4}}, number …: {{Word:er4}}-{{word:hao4}} (number two)",
    ru: "число + {{word:hao4}} — номер: {{Word:er4}}-{{word:hao4}} (номер два)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:shi4}} {{word:wu3}}-{{word:hao4}}.",
      hanzi: "我的家是五号。",
      en: "My home is number five.",
      ru: "Мой дом — номер пять.",
    },
    {
      pinyin: "{{Word:er4}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
      hanzi: "二号在哪里？",
      en: "Where is number two?",
      ru: "Где номер два?",
    },
    {
      pinyin: "{{Word:san1}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
      hanzi: "三号在哪里？",
      en: "Where is number three?",
      ru: "Где номер три?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shi4}} {{word:yi1}}-{{word:hao4}}!",
      hanzi: "你是一号！",
      en: "You're number one!",
      ru: "Ты номер один!",
    },
    {
      pinyin: "{{Word:wu3}}-{{word:hao4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "五号在我的前面。",
      en: "Number five is in front of me.",
      ru: "Номер пять передо мной.",
    },
    {
      pinyin: "{{Word:liu4}}-{{word:hao4}} {{word:lu4}} {{word:tong1}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "六号路通到我的家。",
      en: "Road number six leads to my home.",
      ru: "Дорога номер шесть ведёт к моему дому.",
    },
  ],
  exercises: [
    {
      en: "Where is number four?",
      ru: "Где номер четыре?",
      answer: "{{Word:si4}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
      hanzi: "四号在哪里？",
    },
  ],
  faq: [
    // hào also numbers days of the month
    {
      question: {
        en: "Is {{word:hao4}} only for things like \"number two\"?",
        ru: "{{word:hao4}} — только для «номер два» и подобного?",
      },
      en: "It also numbers the days of the month: {{word:wu3}}-{{word:hao4}} is the 5th.",
      ru: "Ещё им называют числа месяца: {{word:wu3}}-{{word:hao4}} — пятое число.",
    },
  ],
});
