// modifying-nouns ("Modifying Nouns"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): NOUN + hěn + adjective, adjective-de + NOUN, many (hěn-duō-de), and few (shǎo).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- modifying-nouns).
import { lesson } from "../../../lib/lesson.ts";
import like from "./like.ts";
import before from "./before.ts";
import many from "./many.ts";
import reading from "./reading.ts";

export const meta = {
  id: "modifying-nouns",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Autumn, orange accent. A bird lands on the windowsill and describes everything at once, far too many words. Miao-miao cuts it down to the few that matter: big, small, enough. Cast: the bird, Miao-miao and the student.",
  title: { en: "Modifying Nouns", ru: "Описание существительных" },
  summary: {
    en: [
      "We often want to say what something is like.",
      "In this lesson, you'll be able to say \"The water is good.\", \"a big place\", \"good parents\", and \"many people\".",
    ],
    ru: [
      "В языке нужно уметь описать вещь.",
      "В этом уроке вы научитесь говорить «Вода хорошая.», «большое место», «хорошие родители» и «много людей».",
    ],
  },
  // Autumn, orange (MASCOT_PLAN.md): a big place, and the two of them small in it; the bird on the wall.
  images: [
    {
      alt: {
        en: "A very large, empty courtyard with a low wall around it. The student and Miao-miao stand tiny in the bottom left corner, looking at the wide space. A small bird sits on the far wall. The student's scarf is orange.",
        ru: "Очень большой пустой двор с низкой стеной вокруг. Студент и Miao-miao стоят крошечными в левом нижнем углу и смотрят на простор. На дальней стене сидит маленькая птица. Шарф студента оранжевый.",
      },
      pinyin: "{{Word:da4}}-{{word:de}} {{word:di4}}-{{word:fang1}}.",
      hanzi: "大的地方。",
      en: "A big place.",
      ru: "Большое место.",
    },
  ],
  modules: [
    like,
    before,
    many,
    reading,
  ],
});
