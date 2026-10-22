# Goldilocks and the Three Bears

- **English:** Three bears (literally: "big animals") lived in a house: a big one, a middle-sized one, and a little one. One day their porridge was too hot, so they went out to wait. A little girl with yellow hair came along. The door was open, so she went in. She tasted the big bear's porridge: too hot! She tasted the middle bear's: too cold! She tasted the little bear's: just right! And she ate it all up. She sat on the little bear's chair (literally: "sitting thing"), and the chair broke. She was sleepy, so she lay down in the little bear's bed. The three bears came home. The little bear said: "Who ate my porridge?" "Who broke my chair?" Then they found the girl asleep in the little bear's bed! The girl opened her eyes, got scared, ran out, and never came back.
- **Level:** the whole dictionary
- **Model:** claude-opus-5-5 (by hand, subagents)
- **Form:** Hao-shuo-de words only in 29 of 29 sentences; 29 parse; the meant reading found in 29
- **Meaning:** 21 of 23 needed ideas kept, 0 added
- **Passes the bar (Q8):** no

## The text

Sān-ge dà dòng-wù zài yī-ge jiā-lǐ huó. Yī-ge hěn dà, yī-ge bù dà yě bù xiǎo, yī-ge hěn xiǎo. Yǒu yī tiān, tā-men-de shuǐ duō-de fàn zhēn rè. Tā-men jiù chū-qù děng. Yǒu yī-ge xiǎo nǚ-hái-zi lái le. Tā-de tóu-fa shì jīn-de yánsè. Mén kāi le, tā jiù jìn-qù le. Tā chī le yī-diǎn dà dòng-wù-de fàn. Zhēn rè! Tā chī le yī-diǎn zhōng dòng-wù-de fàn. Zhēn lěng! Tā chī le yī-diǎn xiǎo dòng-wù-de fàn. Bù rè yě bù lěng, hěn hǎo! Tā bǎ fàn dōu chī-wán le. Xiǎo dòng-wù yǒu yī-ge dōng-xi. Zhè-ge dōng-xi ràng rén zuò-xià. Nǚ-hái-zi zuò-zài zhè-ge dōng-xi shàng. Zhè-ge dōng-xi jiù huài le. Xiǎo dòng-wù hái yǒu yī-ge shuìjiào-de dì-fang. Nǚ-hái-zi xiǎng shuìjiào. Tā jiù tǎng zài nà-lǐ. Sān-ge dà dòng-wù huí jiā le. Xiǎo dòng-wù shuō: Shéi chī le wǒ-de fàn? Shéi bǎ zhè-ge dōng-xi zuò huài le? Tā-men fā-xiàn le nǚ-hái-zi. Tā zài nà-lǐ shuìjiào! Nǚ-hái-zi bǎ yǎnjing kāi le. Tā pà le, kuài zǒu chū-qù le. Tā bù huí-lái le.

三-个 大 动-物 在 一-个 家-里 活. 一-个 很 大, 一-个 不 大 也 不 小, 一-个 很 小. 有 一 天, 他-们-的 水 多-的 饭 真 热. 他-们 就 出-去 等. 有 一-个 小 女-还-子 来 了. 他-的 头-发 是 金-的 颜色. 门 开 了, 他 就 进-去 了. 他 吃 了 一-点 大 动-物-的 饭. 真 热! 他 吃 了 一-点 中 动-物-的 饭. 真 冷! 他 吃 了 一-点 小 动-物-的 饭. 不 热 也 不 冷, 很 好! 他 把 饭 都 吃-完 了. 小 动-物 有 一-个 东-西. 这-个 东-西 让 人 做-下. 女-还-子 做-在 这-个 东-西 上. 这-个 东-西 就 坏 了. 小 动-物 还 有 一-个 睡觉-的 地-方. 女-还-子 想 睡觉. 他 就 躺 在 那-里. 三-个 大 动-物 回 家 了. 小 动-物 说: 谁 吃 了 我-的 饭? 谁 把 这-个 东-西 做 坏 了? 他-们 发-线 了 女-还-子. 他 在 那-里 睡觉! 女-还-子 把 眼睛 开 了. 他 怕 了, 快 走 出-去 了. 他 不 回-来 了.

