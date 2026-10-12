// Word batch 3: Interacting, Existence, Possession, Life, Time, Space, Particles, Logic, Intensity (70 words).
// Claude's proposals for the author: a paraphrase in plain pinyin, a clumsy one, or an atom.
// Reviewed at /__review/?words=3.

export default {
  // -- Interacting with things (continued) -----------------------------------------------
  na2: { forms: ['ràng X zài wǒ shǒu-lǐ'], why: 'Let X be in my hand.' },
  kai1: { forms: ['ràng lǐ-miàn hé wài-miàn tōng'], why: 'Make the inside and the outside connect.' },
  guan1: { forms: ['ràng lǐ-miàn hé wài-miàn bù tōng'], why: 'Make the inside and the outside not connect.' },
  bang1: { forms: ['hé tā yī-qǐ zuò, ràng tā zuò-hǎo'], why: 'Do it together with them so they do it well.' },
  mai3: { forms: ['gěi jīn dé dōng-xi'], why: 'Give money, get a thing (already in the synonym data).' },
  jie2: { forms: ['ràng xiàn zài yī-qǐ, bù néng kāi'], why: 'Put threads together so they cannot open.' },

  // -- Existence & location --------------------------------------------------------------
  zai4: { forms: ['yǒu'], why: '"X zài Y" says the same as "Y yǒu X".' },
  shi4: {
    atom: {
      eng: 'The "is" that joins a thing to what it is; every other verb says more than that.',
      rus: 'Это «есть», которое связывает вещь с тем, что она такое; любой другой глагол говорит больше.',
    },
    why: 'The link verb.',
  },
  liu2: { forms: ['bù zǒu'], why: 'Not leave.' },

  // -- Possession ------------------------------------------------------------------------
  de2: { forms: ['cóng méi-yǒu dào yǒu'], why: 'From not having to having.' },
  you3: {
    atom: {
      eng: '"Have" and "there is" come before everything else you can say about a thing; zài and dé lean on it.',
      rus: '«Иметь» и «есть» стоят раньше всего, что можно сказать о вещи; на него опираются zài и dé.',
    },
    why: 'The root of existing.',
  },

  // -- Life and death --------------------------------------------------------------------
  si3: { forms: ['bù huó le'], why: 'No longer alive.' },
  huo2: {
    atom: {
      eng: 'Alive is lived, not described; sǐ and shēng are measured from it.',
      rus: 'Живое проживают, а не описывают; sǐ и shēng отмеряют от него.',
    },
    why: 'The root of life.',
  },
  sheng1: { forms: ['ràng X huó, cóng shēntǐ lǐ chū-lái'], why: 'Make X alive, out of the body.' },

  // -- Time ------------------------------------------------------------------------------
  tian1: {
    atom: {
      eng: 'A day is the round of light and dark you live through; no other word frames it.',
      rus: 'День — это круг света и темноты, который проживаешь; другое слово его не выразит.',
    },
    why: 'The basic unit of time; nián is twelve moons, zǎo and wǎn are the ends of it.',
  },
  nian2: { forms: ['shí-èr-ge yuè'], why: 'Twelve moons.' },
  dian3: { forms: ['hěn xiǎo-de bù-fen'], why: 'A very small part ("o\'clock" is a separate use).' },
  wan3: { forms: ['tiān-de hòu-miàn'], why: 'The back of the day.' },
  zao3: { forms: ['tiān-de qián-miàn'], why: 'The front of the day.' },

  // -- Place nouns & prepositions --------------------------------------------------------
  cong2: {
    forms: ['yǐ-qián zài X'],
    verdict: 'clumsy',
    note: 'It gives the start of a move but not the move itself.',
    why: '"From X" is "was at X before".',
  },
  dui4: { forms: ['zhēn', 'wǒ-de qián-miàn shì tā'], why: 'Correct is "true"; facing is "in front of me".' },
  di4: { forms: ['jiǎo xià-miàn-de dōng-xi'], why: 'What is under the feet.' },
  lu4: { forms: ['rén hé chē zǒu-de dì-fang'], why: 'Where people and cars go.' },
  wei4: { forms: ['gěi', 'duì'], why: 'For (both already in its own forms).' },
  ti4: { forms: ['X bù zuò, wǒ zuò'], why: 'X does not do it, I do.' },

  // -- Relative position -----------------------------------------------------------------
  hou4: {
    atom: {
      eng: 'Behind is learned from your own body, the side you cannot see; it stands beside qián, not under it.',
      rus: '«Зад» узнают по своему телу — сторона, которую не видишь; hòu стоит рядом с qián, а не под ним.',
    },
    why: 'Learned from the body, with qián as its partner.',
  },
  li3: {
    atom: {
      eng: 'Inside is learned from a box or a mouth: you put something in. Its opposite wài is "not lǐ".',
      rus: 'Внутреннее узнают по коробке или рту: туда что-то кладут. Противоположное wài — «не lǐ».',
    },
    why: 'The root of the inside/outside pair.',
  },
  pang2bian1: { forms: ['zuǒ-biān hé yòu-biān'], why: 'On the left and on the right.' },
  mian4: { forms: ['kàn-dào-de nà-yī-biān'], why: 'The side you see.' },
  bian1: { forms: ['bù shì zhōng-jiān-de dì-fang'], why: 'Not the middle.' },
  zhong1: { forms: ['zuì lǐ-miàn'], why: 'The most inside.' },
  jian1: { forms: ['zhōng'], why: 'Same as zhōng: the middle.' },
  qian2: {
    atom: {
      eng: 'Front is learned from your own body, the side you face; "where the eyes look" needs eyes and looking.',
      rus: '«Перед» узнают по своему телу — сторона, куда обращено лицо; «куда смотрят глаза» требует глаз и взгляда.',
    },
    why: 'Learned from the body, with hòu as its partner.',
  },
  shang4: { forms: ['tóu-de nà-biān'], why: 'The head side.' },
  xia4: { forms: ['jiǎo-de nà-biān'], why: 'The foot side.' },
  wai4: { forms: ['bù zài lǐ-miàn'], why: 'Not inside.' },
  yuan3: { forms: ['yào zǒu hěn duō lù'], why: 'You need to walk a lot of road.' },
  fu4jin4: { forms: ['bù yuǎn'], why: 'Not far.' },
  zuo3: { forms: ['xīn zài-de nà-biān'], why: 'The side where the heart is.' },
  dong1: { forms: ['rì chū-lái-de nà-biān'], why: 'The side where the sun comes out.' },
  xi1: { forms: ['rì xià-qù-de nà-biān'], why: 'The side where the sun goes down.' },
  fang1: { forms: ['biān'], why: 'Side.' },

  // -- Grammatical particles -------------------------------------------------------------
  ba3: {
    atom: {
      eng: 'A grammar word that brings the thing forward before the verb (bǎ yīfu fàng zài dì-shàng); there is nothing to say it with.',
      rus: 'Служебное слово, которое выводит вещь вперёд перед глаголом (bǎ yīfu fàng zài dì-shàng); сказать его нечем.',
    },
    why: 'Pure grammar.',
  },
  de: {
    atom: {
      eng: 'The little link between a describing part and the word it describes; it has no meaning apart from the link.',
      rus: 'Маленькая связка между описывающей частью и словом, которое она описывает; вне связки у неё нет значения.',
    },
    why: 'Pure grammar.',
  },
  le: {
    atom: {
      eng: 'Marks that something happened or changed; every way of saying it already needs the same idea.',
      rus: 'Показывает, что что-то случилось или изменилось; любой способ сказать это уже требует той же идеи.',
    },
    why: 'Pure grammar.',
  },
  ma: { forms: ['wǒ wèn, shì hái-shì bù shì'], why: 'I ask: yes or no.' },
  guo4: { forms: ['yǐ-qián zuò le'], why: 'Did it before.' },
  zhe3: { forms: ['zuò X-de rén'], why: 'The person who does X.' },
  zi: {
    atom: {
      eng: 'A light ending that makes a thing word (hái-zi, yàng-zi); it carries no meaning of its own.',
      rus: 'Лёгкое окончание, которое делает слово названием вещи (hái-zi, yàng-zi); собственного значения у него нет.',
    },
    why: 'Pure grammar.',
  },

  // -- Negation --------------------------------------------------------------------------
  bu4: {
    atom: {
      eng: 'The plain no; every other negation is built from it.',
      rus: 'Простое «нет»; любое другое отрицание строится из него.',
    },
    why: 'The root of negation.',
  },
  mei2: {
    forms: ['bù'],
    verdict: 'clumsy',
    note: 'Méi is bù for yǒu and for the past: said with bù, it would be wrong Mandarin.',
    why: 'Méi is a special bù.',
  },

  // -- Conjunction -----------------------------------------------------------------------
  dan4: {
    atom: {
      eng: 'Says that what follows goes against what you expect; there is no plainer word.',
      rus: 'Говорит, что следующее противоречит ожидаемому; слова проще нет.',
    },
    why: 'The "but" link.',
  },
  he2: {
    atom: {
      eng: 'Joins things in a list; it only works as a joint.',
      rus: 'Соединяет вещи в перечне; работает только как соединитель.',
    },
    why: 'The "and" link.',
  },
  ye3: { forms: ['hé bié-de yī-yàng'], why: 'The same as the other.' },
  you4: { forms: ['dì-èr-cì'], why: 'The second time.' },
  yin1wei4: { forms: ['Y shì X ràng-de'], why: 'Y is made by X.' },
  ru2guo3: {
    forms: ['X le jiù Y'],
    verdict: 'clumsy',
    note: 'It shows the pattern ("X le jiù Y") but not the "not yet, maybe".',
    why: 'If is a maybe; the form turns it into a fact.',
  },
  jiu4: { forms: ['hěn kuài'], why: 'Very soon.' },
  hai2: { forms: ['méi biàn', 'yě'], why: 'Has not changed; also.' },

  // -- Question words --------------------------------------------------------------------
  zen3me: { forms: ['yòng shénme fǎ'], why: 'By what way.' },
  na3: { forms: ['zhè hái-shì nà'], why: 'This or that.' },
  shei2: { forms: ['shénme rén'], why: 'What person.' },

  // -- Ability & possibility -------------------------------------------------------------
  neng2: { forms: ['yǒu lì zuò'], why: 'Has the strength to do it.' },
  hui4: { forms: ['yǐ-hòu', 'zhīdào zěnme zuò'], why: 'Later; or knowing how to do it.' },
  ke3: { forms: ['néng'], why: 'Same as néng.' },
  yi3: { forms: ['yòng'], why: 'With (already in its own forms).' },

  // -- Truth value -----------------------------------------------------------------------
  zhen1: { forms: ['shuō-de hé yǒu-de yī-yàng'], why: 'What is said is the same as what is.' },
  ding4: { forms: ['bù biàn'], why: 'Not changing.' },

  // -- Intensity -------------------------------------------------------------------------
  hen3: { forms: ['zhēn'], why: 'Same as zhēn (the data lists them as synonyms).' },
  zui4: { forms: ['bǐ bié-de dōu'], why: 'More than all the others (already in the synonym data).' },
};
