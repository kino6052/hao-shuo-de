// English text for lesson-16, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Particles and Other Special Words"] },
  summary: {
    en: [
      "Hao-shuo-de marks a speaker's perspective with `{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` (\"from the perspective of\"), connects multiple subjects with `{{word:he2}}` (\"and\"), and sequences a second action or state on the same subject with `{{word:ye3}}` (\"also\") instead of a conjunction.",
    ],
  },

  vocabXiamian: { en: ["lowly, below, downward"] },
  vocabButong: { en: ["different, altered"] },
  vocabHe: { en: ["and"] },
  vocabLeng: { en: ["cold, cool"] },
  vocabDong: { en: ["door, hole, opening"] },
  vocabKaishi: { en: ["to open, begin"] },
  vocabYiyang: { en: ["same, similar, sibling"] },
  vocabTian: { en: ["sweet, fragrant"] },
  vocabDanshi: { en: ["but, however"] },
  vocabGei: { en: ["to, for, from the perspective of"] },
  vocabYe: { en: ["also"] },
  vocabShangdeAi: { en: ["God (literally \"love from above\")"] },

  proseDuiHeYe: {
    en: [
      "Hao-shuo-de handles subjective perspective the same way it handles everything else -- by reusing an existing construction instead of inventing a particle.",
      "`{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` (\"regarding ... to say,\" i.e. \"from the perspective of\") frames a whole clause as one person's point of view.",
      "To connect multiple subjects within one clause, use `{{word:he2}}` (\"and\").",
      "But when a single subject does or is more than one thing in a row, Hao-shuo-de doesn't reach for a conjunction at all -- it just adds `{{word:ye3}}` (\"also\") in front of the second verb or adjective, the same adverbial slot other single-word adverbs already occupy.",
    ],
    tldr: { en: ["`{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` marks perspective, `{{word:he2}}` connects multiple subjects, and `{{word:ye3}}` sequences a second state onto the same subject."] },
    necessity: { en: ["Distinguishes three constructions that can look similar in translation (\"and\", \"also\", \"from X's view\") but occupy different grammatical slots in Hao-shuo-de."] },
  },
  infoPerspectiveConnection: {
    title: { en: ["Perspective and Connection"] },
    items: [
      { en: ["**Perspective:** `{{word:dui4}} [person] {{word:lai2}} {{word:shuo1}}` frames the whole clause that follows as that person's point of view."] },
      { en: ["**Multiple subjects:** join them with `{{word:he2}}` (\"and\"): `[Subject A] {{word:he2}} [Subject B] ...`."] },
      { en: ["**Multiple actions/states on one subject:** skip the conjunction and place `{{word:ye3}}` (\"also\") directly before the second verb or adjective instead."] },
    ],
  },

  example1: { en: ["I like sweets. / From my perspective, sweet things are good."] },
  example2: { en: ["The universe is beautiful from the perspective of God."] },
  example3: { en: ["The fatherland is small and cold."] },
  example4: { en: ["But men and women are working and are happy."] },
  example5: { en: ["My sister opened the first door and the second door."] },
  example6: { en: ["Only your house is black. / Your house is black, not other houses."] },
};

export default en;
