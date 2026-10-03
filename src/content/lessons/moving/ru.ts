// Russian text for moving, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Пространство 2 — Движение"] },
  summary: {
    ru: [
      "Мы часто говорим о том, кто приходит и кто уходит.",
      "В этом уроке вы научитесь говорить «Откуда ты?», «Иди!», «Вставай!», «Я пришёл домой.» и «Я иду на улицу.»",
    ],
  },
  vocabLai: { ru: ["приходить"] },
  vocabQu: { ru: ["идти, уходить"] },
  proseComeGo: {
    ru: [
      "**Чтобы сказать, что вы приходите или идёте куда-то**, поставьте {{word:lai2}} (приходить) или {{word:qu4}} (идти) перед местом.",
      "",
      "**Кто + {{word:lai2}} / {{word:qu4}} + место**",
      "",
      "Само по себе это приказ: {{Word:qu4}}! (Иди!)",
    ],
    tldr: {
      ru: [
        "{{word:lai2}} — «приходить», {{word:qu4}} — «идти». Место ставится после них.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, куда идёте."] },
  },
  exampleComeGo1: { ru: ["Я иду домой к родителям."] },
  exampleComeGo2: { ru: ["Ты придёшь ко мне домой?"] },
  exampleComeGo3: { ru: ["Иди!"] },
  exampleComeGo4: { ru: ["Иди сюда!"] },
  exampleComeGo6: { ru: ["После еды мы идём к тебе домой."] },
  exampleComeGo7: { ru: ["Он подходит ко мне."] },
  exampleComeGo9: { ru: ["Подойди на минутку."] },
  exampleComeGo10: { ru: ["Ты опять пришёл!"] },
  vocabCong: { ru: ["из, от"] },
  proseFrom: {
    ru: [
      "**Чтобы сказать, откуда вы пришли**, поставьте {{word:cong2}} (из) перед местом, а потом {{word:lai2}}.",
      "",
      "**Кто + {{word:cong2}} + место + {{word:lai2}}**",
    ],
    tldr: {
      ru: ["Поставьте {{word:cong2}} перед местом, откуда вы пришли."],
    },
    necessity: { ru: ["Теперь вы можете сказать, откуда кто-то пришёл."] },
  },
  exampleFrom1: { ru: ["Я пришёл из дома родителей."] },
  exampleFrom2: { ru: ["Он идёт из дома."] },
  exampleFrom3: { ru: ["Откуда ты?"] },
  exampleFrom4: { ru: ["Он идёт спереди."] },
  vocabDao: { ru: ["прибывать, доходить до"] },
  proseArrive: {
    ru: [
      "**Чтобы сказать, что вы куда-то пришли**, поставьте {{word:dao4}} (прибывать) перед местом.",
      "",
      "**Кто + {{word:dao4}} + место + {{word:le}}**",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:dao4}} перед местом, чтобы сказать, что вы туда добрались.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что добрались."] },
  },
  exampleArrive1: { ru: ["Я пришёл домой."] },
  exampleArrive2: { ru: ["Она добралась до того места."] },
  exampleArrive3: { ru: ["Когда ты приедешь?"] },
  vocabQi: { ru: ["подниматься; qǐ-lái: вставать"] },
  vocabWai: { ru: ["снаружи; wài-miàn: на улице, снаружи"] },
  vocabKou: { ru: ["проём, дверь"] },
  proseDirection: {
    ru: [
      "**Чтобы сказать, куда вы движетесь**, присоедините {{word:qi3}} (вверх), {{word:shang4}} (вверх) или {{word:xia4}} (вниз) к {{word:lai2}} или {{word:qu4}}.",
      "",
      "**{{word:qi3}}-{{word:lai2}} / {{word:shang4}}-{{word:lai2}} / {{word:xia4}}-{{word:lai2}}**",
      "",
      "{{word:qi3}}-{{word:lai2}} — «вставать». {{word:shang4}}-{{word:lai2}} — «подняться сюда», {{word:xia4}}-{{word:lai2}} — «спуститься сюда». Если движение от говорящего, используйте {{word:qu4}}: {{word:shang4}}-{{word:qu4}} — «подняться туда».",
      "{{word:wai4}}-{{word:mian4}} — это «снаружи», а {{word:kou3}} — проём, например дверь.",
    ],
    tldr: {
      ru: [
        "{{word:qi3}}-{{word:lai2}} — «вставать». {{word:wai4}}-{{word:mian4}} — «снаружи».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «вверх», «вниз» и «наружу»."] },
  },
  exampleDirection1: { ru: ["Вставай!"] },
  exampleDirection2: { ru: ["Я встал."] },
  exampleDirection3: { ru: ["Спускайся!"] },
  exampleDirection4: { ru: ["Он поднялся наверх."] },
  exampleDirection5: { ru: ["Я иду на улицу."] },
  exampleDirection7: { ru: ["Выйди наружу через этот проём."] },
  exampleDirection8: { ru: ["У коробки маленькое отверстие."] },
  exampleDirection9: { ru: ["Где дверь?"] },
  vocabDong: { ru: ["двигаться"] },
  proseMove: {
    ru: [
      "**Чтобы сказать, что что-то двигается**, используйте {{word:dong4}} (двигаться).",
      "",
      "**Кто + {{word:dong4}}**",
      "",
      "{{Word:bu4}} {{word:yao4}} {{word:dong4}}! значит «Не двигайся!». А {{word:dong4wu4}} (животное) — это «двигающаяся вещь».",
    ],
    tldr: {
      ru: [
        "{{word:dong4}} значит «двигаться»: {{Word:ta1}} {{word:dong4}} {{word:le}} — оно сдвинулось.",
      ],
    },
    necessity: {
      ru: [
        "Теперь вы можете сказать, что что-то двигается, или велеть ему остановиться.",
      ],
    },
  },
  exampleMove1: { ru: ["Оно сдвинулось."] },
  exampleMove2: { ru: ["Не двигайся!"] },
  exampleMove3: { ru: ["Животное двигается."] },
  exampleMove4: { ru: ["Ты можешь двигаться?"] },
  vocabYuan: { ru: ["далеко, далёкий"] },
  vocabFujin: { ru: ["поблизости, рядом"] },
  proseFar: {
    ru: [
      "**Чтобы сказать, что место далеко**, поставьте после него {{word:hen3}} {{word:yuan3}} (очень далеко). **Чтобы сказать, что что-то близко**, поставьте {{word:fu4jin4}} (поблизости) после {{word:zai4}} или после {{word:zai4}} и места.",
      "",
      "**Место + {{word:hen3}} + {{word:yuan3}} / Вещь + {{word:zai4}} (+ место) + {{word:fu4jin4}}**",
      "",
      "{{word:fu4jin4}} — слово места, как {{word:pang2bian1}}: говорите {{word:zai4}} {{word:fu4jin4}}, а не {{word:hen3}} {{word:fu4jin4}}.",
    ],
    tldr: {
      ru: [
        "{{word:yuan3}} — «далеко»: {{word:hen3}} {{word:yuan3}}. {{word:fu4jin4}} — «поблизости»: {{word:zai4}} {{word:fu4jin4}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, далеко ли идти."] },
  },
  exampleFar1: { ru: ["То место далеко."] },
  exampleFar2: { ru: ["Мой дом поблизости."] },
  exampleFar3: { ru: ["Твой дом далеко?"] },
  exampleFar4: { ru: ["Мы идём куда-нибудь поблизости."] },
  exampleFar5: { ru: ["Он пришёл издалека."] },
  exampleFar6: { ru: ["Около дома есть вода?"] },
  vocabLu: { ru: ["дорога, путь"] },
  proseRoad: {
    ru: [
      "**Чтобы говорить о дороге куда-то**, используйте {{word:lu4}} (дорога, путь).",
      "",
      "**{{word:lu4}} {{word:hen3}} {{word:yuan3}} / {{word:zhi1dao4}} {{word:lu4}} / {{word:lu4}}-{{word:shang4}}**",
    ],
    tldr: {
      ru: [
        "{{word:lu4}} — дорога или путь: {{Word:lu4}} {{word:hen3}} {{word:yuan3}} — путь далёкий.",
      ],
    },
    necessity: { ru: ["Теперь вы можете спросить дорогу."] },
  },
  exampleFar7: { ru: ["Путь далёкий."] },
  exampleFar8: { ru: ["Ты знаешь дорогу?"] },
  exampleFar9: { ru: ["На дороге много людей."] },
  exampleFar10: { ru: ["Мой дом слева от дороги."] },
  infoComingAndGoing: {
    title: { ru: ["Приходить и уходить"] },
    items: [
      {
        ru: [
          "{{word:lai2}} / {{word:qu4}} + место: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}}. (Я иду домой к родителям.)",
        ],
      },
      {
        ru: [
          "{{word:cong2}} + место + {{word:lai2}}: {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}}. (Я пришёл из дома.)",
        ],
      },
      {
        ru: [
          "{{word:dao4}} + место — добраться: {{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}. (Я пришёл домой.)",
        ],
      },
      {
        ru: [
          "{{word:qi3}}-{{word:lai2}} (вставать), {{word:shang4}}-{{word:lai2}} (подняться сюда), {{word:xia4}}-{{word:lai2}} (спуститься сюда); с {{word:qu4}} — движение от говорящего.",
        ],
      },
      {
        ru: [
          "{{word:dong4}} — двигаться: {{Word:bu4}} {{word:yao4}} {{word:dong4}}! (Не двигайся!)",
        ],
      },
      {
        ru: [
          "{{word:yuan3}} / {{word:fu4jin4}} — далеко / поблизости: {{Word:na4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:yuan3}}. (То место далеко.) {{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}. (Мой дом поблизости.)",
        ],
      },
      {
        ru: [
          "{{word:lu4}} — дорога, путь: {{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}? (Ты знаешь дорогу?)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Куда ты идёшь?"] },
  exercise2: { ru: ["Она идёт из дома."] },
  exercise3: { ru: ["Мы пришли домой."] },
  exercise4: { ru: ["Вставай!"] },
  exercise5: { ru: ["Животное снаружи."] },
  exercise6: { ru: ["У коробки большое отверстие."] },
  exercise7: { ru: ["Спускайся!"] },
  exercise8: { ru: ["Не двигайся!"] },
  exercise9: { ru: ["Дом моих родителей далеко."] },
  exercise10: { ru: ["Мой дом поблизости."] },
  exercise11: { ru: ["Ты знаешь дорогу?"] },
  answer1: { ru: ["{{Word:ni3}} {{word:qu4}} {{word:na3li3}}?"] },
  answer2: {
    ru: [
      "{{Word:ta1}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
    ],
  },
  answer3: { ru: ["{{Word:wo3}}-{{word:men}} {{word:dao4}} {{word:jia1}} {{word:le}}."] },
  answer4: { ru: ["{{Word:qi3}}-{{word:lai2}}!"] },
  answer5: {
    ru: [
      "{{Word:dong4wu4}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
    ],
  },
  answer6: {
    ru: [
      "{{Word:he2zi}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:da4}}.",
    ],
  },
  answer7: { ru: ["{{Word:xia4}}-{{word:lai2}}!"] },
  answer8: { ru: ["{{Word:bu4}} {{word:yao4}} {{word:dong4}}!"] },
  answer9: { ru: ["{{Word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:yuan3}}."] },
  answer10: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}.",
    ],
  },
  answer11: { ru: ["{{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}?"] },
  faqDaoOrQu: {
    question: { ru: ["Чем {{word:qu4}} отличается от {{word:dao4}}?"] },
    ru: [
      "{{word:qu4}} — идти к месту. {{word:dao4}} — добраться до него: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} (я в пути), {{Word:wo3}} {{word:dao4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:le}} (я уже на месте).",
    ],
  },
  faqCongOrder: {
    question: { ru: ["Почему место стоит между {{word:cong2}} и {{word:lai2}}?"] },
    ru: [
      "В китайском «откуда» стоит перед глаголом, как и большинство подробностей о действии. {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}} — это «я из дома пришёл».",
    ],
  },
  faqLaiOrQu: {
    question: { ru: ["Как выбрать между {{word:lai2}} и {{word:qu4}}?"] },
    ru: [
      "Это зависит от того, где говорящий. {{word:lai2}} — движение к говорящему, {{word:qu4}} — от него, как русские «при-» и «у-». Тот, кто внизу, зовёт: {{word:xia4}}-{{word:lai2}}! (Спускайся сюда!). Тот, кто наверху, говорит: {{word:xia4}}-{{word:qu4}}! (Спускайся туда!).",
    ],
  },
};

export default ru;
