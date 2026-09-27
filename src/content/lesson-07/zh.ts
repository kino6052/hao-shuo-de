// Chinese text for lesson-07, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `zh` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const zh: PartialByKey<LessonShape> = {
  title: { zh: [] },
  summary: { zh: [] },
  vocabYao: { zh: [] },
  vocabNeng: { zh: [] },
  vocabZhidao: { zh: [] },
  vocabAi: { zh: [] },
  vocabDeng: { zh: [] },
  vocabYifu: { zh: [] },
  proseAuxiliaries: { zh: [] },
  infoAuxiliaryOrder: { title: { zh: [] }, items: [{ zh: [] }] },
  example3: { zh: [] },
  example5: { zh: [] },
  exercise1: { zh: [] },
  exercise3: { zh: [] },
  answer1: { zh: [] },
  answer3: { zh: [] },
};

export default zh;
