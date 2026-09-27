// Russian text for lesson-01, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. Not translated yet -- every `ru` is the
// empty-array placeholder.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  proseSyllableUnit: { ru: [] },
  infoReadBySyllable: { items: [{ru:[],items:[{ru:[]}]}] },
  prosePinyinLimits: { ru: [] },
  proseTonesHeading: { ru: [] },
  infoToneExample: { items: [{ru:[]},{ru:[]},{ru:[]},{ru:[]}] },
  proseFourTonesIntro: { ru: [] },
  infoFiveTones: { items: [{ru:[]},{ru:[]},{ru:[]},{ru:[]},{ru:[]}] },
  proseNeutralTone: { ru: [] },
  proseNoWordBoundaries: { ru: [] },
  infoPunctuationHelpers: { items: [{ru:[]},{ru:[],items:[{ru:[]},{ru:[]},{ru:[]},{ru:[]}]},{ru:[],items:[{ru:[]},{ru:[]},{ru:[]}]}] },
  exercise1: { ru: [] },
  exercise2: { ru: [] },
  exercise3: { ru: [] },
  exercise4: { ru: [] },
  answer1: { ru: [] },
  answer2: { ru: [] },
  answer3: { ru: [] },
  answer4: { ru: [] },
};

export default ru;
