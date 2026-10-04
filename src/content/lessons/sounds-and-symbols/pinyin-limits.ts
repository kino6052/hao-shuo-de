// Pinyin alone doesn't capture pronunciation fully -- take the pronunciation
// course. [from old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "pinyin-limits",
  prose: {
    en: [
      "Even though pinyin attempts to capture how the words sound it is still not detailed enough to capture the details of the pronunciation, so it is important to learn exactly how each syllable is pronounced.",
      "For this we have a dedicated rigorous pronunciation course that aims to train you in detailed understanding of the basic pronunciation.",
      "Being able to understand the sounds of Chinese is the **MOST** fundamental and important skill in Chinese on which everything else will depend.",
      "So don't overlook this.",
      "Here is the [LINK]",
    ],
    ru: [
      "Пиньинь старается передать, как звучат слова, но он недостаточно подробен, чтобы показать все тонкости произношения. Поэтому важно выучить, как именно произносится каждый слог.",
      "Для этого у нас есть отдельный подробный курс произношения, который научит вас хорошо понимать основы китайских звуков.",
      "Умение понимать звуки китайского языка — **САМЫЙ** главный и важный навык, от которого зависит всё остальное.",
      "Так что не пропускайте его.",
      "Вот ссылка: [LINK]",
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
