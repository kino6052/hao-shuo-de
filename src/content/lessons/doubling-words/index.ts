// doubling-words ("Doubling Words"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Added after Phase 2 (BOOK_PLAN.md D43): saying a word twice. A verb twice does it a little
// (kàn-kan), a describing word twice makes it stronger (yuán-yuán-de, hǎo-hǎo), and a few
// nouns and counting words twice mean every (rén-rén, gè-gè). No new words.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- doubling-words).
import { lesson } from "../../../lib/lesson.ts";
import verbs from "./verbs.ts";
import describe from "./describe.ts";
import every from "./every.ts";

export const meta = {
  id: "doubling-words",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Summer, yellow accent. The cat's name is doubled, Miāo-miao, and the girl doubles words too; the student finally learns why people double them. Cast: the student, the girl, Miao-miao.",
  title: { en: "Doubling Words", ru: "Удвоение слов" },
  summary: {
    en: [
      "Chinese often says a word twice to change what it means.",
      "In this lesson, you'll be able to say \"Let me have a look.\", \"The moon is nice and round.\", \"Study hard!\", and \"Everyone needs water.\"",
    ],
    ru: [
      "В китайском часто говорят слово два раза, чтобы изменить его смысл.",
      "В этом уроке вы научитесь говорить «Дай-ка я посмотрю.», «Луна круглая-круглая.» и «Учись хорошенько!»",
    ],
  },
  // Summer, yellow (MASCOT_PLAN.md): "The moon is nice and round."; the three of them look up at a round yellow moon.
  images: [
    {
      alt: {
        en: "A summer night on a grassy hill. The student, the neighbor girl and Miao-miao sit side by side with their backs to us, looking up at a big round yellow moon among a few small stars.",
        ru: "Летняя ночь на травянистом холме. Студент, соседская девочка и Miao-miao сидят рядом спиной к нам и смотрят на большую круглую жёлтую луну среди нескольких маленьких звёзд.",
      },
      pinyin: "{{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
      hanzi: "月圆圆的。",
      en: "The moon is nice and round.",
      ru: "Луна круглая-круглая.",
    },
  ],
  modules: [
    verbs,
    describe,
    every,
  ],
});
