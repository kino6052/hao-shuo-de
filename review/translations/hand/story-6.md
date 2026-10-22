# The Ugly Duckling

- **English:** By the water, a mother duck had six ducklings. (Literally: "six little flying animals.") Five were yellow and pretty. One was big, dark, and ugly (literally: "not good-looking"). The other birds said: "You're so ugly! You're not like us!" They wouldn't play with him, and they pecked him too (literally: "hit him"). He was very unhappy, and went far away. Winter came. The water froze (literally: "became hard"). He was cold and had nothing to eat. Spring came (literally: "the time that turns warm"), and he had grown. He saw three big white birds on the water, so beautiful! (Swans.) He was scared, but he swam up to them. He thought: "They will peck me." He looked down at the water. In the water was a big white bird: it was him! He wasn't an ugly duckling. He was a swan! The other swans played with him, and he was very happy.
- **Level:** the whole dictionary
- **Model:** claude-opus-5-5 (by hand, subagents)
- **Form:** Hao-shuo-de words only in 28 of 28 sentences; 28 parse; the meant reading found in 28
- **Meaning:** 24 of 27 needed ideas kept, 0 added
- **Passes the bar (Q8):** no

## The text

Shuǐ pángbiān yǒu yī-ge fēi-de dòng-wù māma. Tā yǒu liù-ge xiǎo fēi-de dòng-wù. Wǔ-ge shì jīn-de yánsè-de, hěn hǎo-kàn. Yī-ge hěn dà, hěn hēi, yě hěn nán-kàn. Bié-de fēi-de dòng-wù shuō: Nǐ nán-kàn! Nǐ hé wǒ-men bù yī-yàng! Tā-men bù hé tā wánr, yě dǎ tā. Tā hěn bù kāi-xīn. Tā jiù qù le hěn yuǎn-de dì-fang. Lěng-de shí-jiān lái le. Shuǐ biàn yìng le. Tā hěn lěng, méi-yǒu chī-de. Biàn rè-de shí-jiān lái le. Tā biàn dà le. Tā kàn-dào sān-ge fēi-de dòng-wù. Tā-men zài shuǐ shàng, hěn dà, hěn bái. Tā-men zhēn hǎo-kàn! Tā hěn pà. Dàn-shì tā qù le tā-men pángbiān. Tā xiǎng: Tā-men huì dǎ wǒ. Tā kàn xià-miàn-de shuǐ. Shuǐ-lǐ yǒu yī-ge fēi-de dòng-wù. Tā yě hěn dà, hěn bái. Jiù-shì tā! Tā bù shì nán-kàn-de xiǎo fēi-de dòng-wù. Tā shì dà-de bái fēi-de dòng-wù! Nà sān-ge fēi-de dòng-wù hé tā wánr. Tā hěn kāi-xīn.

水 旁边 有 一-个 飞-的 动-物 妈妈. 他 有 六-个 小 飞-的 动-物. 五-个 是 金-的 颜色-的, 很 好-看. 一-个 很 大, 很 黑, 也 很 难-看. 别-的 飞-的 动-物 说: 你 难-看! 你 和 我-们 不 一-样! 他-们 不 和 他 玩儿, 也 打 他. 他 很 不 开-心. 他 就 去 了 很 远-的 地-方. 冷-的 十-间 来 了. 水 变 硬 了. 他 很 冷, 没-有 吃-的. 变 热-的 十-间 来 了. 他 变 大 了. 他 看-到 三-个 飞-的 动-物. 他-们 在 水 上, 很 大, 很 白. 他-们 真 好-看! 他 很 怕. 但-是 他 去 了 他-们 旁边. 他 想: 他-们 会 打 我. 他 看 下-面-的 水. 水-里 有 一-个 飞-的 动-物. 他 也 很 大, 很 白. 就-是 他! 他 不 是 难-看-的 小 飞-的 动-物. 他 是 大-的 白 飞-的 动-物! 那 三-个 飞-的 动-物 和 他 玩儿. 他 很 开-心.

## Sentence by sentence

