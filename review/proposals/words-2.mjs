// Word batch 2: Amount, Qualities, Mind, Speech, Actions (80 words).
// Claude's proposals for the author: a paraphrase in plain pinyin, a clumsy one, or an atom.
// Reviewed at /__review/?words=2.

export default {
  // -- Amount ----------------------------------------------------------------------------
  duo1: {
    atom: {
      eng: 'Many is felt by looking at a pile of things; its opposite shǎo is just "bù duō".',
      rus: 'Много чувствуют, глядя на кучу вещей; противоположное shǎo — просто «bù duō».',
    },
    why: 'The pair needs one root; many is the one you see.',
  },
  dou1: {
    forms: ['méi-yǒu yī-ge bù'],
    verdict: 'clumsy',
    note: 'It turns the sentence around ("none of them does not"), so it cannot sit where dōu sits.',
    why: 'All is "none is left out".',
  },
  shao3: { forms: ['bù duō'], why: 'The opposite of many.' },
  xie1: { forms: ['yǒu-de', 'yī-diǎn'], why: 'Some, a bit (both already in its own forms).' },
  zhi3: { forms: ['méi yǒu bié-de', 'jiù'], why: 'Only is "there is nothing else".' },

  // -- Good / bad ------------------------------------------------------------------------
  hao3: {
    atom: {
      eng: 'Good is felt: what helps and what you like. Words like "useful" or "nice" are only neighbours.',
      rus: 'Хорошее чувствуют: то, что помогает и нравится. «Полезный» и «приятный» лишь соседи по смыслу.',
    },
    why: 'The root of judging; huài is "bù hǎo".',
  },
  huai4: { forms: ['bù hǎo'], why: 'Not good.' },
  nan2: { forms: ['bù hǎo zuò'], why: 'Not good to do; nán-kàn is "bù hǎo kàn".' },

  // -- Colour ----------------------------------------------------------------------------
  bai2: { forms: ['yá-de yánsè'], why: 'The colour of teeth (the data already says "wǒ-de yá hěn bái").' },
  se4: { forms: ['yánsè'], why: 'Same as yánsè.' },
  hei1: { forms: ['wǎn-shang tiān-de yánsè'], why: 'The colour of the night sky.' },
  hong2: { forms: ['huǒ-de yánsè'], why: 'The colour of fire.' },
  yan2se4: {
    forms: ['bái, hēi, hóng zhè-yàng-de'],
    verdict: 'clumsy',
    note: 'A list of examples cannot take its place; colour is the idea behind them.',
    why: 'The colours are said by things (fire, teeth, night), so the idea of colour stays.',
  },

  // -- Other quality ---------------------------------------------------------------------
  lao3: { forms: ['huó le hěn duō nián'], why: 'Lived many years.' },
  luan4: { forms: ['dōng-xi bù zài tā-de dì-fang'], why: 'Things are not where they belong.' },
  kuai4: { forms: ['hěn zǎo dào'], why: 'Arrives early.' },

  // -- Temperature & taste ---------------------------------------------------------------
  re4: {
    atom: {
      eng: 'Hot is felt on the skin; "like fire" needs something already hot, and its partner lěng is felt the same way.',
      rus: 'Горячее чувствуют кожей; «как огонь» уже предполагает горячее, а парное lěng чувствуется так же.',
    },
    why: 'Felt, with lěng as its partner.',
  },
  leng3: {
    atom: {
      eng: 'Cold is felt on the skin and is not "not hot" (warm water is neither); it stands beside rè, not under it.',
      rus: 'Холодное чувствуют кожей, и это не «не горячее» (тёплая вода ни то ни другое); lěng стоит рядом с rè, а не под ним.',
    },
    why: 'Felt, with rè as its partner.',
  },
  tian2: {
    atom: {
      eng: 'A taste: you learn sweet by tasting it; the other words only point back to that taste.',
      rus: 'Вкус: сладкое узнают, попробовав; другие слова лишь указывают на этот вкус.',
    },
    why: 'Taste is grounded in the mouth.',
  },
  tong4: {
    atom: {
      eng: 'A feeling in the body, learned by hurting; no description makes someone feel it.',
      rus: 'Ощущение в теле, которое узнают, когда больно; никакое описание не даёт его почувствовать.',
    },
    why: 'Pain is felt.',
  },

  // -- Physical property -----------------------------------------------------------------
  ying4: { forms: ['yòng shǒu mō, tā bù biàn'], why: 'When you touch it, it does not change.' },
  kong1: { forms: ['lǐ-miàn méi-yǒu dōng-xi'], why: 'Nothing inside.' },
  yuan2: { forms: ['hé qiú yī-yàng'], why: 'Like a ball; round and ball say each other, so one of them stays.' },
  ming2: { forms: ['hé rì yī-yàng'], why: 'Like the sun.' },
  zhong4: { forms: ['ná-qǐ-lái, yào hěn duō lì'], why: 'Picking it up takes a lot of strength.' },
  gan1jing4: { forms: ['méi-yǒu huài dōng-xi zài shàng-miàn'], why: 'No bad things on it.' },
  ping2: { forms: ['hé dì yī-yàng'], why: 'Like the floor.' },

  // -- Size ------------------------------------------------------------------------------
  xiao3: { forms: ['bù dà'], why: 'Not big.' },
  da4: {
    atom: {
      eng: 'Size is seen by comparing two things; nothing else gives the idea. Its opposite xiǎo is just "bù dà".',
      rus: 'Размер видят, сравнивая два предмета; иначе идею не передать. Противоположное xiǎo — просто «bù dà».',
    },
    why: 'The pair needs one root; big is the one you compare with.',
  },
  gao1: { forms: ['cóng dì dào shàng-miàn hěn cháng'], why: 'A long way from the floor to the top.' },
  chang2: { forms: ['cóng zhè-biān dào nà-biān hěn yuǎn'], why: 'Far from this end to that end.' },

  // -- Will and feelings -----------------------------------------------------------------
  yao4: {
    atom: {
      eng: 'Wanting is felt from inside; xiǎng and jué-de lean on it, not the other way round.',
      rus: 'Желание чувствуют изнутри; xiǎng и jué-de опираются на него, а не наоборот.',
    },
    why: 'The root of wanting.',
  },
  ai4: { forms: ['hěn xiǎng ràng tā hǎo'], why: 'Wanting very much that it goes well for them.' },
  pa4: {
    forms: ['bù xiǎng zài tā fùjìn'],
    verdict: 'clumsy',
    note: 'It says what a frightened person does, not what the feeling is.',
    why: 'Fear is a feeling; wanting to stay away is only what it looks like.',
  },
  xiao4: { forms: ['kāi-xīn shí, kǒu kāi le, yǒu shēngyīn'], why: 'When happy, the mouth opens and there is sound.' },
  xie4: { forms: ['shuō nǐ duì wǒ hǎo'], why: 'Saying "you were good to me".' },

  // -- Cognition -------------------------------------------------------------------------
  jue2: {
    atom: {
      eng: 'Feeling is inside the body or mind; the other words for it (xiǎng) point back to it.',
      rus: 'Чувство — внутри тела или ума; другие слова для него (xiǎng) указывают обратно на него.',
    },
    why: 'The root of feeling.',
  },
  zhi1dao4: { forms: ['xué-guò, hái jì-de'], why: 'Learned it and still remember it.' },
  xue2: { forms: ['cóng bié-rén nà-lǐ dé-dào zhīdào'], why: 'Getting knowing from someone else; xué and zhīdào say each other, so one of them stays.' },
  suan4: { forms: ['yòng shù kàn yǒu duō-shǎo'], why: 'Using numbers to see how many.' },
  xiang3: { forms: ['zài xīn-lǐ zhǎo', 'yào'], why: 'Think is looking in the heart; want is yào.' },
  ji4: { forms: ['hái zài xīn-lǐ'], why: 'Still in the heart.' },

  // -- Perception ------------------------------------------------------------------------
  kan4: { forms: ['yòng yǎnjing'], why: 'With the eyes.' },
  ting1: { forms: ['yòng ěrduo'], why: 'With the ears.' },
  jian4: { forms: ['kàn-dào'], why: 'Caught with the eyes.' },

  // -- Speech ----------------------------------------------------------------------------
  shuo1: { forms: ['yòng kǒu ràng bié-rén tīng-dào cí'], why: 'With the mouth, let others hear words.' },
  xie3: { forms: ['yòng shǒu zuò zì'], why: 'With the hand, make characters.' },
  wen4: { forms: ['shuō wǒ bù zhīdào-de, ràng tā shuō'], why: 'Say what I do not know and let them speak.' },
  jiao4: { forms: ['yòng kǒu ràng tā lái'], why: 'With the mouth, make them come.' },
  hua4: { forms: ['shuō-de cí'], why: 'The words said.' },

  // -- Actions: use, phase, daily --------------------------------------------------------
  yong4: { forms: ['ná lái zuò'], why: 'Take it to do something.' },
  kai1shi3: { forms: ['cóng bù zuò dào zuò'], why: 'From not doing to doing.' },
  wan2: { forms: ['méi-yǒu le'], why: 'None left.' },
  deng3: { forms: ['zài zhè-lǐ, yào tā lái, wǒ bù zǒu'], why: 'Stay here, want them to come, not leave.' },
  shui4jiao4: { forms: ['tǎng-xià, bù kàn bù tīng bù dòng'], why: 'Lie down and do not see, hear or move.' },
  chi1: { forms: ['ná dōng-xi fàng-jìn kǒu-lǐ'], why: 'Put a thing in the mouth.' },
  he1: { forms: ['ràng shuǐ jìn kǒu-lǐ'], why: 'Let water into the mouth.' },
  wan2r: { forms: ['bù zuò gōng, zhǐ yào kāi-xīn'], why: 'Not working, only wanting to be happy.' },

  // -- Motion ----------------------------------------------------------------------------
  lai2: { forms: ['dào wǒ zhè-lǐ'], why: 'To where I am.' },
  qu4: { forms: ['dào nà-lǐ'], why: 'To over there.' },
  dao4: { forms: ['zǒu-wán lù, zài nà-lǐ le'], why: 'Finished the road, and now there.' },
  dong4: { forms: ['bù zài yī-ge dì-fang'], why: 'Not staying in one place.' },
  jin4: { forms: ['dào lǐ-miàn qù'], why: 'Go to the inside.' },
  chu1: { forms: ['dào wài-miàn qù'], why: 'Go to the outside.' },
  hui2: { forms: ['dào yǐ-qián zài-guò-de dì-fang'], why: 'To the place I was before.' },
  qi3: { forms: ['cóng xià dào shàng'], why: 'From down to up.' },
  fei1: { forms: ['zài tiān-shàng zǒu'], why: 'Walk in the sky.' },
  zhan4: { forms: ['yòng jiǎo zài dì-shàng bù dòng'], why: 'On the feet, not moving.' },
  tang3: { forms: ['shēntǐ píng zài dì-shàng'], why: 'The body flat on the floor.' },
  tong1: { forms: ['cóng zhè-biān dào nà-biān dōu néng zǒu'], why: 'You can walk from this side to that side.' },
  zou3: { forms: ['yòng jiǎo qù', 'bù zài zhè-lǐ le'], why: 'Go with the feet; leave is "no longer here".' },

  // -- State change & general action -----------------------------------------------------
  bian4: { forms: ['hé yǐ-qián bù yī-yàng le'], why: 'No longer the same as before.' },
  fa1: { forms: ['ràng X chū-qù'], why: 'Let X go out.' },
  zuo4: {
    atom: {
      eng: '"Do" is what is left when you take the how away from every action word.',
      rus: '«Делать» — то, что остаётся, когда у каждого глагола действия убираешь «как».',
    },
    why: 'The root of all actions; "make" is a way of doing.',
  },
  rang4: {
    atom: {
      eng: '"Let" and "make" join a person to what happens (ràng tā jìn-lái); jiào and bāng are special cases of it.',
      rus: '«Пусть» и «заставь» связывают человека с тем, что происходит (ràng tā jìn-lái); jiào и bāng — его частные случаи.',
    },
    why: 'The cause word others lean on.',
  },

  // -- Interacting with things -----------------------------------------------------------
  da3: { forms: ['yòng lì ràng tā tòng'], why: 'Use force to make it hurt.' },
  gei3: { forms: ['ràng tā yǒu X'], why: 'Let them have X.' },
  mo1: { forms: ['yòng shǒu fàng zài tā shàng-miàn'], why: 'Put the hand on it.' },
  zhao3: { forms: ['xiǎng kàn-jiàn tā, kàn lái kàn qù'], why: 'Wanting to see it, looking here and there.' },
  fang4: { forms: ['ràng tā zài nà-lǐ'], why: 'Let it be there.' },
};
