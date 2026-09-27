// Russian text for lesson-09, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `ru` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  vocabWan: { ru: [] },
  vocabKaishi: { ru: [] },
  vocabHou: { ru: [] },
  vocabQianmian: { ru: [] },
  vocabWanr: { ru: [] },
  vocabLiu: { ru: [] },
  proseDeShijian: { ru: [] },
  example3: { ru: [] },
  completionMarkers: { ru: [] },
  infoCompletionMarkers: { items: [{ ru: [] }, { ru: [] }, { ru: [] }] },
  exampleCompletionMarker1: { ru: [] },
  exampleCompletionMarker2: { ru: [] },
  exampleCompletionMarker3: { ru: [] },
  example2L09: { ru: [] },
  example6L09: { ru: [] },
  exercise2: { ru: [] },
  answer2: { ru: [] },
};

export default ru;
