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
  na4: { forms: ['bù zài wǒ fùjìn-de'], why: 'The far one: not near me.' },
  zhe4: { forms: ['zài wǒ fùjìn-de'], why: 'The near one: near me.' },

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
  bi2zi: { forms: ['tóu-shàng, kǒu shàng-miàn, qì jìn chū-de bù-fen'], why: 'The part above the mouth where air goes in and out.' },
  yan3jing: { forms: ['kàn-de bù-fen'], why: 'The part that sees (already a synonym phrase in the data).' },
  jiao3: { forms: ['zǒu-lù-de bù-fen'], why: 'The part that walks.' },
  kou3: { forms: ['tóu-shàng, chī hē hé shuō-huà-de bù-fen', 'néng jìn chū-de kōng dì-fang'], why: 'The face part for eating, drinking and speaking; also any opening.' },
  shen1ti3: { forms: ['rén cóng tóu dào jiǎo'], why: 'A person from head to foot.' },
  shou3: { forms: ['ná dōng-xi-de bù-fen'], why: 'The part that holds things.' },
  tou2: { forms: ['shēntǐ zuì shàng-miàn-de bù-fen'], why: 'The top part of the body.' },
  mao2: { forms: ['tóu-shàng, shēntǐ-shàng-de xiàn'], why: 'The threads on the head and the body.' },
  xin1: {
    forms: ['shēntǐ lǐ-miàn, bù néng bù dòng-de dōng-xi'],
    verdict: 'clumsy',
    note: 'It is also the mind (kāi-xīn, xiǎo-xīn), which no description of the organ carries.',
    why: 'The organ is easy, the mind is not.',
  },
  er3duo: { forms: ['tīng-de bù-fen'], why: 'The part that hears.' },
  ya2: { forms: ['kǒu-lǐ, chī dōng-xi yòng-de, bái-de, yìng-de bù-fen'], why: 'White, hard parts in the mouth that we eat with.' },
  du4zi: { forms: ['shēntǐ zhōng-jiān, chī-de dōng-xi qù-de dì-fang'], why: 'Where the food goes.' },

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
