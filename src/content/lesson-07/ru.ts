// Russian text for lesson-07, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `ru` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  vocabYao: { ru: [] },
  vocabNeng: { ru: [] },
  vocabZhidao: { ru: [] },
  vocabAi: { ru: [] },
  vocabDeng: { ru: [] },
  vocabYifu: { ru: [] },
  proseAuxiliaries: { ru: [] },
  infoAuxiliaryOrder: { title: { ru: [] }, items: [{ ru: [] }] },
  example3: { ru: [] },
  example5: { ru: [] },
  exercise1: { ru: [] },
  exercise3: { ru: [] },
  answer1: { ru: [] },
  answer3: { ru: [] },
};

export default ru;
