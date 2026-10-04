// roles-of-a-word ("Changing the Role of a Word"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): the jobs of -de: verb-de (the thing), verb-de rén (the one who), verb-de + adjective (how), and naming things with a description.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- roles-of-a-word).
import { lesson } from "../../../lib/lesson.ts";
import thing from "./thing.ts";
import person from "./person.ts";
import how from "./how.ts";
import name from "./name.ts";
import parts from "./parts.ts";

export const meta = {
  id: "roles-of-a-word",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Changing the Role of a Word", ru: "Слово в новой роли" },
  summary: {
    en: [
      "One word can do more than one job.",
      "In this lesson, you'll be able to say \"food\" ({{word:chi1}}-{{word:de}}), \"the one who writes\", and \"speak well\".",
    ],
    ru: [
      "Одно слово может делать больше одной работы.",
      "В этом уроке вы научитесь говорить «еда» ({{word:chi1}}-{{word:de}}), «тот, кто пишет» и «хорошо говорить».",
    ],
  },
  modules: [
    thing,
    person,
    how,
    name,
    parts,
  ],
});
