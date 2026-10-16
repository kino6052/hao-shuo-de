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
  story: "Autumn, orange accent. The girl next door appears for the first time. She points at things and says their names, the student points back and names them too; neither shares a language yet, so pointing does all the work. Cast: the girl, the student, Miao-miao, the bird.",
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
  // Autumn, orange (MASCOT_PLAN.md): the girl appears; this one is near, that one is far.
  images: [
    {
      alt: {
        en: "The girl next door stands beside Miao-miao, one hand on the cat, and points up with her other hand at a small orange bird on a wire far away.",
        ru: "Девочка из соседней квартиры стоит рядом с Miao-miao, одна рука на кошке, а другой рукой показывает вверх на маленькую оранжевую птицу на далёком проводе.",
      },
      pinyin: "{{Word:zhe4}}-ge {{word:dong4}}-{{word:wu4}}. {{Word:na4}}-ge {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这个动物。那个动物。",
      en: "This animal. That animal.",
      ru: "Это животное. То животное.",
    },
  ],
  modules: [
    pointersAreNouns,
    mandarinMeasureWords,
    geIsUniversal,
    pointingToPeople,
    pluralPointers,
    possessionDe,
  ],
});
