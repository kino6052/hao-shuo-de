// English text for linking-sentences, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Relationships 2 — Linking sentences"] },
  summary: {
    en: [
      "We often join two ideas: one thing happens because of another, or only if something else is true.",
      "In this lesson, you'll be able to say \"Because I'm cold, I'm not going.\", \"It's good, but there's no salt.\", and \"If you come, I'll wait for you.\"",
    ],
  },
  vocabYinwei: { en: ["because"] },
  vocabSi: { en: ["die; dead"] },
  vocabHuo: { en: ["live; alive"] },
  proseBecause: {
    en: [
      "**To say why**, put {{word:yin1wei4}} (because) before the reason.",
      "",
      "**{{word:yin1wei4}} + reason, result**",
      "",
      "The reason can also come second: {{Word:wo3}} {{word:bu4}} {{word:chi1}}, {{word:yin1wei4}} {{word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ],
    tldr: {
      en: [
        "{{word:yin1wei4}} + reason: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      ],
    },
    necessity: { en: ["Now you can give reasons."] },
  },
  exampleBecause1: { en: ["Because I'm cold, I'm not going outside."] },
  exampleBecause2: { en: ["I'm not eating, because I've finished."] },
  exampleBecause3: { en: ["Because there was no water, the plant died."] },
  exampleBecause4: { en: ["Why aren't you eating? Because it's hot."] },
  exampleBecause5: { en: ["Because it was hot, my skin turned red."] },
  exampleBecause6: {
    en: ["Because he touched the mud, his hands are black."],
  },
  exampleBecause7: { en: ["Because there's air, we can live."] },
  exampleBecause8: { en: ["Because it was hot, I turned off the fire."] },
  exampleBecause9: { en: ["It's cold out, so I'm not going out."] },
  exampleBecause10: { en: ["It's a long way, so we're not going."] },
  exampleBecause11: { en: ["The house is a mess, so we're going out to play."] },
  exampleBecause12: { en: ["His foot is hurt, so he can't stand up."] },
  vocabDanshi: { en: ["but"] },
  vocabYan: { en: ["salt"] },
  proseBut: {
    en: [
      "**To say but**, put {{word:dan4shi4}} at the start of the second part.",
      "",
      "**sentence, {{word:dan4shi4}} + sentence**",
    ],
    tldr: {
      en: [
        "{{word:dan4shi4}} means but: {{Word:zhe4}}-ge {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:mei2}}-{{word:you3}} {{word:yan2}}.",
      ],
    },
    necessity: {
      en: [
        "Now you can say two things that pull against each other.",
      ],
    },
  },
  exampleBut1: { en: ["It's good, but there's no salt."] },
  exampleBut2: { en: ["I want to go, but I have no money."] },
  exampleBut3: { en: ["He's small, but very strong."] },
  exampleBut4: { en: ["There's salt in the rice."] },
  exampleBut5: { en: ["This fruit is yellow, but it isn't sweet."] },
  exampleBut6: { en: ["This way is strange, but it's good."] },
  exampleBut7: { en: ["I have nine, but he has twenty."] },
  exampleBut8: { en: ["The plant is small, but it lived."] },
  exampleBut9: { en: ["This one is good, but a bit big."] },
  exampleBut10: { en: ["He's old, but he's fast."] },
  vocabRuguo: { en: ["if"] },
  proseIf: {
    en: [
      '**To say "if"**, put {{word:ru2guo3}} (if) at the start of the if-part, then a comma.',
      "",
      "**{{word:ru2guo3}} X, the rest**",
      "",
      "You can also leave out {{word:ru2guo3}} and just put the if-part first: {{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:hui4}} {{word:si3}}.",
      "{{word:huo2}} (live) is the opposite of {{word:si3}} (die): {{Word:ru2guo3}} {{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:neng2}} {{word:huo2}}.",
    ],
    tldr: {
      en: [
        "{{word:ru2guo3}} X means if X: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      ],
    },
    necessity: { en: ["Now you can talk about what might happen."] },
  },
  exampleIf1: { en: ["If you come, I'll wait for you."] },
  exampleIf2: { en: ["If you're cold, I'll give you clothes."] },
  exampleIf3: { en: ["If a plant has no water, it will die."] },
  exampleIf4: { en: ["Without water, plants die."] },
  exampleIf5: { en: ["If number five isn't here, we wait."] },
  exampleIf6: { en: ["If you don't know this word, ask me."] },
  exampleIf7: { en: ["If you want, eat rice or fruit."] },
  exampleIf8: { en: ["If there's water, the plant can live."] },
  exampleIf9: { en: ["If that place is far, I won't go."] },
  exampleIf10: { en: ["If you come back, we'll eat rice."] },
  infoLinkingSentences: {
    title: { en: ["Linking Sentences"] },
    items: [
      {
        en: [
          "{{word:yin1wei4}} + reason, result: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}. (Because I'm cold, I'm not going.)",
        ],
      },
      {
        en: [
          "…, {{word:dan4shi4}} …, but: {{Word:zhe4}}-ge {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:mei2}}-{{word:you3}} {{word:yan2}}. (It's good, but there's no salt.)",
        ],
      },
      {
        en: [
          "{{word:ru2guo3}} X, …, if: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}. (If you come, I'll wait for you.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Because I'm cold, I want clothes."] },
  exercise2: { en: ["I want to eat, but I have no money."] },
  exercise3: { en: ["If you want it, I'll give it to you."] },
  exercise4: { en: ["The plant died."] },
  exercise5: { en: ["I want salt."] },
  exercise6: { en: ["If you're cold, come inside."] },
  exercise7: { en: ["If there's air, we can live."] },
  answer1: {
    en: [
      "{{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:yao4}} {{word:yi1fu}}.",
    ],
  },
  answer2: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:chi1}}, {{word:dan4shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:ru2guo3}} {{word:ni3}} {{word:yao4}}, {{word:wo3}} {{word:gei3}} {{word:ni3}}.",
    ],
  },
  answer4: { en: ["{{Word:zhi2wu4}} {{word:si3}} {{word:le}}."] },
  answer5: { en: ["{{Word:wo3}} {{word:yao4}} {{word:yan2}}."] },
  answer6: {
    en: [
      "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:lai2}} {{word:li3}}-{{word:mian4}}.",
    ],
  },
  answer7: {
    en: [
      "{{Word:ru2guo3}} {{word:you3}} {{word:kong1qi4}}, {{word:wo3}}-{{word:men}} {{word:neng2}} {{word:huo2}}.",
    ],
  },
  faqSo: {
    question: { en: ["Do I need a word for \"so\" after {{word:yin1wei4}}?"] },
    en: [
      "Full Mandarin often adds one before the result. Hao-shuo-de leaves it out, and the comma is enough: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
    ],
  },
  faqIfWord: {
    question: { en: ["Where does {{word:ru2guo3}} go?"] },
    en: [
      "At the start of the if-part, before or after the who: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, … or {{Word:ni3}} {{word:ru2guo3}} {{word:lai2}}, … Both are fine.",
    ],
  },
};

export default en;
