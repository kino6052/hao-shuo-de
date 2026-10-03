// Russian text for linking-sentences, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Связи 2 — Как связать предложения"] },
  summary: {
    ru: [
      "Мы часто соединяем две мысли: одно происходит из-за другого или только если верно что-то ещё.",
      "В этом уроке вы научитесь говорить «Так как мне холодно, я не пойду.», «Выглядит хорошо, но невкусно.» и «Если ты придёшь, я тебя подожду.»",
    ],
  },
  vocabYinwei: { ru: ["потому что, так как"] },
  vocabSi: { ru: ["умирать; мёртвый"] },
  vocabHuo: { ru: ["жить; живой"] },
  proseBecause: {
    ru: [
      "**Чтобы сказать почему**, поставьте {{word:yin1wei4}} (потому что) перед причиной.",
      "",
      "**{{word:yin1wei4}} + причина, результат**",
      "",
      "Причина может стоять и второй: {{Word:wo3}} {{word:bu4}} {{word:chi1}}, {{word:yin1wei4}} {{word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ],
    tldr: {
      ru: [
        "{{word:yin1wei4}} + причина: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете объяснять причины."] },
  },
  exampleBecause1: { ru: ["Так как мне холодно, я не пойду на улицу."] },
  exampleBecause5: { ru: ["Так как было жарко, у меня покраснела кожа."] },
  exampleBecause7: { ru: ["Так как есть воздух, мы можем жить."] },
  exampleBecause8: { ru: ["Так как было жарко, я выключил огонь."] },
  exampleBecause9: { ru: ["На улице холодно, поэтому я не выхожу."] },
  exampleBecause10: { ru: ["Путь далёкий, поэтому мы не пойдём."] },
  exampleBecause11: { ru: ["Дома беспорядок, поэтому мы идём гулять."] },
  exampleBecause12: { ru: ["У него болит нога, поэтому он не может встать."] },
  vocabDanshi: { ru: ["но"] },
  proseBut: {
    ru: [
      "**Чтобы сказать «но»**, поставьте {{word:dan4shi4}} в начало второй части.",
      "",
      "**предложение, {{word:dan4shi4}} + предложение**",
    ],
    tldr: {
      ru: [
        "{{word:dan4shi4}} значит «но»: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}.",
      ],
    },
    necessity: {
      ru: [
        "Теперь вы можете сказать две вещи, которые тянут в разные стороны.",
      ],
    },
  },
  exampleBut1: { ru: ["Выглядит хорошо, но невкусно."] },
  exampleBut2: { ru: ["Я хочу пойти, но у меня нет денег."] },
  exampleBut3: { ru: ["Он маленький, но очень сильный."] },
  exampleBut4: { ru: ["Вкусно, но очень горячо."] },
  exampleBut5: { ru: ["Этот фрукт жёлтый, но не сладкий."] },
  exampleBut6: { ru: ["Этот способ странный, но хороший."] },
  exampleBut7: { ru: ["У меня девять, а у него двадцать."] },
  exampleBut10: { ru: ["Он старый, но быстрый."] },
  vocabRuguo: { ru: ["если"] },
  proseIf: {
    ru: [
      "**Чтобы сказать «если»**, поставьте {{word:ru2guo3}} (если) в начало части с условием, а потом запятую.",
      "",
      "**{{word:ru2guo3}} X, остальное**",
      "",
      "Можно и не говорить {{word:ru2guo3}}, а просто поставить условие первым: {{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:hui4}} {{word:si3}}.",
      "{{word:huo2}} (жить) — противоположность {{word:si3}} (умирать): {{Word:ru2guo3}} {{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:neng2}} {{word:huo2}}.",
    ],
    tldr: {
      ru: [
        "{{word:ru2guo3}} X значит «если X»: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о том, что может случиться."] },
  },
  exampleIf1: { ru: ["Если ты придёшь, я тебя подожду."] },
  exampleIf2: { ru: ["Если тебе холодно, я дам тебе одежду."] },
  exampleIf3: { ru: ["Если у растения нет воды, оно погибнет."] },
  exampleIf5: { ru: ["Если номера пять нет, мы ждём."] },
  exampleIf6: { ru: ["Если ты не знаешь этого слова, спроси меня."] },
  exampleIf7: { ru: ["Если хочешь, ешь рис или фрукты."] },
  exampleIf9: { ru: ["Если то место далеко, я не пойду."] },
  exampleIf10: { ru: ["Если ты вернёшься, мы будем есть рис."] },
  vocabJiu: { ru: ["то, тогда; сразу; именно, только"] },
  proseThen: {
    ru: [
      "**Чтобы сказать «то» или «сразу»**, поставьте {{word:jiu4}} прямо перед глаголом, после того, кто делает.",
      "",
      "**({{word:ru2guo3}} X,) кто + {{word:jiu4}} + глагол**",
      "",
      "После {{word:ru2guo3}} {{word:jiu4}} значит «то», как в русском «если…, то…»: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. Само по себе оно значит «сразу» или «именно, только»: {{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}.",
    ],
    tldr: {
      ru: [
        "{{word:jiu4}} перед глаголом значит «то» или «сразу»: {{Word:wo3}} {{word:jiu4}} {{word:qu4}} — я сразу иду.",
      ],
    },
    necessity: { ru: ["Так ваши предложения звучат естественнее."] },
  },
  exampleThen1: { ru: ["Если ты придёшь, то я тебя подожду."] },
  exampleThen2: { ru: ["Если далеко, то я не пойду."] },
  exampleThen3: { ru: ["Как только поем, сразу пойду."] },
  exampleThen4: { ru: ["Я иду прямо сейчас."] },
  exampleThen5: { ru: ["Вот именно это!"] },
  exampleThen6: { ru: ["У меня только один."] },
  exampleThen7: { ru: ["Если нет воды, то растение погибнет."] },
  exampleThen8: { ru: ["Если есть вода, то растение может жить."] },
  infoLinkingSentences: {
    title: { ru: ["Как связать предложения"] },
    items: [
      {
        ru: [
          "{{word:yin1wei4}} + причина, результат: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}. (Так как мне холодно, я не пойду.)",
        ],
      },
      {
        ru: [
          "…, {{word:dan4shi4}} … — но: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}. (Выглядит хорошо, но невкусно.)",
        ],
      },
      {
        ru: [
          "{{word:ru2guo3}} X, … — если: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}. (Если ты придёшь, я тебя подожду.)",
        ],
      },
      {
        ru: [
          "кто + {{word:jiu4}} + глагол — то / сразу: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. (Если ты придёшь, то я тебя подожду.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Так как мне холодно, я хочу одежду."] },
  exercise2: { ru: ["Я хочу есть, но у меня нет денег."] },
  exercise3: { ru: ["Если хочешь, я тебе дам."] },
  exercise4: { ru: ["Растение погибло."] },
  exercise5: { ru: ["Фрукт маленький, но вкусный."] },
  exercise6: { ru: ["Если тебе холодно, заходи внутрь."] },
  exercise7: { ru: ["Если есть воздух, мы можем жить."] },
  exercise8: { ru: ["Я иду прямо сейчас."] },
  exercise9: { ru: ["Если холодно, то я не выйду."] },
  answer1: {
    ru: [
      "{{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:yao4}} {{word:yi1fu}}.",
    ],
  },
  answer2: {
    ru: [
      "{{Word:wo3}} {{word:yao4}} {{word:chi1}}, {{word:dan4shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:ru2guo3}} {{word:ni3}} {{word:yao4}}, {{word:wo3}} {{word:gei3}} {{word:ni3}}.",
    ],
  },
  answer4: { ru: ["{{Word:zhi2wu4}} {{word:si3}} {{word:le}}."] },
  answer5: { ru: ["{{Word:shui3guo3}} {{word:hen3}} {{word:xiao3}}, {{word:dan4shi4}} {{word:wei4dao4}} {{word:hen3}} {{word:hao3}}."] },
  answer6: {
    ru: [
      "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:lai2}} {{word:li3}}-{{word:mian4}}.",
    ],
  },
  answer7: {
    ru: [
      "{{Word:ru2guo3}} {{word:you3}} {{word:kong1qi4}}, {{word:wo3}}-{{word:men}} {{word:neng2}} {{word:huo2}}.",
    ],
  },
  answer8: { ru: ["{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}."] },
  answer9: { ru: ["{{Word:ru2guo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:jiu4}} {{word:bu4}} {{word:chu1}}-{{word:qu4}}."] },
  faqSo: {
    question: { ru: ["Нужно ли слово «поэтому» после {{word:yin1wei4}}?"] },
    ru: [
      "В полном китайском его часто ставят перед результатом. Hǎo-shuō-de его опускает — хватает запятой: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
    ],
  },
  faqIfWord: {
    question: { ru: ["Где ставить {{word:ru2guo3}}?"] },
    ru: [
      "В начало части с условием, до или после того, кто делает: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, … или {{Word:ni3}} {{word:ru2guo3}} {{word:lai2}}, … Оба варианта правильные.",
    ],
  },
  faqJiu: {
    question: { ru: ["Нужно ли {{word:jiu4}} после {{word:ru2guo3}}?"] },
    ru: [
      "Нет, но с ним звучит естественнее: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. {{word:jiu4}} ставится после того, кто делает, и никогда — перед ним.",
    ],
  },
};

export default ru;
