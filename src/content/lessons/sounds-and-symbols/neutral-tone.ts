// All syllables have a tone except the light one, which is quiet. [from
// old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "neutral-tone",
  scene: "Acts out 'the light tone': Miao-miao walks across soft ground and leaves two paw prints, the first firm and deep, the second so light it hardly shows; the student tries the same walk behind it. Orange: the light print.",
  prose: {
    en: [
      "**To say a syllable lightly**, use the light tone.",
      "It is short and quiet, and it has no tone mark.",
    ],
    ru: [
      "**Чтобы сказать слог легко**, используйте лёгкий тон.",
      "Он короткий и тихий, и у него нет знака тона.",
    ],
    tldr: { en: "The light tone is short and quiet.", ru: "Лёгкий тон короткий и тихий." },
    necessity: {
      en: "It keeps the rhythm of what you say.",
      ru: "Он держит ритм вашей речи.",
    },
  },
  info: {
    kind: "note",
    en: "A light-tone syllable is short and quiet. The last syllable of Hǎo-shuō-de, de, is light.",
    ru: "Слог в лёгком тоне короткий и тихий. Последний слог в Hǎo-shuō-de, de, лёгкий.",
  },
  exercises: [
    {
      en: "Which syllable of Hǎo-shuō-de has the light tone?",
      ru: "Какой слог в Hǎo-shuō-de произносится лёгким тоном?",
      answer: { en: "de: it is short and quiet.", ru: "de: он короткий и тихий." },
    },
  ],
});
