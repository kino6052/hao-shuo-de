// English text for linking-sentences, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Relationships 2 — Linking sentences"] },
  summary: {
    en: [
      "We often join two ideas: one thing happens because of another, or only if something else is true.",
      "In this lesson, you'll be able to say \"Because I'm cold, I'm not going.\", \"It looks good, but it doesn't taste good.\", and \"If you come, I'll wait for you.\"",
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
  exampleBecause5: { en: ["Because it was hot, my skin turned red."] },
  exampleBecause7: { en: ["Because there's air, we can live."] },
  exampleBecause8: { en: ["Because it was hot, I turned off the fire."] },
  exampleBecause9: { en: ["It's cold out, so I'm not going out."] },
  exampleBecause10: { en: ["It's a long way, so we're not going."] },
  exampleBecause11: { en: ["The house is a mess, so we're going out to play."] },
  exampleBecause12: { en: ["His foot is hurt, so he can't stand up."] },
  vocabDanshi: { en: ["but"] },
  proseBut: {
    en: [
      "**To say but**, put {{word:dan4shi4}} at the start of the second part.",
      "",
      "**sentence, {{word:dan4shi4}} + sentence**",
    ],
    tldr: {
      en: [
        "{{word:dan4shi4}} means but: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}.",
      ],
    },
    necessity: {
      en: [
        "Now you can say two things that pull against each other.",
      ],
    },
  },
  exampleBut1: { en: ["It looks good, but it doesn't taste good."] },
  exampleBut2: { en: ["I want to go, but I have no money."] },
  exampleBut3: { en: ["He's small, but very strong."] },
  exampleBut4: { en: ["It tastes good, but it's very hot."] },
  exampleBut5: { en: ["This fruit is yellow, but it isn't sweet."] },
  exampleBut6: { en: ["This way is strange, but it's good."] },
  exampleBut7: { en: ["I have nine, but he has twenty."] },
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
  exampleIf5: { en: ["If number five isn't here, we wait."] },
  exampleIf6: { en: ["If you don't know this word, ask me."] },
  exampleIf7: { en: ["If you want, eat rice or fruit."] },
  exampleIf9: { en: ["If that place is far, I won't go."] },
  exampleIf10: { en: ["If you come back, we'll eat rice."] },
  vocabJiu: { en: ["then; right away; just"] },
  proseThen: {
    en: [
      "**To say \"then\" or \"right away\"**, put {{word:jiu4}} right before the verb, after the who.",
      "",
      "**({{word:ru2guo3}} X,) who + {{word:jiu4}} + verb**",
      "",
      "After {{word:ru2guo3}}, {{word:jiu4}} means \"then\": {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. On its own, it means \"right away\" or \"just\": {{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}.",
    ],
    tldr: {
      en: [
        "{{word:jiu4}} before the verb means then, or right away: {{Word:wo3}} {{word:jiu4}} {{word:qu4}}, I'm going right away.",
      ],
    },
    necessity: { en: ["Now your sentences sound more natural."] },
  },
  exampleThen1: { en: ["If you come, I'll wait for you."] },
  exampleThen2: { en: ["If it's far, then I won't go."] },
  exampleThen3: { en: ["I'll go as soon as I've eaten."] },
  exampleThen4: { en: ["I'm going right now."] },
  exampleThen5: { en: ["That's the one!"] },
  exampleThen6: { en: ["I only have one."] },
  exampleThen7: { en: ["If there's no water, the plant will die."] },
  exampleThen8: { en: ["If there's water, then the plant can live."] },
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
          "…, {{word:dan4shi4}} …, but: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}. (It looks good, but it doesn't taste good.)",
        ],
      },
      {
        en: [
          "{{word:ru2guo3}} X, …, if: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}. (If you come, I'll wait for you.)",
        ],
      },
      {
        en: [
          "who + {{word:jiu4}} + verb, then / right away: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. (If you come, I'll wait for you.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Because I'm cold, I want clothes."] },
  exercise2: { en: ["I want to eat, but I have no money."] },
  exercise3: { en: ["If you want it, I'll give it to you."] },
  exercise4: { en: ["The plant died."] },
  exercise5: { en: ["The fruit is small, but it tastes good."] },
  exercise6: { en: ["If you're cold, come inside."] },
  exercise7: { en: ["If there's air, we can live."] },
  exercise8: { en: ["I'm going right now."] },
  exercise9: { en: ["If it's cold, then I won't go out."] },
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
  answer5: { en: ["{{Word:shui3guo3}} {{word:hen3}} {{word:xiao3}}, {{word:dan4shi4}} {{word:wei4dao4}} {{word:hen3}} {{word:hao3}}."] },
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
  answer8: { en: ["{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}."] },
  answer9: { en: ["{{Word:ru2guo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:jiu4}} {{word:bu4}} {{word:chu1}}-{{word:qu4}}."] },
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
  faqJiu: {
    question: { en: ["Do I need {{word:jiu4}} after {{word:ru2guo3}}?"] },
    en: [
      "No, but it sounds more natural: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. {{word:jiu4}} goes after the who, never before it.",
    ],
  },
};

export default en;
