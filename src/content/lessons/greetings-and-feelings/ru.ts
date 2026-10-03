// Russian text for greetings-and-feelings, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Приветствия и чувства"] },
  summary: {
    ru: [
      "Каждый день мы здороваемся с людьми и говорим, как себя чувствуем.",
      "В этом уроке вы научитесь говорить «Привет!», «Спасибо!», «Как тебя зовут?», «Ешь!», «Не смейся!», «Мне холодно.» и «Я боюсь насекомых.»",
    ],
  },
  proseHello: {
    ru: [
      "**Чтобы поздороваться**, скажите {{word:ni3}} {{word:hao3}}.",
      "",
      "**{{Word:ni3}} {{word:hao3}}! / {{Word:ni3}} {{word:hao3}} {{word:ma}}?**",
      "",
      "Если людей много, скажите {{word:ni3}}-{{word:men}} {{word:hao3}}.",
    ],
    tldr: {
      ru: [
        "{{Word:ni3}} {{word:hao3}}! — «привет». {{Word:ni3}} {{word:hao3}} {{word:ma}}? — «как дела?»",
      ],
    },
    necessity: { ru: ["Это первое, что вы говорите любому человеку."] },
  },
  exampleHello1: { ru: ["Привет!"] },
  exampleHello2: { ru: ["Как дела?"] },
  exampleHello3: { ru: ["У меня всё хорошо."] },
  exampleHello4: { ru: ["Я пошёл. / Пока."] },
  exampleHello5: { ru: ["Откуда ты?"] },
  exampleHello6: { ru: ["Ты вернулся!"] },
  exampleHello7: { ru: ["Привет! Заходи, садись!"] },
  vocabXie: { ru: ["благодарить; xiè-xie: спасибо"] },
  proseThanks: {
    ru: [
      "**Чтобы сказать спасибо**, скажите {{word:xie4}}-xie: {{word:xie4}} (благодарить) два раза, причём второй раз — коротко и легко.",
      "",
      "**{{word:xie4}}-xie! / {{word:xie4}}-xie {{word:ni3}}!**",
      "",
      "В ответ говорят {{word:bu4}} {{word:yong4}} {{word:xie4}} — «не нужно благодарить». В уроке {{lesson:doubling-words}} — другие слова, которые можно сказать дважды.",
    ],
    tldr: {
      ru: [
        "{{word:xie4}}-xie — «спасибо». {{word:bu4}} {{word:yong4}} {{word:xie4}} — «не за что».",
      ],
    },
    necessity: { ru: ["Теперь вы можете благодарить людей."] },
  },
  exampleThanks1: { ru: ["Спасибо!"] },
  exampleThanks2: { ru: ["Спасибо тебе!"] },
  exampleThanks3: { ru: ["Не за что."] },
  exampleThanks4: { ru: ["Спасибо, что дал мне воды."] },
  vocabJiao: { ru: ["называться; звать, издавать звук (о животных)"] },
  proseName: {
    ru: [
      "**Чтобы назвать своё имя**, используйте {{word:jiao4}} (называться), а имя поставьте в кавычки.",
      "",
      '**Кто + {{word:jiao4}} + "имя"**',
      "",
      'Животные тоже {{word:jiao4}}: {{Word:dong4wu4}} {{word:jiao4}} "wang-wang" значит, что животное говорит «гав-гав».',
    ],
    tldr: {
      ru: [
        '{{word:jiao4}} + имя: {{Word:wo3}} {{word:jiao4}} "Lisa" — меня зовут Лиза.',
      ],
    },
    necessity: {
      ru: ["Теперь вы можете сказать, как вас зовут, и спросить чужое имя."],
    },
  },
  exampleName1: { ru: ["Меня зовут Лиза."] },
  exampleName2: { ru: ["Как тебя зовут?"] },
  exampleName3: { ru: ["То животное говорит «гав-гав»."] },
  exampleName4: { ru: ["Его зовут Том или Тим."] },
  vocabPa: { ru: ["бояться"] },
  vocabXiao: { ru: ["смеяться, улыбаться"] },
  proseOrder: {
    ru: [
      "**Чтобы попросить кого-то что-то сделать**, просто скажите глагол. Чтобы сказать «не делай», поставьте впереди {{word:bu4}} {{word:yao4}}.",
      "",
      "**Глагол! / {{word:bu4}} {{word:yao4}} + глагол!**",
    ],
    tldr: {
      ru: [
        "Глагол сам по себе — это просьба: {{Word:chi1}}! (Ешь!) {{word:bu4}} {{word:yao4}} + глагол — «не делай».",
      ],
    },
    necessity: { ru: ["Теперь вы можете просить людей что-то сделать."] },
  },
  exampleOrder1: { ru: ["Ешь!"] },
  exampleOrder3: { ru: ["Не говори!"] },
  exampleOrder5: { ru: ["Оставайся здесь!"] },
  exampleOrder6: { ru: ["Не трогай мой нос!"] },
  exampleOrder7: { ru: ["Передай мне соль! (то, от чего вкус становится хорошим)"] },
  exampleOrder8: { ru: ["Если тебе холодно, заходи в дом!"] },
  exampleOrder9: { ru: ["Раз, два, три, начали!"] },
  exampleOrder11: { ru: ["Не смейся!"] },
  vocabJuede: { ru: ["чувствовать, думать"] },
  vocabChongzi: { ru: ["насекомое, жук"] },
  proseFeel: {
    ru: [
      "**Чтобы сказать, как вы себя чувствуете**, поставьте {{word:jue2de}} (чувствовать) перед прилагательным.",
      "",
      "**Кто + {{word:jue2de}} + прилагательное**",
      "",
      "{{word:pa4}} значит «бояться»: {{Word:wo3}} {{word:pa4}} {{word:chong2zi}} — я боюсь насекомых.",
    ],
    tldr: {
      ru: [
        "{{word:jue2de}} + прилагательное говорит, как вы себя чувствуете: {{Word:wo3}} {{word:jue2de}} {{word:leng3}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, как себя чувствуете."] },
  },
  exampleFeel2: { ru: ["Мне холодно."] },
  exampleFeel4: { ru: ["Я боюсь насекомых."] },
  exampleFeel5: { ru: ["Она боится огня."] },
  exampleFeel8: { ru: ["Мне хорошо, потому что ты пришёл."] },
  exampleFeel9: { ru: ["Её животное умерло, и ей очень плохо."] },
  exampleFeel10: { ru: ["Мне кажется, этот цвет хороший."] },
  exampleFeel12: { ru: ["Животное выжило, и мне хорошо."] },
  exampleFeel22: { ru: ["Больше всего я боюсь насекомых."] },
  proseLaugh: {
    ru: [
      "**Чтобы сказать, что кто-то смеётся или улыбается**, используйте {{word:xiao4}}.",
      "",
      "**Кто + {{word:xiao4}}**",
    ],
    tldr: {
      ru: [
        "{{word:xiao4}} — «смеяться» или «улыбаться»: {{Word:ta1}} {{word:xiao4}} {{word:le}} — она улыбнулась.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что кто-то засмеялся."] },
  },
  exampleFeel13: { ru: ["Она улыбнулась."] },
  exampleFeel14: { ru: ["Почему ты смеёшься?"] },
  vocabXin: { ru: ["сердце"] },
  proseHeart: {
    ru: [
      "**Чтобы сказать, что у вас на душе**, используйте {{word:xin1}} (сердце). Оно соединяется с другими словами.",
      "",
      "**{{word:kai1}}-{{word:xin1}} / {{word:xiao3}}-{{word:xin1}} / {{word:fang4}}-{{word:xin1}}**",
      "",
      "{{word:kai1}}-{{word:xin1}} («открытое сердце») — «радостный», {{word:xiao3}}-{{word:xin1}} («маленькое сердце») — «осторожный», а {{word:fang4}}-{{word:xin1}} («положить сердце») — «не волнуйся».",
    ],
    tldr: {
      ru: [
        "{{word:kai1}}-{{word:xin1}} — радостный, {{word:xiao3}}-{{word:xin1}} — осторожно, {{word:fang4}}-{{word:xin1}} — не волнуйся.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что рады, и попросить быть осторожнее."] },
  },
  exampleFeel17: { ru: ["Я очень рад."] },
  exampleFeel18: { ru: ["Ты рад?"] },
  exampleFeel19: { ru: ["Как хорошо, что ты пришёл!"] },
  exampleFeel20: { ru: ["Осторожно!"] },
  exampleFeel21: { ru: ["Не волнуйся, ничего страшного."] },
  exampleFeel23: { ru: ["Мне плохо, я хочу лечь."] },
  vocabShengyin: { ru: ["звук, голос"] },
  proseHear: {
    ru: [
      "**Чтобы сказать, что вы слышите звук**, скажите {{word:ting1}}-{{word:dao4}} (услышать) и {{word:sheng1yin1}} (звук).",
      "",
      "**Кто + {{word:ting1}}-{{word:dao4}} + {{word:sheng1yin1}}**",
    ],
    tldr: {
      ru: [
        "{{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}} значит «услышать звук».",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о том, что слышите."] },
  },
  exampleHear1: { ru: ["Я слышу странный звук."] },
  exampleHear2: { ru: ["У тебя хороший голос."] },
  exampleHear3: { ru: ["Насекомое звучит тихо."] },
  exampleHear4: { ru: ["Тут насекомое!"] },
  exampleHear5: { ru: ["Я услышал слово, которого никогда раньше не слышал."] },
  exampleHear6: { ru: ["Я слышу звук. Что случилось?"] },
  exampleHear7: { ru: ["Я слышу, как летит животное."] },
  infoGreetingsAndFeelings: {
    title: { ru: ["Приветствия и чувства"] },
    items: [
      {
        ru: [
          "{{Word:ni3}} {{word:hao3}}! — привет. {{Word:ni3}} {{word:hao3}} {{word:ma}}? — как дела?",
        ],
      },
      {
        ru: [
          '{{word:jiao4}} + "имя": {{Word:wo3}} {{word:jiao4}} "Lisa". (Меня зовут Лиза.) {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}? (Как тебя зовут?)',
        ],
      },
      {
        ru: [
          "Глагол сам по себе — просьба: {{Word:chi1}}! (Ешь!) {{Word:bu4}} {{word:yao4}} + глагол — не делай.",
        ],
      },
      {
        ru: [
          "{{word:jue2de}} + прилагательное — чувствовать: {{Word:wo3}} {{word:jue2de}} {{word:leng3}}. (Мне холодно.)",
        ],
      },
      {
        ru: [
          "{{word:pa4}} + вещь — бояться: {{Word:wo3}} {{word:pa4}} {{word:chong2zi}}. (Я боюсь насекомых.)",
        ],
      },
      {
        ru: [
          "{{word:xie4}}-xie — спасибо: {{Word:xie4}}-xie {{word:ni3}}! (Спасибо тебе!) {{Word:bu4}} {{word:yong4}} {{word:xie4}}. (Не за что.)",
        ],
      },
      {
        ru: [
          "{{word:kai1}}-{{word:xin1}} — радостный: {{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}. (Я очень рад.) {{Word:xiao3}}-{{word:xin1}}! (Осторожно!)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Его зовут «Том»."] },
  exercise2: { ru: ["Всем привет!"] },
  exercise3: { ru: ["Не жди!"] },
  exercise4: { ru: ["Тебе холодно?"] },
  exercise5: { ru: ["Я не боюсь."] },
  exercise6: { ru: ["Я слышу звук."] },
  exercise7: { ru: ["У меня на руке насекомое."] },
  exercise8: { ru: ["Я сейчас же приду!"] },
  exercise9: { ru: ["Не смейся надо мной!"] },
  exercise10: { ru: ["Спасибо, что дал мне фрукты."] },
  exercise11: { ru: ["Не за что."] },
  exercise12: { ru: ["Я очень рад."] },
  exercise13: { ru: ["Осторожно!"] },
  answer1: { ru: ['{{Word:ta1}} {{word:jiao4}} "Tom".'] },
  answer2: { ru: ["{{Word:ni3}}-{{word:men}} {{word:hao3}}!"] },
  answer3: { ru: ["{{Word:bu4}} {{word:yao4}} {{word:deng3}}!"] },
  answer4: {
    ru: [
      "{{Word:ni3}} {{word:jue2de}} {{word:leng3}} {{word:ma}}?",
    ],
  },
  answer5: { ru: ["{{Word:wo3}} {{word:bu4}} {{word:pa4}}."] },
  answer6: {
    ru: [
      "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}}.",
    ],
  },
  answer7: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:shang4}} {{word:you3}} {{word:chong2zi}}.",
    ],
  },
  answer8: { ru: ["{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:lai2}}!"] },
  answer9: { ru: ["{{Word:bu4}} {{word:yao4}} {{word:xiao4}} {{word:wo3}}!"] },
  answer10: { ru: ["{{Word:xie4}}-xie {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3guo3}}."] },
  answer11: { ru: ["{{Word:bu4}} {{word:yong4}} {{word:xie4}}."] },
  answer12: { ru: ["{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}."] },
  answer13: { ru: ["{{Word:xiao3}}-{{word:xin1}}!"] },
  faqNihaoma: {
    question: { ru: ["{{word:ni3}} {{word:hao3}} {{word:ma}} — это как «Как дела?»"] },
    ru: [
      "Да, но его говорят реже, чем русское «Как дела?». Это настоящий вопрос, в основном к тому, кого вы давно не видели. {{Word:ni3}} {{word:hao3}}! — обычное «привет».",
    ],
  },
  faqJuedeThink: {
    question: { ru: ["Можно ли сказать {{word:jue2de}} в значении «я думаю»?"] },
    ru: [
      "Да. {{word:jue2de}} подходит и для мнений: {{Word:wo3}} {{word:jue2de}} {{word:zhe4}}-ge {{word:hen3}} {{word:hao3}} (Я думаю, это хорошо).",
    ],
  },
};

export default ru;
