# The Boy Who Cried Wolf

- **English:** A boy looked after many sheep. (Literally: "white-haired animals.") He was bored. (Literally: "he felt there was nothing fun.") He shouted: "Wolf! Help!" (Literally: "the big bad animal has come!") Many people came running, but there was no wolf. The boy laughed: "It wasn't true!" Later he did it again. People came again, and again there was no wolf. People got angry. (Literally: "there was fire in their hearts.") Then one day, a real wolf came! The boy shouted: "Wolf! This time it's true!" But people thought he was lying again (literally: "not saying true things"), and nobody came. The wolf ate many of the sheep. If you don't tell the truth, people stop listening to you.
- **Level:** the whole dictionary
- **Model:** claude-opus-5-5 (by hand, subagents)
- **Form:** Hao-shuo-de words only in 19 of 19 sentences; 19 parse; the meant reading found in 19
- **Meaning:** 15 of 16 needed ideas kept, 0 added
- **Passes the bar (Q8):** no

## The text

Yǒu yī-ge xiǎo nán-rén. Tā kàn-hǎo hěn duō bái-sè máo-de dòng-wù. Tā jué-dé shénme dōu bù hǎo-wánr. Tā yòng dà shēngyīn shuō: Dà huài dòng-wù lái le! Bāng-bang wǒ! Hěn duō rén kuài lái le. Dàn-shì nà-lǐ méi-yǒu dà huài dòng-wù. Tā xiào le, shuō: Zhè bù shì zhēn-de! Yǐ-hòu, tā yòu shuō le yī-cì. Rén-men yòu lái le. Yòu méi-yǒu dà huài dòng-wù. Rén-men xīn-lǐ yǒu huǒ le. Yǒu yī tiān, zhēn-de dà huài dòng-wù lái le! Xiǎo nán-rén yòng dà shēngyīn shuō: Dà huài dòng-wù lái le! Zhè-cì shì zhēn-de! Dàn-shì rén-men jué-dé tā yòu bù shuō zhēn-de. Méi-yǒu rén lái. Dà huài dòng-wù bǎ hěn duō bái-sè máo-de dòng-wù chī le. Rúguǒ nǐ bù shuō zhēn-de, rén-men jiù bù tīng nǐ le.

有 一-个 小 难-人. 他 看-好 很 多 白-色 毛-的 动-物. 他 觉-得 什么 都 不 好-玩儿. 他 用 大 声音 说: 大 坏 动-物 来 了! 帮-帮 我! 很 多 人 快 来 了. 但-是 那-里 没-有 大 坏 动-物. 他 笑 了, 说: 这 不 是 真-的! 以-后, 他 又 说 了 一-次. 人-们 又 来 了. 又 没-有 大 坏 动-物. 人-们 心-里 有 火 了. 有 一 天, 真-的 大 坏 动-物 来 了! 小 难-人 用 大 声音 说: 大 坏 动-物 来 了! 这-次 是 真-的! 但-是 人-们 觉-得 他 又 不 说 真-的. 没-有 人 来. 大 坏 动-物 把 很 多 白-色 毛-的 动-物 吃 了. 如果 你 不 说 真-的, 人-们 就 不 听 你 了.

## Sentence by sentence

1. **Yǒu yī-ge xiǎo nán-rén.**
   - Hanzi: 有 一-个 小 难-人.
   - English: There was a boy.
   - Literally: There is one little man.
   - Source: built from the grammar (yǒu with svo, measure-word); xiǎo nán-rén is the stories' own word for boy (kb_memory: this story's first line and "Yī-ge xiǎo nán-rén shuō: Tā méi-yǒu yīfu!")
   - Ideas: i1
   - Check: parses (14 readings); the meant reading is one of them; 6 words
   - Gloss: to have one-universal classifier little difficult-human being.
   - The blind reader: There is a little man, that is, a boy.
2. **Tā kàn-hǎo hěn duō bái-sè máo-de dòng-wù.**
   - Hanzi: 他 看-好 很 多 白-色 毛-的 动-物.
   - English: He looked after many sheep.
   - Literally: He looks after many white-coloured-hair animals.
   - Source: adapts the book's line "Yī-ge xiǎo nán-rén kàn hěn duō bái-sè máo-de dòng-wù." (kb_memory, 60% shared), split in two to be short, with kàn-hǎo (look after, the form of 顾, kb_lookup gloss tier) for kàn
   - Ideas: i1
   - Check: parses (315 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10); too long: the description "tā kàn-hǎo hěn duō bái-sè máo-de dòng-wù" is 11 words (limit 10)
   - Gloss: he to look at-good very many white-colour hair-possessive marker to move-thing.
   - The blind reader: He looks after a lot of animals with white hair (white fur), perhaps sheep.
