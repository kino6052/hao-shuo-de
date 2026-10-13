// Pinyin alone doesn't capture pronunciation fully -- take the pronunciation
// course. [from old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "pinyin-limits",
  prose: {
    en: [
      "**To say a word well**, listen to it.",
      "Pinyin shows the sound only roughly.",
    ],
    ru: [
      "**Чтобы хорошо сказать слово**, послушайте его.",
      "Пиньинь передаёт звучание лишь приблизительно.",
    ],
    tldr: {
      en: "Pinyin can't show every detail of how a word sounds.",
      ru: "Пиньинь не может показать все тонкости звучания слова.",
    },
    necessity: {
      en: "Listen to the audio to learn the real sounds.",
      ru: "Слушайте аудио, чтобы выучить настоящие звуки.",
    },
  },
  info: {
    kind: "note",
    en: "Pinyin shows the sound only roughly: learn how each syllable really sounds.",
    ru: "Пиньинь передаёт звучание лишь приблизительно: учите, как на самом деле звучит каждый слог.",
  },
  exercises: [
    {
      en: "Is pinyin enough to know exactly how a syllable sounds?",
      ru: "Достаточно ли пиньиня, чтобы точно знать, как звучит слог?",
      answer: {
        en: "No. It shows the sound only roughly: learn how each syllable really sounds.",
        ru: "Нет. Он передаёт звучание лишь приблизительно: учите, как на самом деле звучит каждый слог.",
      },
    },
  ],
  faq: [
    // do Chinese people write in pinyin? (no -- characters; pinyin for learning and typing)
    {
      question: { en: "Do Chinese people write in pinyin?", ru: "Китайцы пишут пиньинем?" },
      en: "Not usually. Chinese is written in characters. Pinyin writes the sounds with Latin letters: children learn it at school, and most people use it to type characters on phones and computers.",
      ru: "Обычно нет. Китайский пишут иероглифами. Пиньинь записывает звуки латинскими буквами: дети учат его в школе, и большинство людей набирают им иероглифы на телефоне и компьютере.",
    },
  ],
});
