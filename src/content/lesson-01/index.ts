// See src/lib/chapter-content.js for the schema this is transformed by.
export const meta = {
  id: "lesson-01",
  type: "lesson",
  lessonNumber: 1,
  order: 1,
};

type LangText = { en: string[]; zh: string[]; ru: string[] };

interface TitleEntry extends LangText {
  type: "title";
}
interface SummaryEntry extends LangText {
  type: "summary";
}
interface ProseEntry extends LangText {
  type: "prose";
  tldr?: LangText;
  necessity?: LangText;
}
interface ExerciseEntry extends LangText {
  type: "exercise";
}
interface AnswerEntry extends LangText {
  type: "answer";
  audioFile?: string;
  ttsText?: string;
}
interface InfoItem {
  text: LangText;
  ordered?: boolean;
  items?: InfoItem[];
}
interface InfoEntry {
  type: "info" | "warning";
  title?: LangText;
  ordered?: boolean;
  subtype?: "grammar";
  tag?: string;
  items: InfoItem[];
}

type Entry =
  | TitleEntry
  | SummaryEntry
  | ProseEntry
  | ExerciseEntry
  | AnswerEntry
  | InfoEntry;

const content: Entry[] = [
  {
    type: "title",
    en: ["Sounds and Symbols"],
    zh: ["声音与符号"],
    ru: ["Звуки и символы"],
  },
  {
    type: "summary",
    en: [
      "Pinyin is how we write Chinese using the Roman alphabet.",
      "It is written syllable by syllable.",
      "It has marks indicating tones.",
      "In hao-shuo-de we write pinyin with spaces, hyphens and quotation marks to make it more readable and understandable.",
      "Mastering pinyin is one of the most fundamental skills in learning Chinese.",
    ],
    zh: [],
    ru: [
      "Пиньинь — это способ записи китайского языка с помощью латинского алфавита.",
      "Он записывается слог за слогом.",
      "В нём есть знаки, обозначающие тоны.",
      "В hao-shuo-de пиньинь пишется с пробелами, дефисами и кавычками, чтобы сделать его более читаемым и понятным.",
      "Владение пиньинем — один из самых фундаментальных навыков в изучении китайского языка.",
    ],
  },
  {
    type: "prose",
    en: [
      "Chinese is very different from the western languages on many levels.",
      "One such example is what the smallest piece in the written language is.",
      "In western languages such smallest piece is a letter — we build words from letters, we can spell words from letters.",
      "In Chinese it is not like that — the smallest piece is a syllable.",
    ],
    zh: [],
    ru: [
      "Китайский язык во многом сильно отличается от западных языков.",
      "Один из таких примеров — то, что является наименьшей единицей письменного языка.",
      "В западных языках такой наименьшей единицей является буква — мы строим слова из букв, можем составлять слова по буквам.",
      "В китайском языке всё иначе — наименьшая единица — это слог.",
    ],
    tldr: {
      en: [
        "There are no letters in Chinese because the smallest written piece is a syllable.",
      ],
      zh: [],
      ru: [
        "В китайском языке нет букв, потому что наименьшая письменная единица — это слог.",
      ],
    },
    necessity: {
      en: ["Required to understand how to read pinyin"],
      zh: [],
      ru: ["Необходимо для понимания того, как читать пиньинь"],
    },
  },
  {
    type: "info",
    title: { en: ["Important!"], zh: [], ru: ["Важно!"] },
    items: [
      {
        text: {
          en: [
            "Get in the habit of reading pinyin words syllable by syllable, not as one whole word (the way we do in our alphabetic languages).",
          ],
          zh: [],
          ru: [
            "Приучите себя читать слова пиньинь по слогам, а не как единое целое слово (как мы делаем в наших алфавитных языках).",
          ],
        },
        items: [
          {
            text: {
              en: ["<i>Syllables</i>: <b>Zhōng</b> and <b>guó</b>"],
              zh: ["<i>音节：</i> <b>Zhōng</b> 和 <b>guó</b>"],
              ru: ["<i>Слоги:</i> <b>Zhōng</b> и <b>guó</b>"],
            },
          },
        ],
      },
    ],
  },
  {
    type: "prose",
    en: [
      "Even though pinyin attempts to capture how the words sound it is still not detailed enough to capture the details of the pronunciation, so it is important to learn exactly how each syllable is pronounced.",
      "For this we have a dedicated rigorous pronunciation course that aims to train you in detailed understanding of the basic pronunciation.",
      "Being able to understand the sounds of Chinese is the **MOST** fundamental and important skill in Chinese on which everything else will depend.",
      "So don't overlook this.",
      "Here is the [LINK]",
    ],
    zh: [],
    ru: [
      "Хотя пиньинь и пытается передать звучание слов, он всё же недостаточно детален, чтобы отразить все тонкости произношения, поэтому важно точно выучить, как произносится каждый слог.",
      "Для этого у нас есть отдельный тщательно проработанный курс произношения, который поможет вам детально разобраться в базовом произношении.",
      "Умение понимать звуки китайского языка — это **САМЫЙ** фундаментальный и важный навык в китайском, от которого зависит всё остальное.",
      "Поэтому не пренебрегайте этим.",
      "Вот [ССЫЛКА]",
    ],
  },
  {
    type: "prose",
    en: [
      "<h2>Tones</h2>",
      "In pinyin, tone isn't decoration — it's part of the word.",
    ],
    zh: ["<h2>声调</h2>", "在拼音中，声调不是装饰，而是词的一部分。"],
    ru: ["<h2>Тоны</h2>", "В пиньинь, тон — не украшение, а часть слова"],
    tldr: {
      en: ["Tone is part of the word, not decoration"],
      zh: ["声调是词的一部分，而非装饰"],
      ru: ["Тон — часть слова, а не украшение"],
    },
    necessity: {
      en: ["Tones are a fundamental and necessary part of Chinese and pinyin"],
      zh: [],
      ru: ["Тоны — фундаментальная и необходимая часть китайского языка и пиньиня"],
    },
  },
  {
    type: "info",
    title: { en: ["Example"], zh: ["例子"], ru: ["Пример"] },
    items: [
      {
        text: {
          en: ["**mā** — mother"],
          zh: ["**mā** — 妈妈"],
          ru: ["**mā** — мама"],
        },
      },
      {
        text: {
          en: ["**má** — hemp"],
          zh: ["**má** — 麻"],
          ru: ["**má** — конопля"],
        },
      },
      {
        text: {
          en: ["**mǎ** — horse"],
          zh: ["**mǎ** — 马"],
          ru: ["**mǎ** — лошадь"],
        },
      },
      {
        text: {
          en: ["**mà** — to scold"],
          zh: ["**mà** — 骂"],
          ru: ["**mà** — ругать"],
        },
      },
    ],
  },
  {
    type: "prose",
    en: [
      "All the words above are different, and are pronounced differently, because they use different tones.",
      "Chinese has the following tones:",
    ],
    zh: [
      "以上的词都各不相同，读音也不同，因为它们使用了不同的声调。",
      "汉语共有以下几种声调：",
    ],
    ru: [
      "Все приведенные выше слова -- разные, и произносятся они по разному, потому что используют разные тоны.",
      "В китайском языке существуют следующие тоны:",
    ],
  },
  {
    type: "info",
    title: { en: ["Tones"], zh: ["声调"], ru: ["Тоны"] },
    items: [
      {
        text: {
          en: [
            '**ā** — First tone. Level and sustained, as if you\'re humming a single unchanging note (like "om").',
          ],
          zh: [
            "**ā** — 一声。平稳而绵长，就像你哼着一个不变的音（比如“om”）。",
          ],
          ru: [
            "**ā** — Первый тон. Ровный и долгий, словно вы мычите одну ноту без изменений (например “ом“).",
          ],
        },
      },
      {
        text: {
          en: [
            '**á** — Second tone. Rising, like the "huh?" you say when you didn\'t quite hear something.',
          ],
          zh: ["**á** — 二声。上扬，就像你没听清楚时说的“啊？”。"],
          ru: [
            "**á** — Второй тон. Восходящий, как «а?», которое вы говорите, когда не расслышали.",
          ],
        },
      },
      {
        text: {
          en: [
            '**ǎ** — Third tone. Dips down first, then curls back up — the sound of a skeptical "hmm..."',
          ],
          zh: ["**ǎ** — 三声。先降后升，像是怀疑时发出的“嗯……”声。"],
          ru: [
            "**ǎ** — Третий тон. Сначала понижается, затем загибается вверх — звук скептического «хм...»",
          ],
        },
      },
      {
        text: {
          en: [
            '**à** — Fourth tone. Sharp and falling, like a clipped, final "No."',
          ],
          zh: ["**à** — 四声。短促而下降，像是斩钉截铁的一声“不”。"],
          ru: [
            "**à** — Четвёртый тон. Резкий и нисходящий, как отрывистое, окончательное «Нет».",
          ],
        },
      },
      {
        text: {
          en: [
            "**a** — Neutral tone. It's written without a tone mark, just as a plain letter.",
            "The neutral tone is shorter and unstressed.",
            "In the word Hǎo-shuō-de, the final syllable de carries the neutral tone.",
          ],
          zh: [
            "**a** — 轻声。书写时不带声调符号，只是普通字母。轻声更短，且不重读。在 Hǎo-shuō-de 一词中，最后一个音节 de 就是轻声。",
          ],
          ru: [
            "**a** — Нейтральный тон. Он пишется без знака тона, просто как слово или буква. Нейтральный тон короче и является безударным. В слове Hǎo-shuō-de последний слогde имеет нейтральный тон.",
          ],
        },
      },
    ],
  },
  {
    type: "prose",
    en: [
      "All of Chinese is read in tones, syllable by syllable.",
      "The one exception is the neutral tone.",
      "When it appears in a word, the syllable before it gets the stress, and the neutral tone itself is just a short, unstressed sound.",
      "The word Hǎo-shuō-de isn't three equal beats.",
      'It\'s pronounced hao-shuò-de — the final syllable "de" fades out.',
      "Without the neutral tone, spoken Chinese wouldn't sound spoken.",
      "In fact the literary Chinese is often spoken like that - it has its charm but it is very unnatural for daily speaking.",
      "It's the neutral tone that keeps the rhythm from falling apart.",
    ],
    zh: [],
    ru: [
      "Весь китайский читается тонами, слог за слогом.",
      "Единственное исключение — нейтральный тон.",
      "Когда он встречается в слове, ударение падает на предыдущий слог, а сам нейтральный тон — это просто короткий, безударный звук.",
      "Слово Hǎo-shuō-de состоит не из трёх равных долей.",
      'Оно произносится как hao-shuò-de — последний слог "de" затухает.',
      "Без нейтрального тона устная китайская речь не звучала бы естественно.",
      "На самом деле литературный китайский часто звучит именно так — в этом есть своё очарование, но для повседневной речи это очень неестественно.",
      "Именно нейтральный тон не даёт ритму речи распасться.",
    ],
  },
  {
    type: "prose",
    en: [
      "In natural Chinese speech there are rules for how certain tones shift when syllables sit next to each other.",
      "These changes are called tone sandhi (it's academic name)",
    ],
    zh: [],
    ru: [
      "В естественной китайской речи существуют правила того, как определённые тоны меняются, когда слоги оказываются рядом друг с другом.",
      "Такие изменения называются тоновым сандхи (это академическое название)",
    ],
  },
  {
    type: "prose",
    en: [
      "In this book, the tone of each syllable is its dictionary tone (i.e. taken straight from the dictionary).",
    ],
    zh: [],
    ru: [
      "В этой книге тон каждого слога — это его словарный тон (то есть взятый прямо из словаря).",
    ],
  },
  {
    type: "prose",
    en: [
      "In regular Chinese, sentences are built from syllables, with no spaces or extra notation that will help us to understand where words start and end.",
      "To make the structure of Chinese clearer to us, Hao-shuo-de adds a few extra grammar rules on top.",
    ],
    zh: [],
    ru: [
      "В обычном китайском языке предложения строятся из слогов, без пробелов или дополнительных обозначений, которые помогли бы понять, где начинается и заканчивается слово.",
      "Чтобы сделать структуру китайского языка более понятной для нас, Hao-shuo-de добавляет поверх неё несколько дополнительных грамматических правил.",
    ],
    tldr: {
      en: ["Hao-shuo-de adds punctuation on top of syllabic writing"],
      zh: ["Hao-shuo-de 在音节文字之上加入了标点规则"],
      ru: ["Hao-shuo-de добавляет пунктуацию поверх слогового письма"],
    },
    necessity: {
      en: [
        "Without these rules, you can't see where words and grammar particles begin and end in Chinese text.",
      ],
      zh: ["没有这些规则，就无法在中文文本中看清词语和语法成分的边界。"],
      ru: [
        "Без этих правил невозможно увидеть границы слов и грамматических частиц в китайском тексте",
      ],
    },
  },
  {
    type: "info",
    title: {
      en: ["Hao-shuo-de pinyin helpers"],
      zh: [],
      ru: ["Помощники Hao-shuo-de для пиньинь"],
    },
    ordered: true,
    items: [
      {
        text: {
          en: [
            "**Words are written solid**. When several syllables form one dictionary word, they are never split apart, no matter how long the word is — {{word:dong4wu4}}, {{word:shui4jiao4}}, {{word:dan4shi4}}.",
            "Read the whole solid block as a single unit.",
          ],
          zh: [
            "**词连写**。当若干音节组成一个词典词时，无论这个词有多长，它们都绝不会被拆开——{{word:dong4wu4}}、{{word:shui4jiao4}}、{{word:dan4shi4}}。把整个连写的部分当作一个整体来读。",
          ],
          ru: [
            "**Слова пишутся слитно**. Когда несколько слогов образуют одно словарное слово, они никогда не разделяются, какой бы длинной ни была лексема, — {{word:dong4wu4}}, {{word:shui4jiao4}}, {{word:dan4shi4}}. Читайте весь слитный блок как единое целое.",
          ],
        },
      },
      {
        text: {
          en: [
            "**A hyphen transforms a word**. A hyphen attaches a grammar particle, a measure word, or a modifier to a word and turns it into a different part of speech (for example, from a noun into an adjective, or from a verb into an adjective).",
          ],
          zh: [
            "**连字符转换词性**。连字符把一个语法成分、量词或修饰语附加到词上，并把它转换成另一种词性（例如，从名词变成形容词，或从动词变成形容词）。",
          ],
          ru: [
            "**Дефис трансформирует слово**. Дефис прикрепляет к слову грамматическую частицу, счетное слово или определение и трансформирует его в другую часть речи (к примеру, из существительного в прилагательное или из глагола в прилагательное).",
          ],
        },
        items: [
          {
            text: {
              en: ["{{word:zhe4}}-**ge** — this"],
              zh: ["{{word:zhe4}}-**ge** — 这个"],
              ru: ["{{word:zhe4}}-**ge** — этот"],
            },
          },
          {
            text: {
              en: ["{{word:yi1}}-**ge** — one thing"],
              zh: ["{{word:yi1}}-**ge** — 一个（东西）"],
              ru: ["{{word:yi1}}-**ge** — одна вещь"],
            },
          },
          {
            text: {
              en: ["{{word:hen3}}-**{{word:da4}}-de** — very big"],
              zh: ["{{word:hen3}}-**{{word:da4}}-de** — 很大的"],
              ru: ["{{word:hen3}}-**{{word:da4}}-de** — очень большой"],
            },
          },
          {
            text: {
              en: [
                "A hyphen always shows that the parts it joins work together as a single word.",
              ],
              zh: ["连字符总是表明它所连接的部分作为一个整体来运作。"],
              ru: [
                "Дефис всегда указывает на то что связываемые им части работают как одно слово.",
              ],
            },
          },
        ],
      },
      {
        text: {
          en: [
            "**Quotes set off the untranslatable**. Proper names and onomatopoeia — things that aren't really Hao-shuo-de vocabulary — are enclosed in quotes:",
          ],
          zh: [
            "**引号标出不可译内容**。专有名词和拟声词——这些本质上不属于 Hao-shuo-de 词汇的内容——用引号括起来：",
          ],
          ru: [
            "**Кавычки отделяют непереводимое**. Имена собственные и звукоподражания — то, что по сути не является лексикой Hao-shuo-de, — заключаются в кавычки:",
          ],
        },
        items: [
          {
            text: {
              en: ['"Beijing" — Beijing'],
              zh: ["“Beijing“ — 北京"],
              ru: ["“Beijing“ — Пекин"],
            },
          },
          {
            text: {
              en: ['{{word:jiao4}} "wāng-wāng" — barks "woof-woof"'],
              zh: ['{{word:jiao4}} "wāng-wāng" — 叫“汪汪”'],
              ru: ['{{word:jiao4}} "wāng-wāng" — лает «гав-гав»'],
            },
          },
          {
            text: {
              en: [
                "If you see quotes, don't look the word up in the dictionary — it isn't a dictionary word.",
              ],
              zh: ["如果看到引号，就不要在词典里查这个词——它不是词典词。"],
              ru: [
                "Если видите кавычки, не ищите это слово в словаре; оно не словарное.",
              ],
            },
          },
        ],
      },
    ],
  },
  {
    type: "exercise",
    en: ["Break Zhōngguórén into its syllables."],
    zh: ["把 Zhōngguórén 拆成音节。"],
    ru: ["Разбейте Zhōngguórén на слоги."],
  },
  {
    type: "exercise",
    en: ["Which tone is this: à (fourth tone mark)? Describe it in one word."],
    zh: ["这是什么声调：à（四声符号）？用一个词描述它。"],
    ru: ["Какой это тон: à (знак четвёртого тона)? Опишите его одним словом."],
  },
  {
    type: "exercise",
    en: [
      "Rewrite {{Word:wo3}} {{word:hao3}} using tone-number notation instead of tone marks.",
    ],
    zh: [
      "把 {{Word:wo3}} {{word:hao3}} 用声调数字标注法改写（不用声调符号）。",
    ],
    ru: [
      "Перепишите {{Word:wo3}} {{word:hao3}} в тоново-цифровой записи вместо знаков тонов.",
    ],
  },
  {
    type: "exercise",
    en: [
      "Is {{word:hen3}}-{{word:da4}}-de one dictionary word, or a word plus a bound grammar piece? How do you know from the punctuation alone?",
    ],
    zh: [
      "{{word:hen3}}-{{word:da4}}-de 是一个词典词，还是一个词加一个粘着的语法成分？仅凭标点你如何判断？",
    ],
    ru: [
      "Является ли {{word:hen3}}-{{word:da4}}-de одним словарным словом или словом плюс привязанной грамматической частью? Как вы это определяете только по знакам препинания?",
    ],
  },
  {
    type: "answer",
    en: ["Zhōng-guó-rén (three syllables: Zhōng, guó, rén)."],
    zh: ["Zhōng-guó-rén（三个音节：Zhōng、guó、rén）。"],
    ru: ["Zhōng-guó-rén (три слога: Zhōng, guó, rén)."],
  },
  {
    type: "answer",
    en: ["Fourth tone — sharp and falling."],
    zh: ["四声 —— 短促下降。"],
    ru: ["Четвёртый тон — резкий и нисходящий."],
  },
  {
    type: "answer",
    en: ["Wo3 hao3."],
    zh: ["Wo3 hao3。"],
    ru: ["Wo3 hao3."],
  },
  {
    type: "answer",
    en: [
      "A word ({{word:da4}}, big) plus a bound grammar piece (-de) — the hyphen shows they're glued together, not a single solid dictionary word.",
    ],
    zh: [
      "一个词（{{word:da4}}，大）加上一个粘着的语法成分（-de）—— 连字符表明它们是粘在一起的，而不是一个固实的词典词。",
    ],
    ru: [
      "Слово ({{word:da4}}, большой) плюс привязанная грамматическая часть (-de) — дефис показывает, что они скреплены вместе, а не являются единым слитным словарным словом.",
    ],
  },
];

export default content;