3. **Tā jué-dé shénme dōu bù hǎo-wánr.**
   - Hanzi: 他 觉-得 什么 都 不 好-玩儿.
   - English: He was bored.
   - Literally: He felt that everything was not fun.
   - Source: adapts the book's line "Tā jué-de méi-yǒu shénme hǎo wánr-de." (kb_memory, 75% shared) with shénme dōu bù (kb_constructions "nothing": shenme-dou); the book's line has over 500 readings and none of the first 500 has jué-dé taking the thought
   - Ideas: i2
   - Check: parses (231 readings); the meant reading is one of them; 8 words
   - Gloss: he to feel-to get what? which? all not good-to play.
   - The blind reader: He feels that nothing is fun.
4. **Tā yòng dà shēngyīn shuō: Dà huài dòng-wù lái le!**
   - Hanzi: 他 用 大 声音 说: 大 坏 动-物 来 了!
   - English: He shouted: "Wolf!"
   - Literally: He said with a big voice: the big bad animal has come!
   - Source: the book's line "Tā yòng dà shēngyīn shuō: Dà huài dòng-wù lái le! Bāng-bang wǒ!" (kb_memory, 55% shared), its first sentence as it is
   - Ideas: i3
   - Check: parses (501 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: he to use big sound to communicate: big bad to move-thing to come perfective aspect marker!
   - The blind reader: He says in a loud voice: "A big bad animal is coming!"
5. **Bāng-bang wǒ!**
   - Hanzi: 帮-帮 我!
   - English: Help!
   - Literally: Help me!
   - Source: the same book line, its second sentence as it is (doubled-verb)
   - Ideas: i3
   - Check: parses (7 readings); the meant reading is one of them; 3 words
   - Gloss: to help-to help I!
   - The blind reader: "Help me!"
6. **Hěn duō rén kuài lái le.**
   - Hanzi: 很 多 人 快 来 了.
   - English: Many people came running.
   - Literally: Many people came quickly.
   - Source: the first half of the book's line "Hěn duō rén kuài lái le, dàn-shì méi-yǒu dà huài dòng-wù." (kb_memory, 100% shared); the whole line has no reading among its first 500 with both halves as meant
   - Ideas: i4
   - Check: parses (17 readings); the meant reading is one of them; 6 words
   - Gloss: very many human being fast to come perfective aspect marker.
   - The blind reader: Many people came quickly.
7. **Dàn-shì nà-lǐ méi-yǒu dà huài dòng-wù.**
   - Hanzi: 但-是 那-里 没-有 大 坏 动-物.
   - English: But there was no wolf.
   - Literally: But there, there was no big bad animal.
   - Source: the second half of the same book line, with nà-lǐ (there) as the one it is about: without it, every reading breaks dà huài dòng-wù apart
   - Ideas: i5
   - Check: parses (501 readings); the meant reading is one of them; 10 words
   - Gloss: but-to be that-inside negative particle used exclusively to negate the verb you (to form meiyou)-to have big bad to move-thing.
   - The blind reader: But there was no big bad animal there.
8. **Tā xiào le, shuō: Zhè bù shì zhēn-de!**
   - Hanzi: 他 笑 了, 说: 这 不 是 真-的!
   - English: The boy laughed: "It wasn't true!"
   - Literally: He laughed and said: this is not real!
   - Source: adapts the book's line "Xiǎo nán-rén xiào le: Zhè bù shì zhēn-de!" (kb_memory, 100% shared): tā for xiǎo nán-rén, and "xiào le, shuō:" (the speech-quote rule "lái le, shuō: …") for "xiào le:", which reads only as two sentences side by side
   - Ideas: i6
   - Check: parses (36 readings); the meant reading is one of them; 9 words
   - Gloss: he to laugh perfective aspect marker, to communicate: this not to be true-possessive marker!
   - The blind reader: He laughed and said: "This isn't true!" (It was not real.)
9. **Yǐ-hòu, tā yòu shuō le yī-cì.**
   - Hanzi: 以-后, 他 又 说 了 一-次.
   - English: Later he did it again.
   - Literally: Afterwards, he said it again, one time.
   - Source: adapts the book's line "Hòu-lái, tā yòu shuō le yī-cì." (kb_memory, 42% shared) with yǐ-hòu (later, the form of 以后): "Hòu-lái, …" reads only as calling out to someone (2 readings, both calling-hail)
   - Ideas: i7
   - Check: parses (7 readings); the meant reading is one of them; 8 words
   - Gloss: by-behind, he again to communicate perfective aspect marker one-time.
   - The blind reader: After that, he said it once more.
10. **Rén-men yòu lái le.**
   - Hanzi: 人-们 又 来 了.
   - English: People came again.
   - Literally: People again came.
   - Source: the first half of the book's line "Rén-men yòu lái le, yòu méi-yǒu dà huài dòng-wù." (kb_memory, 67% shared), split to be short
   - Ideas: i8
   - Check: parses (3 readings); the meant reading is one of them; 5 words
   - Gloss: human being-more than one person again to come perfective aspect marker.
   - The blind reader: The people came again.
11. **Yòu méi-yǒu dà huài dòng-wù.**
   - Hanzi: 又 没-有 大 坏 动-物.
   - English: And again there was no wolf.
   - Literally: Again there was no big bad animal.
   - Source: the second half of the same book line, as it is
   - Ideas: i9
   - Check: parses (86 readings); the meant reading is one of them; 7 words
   - Gloss: again negative particle used exclusively to negate the verb you (to form meiyou)-to have big bad to move-thing.
   - The blind reader: Again there was no big bad animal.
12. **Rén-men xīn-lǐ yǒu huǒ le.**
   - Hanzi: 人-们 心-里 有 火 了.
   - English: People got angry.
   - Literally: In people's hearts there was fire now.
   - Source: the book's line "Rén-men xīn-lǐ yǒu huǒ." (kb_memory, 30% shared), with le for the change (got angry); the form of 愤怒 is xīn-lǐ yǒu hěn dà-de huǒ
   - Ideas: i10
   - Check: parses (16 readings); the meant reading is one of them; 7 words
   - Gloss: human being-more than one person heart-inside to have fire perfective aspect marker.
   - The blind reader: The people had fire in their hearts, which means they became angry.
13. **Yǒu yī tiān, zhēn-de dà huài dòng-wù lái le!**
   - Hanzi: 有 一 天, 真-的 大 坏 动-物 来 了!
   - English: Then one day, a real wolf came!
   - Literally: There was one day, a real big bad animal came!
   - Source: adapts the book's line "Yǒu yī-cì, zhēn-de dà huài dòng-wù lái le!" (kb_memory, 100% shared) with yǒu yī tiān (one day) for yǒu yī-cì (once)
   - Ideas: i11
   - Check: parses (501 readings); the meant reading is one of them; 11 words; too long: 11 words (limit 10)
   - Gloss: to have one day, true-possessive marker big bad to move-thing to come perfective aspect marker!
   - The blind reader: One day a big bad animal really came!
14. **Xiǎo nán-rén yòng dà shēngyīn shuō: Dà huài dòng-wù lái le!**
   - Hanzi: 小 难-人 用 大 声音 说: 大 坏 动-物 来 了!
   - English: The boy shouted: "Wolf!"
   - Literally: The little man said with a big voice: the big bad animal has come!
   - Source: the book's line "Xiǎo nán-rén yòng dà shēngyīn shuō: Dà huài dòng-wù lái le! Zhè-cì shì zhēn-de!" (kb_memory, 50% shared), its first sentence as it is
   - Ideas: i12
   - Check: parses (501 readings); the meant reading is one of them; 13 words; too long: 13 words (limit 10)
   - Gloss: little difficult-human being to use big sound to communicate: big bad to move-thing to come perfective aspect marker!
   - The blind reader: The boy said in a loud voice: "A big bad animal is coming!"
15. **Zhè-cì shì zhēn-de!**
   - Hanzi: 这-次 是 真-的!
   - English: This time it's true!
   - Literally: This time it is real!
   - Source: the same book line, its second sentence as it is
   - Ideas: i12
   - Check: parses (12 readings); the meant reading is one of them; 5 words
   - Gloss: this-time to be true-possessive marker!
   - The blind reader: This time it was true!
16. **Dàn-shì rén-men jué-dé tā yòu bù shuō zhēn-de.**
   - Hanzi: 但-是 人-们 觉-得 他 又 不 说 真-的.
   - English: But people thought he was lying again.
   - Literally: But people felt that he again was not saying true things.
   - Source: the first half of the book's line "Dàn-shì rén-men jué-de tā yòu bù shuō zhēn-de, méi-yǒu rén lái." (kb_memory, 67% shared), split to be short
   - Ideas: i13
   - Check: parses (292 readings); the meant reading is one of them; 12 words; too long: 12 words (limit 10)
   - Gloss: but-to be human being-more than one person to feel-to get he again not to communicate true-possessive marker.
   - The blind reader: But the people thought he was again not telling the truth.
17. **Méi-yǒu rén lái.**
   - Hanzi: 没-有 人 来.
   - English: Nobody came.
   - Literally: There was no person who came.
   - Source: the second half of the same book line, as it is
   - Ideas: i14
   - Check: parses (9 readings); the meant reading is one of them; 4 words
   - Gloss: negative particle used exclusively to negate the verb you (to form meiyou)-to have human being to come.
   - The blind reader: Nobody came.
18. **Dà huài dòng-wù bǎ hěn duō bái-sè máo-de dòng-wù chī le.**
   - Hanzi: 大 坏 动-物 把 很 多 白-色 毛-的 动-物 吃 了.
   - English: The wolf ate many of the sheep.
   - Literally: The big bad animal took many white-coloured-hair animals and ate them.
   - Source: adapts the book's line "Dà huài dòng-wù chī le hěn duō bái-sè máo-de dòng-wù." (kb_memory, 100% shared) with bǎ (ba-handle, as in the book's "… bǎ tā chī le"): among the book line's first 500 readings, none has the big bad animal as the one who eats
   - Ideas: i15
   - Check: parses (501 readings); the meant reading is one of them; 15 words; too long: 15 words (limit 10)
   - Gloss: big bad to move-thing grammatical object-introducing particle very many white-colour hair-possessive marker to move-thing to eat perfective aspect marker.
   - The blind reader: The big bad animal ate many of the white-haired animals.
