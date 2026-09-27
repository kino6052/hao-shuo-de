// English text for lesson-15, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Spatial Nouns"] },
  summary: {
    en: [
      "Spatial words like `{{word:li3}}`, `{{word:hou4}}`, and `{{word:shang4}}` are ordinary nouns naming a location, static position uses the coverb `{{word:zai4}}`, movement toward a destination uses `dào`, and `{{word:zai4}}-{{word:qu4}}-dào` marks movement currently in progress.",
    ],
  },

  vocabLimian: { en: ["inside, between, internal organ"] },
  vocabHoumian: { en: ["area behind, back"] },
  vocabXiamian: { en: ["area below, under, lower part, leg"] },
  vocabPangbian: { en: ["side, area beside, vicinity"] },
  vocabShangmian: { en: ["area above, highest part, sky"] },
  vocabQianmian: { en: ["area in front, face, chest"] },
  vocabDao: { en: ["to go to, arrive at, move towards"] },
  vocabQu: { en: ["to walk, move, travel"] },

  proseZaiVsDao: {
    en: [
      'Hao-shuo-de treats spatial concepts as ordinary noun destinations rather than abstract markers -- `{{word:shang4}}` ("above, sky"), `{{word:xia4}}` ("below"), and the rest are all just nouns that happen to name a location.',
      "To place something at a fixed location, use the coverb `{{word:zai4}}` (from Lesson 7) in front of it.",
      "To describe movement toward a destination instead, use `dào` in that same slot.",
    ],
    tldr: {
      en: [
        "`{{word:zai4}}` marks a static location; `dào` marks movement toward a destination -- both sit in the same coverb slot.",
      ],
    },
    necessity: {
      en: [
        'Extends Lesson 7\'s coverb pattern to space specifically, and distinguishes "being somewhere" from "heading somewhere".',
      ],
    },
  },
  infoSpatialLocation: {
    title: { en: ["Spatial Location"] },
    items: [
      {
        en: [
          "Subject + `{{word:zai4}}` / `dào` + Target Object + Spatial Noun -- the same coverb slot from Lesson 7, filled with either the static or the directional root.",
        ],
      },
      {
        en: [
          "To mark movement currently in progress toward a destination, combine the progressive marker `{{word:zai4}}-` with the kinetic verb `{{word:qu4}}` and the destination marker `dào` into the compound `{{word:zai4}}-{{word:qu4}}-dào`.",
        ],
      },
      {
        en: [
          "A spatial noun standing alone, with no target object modifying it, functions as an ordinary baseline noun.",
        ],
      },
    ],
  },

  example1: { en: ["I am at your side."] },
  example2: { en: ["The foundation / lower part of the place is strong."] },
  example3: { en: ["A large machine is moving in progress toward the sky."] },
  example4: { en: ["The document / word-thing is under the animal."] },
  example5: { en: ["I see a dark lady in front of the place."] },
  example6: { en: ["Color-things are next to the darkness."] },

  exercise1: { en: ["Water is coming from the sky."] },
  exercise2: { en: ["Protect your back."] },
  exercise3: { en: ["What did you put the red clock next to?"] },

  answer1: {
    en: [
      "{{Word:shui3}} {{word:cong2}} {{word:shang4}}-{{word:de}} {{word:di4fang1}} {{word:lai2}}.",
    ],
  },
  answer2: {
    en: [
      "{{Word:ba3}} {{word:ni3}}-{{word:de}} {{word:hou4}} {{word:bian4}} {{word:hao3}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:ni3}} {{word:ba3}} {{word:hong2se4}}-{{word:de}} {{word:shi2jian1}} {{word:gong1ju4}} dào {{word:shen2me}} {{word:dong1xi}}-{{word:de}} {{word:pang2bian1}}?",
    ],
  },
};

export default en;
