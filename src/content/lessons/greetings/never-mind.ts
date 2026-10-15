// Méi guānxi says never mind. Pattern: méi guānxi
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "never-mind",
  prose: {
    en: [
      "**To say never mind**, say {{word:mei2}} {{word:guan1xi}}: it has no link to anything, so it doesn't matter.",
      "",
      "**{{word:mei2}} {{word:guan1xi}}**",
      "",
      "Use it after a thank-you or a sorry, or before a sentence: {{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}} is \"Never mind, I'm not afraid\".",
    ],
    ru: [
      "**Чтобы сказать «ничего страшного»**, скажите {{word:mei2}} {{word:guan1xi}}: это ни с чем не связано, значит, не важно.",
      "",
      "**{{word:mei2}} {{word:guan1xi}}**",
      "",
      "Так можно ответить на «спасибо» или «простите», а можно начать предложение: {{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}} — «Ничего, я не боюсь».",
    ],
    tldr: {
      en: "{{Word:mei2}} {{word:guan1xi}} means never mind.",
      ru: "{{Word:mei2}} {{word:guan1xi}} значит «ничего страшного».",
    },
    necessity: {
      en: "Now you can say it's all right.",
      ru: "Теперь вы можете сказать, что всё в порядке.",
    },
  },
  info: {
    pattern: "mei-guanxi",
    en: "{{Word:mei2}} {{word:guan1xi}}: never mind. {{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}}. (Never mind, I'm not afraid.)",
    ru: "{{Word:mei2}} {{word:guan1xi}}: ничего страшного. {{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}}. (Ничего, я не боюсь.)",
  },
  examples: [
    {
      pinyin: "{{Word:mei2}} {{word:guan1xi}}.",
      hanzi: "没关系。",
      en: "Never mind.",
      ru: "Ничего страшного.",
    },
    {
      pinyin: "{{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "没关系，我不怕。",
      en: "Never mind, I'm not afraid.",
      ru: "Ничего, я не боюсь.",
    },
    {
      pinyin: "{{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "没关系，我等你。",
      en: "Never mind, I'll wait for you.",
      ru: "Ничего, я тебя подожду.",
    },
    {
      pinyin: "{{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:neng2}} {{word:chi1}}.",
      hanzi: "没关系，我能吃。",
      en: "Never mind, I can eat.",
      ru: "Ничего, я могу поесть.",
    },
  ],
  exercises: [
    {
      en: "Never mind, I'm not afraid.",
      ru: "Ничего, я не боюсь.",
      answer: "{{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "没关系，我不怕。",
    },
    {
      en: "Never mind, I'll wait for you.",
      ru: "Ничего, я тебя подожду.",
      answer: "{{Word:mei2}} {{word:guan1xi}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "没关系，我等你。",
    },
    {
      en: "Never mind.",
      ru: "Ничего страшного.",
      answer: "{{Word:mei2}} {{word:guan1xi}}.",
      hanzi: "没关系。",
    },
  ],
});