19. **Rúguǒ nǐ bù shuō zhēn-de, rén-men jiù bù tīng nǐ le.**
   - Hanzi: 如果 你 不 说 真-的, 人-们 就 不 听 你 了.
   - English: If you don't tell the truth, people stop listening to you.
   - Literally: If you don't say true things, people then don't listen to you any more.
   - Source: the book's line, as it is (kb_memory, 100% shared)
   - Ideas: i16
   - Check: parses (30 readings); the meant reading is one of them; 13 words; too long: 13 words (limit 10)
   - Gloss: if you not to communicate true-possessive marker, human being-more than one person then not to hear you perfective aspect marker.
   - The blind reader: If you don't tell the truth, then people stop listening to you.

## Sketch and loss report

- i1 (needed) a boy looked after many sheep (white-haired animals) -- **kept**
- i2 (needed) the boy was bored: he felt nothing was fun [then; the reason for i3 (implied)] -- **kept**
- i3 (needed) he shouted: the big bad animal (wolf) has come, help! [then, because of i2] -- **kept**
- i4 (needed) many people came quickly (running) [because of i3] -- **kept**
- i5 (needed) there was no wolf [but, after i4] -- **kept**
- i6 (needed) the boy laughed and said: it was not true [then] -- **kept**
- i7 (needed) later he shouted the same thing again [later] -- **kept**
- i8 (needed) people came again [because of i7] -- **kept**
- i9 (needed) again there was no wolf [and] -- **kept**
- i10 (needed) people got angry (fire in their hearts) [because of i7-i9] -- **kept**
- i11 (needed) one day a real wolf came [then] -- **kept**
- i12 (needed) the boy shouted: the wolf has come, this time it is true [then, because of i11] -- **weaker**: The reader got the shout, but read 'this time it is true' as the narrator's comment, not as part of what the boy shouted. The summary says he just 'shouts the same thing', so his plea that it is true now is lost.
- i13 (needed) people thought he was lying again (not saying true things) [but] -- **kept**
- i14 (needed) nobody came [and, because of i13] -- **kept**
- i15 (needed) the wolf ate many of the sheep [then, because of i14] -- **kept**
- i16 (needed) if you do not tell the truth, people stop listening to you [the lesson of the whole story; if] -- **kept**

