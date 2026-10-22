# The Ant and the Grasshopper

- **English:** In summer (literally: "the hot time"), an ant (literally: "a little black animal") was always working. It looked for food and carried it home. A grasshopper (literally: "a big green animal") didn't work. It played, chatted, and laughed. The grasshopper said: "Why are you working? Come and play!" The ant said: "Winter will come. I need to have food." The grasshopper laughed: "Winter is far away!" Then winter came. The ground was all white. The grasshopper was cold, had nothing to eat, and was very unhappy. It went to the ant's house and asked: "Can you give me a little food?" The ant said: "What were you doing in the summer?" The grasshopper said: "I was playing." The ant gave it a little food and said: "Next summer, you work too!"
- **Level:** the whole dictionary
- **Model:** claude-opus-5-5 (by hand, subagents)
- **Form:** Hao-shuo-de words only in 22 of 22 sentences; 22 parse; the meant reading found in 22
- **Meaning:** 18 of 19 needed ideas kept, 2 added
- **Passes the bar (Q8):** no

## The text

Yǒu yī-ge hēi-sè-de xiǎo dòng-wù. Rè-de shí-jiān, tā shénme shí-jiān dōu gōng-zuò. Tā zhǎo chī-de, ná huí jiā. Hái yǒu yī-ge dà dòng-wù. Tā shì zhíwù-de yánsè. Zhè-ge dà dòng-wù bù gōng-zuò. Tā wánr, shuō-shuo, xiào-xiao. Zhè-ge dà dòng-wù shuō: nǐ wèi-shénme gōng-zuò? Lái wánr! Zhè-ge xiǎo dòng-wù shuō: lěng-de shí-jiān huì lái. Wǒ yào yǒu chī-de. Zhè-ge dà dòng-wù xiào: lěng-de shí-jiān hěn yuǎn! Lěng-de shí-jiān jiù lái le. Dì-shàng dōu shì bái-sè-de. Zhè-ge dà dòng-wù hěn lěng, méi-yǒu chī-de. Tā hěn bù kāi-xīn. Tā qù zhè-ge xiǎo dòng-wù-de jiā. Tā wèn: nǐ néng gěi wǒ yī-diǎn chī-de ma? Zhè-ge xiǎo dòng-wù shuō: rè-de shí-jiān, nǐ zài zuò shénme? Zhè-ge dà dòng-wù shuō: wǒ zài wánr. Zhè-ge xiǎo dòng-wù gěi tā yī-diǎn chī-de. Tā shuō: xià-yī-ge rè-de shí-jiān, nǐ yě gōng-zuò!

有 一-个 黑-色-的 小 动-物. 热-的 十-间, 他 什么 十-间 都 工-做. 他 找 吃-的, 拿 回 家. 还 有 一-个 大 动-物. 他 是 植物-的 颜色. 这-个 大 动-物 不 工-做. 他 玩儿, 说-说, 笑-笑. 这-个 大 动-物 说: 你 为-什么 工-做? 来 玩儿! 这-个 小 动-物 说: 冷-的 十-间 会 来. 我 要 有 吃-的. 这-个 大 动-物 笑: 冷-的 十-间 很 远! 冷-的 十-间 就 来 了. 地-上 都 是 白-色-的. 这-个 大 动-物 很 冷, 没-有 吃-的. 他 很 不 开-心. 他 去 这-个 小 动-物-的 家. 他 问: 你 能 给 我 一-点 吃-的 吗? 这-个 小 动-物 说: 热-的 十-间, 你 在 做 什么? 这-个 大 动-物 说: 我 在 玩儿. 这-个 小 动-物 给 他 一-点 吃-的. 他 说: 下-一-个 热-的 十-间, 你 也 工-做!

## Sentence by sentence

