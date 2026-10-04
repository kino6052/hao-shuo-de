// pointing ("Pointing at People and Things"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): pointers (pronouns), the measure word
// gè with zhè-ge / nà-ge, men for more than one person, and body words.
// Word cards sit next to the points that use them.
import { lesson } from "../../../lib/lesson.ts";
import pointersAreNouns from "./pointers-are-nouns.ts";
import mandarinMeasureWords from "./mandarin-measure-words.ts";
import geIsUniversal from "./ge-is-universal.ts";
import pointingToPeople from "./pointing-to-people.ts";
import pluralPointers from "./plural-pointers.ts";
import possessionDe from "./possession-de.ts";

export const meta = {
  id: "pointing",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Pointing at People and Things", ru: "Указываем на людей и вещи" },
  summary: {
    en: [
      "We often point at things and people instead of naming them.",
      "In this lesson, you'll be able to say \"this one\", \"that one\", \"I am a person.\", \"we\", \"my hand\", and \"your family\".",
    ],
    ru: [
      "Часто мы не называем вещи и людей, а просто указываем на них.",
      "В этом уроке вы научитесь говорить «вот этот», «вон тот», «Я человек.», «мы», «моя рука» и «твоя семья».",
    ],
  },
  modules: [
    pointersAreNouns,
    mandarinMeasureWords,
    geIsUniversal,
    pointingToPeople,
    pluralPointers,
    possessionDe,
  ],
});
