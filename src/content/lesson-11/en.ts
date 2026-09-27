// English text for lesson-11, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Space 2 — Moving"] },
  summary: {
    en: [
      "We often talk about coming and going.",
      "In this lesson, you'll be able to say \"I come from the market.\", \"Go!\", \"stand up\", and \"go out the door\".",
    ],
  },
  vocabCong: { en: ["from"] },
  vocabLai: { en: ["to come, arrive"] },
  vocabQu: { en: ["to walk, move, travel"] },
  vocabQi: { en: ["to rise, get up; begin"] },
  vocabWai: { en: ["out, outside"] },
  vocabShichang: { en: ["market"] },
  vocabKou: { en: ["opening, door"] },
  vocabDao: { en: ["arrive, to"] },
  proseDirectionalComplements: {
    en: [
      'The same hyphen trick works one more way: gluing a direction word onto a verb (often together with `{{word:lai2}}`, "to come") to add a sense of direction or progress to the action.',
      "`{{word:qi3}}-{{word:lai2}}` (\"rise-come\") marks something starting. Glued onto another verb by itself, `{{word:qi3}}` marks a beginning too: `{{word:shuo1}}-{{word:qi3}}` doesn't just mean \"talk\" -- it means \"bring something up\", the moment a topic starts getting mentioned.",
      '`{{word:xia4}}-{{word:lai2}}` ("down-come") marks something settling into place, or carrying on steadily.',
      '`{{word:shang4}}-{{word:lai2}}` ("up-come") marks something arriving toward you, or finally succeeding at reaching a point.',
    ],
    tldr: {
      en: [
        "Join {{word:qi3}}, {{word:xia4}}, or {{word:shang4}} to a verb to show which way it goes.",
      ],
    },
    necessity: { en: ['Now you can say "stand up" or "come down".'] },
  },
  infoDirectionalComplements: {
    title: { en: ["Adding a Sense of Direction"] },
    items: [
      {
        en: [
          '`{{word:qi3}}-{{word:lai2}}` -- marks something starting (e.g. `{{word:shuo1}}-{{word:qi3}}`, "bring up/mention")',
        ],
      },
      {
        en: [
          "`{{word:xia4}}-{{word:lai2}}` -- marks something settling into place or continuing steadily",
        ],
      },
      {
        en: [
          "`{{word:shang4}}-{{word:lai2}}` -- marks something arriving toward you, or finally getting there",
        ],
      },
    ],
  },
  directionalExample1: {
    en: [
      "He/She brings up Hao-shuo-de. / He/She mentions Hao-shuo-de.",
    ],
  },
  directionalExample2: { en: ["I've settled down."] },
  directionalExample3: { en: ["He/She has come up (arrived)."] },
  example3L15: {
    en: [
      "A large machine is moving in progress toward the sky.",
    ],
  },
  example4L07: { en: ["I am moving towards you / going to your side."] },
  example5L07: { en: ["My parent is going to the sea / big water."] },
  exercise4: { en: ["She mentions the community."] },
  exercise1L15: { en: ["Water is coming from the sky."] },
  exercise3L15: { en: ["What did you put the red clock next to?"] },
  answer4: {
    en: [
      "{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} {{word:qun2}}.",
    ],
  },
  answer1L15: {
    en: [
      "{{Word:shui3}} {{word:cong2}} {{word:shang4}}-{{word:de}} {{word:di4fang1}} {{word:lai2}}.",
    ],
  },
  answer3L15: {
    en: [
      "{{Word:ni3}} {{word:ba3}} {{word:hong2se4}}-{{word:de}} {{word:shi2jian1}} {{word:gong1ju4}} dào {{word:shen2me}} {{word:dong1xi}}-{{word:de}} {{word:pang2bian1}}?",
    ],
  },
};

export default en;
