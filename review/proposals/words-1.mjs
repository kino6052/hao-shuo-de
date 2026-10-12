// Word batch 1: Pointers, Places, Nature, Body, People, Food, Tools, Abstract words,
// Kind & Part, Sameness, Classifier and Numbers (80 words).
// Claude's proposals for the author: a paraphrase in plain pinyin, a clumsy one, or an atom.
// Reviewed at /__review/?words=1.

export default {
  // -- Pointers --------------------------------------------------------------------------
  wo3: {
    atom: {
      eng: 'You learn it by pointing at yourself; any other way of saying "I" already needs a pointer.',
      rus: 'Его усваивают, показывая на себя: любой другой способ сказать «я» уже требует указателя.',
    },
    why: 'The first pointer. "Shuō huà-de rén" (the one speaking) works for I, but you cannot learn wǒ from it.',
  },
  ni3: { forms: ['tīng wǒ shuō huà-de rén'], why: 'You are the one listening to me.' },
  ta1: {
    forms: ['bù shì wǒ yě bù shì nǐ de rén', 'bù shì wǒ yě bù shì nǐ de dōng-xi'],
    why: 'Neither me nor you; the second form covers "it".',
  },
  shen2me: { forms: ['wǒ bù zhīdào-de dōng-xi'], why: 'What is the thing I do not know.' },
  men: {
    forms: ['bù zhǐ yī-ge rén'],
    verdict: 'clumsy',
    note: 'It is an ending: the form says what it means but cannot take its place in wǒ-men.',
    why: 'An ending, not a thing; "more than one person" is its meaning, not a replacement.',
  },
  na4: {
    atom: {
      eng: '"That" is learned by pointing at what is away from you; it stands beside zhè, not under it.',
      rus: '«Тот» усваивают, показывая на то, что вдали; nà стоит рядом с zhè, а не под ним.',
    },
    why: 'Pointing, with zhè as its partner.',
  },
  zhe4: {
    atom: {
      eng: '"This" is learned by pointing at what is near you; "the near one" already needs "near".',
      rus: '«Этот» усваивают, показывая на то, что рядом; «ближний» уже требует «близко».',
    },
    why: 'Pointing, with nà as its partner.',
  },

  // -- Places ----------------------------------------------------------------------------
  jia1: { forms: ['wǒ shuìjiào-de dì-fang', 'bàba māma hé wǒ'], why: 'Home is where I sleep; family is dad, mom and me.' },
  guo2: { forms: ['hěn duō rén zài yī-qǐ-de dà dì-fang'], why: 'Many people together in a big place.' },
  fang2: {
    forms: ['jiā-lǐ-de yī-ge dì-fang', 'yǒu mén-de dà dōng-xi, rén zài lǐ-miàn'],
    why: 'A room is a part of the home; a house is a big thing with a door that people are inside.',
  },
  men2: { forms: ['kāi hé guān-de, rén jìn chū-de dōng-xi'], why: 'The thing you open and close to go in and out.' },

  // -- Things of nature ------------------------------------------------------------------
  ri4: { forms: ['tiān-shàng hěn míng, hěn rè-de dōng-xi'], why: 'The bright, hot thing in the sky.' },
  yue4: { forms: ['wǎn-shang tiān-shàng míng-de dōng-xi'], why: 'The bright thing in the night sky.' },
  zhi2wu4: { forms: ['huó-de, bù dòng-de dōng-xi'], why: 'Alive but does not move; animals are the alive things that do (dòng-wù).' },
  huo3: { forms: ['hěn rè, hěn míng, néng ràng dōng-xi biàn hēi-de dōng-xi'], why: 'Hot and bright, and it turns things black.' },
  qi4: { forms: ['kàn-bù-jiàn, rén bù néng méi-yǒu-de dōng-xi'], why: 'The thing you cannot see and cannot live without.' },

  // -- Body ------------------------------------------------------------------------------
  bi2zi: {
    atom: {
      eng: 'The nose is learned by pointing at it; "where air goes in" says what it does, not what it is.',
      rus: 'Нос усваивают, показывая на него; «куда входит воздух» говорит, что он делает, а не что это.',
    },
    why: 'A body part: pointed at, not described.',
  },
  yan3jing: {
    atom: {
      eng: 'The eye is learned by pointing at it; "the part that sees" leans on kàn, which is said with the eyes.',
      rus: 'Глаз усваивают, показывая на него; «часть, которая видит» опирается на kàn, а kàn объясняют через глаза.',
    },
    why: 'A body part: pointed at, not described.',
  },
  jiao3: {
    atom: {
      eng: 'The foot is learned by pointing at it; "the part that walks" only names what it does.',
      rus: 'Ступню усваивают, показывая на неё; «часть, которая ходит» называет лишь то, что она делает.',
    },
    why: 'A body part: pointed at, not described.',
  },
  kou3: {
    atom: {
      eng: 'The mouth is learned by pointing at it; eating and speaking are what it is for, not what it is.',
      rus: 'Рот усваивают, показывая на него; есть и говорить — для чего он нужен, а не что это.',
    },
    why: 'A body part: pointed at, not described.',
  },
  shen1ti3: {
    atom: {
      eng: 'The body is learned from your own; "a person from head to foot" already needs the head and the foot.',
      rus: 'Тело узнают по своему собственному; «человек от головы до ног» уже требует головы и ног.',
    },
    why: 'A body part: pointed at, not described.',
  },
  shou3: {
    atom: {
      eng: 'The hand is learned by pointing at it; "the part that holds things" names its use only.',
      rus: 'Руку усваивают, показывая на неё; «часть, которая держит вещи» называет лишь её применение.',
    },
    why: 'A body part: pointed at, not described.',
  },
  tou2: {
    atom: {
      eng: 'The head is learned by pointing at it; "the top of the body" needs the body.',
      rus: 'Голову усваивают, показывая на неё; «верх тела» требует тела.',
    },
    why: 'A body part: pointed at, not described.',
  },
  mao2: {
    atom: {
      eng: 'Hair is learned by seeing and touching it; "threads on the head" is only a picture of it.',
      rus: 'Волосы узнают, видя и трогая; «нити на голове» — лишь картинка.',
    },
    why: 'A body part: pointed at, not described.',
  },
  xin1: {
    atom: {
      eng: 'The heart is felt in the chest and is also the mind (kāi-xīn); no description of the organ carries both.',
      rus: 'Сердце чувствуют в груди, и оно же — ум (kāi-xīn); ни одно описание органа не передаёт оба значения.',
    },
    why: 'Both the organ and the mind, so it stays an atom.',
  },
  er3duo: {
    atom: {
      eng: 'The ear is learned by pointing at it; "the part that hears" leans on tīng, which is said with the ears.',
      rus: 'Ухо усваивают, показывая на него; «часть, которая слышит» опирается на tīng, а tīng объясняют через уши.',
    },
    why: 'A body part: pointed at, not described.',
  },
  ya2: {
    atom: {
      eng: 'Teeth are learned by pointing at them; "white, hard parts in the mouth" only says how they look.',
      rus: 'Зубы усваивают, показывая на них; «белые твёрдые части во рту» говорят лишь об их виде.',
    },
    why: 'A body part: pointed at, not described.',
  },
  du4zi: {
    atom: {
      eng: 'The belly is learned by pointing at it; "where the food goes" names its use only.',
      rus: 'Живот усваивают, показывая на него; «куда идёт еда» называет лишь его назначение.',
    },
    why: 'A body part: pointed at, not described.',
  },

  // -- People & kinship ------------------------------------------------------------------
  ren2: { forms: ['néng shuō huà, néng xiě zì-de dòng-wù'], why: 'The animal that speaks and writes.' },
  nv3: { forms: ['néng shēng hái-zi-de rén'], why: 'The person who can bear a child.' },
  guan1xi: { forms: ['X hé Y zhōng-jiān-de xiàn'], why: 'The thread between X and Y.' },
  ba4ba: {
    forms: ['shēng wǒ-de, bù shì nǚ-rén-de rén'],
    verdict: 'clumsy',
    note: '"Not a woman" says what dad is not, not what he is.',
    why: 'Dad is the parent who is not the one who gave birth; the form is a workaround.',
  },
  ma1ma: { forms: ['shēng wǒ-de nǚ-rén'], why: 'The woman who gave birth to me.' },

  // -- Food & drink ----------------------------------------------------------------------
  shui3: { forms: ['méi yǒu yánsè, hē-de dōng-xi'], why: 'The drink with no colour.' },
  fan4: { forms: ['chī-de dōng-xi', 'yī-cì chī-de'], why: 'What you eat; what you eat at one time.' },
  guo3: { forms: ['zhíwù shēng-de, néng chī-de dōng-xi'], why: 'What a plant bears, to eat.' },
  you2: {
    forms: ['zuò fàn yòng-de, hé shuǐ bù yī-yàng-de shuǐ'],
    verdict: 'clumsy',
    note: 'It says what oil is for and that it is not water, not how it feels.',
    why: 'The slippery feel needs touching.',
  },

  // -- Tools & objects -------------------------------------------------------------------
  ju4: { forms: ['yòng-de dōng-xi'], why: 'A thing to use.' },
  ji1: { forms: ['rén zuò-de, kāi le jiù dòng-de dōng-xi'], why: 'Made by people; it moves once it is on.' },
  deng1: { forms: ['jiā-lǐ-de xiǎo rì', 'kāi le jiù míng-de dōng-xi'], why: 'The small sun in the home (already in the synonym data); the thing that is bright once on.' },
  che1: { forms: ['rén zài lǐ-miàn, zài lù-shàng zǒu-de jī'], why: 'A machine that people are inside, going on the road.' },
  wang3: { forms: ['hěn duō xiàn yī-qǐ zuò-de dōng-xi, zhōng-jiān kōng-de'], why: 'Many threads together with empty spaces between.' },
  xian4: { forms: ['hěn cháng, hěn xiǎo, néng jié-de dōng-xi'], why: 'Long, thin, and you can tie it.' },
  bao1: { forms: ['lǐ-miàn néng fàng dōng-xi, néng ná-zǒu-de dōng-xi'], why: 'You put things in it and carry it away.' },
  liao4: { forms: ['zuò dōng-xi yòng-de dōng-xi'], why: 'What a thing is made from.' },
  jin1: { forms: ['mǎi dōng-xi yào gěi-de dōng-xi'], why: 'What you give to buy.' },
  yi1fu: { forms: ['shēntǐ-shàng, ràng shēntǐ bù lěng-de dōng-xi'], why: 'On the body, so it is not cold.' },
  wu4: { forms: ['dōng-xi'], why: 'Same as dōng-xi; they share one form.' },
  shu1: { forms: ['xiě le hěn duō zì, kàn-de dōng-xi'], why: 'Many characters written, to read.' },
  qiu2: { forms: ['yuán-de, wánr yòng-de dōng-xi'], why: 'The round thing for play; round and ball say each other, so one of them stays.' },

  // -- Abstract words --------------------------------------------------------------------
  ci2: { forms: ['huà-lǐ zuì xiǎo-de bù-fen'], why: 'The smallest part of speech.' },
  li4: { forms: ['shēntǐ-lǐ, néng ná zhòng dōng-xi-de dōng-xi'], why: 'What lets the body lift heavy things.' },
  sheng1yin1: { forms: ['ěrduo tīng-dào-de dōng-xi'], why: 'What the ears hear.' },
  jia4zhi2: { forms: ['mǎi tā yào gěi-de jīn-de duō-shǎo'], why: 'How much money you give to buy it.' },
  fa3: { forms: ['zěnme zuò'], why: 'How to do it.' },
  gong1: { forms: ['yòng lì zuò dōng-xi'], why: 'Using strength to make things.' },
  zi4: { forms: ['xiě-de cí'], why: 'A written word (already one of its own forms).' },
  ti2: { forms: ['wèn-de dōng-xi'], why: 'A thing you ask.' },
  shu4: { forms: ['duō-shǎo'], why: 'How many.' },

  // -- Kind & part -----------------------------------------------------------------------
  zhong3: { forms: ['yī-yàng-de dōng-xi'], why: 'The things that are the same.' },
  fen1: { forms: ['dōng-xi-de yī-diǎn'], why: 'A bit of a thing.' },
  yang4: { forms: ['zhǒng'], why: 'Same as zhǒng: a pair that says each other, so one of them stays.' },

  // -- Sameness & difference -------------------------------------------------------------
  bi3: {
    atom: {
      eng: 'A grammar word for comparing ("X bǐ Y dà"); any other way of comparing already needs a comparing word.',
      rus: 'Служебное слово сравнения («X bǐ Y dà»); любой другой способ сравнить уже требует слова сравнения.',
    },
    why: 'The "X bǐ Y adjective" pattern has no plainer wording.',
  },
  bie2: { forms: ['bù-tóng-de', 'bù yào'], why: 'Other is "not the same"; don\'t is "bù yào".' },
  tong2: { forms: ['yī-yàng', 'yī-qǐ'], why: 'Same, together.' },

  // -- Classifier ------------------------------------------------------------------------
  ge4: {
    atom: {
      eng: 'A counting word with no meaning of its own: it only joins a number to a thing, so nothing else can say it.',
      rus: 'Счётное слово без собственного значения: оно только соединяет число с предметом, поэтому другим словом его не сказать.',
    },
    why: 'Pure grammar.',
  },
  ci4: {
    atom: {
      eng: 'A counting word for how often: it counts happenings the way gè counts things, and has no plainer wording.',
      rus: 'Счётное слово для «сколько раз»: считает события так же, как gè считает предметы; проще его не сказать.',
    },
    why: 'Counts happenings.',
  },

  // -- Numbers ---------------------------------------------------------------------------
  yi1: {
    atom: {
      eng: 'You learn "one" by holding up a single thing; every other number is built from it.',
      rus: '«Один» усваивают на одном предмете; все остальные числа строятся из него.',
    },
    why: 'The unit; the rest of the numbers say themselves from it.',
  },
  liang3: { forms: ['yī hé yī'], why: 'One and one.' },
  hao4: {
    atom: {
      eng: 'A marker that turns a number into a name or a date (èr-hào); it exists only inside that pattern.',
      rus: 'Показатель, который превращает число в имя или дату (èr-hào); он существует только в этой конструкции.',
    },
    why: 'Pure grammar.',
  },
  san1: { forms: ['liǎng hé yī'], why: 'Two and one.' },
  si4: { forms: ['liǎng hé liǎng'], why: 'Two and two.' },
  wu3: { forms: ['sì hé yī'], why: 'Four and one.' },
  liu4: { forms: ['sān hé sān'], why: 'Three and three.' },
  qi1: { forms: ['liù hé yī'], why: 'Six and one.' },
  ba1: { forms: ['sì hé sì'], why: 'Four and four.' },
  jiu3: { forms: ['bā hé yī'], why: 'Eight and one.' },
  shi2: { forms: ['wǔ hé wǔ'], why: 'Five and five.' },
  er4: { forms: ['liǎng'], why: 'Same as liǎng; they share one form.' },
  ling2: { forms: ['méi-yǒu'], why: 'None.' },
};
