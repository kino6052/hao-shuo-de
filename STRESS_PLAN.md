# Stress-test plan

A stress test for the translator: a battery of short texts and sentence sets built to find where Hao-shuo-de, or the translator, bends or breaks. The test set of [TRANSLATOR_PLAN.md](TRANSLATOR_PLAN.md) F1 measures quality against a bar (Q8); this battery hunts for failures. A good run is one that finds many, names each, and sends it where it can be fixed or recorded as a limit the author chose.

Every probe sits beside real Mandarin (idea 2, asked by the author): how Mandarin says it, how we say it, and whether a loss is one Mandarin shares or one the small language caused.

It started on 2026-10-22 from a battery the author brought: 20 diagnostic sets, 12 kinds of book excerpts, a blind back-translation and a gap log. §2 keeps what fits this language and changes what does not; §3 lists the ideas behind the changes; §4 to §8 say what the battery holds and how a run is judged; §9 lists outside benchmarks to borrow from; parts A to J are the build.

**Now:** the plan is written; nothing is built. First the author's answers to Q1 and Q2 (one at a time), then part A. Like F1, a real run waits for a fresh Claude login; until then a run goes by hand through subagents, as the ten stories did.

**Live view:** `npm run dev`, then http://127.0.0.1:5173/__plan/?file=STRESS_PLAN.md

**Marks:** `[ ]` to do · `[~]` doing now · `[x]` done · `[?]` waits for the author · `[-]` dropped. A line under an item without a mark is a note.

## 0. This plan

- [x] **0.1 The plan:** this file, with ids to point at in a session (STRESS_PLAN C3, Q2)
- [x] **0.2 Links:** TRANSLATOR_PLAN.md F4 points here

## 1. Why the test set we have is not a stress test

The ten stories and the 100 everyday sentences (TRANSLATOR_PLAN.md F1, by hand, 2026-10-22) passed the bar: 91% of sentences kept every needed idea. That says the translator handles easy texts. It says little about the hard ones:

- **Home ground.** Fables are short past-tense stories with few characters, the kind of text the book itself teaches. The stories are the book's own, so `kb_memory` handed the translator their lines (81% shared words, before the skip). The 100 sentences are the first 100 of Tatoeba's list: short, easy, and picked by position, not by what they test.
- **The translator marks its own work.** The session that translates also writes the sketch and decides which ideas are needed and which are colour. A hard idea marked colour cannot fail the bar.
- **Ideas, not differences.** The judge asks whether each idea came back. It never asks whether two sentences that differ in one point still differ. "You must come", "you should come" and "you want to come" are all **Nǐ yào lái** (`kb_lookup`: must, should and want all give yào), and each would pass on its own.
- **No Mandarin side.** A story is compared with the book's own Hao-shuo-de, a sentence with nothing. Nothing says how real Mandarin says the same thing, so a loss Mandarin shares (no tense on verbs) looks the same as one the 230 words caused (must and should both yào, where Mandarin has 必须 and 应该).
- **One kind of reader.** The blind reader and the judge are the same model, and it knows Mandarin. It may read meaning into a sentence from Mandarin habits that a learner of the 230 words would not have. Nothing checks that the judges catch a bad translation.
- **No map.** A run gives a score per text, not per feature: nothing lists which of the 145 patterns and 112 English ways of saying (`kb_constructions`) a run met, which it never met, and which broke.
- **The breaks so far were found by accident.** xiàn-zài never reads as "now"; "Zài huí jiā-de lù shàng, …" at the start of a sentence reads only as calling out to the road; tā glosses as "he" for a duck. Each turned up while doing something else. A battery should find this kind on purpose.

Found while writing this plan, from three lookups: must, should and want fall together as yào; "half" is 3 or 8 words (yī bù-fen; liǎng bù-fen-lǐ-de yī bù-fen) where Mandarin has 半; "they say" has no form. These are the kind of findings the battery should make by the hundred.

## 2. The proposed battery: what stays, what changes

- **Stays**
  - Many short pieces (passages of 80 to 300 words, sentence sets of 3 to 6) rather than one long chapter
  - Public-domain books for the passages, in short excerpts
  - The 20 diagnostic sets, as the start of §4
  - Blind back-translation, compared with the source
  - A gap log with four kinds: words (lexical), grammar (syntactic), use in context (pragmatic), register
  - For a feature the language lacks: is the difference **neutralized** (both sides come out the same), **compensated** (said another way) or **lost**?
- **Changes**
  - **Real Mandarin beside every probe** (idea 2): a natural Mandarin translation, read and judged the same way as ours, so each loss is marked as Mandarin's too or ours alone.
  - **Start from this language's profile.** The battery was written for a made-up language with grammar for how-you-know (evidentiality), noun classes and switch-reference. Hao-shuo-de has none of these by design: 230 words, Mandarin's word order, words that never change. So most sets test something absent. That is still useful, but only with a prediction written first (idea 5), and only beside sets that cover what the language does claim: the 145 patterns, one by one.
  - **Pairs, not single sentences** (idea 4): each set is built from sentences that differ in one point.
  - **A frozen gold sketch** for every probe, written before any run, not by the translating session (idea 3).
  - **Add what this language finds hard,** which the battery has no set for: one tā for he, she and it; nouns whose description is 10 words; the grammar words it lacks (already, even, not only); readings that multiply; words at the start of a sentence; numbers past 99 (§4, sets 21 to 32).
  - **Tell the language's gaps from the translator's misses** (idea 6): a failure is only a language gap when a careful attempt by hand fails too.

## 3. Ideas: what makes a stress test better

