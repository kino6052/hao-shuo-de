// See src/lib/chapter-content.js for the schema this is transformed by.
// The frontier: what is still hard to say in Hao-shuo-de, the best way to say
// it today, and what a new word would change. Every {{word:..}} must be a
// dictionary word (scripts/check-book.js checks). Update it when a word joins
// or leaves the dictionary.
import type { Entry } from "../lib/chapter-entry-types.ts";

export const meta = {
  id: "appendix-frontier",
  type: "appendix",
  order: 2.2,
};

const content: Entry[] = [
  {
    type: "title",
    en: ["The Frontier"],
    zh: [],
    ru: ["Граница"],
  },
  {
    type: "summary",
    en: ["What is still hard to say in Hao-shuo-de, the best way to say it today, and what a new word would change."],
    zh: [],
    ru: ["Что на Hǎo-shuō-de всё ещё трудно сказать, как сказать это сегодня и что изменило бы новое слово."],
  },
  {
    type: "prose",
    en: [
      "Hao-shuo-de has {{dictionaryCount}} words. Most things can be said by describing them, the way the composite dictionary does. Some are hard: the description gets long, loses a shade of meaning, or doesn't exist yet.",
      "This chapter maps that frontier. Each section says what's hard, shows the best way to say it today, and says what a new word would change. It changes as words come and go.",
    ],
    zh: [],
    ru: [
      "В Hǎo-shuō-de {{dictionaryCount}} слов. Большинство вещей можно сказать, описав их, как это делает словарь составных слов. Но некоторые даются трудно: описание выходит длинным, теряет оттенок смысла или его пока нет совсем.",
      "Эта глава отмечает эту границу. В каждом разделе сказано, что трудно, как это сказать сегодня и что изменило бы новое слово. Глава меняется, когда слова приходят и уходят.",
    ],
    tldr: {
      en: ["Where Hao-shuo-de struggles, and the best way to say it for now."],
      zh: [],
      ru: ["Где Hǎo-shuō-de трудно, и как сказать это пока."],
    },
    necessity: {
      en: ["You'll know where the edges are, and what to do when you reach one."],
      zh: [],
      ru: ["Вы будете знать, где границы, и что делать, когда до них дойдёте."],
    },
  },
  {
    type: "prose",
    en: ["## Big numbers", "{{word:shi2}} builds every number up to 99, and {{word:shi2}}-ge {{word:shi2}} is a hundred. Past that, numbers get long: ten thousand is four tens in a row. There is no word for ten thousand (万) yet, the one real gap in the composite dictionary."],
    zh: [],
    ru: ["## Большие числа", "Из {{word:shi2}} строятся все числа до 99, а {{word:shi2}}-ge {{word:shi2}} — это сто. Дальше числа становятся длинными: десять тысяч — четыре десятки подряд. Слова для десяти тысяч (万) пока нет — это единственный настоящий пробел в словаре составных слов."],
    tldr: {
      en: ["Numbers past a hundred are built from tens, so they get long."],
      zh: [],
      ru: ["Числа больше ста строятся из десяток, поэтому они длинные."],
    },
    necessity: {
      en: ["Prices, years, and distances often need big numbers."],
      zh: [],
      ru: ["Цены, годы и расстояния часто требуют больших чисел."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:shi2}}-ge {{word:shi2}}.",
    ttsText: "十个十。",
    en: ["A hundred (literally: ten tens)."],
    zh: [],
    ru: ["Сто (дословно: десять десяток)."],
  },
  {
    type: "example",
    pinyin: "{{Word:shi2}}-ge {{word:shi2}}-ge {{word:shi2}}.",
    ttsText: "十个十个十。",
    en: ["A thousand (literally: ten tens of ten)."],
    zh: [],
    ru: ["Тысяча (дословно: десять десяток по десять)."],
  },
  {
    type: "prose",
    en: ["## Abstract ideas", "Things you can't point at need descriptions. Some come out short: science is {{word:xue2}}-{{word:de}}, \"what is learned\". Others take a whole sentence, like the economy or freedom, where Mandarin has two syllables."],
    zh: [],
    ru: ["## Отвлечённые понятия", "То, на что нельзя показать, приходится описывать. Иногда коротко: наука — {{word:xue2}}-{{word:de}}, «то, что изучают». А экономике или свободе нужно целое предложение там, где в китайском два слога."],
    tldr: {
      en: ["Ideas you can't point at need a description, sometimes a long one."],
      zh: [],
      ru: ["Понятия, на которые не покажешь, требуют описания, иногда длинного."],
    },
    necessity: {
      en: ["The news, school, and work are full of them."],
      zh: [],
      ru: ["Ими полны новости, учёба и работа."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:xue2}}-{{word:de}}.",
    ttsText: "学的。",
    en: ["Science (literally: what is learned)."],
    zh: [],
    ru: ["Наука (дословно: то, что изучают)."],
  },
  {
    type: "example",
    pinyin: "{{Word:guo2}}-{{word:jia1}} {{word:you3}} {{word:guan1xi}}-{{word:de}} {{word:xue2}}-{{word:de}}.",
    ttsText: "国家有关系的学的。",
    en: ["Politics (literally: the learning that has to do with the country)."],
    zh: [],
    ru: ["Политика (дословно: то, что изучают и что связано со страной)."],
  },
  {
    type: "example",
    pinyin: "{{Word:mai3}} {{word:dong1xi}} {{word:he2}} {{word:gei3}} {{word:dong1xi}} {{word:de2}} {{word:jin1}}.",
    ttsText: "买东西和给东西得金。",
    en: ["The economy (literally: buying things, and giving things to get money)."],
    zh: [],
    ru: ["Экономика (дословно: покупать вещи и отдавать вещи за деньги)."],
  },
  {
    type: "prose",
    en: ["## Shades of feeling", "There's {{word:kai1}}-{{word:xin1}} (happy), {{word:pa4}} (scared), {{word:sheng1}}-{{word:qi4}} (angry), and {{word:bu4}} {{word:kai1}}-{{word:xin1}} for everything sad. Loneliness, jealousy, and pride need a sentence each, and the sentence is less exact than the feeling."],
    zh: [],
    ru: ["## Оттенки чувств", "Есть {{word:kai1}}-{{word:xin1}} (радостный), {{word:pa4}} (бояться), {{word:sheng1}}-{{word:qi4}} (злиться) и {{word:bu4}} {{word:kai1}}-{{word:xin1}} для любой грусти. Одиночество, ревность и гордость требуют целого предложения, и оно не так точно, как само чувство."],
    tldr: {
      en: ["Happy, scared, angry, and sad have words; finer feelings need sentences."],
      zh: [],
      ru: ["У радости, страха, гнева и грусти есть слова; тонкие чувства требуют предложений."],
    },
    necessity: {
      en: ["Talking about how you feel is where people most want the right word."],
      zh: [],
      ru: ["Говоря о чувствах, люди больше всего хотят найти точное слово."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:sheng1}}-{{word:qi4}} {{word:le}}.",
    ttsText: "我生气了。",
    en: ["I'm angry (literally: I gave birth to air). Real Mandarin: 我生气了."],
    zh: [],
    ru: ["Я злюсь (дословно: я родил воздух). Так и говорят по-китайски: 我生气了."],
  },
  {
    type: "example",
    pinyin: "{{Word:mei2}}-{{word:you3}} {{word:ren2}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}, {{word:wo3}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}.",
    ttsText: "没有人在我的旁边，我不开心。",
    en: ["I'm lonely (literally: nobody is beside me, and I'm not happy)."],
    zh: [],
    ru: ["Мне одиноко (дословно: рядом со мной никого нет, и мне невесело)."],
  },
  {
    type: "prose",
    en: ["## Days and calendars", "Days and years have words, {{word:tian1}} and {{word:nian2}}: tomorrow is {{word:ming2}}-{{word:tian1}}, last year {{word:qu4}}-{{word:nian2}}. What's still missing is today and this year (今天, 今年), since 今 isn't a word, and the week, which is seven days."],
    zh: [],
    ru: ["## Дни и календарь", "У дней и лет есть слова — {{word:tian1}} и {{word:nian2}}: завтра — {{word:ming2}}-{{word:tian1}}, прошлый год — {{word:qu4}}-{{word:nian2}}. Пока нет «сегодня» и «в этом году» (今天, 今年), потому что 今 — не слово, и недели: это семь дней."],
    tldr: {
      en: ["Days and years have words; today and the week still take a phrase."],
      zh: [],
      ru: ["У дней и лет есть слова; «сегодня» и «неделя» всё ещё требуют фразы."],
    },
    necessity: {
      en: ["Plans and appointments need days and weeks."],
      zh: [],
      ru: ["Планам и встречам нужны дни и недели."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:tian1}}.",
    ttsText: "这个天。",
    en: ["Today (literally: this day; Mandarin says 今天)."],
    zh: [],
    ru: ["Сегодня (дословно: этот день; по-китайски 今天)."],
  },
  {
    type: "example",
    pinyin: "{{Word:qi1}} {{word:tian1}}.",
    ttsText: "七天。",
    en: ["A week (literally: seven days)."],
    zh: [],
    ru: ["Неделя (дословно: семь дней)."],
  },
  {
    type: "prose",
    en: ["## Tastes, smells, and colors", "Only one taste has a name, {{word:tian2}} (sweet). Sour, bitter, salty, and spicy are all {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}, or a description. Smells go through the nose, {{word:bi2zi}}. There are six colors; pink, orange, and gray need to be described."],
    zh: [],
    ru: ["## Вкусы, запахи и цвета", "Имя есть только у одного вкуса — {{word:tian2}} (сладкий). Кислое, горькое, солёное и острое — всё это {{word:wei4dao4}} {{word:bu4}} {{word:hao3}} или описание. Запахи передаются через нос, {{word:bi2zi}}. Цветов шесть; розовый, оранжевый и серый приходится описывать."],
    tldr: {
      en: ["Sweet is the only named taste, and there are six colors."],
      zh: [],
      ru: ["Сладкий — единственный названный вкус, а цветов шесть."],
    },
    necessity: {
      en: ["Food and shopping are full of tastes and colors."],
      zh: [],
      ru: ["В еде и покупках полно вкусов и цветов."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:wei4dao4}} {{word:bu4}} {{word:hao3}}.",
    ttsText: "味道不好。",
    en: ["Sour, bitter, or salty: it doesn't taste good."],
    zh: [],
    ru: ["Кислое, горькое или солёное — невкусно."],
  },
  {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:jue2de}} {{word:bu4}} {{word:hao3}}.",
    ttsText: "我的鼻子觉得不好。",
    en: ["It smells bad (literally: my nose feels bad)."],
    zh: [],
    ru: ["Плохо пахнет (дословно: моему носу плохо)."],
  },
  {
    type: "prose",
    en: ["## Family", "There are {{word:fu4mu3}} (parents), {{word:nan2ren2}}, and {{word:nv3ren2}}. Mom and dad are \"the woman and the man of the parents\", and grandparents, uncles, and cousins need chains of -{{word:de}}."],
    zh: [],
    ru: ["## Семья", "Есть {{word:fu4mu3}} (родители), {{word:nan2ren2}} и {{word:nv3ren2}}. Мама и папа — «женщина и мужчина из родителей», а бабушки, дяди и двоюродные братья требуют цепочек из -{{word:de}}."],
    tldr: {
      en: ["Family words are built from parents, men, and women."],
      zh: [],
      ru: ["Слова о семье строятся из «родителей», «мужчин» и «женщин»."],
    },
    necessity: {
      en: ["Family is one of the first things people talk about."],
      zh: [],
      ru: ["О семье говорят одной из первых."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:fu4mu3}}-{{word:li3}}-{{word:de}} {{word:nv3ren2}}.",
    ttsText: "父母里的女人。",
    en: ["Mom (literally: the woman of the parents)."],
    zh: [],
    ru: ["Мама (дословно: женщина из родителей)."],
  },
  {
    type: "example",
    pinyin: "{{Word:fu4mu3}}-{{word:de}} {{word:fu4mu3}}.",
    ttsText: "父母的父母。",
    en: ["Grandparents (literally: the parents' parents)."],
    zh: [],
    ru: ["Бабушка и дедушка (дословно: родители родителей)."],
  },
  {
    type: "prose",
    en: ["## Tone of voice", "Mandarin softens and colors sentences with small endings like 吧, 呢, and 啊. Hao-shuo-de leaves them out: a suggestion ends with …, {{word:hao3}} {{word:ma}}?, and the rest is said plainly. It's always clear, but it can sound blunt."],
    zh: [],
    ru: ["## Тон", "Китайский смягчает и окрашивает предложения маленькими окончаниями вроде 吧, 呢 и 啊. В Hǎo-shuō-de их нет: предложение заканчивается на …, {{word:hao3}} {{word:ma}}?, а остальное говорится прямо. Это всегда понятно, но может звучать резко."],
    tldr: {
      en: ["Without Mandarin's soft endings, sentences can sound blunt."],
      zh: [],
      ru: ["Без мягких китайских окончаний фразы могут звучать резко."],
    },
    necessity: {
      en: ["Politeness often lives in tone, not in words."],
      zh: [],
      ru: ["Вежливость часто живёт в тоне, а не в словах."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}}, {{word:hao3}} {{word:ma}}?",
    ttsText: "我们去，好吗？",
    en: ["Let's go, okay? (Mandarin would say 我们走吧.)"],
    zh: [],
    ru: ["Пойдём, хорошо? (По-китайски сказали бы 我们走吧.)"],
  },
  {
    type: "prose",
    en: ["## Grammar Mandarin has, and Hao-shuo-de skips", "There's no passive (被): say who did it. There's no \"already\": {{word:le}} does the job. \"In order to\", \"only then\", and \"so\" are said with {{word:yin1wei4}} or X-{{word:wan2}} {{word:hou4}}. Nothing is lost, but some sentences have to be turned around."],
    zh: [],
    ru: ["## Грамматика, которая есть в китайском, но не в Hǎo-shuō-de", "Страдательного залога (被) нет: говорят, кто это сделал. Нет «уже»: его работу делает {{word:le}}. «Чтобы», «только тогда» и «поэтому» говорят через {{word:yin1wei4}} или X-{{word:wan2}} {{word:hou4}}. Ничего не теряется, но некоторые фразы приходится переворачивать."],
    tldr: {
      en: ["No passive and no \"already\": say who did it, and use le."],
      zh: [],
      ru: ["Нет страдательного залога и «уже»: говорите, кто сделал, и используйте le."],
    },
    necessity: {
      en: ["You'll know why a Mandarin sentence sometimes can't be copied word for word."],
      zh: [],
      ru: ["Вы поймёте, почему китайскую фразу иногда нельзя повторить слово в слово."],
    },
  },
  {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:nong4}}-{{word:huai4}} {{word:le}}.",
    ttsText: "他把盒子弄坏了。",
    en: ["The box was broken by him (literally: he broke the box)."],
    zh: [],
    ru: ["Коробку сломал он (дословно: он сломал коробку)."],
  },
  {
    type: "prose",
    en: ["## Names", "Names of people, places, and brands have no Hao-shuo-de form. They go in quotes, said the Mandarin way: \"Zhōngguó\" (China)."],
    zh: [],
    ru: ["## Имена", "У имён людей, мест и марок нет формы в Hǎo-shuō-de. Их пишут в кавычках и говорят по-китайски: «Zhōngguó» (Китай)."],
    tldr: {
      en: ["Names stay in Mandarin, in quotes."],
      zh: [],
      ru: ["Имена остаются китайскими, в кавычках."],
    },
    necessity: {
      en: ["Every trip and every introduction needs names."],
      zh: [],
      ru: ["Имена нужны в любой поездке и при любом знакомстве."],
    },
  },
  {
    type: "example",
    pinyin: "\"Zhōngguó\" {{word:hen3}} {{word:da4}}.",
    ttsText: "中国很大。",
    en: ["China is big."],
    zh: [],
    ru: ["Китай большой."],
  },
  {
    type: "prose",
    en: ["## What would push the frontier", "The vocabulary stays at 200 words or fewer, and {{dictionaryCount}} are in use, so a new word has to take an old one's place and earn it: it must say something nothing else can, or shorten many descriptions at once. Each word in the dictionary shows its necessity, from 5 (no sentence without it) to 1 (convenience only). Those numbers show which words hold the language up, and which could make room for a better one."],
    zh: [],
    ru: ["## Что отодвинуло бы границу", "В словаре не больше 200 слов, и {{dictionaryCount}} уже заняты, поэтому новое слово должно занять место старого и заслужить его: сказать то, чего не скажет ничто другое, или сразу сократить много описаний. У каждого слова в словаре указана его необходимость — от 5 (без него не построить предложение) до 1 (только для удобства). Эти числа показывают, на каких словах держится язык, а какие могли бы уступить место лучшему."],
    tldr: {
      en: ["A new word must say what nothing else can, or shorten many descriptions."],
      zh: [],
      ru: ["Новое слово должно сказать то, чего не скажет ничто другое, или сократить много описаний."],
    },
    necessity: {
      en: ["It explains how the dictionary grows, and why it stays small."],
      zh: [],
      ru: ["Это объясняет, как растёт словарь и почему он остаётся маленьким."],
    },
  },
];

export default content;