## Sentence by sentence

1. **Sān-ge dà dòng-wù zài yī-ge jiā-lǐ huó.**
   - Hanzi: 三-个 大 动-物 在 一-个 家-里 活.
   - English: Three bears lived in a house.
   - Literally: Three big animals lived in a home.
   - Source: the first half of the book's own sentence for this story (kb_memory, 43% shared, lesson none), as it is
   - Ideas: i1
   - Check: parses (142 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: three-universal classifier big to move-thing to exist at one-universal classifier home-inside to live.
   - The blind reader: Three big animals lived in one home.
2. **Yī-ge hěn dà, yī-ge bù dà yě bù xiǎo, yī-ge hěn xiǎo.**
   - Hanzi: 一-个 很 大, 一-个 不 大 也 不 小, 一-个 很 小.
   - English: One was big, one was middle-sized, and one was little.
   - Literally: One very big, one not big and not small either, one very small.
   - Source: the second half of the same book sentence, adapted: hěn and yě added so each part is a clause (yī-ge dà-de, … does not parse as a list)
   - Ideas: i2
   - Check: parses (3 readings); the meant reading is one of them; 15 words; too long: 15 words (limit 10)
   - Gloss: one-universal classifier very big, one-universal classifier not big also not little, one-universal classifier very little.
   - The blind reader: One was very big, one was neither big nor small, and one was very small.
3. **Yǒu yī tiān, tā-men-de shuǐ duō-de fàn zhēn rè.**
   - Hanzi: 有 一 天, 他-们-的 水 多-的 饭 真 热.
   - English: One day their porridge was too hot.
   - Literally: There was a day, their much-water rice was really hot.
   - Source: the book's sentence for this story (kb_memory, 54% shared), adapted: yǒu yī tiān for yǒu yī-cì, the dictionary's form of 粥 (porridge: shuǐ duō-de fàn) for chī-de, and zhēn (the form of 太, too) for hěn
   - Ideas: i3
   - Check: parses (96 readings); the meant reading is one of them; 12 words; too long: 12 words (limit 10)
   - Gloss: to have one day, he-more than one person-possessive marker water many-possessive marker meal true hot.
   - The blind reader: One day their watery food (a soup or porridge) was really hot.
4. **Tā-men jiù chū-qù děng.**
   - Hanzi: 他-们 就 出-去 等.
   - English: So they went out to wait.
   - Literally: They then went out and waited.
   - Source: the end of the same book sentence (tā-men chū-qù děng) with jiù for so (jiu-then)
   - Ideas: i4
   - Check: parses (132 readings); the meant reading is one of them; 6 words
   - Gloss: he-more than one person then to go out-to go to wait.
   - The blind reader: So they went out to wait.
5. **Yǒu yī-ge xiǎo nǚ-hái-zi lái le.**
   - Hanzi: 有 一-个 小 女-还-子 来 了.
   - English: A little girl came along.
   - Literally: There was a little girl who came.
   - Source: the book's sentence for this story (kb_memory, 88% shared), adapted: the dictionary's girl (nǚ-hái-zi, kb_lookup gloss) for xiǎo nǚ-rén, and the hair moved to a sentence of its own
   - Ideas: i5
   - Check: parses (280 readings); the meant reading is one of them; 9 words
   - Gloss: to have one-universal classifier little female-still-a light ending that makes a thing word to come perfective aspect marker.
   - The blind reader: A little girl came.
6. **Tā-de tóu-fa shì jīn-de yánsè.**
   - Hanzi: 他-的 头-发 是 金-的 颜色.
   - English: Her hair was yellow.
   - Literally: Her hair was the colour of gold.
   - Source: the book's own pattern for a colour (Wǒ-de bāo shì jīn-de yánsè., lesson colors) with tóu-fa (hair, kb_lookup gloss)
   - Ideas: i5
   - Check: parses (41 readings); the meant reading is one of them; 8 words; too deep: 2 levels of describing phrases, clauses or quotes inside each other (limit 1)
   - Gloss: he-possessive marker head-to send out to be money-possessive marker color.
   - The blind reader: Her hair was the colour of gold.
7. **Mén kāi le, tā jiù jìn-qù le.**
   - Hanzi: 门 开 了, 他 就 进-去 了.
   - English: The door was open, so she went in.
   - Literally: The door was open, she then went in.
   - Source: the book's sentence for this story (kb_memory, 100% shared), with mén (door, kb_lookup gloss; Mén kāi le., lesson also-and-all) for kǒu
   - Ideas: i6, i7
   - Check: parses (72 readings); the meant reading is one of them; 8 words
   - Gloss: door to open perfective aspect marker, he then to enter-to go perfective aspect marker.
   - The blind reader: The door opened (or was open), and she went in.
8. **Tā chī le yī-diǎn dà dòng-wù-de fàn.**
   - Hanzi: 他 吃 了 一-点 大 动-物-的 饭.
   - English: She tasted the big bear's porridge.
   - Literally: She ate a little of the big animal's rice.
   - Source: the book's sentence for this story (Tā chī le dà dòng-wù-de chī-de: zhēn rè!, kb_memory 25%), split in two, with yī-diǎn for taste (the form of 尝 is chī yī-diǎn, kàn wèi-dào) and fàn for the porridge
   - Ideas: i8
   - Check: parses (46 readings); the meant reading is one of them; 10 words
   - Gloss: he to eat perfective aspect marker one-o'clock big to move-thing-possessive marker meal.
   - The blind reader: She ate a little of the big animal's food.
9. **Zhēn rè!**
   - Hanzi: 真 热!
   - English: Too hot!
   - Literally: Really hot!
   - Source: the second half of the same book sentence, as it is
   - Ideas: i8
   - Check: parses (2 readings); the meant reading is one of them; 2 words
   - Gloss: true hot!
   - The blind reader: Really hot!
10. **Tā chī le yī-diǎn zhōng dòng-wù-de fàn.**
   - Hanzi: 他 吃 了 一-点 中 动-物-的 饭.
   - English: She tasted the middle bear's porridge.
   - Literally: She ate a little of the middle animal's rice.
   - Source: built like the sentence before, with zhōng (middle, kb_lookup gloss)
   - Ideas: i9
   - Check: parses (125 readings); the meant reading is one of them; 10 words
   - Gloss: he to eat perfective aspect marker one-o'clock middle to move-thing-possessive marker meal.
   - The blind reader: She ate a little of the middle animal's food.
11. **Zhēn lěng!**
   - Hanzi: 真 冷!
   - English: Too cold!
   - Literally: Really cold!
   - Source: built like Zhēn rè! (zhen-really, lesson how-much: Wài-miàn zhēn lěng.)
   - Ideas: i9
   - Check: parses (2 readings); the meant reading is one of them; 2 words
   - Gloss: true cold!
   - The blind reader: Really cold!
12. **Tā chī le yī-diǎn xiǎo dòng-wù-de fàn.**
   - Hanzi: 他 吃 了 一-点 小 动-物-的 饭.
   - English: She tasted the little bear's porridge.
   - Literally: She ate a little of the small animal's rice.
   - Source: the book's sentence for this story (Tā chī le xiǎo dòng-wù-de chī-de: hěn hǎo!, kb_memory 33%), split, with yī-diǎn and fàn as above
   - Ideas: i10
   - Check: parses (29 readings); the meant reading is one of them; 10 words
   - Gloss: he to eat perfective aspect marker one-o'clock little to move-thing-possessive marker meal.
   - The blind reader: She ate a little of the small animal's food.
13. **Bù rè yě bù lěng, hěn hǎo!**
   - Hanzi: 不 热 也 不 冷, 很 好!
   - English: Just right!
   - Literally: Not hot and not cold either, very good!
   - Source: built: bu-adjective with yě (lesson how-much, also-and-all), then the book's hěn hǎo; the dictionary's just right (bù duō bù shǎo) is about an amount
   - Ideas: i10
   - Check: parses (2 readings); the meant reading is one of them; 7 words
   - Gloss: not hot also not cold, very good!
   - The blind reader: Not hot and not cold, very good!
14. **Tā bǎ fàn dōu chī-wán le.**
   - Hanzi: 他 把 饭 都 吃-完 了.
   - English: And she ate it all up.
   - Literally: She took the rice and ate it all up.
   - Source: the book's sentence for this story (Tā bǎ chī-de dōu chī-wán le., kb_memory 33%), with fàn for chī-de
   - Ideas: i11
   - Check: parses (7 readings); the meant reading is one of them; 7 words
   - Gloss: he grammatical object-introducing particle meal all to eat-finish perfective aspect marker.
   - The blind reader: She ate all of that food.
15. **Xiǎo dòng-wù yǒu yī-ge dōng-xi.**
   - Hanzi: 小 动-物 有 一-个 东-西.
   - English: The little bear had a thing.
   - Literally: The small animal had a thing.
   - Source: built from the grammar (svo, measure-word); the first sentence of the chair's cast entry (Q4: its form is 7 words, so it gets a sentence of its own)
   - Ideas: i12
   - Check: parses (32 readings); the meant reading is one of them; 8 words
   - Gloss: little to move-thing to have one-universal classifier east-west.
   - The blind reader: The small animal had a thing.
16. **Zhè-ge dōng-xi ràng rén zuò-xià.**
   - Hanzi: 这-个 东-西 让 人 做-下.
   - English: It was a chair.
   - Literally: This thing lets people sit down.
   - Source: the dictionary's own form of 椅子 (chair: ràng-rén-zuò-xià-de dōng-xi, kb_lookup gloss, lesson everyday-patterns) said as a sentence about zhè-ge dōng-xi
   - Ideas: i12
   - Check: parses (288 readings); the meant reading is one of them; 8 words
   - Gloss: this-universal classifier east-west to let human being to do-down.
   - The blind reader: This thing lets a person sit down: a chair or some other seat.
17. **Nǚ-hái-zi zuò-zài zhè-ge dōng-xi shàng.**
   - Hanzi: 女-还-子 做-在 这-个 东-西 上.
   - English: The girl sat on the chair.
   - Literally: The girl sat on this thing.
   - Source: the book's sentence for this story (Tā zuò-zài … shàng, kb_memory 42%), with the cast's short name
   - Ideas: i12
   - Check: parses (501 readings); the meant reading is one of them; 10 words
   - Gloss: female-still-a light ending that makes a thing word to do-to exist at this-universal classifier east-west up.
   - The blind reader: The girl sat on this thing.
18. **Zhè-ge dōng-xi jiù huài le.**
   - Hanzi: 这-个 东-西 就 坏 了.
   - English: And the chair broke.
   - Literally: This thing then broke.
   - Source: the end of the same book sentence (… huài le) with jiù for the result
   - Ideas: i13
   - Check: parses (162 readings); the meant reading is one of them; 7 words
   - Gloss: this-universal classifier east-west then bad perfective aspect marker.
   - The blind reader: Then this thing broke.
19. **Xiǎo dòng-wù hái yǒu yī-ge shuìjiào-de dì-fang.**
   - Hanzi: 小 动-物 还 有 一-个 睡觉-的 地-方.
   - English: The little bear also had a bed.
   - Literally: The small animal also had a place for sleeping.
   - Source: built like the chair's first sentence, with the dictionary's form of 床 (bed: shuìjiào-de dì-fang, lesson when-it-happens)
   - Ideas: i15
   - Check: parses (376 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10); too long: the description "xiǎo dòng-wù hái yǒu yī-ge shuìjiào-de dì-fang" is 11 words (limit 10)
   - Gloss: little to move-thing still to have one-universal classifier to sleep-possessive marker floor-side.
   - The blind reader: The small animal also had a place for sleeping, a bed.
20. **Nǚ-hái-zi xiǎng shuìjiào.**
   - Hanzi: 女-还-子 想 睡觉.
   - English: The girl was sleepy.
   - Literally: The girl wanted to sleep.
   - Source: the dictionary's form of 困 (sleepy: xiǎng shuìjiào, lesson when-it-happens) with want-verb
   - Ideas: i14
   - Check: parses (100 readings); the meant reading is one of them; 5 words
   - Gloss: female-still-a light ending that makes a thing word to think to sleep.
   - The blind reader: The girl wanted to sleep.
21. **Tā jiù tǎng zài nà-lǐ.**
   - Hanzi: 他 就 躺 在 那-里.
   - English: So she lay down in it.
   - Literally: She then lay there.
   - Source: the book's sentence for this story (Tā yào shuìjiào, jiù tǎng zài …, kb_memory 55%), split, with nà-lǐ for the bed
   - Ideas: i15
   - Check: parses (39 readings); the meant reading is one of them; 6 words
   - Gloss: he then to lie (down) to exist at that-inside.
   - The blind reader: So she lay down there.
22. **Sān-ge dà dòng-wù huí jiā le.**
   - Hanzi: 三-个 大 动-物 回 家 了.
   - English: The three bears came home.
   - Literally: The three big animals went back home.
   - Source: the book's sentence for this story (Sān-ge dà dòng-wù huí-lái le., kb_memory 25%), with huí jiā (Wǒ dào jiā le.)
   - Ideas: i16
   - Check: parses (6 readings); the meant reading is one of them; 8 words
   - Gloss: three-universal classifier big to move-thing to return home perfective aspect marker.
   - The blind reader: The three big animals came back home.
23. **Xiǎo dòng-wù shuō: Shéi chī le wǒ-de fàn?**
   - Hanzi: 小 动-物 说: 谁 吃 了 我-的 饭?
   - English: The little bear said: "Who ate my porridge?"
   - Literally: The small animal said: Who ate my rice?
   - Source: the book's sentence for this story (kb_memory 25%), with fàn for chī-de
   - Ideas: i17
   - Check: parses (28 readings); the meant reading is one of them; 10 words; too deep: 2 levels of describing phrases, clauses or quotes inside each other (limit 1)
   - Gloss: little to move-thing to communicate: who to eat perfective aspect marker I-possessive marker meal?
   - The blind reader: The small animal said: Who ate my food?
24. **Shéi bǎ zhè-ge dōng-xi zuò huài le?**
   - Hanzi: 谁 把 这-个 东-西 做 坏 了?
   - English: "Who broke my chair?"
   - Literally: Who made this thing broken?
   - Source: the book's sentence for this story (Shéi zuò-huài le wǒ-de zuò-xià-de dōng-xi?, kb_memory 100%), adapted to the book's bǎ sentence (Tā bǎ bāo zuò huài le., lesson becoming-and-making) and the cast's short name
   - Ideas: i18
   - Check: parses (136 readings); the meant reading is one of them; 9 words
   - Gloss: who grammatical object-introducing particle this-universal classifier east-west to do bad perfective aspect marker?
   - The blind reader: Who broke this thing?
25. **Tā-men fā-xiàn le nǚ-hái-zi.**
   - Hanzi: 他-们 发-线 了 女-还-子.
   - English: Then they found the girl.
   - Literally: They discovered the girl.
   - Source: built: fā-xiàn (find, kb_lookup gloss, lesson when-it-happens) with le-done
   - Ideas: i19
   - Check: parses (36 readings); the meant reading is one of them; 8 words
   - Gloss: he-more than one person to send out-line perfective aspect marker female-still-a light ending that makes a thing word.
   - The blind reader: They found the girl.
26. **Tā zài nà-lǐ shuìjiào!**
   - Hanzi: 他 在 那-里 睡觉!
   - English: She was asleep in the little bear's bed!
   - Literally: She was sleeping there!
   - Source: built: zai-place (zài, a place, then the verb) with shuìjiào
   - Ideas: i19
   - Check: parses (21 readings); the meant reading is one of them; 5 words
   - Gloss: he to exist at that-inside to sleep!
   - The blind reader: She was sleeping there!
27. **Nǚ-hái-zi bǎ yǎnjing kāi le.**
   - Hanzi: 女-还-子 把 眼睛 开 了.
   - English: The girl opened her eyes.
   - Literally: The girl took her eyes and opened them.
   - Source: the dictionary's form of 睁 (open the eyes: bǎ yǎnjing kāi, lesson direction-and-result), in place of the book's kāi le kàn-de bù-fen
   - Ideas: i20
   - Check: parses (60 readings); the meant reading is one of them; 7 words
   - Gloss: female-still-a light ending that makes a thing word grammatical object-introducing particle eye to open perfective aspect marker.
   - The blind reader: The girl opened her eyes.
28. **Tā pà le, kuài zǒu chū-qù le.**
   - Hanzi: 他 怕 了, 快 走 出-去 了.
   - English: She got scared and ran out.
   - Literally: She became afraid, went out walking fast.
   - Source: the book's sentence for this story (… hěn pà, kuài chū-qù le, kb_memory 21%), with pà le for got scared and kuài zǒu (the form of 跑, run)
   - Ideas: i21, i22
   - Check: parses (438 readings); the meant reading is one of them; 8 words
   - Gloss: he to fear perfective aspect marker, fast to walk to go out-to go perfective aspect marker.
   - The blind reader: She got scared and quickly went out.
29. **Tā bù huí-lái le.**
   - Hanzi: 他 不 回-来 了.
   - English: And she never came back.
   - Literally: She did not come back any more.
   - Source: built: bù … le for not any more (kb_constructions: bù … le says not anymore) with huí-lái (come back, kb_lookup gloss)
   - Ideas: i23
   - Check: parses (15 readings); the meant reading is one of them; 5 words
   - Gloss: he not to return-to come perfective aspect marker.
   - The blind reader: She did not come back.

## Sketch and loss report

- i1 (needed) Three bears lived in a house -- **weaker**: The reader understood 'three big animals' and says the text never names the kind of animal. That is a kind of thing, not bears.
- i2 (needed) One bear was big, one was middle-sized, one was little [says who the bears of i1 are] -- **kept**
- i3 (needed) One day their porridge was too hot -- **kept**
- i4 (needed) They went out to wait [so, because of i3] -- **kept**
- i5 (needed) A little girl with yellow hair came along [while i4] -- **kept**
- i6 (needed) The door was open -- **weaker**: The reader was unsure whether the door was already open or just opened, and who opened it.
- i7 (needed) She went in [so, because of i6] -- **kept**
- i8 (needed) She tasted the big bear's porridge: it was too hot [then, after i7] -- **kept**
- i9 (needed) She tasted the middle bear's porridge: it was too cold [then, after i8] -- **kept**
- i10 (needed) She tasted the little bear's porridge: it was just right [then, after i9] -- **kept**
- i11 (needed) She ate all of it [and, after i10] -- **kept**
- i12 (needed) She sat on the little bear's chair [then] -- **kept**
- i13 (needed) The chair broke [and, because of i12] -- **kept**
- i14 (needed) She was sleepy -- **kept**
- i15 (needed) She lay down in the little bear's bed [so, because of i14] -- **kept**
- i16 (needed) The three bears came home [then] -- **kept**
- i17 (needed) The little bear said: "Who ate my porridge?" [after i16] -- **kept**
- i18 (needed) "Who broke my chair?" [said too, after i17] -- **kept**
- i19 (needed) They found the girl asleep in the little bear's bed [then] -- **kept**
- i20 (needed) The girl opened her eyes [after i19] -- **kept**
- i21 (needed) She got scared [when i20] -- **kept**
- i22 (needed) She ran out [because of i21] -- **kept**
- i23 (needed) She never came back [after i22] -- **kept**

The blind reader's whole reading: Three big animals, one very big, one middle-sized and one very small, live together in a home. One day their watery food (soup or porridge) is too hot, so they go out to wait. While they are gone, a little girl with gold-coloured hair comes and goes in through the door. She tastes the food: the big animal's is too hot, the middle animal's is too cold, and the small animal's is just right, so she eats all of it. She sits on the small animal's seat (a chair) and it breaks, then she lies down in the small animal's bed and sleeps. The animals come home, and the small animal asks who ate its food and who broke its seat. They find the girl asleep. She wakes up, gets scared, runs out and never comes back. (unsure: S1: the text never says what kind of animals they are, only 'big animals'. S22: 'three big animals' takes in the very small one too, so I read 'big' as 'large animals' in general, as in S1. S3: I read 'shui duo-de fan' as one phrase, 'food with much water', so soup or porridge. Another reading, 'their water was plenty, the food was really hot', seems less likely. S7: the text does not say who opened the door. It may have opened, or it may already have been open. S8, S10, S12: the gloss gives 'one o'clock' for 'yi-dian'. I read it as 'a little'. S16, S17, S24: the gloss gives 'do' for 'zuo'. I read it as 'sit', so S16 says 'a thing that lets a person sit down', which is a chair, though it could be a stool or bench. S24 'zuo huai' reads as 'who broke it', meaning either 'who sat on it and broke it' or 'who made it bad'. S19: I named 'a place for sleeping' a bed. It could just be a sleeping spot. S23: the small animal asks who ate 'my food', and only its food was fully eaten, so this fits. S25: the gloss gives 'send out-line' for 'fa-xian'. I read it as 'found, discovered'. S28: 'kuai zou chu-qu' could be 'walked out quickly' or 'ran off, left quickly'. S29: 'bu hui-lai le' I read as 'did not come back (never again)'.)

## Cast list

- bear: dà dòng-wù
- the middle bear: zhōng dòng-wù
- the little bear: xiǎo dòng-wù
- porridge: shuǐ duō-de fàn, then fàn
- the little girl: xiǎo nǚ-hái-zi, then nǚ-hái-zi
- chair: ràng rén zuò-xià, then zhè-ge dōng-xi
- bed: shuìjiào-de dì-fang, then nà-lǐ

## Structures

- i1: measure-word, adjective-noun, zai-place, place-li-shang (pointing, modifying-nouns, where-it-is, where-it-is)
- i2: comma-clauses, hen-adjective, bu-adjective, ye-also, doing-as-subject (also-and-all, modifying-nouns, how-much, also-and-all, how-much)
- i3: tian-nian-spans, stacked-modifiers, bare-stative, zhen-really (time-and-sums, pointing, modifying-nouns, how-much)
- i4: jiu-then, serial-verbs (linking-sentences, moving)
- i5: svo, measure-word, adjective-noun, serial-verbs, le-new-situation; de-modifier, shi-copula (who-does-what, pointing, modifying-nouns, moving, moving; modifying-nouns, words-and-sentences)
- i6: le-new-situation, comma-clauses (moving, also-and-all)
- i7: jiu-then (linking-sentences)
- i8: le-done, measure-word, de-modifier, adjective-noun, zhen-really (when-it-happens, pointing, modifying-nouns, modifying-nouns, how-much)
- i9: le-done, measure-word, de-modifier, adjective-noun, zhen-really (when-it-happens, pointing, modifying-nouns, modifying-nouns, how-much)
- i10: le-done, de-modifier, bu-adjective, ye-also, doing-as-subject, hen-adjective (when-it-happens, modifying-nouns, how-much, also-and-all, how-much, modifying-nouns)
- i11: ba-handle, dou-all, verb-result (becoming-and-making, also-and-all, direction-and-result)
- i12: svo, measure-word, rang-make, zai-place, place-li-shang (who-does-what, pointing, becoming-and-making, where-it-is, where-it-is)
- i13: jiu-then, le-new-situation (linking-sentences, moving)
- i14: want-verb (pre-verbs)
- i15: svo, de-modifier, jiu-then, zai-place (who-does-what, modifying-nouns, linking-sentences, where-it-is)
- i16: measure-word, adjective-noun, svo, le-new-situation (pointing, modifying-nouns, who-does-what, moving)
- i17: speech-quote, what-question, le-done, de-modifier (questions, questions, when-it-happens, modifying-nouns)
- i18: what-question, ba-handle, zuo-make, le-new-situation (questions, becoming-and-making, becoming-and-making, moving)
- i19: svo, le-done; zai-place (who-does-what, when-it-happens; where-it-is)
- i20: ba-handle, le-new-situation (becoming-and-making, moving)
- i21: le-changed (becoming-and-making)
- i22: kuai-quick, serial-verbs, le-new-situation (when-it-happens, moving, moving)
- i23: bu-negation, le-new-situation (who-does-what, moving)

## Gaps

- bear: dà dòng-wù -- no word for bear; the dictionary's form (from 熊) is hěn zhòng-de dà dòng-wù, 6 words, and a bear comes in almost every sentence, so the test set's own wording (big animals) is used; the kind of animal is lost, and the big bear is said the same way as the bears
- chair: Zhè-ge dōng-xi ràng rén zuò-xià. -- the dictionary's form ràng-rén-zuò-xià-de dōng-xi is 7 words, so it gets a sentence of its own (the cast list) and is zhè-ge dōng-xi after; the bear's "my chair" becomes "this thing"
- taste: chī le yī-diǎn -- the dictionary's form of 尝 is a clause of its own (chī yī-diǎn, kàn wèi-dào, 6 words); ate a little is used, so trying the flavour is weaker
- asleep: zài nà-lǐ shuìjiào -- kb_lookup: nothing says asleep; said as sleeping there
- never (came back): bù huí-lái le -- cóng-lái (the form of 从来) reads only as cóng + lái, and zài yě reads zài as at; not ever is said as not any more (bù … le)

## Notes

Translated by hand (2026-10-22) following the translate skill, level: the whole dictionary. kb_memory gave the book's own sentences for this story (lesson none, the appendix), so most sentences adapt one of them, named in each source. Where they differ it is for a closer dictionary word from kb_lookup: mén (door) for kǒu, nǚ-hái-zi (girl) for xiǎo nǚ-rén, tóu-fa (hair) for máo, yǎnjing via bǎ yǎnjing kāi (the form of 睁) for kāi le kàn-de bù-fen, shuǐ duō-de fàn (porridge) for chī-de, zhēn (too) for hěn. Long book sentences were split. Kept: everything in the sketch. Weaker: tasted (ate a little), never (not any more), the bear's "my chair" (this thing), and dà dòng-wù is both the bears and the big bear. Grammar worth the author's attention: (1) bù X yě bù Y has only one reading, doing-as-subject (not-X taken as the subject of also-not-Y); no pattern joins two describing words, so sentences 2 and 13 carry that reading, the same as the book's bù duō bù shǎo. (2) Sentences that end "tǎng zài / zài + xiǎo dòng-wù(-de) shuìjiào-de dì-fang" had no meant reading in the first 500, so the bed gets a sentence of its own (Xiǎo dòng-wù hái yǒu yī-ge shuìjiào-de dì-fang) and is nà-lǐ after. (3) Hòu-lái at the front of a sentence never reads as one word (only hòu + lái) in 500 readings; then is carried by the order. (4) fā-xiàn takes no clause (only zhīdào has a rule for a whole sentence), so found the girl asleep is two sentences. (5) In Zhè-ge dōng-xi jiù huài le the first reading is jiu-only (jiù + a describing word, it is fine); the reading given is jiu-then with huài as a verb. (6) Nǚ-hái-zi xiǎng shuìjiào, jiù / tā jiù tǎng zài nà-lǐ had no want-verb reading in 500, so it is two sentences. (7) Shéi zuò-huài le wǒ-de zhè-ge dōng-xi? does not parse: wǒ-de + zhè-ge is no noun phrase. (8) kb_gloss gives yī-diǎn as one-o'clock, which may trip a blind reader. Glossary proposal: bear -> dà dòng-wù: the test set's own wording; the dictionary's hěn zhòng-de dà dòng-wù is 6 words and a bear comes in almost every sentence. Glossary proposal: lie down in X's bed -> X yǒu yī-ge shuìjiào-de dì-fang, then tǎng zài nà-lǐ: tǎng zài + a long place had no meant reading in 500. Glossary proposal: never came back -> bù huí-lái le: bù … le says not any more; cóng-lái reads only as cóng + lái. Glossary proposal: found X doing Y -> fā-xiàn le X, then a sentence of its own for what X was doing: fā-xiàn takes no clause. Glossary proposal: just right (of heat) -> bù rè yě bù lěng, hěn hǎo: the dictionary's bù duō bù shǎo is about an amount. Translated before kb_memory hid the stories' own lines (HAOSHUODE_MEMORY_SKIP), so some sentences reuse the book's lines and the book overlap is higher than a fresh run would give.