1. **Aim at the language's own claims.** Every pattern and every English way of saying gets at least one probe; the coverage report shows what no probe reaches. A generic conlang checklist misses the language's own weak spots (tā, long descriptions, sentence-initial words).
2. **Always beside real Mandarin.** Hao-shuo-de is Mandarin made small, so every probe also gets a natural Mandarin translation, and every target a line on how Mandarin says it (the word or pattern, and its HSK level) next to how we say it. The same readers and judge read the Mandarin too, so Mandarin's result is the line ours is measured against. Each target then gets one of four labels:
   - **like Mandarin:** the same means, perhaps in fewer words
   - **Mandarin loses it too:** an inherited loss, expected (no tense on verbs, no "if I were" form)
   - **we drop what Mandarin keeps:** the 230-word limit caused it (应该 and 必须 are two words; ours are both yào). A candidate for a word or a pattern
   - **we say more than Mandarin:** a description where Mandarin has one word (10 words for 狼, wolf)
   - The last two are the price of the small language, and the report puts them first. Beside them, **the step to Mandarin**: what a learner of Hao-shuo-de still has to learn to say it in Mandarin, and where our hanzi line differs from Mandarin's (不-分 for 部分, part; 他 for an animal where written Mandarin has 它)
3. **Freeze the answer key first.** Each probe carries a gold sketch: its ideas, which are needed, which differences must survive, and 2 to 5 questions about it with their answers ("Who bought the house?"). The translating session still writes its own sketch; comparing the two shows ideas the translator never saw.
4. **Test differences, not only ideas.** A set of siblings that differ in one point (must, should, may, want) goes through translation one by one; then a reader who sees one translation and all the English siblings picks which English it came from. A difference that survives is picked right; a neutralized one is picked by chance. This is objective and cheap: no free-text judging. The Mandarin siblings go through the same test, so we see whether Mandarin keeps the difference.
5. **Predict before running.** Each probe says what Claude expects: said, compensated (and how), neutralized or lost, for us and for Mandarin. The findings worth the author's time are the surprises, both ways: a break nobody expected, and a "can't say it" that turned out sayable.
6. **The language or the translator?** For each failure, an oracle attempt: Claude by hand, with all the tools and time it wants, tries to say it (the author too, when it matters). If it can, the translator missed (fix the skill, the glossary, a tool). If it can't, the language has a gap (route it, part F).
7. **More than one kind of reader, and test the readers.** A reader that sees only the English word-by-word gloss (no pinyin, so no Mandarin to lean on); a second model; comprehension questions; the forced choice of idea 4. Then plant faults on purpose (drop a bù, swap the doer and the one it is done to, change a number, swap lái and qù) and check the readers and the judge catch them, the way the code's tests are checked with mutations.
8. **Keep a held-out part.** Approved translations feed the glossary and the memory, so a battery that is stored teaches itself the answers. One part is never stored; each run also gets fresh variants (other nouns, numbers, names) so a remembered sentence does not help.
9. **Small, many, short.** Many probes of 1 to 3 targets each, a few passages for context. A failure in a short probe points at one thing.
10. **Grow from failures.** Each run's breaks seed the next probes: 5 variants around a break find its edge (does "already" fail everywhere or only after a time word?). Each fix gets a probe that guards it. Probes that always pass are retired, keeping a few as guards.
11. **Measure the cost, not only right or wrong.** Words per needed idea against Mandarin's characters per idea, readings per sentence, the longest description, repair rounds, time per probe. A sentence that is right but 19 words long, where Mandarin needs 8 characters, has failed in a different way.
12. **Every loss gets a label and a home.** Neutralized, compensated, lost, broke or made up; words, grammar, use or register; one of idea 2's four Mandarin labels. Each goes to the frontier, the grammar gaps, the translator's fixes, or a list of limits the author chose (part F).

## 4. The probe sets

Each set is 3 to 6 sentences, mostly siblings that differ in one point. Sets 1 to 20 are the author's battery; 21 to 32 are new. Under each: **Mandarin** says how real Mandarin does it; **We** is Claude's guess from the patterns list, written before any run, and the run checks both (A1 checks the guesses against the tools first).