The blind reader's whole reading: A boy looks after many white-haired animals (probably sheep) and is bored. For fun he shouts that a big bad animal is coming and calls for help. People hurry over, find nothing, and he laughs and says it wasn't true. He does it again, the people come again, and they get angry. Then one day a big bad animal really comes. He shouts the same thing, but the people think he is lying again, so nobody comes, and the animal eats many of his white-haired animals. The lesson: if you don't tell the truth, people stop listening to you. (unsure: Sentence 2: I read kàn-hǎo as 'look after, watch over'. The gloss says 'look at - good', and it could also be read as 'thinks well of' the animals, but in this story 'looks after' fits better. 'White-haired animals' is most likely sheep, but the text only says animals with white hair or fur, so they could be some other animal. 'Big bad animal' (dà huài dòng-wù) is never named: it is some large dangerous beast that eats the white-haired animals, perhaps a wolf, but the text doesn't say which. Sentence 1: xiǎo nán-rén is literally 'little man'. I took it as a boy, though it could mean a small grown man. Sentence 8: zhè bù shì zhēn-de could mean 'this isn't real' (there was no animal) or 'I wasn't being truthful'. Both readings say the same thing here. Sentence 12: 'fire in the heart' I read as anger, not as a literal fire.)

## Cast list

- boy: xiǎo nán-rén, then tā
- sheep: bái-sè máo-de dòng-wù, then bái-sè máo-de dòng-wù
- wolf: dà huài dòng-wù, then dà huài dòng-wù

