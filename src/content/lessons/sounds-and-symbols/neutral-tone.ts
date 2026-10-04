// All syllables are toned except the neutral tone, which is unstressed. [from
// old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "neutral-tone",
  prose: {
    en: [
      "All of Chinese is read in tones, syllable by syllable.",
      "The one exception is the neutral tone.",
      "When it appears in a word, the syllable before it gets the stress, and the neutral tone itself is just a short, unstressed sound.",
      "The word Hǎo-shuō-de isn't three equal beats.",
      "It's pronounced hao-shuò-de — the final syllable \"de\" fades out.",
      "Without the neutral tone, spoken Chinese wouldn't sound spoken.",
      "In fact the literary Chinese is often spoken like that - it has its charm but it is very unnatural for daily speaking.",
      "It's the neutral tone that keeps the rhythm from falling apart.",
    ],
    ru: [
      "Весь китайский язык читается тонами, слог за слогом.",
      "Единственное исключение — нейтральный тон.",
      "Когда он встречается в слове, ударение падает на слог перед ним, а сам нейтральный тон звучит коротко и без ударения.",
      "Слово Hǎo-shuō-de — это не три одинаковых удара.",
      "Оно произносится как hao-shuò-de: последний слог «de» затихает.",
      "Без нейтрального тона китайская речь не звучала бы как живая.",
      "Кстати, литературный китайский часто так и читают — в этом есть своё очарование, но для повседневной речи это очень неестественно.",
      "Именно нейтральный тон держит ритм речи.",
    ],
    tldr: { en: "The light tone is short and quiet.", ru: "Лёгкий тон короткий и тихий." },
    necessity: {
      en: "It tells you which syllable to say louder.",
      ru: "Он подсказывает, какой слог сказать громче.",
    },
  },
  info: {
    kind: "note",
    en: "A neutral-tone syllable is short and unstressed: Hǎo-shuō-de is said hao-shuò-de, and the last de fades out.",
    ru: "Слог в нейтральном тоне короткий и безударный: Hǎo-shuō-de звучит как hao-shuò-de, последнее de почти не слышно.",
  },
  exercises: [
    {
      en: "Which syllable of Hǎo-shuō-de is in the neutral tone?",
      ru: "Какой слог в Hǎo-shuō-de произносится нейтральным тоном?",
      answer: { en: "de: it's short and unstressed.", ru: "de: он короткий и безударный." },
    },
  ],
});
