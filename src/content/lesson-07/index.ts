// See src/lib/chapter-content.js for the schema this is transformed by.
// zh/ru intentionally blank -- carried over English-only from lesson-07.yaml.
// A '' entry inside a sentence array is a deliberate paragraph break.
import type { Entry } from '../../lib/chapter-entry-types.ts';

export const meta = {
  id: 'lesson-07',
  type: 'lesson',
  lessonNumber: 7,
  order: 7,
};

const content: Entry[] = [
  {
    type: 'title',
    en: ['More Adjectives & State Changes'],
    zh: [],
    ru: ['Больше прилагательных и изменения состояния'],
  },
  {
    type: 'summary',
    en: [
      'Hao-shuo-de builds "strong" by combining {{word:you3}} with {{word:li4liang4}}, adjectives can modify verbs directly as adverbs, `{{word:le}}` attached to an adjective marks a change of state, and the {{word:ba3}}...{{word:bian4}} construction turns an adjective into a causative action ("to make good" = "to fix").',
    ],
    zh: [],
    ru: [
      'Hao-shuo-de образует «сильный», соединяя {{word:you3}} с {{word:li4liang4}}, прилагательные могут напрямую определять глаголы как наречия, `{{word:le}}`, присоединённый к прилагательному, отмечает изменение состояния, а конструкция {{word:ba3}}...{{word:bian4}} превращает прилагательное в каузативное действие («сделать хорошим» = «починить»).',
    ],
  },
  {
    type: 'vocab',
    term: '{{word:bu4}}',
    ttsText: '不',
    en: ['not, no'],
    zh: [],
    ru: ['не, нет'],
  },
  {
    type: 'vocab',
    term: '{{word:huai4}}',
    ttsText: '坏',
    en: ['bad, negative, broken'],
    zh: [],
    ru: ['плохой, отрицательный, сломанный'],
  },
  {
    type: 'vocab',
    term: '{{word:duo1}}',
    ttsText: '多',
    en: ['many, a lot, very'],
    zh: [],
    ru: ['много, весьма'],
  },
  {
    type: 'vocab',
    term: '{{word:fu4mu3}}',
    ttsText: '父母',
    en: ['parent, ancestor'],
    zh: [],
    ru: ['родитель, предок'],
  },
  {
    type: 'vocab',
    term: '{{word:yi1}}',
    ttsText: '一',
    en: ['one, united'],
    zh: [],
    ru: ['один, единый'],
  },
  {
    type: 'vocab',
    term: '{{word:li4liang4}}',
    ttsText: '力量',
    en: ['power, energy'],
    zh: [],
    ru: ['сила, энергия'],
  },
  {
    type: 'prose',
    en: [
      'Not every idea gets its own dedicated word in Hao-shuo-de -- and "strong" is a good example of why that\'s fine.',
      'Rather than adding a 121st word to the dictionary just for this one concept, Hao-shuo-de builds it out of two words you already know: {{word:you3}} ("to have," from Lesson 6) plus {{word:li4liang4}} ("power, energy").',
      'Put them side by side and you get {{word:you3}} {{word:li4liang4}}, literally "to have power" -- which is really just describing what being strong actually means, one plain idea at a time, instead of packaging it into a single opaque label.',
      '',
      "To use that description the way you'd use any other adjective, bind it onto the noun it's describing with `-{{word:de}}`, the same connecting particle from Lessons 2 and 4: {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}, \"a strong man.\"",
      "Once it's bound this way, the whole three-word phrase behaves exactly like a single adjective would -- it just happens to be built rather than memorized.",
    ],
    zh: [],
    ru: [
      'Не каждая идея получает в Hao-shuo-de собственное отдельное слово — и «сильный» хороший тому пример.',
      'Вместо того чтобы добавить в словарь 121-е слово только ради одного этого понятия, Hao-shuo-de строит его из двух уже известных вам слов: {{word:you3}} («иметь», из Урока 6) плюс {{word:li4liang4}} («сила, энергия»).',
      'Поставьте их рядом — и получите {{word:you3}} {{word:li4liang4}}, буквально «иметь силу» — что на самом деле просто описывает, что значит быть сильным, по одной простой идее за раз, вместо того чтобы упаковывать это в единый непрозрачный ярлык.',
      '',
      'Чтобы использовать это описание так же, как любое другое прилагательное, присоедините его к определяемому существительному через `-{{word:de}}`, ту же связующую частицу из Уроков 2 и 4: {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}, «сильный мужчина».',
      'После такого присоединения вся трёхсловная фраза ведёт себя точно так же, как одно-единственное прилагательное — просто оно построено, а не заучено.',
    ],
    tldr: {
      en: ['"Strong" is built from {{word:you3}} + {{word:li4liang4}} ("to have power"), bound with `-{{word:de}}` to modify a noun directly.'],
      zh: [],
      ru: ['«Сильный» строится из {{word:you3}} + {{word:li4liang4}} («иметь силу»), присоединяется через `-{{word:de}}` для прямого определения существительного.'],
    },
    necessity: {
      en: ["Shows that Hao-shuo-de's small dictionary handles missing adjectives by composing existing words, not by inventing new vocabulary."],
      zh: [],
      ru: ['Показывает, что небольшой словарь Hao-shuo-de восполняет недостающие прилагательные за счёт соединения уже известных слов, а не изобретения новой лексики.'],
    },
  },
  {
    type: 'info',
    subtype: 'grammar',
    tag: 'adjectives/composition',
    title: { en: ['Building an Adjective'], zh: [], ru: ['Построение прилагательного'] },
    items: [
      {
        text: {
          en: ["When the dictionary has no word for a description you need, combine an existing verb and noun (e.g. {{word:you3}} + {{word:li4liang4}}) and bind the pair onto its target noun with `-{{word:de}}`, the same way any adjective phrase attaches."],
          zh: [],
          ru: ['Когда в словаре нет слова для нужного вам описания, соедините существующий глагол и существительное (например, {{word:you3}} + {{word:li4liang4}}) и присоедините эту пару к определяемому существительному через `-{{word:de}}`, так же, как присоединяется любая фраза-прилагательное.'],
        },
      },
    ],
  },
  {
    type: 'prose',
    en: [
      'Adjectives have one more job available to them: standing directly in front of another adjective or a verb, they act as adverbs, describing how much or how that other word applies.',
      "You have actually already been doing this without naming it -- `{{word:hen3}}` itself, from Lesson 4, is just an adjective (\"very\") pressed into adverb duty in front of another adjective.",
      '`{{word:hen3}} {{word:duo1}}` works the same way: `{{word:duo1}}` ("many") on its own is already an adjective, and stacking `{{word:hen3}}` in front of it gives you "very many," no separate adverb form required.',
    ],
    zh: [],
    ru: [
      'У прилагательных есть ещё одна доступная им роль: стоя непосредственно перед другим прилагательным или глаголом, они работают как наречия, описывая, насколько или как применимо это другое слово.',
      'На самом деле вы уже делали это, просто не называя явно: сам `{{word:hen3}}`, из Урока 4, — это просто прилагательное («очень»), поставленное на службу наречия перед другим прилагательным.',
      '`{{word:hen3}} {{word:duo1}}` работает точно так же: `{{word:duo1}}` («много») само по себе уже прилагательное, и, поставив `{{word:hen3}}` перед ним, вы получаете «очень много», без какой-либо отдельной формы наречия.',
    ],
    tldr: {
      en: ['An adjective placed directly before another adjective or verb functions as an adverb.'],
      zh: [],
      ru: ['Прилагательное, стоящее непосредственно перед другим прилагательным или глаголом, работает как наречие.'],
    },
    necessity: {
      en: ["Extends `{{word:hen3}}`'s connector role from Lesson 4 into a general adverb-formation pattern, without adding a new particle."],
      zh: [],
      ru: ['Расширяет роль связки `{{word:hen3}}` из Урока 4 до общей модели образования наречий, не добавляя новой частицы.'],
    },
  },
  {
    type: 'info',
    subtype: 'grammar',
    tag: 'adjectives/adverbial-use',
    title: { en: ['Adjectives as Adverbs'], zh: [], ru: ['Прилагательные в роли наречий'] },
    items: [
      {
        text: {
          en: ['Place an adjective directly before another adjective or a verb to use it as an adverb -- no separate adverb form exists.'],
          zh: [],
          ru: ['Поставьте прилагательное непосредственно перед другим прилагательным или глаголом, чтобы использовать его как наречие — отдельной формы наречия не существует.'],
        },
      },
    ],
  },
  {
    type: 'prose',
    en: [
      "There's a second way `{{word:le}}` shows up beyond marking a finished action on a verb (Lesson 6): attached directly to an adjective, `{{word:le}}` marks that a state has changed -- that something wasn't true a moment ago, and now it is.",
      '`{{word:hao3}} {{word:le}}` doesn\'t just restate "good"; it means something has become good, or gotten better than it was.',
      'This is the same `{{word:le}}`, doing the same underlying job -- marking the moment a change became real -- just applied to a description instead of an action.',
      'Between this and the causative construction below, Hao-shuo-de actually has two distinct ways to talk about something changing: `{{word:le}}` reports that a change already happened, while `{{word:ba3}}`...`{{word:bian4}}` (next) is how you make one happen yourself.',
    ],
    zh: [],
    ru: [
      'У `{{word:le}}` есть и второе применение, помимо отметки завершённого действия у глагола (Урок 6): присоединённый прямо к прилагательному, `{{word:le}}` отмечает, что состояние изменилось — что мгновение назад что-то ещё не было верно, а теперь стало.',
      '`{{word:hao3}} {{word:le}}` — это не просто повторение «хороший»; это значит, что нечто стало хорошим или улучшилось по сравнению с тем, каким было.',
      'Это тот же самый `{{word:le}}`, выполняющий ту же самую базовую работу — отмечающий момент, когда изменение стало реальностью, — просто применённый к описанию, а не к действию.',
      'Между этим и каузативной конструкцией ниже у Hao-shuo-de на самом деле есть два разных способа говорить об изменении: `{{word:le}}` сообщает, что изменение уже произошло, а `{{word:ba3}}`...`{{word:bian4}}` (далее) — это то, как вы сами вызываете изменение.',
    ],
    tldr: {
      en: ['`{{word:le}}` attached to an adjective marks a change of state -- `{{word:hao3}} {{word:le}}` means "it\'s gotten good," not just "it is good."'],
      zh: [],
      ru: ['`{{word:le}}`, присоединённый к прилагательному, отмечает изменение состояния — `{{word:hao3}} {{word:le}}` означает «стало хорошо», а не просто «хорошо».'],
    },
    necessity: {
      en: ["Extends Lesson 6's `{{word:le}}` (completion on verbs) to adjectives, and sets up the contrast with the causative construction below: `{{word:le}}` reports a change, `{{word:ba3}}`...`{{word:bian4}}` causes one."],
      zh: [],
      ru: ['Расширяет `{{word:le}}` из Урока 6 (завершённость у глаголов) на прилагательные и задаёт контраст с каузативной конструкцией ниже: `{{word:le}}` сообщает об изменении, `{{word:ba3}}`...`{{word:bian4}}` вызывает его.'],
    },
  },
  {
    type: 'info',
    subtype: 'grammar',
    tag: 'adjectives/state-change',
    title: { en: ['State Change with `{{word:le}}`'], zh: [], ru: ['Изменение состояния с `{{word:le}}`'] },
    items: [
      {
        text: {
          en: ['`{{word:le}}` attaches directly after an adjective to mark that a state has changed. `{{word:hao3}} {{word:le}}` means "it has become good," not simply "it is good."'],
          zh: [],
          ru: ['`{{word:le}}` присоединяется прямо после прилагательного, отмечая, что состояние изменилось. `{{word:hao3}} {{word:le}}` означает «стало хорошо», а не просто «хорошо».'],
        },
      },
    ],
  },
  {
    type: 'info',
    subtype: 'grammar',
    tag: 'adjectives/causative',
    title: { en: ['The Causative Rule'], zh: [], ru: ['Правило каузатива'] },
    items: [
      {
        text: {
          en: ['To turn an adjective into a transitive action (such as transforming "good" into "to fix/improve" or "bad" into "to break"), you must use the standard Mandarin {{word:ba3}} construction paired with {{word:bian4}} (to become/change):'],
          zh: [],
          ru: ['Чтобы превратить прилагательное в переходное действие (например, превратить «хороший» в «чинить/улучшать» или «плохой» в «ломать»), нужно использовать стандартную мандаринскую конструкцию {{word:ba3}} в паре с {{word:bian4}} (становиться/меняться):'],
        },
        items: [
          {
            text: {
              en: ['Subject + {{word:ba3}} + Object + {{word:bian4}} + Adjective'],
              zh: [],
              ru: ['Подлежащее + {{word:ba3}} + Дополнение + {{word:bian4}} + Прилагательное'],
            },
          },
        ],
      },
    ],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}}-{{word:de}} {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:hao3}}.',
    ttsText: '你的做的很好。',
    en: ['Your work is very good.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:shui3}} {{word:gei3}} {{word:wo3}} {{word:li4liang4}}.',
    ttsText: '水给我力量。',
    en: ['Water strengthens me / gives me energy.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}} {{word:shi4}} {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}.',
    ttsText: '你是有力量的男人。',
    en: ["You're a strong man."],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.',
    ttsText: '知道的人看写的东西。',
    en: ['The scholars read the document / look at the paper.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:xiao3}}-{{word:de}} {{word:nv3ren2}} méiyǒu {{word:hao3}}-{{word:de}} {{word:ting1}} {{word:fu4mu3}}.',
    ttsText: '小的女人没有好的听父母。',
    en: ["The girls misheard / didn't listen well to the parent."],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:shui3}} {{word:hao3}} {{word:le}}.',
    ttsText: '水好了。',
    en: ['The water has gotten good now.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: 'Méiyǒu {{word:ren2}} {{word:shi4}} {{word:huai4}}-{{word:de}}.',
    ttsText: '没有人是坏的。',
    en: ['Nobody is bad.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:nan2ren2}}-{{word:de}} {{word:fu4mu3}} {{word:duo1}}-{{word:de}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.',
    ttsText: '男人的父母多的看写的东西。',
    en: ['Fathers use/read the book a lot.'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ["The man doesn't eat bad fruit."],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['Eating makes me tall.'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['I know Hao-shuo-de a bit.'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['The community has become strong.'],
    zh: [],
    ru: [],
  },
  {
    type: 'answer',
    en: ['{{Word:nan2ren2}} {{word:bu4}} {{word:chi1}} {{word:huai4}}-{{word:de}} {{word:shui3guo3}}.'],
    zh: [],
    ru: [],
    ttsText: '男人不吃坏的水果。',
  },
  {
    type: 'answer',
    en: ['{{Word:chi1}} {{word:ba3}} {{word:wo3}} {{word:bian4}} {{word:da4}}.'],
    zh: [],
    ru: [],
    ttsText: '吃把我变大。',
  },
  {
    type: 'answer',
    en: ['Hǎo-shuō-de, {{word:wo3}} {{word:zhi1dao4}}-{{word:de}} {{word:bu4}} {{word:duo1}}.'],
    zh: [],
    ru: [],
    ttsText: '好说的，我知道的不多。',
  },
  {
    type: 'answer',
    en: ['{{Word:qun2}} {{word:you3}}-{{word:li4liang4}} {{word:le}}.'],
    zh: [],
    ru: [],
    ttsText: '群有力量了。',
  },
];

export default content;
