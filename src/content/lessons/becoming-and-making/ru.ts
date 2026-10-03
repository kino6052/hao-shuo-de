// Russian text for becoming-and-making, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Уточнения 4 — Становиться и делать"] },
  summary: {
    ru: [
      "Вещи меняются, и мы часто сами их меняем.",
      "В этом уроке вы научитесь говорить «Стало лучше.», «Фрукт испортился.», «Я починил.» и «Он очень сильный.»",
    ],
  },
  vocabHuai: { ru: ["плохой, сломанный"] },
  vocabLuan: { ru: ["в беспорядке"] },
  proseChanged: {
    ru: [
      "**Чтобы сказать, что что-то изменилось**, поставьте {{word:le}} после прилагательного.",
      "",
      "**Вещь + прилагательное + {{word:le}}**",
    ],
    tldr: {
      ru: [
        "{{word:le}} после прилагательного значит, что что-то изменилось: {{Word:shui3}} {{word:re4}} {{word:le}} — вода нагрелась.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, чем всё обернулось."] },
  },
  exampleChanged1: { ru: ["Вода нагрелась."] },
  exampleChanged2: { ru: ["Стало лучше."] },
  exampleChanged3: { ru: ["Фрукт испортился."] },
  exampleChanged4: { ru: ["Инструмент сломался."] },
  exampleChanged5: { ru: ["В доме стал беспорядок."] },
  vocabBian: { ru: ["становиться, меняться"] },
  vocabNi: { ru: ["грязь, паста"] },
  proseBecame: {
    ru: [
      "**Чтобы сказать, что что-то стало другим**, поставьте {{word:bian4}} (становиться) перед прилагательным, а {{word:le}} — после.",
      "",
      "**Вещь + {{word:bian4}} + прилагательное + {{word:le}}**",
    ],
    tldr: {
      ru: [
        "{{word:bian4}} + прилагательное + {{word:le}} значит, что что-то стало таким.",
      ],
    },
    necessity: { ru: ["Теперь вы можете описать перемену."] },
  },
  exampleBecame1: { ru: ["Вода стала холодной."] },
  exampleBecame2: { ru: ["Ему стало лучше."] },
  exampleBecame3: { ru: ["Воздух стал горячим."] },
  exampleBecame4: { ru: ["Вода превратилась в грязь."] },
  exampleBecame5: { ru: ["На полу грязь."] },
  vocabNong: { ru: ["делать"] },
  vocabDe: { ru: ["получать"] },
  proseMake: {
    ru: [
      "**Чтобы сказать, что вы что-то сделали таким**, поставьте {{word:nong4}} (делать) перед результатом.",
      "",
      "**Кто + {{word:nong4}} + результат**",
      "",
      "{{word:nong4}} {{word:hao3}} — «починить», а {{word:nong4}} {{word:huai4}} — «сломать». {{word:de2}} значит «получать»: {{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}? (Что ты получил?)",
    ],
    tldr: {
      ru: [
        "{{word:nong4}} + результат: {{word:nong4}} {{word:hao3}} значит «починить».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что вы сделали с чем-то."] },
  },
  exampleMake1: { ru: ["Я починил."] },
  exampleMake2: { ru: ["Ты сломал."] },
  exampleMake3: { ru: ["Ты можешь починить?"] },
  exampleMake4: { ru: ["Что ты получил?"] },
  exampleMake5: { ru: ["Я получил хорошую одежду."] },
  exampleMake6: { ru: ["Не устраивай беспорядок!"] },
  vocabBa: { ru: ["ставит вещь вперёд: bǎ + вещь + действие"] },
  proseBa: {
    ru: [
      "**Чтобы сказать, что вы делаете с вещью**, поставьте {{word:ba3}} и вещь перед действием.",
      "",
      "**Кто + {{word:ba3}} + вещь + {{word:nong4}} + результат**",
    ],
    tldr: {
      ru: [
        "{{word:ba3}} + вещь ставится перед действием: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете точно сказать, какую вещь вы изменили."],
    },
  },
  exampleBa1: { ru: ["Я починил инструмент."] },
  exampleBa2: { ru: ["Он сломал коробку."] },
  exampleBa3: { ru: ["Нагрей воду."] },
  exampleBa4: { ru: ["Он сделал отверстие больше."] },
  exampleBa5: { ru: ["Он нагрел всю воду."] },
  exampleBa6: { ru: ["Я открыл коробку."] },
  exampleBa7: { ru: ["Он выключил огонь."] },
  exampleBa8: { ru: ["Он раскидал мою одежду."] },
  vocabFang: { ru: ["класть, ставить"] },
  proseFang: {
    ru: [
      "**Чтобы сказать, куда вы положили вещь**, сначала поставьте {{word:ba3}} и вещь, потом {{word:fang4}} {{word:zai4}} (положить в) и место.",
      "",
      "**Кто + {{word:ba3}} + вещь + {{word:fang4}} {{word:zai4}} + место**",
    ],
    tldr: {
      ru: [
        "{{word:ba3}} + вещь + {{word:fang4}} {{word:zai4}} + место говорит, куда вы её положили.",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете сказать, куда что положить."],
    },
  },
  exampleFang1: { ru: ["Я положил одежду на пол."] },
  exampleFang2: { ru: ["Он положил инструмент в коробку."] },
  exampleFang3: { ru: ["Положи фрукты сюда."] },
  exampleFang4: { ru: ["Куда ты положил мои деньги?"] },
  vocabLiliang: { ru: ["сила; yǒu lìliàng: сильный"] },
  proseStrong: {
    ru: [
      "**Чтобы сказать «сильный»**, скажите {{word:you3}} {{word:li4liang4}} — «иметь силу».",
      "",
      "**Кто + {{word:hen3}} {{word:you3}} {{word:li4liang4}}**",
    ],
    tldr: {
      ru: [
        "{{word:you3}} {{word:li4liang4}} — «иметь силу» — значит «сильный».",
      ],
    },
    necessity: {
      ru: [
        "Если для чего-то нет слова, его можно составить из знакомых слов.",
      ],
    },
  },
  exampleStrong1: { ru: ["Он очень сильный."] },
  exampleStrong2: { ru: ["У меня нет сил."] },
  exampleStrong3: { ru: ["У тебя очень сильные руки."] },
  exampleStrong4: { ru: ["У него сильное тело."] },
  infoBecomingAndMaking: {
    title: { ru: ["Становиться и делать"] },
    items: [
      {
        ru: [
          "прилагательное + {{word:le}} — изменилось: {{Word:shui3}} {{word:re4}} {{word:le}}. (Вода нагрелась.)",
        ],
      },
      {
        ru: [
          "{{word:bian4}} + прилагательное + {{word:le}} — стало: {{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}. (Вода стала холодной.)",
        ],
      },
      {
        ru: [
          "{{word:nong4}} + результат — сделать таким: {{Word:wo3}} {{word:nong4}} {{word:hao3}} {{word:le}}. (Я починил.)",
        ],
      },
      {
        ru: [
          "{{word:ba3}} + вещь + {{word:nong4}} + результат: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}. (Я починил инструмент.)",
        ],
      },
      {
        ru: [
          "{{word:ba3}} + вещь + {{word:fang4}} {{word:zai4}} + место — положить: {{Word:wo3}} {{word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} {{word:le}}. (Я положил одежду на пол.)",
        ],
      },
      {
        ru: [
          "{{word:you3}} {{word:li4liang4}} — сильный: {{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}. (Он очень сильный.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Рис остыл."] },
  exercise2: { ru: ["Мой инструмент сломался."] },
  exercise3: { ru: ["Вода стала горячей."] },
  exercise4: { ru: ["Я починил коробку."] },
  exercise5: { ru: ["Она очень сильная."] },
  exercise6: { ru: ["Что он получил?"] },
  exercise7: { ru: ["На моей одежде грязь."] },
  exercise8: { ru: ["Положи коробку сюда."] },
  exercise9: { ru: ["Не устраивай беспорядок!"] },
  answer1: { ru: ["{{Word:mi3fan4}} {{word:leng3}} {{word:le}}."] },
  answer2: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:gong1ju4}} {{word:huai4}} {{word:le}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:shui3}} {{word:bian4}} {{word:re4}} {{word:le}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:wo3}} {{word:ba3}} {{word:he2zi}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
    ],
  },
  answer5: {
    ru: [
      "{{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
    ],
  },
  answer6: {
    ru: [
      "{{Word:ta1}} {{word:de2}} {{word:le}} {{word:shen2me}}?",
    ],
  },
  answer7: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:yi1fu}}-{{word:shang4}} {{word:you3}} {{word:ni2}}.",
    ],
  },
  answer8: {
    ru: ["{{Word:ba3}} {{word:he2zi}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}."],
  },
  answer9: { ru: ["{{Word:bu4}} {{word:yao4}} {{word:nong4}}-{{word:luan4}}!"] },
  faqLeSameWord: {
    question: { ru: ["Это то же {{word:le}}, что в уроке {{lesson:when-it-happens}}?"] },
    ru: [
      "Это то же слово, но с немного другой работой. После глагола оно говорит, что действие сделано. После прилагательного — что что-то изменилось: {{Word:shui3}} {{word:re4}} {{word:le}} (Вода нагрелась).",
    ],
  },
  faqWhenBa: {
    question: { ru: ["Когда нужно {{word:ba3}}?"] },
    ru: [
      "Когда вы что-то делаете с вещью и она в итоге становится какой-то: починенной, сломанной, законченной. {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:huai4}} {{word:le}} (Я сломал инструмент). Если просто смотреть на вещь, она не меняется, поэтому в {{Word:wo3}} {{word:kan4}} {{word:gong1ju4}} нет {{word:ba3}}.",
    ],
  },
  faqBianOrLe: {
    question: { ru: ["Есть ли разница между {{word:leng3}} {{word:le}} и {{word:bian4}} {{word:leng3}} {{word:le}}?"] },
    ru: [
      "Оба говорят, что стало холодно. {{word:bian4}} делает главным саму перемену: оно превратилось в холодное.",
    ],
  },
};

export default ru;
