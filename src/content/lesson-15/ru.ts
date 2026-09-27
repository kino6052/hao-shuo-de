// Russian text for lesson-15, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `ru` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  vocabBian: { ru: [] },
  vocabBa: { ru: [] },
  vocabNong: { ru: [] },
  vocabDe: { ru: [] },
  vocabLiliang: { ru: [] },
  vocabHuai: { ru: [] },
  vocabNi: { ru: [] },
  proseChangeOnset: { ru: [] },
  infoChangeVsOnset: { title: { ru: [] }, items: [{ ru: [] }, { ru: [] }] },
  example1: { ru: [] },
  example4: { ru: [] },
  proseBuildingAdjective: { ru: [] },
  infoBuildingAdjective: { items: [{ ru: [] }] },
  proseStateChange: { ru: [] },
  infoStateChange: { items: [{ ru: [] }] },
  infoCausative: { items: [{ ru: [], items: [{ ru: [] }] }] },
  example2L10: { ru: [] },
  example3L10: { ru: [] },
  example6L10: { ru: [] },
  example7L10: { ru: [] },
  exercise2: { ru: [] },
  exercise1L10: { ru: [] },
  exercise2L10: { ru: [] },
  exercise4L10: { ru: [] },
  answer2: { ru: [] },
  answer1L10: { ru: [] },
  answer2L10: { ru: [] },
  answer4L10: { ru: [] },
};

export default ru;