## Structures

- i1: svo (who-does-what)
- i1: measure-word (pointing)
- i1: adjective-noun (modifying-nouns)
- i1: hen-duo-noun (moving)
- i1: de-modifier (modifying-nouns)
- i2: feel-state (feelings)
- i2: shenme-dou (also-and-all)
- i2: bu-adjective (how-much)
- i3: speech-quote (questions)
- i3: yong-with (inside-a-sentence)
- i3: adjective-noun (modifying-nouns)
- i3: le-new-situation (moving)
- i3: doubled-verb (doubling-words)
- i4: hen-duo-noun (moving)
- i4: kuai-quick (when-it-happens)
- i4: le-new-situation (moving)
- i5: dan-shi-but (linking-sentences)
- i5: mei-you-not-have (who-does-what)
- i6: speech-quote (questions)
- i6: le-done (when-it-happens)
- i6: bu-shi-not (words-and-sentences)
- i7: yi-qian-before (around-an-action)
- i7: time-first (when-it-happens)
- i7: you-again (around-an-action)
- i7: le-done (when-it-happens)
- i8: men-plural (pointing)
- i8: you-again (around-an-action)
- i8: le-new-situation (moving)
- i9: you-again (around-an-action)
- i9: mei-you-not-have (who-does-what)
- i10: owner-part (roles-of-a-word)
- i10: svo (who-does-what)
- i10: le-new-situation (moving)
- i11: tian-nian-spans (time-and-sums)
- i11: adjective-noun (modifying-nouns)
- i11: le-new-situation (moving)
- i12: speech-quote (questions)
- i12: ci-times (around-an-action)
- i12: time-first (when-it-happens)
- i12: shi-copula (words-and-sentences)
- i13: dan-shi-but (linking-sentences)
- i13: feel-state (feelings)
- i13: you-again (around-an-action)
- i13: bu-negation (who-does-what)
- i14: mei-you-not-have (who-does-what)
- i14: serial-verbs (moving)
- i15: ba-handle (becoming-and-making)
- i15: hen-duo-noun (moving)
- i15: de-modifier (modifying-nouns)
- i15: le-new-situation (moving)
- i16: ruguo-if (linking-sentences)
- i16: jiu-then (linking-sentences)
- i16: bu-negation (who-does-what)
- i16: le-new-situation (moving)

## Gaps