- **1. How you know (evidentiality):** I saw the boat leave; I heard the bell; the road is wet, so it must have rained; they say the bridge is closed
  - Mandarin: no grammar for it either; words do it: 看见 and 听见 for saw and heard, 一定 or 肯定 for "must have", 听说 or 据说 for "they say"
  - We: kàn-dào and tīng (perceive-doing), as Mandarin; "they say" has no form found yet (check 听说's entry); "must have rained" risks reading as an order, since must is yào. Mostly like Mandarin; hearsay may be ours alone to lose
  - Siblings: one event, four ways of knowing it (saw, heard, worked out, was told)
- **2. Politeness and register:** Excuse me, Professor, could you possibly…; please send the report by Friday; hey, give me that pen
  - Mandarin: 您 for a polite you, 请, 麻烦您, 能不能…; titles after the name (王教授); blunt forms (喂, 给我)
  - We: please only as "…, hǎo ma?" and yī-xià (yi-xia-moment softens a request); no polite you (check 您's entry); titles as a quoted name or a description. Expect: we drop what Mandarin keeps
  - Siblings: one request at three levels; a reader ranks them from most to least polite, in both languages
- **3. Kinds of things and counting words (noun class, classifiers):** a small knife, the heavy stone sank, the wooden bowl floated, three birds, one cat
  - Mandarin: a counting word for each kind of thing (一把刀, 一块石头, 三只鸟, 一只猫); no gender
  - We: gè for most, with zhǒng, cì and bù-fen; the shape classes Mandarin keeps are dropped, which rarely changes the meaning; materials, sink and float need descriptions
- **4. Time and aspect:** was reading when the phone rang; have read it twice; will have finished by tomorrow; if I were you, I would wait
  - Mandarin: 在…的时候 or 正在, 看过两次, 明天以前会写完, 如果我是你，我会等; no unreal form either, only 要是 and the context
  - We: zài and when-clause; guò with liǎng cì; huì with wán; the unreal "if I were you" is lost in both: inherited
  - Siblings: if I am / if I were / if I had been
- **5. Who-clauses and joining (relative clauses):** the woman who lives next door has a brother whose boat we borrowed; the book that you recommended, which I found in the attic
  - Mandarin: everything before the noun with 的 (住在隔壁的那个女人); "whose" as an owner (我们借过她哥哥的船); "that" and ", which" are not told apart either
  - We: verb-de-person and stacked-modifiers, as Mandarin; but the depth limit (B4: 1) splits sentences Mandarin keeps whole, and the cast list must keep who is who
- **6. Not, all, some, none (negation and scope):** none of the students read every chapter; not all of them finished; nobody saw anything, but someone must have heard something
  - Mandarin: word order does it: 都不 (none) against 不都 (not all); 没有人 for nobody, 什么都没 for nothing, 只 for only
  - We: the same words; whether the parser keeps dōu bù and bù dōu apart is the key question
  - Siblings: none read every / not all read any / all read none; forced choice
- **7. Must, may, should, might have (modality):** you must wear a helmet; you may leave early, but you should tell me first; she might have missed the train; she can't have walked in this rain
  - Mandarin: 必须 or 得 (must), 应该 (should), 可以 (may), 想 (want), 可能 (might), 不可能 (can't have)
  - We: must, should and want all yào; may kěyǐ; might kěnéng; "can't have walked" perhaps bù kěnéng (check). We drop the must and should difference Mandarin keeps
  - Siblings: must / should / may / want, with one verb
- **8. Reported speech and the past that didn't happen:** she said, "I will call you tomorrow"; later she told me she had already called; if I had known you were coming, I would have baked a cake
  - Mandarin: no tense shift in reported speech (as ours); 已经…了 for already; 早知道你要来，我就做蛋糕了 for the past that didn't happen
  - We: speech-quote for direct speech; no word for already and no 早知道 pattern, so "if I had known" falls to a plain if. Both are ours to lose
- **9. Here and there, come and go, bring and take:** bring that chair here; take this box there and come back before dark; the cat went under the table, climbed onto the roof, jumped down into the garden
  - Mandarin: 拿来 and 拿走, 带来 and 带去; the direction joined to the verb (爬上屋顶, 跳下去, 走进)
  - We: ná lái and ná qù (serial-verbs), lái and qù, zhè-lǐ and nà-lǐ; a direction joined to a verb only as far as verb-result goes (check shàng, xià, jìn after a verb); garden needs a description
  - Siblings: bring / take / come / go, one thing and one place
- **10. Numbers, units, colours:** two cups of flour, half a spoon of salt, three eggs; bake for forty minutes at 180°C; light blue with dark red stripes
  - Mandarin: 两杯面粉, 半勺盐, 一百八十度, 浅蓝 and 深红, 条纹
  - We: half is 3 or 8 words where Mandarin has 半; 180 said digit by digit (big-numbers), not 一百八十; cups, degrees and stripes described; light and dark through "a little" forms. We say more than Mandarin
- **11. Family and ownership:** my mother's younger sister gave my brother her old coat; his hand was hurt, but his bicycle was not damaged; the chief's house stands beside the river
  - Mandarin: more exact than English: 姨 (mother's sister) against 姑 (father's sister), 小姨 for the younger one; close family without 的 (我妈妈), things with it (他的自行车)
  - We: owner-part allows a part with or without -de; aunts and uncles beyond māma and bàba are long chains: we drop what Mandarin keeps; "chief" needs a description
- **12. Who did what next (clause chaining):** when the sun rose, we packed the tents; after we had eaten, we left; while crossing the bridge, she saw a fox, and before it ran away, it looked back
  - Mandarin: 太阳升起的时候, 吃完饭以后, 过桥的时候, 跑掉以前; the doer is often left out, as ours; in writing 他, 她 and 它 tell him, her and it apart
  - We: when-clause and wan-hou-after hold the order; "before" with a whole clause may be weak (yi-qian-before is a time word); our hanzi writes 他 for all, so the written text loses what written Mandarin keeps
- **13. Passives, things made from actions, causes:** the decision to close the factory was made after the report had been reviewed; the storm caused the river to rise, which forced the villagers to leave
  - Mandarin: 被, mostly for something bad; many passives with no marker at all (报告审查完以后，做出了关闭工厂的决定); 让, 使 or 导致 for causes
  - We: 被 is X ràng Y (lesson 26), and the advice is to say the doer first; a doer the English never names must be made up, which Mandarin's passive with no marker avoids; ràng carries the causes
- **14. Register, dialect, child speech:** Dear Sir, I regret to inform you…; Sorry, mate, it didn't go through; I wanna go park!
  - Mandarin: written and spoken styles differ a lot (很遗憾地通知您 against 没通过，哥们儿); a child's 我要去公园
  - We: one register for all three: we drop what Mandarin keeps. Likely a limit the author chooses (Q2); then one probe stays as a guard
- **15. Wordplay, ambiguity, idiom:** time flies like an arrow; fruit flies like a banana; she gave him a piece of her mind, and then a piece of cake
  - Mandarin: English puns are lost in Mandarin too; Mandarin has its own sound puns (谐音) and four-character sayings (成语)
  - We: lost, as in Mandarin; what matters is the strategy (literal, explained, dropped) and that a literal "piece of her mind" is caught as added by the judge
- **16. Things bound to a culture (realia):** at the wedding the bride and groom exchanged rings, signed the register, shared a meal; fermented fish paste and banana leaves
  - Mandarin: a word for each (婚礼, 交换戒指, 登记, 鱼露, 芭蕉叶)
  - We: descriptions and quoted names (W16): we say more than Mandarin; the measure is the length and whether a reader recognizes the thing
- **17. Long nesting:** the man who had bought the house that stood at the end of the lane where we used to play as children, and whose daughter had once taught my sister to swim, returned last spring
  - Mandarin: with everything before the noun this is hard in Mandarin too; a Mandarin translator would split it as well
  - We: must be split; the measure is whether the split keeps every link (who bought, whose daughter, taught whom), asked as comprehension questions. Partly inherited
- **18. Comparing:** heavier than that one, but not as heavy as the crate; sings more beautifully than her brother, though he sings louder; the water grew warmer as the day went on
  - Mandarin: 比, 没有…那么重, 唱得比她哥哥好听, 越来越暖和 (warmer and warmer)
  - We: bǐ, méi yǒu … (meiyou-not-as), zuì, yī-diǎn; comparing how two people do a thing (verb-de-how with bǐ) is the weak spot; no 越来越 found: we drop it (check)
- **19. Feelings and doubt (psych verbs):** I am afraid of the dark; the news worried her; it seems he was pleased; I doubt she was surprised
  - Mandarin: 我怕黑, 这个消息让她很担心, 他好像很满意, 我怀疑 or 我不觉得她很惊讶
  - We: pà, ràng, kàn-qǐ-lái for "seems" (qi-lai-start), bù jué-dé for doubt: like Mandarin, with fewer words for feelings
- **20. Orders and steps:** first, open the box; then remove the small parts; do not touch the metal strip; if any part is missing, stop and call the office
  - Mandarin: 首先 or 先 … 然后 …, 别碰, 如果少了什么零件，就停下来
  - We: dì-yī for "first" (hao-label), serial verbs, bié, méi-yǒu or méi le for "is missing": like Mandarin
- **21. One tā for everyone:** a man, a woman, a dog and a box in one scene, with he, she and it in every sentence
  - Mandarin: one sound, tā, for all three; in writing 他, 她, 它
  - We: tā, written 他 for all: like spoken Mandarin, less than written. The cast list and quoted names keep them apart; the gloss reads every tā as "he", so the gloss-only reader will mix them up. Judged by who-did-what questions
- **22. Pages full of things:** a kitchen, a toolbox, a farmyard, a visit to the doctor (pages picked from the tag nets, `kb_tags`)
  - Mandarin: a word each (锅, 锤子, 鸭子, 听诊器)
  - We: descriptions: the biggest "we say more" area, counted as our words per thing against Mandarin's characters. Sentences pass 10 words; the cast list breaks down past about four described things; animals and tools come back as "a kind of animal" or "a tool", the commonest weaker verdict in the stories
- **23. The grammar words it lacks:** already, even, not only, just (a moment ago), almost, at all, still and yet
  - Mandarin: one word or frame each: 已经, 连…都 or 甚至, 不但…而且, 刚, 差点儿 or 几乎, 根本, 还 and 还没
  - We: none for the first three (skipped on purpose; their `kb_constructions` rows say how to get by). Three contexts each, so the get-by note is tested by a reader against what Mandarin does in one word
- **24. What starts a sentence:** time words (now, today, at that time), place phrases (on the way home, in the kitchen), a name and a comma
  - Mandarin: 现在, 今天, 那时候, 在回家的路上 start sentences freely
  - We: our words match Mandarin's, but the parser breaks on some (xiàn-zài, "zài … lù shàng"): a parser problem, not a language one. This set becomes a quick guard once they are fixed
- **25. Readings that multiply:** sentences built to tempt the parser (tā shuō read as a call, a long "X-de fàn" read as one noun)
  - Mandarin: has such ambiguities too, and a reader settles them; so the comparison is the readers' first reading, not the parser's count
  - We: many readings; the meant one sometimes past the first 500. Judged by readings per sentence and whether the meant one is found
- **26. Numbers and time in full:** past 99, years (1859), dates, clock times, money, per cent, fractions, "three or four", "about twenty", "the eleventh"
  - Mandarin: 一八五九年 (digits for a year), 一百八十 (places for a number), 百分之二十, 三四个, 大概二十, 第十一; 两 against 二
  - We: digits past 99, so a year is like Mandarin and a number is not; per cent and ranges to check
- **27. Names and foreign words:** people, places, titles (Dr., Mrs.), short forms (BBC), words from other languages (déjà vu)
  - Mandarin: names in sound-alike characters (伦敦, 福尔摩斯), letters kept (BBC), titles after the name (华生医生)
  - We: quoted names in pinyin (W16); a title needs a description once
- **28. Questions of every kind:** yes or no, what, who, which, why, how, how many, A or B, "isn't it?", a question that wants no answer, "You did what?", "I wonder whether…"
  - Mandarin: 吗, 呢, A不A, 还是, 是不是 for "isn't it?", 难道 for a question that wants no answer, 不知道…是不是 for "I wonder"
  - We: ma, verb-bu-verb, hái-shì, shénme, wèi-shénme; no 呢 or 难道 found (check)
- **29. Talk:** well, anyway, actually, by the way, oh, of course, I mean; a dialogue of quick turns where someone cuts in
  - Mandarin: 嗯, 反正, 其实, 顺便说一下, 哦, 当然, 我是说
  - We: to find out; most likely dropped
- **30. Odd input (for the online page):** typos, ALL CAPS, emoji, a bullet list, headings, a web address, a line of code, two languages mixed, one word, 2,000 characters, and a text with instructions in it ("ignore the above and …")
  - No Mandarin side. Expect: translated, never obeyed; what was skipped is said in the notes
- **31. Saying one thing as another:** metaphor, simile, personification, a proverb (the short form of the poetry passages)
  - Mandarin: 像 and 好像 for "like"; four-character sayings for proverbs
  - We: "like" to check; a proverb explained rather than matched
- **32. The same text at four levels:** one passage at lessons 8, 15, 22 and the whole dictionary; how much of it is sayable at each (the sayability curve)
  - Mandarin: the HSK levels are Mandarin's own ladder; set beside our lessons: at which HSK level a Mandarin learner could say the same passage
- **Sets with no answer key (metamorphic):** relations between translations, checked without a gold text
  - **Same meaning:** two English wordings of one idea; the readers must read them the same
  - **One change:** add a "not", swap the doer and the one it is done to, swap come and go, change a number; the translation must change and the reader must notice
  - **Order:** the because-part, if-part or when-part first or second; same reading
  - **Swap a noun:** wolf, dog, fox in one frame; what a long description costs the sentence, against one Mandarin character each
  - **Twice:** the same text in two fresh sessions; how many words they share, and whether a glossary row makes them agree

## 5. The passages

12 to 15 excerpts of 80 to 300 words, each with the edition and its Project Gutenberg number, a plain-English gold sketch (an old text otherwise tests the sketch step, not the language), 3 to 5 comprehension questions, and a natural Mandarin translation (C6). Published before 1930 is public domain in the US; check each edition, translations included. Picks to start from:

- **Dialogue with rank:** *Pride and Prejudice* (1813), chapter 1, Mr and Mrs Bennet; Chekhov in Constance Garnett's translation (1916 to 1922; check the date of the one picked)
- **Working it out:** "A Scandal in Bohemia" (1891), Holmes reading Watson's boots and the servant girl; how-you-know and "must have"
- **Action:** *Treasure Island* (1883), a chase or the apple barrel (chapter 11); motion, position, overheard speech
- **Sound and light:** *Walden* (1854), "Sounds"; *Moby-Dick* (1851), the opening of "Loomings"
- **Inside a mind:** *Frankenstein* (1818), the night the creature wakes (chapter 5 in most editions, chapter 4 of volume 1 in the first); fear, doubt, regret
- **Explaining:** *The Time Machine* (1895), chapter 1, the four dimensions; definitions, if-then
- **Numbers and causes:** *On the Origin of Species* (1859), chapter 3, the elephant's slow breeding counted over centuries
- **Formal:** the Declaration of Independence (1776), second paragraph; rights, duties, long noun phrases
- **Poetry:** Psalm 23 (King James Bible); Shakespeare's Sonnet 18
- **Play on words:** *Alice in Wonderland* (1865), the Mouse's long tale and tail (chapter 3); the Mock Turtle's lessons (chapter 9); *The Odyssey* in Samuel Butler's prose (1900), Book 9, "Noman is killing me"
- **Things of a culture:** Grimm's "Hansel and Gretel" in Margaret Hunt's translation (1884)
- **Dialect and a child's voice:** *Adventures of Huckleberry Finn* (1884), the opening
- **Steps and amounts:** a recipe from *Mrs Beeton's Book of Household Management* (1861)
- **One long sentence:** the opening of *A Tale of Two Cities* (1859)
- **A control on home ground:** an Aesop fable in Townsend's translation (1867); it should pass, and if it doesn't, the judges are too strict
- **The Mandarin of a passage:** several of these have published Chinese translations, but most are not free to copy; the battery uses its own Mandarin, written for the probe (Q9)

## 6. A probe

What each probe holds, as data (where it lives is Q5):

- `id`, `set` (from §4), `kind`: sentence set, passage, coverage probe or metamorphic set
- `english`: the text; for a passage, the original
- `source`: title, author, year, edition, Gutenberg or Tatoeba number, licence, word count; "written for the battery" for invented ones
- `targets`: the patterns, the `kb_constructions` rows and the features it tests; filled first by running `kb_constructions` on the English, then by hand
- `gold`: the frozen sketch (ideas, needed or colour), the differences that must survive, the comprehension questions with their answers, and the siblings (the ids of the probes it is paired with)
- `mandarin`: the Mandarin side (idea 2)
  - `text`: a natural Mandarin translation, the way a Mandarin speaker would say it, not a word-for-word copy of ours; Tatoeba's own where there is one, else Claude's, marked as such (Q9)
  - per target: the Mandarin word or pattern that says it, and its HSK 3.0 level (`kb/yardsticks/hsk30-grammar.json` for grammar points)
  - per target: whether Mandarin keeps the difference, so the four labels of idea 2 can be given
- `expect`: said, compensated (how), neutralized or lost, per target, for us and for Mandarin
- `level`: optional; the whole dictionary when left out (TRANSLATOR_PLAN.md Q2)
- `heldOut`: true for the part never stored (idea 8)

## 7. A run: readers, outcomes, numbers

- **Readers.** Each sees only one translation, never the English or the sketch
  - The blind reader as it is (the Hao-shuo-de, the gloss, the lesson)
  - The gloss-only reader: the word-by-word English gloss and nothing else
  - The questions reader: answers the frozen comprehension questions
  - The choice reader: one translation and all its English siblings, shuffled; picks one, twice, in two orders
  - A second model as the blind reader, on a sample (Q4)
- **The Mandarin arm.** The Mandarin translation goes through the same readers (blind, questions, choice) and the same judge. Its result per target is the line ours is compared with: a difference Mandarin's readers cannot recover either is inherited; one they recover and ours cannot is ours to fix or to accept
- **The Mandarin-speaker reader** (Q8): reads only our hanzi line, as a Mandarin speaker would, and says what it understands and what looks wrong as Mandarin (他 for an animal, 不-分 for 部分)
- **The judge** compares the readings with the frozen gold sketch, not the session's own; the session's sketch is compared with the gold one separately (ideas the translator never saw)
- **Outcome per target**
  - **said:** the difference comes back
  - **compensated:** it comes back another way (a word, a description, the context), with how
  - **neutralized:** siblings read the same, or the choice reader is at chance
  - **lost:** the idea does not come back
  - **broke:** an unknown word, no meant reading, over the limits, or the session failed
  - **made up:** the translator used grammar the patterns don't have (K22 forbids it); the checks should already stop this, so one that gets through is a finding about the checks
  - and, from the Mandarin arm, one of idea 2's four labels
- **Numbers per probe:** our words per needed idea against Mandarin's characters per idea, readings per sentence, the longest description, repair rounds, time; the share of our words that are Mandarin's own word for that meaning, and the HSK level of each Mandarin way we don't have (the step to Mandarin)
- **Per run:** the map (each set and pattern with its outcomes, ours and Mandarin's side by side), coverage (patterns and rows no probe met), the surprises (expect against result), the top gaps, and what changed since the last run
- **Planted faults:** a share of every run is passing translations broken on purpose; the run reports how many the readers and the judge caught. Under 90% means the judging, not the translator, is the first thing to fix

## 8. Where the findings go

- **The gap log** (`kb/translation-gaps.json`) gains a kind (words, grammar, use, register), an outcome (§7), the Mandarin label (idea 2) with the Mandarin word or pattern, the set and the probe
- **"We drop what Mandarin keeps"** comes first, for the author: each with the Mandarin word or pattern that keeps it and its HSK level, as a candidate for a word or a pattern, ranked with the gains for the growth to about 1,000 (K29)
- **"We say more than Mandarin"** goes to `kb_frontier` and `kb_candidates`: the words whose descriptions cost the most in real texts
- **"Mandarin loses it too"** is recorded once as expected and not counted against the language
- **Grammar** goes to the grammar gaps and to pattern proposals, for the author's review
- **Use and register** go to a list of limits: each one the author either keeps as a choice of the language or marks to fix (Q2)
- **Hanzi that differ from Mandarin's** (不-分, 他 for animals) go to a list for the author: kept on purpose, or a note for learners moving on to Mandarin
- **Translator misses** go to the skill, the glossary or the tools
- **Every fix** gets a guard probe (idea 10)
- **The empty `hsd` fields** of `kb/yardsticks/wals-features.json` and `toki-pona-rules.json` get proposals from what the runs show, marked proposed, beside the Mandarin values already there

## 9. Outside benchmarks to borrow from

Checked by web search on 2026-10-22; each line says what it is, what it measures, and how it is used here. **Direct** means usable as it is; **adapt** means its method is borrowed but the data must be ours.

- **9.1 ConlangBench** (arXiv 2608.03505, August 2026): LLMs on 21 existing conlangs, translation both ways (conlang to English, English to conlang), scored with chrF++ because no embedding model reads conlangs; over 21M parallel pairs, 12 models. Finds models do better on a posteriori conlangs (words taken from natural languages) than a priori ones
  - Direct: chrF++ as a cheap extra number for the Twice set (§4, metamorphic) and for back-translation against the source, beside the judge, not instead of it
  - Direct: its finding is a warning for us: Hao-shuo-de is a posteriori from Mandarin, so a model may score well by reading Mandarin into it; the gloss-only reader (idea 7) is the check
  - Adapt: Hao-shuo-de is not in it; our sentences (Tatoeba 100, the stories, the probes) take its two-direction format, with the held-out part (idea 8) as its test split
- **9.2 Camlang and Camlang-CSQA-v0** (Liu et al., "The Gold Medals in an Empty Room", arXiv 2509.00425, 2025): a made-up language learned only from a grammar book and a dictionary, to test whether a model can apply explicit rules; CSQA-v0 is CommonsenseQA put into Camlang. GPT-5 98% in English, 47% in Camlang, humans 87%; most model wins were shallow word matching
  - Adapt: the closest model for a grammar-comprehension and learnability check: a fresh reader gets only the lessons and the dictionary (no Mandarin hint, no pinyin-to-hanzi) and answers questions written in Hao-shuo-de; compare with the same questions in English and in Mandarin (the Mandarin arm). A few questions from CommonsenseQA can be put into Hao-shuo-de the same way
  - Direct: its split of errors (morpho-syntax, word meaning, reasoning) as tags in the gap log, beside words, grammar, use and register
- **9.3 Open Machine Translation for Esperanto** (de Gibert and de Gibert, SIGUL 2026, arXiv 2603.29345): the first open benchmark of MT for Esperanto, six directions among English, Spanish, Catalan and Esperanto; rule-based, encoder-decoder and LLM systems from 600M to 9B; NLLB best, LLMs behind dedicated MT, human raters preferring NLLB in about half of comparisons
  - Adapt: the method, not the data: automatic metrics plus a pairwise human (author) preference on a sample, our translator against a plain LLM prompt with the dictionary, to show what the skill and tools add
  - Direct: as a reference point for an auxiliary language with a real corpus; Hao-shuo-de has no corpus, so its numbers are not comparable, only its setup
- **9.4 "A methodological proposal for conlang evaluation"** (Annual Review of Applied Linguistics 44, March 2024, pp. 126-132, doi 10.1017/S0267190524000084): a framework for building criteria to judge conlangs of different kinds. Only the abstract was readable; the criteria themselves, and whether they split auxiliary from artistic languages, are not confirmed
  - Adapt: frame Q1 and Q2 by purpose: Hao-shuo-de is a learning bridge to Mandarin, so its criteria are sayability, learnability and the step to Mandarin (idea 2), not beauty or naturalness. Read the full article before citing its criteria
- **9.5 Complexity scoring with Nichols' metric** (Sokolova and Makarov, "From Esperanto to Volapük", IEEE Access, 2024, doi 10.1109/ACCESS.2024.3450685): seven auxiliary languages scored with Johanna Nichols' complexity metric (inventories plus inflection points per sentence, among other assays) and compared with natural languages and other conlangs; also a word co-occurrence graph measure
  - Adapt: score Hao-shuo-de with Nichols' metric once, by hand, from the patterns list and `wals-features.json`, beside Mandarin's score; with no inflection, most of the score is in syntax and words, so expect it low. The graph measure can run on the translations of a full run. A number for the author, not a pass mark
- **Dropped:** none of the five; 9.4 is kept with its content unconfirmed

## Q. Questions for the author (one at a time; answers become ST1 and on)

- [?] **Q1. What a stress run is for**
  - (a) A map of where it breaks, with no pass mark; the Q8 bar stays the quality bar
  - (b) A second bar, like Q8, that a run must pass
  - (c) Both: a map, plus a short list of differences that must never break
  - **Claude's pick:** (c); the short list is Q2
- [?] **Q2. The promises and the limits.** Which differences the language promises to keep, and which it gives up on purpose
  - **Claude's proposal:** keep yes and no, who did what to whom, numbers, the order of events, done against not yet, if against because, all against some against none, can against may, here against there. Give up on purpose: register and dialect, honorifics, gender, grammar for how you know, tense agreement. Open: must against should against want (now all yào, where Mandarin has three words), counterfactuals (now like a plain if, where Mandarin has 早知道), "whose"
  - A rule of thumb to decide by: what Mandarin also gives up, we may give up; what Mandarin keeps needs a reason to drop
  - Asked one difference at a time, or in a batch the way composites are reviewed
- [?] **Q3. The held-out part.** A third of the probes never stored in the memory or the glossary
  - **Claude's pick:** yes, a third, picked by set so every set has some
- [?] **Q4. A second model as a reader.** It costs a run more but decorrelates the judging
  - **Claude's pick:** a Sonnet blind reader on a fifth of the probes; widen it if it disagrees often
- [?] **Q5. Where the battery lives**
  - (a) `src/data/stress/`, one TypeScript file per set, checked by check-data like the maps
  - (b) `kb/stress/`, JSON
  - **Claude's pick:** (a): the gate can check that every target exists and every source has a licence
- [?] **Q6. Old English or plain English for the passages**
  - **Claude's pick:** translate the original; the plain-English gold sketch is the answer key. A probe that fails only on old wording is a sketch-step finding, not a language one
- [?] **Q7. Levels.** The whole dictionary only, or also at lessons (set 32)?
  - **Claude's pick:** the whole dictionary, plus the curve for three passages
- [?] **Q8. Should a Mandarin speaker understand the hanzi line?** If yes, the Mandarin-speaker reader (§7) is part of every run and "looks wrong as Mandarin" is a finding; if no, it runs on a sample, as information
  - **Claude's pick:** a sample, until the author decides how close to Mandarin the written form should stay
- [?] **Q9. Who writes and checks the Mandarin**
  - **Claude's pick:** Tatoeba's own Mandarin where a sentence comes from there; Claude writes the rest, natural rather than word for word, marked as Claude's; the author checks a sample of 20 before the first full run

## Build order

- Q1 and Q2 first: they decide what counts as a failure
- Then A and B, then C (sets 1 to 20 as sibling sets with their Mandarin, and 21 to 25, before the passages), then D and E
- F and G beside C to E
- H once one full run is in; I last
- Nothing here waits for the login except a real run (I4); everything up to a run by hand can be built now

## A. The profile

- [ ] **A1. The feature profile:** for each set of §4, the patterns and `kb_constructions` rows that say it, how Mandarin says it (the word or pattern and its HSK level), and the prediction for both, checked against the tools (`kb_lookup`, `kb_patterns`, `kb_check_reading`) rather than written from memory; every "check" in §4 settled here
- [ ] **A2. The coverage targets:** the 145 patterns, the 112 rows, the 6 patterns no row names, the HSK 3.0 grammar points (`kb/yardsticks/hsk30-grammar.json`; first the ones the language skips: 已经, 不但, 甚至 and the rest), the 37 relations of `ud-relations.json`, the 25 features of `wals-features.json`, the 65 sentences of `nsm-sentences.json`
- [ ] **A3. The promises** from Q2, as a list the run reads

## B. The probe format

- [ ] **B1. The format** of §6, and a check in check-data: every target exists, every source has a licence and a word count, every sibling id exists, every probe has a gold sketch, a Mandarin side and an expectation
- [ ] **B2. Tagging:** `kb_constructions` on each English fills the targets; Claude corrects them by hand
- [ ] **B3. The coverage report:** which patterns, rows and A2 targets no probe reaches

## C. Writing the probes

- [ ] **C1. Sets 1 to 20** as sibling sets, 3 to 6 sentences each, with gold sketches, questions and expectations
- [ ] **C2. Sets 21 to 32**
- [ ] **C3. The passages** (§5): 12 to 15, each with its plain gold sketch and questions
- [ ] **C4. Coverage probes** for every pattern and row that C1 to C3 leave out (B3)
- [ ] **C5. The metamorphic sets** (end of §4)
- [ ] **C6. The Mandarin side** of every probe (§6): the natural translation, the Mandarin way per target with its HSK level, and whether it keeps the difference (Q9)

## D. Readers and judges

- [ ] **D1. The judge against the gold sketch** (the pipeline's judge, given the frozen sketch instead of the session's)
- [ ] **D2. The questions reader**
- [ ] **D3. The choice reader** (shuffled, run in two orders; chance is one over the number of siblings)
- [ ] **D4. The gloss-only reader**
- [ ] **D5. The second-model reader** (Q4)
- [ ] **D6. Planted faults:** a script breaks passing translations (drop bù or méi, swap the doer and the one it is done to, swap lái and qù, change a number, drop le, give tā the wrong person) and the run counts what is caught
- [ ] **D7. Controls:** the book's own stories and the Aesop fable go through the readers as they are; they must pass
- [ ] **D8. The Mandarin arm:** the Mandarin translations through D1 to D3, with results stored beside ours
- [ ] **D9. The Mandarin-speaker reader** of our hanzi line (Q8)

## E. Scoring and the map

- [ ] **E1. The outcome per target** (§7)
- [ ] **E2. The oracle attempt** for each failure: Claude by hand, then the author when it matters; the result is "the translator missed" or "the language can't"
- [ ] **E3. The Mandarin labels** (idea 2), from the Mandarin arm's results and the Mandarin side of each probe
- [ ] **E4. The cost numbers** per probe, ours beside Mandarin's
- [ ] **E5. The surprises:** expect against result, both ways, for us and for Mandarin
- [ ] **E6. The report:** `review/stress/<date>.md` with the map (ours and Mandarin's side by side), "we drop what Mandarin keeps" first, coverage, surprises, top gaps and the planted-fault catch rate; columns on the scoreboard (`stress_probes`, `stress_said`, `stress_neutralized`, `stress_broke`, `stress_caught`, `stress_mandarin_keeps`)
- [ ] **E7. Run against run:** what got better, what got worse, and which guard probes broke

## F. Gaps and limits

- [ ] **F1. The typed gap log** (§8)
- [ ] **F2. The routing** of §8, as a command that prints each group with where it goes
- [ ] **F3. The limits list:** the author's decision on each (kept as a choice, or to fix), recorded as ST decisions
- [ ] **F4. Guard probes** for each fix

## G. Keeping the test honest

- [ ] **G1. Held out:** held-out probes hidden from `kb_memory` while a run goes (as `HAOSHUODE_MEMORY_SKIP` hides the stories) and never proposed to the glossary
- [ ] **G2. Fresh variants:** per run, other nouns, numbers and names in the sibling frames, so a stored sentence does not help
- [ ] **G3. A contamination number:** the share of each translation that `kb_memory` would have handed over

## H. Growing the battery

- [ ] **H1. A breaker agent:** reads the profile, the gap log, the Mandarin labels and the last report, and writes probes meant to break the language; only those that break something, or guard a fix, are kept
- [ ] **H2. Finding the edge:** 5 variants around each break
- [ ] **H3. Retiring:** probes that passed three runs in a row leave the full run, a few staying as guards
- [ ] **H4. Real texts:** after going live (TRANSLATOR_PLAN.md S10), texts people send, only with their permission and never stored with their name

## I. Running it

- [ ] **I1. The command:** `npm run translator -- stress`, with `--set`, `--held-out`, `--smoke`; one session per sibling set or passage, not per sentence, to keep the cost down
- [ ] **I2. Slices:** smoke (about 20 probes: the guards and a few per family) on every change to the skill or the prompt; one set at a time while working on it; the full battery when patterns or words change, and before a push of translator work
- [ ] **I3. The cost:** time and tokens per probe from the first run, the Mandarin arm included; a budget per slice
- [ ] **I4. The login:** a real run waits for it, as F1 does; until then, by hand through subagents

## J. Wrap-up

- [ ] **J1.** The READMEs refresh on commit
- [ ] **J2.** Fast pass on every commit; `npm run test:push` before a push
- [ ] **J3.** Tick TRANSLATOR_PLAN.md F4 to match

## Log

- 2026-10-22 Plan written from the battery the author brought (20 diagnostic sets, 12 kinds of excerpts, blind back-translation, a gap log). Kept: short pieces, public-domain sources, the 20 sets, the four kinds of gaps, neutralized or compensated or lost. Changed: probes start from the language's own patterns, come as sibling sets with a frozen answer key and a prediction, and a failure is checked by hand before it counts against the language. Added: 12 sets for what this language finds hard, readers that don't lean on Mandarin, planted faults, a held-out part, and a loop that grows the battery from its own failures. Three findings from writing it: must, should and want are all yào; "half" is 3 or 8 words; "they say" has no form.
- 2026-10-22 The author: compare every probe with real Mandarin, how Mandarin says it and how we do. Added idea 2 (four labels: like Mandarin, Mandarin loses it too, we drop what Mandarin keeps, we say more than Mandarin), a Mandarin and a We line under every set of §4, the Mandarin side of a probe (§6), the Mandarin arm and the Mandarin-speaker reader (§7), the step to Mandarin (HSK levels, hanzi that differ), Q8 and Q9, C6, D8, D9 and E3.
- 2026-10-22 Added §9: five outside benchmarks checked by web search (ConlangBench, Camlang-CSQA-v0, open MT for Esperanto, the ARAL conlang-evaluation proposal, Nichols complexity scoring of auxiliary languages), each marked direct or adapt for this battery. None dropped; the ARAL article's criteria are known only from its abstract.
