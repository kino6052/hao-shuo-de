// Russian text for direction-and-result, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Глаголы 2 — Направление и результат"] },
  summary: {
    ru: [
      "Глагол может сказать больше, чем само действие: куда оно направлено и чем закончилось.",
      "В этом уроке вы научитесь говорить «Входи!», «Он вынул деньги.», «Я нашёл.» и «Мне не видно.»",
    ],
  },
  vocabNa: { ru: ["брать, взять, держать"] },
  proseTowardAway: {
    ru: [
      "**Чтобы сказать, куда направлено действие**, поставьте {{word:lai2}} (к вам) или {{word:qu4}} (от вас) сразу после глагола.",
      "",
      "**глагол-{{word:lai2}} / глагол-{{word:qu4}}**",
      "",
      "{{word:na2}}-{{word:lai2}} — «принести», а {{word:na2}}-{{word:qu4}} — «унести». Вещь ставьте вперёд с {{word:ba3}} (урок {{lesson:becoming-and-making}}): {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}!",
    ],
    tldr: {
      ru: [
        "глагол-{{word:lai2}} — к вам, глагол-{{word:qu4}} — от вас: {{word:na2}}-{{word:lai2}} — «принести».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «принести» и «унести»."] },
  },
  exampleTowardAway1: { ru: ["Возьми вот это."] },
  exampleTowardAway2: { ru: ["Принеси воду!"] },
  exampleTowardAway3: { ru: ["Я принёс фрукты."] },
  exampleTowardAway4: { ru: ["Он унёс коробку."] },
  exampleTowardAway5: { ru: ["Унеси свою одежду!"] },
  vocabJin: { ru: ["входить"] },
  vocabChu: { ru: ["выходить"] },
  vocabHui: { ru: ["возвращаться"] },
  proseInOut: {
    ru: [
      "**Чтобы сказать «внутрь», «наружу» и «обратно»**, используйте {{word:jin4}} (входить), {{word:chu1}} (выходить) и {{word:hui2}} (возвращаться). Добавьте {{word:lai2}} или {{word:qu4}}, чтобы показать направление, как в {{word:shang4}}-{{word:lai2}} (урок {{lesson:moving}}).",
      "",
      "**{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:jin4}}-{{word:lai2}} — «войти сюда», к говорящему. {{word:chu1}}-{{word:qu4}} — «выйти отсюда», от говорящего. Место ставится сразу после: {{word:hui2}} {{word:jia1}} — «пойти домой».",
    ],
    tldr: {
      ru: [
        "{{word:jin4}} — внутрь, {{word:chu1}} — наружу, {{word:hui2}} — обратно. Добавьте {{word:lai2}} или {{word:qu4}}: {{word:jin4}}-{{word:lai2}}!",
      ],
    },
    necessity: { ru: ["Теперь вы можете войти, выйти и пойти домой."] },
  },
  exampleInOut1: { ru: ["Входи!"] },
  exampleInOut2: { ru: ["Не входи туда!"] },
  exampleInOut3: { ru: ["Он вышел."] },
  exampleInOut4: { ru: ["Животное вылезло из коробки."] },
  exampleInOut5: { ru: ["Давай выйдем и поиграем поблизости."] },
  exampleInOut6: { ru: ["Я хочу домой."] },
  exampleInOut7: { ru: ["Мама и папа вернулись."] },
  exampleInOut8: { ru: ["Она уже ушла обратно?"] },
  vocabZuo: { ru: ["сидеть"] },
  vocabZhan: { ru: ["стоять"] },
  vocabTang: { ru: ["лежать"] },
  vocabFei: { ru: ["летать"] },
  proseBody: {
    ru: [
      "**Чтобы сказать «сидеть», «стоять» и «лежать»**, используйте {{word:zuo4}} (сидеть), {{word:zhan4}} (стоять) и {{word:tang3}} (лежать). Чтобы показать движение, добавьте слова направления.",
      "",
      "**{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}}**",
      "",
      "Чтобы сказать где, добавьте {{word:zai4}} и место: {{word:zuo4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} — сидеть на полу. {{word:fei1}} (летать) тоже берёт слова направления: {{word:fei1}}-{{word:shang4}}-{{word:qu4}} — взлететь.",
    ],
    tldr: {
      ru: [
        "{{word:zuo4}}-{{word:xia4}} — сесть, {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} — встать, {{word:tang3}}-{{word:xia4}} — лечь.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сесть, встать и лечь."] },
  },
  exampleBody1: { ru: ["Садись!"] },
  exampleBody2: { ru: ["Я сижу на полу."] },
  exampleBody3: { ru: ["Они все встали."] },
  exampleBody4: { ru: ["Он стоит передо мной."] },
  exampleBody5: { ru: ["Я хочу лечь."] },
  exampleBody6: { ru: ["Животное лежит на земле."] },
  exampleBody7: { ru: ["Животное взлетело."] },
  exampleBody8: { ru: ["Оно прилетело обратно."] },
  proseMoveThing: {
    ru: [
      "**Чтобы сказать, куда вы перемещаете вещь**, поставьте слова направления сразу после глагола: {{word:shang4}}, {{word:xia4}}, {{word:jin4}}, {{word:chu1}}, {{word:hui2}} или {{word:qi3}}, а потом {{word:lai2}} или {{word:qu4}}.",
      "",
      "**Кто + {{word:ba3}} + вещь + глагол-направление-{{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:ba3}} ставит вещь вперёд, поэтому слова направления остаются вместе. {{word:na2}}-{{word:chu1}}-{{word:lai2}} — «вынуть», {{word:na2}}-{{word:qi3}}-{{word:lai2}} — «поднять», а {{word:fang4}}-{{word:xia4}} — «положить, опустить».",
      "В русском эту работу делают приставки: «вы-нуть», «под-нять».",
    ],
    tldr: {
      ru: [
        "Слова направления ставятся после глагола: {{word:na2}}-{{word:chu1}}-{{word:lai2}} — вынуть; {{word:fang4}}-{{word:xia4}} — положить.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «вынуть», «положить внутрь», «поднять» и «опустить»."] },
  },
  exampleMoveThing1: { ru: ["Он вынул деньги."] },
  exampleMoveThing2: { ru: ["Положи одежду внутрь!"] },
  exampleMoveThing3: { ru: ["Я поднимаю фрукт."] },
  exampleMoveThing4: { ru: ["Положи инструмент!"] },
  exampleMoveThing5: { ru: ["Отнеси коробку обратно."] },
  exampleMoveThing6: { ru: ["Он принёс палку наверх."] },
  proseResult: {
    ru: [
      "**Чтобы сказать, чем закончилось действие**, присоедините к глаголу слово-результат. Вы уже знаете {{word:chi1}}-{{word:wan2}} (урок {{lesson:around-an-action}}).",
      "",
      "**глагол-результат**",
      "",
      "{{word:dao4}} говорит, что вы этого достигли: {{word:kan4}}-{{word:dao4}} (увидеть), {{word:ting1}}-{{word:dao4}} (услышать), {{word:zhao3}}-{{word:dao4}} (найти) — как в русском «искать» и «найти». {{word:nong4}}-{{word:hao3}} — «починить», {{word:nong4}}-{{word:huai4}} — «сломать», а {{word:xue2}}-{{word:hui4}} — «учиться, пока не научишься». Чтобы сказать «не сделал», используйте {{word:mei2}} (урок {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
    ],
    tldr: {
      ru: [
        "Присоедините результат к глаголу: {{word:zhao3}}-{{word:dao4}} — найти, {{word:nong4}}-{{word:huai4}} — сломать.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что нашли, починили или сломали."] },
  },
  exampleResult1: { ru: ["Я нашёл свою коробку."] },
  exampleResult2: { ru: ["Я не нашёл."] },
  exampleResult3: { ru: ["Ты его увидел?"] },
  exampleResult4: { ru: ["Он сломал инструмент."] },
  exampleResult5: { ru: ["Я починил инструмент."] },
  exampleResult6: { ru: ["Ты научился?"] },
  proseCanCant: {
    ru: [
      "**Чтобы сказать, получается результат или нет**, поставьте {{word:de}} (получается) или {{word:bu4}} (не получается) между глаголом и результатом.",
      "",
      "**глагол-{{word:de}}-результат / глагол-{{word:bu4}}-результат**",
      "",
      "{{word:kan4}}-{{word:bu4}}-{{word:dao4}} — «не видно», {{word:chi1}}-{{word:bu4}}-{{word:wan2}} — «не могу доесть», {{word:na2}}-{{word:bu4}}-{{word:dong4}} — «не могу поднять». Со словами направления тоже работает: {{word:jin4}}-{{word:bu4}}-{{word:qu4}} — «не могу войти».",
    ],
    tldr: {
      ru: [
        "глагол-{{word:bu4}}-результат — не получается: {{word:kan4}}-{{word:bu4}}-{{word:dao4}} — не видно. глагол-{{word:de}}-результат — получается.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что вам не видно, не слышно или не доесть."] },
  },
  exampleCanCant1: { ru: ["Мне не видно."] },
  exampleCanCant2: { ru: ["Тебе слышно?"] },
  exampleCanCant3: { ru: ["Я не могу найти свою одежду."] },
  exampleCanCant4: { ru: ["Риса много, я не могу всё доесть."] },
  exampleCanCant5: { ru: ["Коробка слишком большая, я не могу её поднять."] },
  exampleCanCant6: { ru: ["Проём маленький, мы не можем войти."] },
  proseSeems: {
    ru: [
      "**Чтобы сказать, каким что-то кажется**, поставьте {{word:qi3}}-{{word:lai2}} после {{word:kan4}} (смотреть), {{word:ting1}} (слушать) или {{word:chi1}} (есть).",
      "",
      "**Вещь + глагол-{{word:qi3}}-{{word:lai2}} + {{word:hen3}} + прилагательное**",
      "",
      "Ещё две работы: после описательного слова {{word:qi3}}-{{word:lai2}} значит, что что-то начинает таким становиться: {{word:leng3}}-{{word:qi3}}-{{word:lai2}}. А глагол-{{word:xia4}}-{{word:qu4}} значит «продолжать»: {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}!",
    ],
    tldr: {
      ru: [
        "{{word:kan4}}-{{word:qi3}}-{{word:lai2}} — «выглядит», {{word:ting1}}-{{word:qi3}}-{{word:lai2}} — «звучит». глагол-{{word:xia4}}-{{word:qu4}} — «продолжать».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, как что-то выглядит, звучит и какое на вкус."] },
  },
  exampleSeems1: { ru: ["Этот фрукт выглядит хорошо."] },
  exampleSeems2: { ru: ["На вкус сладко."] },
  exampleSeems3: { ru: ["Звучит странно."] },
  exampleSeems4: { ru: ["Становится холодно."] },
  exampleSeems5: { ru: ["Продолжай, говори!"] },
  exampleSeems6: { ru: ["Я хочу учиться дальше."] },
  infoDirectionResult: {
    title: { ru: ["Направление и результат"] },
    items: [
      {
        ru: [
          "глагол-{{word:lai2}} / глагол-{{word:qu4}} — к вам / от вас: {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}! (Принеси воду!)",
        ],
      },
      {
        ru: [
          "{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}} — внутрь / наружу / обратно: {{Word:ni3}} {{word:jin4}}-{{word:lai2}}! (Входи!) {{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}. (Я хочу домой.)",
        ],
      },
      {
        ru: [
          "глагол + слова направления: {{Word:ta1}} {{word:ba3}} {{word:jin1}} {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:le}}. (Он вынул деньги.)",
        ],
      },
      {
        ru: [
          "глагол-результат: {{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}. (Я нашёл.)",
        ],
      },
      {
        ru: [
          "глагол-{{word:de}}-результат / глагол-{{word:bu4}}-результат — получается / не получается: {{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}. (Мне не видно.)",
        ],
      },
      {
        ru: [
          "глагол-{{word:qi3}}-{{word:lai2}} — кажется: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}. (Это выглядит хорошо.) глагол-{{word:xia4}}-{{word:qu4}} — продолжать: {{Word:shuo1}}-{{word:xia4}}-{{word:qu4}}! (Говори дальше!)",
        ],
      },
      {
        ru: [
          "{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}} — сесть / встать / лечь: {{Word:ni3}} {{word:zuo4}}-{{word:xia4}}! (Садись!)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Принеси фрукты!"] },
  exercise2: { ru: ["Входи!"] },
  exercise3: { ru: ["Она пошла домой."] },
  exercise4: { ru: ["Мы вышли."] },
  exercise5: { ru: ["Вынь инструмент!"] },
  exercise6: { ru: ["Опусти коробку!"] },
  exercise7: { ru: ["Я нашёл деньги."] },
  exercise8: { ru: ["Он сломал коробку."] },
  exercise9: { ru: ["Мне не слышно."] },
  exercise10: { ru: ["Тебе видно?"] },
  exercise11: { ru: ["Рис вкусный."] },
  exercise12: { ru: ["Пиши дальше!"] },
  exercise13: { ru: ["Садись!"] },
  exercise14: { ru: ["Встань!"] },
  exercise15: { ru: ["Я хочу лечь."] },
  exercise16: { ru: ["Оно вылетело."] },
  answer1: { ru: ["{{Word:ba3}} {{word:shui3guo3}} {{word:na2}}-{{word:lai2}}!"] },
  answer2: { ru: ["{{Word:jin4}}-{{word:lai2}}!"] },
  answer3: { ru: ["{{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:le}}."] },
  answer4: { ru: ["{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:le}}."] },
  answer5: { ru: ["{{Word:ba3}} {{word:gong1ju4}} {{word:na2}}-{{word:chu1}}-{{word:lai2}}!"] },
  answer6: { ru: ["{{Word:ba3}} {{word:he2zi}} {{word:fang4}}-{{word:xia4}}!"] },
  answer7: { ru: ["{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:jin1}} {{word:le}}."] },
  answer8: { ru: ["{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:nong4}}-{{word:huai4}} {{word:le}}."] },
  answer9: { ru: ["{{Word:wo3}} {{word:ting1}}-{{word:bu4}}-{{word:dao4}}."] },
  answer10: { ru: ["{{Word:ni3}} {{word:kan4}}-{{word:de}}-{{word:dao4}} {{word:ma}}?"] },
  answer11: { ru: ["{{Word:mi3fan4}} {{word:chi1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}."] },
  answer12: { ru: ["{{Word:xie3}}-{{word:xia4}}-{{word:qu4}}!"] },
  answer13: { ru: ["{{Word:ni3}} {{word:zuo4}}-{{word:xia4}}!"] },
  answer14: { ru: ["{{Word:zhan4}}-{{word:qi3}}-{{word:lai2}}!"] },
  answer15: { ru: ["{{Word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}."] },
  answer16: { ru: ["{{Word:ta1}} {{word:fei1}}-{{word:chu1}}-{{word:qu4}} {{word:le}}."] },
  faqLaiQu: {
    question: { ru: ["Как понять, говорить {{word:lai2}} или {{word:qu4}}?"] },
    ru: [
      "Подумайте, где говорящий. К говорящему — {{word:lai2}}, от него — {{word:qu4}}. Тот, кто снаружи, зовёт: {{Word:chu1}}-{{word:lai2}}! (Выходи сюда!). Тот, кто внутри, говорит: {{Word:chu1}}-{{word:qu4}}! (Выйди отсюда!).",
    ],
  },
  faqBuNeng: {
    question: { ru: ["{{word:kan4}}-{{word:bu4}}-{{word:dao4}} — то же самое, что {{word:bu4}} {{word:neng2}} {{word:kan4}}?"] },
    ru: [
      "Нет. {{word:bu4}} {{word:neng2}} {{word:kan4}} — «смотреть не получится» или «смотреть нельзя». {{word:kan4}}-{{word:bu4}}-{{word:dao4}} — «смотришь, но не видно»: вы пытаетесь, а результата нет.",
    ],
  },
  faqWithoutBa: {
    question: { ru: ["Где стоит вещь без {{word:ba3}}?"] },
    ru: [
      "Обычно перед {{word:lai2}} или {{word:qu4}}: {{Word:ta1}} {{word:na2}}-{{word:chu1}} {{word:jin1}} {{word:lai2}} {{word:le}} (Он вынул деньги). Место ставится туда же: {{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:qu4}} {{word:le}} (Она вернулась домой). С {{word:ba3}} слова направления остаются вместе, так проще.",
    ],
  },
};

export default ru;