- wolf: dà huài dòng-wù -- the dictionary's form of 狼 is 10 words (jiào "ào-ào"-de, bù zài jiā-lǐ huó-de dòng-wù); the story's own note asks for "the big bad animal", which says any big bad animal, not a wolf
- sheep: bái-sè máo-de dòng-wù -- the dictionary's form of 羊 is 11 words (máo hěn duō, chī dì shàng-de zhíwù-de dòng-wù); the story's note gives "white-haired animals", 6 words, short enough to repeat
- lie (tell lies): bù shuō zhēn-de -- no entry: kb_lookup "lie" gives only tǎng (lie down); said as the story's note does, not saying true things
- nobody: méi-yǒu rén lái -- no entry; said by grammar, méi-yǒu rén and the verb
- one day: yǒu yī tiān -- no entry for the story opener; yǒu yī tiān (there was one day), built from tian-nian-spans
- bored: jué-dé shénme dōu bù hǎo-wánr -- the form of 无聊 is 8 words (méi yǒu hǎo wánr-de, méi-shì zuò); said as the story's note does, he felt nothing was fun
- angry: xīn-lǐ yǒu huǒ le -- the form of 愤怒 is 7 words (xīn-lǐ yǒu hěn dà-de huǒ); shortened as the story's note does, fire in the heart, with le for got angry

## Notes

Translated by hand following the translate skill, whole dictionary, no lesson. Heads-up for the test: kb_memory returns this story's own book lines (lesson none, the stories appendix) at up to 100% shared, so step 2 handed over most of the text; each reused line is named in its source and was still checked; five were changed because they did not read as meant ((1) to (5) below), and a few more for meaning or length. Changed from the book's lines: (1) "Tā jué-de méi-yǒu shénme hǎo wánr-de." has over 500 readings and none of the first 500 has jué-dé taking the thought (they end as a noun: the thing that ...), so shénme dōu bù hǎo-wánr; (2) "Hěn duō rén kuài lái le, dàn-shì méi-yǒu dà huài dòng-wù." has no reading in its first 500 with both halves as meant, so it is split, and "Dàn-shì méi-yǒu dà huài dòng-wù." alone breaks dà huài dòng-wù apart in every reading, so nà-lǐ (there) is added; (3) "Hòu-lái, …" reads only as calling out to someone (calling-hail, 2 of 2 readings), so yǐ-hòu, which has a time reading; (4) "Dà huài dòng-wù chī le hěn duō bái-sè máo-de dòng-wù.": in its first 500 readings the big bad animal is never the one who eats (all read as one long noun), so bǎ … chī le; (5) "Xiǎo nán-rén xiào le: …" reads only as two sentences side by side, so "xiào le, shuō: …"; (6) kàn became kàn-hǎo (look after); (7) the two-sentence shouts are split so each item is one sentence; also yǒu yī tiān (one day) for yǒu yī-cì (once), le added to xīn-lǐ yǒu huǒ for got angry, and tā for the boy where nothing else could be meant. Six sentences stay over 10 words (warnings only): 2, 4, 13, 14, 16, 18. A pitfall to know: jué-dé taking a thought shows in the brackets as "jué dé" (two words, the feel-state rule); "jué-dé" with a hyphen is the word used as a plain verb. Not said, by choice: "running" is weaker (kuài lái le, came quickly; pǎo is not a word, run is kuài zǒu). Worth the author's attention: kb_gloss gives nán-rén as "difficult-human being" (nán is 难 in the dictionary, so the hanzi line shows 难-人 where the book prints 男人); a blind reader may stumble on the boy. Cast: the sheep and the wolf both have dòng-wù as their head, so a short name (zhè-ge dòng-wù) would mix them up; both descriptions are 6 words or fewer and are repeated in full. Glossary proposal: wolf -> dà huài dòng-wù: the stories' own short name (this story and Little Red Riding Hood), against the 10-word form. Glossary proposal: sheep -> bái-sè máo-de dòng-wù: 6 words against the 11-word form of 羊. Glossary proposal: tell lies -> bù shuō zhēn-de: there is no entry for lie (to say false things). Glossary proposal: nobody -> méi-yǒu rén and the verb: no entry, the grammar says it and parses cleanly. Glossary proposal: one day -> Yǒu yī tiān, …: the opener for a story event. Glossary proposal: later -> Yǐ-hòu, …: Hòu-lái with a comma reads only as calling out. Glossary proposal: boy -> xiǎo nán-rén: the stories' own word; nán-hái-zi, the gloss-tier form, glosses as "difficult-still-(noun ending)" in kb_gloss. Translated before kb_memory hid the stories' own lines (HAOSHUODE_MEMORY_SKIP), so some sentences reuse the book's lines and the book overlap is higher than a fresh run would give.
