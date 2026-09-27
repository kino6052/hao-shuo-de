// English text for lesson-10, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Space 1 — Where it is"] },
  summary: {
    en: [
      "We often need to say where things are.",
      "In this lesson, you'll be able to say \"The box is on the table.\", \"inside the house\", and \"Where is it?\"",
    ],
  },
  vocabLi: { en: ["inside, between, internal organ"] },
  vocabShang: { en: ["area above, highest part, sky"] },
  vocabXia: { en: ["area below, under, lower part, leg"] },
  vocabPang: { en: ["beside"] },
  vocabBian: { en: ["side"] },
  vocabPangbian: { en: ["side, area beside, vicinity"] },
  vocabMian: { en: ["side, face (as in lǐ-miàn, shàng-miàn)"] },
  vocabNali: { en: ["where"] },
  vocabTai: { en: ["table top, floor"] },
  proseZaiVsDao: {
    en: [
      'Hao-shuo-de treats spatial concepts as ordinary noun destinations rather than abstract markers -- `{{word:shang4}}` ("above, sky"), `{{word:xia4}}` ("below"), and the rest are all just nouns that happen to name a location.',
      "To place something at a fixed location, use the coverb `{{word:zai4}}` (from Lesson 8) in front of it.",
      "To describe movement toward a destination instead, use `dào` in that same slot.",
    ],
    tldr: {
      en: [
        "To say where something is, use {{word:zai4}} and a place word.",
      ],
    },
    necessity: { en: ["Now you can say where things are."] },
  },
  infoSpatialLocation: {
    title: { en: ["Spatial Location"] },
    items: [
      {
        en: [
          "Subject + `{{word:zai4}}` / `dào` + Target Object + Spatial Noun -- the same coverb slot from Lesson 8, filled with either the static or the directional root.",
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
  example2: {
    en: ["The foundation / lower part of the place is strong."],
  },
  example4: { en: ["The document / word-thing is under the animal."] },
  example5: { en: ["I see a dark lady in front of the place."] },
  example6: { en: ["Color-things are next to the darkness."] },
  proseWordAsPredicate: {
    en: [
      "If a clause has no separate action verb, this kind of word doesn't leave an empty slot behind -- it simply steps up and serves as the main predicate by itself.",
      '`{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` ("I am in the house") has no other verb at all; `{{word:zai4}}` alone is doing the whole job of the sentence.',
    ],
    tldr: {
      en: [
        "{{word:zai4}} can be the only verb: {{word:wo3}} {{word:zai4}} {{word:jia1}} means \"I'm at home\".",
      ],
    },
    necessity: {
      en: ["You don't need another verb to say where you are."],
    },
  },
  example2L07: { en: ["I give a swimming animal to her in the house."] },
  example3L07: { en: ["I am in the house."] },
  exercise2: { en: ["Protect your back."] },
  answer2: {
    en: [
      "{{Word:ba3}} {{word:ni3}}-{{word:de}} {{word:hou4}} {{word:bian4}} {{word:hao3}}.",
    ],
  },
};

export default en;
