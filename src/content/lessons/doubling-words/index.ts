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
  modules: [
    verbs,
    describe,
    every,
  ],
});
