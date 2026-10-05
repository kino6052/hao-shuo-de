// To say which way an action goes, put lái (toward you) or qù (away from you)
// right after the verb. Pattern: verb-lái / verb-qù
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "toward-away",
  words: [
    {
      word: "na2",
      en: "take, pick up, hold",
      ru: "брать, взять, держать",
    },
  ],
  prose: {
    en: [
      "**To say which way an action goes**, put {{word:lai2}} (toward you) or {{word:qu4}} (away from you) right after the verb.",
      "",
      "**verb-{{word:lai2}} / verb-{{word:qu4}}**",
      "",
      "{{word:na2}}-{{word:lai2}} is \"bring\", and {{word:na2}}-{{word:qu4}} is \"take away\". Put the thing first with {{word:ba3}} (Lesson {{lesson:becoming-and-making}}): {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}!",
    ],
    ru: [
      "**Чтобы сказать, куда направлено действие**, поставьте {{word:lai2}} (к вам) или {{word:qu4}} (от вас) сразу после глагола.",
      "",
      "**глагол-{{word:lai2}} / глагол-{{word:qu4}}**",
      "",
      "{{word:na2}}-{{word:lai2}} — «принести», а {{word:na2}}-{{word:qu4}} — «унести». Вещь ставьте вперёд с {{word:ba3}} (урок {{lesson:becoming-and-making}}): {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}!",
    ],
    tldr: {
      en: "verb-{{word:lai2}} comes toward you, verb-{{word:qu4}} goes away: {{word:na2}}-{{word:lai2}} is bring.",
      ru: "глагол-{{word:lai2}} — к вам, глагол-{{word:qu4}} — от вас: {{word:na2}}-{{word:lai2}} — «принести».",
    },
    necessity: {
      en: "Now you can say bring and take away.",
      ru: "Теперь вы можете сказать «принести» и «унести».",
    },
  },
  info: {
    en: "verb-{{word:lai2}} / verb-{{word:qu4}}, toward you / away: {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}! (Bring the water!)",
    ru: "глагол-{{word:lai2}} / глагол-{{word:qu4}} — к вам / от вас: {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}! (Принеси воду!)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:na2}} {{word:zhe4}}-ge.",
      hanzi: "你拿这个。",
      en: "You take this one.",
      ru: "Возьми вот это.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}!",
      hanzi: "把水拿来！",
      en: "Bring the water!",
      ru: "Принеси воду!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:gong1}}-{{word:ju4}} {{word:na2}}-{{word:lai2}} {{word:le}}.",
      hanzi: "我把工具拿来了。",
      en: "I brought the tool.",
      ru: "Я принёс инструмент.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:na2}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他把盒子拿去了。",
      en: "He took the box away.",
      ru: "Он унёс коробку.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:na2}}-{{word:qu4}}!",
      hanzi: "把你的衣服拿去！",
      en: "Take your clothes away!",
      ru: "Унеси свою одежду!",
    },
  ],
  exercises: [
    {
      en: "Bring the stick!",
      ru: "Принеси палку!",
      answer: "{{Word:ba3}} {{word:gun4zi}} {{word:na2}}-{{word:lai2}}!",
      hanzi: "把棍子拿来！",
    },
  ],
  faq: [
    // lái or qù? (toward the speaker or away from the speaker)
    {
      question: {
        en: "How do I know whether to say {{word:lai2}} or {{word:qu4}}?",
        ru: "Как понять, говорить {{word:lai2}} или {{word:qu4}}?",
      },
      en: "Think about where the speaker is. Toward the speaker is {{word:lai2}}, away is {{word:qu4}}. Someone outside calls {{Word:chu1}}-{{word:lai2}}! (Come out!). Someone inside says {{Word:chu1}}-{{word:qu4}}! (Go out!).",
      ru: "Подумайте, где говорящий. К говорящему — {{word:lai2}}, от него — {{word:qu4}}. Тот, кто снаружи, зовёт: {{Word:chu1}}-{{word:lai2}}! (Выходи сюда!). Тот, кто внутри, говорит: {{Word:chu1}}-{{word:qu4}}! (Выйди отсюда!).",
    },
  ],
});