1. **Shuǐ pángbiān yǒu yī-ge fēi-de dòng-wù māma.**
   - Hanzi: 水 旁边 有 一-个 飞-的 动-物 妈妈.
   - English: By the water there was a mother duck.
   - Literally: Beside the water there is a flying-animal mother.
   - Source: adapted from the book's sentence for this idea (kb_memory 69%, lesson none: 'Zài shuǐ pángbiān, yī-ge fēi-de dòng-wù-de jiā-lǐ yǒu le liù-ge xiǎo fēi-de dòng-wù.', 16 words), split in two; the mother named fēi-de dòng-wù māma (fēi-de dòng-wù is the form of 鸟 bird, lesson direction-and-result)
   - Ideas: i1
   - Check: parses (74 readings); the meant reading is one of them; 10 words
   - Gloss: water side to have one-universal classifier to fly-possessive marker to move-thing mom.
   - The blind reader: Beside the water there is a mother bird (a 'flying animal mother').
2. **Tā yǒu liù-ge xiǎo fēi-de dòng-wù.**
   - Hanzi: 他 有 六-个 小 飞-的 动-物.
   - English: She had six ducklings.
   - Literally: She has six little flying animals.
   - Source: the second half of the same book sentence, with the text's own literal 'six little flying animals'
   - Ideas: i2
   - Check: parses (6 readings); the meant reading is one of them; 9 words
   - Gloss: he to have six-universal classifier little to fly-possessive marker to move-thing.
   - The blind reader: She has six little birds (chicks).
3. **Wǔ-ge shì jīn-de yánsè-de, hěn hǎo-kàn.**
   - Hanzi: 五-个 是 金-的 颜色-的, 很 好-看.
   - English: Five were yellow and pretty.
   - Literally: Five are of the gold colour, very good-looking.
   - Source: the book's sentence, as it is (kb_memory 36%, the first half of its item); jīn-de yánsè is the form of 黄色 yellow
   - Ideas: i3
   - Check: parses (117 readings); the meant reading is one of them; 10 words
   - Gloss: five-universal classifier to be money-possessive marker color-possessive marker, very good-to look at.
   - The blind reader: Five of them are gold-colored and very good-looking.
