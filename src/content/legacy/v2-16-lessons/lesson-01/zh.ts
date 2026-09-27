// Chinese text for lesson-01, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. Not translated yet -- every `zh` is the
// empty-array placeholder.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const zh: PartialByKey<LessonShape> = {
  title: { zh: [] },
  summary: { zh: [] },
  proseSyllableUnit: { zh: [] },
  infoReadBySyllable: { items: [{zh:[],items:[{zh:[]}]}] },
  prosePinyinLimits: { zh: [] },
  proseTonesHeading: { zh: [] },
  infoToneExample: { items: [{zh:[]},{zh:[]},{zh:[]},{zh:[]}] },
  proseFourTonesIntro: { zh: [] },
  infoFiveTones: { items: [{zh:[]},{zh:[]},{zh:[]},{zh:[]},{zh:[]}] },
  proseNeutralTone: { zh: [] },
  proseNoWordBoundaries: { zh: [] },
  infoPunctuationHelpers: { items: [{zh:[]},{zh:[],items:[{zh:[]},{zh:[]},{zh:[]},{zh:[]}]},{zh:[],items:[{zh:[]},{zh:[]},{zh:[]}]}] },
  exercise1: { zh: [] },
  exercise2: { zh: [] },
  exercise3: { zh: [] },
  exercise4: { zh: [] },
  answer1: { zh: [] },
  answer2: { zh: [] },
  answer3: { zh: [] },
  answer4: { zh: [] },
};

export default zh;
