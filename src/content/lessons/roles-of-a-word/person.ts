// To name the one who does something, put -de rén after the verb. Pattern:
// verb-de rén
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "person",
  prose: {
    en: [
      "**To name the one who does something**, put -{{word:de}} {{word:ren2}} after the verb.",
      "",
      "**verb-{{word:de}} {{word:ren2}}**",
    ],
    ru: [
      "**Чтобы назвать того, кто что-то делает**, поставьте -{{word:de}} {{word:ren2}} после глагола.",
      "",
      "**глагол-{{word:de}} {{word:ren2}}**",
    ],
    tldr: {
      en: "verb-{{word:de}} {{word:ren2}} is the one who does it: {{word:xie3}}-{{word:de}} {{word:ren2}}, the one who writes.",
      ru: "глагол-{{word:de}} {{word:ren2}} — тот, кто это делает: {{word:xie3}}-{{word:de}} {{word:ren2}} — тот, кто пишет.",
    },
    necessity: {
      en: "Now you can name people by what they do.",
      ru: "Теперь вы можете называть людей по тому, что они делают.",
    },
  },
  info: {
    en: "verb-{{word:de}} {{word:ren2}}, the one who: {{word:xie3}}-{{word:de}} {{word:ren2}} (the one who writes)",
    ru: "глагол-{{word:de}} {{word:ren2}} — тот, кто: {{word:xie3}}-{{word:de}} {{word:ren2}} (тот, кто пишет)",
  },
  examples: [
    {
      pinyin: "{{Word:xie3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "写的人。",
      en: "The one who writes.",
      ru: "Тот, кто пишет.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:shuo1}}-{{word:de}} {{word:ren2}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}}.",
      hanzi: "那个说的人是我的爸爸妈妈。",
      en: "The one speaking is my parent.",
      ru: "Тот, кто говорит, — мой родитель.",
    },
    {
      pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "知道的人不说。",
      en: "The one who knows doesn't talk.",
      ru: "Кто знает, тот не говорит.",
    },
  ],
  exercises: [
    {
      en: "the one who speaks",
      ru: "тот, кто говорит",
      answer: "{{Word:shuo1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "说的人。",
    },
  ],
});