4. **Yī-ge hěn dà, hěn hēi, yě hěn nán-kàn.**
   - Hanzi: 一-个 很 大, 很 黑, 也 很 难-看.
   - English: One was big, dark and ugly.
   - Literally: One is very big, very black, and also very ugly-looking.
   - Source: adapted from the second half of the same book item ('Yī-ge hěn dà, shì hēi-sè-de, bù hǎo-kàn.'): hěn hēi for dark (kb_lookup: 'Wài-miàn hěn hēi.', It's dark outside) and nán-kàn, the gloss of 丑 and 难看 (ugly), which the book's next sentence uses too
   - Ideas: i4
   - Check: parses (4 readings); the meant reading is one of them; 10 words
   - Gloss: one-universal classifier very big, very black, also very difficult-to look at.
   - The blind reader: One is very big, very black, and also very ugly.
5. **Bié-de fēi-de dòng-wù shuō: Nǐ nán-kàn!**
   - Hanzi: 别-的 飞-的 动-物 说: 你 难-看!
   - English: The other birds said: 'You're ugly!'
   - Literally: The other flying animals say: you are ugly!
   - Source: the book's sentence (kb_memory 50%, 'Bié-de fēi-de dòng-wù shuō: Nǐ zhēn nán-kàn!') without zhēn: with it the sentence has over 500 readings, without it 349
   - Ideas: i5
   - Check: parses (349 readings); the meant reading is one of them; 10 words
   - Gloss: other-possessive marker to fly-possessive marker to move-thing to communicate: you difficult-to look at!
   - The blind reader: The other birds say: You are ugly!
6. **Nǐ hé wǒ-men bù yī-yàng!**
   - Hanzi: 你 和 我-们 不 一-样!
   - English: You're not like us!
   - Literally: You and we are not the same!
   - Source: the second half of the same book item, as it is
   - Ideas: i6
   - Check: parses (32 readings); the meant reading is one of them; 7 words
   - Gloss: you and I-more than one person not one-look!
   - The blind reader: You are not the same as us!
7. **Tā-men bù hé tā wánr, yě dǎ tā.**
   - Hanzi: 他-们 不 和 他 玩儿, 也 打 他.
   - English: They wouldn't play with him, and they pecked him too.
   - Literally: They don't play with him, and also hit him.
   - Source: the book's sentence, as it is (kb_memory 33%); dǎ is the text's own literal 'hit him'
   - Ideas: i7, i8
   - Check: parses (6 readings); the meant reading is one of them; 9 words
   - Gloss: he-more than one person not and he to play, also to hit he.
   - The blind reader: They don't play with him, and they also hit him.
8. **Tā hěn bù kāi-xīn.**
   - Hanzi: 他 很 不 开-心.
   - English: He was very unhappy.
   - Literally: He is very not happy.
   - Source: the first half of the book's 'Tā hěn bù kāi-xīn, jiù qù le hěn yuǎn-de dì-fang.' (kb_memory 100%), split: whole, it is 13 words and its meant reading is not among its first 500
   - Ideas: i9
   - Check: parses (6 readings); the meant reading is one of them; 5 words
   - Gloss: he very not to open-heart.
   - The blind reader: He is very unhappy.
9. **Tā jiù qù le hěn yuǎn-de dì-fang.**
   - Hanzi: 他 就 去 了 很 远-的 地-方.
   - English: So he went far away.
   - Literally: He then went to a very far place.
   - Source: the second half of the same book sentence, with tā before it
   - Ideas: i10
   - Check: parses (288 readings); the meant reading is one of them; 9 words
   - Gloss: he then to go perfective aspect marker very far-possessive marker floor-side.
   - The blind reader: So he went to a very far-away place.
10. **Lěng-de shí-jiān lái le.**
   - Hanzi: 冷-的 十-间 来 了.
   - English: Winter came.
   - Literally: The cold time came.
   - Source: the book's sentence, as it is (kb_memory 50%); lěng-de shí-jiān is the form of 冬天 winter (lesson how-much)
   - Ideas: i11
   - Check: parses (26 readings); the meant reading is one of them; 6 words
   - Gloss: cold-possessive marker ten-between to come perfective aspect marker.
   - The blind reader: The cold time (winter) came.
11. **Shuǐ biàn yìng le.**
   - Hanzi: 水 变 硬 了.
   - English: The water froze.
   - Literally: The water became hard.
   - Source: the book's sentence, as it is (kb_memory 50%); the form of 冻 freeze is lěng dào biàn yìng
   - Ideas: i12
   - Check: parses (6 readings); the meant reading is one of them; 4 words
   - Gloss: water to become hard perfective aspect marker.
   - The blind reader: The water became hard (it froze).
12. **Tā hěn lěng, méi-yǒu chī-de.**
   - Hanzi: 他 很 冷, 没-有 吃-的.
   - English: He was cold and had nothing to eat.
   - Literally: He is very cold, has no things to eat.
   - Source: the book's sentence, as it is (kb_memory 50%)
   - Ideas: i13, i14
   - Check: parses (50 readings); the meant reading is one of them; 7 words
   - Gloss: he very cold, negative particle used exclusively to negate the verb you (to form meiyou)-to have to eat-possessive marker.
   - The blind reader: He was very cold and had nothing to eat.
13. **Biàn rè-de shí-jiān lái le.**
   - Hanzi: 变 热-的 十-间 来 了.
   - English: Spring came.
   - Literally: The time that turns hot came.
   - Source: the first half of the book's 'Biàn rè-de shí-jiān lái le, tā yě biàn dà le.' (kb_memory 50%), split: whole, it is 12 words with over 500 readings
   - Ideas: i15
   - Check: parses (185 readings); the meant reading is one of them; 7 words
   - Gloss: to become hot-possessive marker ten-between to come perfective aspect marker.
   - The blind reader: The time when it becomes hot (spring or summer) came.
14. **Tā biàn dà le.**
   - Hanzi: 他 变 大 了.
   - English: He had grown.
   - Literally: He became big.
   - Source: the second half of the same book sentence; biàn dà is the form of 长 grow ('Zhè-ge dòng-wù biàn dà le.', lesson becoming-and-making)
   - Ideas: i16
   - Check: parses (5 readings); the meant reading is one of them; 4 words
   - Gloss: he to become big perfective aspect marker.
   - The blind reader: He grew big.
15. **Tā kàn-dào sān-ge fēi-de dòng-wù.**
   - Hanzi: 他 看-到 三-个 飞-的 动-物.
   - English: He saw three birds.
   - Literally: He sees three flying animals.
   - Source: adapted from the book's 'Tā kàn-dào shuǐ-shàng yǒu sān-ge dà-de bái-sè fēi-de dòng-wù, zhēn hǎo-kàn!' (kb_memory 75%, 18 words), split in three
   - Ideas: i17
   - Check: parses (328 readings); the meant reading is one of them; 9 words
   - Gloss: he to look at-to arrive three-universal classifier to fly-possessive marker to move-thing.
   - The blind reader: He saw three birds.
16. **Tā-men zài shuǐ shàng, hěn dà, hěn bái.**
   - Hanzi: 他-们 在 水 上, 很 大, 很 白.
   - English: They were on the water, big and white.
   - Literally: They are on the water, very big, very white.
   - Source: the second part of that split, built like sentence 4: who, then describing words joined by commas
   - Ideas: i17
   - Check: parses (6 readings); the meant reading is one of them; 9 words
   - Gloss: he-more than one person to exist at water up, very big, very white.
   - The blind reader: They were on the water, very big and very white.
17. **Tā-men zhēn hǎo-kàn!**
   - Hanzi: 他-们 真 好-看!
   - English: They were so beautiful!
   - Literally: They are really good-looking!
   - Source: the end of the same book sentence (zhēn hǎo-kàn), with tā-men
   - Ideas: i18
   - Check: parses (21 readings); the meant reading is one of them; 5 words
   - Gloss: he-more than one person true good-to look at!
   - The blind reader: They were really beautiful!
18. **Tā hěn pà.**
   - Hanzi: 他 很 怕.
   - English: He was scared.
   - Literally: He is very afraid.
   - Source: adapted from the book's 'Tā pà, dàn-shì tā qù le tā-men pángbiān.' (kb_memory 62%), split
   - Ideas: i20
   - Check: parses (2 readings); the meant reading is one of them; 3 words
   - Gloss: he very to fear.
   - The blind reader: He was very afraid.
19. **Dàn-shì tā qù le tā-men pángbiān.**
   - Hanzi: 但-是 他 去 了 他-们 旁边.
   - English: But he swam up to them.
   - Literally: But he went to their side.
   - Source: the second half of the same book sentence, as it is
   - Ideas: i21
   - Check: parses (2 readings); the meant reading is one of them; 8 words
   - Gloss: but-to be he to go perfective aspect marker he-more than one person side.
   - The blind reader: But he went over beside them.
20. **Tā xiǎng: Tā-men huì dǎ wǒ.**
   - Hanzi: 他 想: 他-们 会 打 我.
   - English: He thought: 'They will peck me.'
   - Literally: He thinks: they will hit me.
   - Source: the book's 'Tā jué-de: Tā-men huì dǎ wǒ.' (kb_memory 62%) with xiǎng, kb_lookup's gloss of think (想, 认为)
   - Ideas: i22
   - Check: parses (6 readings); the meant reading is one of them; 7 words
   - Gloss: he to think: he-more than one person will to hit I.
   - The blind reader: He thought: They will hit me.
21. **Tā kàn xià-miàn-de shuǐ.**
   - Hanzi: 他 看 下-面-的 水.
   - English: He looked down at the water.
   - Literally: He looks at the water below.
   - Source: the book's sentence, as it is (kb_memory 43%)
   - Ideas: i23
   - Check: parses (26 readings); the meant reading is one of them; 6 words
   - Gloss: he to look at down-side-possessive marker water.
   - The blind reader: He looked at the water below.
22. **Shuǐ-lǐ yǒu yī-ge fēi-de dòng-wù.**
   - Hanzi: 水-里 有 一-个 飞-的 动-物.
   - English: In the water there was a bird.
   - Literally: In the water there is a flying animal.
   - Source: adapted from the book's 'Shuǐ-lǐ yǒu yī-ge dà-de bái-sè fēi-de dòng-wù: shì tā!' (kb_memory 57%), split in three
   - Ideas: i24
   - Check: parses (106 readings); the meant reading is one of them; 9 words
   - Gloss: water-inside to have one-universal classifier to fly-possessive marker to move-thing.
   - The blind reader: In the water there was a bird.
23. **Tā yě hěn dà, hěn bái.**
   - Hanzi: 他 也 很 大, 很 白.
   - English: It was big and white too.
   - Literally: It also is very big, very white.
   - Source: built like sentence 16, with yě: like the three birds
   - Ideas: i24
   - Check: parses (2 readings); the meant reading is one of them; 6 words
   - Gloss: he also very big, very white.
   - The blind reader: It was also very big and very white.
24. **Jiù-shì tā!**
   - Hanzi: 就-是 他!
   - English: It was him!
   - Literally: It is just him!
   - Source: the book's sentence 'Jiù-shì tā!' (It's him!, kb_memory 67%), as it is
   - Ideas: i25
   - Check: parses (4 readings); the meant reading is one of them; 3 words
   - Gloss: then-to be he!
   - The blind reader: It was him! (The bird in the water was himself, his reflection.)
