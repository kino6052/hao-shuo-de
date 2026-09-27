// Russian text for lesson-12, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `ru` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  vocabZhen: { ru: [] },
  vocabRe: { ru: [] },
  vocabLeng: { ru: [] },
  vocabTian: { ru: [] },
  vocabQiguai: { ru: [] },
  vocabXin: { ru: [] },
  vocabShenti: { ru: [] },
  proseAdjectivesAsAdverbs: { ru: [] },
  infoAdjectivesAsAdverbs: { items: [{ ru: [] }] },
  example5: { ru: [] },
  example8: { ru: [] },
  exercise3: { ru: [] },
  answer3: { ru: [] },
};

export default ru;
