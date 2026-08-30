// See src/lib/chapter-content.js for the schema this is transformed by.
//
// lesson-02.yaml was unusual: most of its `eng` fields were literally the
// placeholder "To be added" while the real prose had only ever been written
// in Russian. Per the user's call, this file keeps that Russian text and
// adds a fresh English translation of it (rather than discarding it, or
// keeping the placeholder English). zh is still blank -- no Chinese source
// existed for this lesson either.
//
// Also fixed while translating (content bugs in the original, not schema
// changes): a dangling tldr/necessity pair that YAML-indentation-wise sat
// under the *last* info block (where the schema silently ignores it, since
// only prose entries read tldr/necessity) has been moved onto the prose
// entry it actually describes; and a couple of info-block titles that had
// gotten mixed up across languages (e.g. an English title of literally "to")
// have been given real English titles translated from the Russian.
//
// A '' entry inside a sentence array is a deliberate paragraph break.
import type { Entry } from "../../lib/chapter-entry-types.ts";

export const meta = {
  id: "lesson-02",
  type: "lesson",
  lessonNumber: 2,
  order: 2,
};

const content: Entry[] = [
  {
    type: "title",
    en: ["Words"],
    zh: ["词语"],
    ru: ["Слова"],
  },
  {
    type: "summary",
    en: [
      "Hao-shuo-de has {{dictionaryCount}} words. Words outside of this list are created by combining these {{dictionaryCount}} words. Some words are independent, others serve various functions.",
    ],
    zh: [],
    ru: [],
  },
  {
    type: "vocab",
    term: "{{word:dong1xi}}",
    ttsText: "东西",
    en: ["thing, something, being"],
    zh: ["东西，事物，存在物"],
    ru: ["вещь, нечто, существо"],
  },
  {
    type: "vocab",
    term: "{{word:ren2}}",
    ttsText: "人",
    en: ["person, human"],
    zh: ["人，人类"],
    ru: ["человек, человеческое существо"],
  },
  {
    type: "vocab",
    term: "{{word:shui3guo3}}",
    ttsText: "水果",
    en: ["fruit, vegetable"],
    zh: ["水果，蔬菜"],
    ru: ["фрукт, овощ"],
  },
  {
    type: "vocab",
    term: "{{word:xie3}}",
    ttsText: "写",
    en: ["write"],
    zh: ["写"],
    ru: ["писать"],
  },
  {
    type: "vocab",
    term: "{{word:nv3ren2}}",
    ttsText: "女人",
    en: ["woman, female"],
    zh: ["女人，女性"],
    ru: ["женщина, женского пола"],
  },
  {
    type: "vocab",
    term: "{{word:zhe4}}",
    ttsText: "这",
    en: ["this"],
    zh: ["这"],
    ru: ["этот"],
  },
  {
    type: "vocab",
    term: "{{word:dong4wu4}}",
    ttsText: "动物",
    en: ["animal, land mammal"],
    zh: ["动物，陆地哺乳动物"],
    ru: ["животное, наземное млекопитающее"],
  },
  {
    type: "prose",
    en: [
      'Look again at <audio-example zh="东西">{{word:dong1xi}}</audio-example> and <audio-example zh="女人">{{word:nv3ren2}}</audio-example> above.',
      '<audio-example zh="东西">{{word:dong1xi}}</audio-example> is built from <audio-example zh="东">dōng</audio-example> (east) and <audio-example zh="西">xi</audio-example> (west) — yet it means "thing," with no geography left in it.',
      '<audio-example zh="女人">{{word:nv3ren2}}</audio-example> is more transparent: <audio-example zh="女">nǚ</audio-example> (female) plus <audio-example zh="人">{{word:ren2}}</audio-example> (person) gives you "woman" plainly.',
      "Chinese words are built from roots the same way English words are — `understand` is `under` plus `stand`, `telephone` is `far` plus `sound` — but a fluent speaker doesn't reassemble the parts to get the meaning.",
      "A word is learned whole; its roots are history, not a formula you run each time you use it.",
    ],
    zh: [],
    ru: [
      'Обратите внимание на слова <audio-example zh="">{{word:dong1xi}}</audio-example> и <audio-example zh="">{{word:nv3ren2}}</audio-example>.',
    ],
  },
  {
    type: "info",
    title: { en: ["Example"], zh: [], ru: ["Пример"] },
    items: [
      {
        text: {
          en: ["Word: <b>Dongxi</b>"],
          zh: [],
          ru: ["*Cлово*: <b>Dongxi</b>"],
        },
        items: [
          {
            text: {
              en: ["Syllables: <b>dōng</b> (east) + <b>xi</b> (west)"],
              zh: [],
              ru: ["*Слоги:* <b>dōng</b> (восток) + <b>xi</b> (запад)"],
            },
            items: [
              {
                text: {
                  en: [
                    'Meaning: "thing," a word with no connection to geography at all.',
                  ],
                  zh: [],
                  ru: [
                    '*Значение:* "вещь", слово не имеющее никакого отношения к географии.',
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        text: {
          en: ["Word: <b>Nǚrén</b>"],
          zh: [],
          ru: ["*Cлово:* <b>Nǚrén</b>"],
        },
        items: [
          {
            text: {
              en: ["Syllables: <b>nǚ</b> (female) + <b>rén</b> (person)"],
              zh: [],
              ru: ["*Слоги:* <b>nǚ</b> (женский) + <b>rén</b> (человек)"],
            },
            items: [
              {
                text: {
                  en: [
                    'Meaning: "woman" — and this example is closer to the familiar way we build compound words out of several roots.',
                  ],
                  zh: [],
                  ru: [
                    '*Значение:* "женщина" и этот пример ближе к нашему привычному способу построения сложных слов из нескольких корней',
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "prose",
    en: [
      "From these examples we can see that Chinese words are built from roots exactly the same way Russian and English words are.",
      "",
      'Our languages have compound words too: for example "samolyot" (airplane) is "sam" (self) + "lyot" (fly), and "parovoz" (steam locomotive) is "par" (steam) + "voz" (carrier).',
      "",
      "We don't reassemble these words from their parts every time — we learn the word as a whole. A word's composition is its history, not a formula you have to reapply each time you use it in speech.",
      "",
      "Words in Hǎo-shuō-de follow this same principle.",
      "",
      "Every dictionary word is memorized as a whole, together with all its root syllables.",
      "",
      "One limitation of Hǎo-shuō-de is that this language doesn't let you create new base words that are written solid (as one unbroken block).",
      "",
      "If you need to create a word that isn't in the dictionary, you don't fuse two roots into a single solid word — you join them with a hyphen.",
      "",
      "(An example is needed here)",
      "",
      "<h2>Absence of Plural</h2>",
      "",
      "Nouns in Hǎo-shuō-de are neutral to number.",
      "",
      "Quantity is determined by <i>context</i>.",
      "",
      'For example, the word nǚrén can be read as either "woman" or "women" depending on the situation.',
      "",
      'However, the Hǎo-shuō-de dictionary does have the word "many," and in a sentence it stands separately from the noun it applies to.',
      "",
      "The form of the noun itself never changes, no matter what quantity it implies.",
      "",
      "We'll talk about this in more detail in the next chapter.",
      "",
      "(An example is needed)",
      "",
      "<h2>Pointing at Things</h2>",
    ],
    zh: [],
    ru: [
      "Из этих примеров мы видим, что китайские слова строятся из корней точно так же как русские и английские.",
      "",
      'У нас в языке тоже есть композитные слова: к примеру "самолет" ("сам" + "лет") и "паровоз" ("пар" + "воз").',
      "",
      "Мы не собираем эти слова из частей каждый раз, а выучиваем слово целиком. Состав слова — это история, а не формула, которую нужно применять каждый раз при его использовании в речи.",
      "",
      "Слова в Hǎo-shuō-de следуют этому же приинципу.",
      "",
      "Каждое слово из словаря запоминается целиком, вместе со всеми корнями-слогами.",
      "",
      "Одним из ограничений Hǎo-shuō-de является то, что этот язык не позволяет создавать новые базовые слова, которые пишутся слитно.",
      "",
      "Если вам нужно создать слово, которого нет в словаре, вы не будете соединять два корня в цельное слово — вы соедините их через дефис.",
      "",
      "(Здесь нужен пример)",
      "",
      "<h2>Отсутствие множественного числа</h2>",
      "",
      "Существительные в Hǎo-shuō-de нейтральны к числу.",
      "",
      "Количество определяет <i>контекст</i>.",
      "",
      'Например слово nǚrén может читаться как "женщина", так и "женщины" в зависимости от ситуации.',
      "",
      'Однако в словаре Hǎo-shuō-de все-таки есть слово "много", и в предложении оно ставится отдельно от существительного к которому его применяют.',
      "",
      "Форма самого существительного никогда не меняется, независимо от количества которое оно подразумевает.",
      "",
      "Об этом мы поговорим подробнее в следующей главе.",
      "",
      "(Нужен пример)",
      "",
      "<h2>Указание на предметы</h2>",
    ],
  },
  {
    type: "prose",
    en: [
      'To say "this" or "that" in Hǎo-shuō-de, the demonstrative pronouns <audio-example zh="东西">{{word:zhe4}}</audio-example> ("this") and <audio-example zh="东西">{{word:na4}}</audio-example> ("that") are joined to the ending -gè with a hyphen.',
    ],
    zh: [],
    ru: [
      'Чтобы сказать "этот" или "тот" в Hǎo-shuō-de, указательные местоимения <audio-example zh="东西">{{word:zhe4}}</audio-example> (это) и <audio-example zh="东西">{{word:na4}}</audio-example> (то) соединяются с окончанием -gè через дефис.',
    ],
  },
  {
    type: "info",
    title: { en: ["Rule"], zh: [], ru: ["Правило"] },
    items: [
      {
        text: {
          en: ["<b>Zhè</b> (this) + <b>ge</b>"],
          zh: [],
          ru: ["<b>Zhè</b> (это) + <b>ge</b>"],
        },
        items: [
          {
            text: {
              en: ["<b>Zhè-ge</b> (this one)"],
              zh: [],
              ru: ["<b>Zhè-ge</b> (этот)"],
            },
          },
        ],
      },
      {
        text: {
          en: ["<b>Nà</b> (that) + <b>ge</b>"],
          zh: [],
          ru: ["<b>Nà</b> (то) + <b>ge</b>"],
        },
        items: [
          {
            text: {
              en: ["<b>Nà-ge</b> (that one)"],
              zh: [],
              ru: ["<b>Nà-ge</b> (тот)"],
            },
          },
        ],
      },
    ],
  },
  {
    type: "prose",
    en: [
      "Thus, gè is a universal measure word.",
      "",
      "<h2>Why do we need the extra word gè?</h2>",
      "",
      'Consider the word rén. On its own it doesn\'t mean one particular person or a group of people. The word rén means the concept/idea of "person."',
      "",
      "To point at one specific person, you need to add this same particle -ge, which turns the general concept into something countable.",
      "",
      'For example, in Russian we say "paper" when we mean the material, while "a sheet of paper" means a more specific, countable thing.',
      "",
      "In Chinese, every noun without exception follows this rule.",
    ],
    zh: [],
    ru: [
      "Таким образом, gè является универсальным счетным словом.",
      "",
      "<h2>Зачем нужно лишнее слово gè?</h2>",
      "",
      "Рассмотрим слово rén. Само по себе оно значит не одного конкретного человека или группу людей. Слово rén означит человека как понятие/идею.",
      "",
      "Чтобы укзать на одного конкретного человка нужно добавить эту самую частицу -ge, которая превратит общее понятие в исчисляемое.",
      "",
      'К примеру, в русском языке мы говорим "бумага", когда подразумеваем материал, а "лист бумаги" будет означать уже более конкретную исчисляемую вещь.',
      "",
      "В китайском все без исключения существительные подчиняются этому правилу.",
    ],
  },
  {
    type: "info",
    title: { en: ["Rule"], zh: [], ru: ["Правило"] },
    items: [
      {
        text: {
          en: ["The particle <b>ge</b> cannot be omitted"],
          zh: [],
          ru: ["Частицу <b>ge</b> нельзя пропустить"],
        },
        items: [
          {
            text: {
              en: ["<b>Zhè ren</b> -- sounds incomplete in meaning"],
              zh: [],
              ru: ["<b>Zhè ren</b> -- звучит не законченно по смыслу"],
            },
          },
          {
            text: {
              en: ["<b>Zhè-ge ren</b> -- completes the thought"],
              zh: [],
              ru: ["<b>Zhè-ge ren</b> -- завершает мысль"],
            },
          },
        ],
      },
    ],
  },
  {
    type: "prose",
    en: [
      "In real Mandarin there are dozens of measure words like this, turning a noun into different shapes (flat objects, long objects, animals, bound books, and so on).",
      "",
      "Picking the right particle for each situation is one of the hardest tasks for Chinese learners.",
      "",
      "Hǎo-shuō-de doesn't use this whole multitude of unnecessary particles.",
      "",
      "The word gè counts everything, in any context.",
      "",
      "<h2>Turning a Verb into a Noun</h2>",
      "",
      "In Mandarin, you can easily create nouns out of verbs.",
      "",
      "You only need to add the particle -de.",
      "",
      'The Hǎo-shuō-de dictionary has no words for "book," "paper," or "document." Instead, it uses one compact compound word *xiě-de dōngxi*, meaning "a written thing."',
    ],
    zh: [],
    ru: [
      "В настоящем мандаринском существуют десятки подобных счетных слов, превращающих существительное в разные словесные формы (плоские предметы, длинные предметы, животные, переплетённые книги и т.д.)",
      "",
      "Подобрать правильную частицу для каждой ситуации — одна из самых трудных задач для изучающих китайский язык.",
      "",
      "Hǎo-shuō-de не использует это множество ненужных частиц.",
      "",
      "Слово gè считает всё подряд, в любом контексте.",
      "",
      "<h2>Превращение глагола в существительное</h2>",
      "",
      "В мандаринском языке можно легко создавать существительные из глаголов.",
      "",
      "Нужно только добавить частицу -de",
      "",
      'В словаре Hǎo-shuō-de слова «книга», «бумага» или «документ» отсутствуют. Вместо этого используется одно емкое составное слово *xiě-de dōngxi*, что значит "написанная вещь".',
    ],
  },
  {
    type: "info",
    title: {
      en: ["Verb → Noun"],
      zh: [],
      ru: ["Превращение глагола в существительное"],
    },
    items: [
      {
        text: {
          en: ["<b>Xiě</b> (to write) + <b>de</b>"],
          zh: [],
          ru: ["<b>Xiě</b> (писать) + <b>de</b>"],
        },
        items: [
          {
            text: {
              en: ["<b>Xiě-de</b> (written)"],
              zh: [],
              ru: ["<b>Xiě-de</b> (написанный)"],
            },
          },
        ],
      },
    ],
  },
  {
    type: "prose",
    en: [
      "<h2>Word Particles and Sentence Particles</h2>",
      "",
      'In Hǎo-shuō-de there are particles that attach to a word to change its meaning. We have already met these -- the particles "ge" and "de." They attach to the end of a word with a hyphen.',
      "",
      "There are also particles that get added inside the structure of a sentence (not to individual words) to change the meaning of the sentence as a whole. This includes, for example, the particle that marks an action in the sentence as completed, or the particle that turns a sentence into a question. They don't attach to specific words, and they are not written with a hyphen. We'll get to know them in the coming lessons.",
      "",
      "Remember this simple rule",
    ],
    zh: [],
    ru: [
      "<h2>Частицы слов и частицы предложений</h2>",
      "",
      'В Hǎo-shuō-de есть частицы которые добавляются к слову чтобы изменить его значение. С ними мы уже познакомились. Это частицы "ge" и "de". Они присоединяются к концу слова через дефис.',
      "",
      "Также есть частицы которые добавляются внутрь структуры предложения (а не к самим словам), чтобы изменить смысл предложения целиком. Это, например, частица которая делает действие в предложении завершенным, или частица которая превращает предложение в вопрос. Они не присоединяются к конкретным словам, и не пишутся через дефис. Мы будем знакомится с ними в следующих уроках.",
      "",
      "Запомните это простое правило",
    ],
    // Orphaned in the original YAML (mis-indented under the next info block,
    // where the schema doesn't read tldr/necessity at all) -- moved here,
    // onto the prose entry it actually describes.
    tldr: {
      en: [
        "Compound words are learned whole; their roots are history, not a formula.",
      ],
      zh: ["复合词是整体记住的；字根是它的来历，不是公式。"],
      ru: [
        "Составные слова заучиваются целиком; их корни — история, а не формула.",
      ],
    },
    necessity: {
      en: [
        "Sets expectations for how to treat multi-syllable dictionary words.",
      ],
      zh: ["确定该如何对待多音节的词典词。"],
      ru: ["Задаёт, как относиться к многослоговым словарным словам."],
    },
  },
  {
    type: "info",
    title: { en: ["Rule"], zh: [], ru: ["Правило"] },
    items: [
      {
        text: {
          en: [
            "If a particle is glued to a word with a hyphen — it shapes the meaning of that word",
          ],
          zh: [],
          ru: [
            "Если частица приклеена к слову через дефис — она формирует значение этого слова",
          ],
        },
      },
      {
        text: {
          en: [
            "If a particle stands free — it shapes the meaning of the whole sentence.",
          ],
          zh: [],
          ru: [
            "Если частица стоит свободно — она формирует значение целого предложения.",
          ],
        },
      },
    ],
  },
];

export default content;