25. **Tā bù shì nán-kàn-de xiǎo fēi-de dòng-wù.**
   - Hanzi: 他 不 是 难-看-的 小 飞-的 动-物.
   - English: He wasn't an ugly duckling.
   - Literally: He is not an ugly little flying animal.
   - Source: built from the grammar (bu-shi-not) with the ducklings' name from sentence 2 and nán-kàn from sentence 4
   - Ideas: i26
   - Check: parses (90 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10); too long: the description "tā bù shì nán-kàn-de xiǎo fēi-de dòng-wù" is 11 words (limit 10)
   - Gloss: he not to be difficult-to look at-possessive marker little to fly-possessive marker to move-thing.
   - The blind reader: He is not an ugly little bird.
26. **Tā shì dà-de bái fēi-de dòng-wù!**
   - Hanzi: 他 是 大-的 白 飞-的 动-物!
   - English: He was a swan!
   - Literally: He is a big white flying animal!
   - Source: built from the grammar (shi-copula); the swan described the way the text describes swans (big white birds; the book's own words are dà-de bái-sè fēi-de dòng-wù)
   - Ideas: i27, i19
   - Check: parses (4 readings); the meant reading is one of them; 9 words
   - Gloss: he to be big-possessive marker white to fly-possessive marker to move-thing!
   - The blind reader: He is a big white bird!
27. **Nà sān-ge fēi-de dòng-wù hé tā wánr.**
   - Hanzi: 那 三-个 飞-的 动-物 和 他 玩儿.
   - English: The other swans played with him.
   - Literally: Those three flying animals play with him.
   - Source: adapted from the book's 'Bié-de bái-sè fēi-de dòng-wù hé tā yī-qǐ wánr, tā hěn kāi-xīn.' (kb_memory 83%), split; nà sān-ge points back at the three swans of sentence 15
   - Ideas: i28
   - Check: parses (235 readings); the meant reading is one of them; 10 words
   - Gloss: that three-universal classifier to fly-possessive marker to move-thing and he to play.
   - The blind reader: Those three birds played with him.
28. **Tā hěn kāi-xīn.**
   - Hanzi: 他 很 开-心.
   - English: He was very happy.
   - Literally: He is very happy.
   - Source: the end of the same book sentence
   - Ideas: i29
   - Check: parses (6 readings); the meant reading is one of them; 4 words
   - Gloss: he very to open-heart.
   - The blind reader: He was very happy.

## Sketch and loss report

- i1 (needed) A mother duck was by the water -- **weaker**: Reader got a mother bird (a 'flying animal mother') by the water but not a duck; says the kind of bird is never stated
- i2 (needed) She had six ducklings (six little birds) [after i1, she is i1's mother] -- **kept**
- i3 (needed) Five of them were yellow and pretty [of i2] -- **kept**
- i4 (needed) One was big, dark and ugly (not good-looking) [but, of i2, against i3] -- **kept**
- i5 (needed) The other birds said to him: you are so ugly [because of i4] -- **kept**
- i6 (needed) They said: you are not like us [and, after i5] -- **kept**
- i7 (needed) They would not play with him [after i6] -- **kept**
- i8 (needed) They pecked (hit) him too [and also, with i7] -- **kept**
- i9 (needed) He was very unhappy [because of i5 to i8] -- **kept**
- i10 (needed) He went far away [so, because of i9] -- **kept**
- i11 (needed) Winter came [then, after i10] -- **kept**
- i12 (colour) The water froze (became hard) [in i11] -- **kept**
- i13 (needed) He was cold [in i11] -- **kept**
- i14 (needed) He had nothing to eat [and, with i13] -- **kept**
- i15 (needed) Spring came (the time that turns warm) [then, after i11] -- **weaker**: Reader read 'the time when it becomes hot' and was unsure whether it meant spring or summer
- i16 (needed) He had grown (bigger) [by i15] -- **kept**
- i17 (needed) He saw three big white birds on the water [then] -- **kept**
- i18 (needed) They were very beautiful [of i17] -- **kept**
- i19 (colour) Those birds were swans [names i17] -- **weaker**: Birds are never named; reader only guessed they could be swans or geese
- i20 (needed) He was scared [because of i22] -- **kept**
- i21 (needed) But he swam up to them [but, in spite of i20] -- **kept**
- i22 (needed) He thought: they will peck me [why i20] -- **kept**
- i23 (needed) He looked down at the water [then] -- **kept**
- i24 (needed) In the water there was a big white bird [what he saw in i23] -- **kept**
- i25 (needed) That bird was him (his own picture in the water) [i24 is] -- **kept**
- i26 (needed) He was not an ugly duckling [because of i25] -- **kept**
- i27 (needed) He was a swan [but, instead of i26] -- **weaker**: Reader understood he is a big white bird like the others, but not that he is a swan; the kind of bird instead of the bird
- i28 (needed) The other swans played with him [after i27, against i7] -- **kept**
- i29 (needed) He was very happy [because of i28, against i9] -- **kept**

The blind reader's whole reading: A mother bird by the water has six chicks: five are golden and pretty, one is big, black and ugly. The others call him ugly and different, won't play with him and hit him, so he leaves unhappy and goes far away. He gets through a cold winter when the water freezes and he has nothing to eat. When the warm time comes he has grown big. He sees three big, beautiful white birds on the water and goes to them, though he is afraid they will hit him. Looking down into the water he sees his reflection: he is now a big white bird like them, not an ugly little one. The three birds play with him and he is happy. (unsure: Bird is my naming of 'fei-de dong-wu' (flying animal). The text never says what kind of bird. The big white birds on the water could be swans or geese, and the mother and chicks could be ducks or another water bird, but none of this is stated. 'Ta' could be he, she or it. I read the mother in s2 as 'she' and the odd chick as 'he'. S3: the gloss gives 'jin' as money, but 'jin-de yanse' reads as gold color (golden or yellow). S13: 'bian re-de shi-jian' (the time that becomes hot) could be spring or summer. S22-24: the text says only that there is a big white bird in the water and 'it is him'. I read that as his reflection. S9: 'jiu' read as 'so/then', meaning he left because he was unhappy.)

## Cast list

- bird: fēi-de dòng-wù
- mother duck: fēi-de dòng-wù māma
- duckling: xiǎo fēi-de dòng-wù
- winter: lěng-de shí-jiān
- spring: biàn rè-de shí-jiān
- swan: dà-de bái fēi-de dòng-wù

## Structures

- i1: svo, measure-word, de-modifier, owner-part (who-does-what, pointing, modifying-nouns, roles-of-a-word)
- i2: svo, measure-word, adjective-noun, de-modifier (who-does-what, pointing, modifying-nouns, modifying-nouns)
- i3: shi-copula, measure-word, de-modifier, hen-adjective, add-take (words-and-sentences, pointing, modifying-nouns, modifying-nouns, time-and-sums)
- i4: measure-word, hen-adjective, ye-also, add-take (pointing, modifying-nouns, also-and-all, time-and-sums)
- i5: speech-quote, de-modifier (questions, modifying-nouns)
- i6: he-and, bu-adjective (inside-a-sentence, how-much)
- i7: bu-negation, he-with (who-does-what, inside-a-sentence)
- i8: ye-also, svo, add-take (also-and-all, who-does-what, time-and-sums)
- i9: hen-adjective, bu-adjective (modifying-nouns, how-much)
- i10: jiu-then, le-done, de-modifier (linking-sentences, when-it-happens, modifying-nouns)
- i11: de-modifier, le-new-situation (modifying-nouns, moving)
- i12: bian-became, le-new-situation (becoming-and-making, moving)
- i13: hen-adjective (modifying-nouns)
- i14: mei-you-not-have, verb-de-thing, add-take (who-does-what, roles-of-a-word, time-and-sums)
- i15: bian-became, de-modifier, le-new-situation (becoming-and-making, modifying-nouns, moving)
- i16: bian-became, le-new-situation (becoming-and-making, moving)
- i17: svo, measure-word, de-modifier, place-li-shang, hen-adjective, add-take (who-does-what, pointing, modifying-nouns, where-it-is, modifying-nouns, time-and-sums)
- i18: zhen-really (how-much)
- i19: shi-copula, de-modifier, adjective-noun (words-and-sentences, modifying-nouns, modifying-nouns)
- i20: hen-adjective (modifying-nouns)
- i21: dan-shi-but, le-done, owner-part, men-plural (linking-sentences, when-it-happens, roles-of-a-word, pointing)
- i22: speech-quote, hui-will (questions, when-it-happens)
- i23: svo, de-modifier (who-does-what, modifying-nouns)
- i24: place-li-shang, svo, measure-word, de-modifier, ye-also, hen-adjective, add-take (where-it-is, who-does-what, pointing, modifying-nouns, also-and-all, modifying-nouns, time-and-sums)
- i25: jiu-then, shi-copula (linking-sentences, words-and-sentences)
- i26: bu-shi-not, de-modifier, adjective-noun (words-and-sentences, modifying-nouns, modifying-nouns)
- i27: shi-copula, de-modifier, adjective-noun (words-and-sentences, modifying-nouns, modifying-nouns)
- i28: measure-word, de-modifier, he-with (pointing, modifying-nouns, inside-a-sentence)
- i29: hen-adjective (modifying-nouns)

## Gaps

- swan: dà-de bái fēi-de dòng-wù -- No entry; kb_lookup offers only a wrong same-sense row (yī-dìng, definitely). Described as the text itself describes swans (big white birds); about 7 words, so said once and pointed back to with nà sān-ge fēi-de dòng-wù.
- duck (mother duck): fēi-de dòng-wù māma -- The form of 鸭子 is 9 words (zài shuǐ-lǐ zǒu-de fēi-de dòng-wù); for one mention the mother is a bird mother by the water, as the text's own literal note names the ducklings. The duck itself is weaker: a bird near water.
- duckling: xiǎo fēi-de dòng-wù -- No entry (kb_lookup's only row is a kind-of guess: meat). The text's own literal: six little flying animals.
- peck: dǎ -- No entry; kb_lookup's same-sense row (hěn duō dōng-xi zài yī-qǐ, a pile) is a false friend. The text's own literal: hit him.

## Notes

Reuse: kb_memory returns this story's own book sentences (lesson none, 33-100% shared), so most sentences adapt them and say so in source; long ones are split. Three of the book's sentences do not pass as they stand: 'Tā hěn bù kāi-xīn, jiù qù le hěn yuǎn-de dì-fang.' (its meant reading is not among its first 500: every early reading makes 'jiù qù le hěn yuǎn' a describing clause of dì-fang), 'Bié-de fēi-de dòng-wù shuō: Nǐ zhēn nán-kàn!' (over 500 readings; without zhēn 349, so 'so ugly' became 'ugly') and 'Biàn rè-de shí-jiān lái le, tā yě biàn dà le.' (over 500). Speech is written without quote marks, as the book does: with curly quotes kb_check_text joined the quote and the next sentence into one. Choices: nán-kàn (the gloss of ugly) rather than the literal bù hǎo-kàn, so the narrator and the other birds use the same word; xiǎng (the gloss of think) for the book's jué-de; 'swam up to them' is said as 'went to their side' on the water (guò-shuǐ, the form of 游, made the sentence 11-12 words), so the swimming is only implied. Sentence 25 is 11 words (one over the limit); I kept it to keep 'ugly duckling' whole. Tools: the brief's kb_lookup example uses 'query', but the argument is 'word'; kb_check_text suggests 'wǒ' for zìjǐ (self), which misleads; hái-zi shows its hanzi as 还-子. Glossary proposal: swan -> dà-de bái fēi-de dòng-wù: no entry, and the story itself calls swans big white birds; once per text, then point back (nà sān-ge fēi-de dòng-wù). Glossary proposal: duckling -> xiǎo fēi-de dòng-wù: no entry; the duck's form is 9 words. Glossary proposal: peck -> dǎ: no entry, and kb_lookup's same-sense row (a pile) is wrong. Glossary proposal: spring -> biàn rè-de shí-jiān: pairs with winter's form lěng-de shí-jiān; the dictionary's form nián-de dì-yī-bù-fen is 6 words and says nothing of warmth. Glossary proposal: unhappy -> bù kāi-xīn: kb_lookup has nothing for unhappy; bù and the gloss of happy, as the book says it (Tā hěn bù kāi-xīn). Translated before kb_memory hid the stories' own lines (HAOSHUODE_MEMORY_SKIP), so some sentences reuse the book's lines and the book overlap is higher than a fresh run would give.
