// To offer to do something, say wǒ lái (I come), then the verb. wǒ-men lái is
// "let's". Pattern: wǒ lái + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "let-me",
  prose: {
    en: [
      "**To offer to do something**, say {{word:wo3}} {{word:lai2}} (I come), then the verb. It means \"let me do it\".",
      "",
      "**{{word:wo3}} {{word:lai2}} + verb**",
      "",
      "{{Word:wo3}} {{word:lai2}}! alone is \"let me!\". {{word:wo3}}-{{word:men}} {{word:lai2}} + verb is \"let's\".",
      "To ask to be let do it, say {{word:rang4}} {{word:wo3}} + verb: {{Word:rang4}} {{word:wo3}} {{word:kan4}}-kan, let me see.",
    ],
    ru: [
      "**Чтобы вызваться что-то сделать**, скажите {{word:wo3}} {{word:lai2}} («я иду»), а потом глагол. Это значит «давай я сделаю».",
      "",
      "**{{word:wo3}} {{word:lai2}} + глагол**",
      "",
      "Одно {{Word:wo3}} {{word:lai2}}! — это «давай я!». {{word:wo3}}-{{word:men}} {{word:lai2}} + глагол — «давайте».",
      "Чтобы попросить разрешения, скажите {{word:rang4}} {{word:wo3}} + глагол: {{Word:rang4}} {{word:wo3}} {{word:kan4}}-kan — дай посмотреть.",
    ],
    tldr: {
      en: "{{word:wo3}} {{word:lai2}} + verb is let me: {{Word:wo3}} {{word:lai2}} {{word:na2}}, let me carry it.",
      ru: "{{word:wo3}} {{word:lai2}} + глагол — «давай я»: {{Word:wo3}} {{word:lai2}} {{word:na2}} — давай я понесу.",
    },
    necessity: { en: "Now you can offer to do something.", ru: "Теперь вы можете вызваться что-то сделать." },
  },
  info: {
    en: "{{word:wo3}} {{word:lai2}} + verb, let me: {{Word:wo3}} {{word:lai2}} {{word:na2}}. (Let me carry it.)",
    ru: "{{word:wo3}} {{word:lai2}} + глагол — давай я: {{Word:wo3}} {{word:lai2}} {{word:na2}}. (Давай я понесу.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:lai2}}!",
      hanzi: "我来！",
      en: "Let me!",
      ru: "Давай я!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:na2}}.",
      hanzi: "我来拿。",
      en: "Let me carry it.",
      ru: "Давай я понесу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:deng3}}-deng, {{word:wo3}} {{word:lai2}} {{word:zuo4}}.",
      hanzi: "你等等，我来做。",
      en: "Wait a bit, let me do it.",
      ru: "Подожди, давай я сделаю.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:wen4}} {{word:ta1}}.",
      hanzi: "我来问他。",
      en: "Let me ask him.",
      ru: "Давай я его спрошу.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:lai2}} {{word:kan4}}-kan.",
      hanzi: "我们来看看。",
      en: "Let's have a look.",
      ru: "Давайте посмотрим.",
    },
    {
      pinyin: "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}, {{word:wo3}} {{word:lai2}}!",
      hanzi: "没有关系，我来！",
      en: "No problem, let me!",
      ru: "Ничего страшного, давай я!",
    },
    {
      pinyin: "{{Word:rang4}} {{word:wo3}} {{word:kan4}}-kan.",
      hanzi: "让我看看。",
      en: "Let me have a look.",
      ru: "Дай посмотреть.",
    },
  ],
  exercises: [
    {
      en: "Let me!",
      ru: "Давай я!",
      answer: "{{Word:wo3}} {{word:lai2}}!",
      hanzi: "我来！",
    },
    {
      en: "Let me ask.",
      ru: "Давай я спрошу.",
      answer: "{{Word:wo3}} {{word:lai2}} {{word:wen4}}.",
      hanzi: "我来问。",
    },
    {
      en: "Let me turn on the light!",
      ru: "Давай я включу свет!",
      answer: "{{Word:wo3}} {{word:lai2}} {{word:kai1}} {{word:deng1}}!",
      hanzi: "我来开灯！",
    },
    {
      en: "Let me see.",
      ru: "Дай посмотреть.",
      answer: "{{Word:rang4}} {{word:wo3}} {{word:kan4}}-kan.",
      hanzi: "让我看看。",
    },
  ],
});
