// English text for lesson-18, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Changing the Role of a Word"] },
  summary: {
    en: [
      "One word can do more than one job.",
      "In this lesson, you'll be able to say \"food\" ({{word:chi1}}-{{word:de}}), \"the one who writes\", and \"speak well\".",
    ],
  },
  vocabCi: { en: ["word"] },
  vocabFangfa: { en: ["way, method"] },
  vocabBizi: { en: ["nose"] },
  vocabPifu: { en: ["skin, bark, peel"] },
  example1: { en: ["Your work is very good."] },
  example4: {
    en: ["The scholars read the document / look at the paper."],
  },
  example1L05: { en: ["I know a simple language / good speech."] },
  example2L05: { en: ["That man is a messenger / speaking person."] },
  example4L05: { en: ["The community's book is reliable."] },
  example6L05: { en: ["A person of knowledge listens."] },
  example7L05: { en: ["The school / house of knowledge has books."] },
};

export default en;