1. **Yǒu yī-ge hēi-sè-de xiǎo dòng-wù.**
   - Hanzi: 有 一-个 黑-色-的 小 动-物.
   - English: There was an ant.
   - Literally: There is a black little animal.
   - Source: built from the grammar (yǒu, measure-word); the ant as the text's own note describes it, in the words of the book's line of this story (hēi-sè-de xiǎo dòng-wù, kb_memory 47% shared)
   - Ideas: i2
   - Check: parses (16 readings); the meant reading is one of them; 9 words
   - Gloss: to have one-universal classifier black-colour-possessive marker little to move-thing.
   - The blind reader: There is a small black animal.
2. **Rè-de shí-jiān, tā shénme shí-jiān dōu gōng-zuò.**
   - Hanzi: 热-的 十-间, 他 什么 十-间 都 工-做.
   - English: In summer, it was always working.
   - Literally: In the hot time, it works at whatever time.
   - Source: adapts the book's line of this story (Rè-de shí-jiān, yī-ge hēi-sè-de xiǎo dòng-wù shénme shí-jiān dōu zài zuò., kb_memory 47%): the ant moved to sentence 1, gōng-zuò for zuò, zài dropped; always as kb_lookup gives it (shénme shí-jiān dōu, lesson also-and-all)
   - Ideas: i1, i2
   - Check: parses (110 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: hot-possessive marker ten-between, he what? which? ten-between all work-to do.
   - The blind reader: In the hot time of year (summer), it works all the time.
3. **Tā zhǎo chī-de, ná huí jiā.**
   - Hanzi: 他 找 吃-的, 拿 回 家.
   - English: It looked for food and carried it home.
   - Literally: It looks for things to eat, takes them back home.
   - Source: the book's line of this story (kb_memory 100% shared), with chī-de for chī-de dōng-xi (both are forms of food, kb_lookup): the longer one gives the sentence over 500 readings, this one 45
   - Ideas: i3
   - Check: parses (45 readings); the meant reading is one of them; 7 words
   - Gloss: he to hunt to eat-possessive marker, to take to return home.
   - The blind reader: It looks for food and carries it back home.
4. **Hái yǒu yī-ge dà dòng-wù.**
   - Hanzi: 还 有 一-个 大 动-物.
   - English: There was also a grasshopper.
   - Literally: There is also a big animal.
   - Source: built from the grammar (hai-still, yǒu, measure-word); the grasshopper as the text's own note describes it, the colour in the next sentence
   - Ideas: i4
   - Check: parses (2 readings); the meant reading is one of them; 7 words
   - Gloss: still to have one-universal classifier big to move-thing.
   - The blind reader: There is also a big animal.
5. **Tā shì zhíwù-de yánsè.**
   - Hanzi: 他 是 植物-的 颜色.
   - English: It was green.
   - Literally: It is the colour of plants.
   - Source: the book's sentence for green (Wǒ-de bāo shì zhíwù-de yánsè., kb_lookup green, lesson colors) with tā
   - Ideas: i4
   - Check: parses (4 readings); the meant reading is one of them; 5 words
   - Gloss: he to be plant-possessive marker color.
   - The blind reader: It is the colour of plants (green).
6. **Zhè-ge dà dòng-wù bù gōng-zuò.**
   - Hanzi: 这-个 大 动-物 不 工-做.
   - English: The grasshopper didn't work.
   - Literally: This big animal does not work.
   - Source: the book's line of this story (kb_memory 69%: ... dà dòng-wù bù zuò.), with the cast's short name and gōng-zuò
   - Ideas: i4
   - Check: parses (12 readings); the meant reading is one of them; 8 words
   - Gloss: this-universal classifier big to move-thing not work-to do.
   - The blind reader: This big animal does not work.
7. **Tā wánr, shuō-shuo, xiào-xiao.**
   - Hanzi: 他 玩儿, 说-说, 笑-笑.
   - English: It played, chatted, and laughed.
   - Literally: It plays, chats a little, laughs a little.
   - Source: the book's line of this story, as it is (kb_memory 69%)
   - Ideas: i5
   - Check: parses (34 readings); the meant reading is one of them; 6 words
   - Gloss: he to play, to communicate-to communicate, to laugh-to laugh.
   - The blind reader: It plays, chats and laughs.
8. **Zhè-ge dà dòng-wù shuō: nǐ wèi-shénme gōng-zuò?**
   - Hanzi: 这-个 大 动-物 说: 你 为-什么 工-做?
   - English: The grasshopper said: "Why are you working?"
   - Literally: This big animal says: you why work?
   - Source: the book's line of this story (kb_memory 70%), with the cast's short name and gōng-zuò; zài (-ing) left out, since with it the sentence has over 500 readings
   - Ideas: i6
   - Check: parses (405 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: this-universal classifier big to move-thing to communicate: you for-what? which? work-to do?
   - The blind reader: This big animal says: Why do you work?
9. **Lái wánr!**
   - Hanzi: 来 玩儿!
   - English: "Come and play!"
   - Literally: Come play!
   - Source: the book's line of this story (kb_memory 70%), the second sentence of the quote, as it is
   - Ideas: i7
   - Check: parses (9 readings); the meant reading is one of them; 2 words
   - Gloss: to come to play!
   - The blind reader: Come and play!
10. **Zhè-ge xiǎo dòng-wù shuō: lěng-de shí-jiān huì lái.**
   - Hanzi: 这-个 小 动-物 说: 冷-的 十-间 会 来.
   - English: The ant said: "Winter will come."
   - Literally: This little animal says: the cold time will come.
   - Source: the book's line of this story (kb_memory 73%), with the cast's short name; winter is the dictionary's own form (lěng-de shí-jiān, kb_lookup gloss)
   - Ideas: i8
   - Check: parses (164 readings); the meant reading is one of them; 12 words; too long: 12 words (limit 10); too deep: 2 levels of describing phrases, clauses or quotes inside each other (limit 1)
   - Gloss: this-universal classifier little to move-thing to communicate: cold-possessive marker ten-between will to come.
   - The blind reader: This small animal says: The cold time of year (winter) will come.
11. **Wǒ yào yǒu chī-de.**
   - Hanzi: 我 要 有 吃-的.
   - English: "I need to have food."
   - Literally: I want to have things to eat.
   - Source: the book's line of this story, the second sentence of the quote, as it is (kb_memory 73%)
   - Ideas: i9
   - Check: parses (44 readings); the meant reading is one of them; 5 words
   - Gloss: I to want to have to eat-possessive marker.
   - The blind reader: I want to have food (I need to have food).
12. **Zhè-ge dà dòng-wù xiào: lěng-de shí-jiān hěn yuǎn!**
   - Hanzi: 这-个 大 动-物 笑: 冷-的 十-间 很 远!
   - English: The grasshopper laughed: "Winter is far away!"
   - Literally: This big animal laughs: the cold time is very far!
   - Source: the book's line of this story (kb_memory 57%), with the cast's short name
   - Ideas: i10
   - Check: parses (174 readings); the meant reading is one of them; 12 words; too long: 12 words (limit 10); too deep: 2 levels of describing phrases, clauses or quotes inside each other (limit 1)
   - Gloss: this-universal classifier big to move-thing to laugh: cold-possessive marker ten-between very far!
   - The blind reader: This big animal laughs: The cold time is very far away!
13. **Lěng-de shí-jiān jiù lái le.**
   - Hanzi: 冷-的 十-间 就 来 了.
   - English: Then winter came.
   - Literally: The cold time then came.
   - Source: adapts the book's line (Hòu-lái, lěng-de shí-jiān lái le., kb_memory 100%): hòu-lái reads only as a call or as hòu + lái, so jiù says then (jiu-then, lesson linking-sentences)
   - Ideas: i11
   - Check: parses (76 readings); the meant reading is one of them; 7 words
   - Gloss: cold-possessive marker ten-between then to come perfective aspect marker.
   - The blind reader: Then the cold time came.
14. **Dì-shàng dōu shì bái-sè-de.**
   - Hanzi: 地-上 都 是 白-色-的.
   - English: The ground was all white.
   - Literally: On the ground it is all white.
   - Source: the book's line of this story, as it is (kb_memory 100%)
   - Ideas: i12
   - Check: parses (15 readings); the meant reading is one of them; 7 words
   - Gloss: floor-up all to be white-colour-possessive marker.
   - The blind reader: The ground is all white (snow, presumably).
15. **Zhè-ge dà dòng-wù hěn lěng, méi-yǒu chī-de.**
   - Hanzi: 这-个 大 动-物 很 冷, 没-有 吃-的.
   - English: The grasshopper was cold and had nothing to eat.
   - Literally: This big animal is very cold, has no things to eat.
   - Source: the book's line of this story (kb_memory 100%), its first part, with the cast's short name
   - Ideas: i13
   - Check: parses (336 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: this-universal classifier big to move-thing very cold, negative particle used exclusively to negate the verb you (to form meiyou)-to have to eat-possessive marker.
   - The blind reader: This big animal is very cold and has no food.
16. **Tā hěn bù kāi-xīn.**
   - Hanzi: 他 很 不 开-心.
   - English: It was very unhappy.
   - Literally: It is very not happy.
   - Source: the book's line of this story (kb_memory 100%), its last part, as a sentence of its own (also the book's Tā hěn bù kāi-xīn, jiù qù le hěn yuǎn-de dì-fang.)
   - Ideas: i14
   - Check: parses (6 readings); the meant reading is one of them; 5 words
   - Gloss: he very not to open-heart.
   - The blind reader: It is very unhappy.
17. **Tā qù zhè-ge xiǎo dòng-wù-de jiā.**
   - Hanzi: 他 去 这-个 小 动-物-的 家.
   - English: It went to the ant's house.
   - Literally: It goes to this little animal's home.
   - Source: the book's line of this story (kb_memory 100%), its first part, with the cast's short name
   - Ideas: i15
   - Check: parses (8 readings); the meant reading is one of them; 9 words
   - Gloss: he to go this-universal classifier little to move-thing-possessive marker home.
   - The blind reader: It goes to this small animal's home.
18. **Tā wèn: nǐ néng gěi wǒ yī-diǎn chī-de ma?**
   - Hanzi: 他 问: 你 能 给 我 一-点 吃-的 吗?
   - English: It asked: "Can you give me a little food?"
   - Literally: It asks: can you give me a bit of things to eat?
   - Source: the book's line of this story (kb_memory 100%), its second part, as a sentence of its own
   - Ideas: i16
   - Check: parses (160 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: he to ask: you to be able to to give I one-o'clock to eat-possessive marker final interrogative yes-or-no question marker?
   - The blind reader: It asks: Can you give me a little food?
19. **Zhè-ge xiǎo dòng-wù shuō: rè-de shí-jiān, nǐ zài zuò shénme?**
   - Hanzi: 这-个 小 动-物 说: 热-的 十-间, 你 在 做 什么?
   - English: The ant said: "What were you doing in the summer?"
   - Literally: This little animal says: in the hot time, what are you doing?
   - Source: the book's line of this story (kb_memory 58%), with the cast's short name
   - Ideas: i17
   - Check: parses (172 readings); the meant reading is one of them; 14 words; too long: 14 words (limit 10); too deep: 2 levels of describing phrases, clauses or quotes inside each other (limit 1)
   - Gloss: this-universal classifier little to move-thing to communicate: hot-possessive marker ten-between, you to exist at to do what? which??
   - The blind reader: This small animal says: In the hot time, what were you doing?
20. **Zhè-ge dà dòng-wù shuō: wǒ zài wánr.**
   - Hanzi: 这-个 大 动-物 说: 我 在 玩儿.
   - English: The grasshopper said: "I was playing."
   - Literally: This big animal says: I am playing.
   - Source: the book's line of this story (kb_memory 33%), with the cast's short name
   - Ideas: i18
   - Check: parses (85 readings); the meant reading is one of them; 9 words
   - Gloss: this-universal classifier big to move-thing to communicate: I to exist at to play.
   - The blind reader: This big animal says: I was playing.
21. **Zhè-ge xiǎo dòng-wù gěi tā yī-diǎn chī-de.**
   - Hanzi: 这-个 小 动-物 给 他 一-点 吃-的.
   - English: The ant gave it a little food.
   - Literally: This little animal gives it a bit of things to eat.
   - Source: the book's line of this story (kb_memory 100%), its first part, with the cast's short name and without le
   - Ideas: i19
   - Check: parses (498 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: this-universal classifier little to move-thing to give he one-o'clock to eat-possessive marker.
   - The blind reader: This small animal gives it a little food.
22. **Tā shuō: xià-yī-ge rè-de shí-jiān, nǐ yě gōng-zuò!**
   - Hanzi: 他 说: 下-一-个 热-的 十-间, 你 也 工-做!
   - English: It said: "Next summer, you work too!"
   - Literally: It says: the next hot time, you also work!
   - Source: the example of next-last-time (Xià yī gè rè de shí-jiān, nǐ yě yào zuò., lesson around-an-action) and the book's line of this story (kb_memory 100%), with gōng-zuò and without yào
   - Ideas: i20
   - Check: parses (50 readings); the meant reading is one of them; 13 words; too long: 13 words (limit 10); too deep: 2 levels of describing phrases, clauses or quotes inside each other (limit 1)
   - Gloss: he to communicate: down-one-universal classifier hot-possessive marker ten-between, you also work-to do!
   - The blind reader: It says: Next hot time, you work too!

## Sketch and loss report

- i1 (needed) it is summer (the hot time) [when i2 and i3 happen] -- **kept**
- i2 (needed) an ant (a little black animal) is always working -- **kept**
- i3 (needed) the ant looks for food and carries it home [how i2 works] -- **kept**
- i4 (needed) a grasshopper (a big green animal) does not work [but, against i2] -- **kept**
- i5 (needed) the grasshopper plays, chats and laughs [instead of working (i4)] -- **kept**
- i6 (needed) the grasshopper asks the ant why it is working -- **kept**
- i7 (needed) the grasshopper tells the ant to come and play [with i6] -- **kept**
- i8 (needed) the ant says winter will come [answers i6] -- **kept**
- i9 (needed) the ant says it needs to have food [because of i8] -- **weaker**: The reader read 'yào' first as 'want' and flagged that it could be 'want' or 'need', so the necessity is less sure than in the English.
- i10 (needed) the grasshopper laughs and says winter is far away [answers i8] -- **kept**
- i11 (needed) winter comes [then, after i10] -- **kept**
- i12 (colour) the ground is all white [because of i11] -- **kept**
- i13 (needed) the grasshopper is cold and has nothing to eat [because of i11 and i4] -- **kept**
- i14 (needed) the grasshopper is very unhappy [because of i13] -- **kept**
- i15 (needed) the grasshopper goes to the ant's house [so, because of i13] -- **kept**
- i16 (needed) it asks the ant: can you give me a little food? [at i15] -- **kept**
- i17 (needed) the ant asks what the grasshopper was doing in the summer [answers i16] -- **kept**
- i18 (needed) the grasshopper says it was playing [answers i17] -- **kept**
- i19 (needed) the ant gives it a little food [then] -- **kept**
- i20 (needed) the ant says: next summer, you work too [with i19; the point of the story] -- **kept**
- **added:** The white ground is snow (the reader's guess)
- **added:** A stated moral: work and get ready for hard times ahead

The blind reader's whole reading: A small black animal works all through the hot season, gathering food and taking it home. A big green animal does not work. It plays, chats and laughs, and asks the small one why it bothers working. The small animal says the cold season will come and it needs food. The big one laughs that the cold season is far away. Then the cold season comes, the ground turns white, and the big animal is cold, has no food and is unhappy. It goes to the small animal's home and asks for a little food. The small animal asks what it was doing in the hot season, and it says it was playing. The small animal gives it a little food and says that next hot season it must work too. The point is to work and get ready for hard times ahead. (unsure: Sentence 22: 'Tā shuō' does not say who speaks. I read it as the small animal, since it just gave the food and the words are a lesson to the big one. It could also be the big animal promising 'next hot time, you (meaning I) will work too', but that fits the 'nǐ' less well. Sentence 11: 'yào' could be 'want' or 'need'. Both fit. The two animals are never named, only described as 'small and black' and 'big and plant-coloured'. The story suggests particular creatures, but nothing in the text says which. Sentence 2: I read 'shénme shí-jiān dōu' as 'at any time, all the time'. Some glosses gave the wrong sense, though the right one was clear from context: 'shí-jiān' came out as 'ten-between' (it means time), 'yī-diǎn' as 'one o'clock' (it means a little), 'zhǎo' as 'to hunt' (here it means look for), 'tā' as 'he' (here it means it), 'dì-shàng' as 'floor-up' (here it means on the ground), and 'méi-yǒu' as a long particle note (it means does not have).)

## Cast list

- summer (the text's note: the hot time): rè-de shí-jiān
- winter: lěng-de shí-jiān
- ant (the text's note: a little black animal): hēi-sè-de xiǎo dòng-wù, then zhè-ge xiǎo dòng-wù
- grasshopper (the text's note: a big green animal; the colour is the next sentence, Tā shì zhíwù-de yánsè.): dà dòng-wù, then zhè-ge dà dòng-wù
- green: zhíwù-de yánsè

## Structures

- i1: time-first, de-modifier (when-it-happens, modifying-nouns)
- i2: svo, measure-word, de-modifier, adjective-noun; time-first, dou-all (who-does-what, pointing, modifying-nouns, modifying-nouns; when-it-happens, also-and-all)
- i3: svo, verb-de-thing, add-take, serial-verbs (who-does-what, roles-of-a-word, time-and-sums, moving)
- i4: hai-still, svo, measure-word, adjective-noun; shi-copula, de-modifier; bu-negation (also-and-all, who-does-what, pointing, modifying-nouns; words-and-sentences, modifying-nouns; who-does-what)
- i5: doubled-verb, add-take (doubling-words, time-and-sums)
- i6: speech-quote, why-how-question (questions, questions)
- i7: lai-let-me (everyday-patterns)
- i8: speech-quote, hui-will (questions, when-it-happens)
- i9: want-verb, svo, verb-de-thing (pre-verbs, who-does-what, roles-of-a-word)
- i10: speech-quote, hen-adjective (questions, modifying-nouns)
- i11: jiu-then, le-new-situation (linking-sentences, moving)
- i12: place-li-shang, dou-all, shi-copula, verb-de-thing (where-it-is, also-and-all, words-and-sentences, roles-of-a-word)
- i13: hen-adjective, add-take, mei-you-not-have, verb-de-thing (modifying-nouns, time-and-sums, who-does-what, roles-of-a-word)
- i14: hen-adjective, bu-adjective (modifying-nouns, how-much)
- i15: svo, de-modifier, measure-word (who-does-what, modifying-nouns, pointing)
- i16: speech-quote, can-verb, gei-give, measure-word, ma-question (questions, pre-verbs, inside-a-sentence, pointing, questions)
- i17: speech-quote, time-first, zai-now, what-question (questions, when-it-happens, when-it-happens, questions)
- i18: speech-quote, zai-now (questions, when-it-happens)
- i19: gei-give, measure-word (inside-a-sentence, pointing)
- i20: speech-quote, next-last-time, time-first, ye-also (questions, around-an-action, when-it-happens, also-and-all)

## Gaps

- ant: hēi-sè-de xiǎo dòng-wù -- no short word: the dictionary's form is 11 words (hěn duō zài yī-qǐ gōng-zuò-de xiǎo dòng-wù), so the text's own note (a little black animal) is used, named zhè-ge xiǎo dòng-wù after
- grasshopper: yī-ge dà dòng-wù, then Tā shì zhíwù-de yánsè. -- no entry: kb_lookup gives only the kind (dòng-wù) and, wrongly, alcohol as a second kind; the text's own note (a big green animal) is used, the colour in a sentence of its own, named zhè-ge dà dòng-wù after
- summer: rè-de shí-jiān -- the dictionary's form is 7 words (nián-lǐ zuì rè-de shí-jiān); the text's own note (the hot time) is 4 and pairs with winter's lěng-de shí-jiān

## Notes

Translated by hand following the translate skill, at the level of the whole dictionary (2026-10-22). kb_memory gave the book's own lines of this story (most at 57-100% shared), so most sentences adapt them; the changes: green is the dictionary's zhíwù-de yánsè (the book's lines say tiān-de yánsè, the colour of the sky, which reads as blue); work is gōng-zuò (work-do) where the book has zuò, which alone reads as do; each quote that held two sentences, and each long line, is split; chī-de dōng-xi became chī-de and nǐ wèi-shénme zài gōng-zuò lost its zài, since both gave over 500 readings; the animals are named zhè-ge xiǎo dòng-wù and zhè-ge dà dòng-wù after their first description (the book: hēi-sè-de dòng-wù, tiān-de yánsè-de dòng-wù). Tried and dropped: "Rè-de shí-jiān, yǒu yī-ge hēi-sè-de xiǎo dòng-wù." reads only as a call (Time , S needs a sentence with a doer, and one that starts with yǒu has none), so the ant comes first in a sentence of its own; "Rè-de shí-jiān, tā shénme shí-jiān dōu zài gōng-zuò." and "Rè-de shí-jiān, yī-ge hēi-sè-de xiǎo dòng-wù zài gōng-zuò." have no time reading among the first 500 (without zài the first has one, reading 109); "Hòu-lái, lěng-de shí-jiān lái le." reads hòu-lái only as a call or as hòu + lái (no Time rule has it), so jiù says then; "Hái yǒu yī-ge zhíwù-de yánsè-de dà dòng-wù." is 11 words at depth 2, so the colour got its own sentence; "Nǐ néng gěi wǒ yī-diǎn ma?" never reads yī-diǎn as a bit (the Bit rule needs a verb or describing word before it), while yī-diǎn chī-de reads as a number, counting word and thing (gěi wǒ [yī diǎn chī-de]). For the author: kb_gloss glosses diǎn as o'clock, so yī-diǎn chī-de shows as "one o'clock to eat" to the blind reader; kb_lookup has nothing for unhappy (bù kāi-xīn, from the book, says it); kb_lookup grasshopper lists alcohol (ràng-tóu-biàn-luàn-de shuǐ) as a kind-of. Not said, by choice: le in gave (the narration stays in plain verbs, as the book's own story lines do for most verbs). Glossary proposal: summer -> rè-de shí-jiān: the pair of winter's own form lěng-de shí-jiān, 4 words against the 7 of nián-lǐ zuì rè-de shí-jiān. Glossary proposal: next summer -> xià-yī-ge rè-de shí-jiān: next-last-time reads xià-yī-ge before a time as one time phrase (its own example), then a comma. Glossary proposal: then (the next thing in a story) -> jiù before the verb: Hòu-lái at the front reads only as a call. Glossary proposal: unhappy -> bù kāi-xīn: kb_lookup finds nothing for unhappy; the book says not happy. Translated before kb_memory hid the stories' own lines (HAOSHUODE_MEMORY_SKIP), so some sentences reuse the book's lines and the book overlap is higher than a fresh run would give.
