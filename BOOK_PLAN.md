# Book Plan — Restructure to intro-3

Living plan and checklist for rebuilding the lessons to match `src/content/intro-3.ts`. Tick boxes as work lands. `BOOK_STRUCTURE.md` describes the book as it _is_. This file describes where it's _going_.

---

## 1. Tone guide

**Who we write for:** learners who want to _say things_. They are not language scientists.

**What we are:** real Mandarin, boiled down to the simplest version that still works. We are **not** Toki Pona. Every rule is ordinary Mandarin, and every word is a real Mandarin word.

**Rules:**

1. **Examples over descriptions.** If a point can be shown, show it. Prose is the glue between examples, not the main content.
2. **Start from what you want to say.** Open each point with the learner's goal ("To say something is _not_ something…"), not with the grammar ("Negation is formed by…").
3. **One idea per sentence.** Short sentences. No semicolons chaining three rules together.
4. **No jargon.**
   - **Grammar terms, only where really needed (D34):** _noun, verb, subject, object, adjective, adverb, particle, pronoun, preposition, measure word_. Use them when a lesson can't do without them, and prefer plain wording ("who does it", "what it's done to") when that's just as clear.
   - **Plain name first, then the term:** the first time a lesson needs one of these, give the plain name with the term in brackets, and use the term after that: _describing word (adjective)_, _pointer (pronoun)_, _counting word (measure word)_. _Question, sentence, word_, and _grammar_ are everyday words.
   - **Everything else from grammar books is banned**, with no exceptions and not even in brackets. That includes _clause, phrase, tense, marker, plural, negation, coverb, classifier, predicate, auxiliary, construction, causative_.
   - The lists live in `scripts/jargon.js`. **`npm run check-jargon`** is the gate: it lists every banned word in the lessons and fails if it finds any. The rule is for the lessons only (D32); `--all` also reports the intros, appendices, and dictionary. Add chapter ids to check just those (`npm run check-jargon -- lesson-05`). It also counts the core terms per chapter, so heavy use stands out.
5. **No "Hao-shuo-de collapses / simplifies X" meta-talk inside lessons.** That belongs in the intros and appendices. Lessons just teach the thing.
6. **Use only dictionary words.** The approved additions (§4d) join the dictionary in Phase 1. If a lesson needs a missing word, stop and flag it.
7. **Summaries and TL;DR lines are very short.** Use simple sentences and simple words. `check-book` enforces the limits and the jargon ban on these fields, and `npm run check-summaries` checks every chapter's summary. Both run in `npm run build`. The limits live in `scripts/limits.js`.
   - `summary`: two parts. First, one line on why a learner wants this. Then "In this lesson, you'll be able to say …", with quotes. Up to 50 words. _We often need to say when something happens. In this lesson, you'll be able to say "I ate." and "I will eat."_
   - `tldr`: the one thing to remember. Up to 20 words. _Put {{word:le}} after a verb to say it is done._
   - `necessity`: why it helps. It shows after a "Why" label. Up to 20 words. _Now you can talk about what comes next._

**Before and after:**

> ❌ _"Question words like shénme sit right where the answer would go, ma turns any statement into a yes-or-no question, and A-not-A reduplication asks the same thing without ma."_
>
> ✅ _"To ask a yes-or-no question, put **ma** at the end. To ask 'what?', put **shénme** exactly where the answer would go."_

### Lesson template

```
title
summary            why you'd want this + "In this lesson, you'll be able to say …" (rule 7)

For each teaching point -- one module, one file (2–10 per lesson):
  New words the word cards this point is the first to use (~6 per lesson in all)
  Say       one line: the thing you want to express
  Pattern   one line: e.g.  NOUN + bù shì + NOUN
  Info      the point's pattern in one line, with an example (a note for an aside)
  Examples  3–6, each with translation + audio
  Try it    at least one exercise; answers are shown with the module's exercises
  FAQ       optional: questions a reader may have about this point
```

- **A lesson is assembled from modules** (D52): `index.ts` lists them in reading order, and each module file holds one point in every language. The page shows each module as word cards, explanation, info block, examples, exercises, FAQ, so the reader meets a few words at a time and practises each point right after it.
- A teaching point's prose is **at most 1–2 plain sentences** beyond Say + Pattern.
- Every prose block has a `tldr` and a `necessity`, written to rule 7.
- Every module has an **info block**: its pattern in a plain line, with an example. The grammar overview chapter is built from these lines, one box per lesson, so each line must make sense on its own.
- Every word a lesson introduces appears in at least one of its examples **and** at least one of its exercises, and ideally in 3 sentences (§4a rule 7).

---

## 2. Decisions log

| #   | Decision                                                                                                                                                                                                                                                                                                                                                                          |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D1  | intro-3 is the source of truth. It is modified **only where really needed**. The splits below (Time/Space ×4, Modifiers ×4, Relationships ×2) and the L22 merge (D17) need it, so intro-3 gets updated to list them.                                                                                                                                                              |
| D2  | Prepositions are no longer a lesson. They go wherever their meaning fits: zài / cóng go to Time/Space, and gěi / yòng / yīnwèi / duì go to Relationships.                                                                                                                                                                                                                         |
| D3  | Place words (lǐ, shàng, xià, hòu, pángbiān…) go to **Space 1**.                                                                                                                                                                                                                                                                                                                   |
| D4  | Verbs (L5) keeps only SVO and negation. Time markers move to **Time 1/2**. Direction endings move to **Space 2**.                                                                                                                                                                                                                                                                 |
| D5  | "Time and Space" becomes **Time 1, Time 2, Space 1, Space 2**.                                                                                                                                                                                                                                                                                                                    |
| D6  | X-de huà ("if X") moves to **Relationships 2**, not Time.                                                                                                                                                                                                                                                                                                                         |
| D7  | "Changing the role of a word" is mainly about **the jobs of -de**: making nouns, "how" words, and so on. It ends with a brief note on other ways, such as compounds and one word doing several jobs.                                                                                                                                                                              |
| D8  | -de is **drip-fed**: L3 as describer-de-noun, then L4 as wǒ-de "my". Then L18 gathers every use together. (L2 no longer uses it; see D21.)                                                                                                                                                                                                                                        |
| D9  | ~~Measure word gè (old L11) merges into Modifying Nouns (L3), together with this one, that one, and many.~~ Replaced by D26: gè, this one, and that one go to L4. "many" stays in L3.                                                                                                                                                                                             |
| D10 | "More Modifiers" becomes **four lessons**: How much, Comparing, Also / all, and Becoming and making.                                                                                                                                                                                                                                                                              |
| D11 | "Expressing Various Relationships" becomes **two lessons**: inside a sentence, and linking sentences.                                                                                                                                                                                                                                                                             |
| D12 | The dictionary is **closed, plus a short approved list** (§4d, D18).                                                                                                                                                                                                                                                                                                              |
| D13 | **English first.** ru/zh stay blank until the English for that lesson is approved.                                                                                                                                                                                                                                                                                                |
| D14 | Plan and checklist live in this file.                                                                                                                                                                                                                                                                                                                                             |
| D15 | Workflow: **Phase 1 skeleton** (new layout, content moved, build green), then **Phase 2 lesson-by-lesson rewrite** with a user review after each lesson.                                                                                                                                                                                                                          |
| D16 | Size: 2–4 teaching points, about 6 new words, 15–20 minutes per lesson.                                                                                                                                                                                                                                                                                                           |
| D17 | L22 (Particles and Other Special Words) **merges into L21**. The book has **21 lessons**, split 6 / 9 / 6 across the three sections. (Q1)                                                                                                                                                                                                                                         |
| D18 | **Approved additions:** dào (L11), guò (L8), huà (L20), and sān, sì, wǔ, liù, qī, bā, jiǔ, shí (L16). The vocabulary becomes **147 words**: 136 + 11. (§4d)                                                                                                                                                                                                                       |
| D19 | **Not added:** ~~dōu~~ (added later, D35), kěyǐ, shíhou, tài / zuì / gèng, zhǐ, suǒyǐ, gēn, and ne / ba / a. "All" was quánbù until D35.                                                                                                                                                                                                                            |
| D20 | zài: **Time comes before Space.** L8 teaches zài as "right now", and L10 adds "be at a place". (Q3)                                                                                                                                                                                                                                                                               |
| D21 | **xiě-de dōngxi is dropped from L2.** L3 is the first -de (see D8). (Q4)                                                                                                                                                                                                                                                                                                          |
| D22 | intro-3's Pre-Verbs wording changes from "attempt, learning, continuation" to **"wanting, being able to, knowing how, and loving to"**. No words move. (Q2)                                                                                                                                                                                                                       |
| D23 | The vocab spread in §4b is **approved**, including the six theme-word moves.                                                                                                                                                                                                                                                                                                      |
| D24 | **Lesson titles match intro-3 exactly**, and so do the sections. intro-3 lists all 21 lessons by name. Where intro-3's topic wasn't split, the lesson keeps intro-3's name (L18 is "Changing the Role of a Word"). `npm run check-book` fails the build if they drift apart.                                                                                                      |
| D25 | **The book uses no jargon** (rule 4, no bracket exception). Summaries and TL;DR lines are very short and simple (rule 7). `check-book` enforces both for those fields on every build.                                                                                                                                                                                             |
| D26 | **Pronouns are pointers.** L4 is renamed from "You and I" to **"Pointing at People and Things"**. It teaches pointers for things, including the counting word gè (zhè-ge "this one", nà-ge "that one"), then pointers for people (wǒ, nǐ, tā), then whose it is (wǒ-de). nà and gè move from L3 to L4, and fùmǔ moves from L4 to L3 to keep the load even. intro-3 says the same. |
| D28 | **men is added** (Q5), introduced in L4 for wǒ-men / nǐ-men / tā-men. The vocabulary becomes **148 words**. shēntǐ moves from L4 to L12 to keep L4 at 10 new words.                                                                                                                                                                                                               |
| D27 | **Core terms are allowed, sparingly:** noun, verb, subject, object, only where really needed (rule 4). Everything else is banned. **`npm run check-jargon`** is the whole-book jargon gate. It isn't part of `npm run build` yet, because the lessons not yet rewritten, the appendices, and the dictionary's part-of-speech labels still fail it.                                |
| D29 | **qián moves from L9 to L10.** It is a place root like lǐ, shàng, xià, and hòu: it joins miàn to make qián-miàn, "in front". L9 teaches when, finished, after, start, and stay. |
| D30 | **New spellings (your edits, 2026-09-27):** qian2 is **qián** (was qiánmiàn), and di4 is **dì** (was tái). |
| D31 | **èr is added** (Q7), introduced in L16: counting aloud (yī, èr, sān), "number two" (èr-hào), and 12 / 20 (shí-èr, èr-shí). liǎng stays for two things (liǎng-ge). The vocabulary becomes **149 words**. |
| D32 | **The no-jargon rule is for the lessons.** The dictionary and the appendices keep their own wording; `check-jargon` checks the lessons (add `--all` to see the rest). The author will rewrite "Why Minimality Works" personally. |
| D33 | **Every word is reused (rule 7).** Each word comes back in 2 later lessons, in examples that fit what that lesson teaches (for example, the numbers return in the color lesson and in "and / or"). The target is capped at the lessons that are left, so L20 words need only L21 and L21 words need nothing. `npm run check -- --strict` passes. |
| D34 | **Grammar terms are allowed (2026-09-27):** adjective, adverb, particle, pronoun, preposition, and measure word join noun, verb, subject, and object. A lesson gives the plain name first with the term once in brackets, then uses the term: "describing word (an adjective)" in L1 and L3, "pointers (pronouns)" and "counting word (measure word)" in L4, "adverbs" in L12, "particles" in L8. Everything else in `scripts/jargon.js` stays banned. |
| D35 | **dōu replaces quánbù.** "All" is dōu (wǒ-men dōu chī), "everything" is shénme-dōu, "nothing" is shénme-dōu bù / méi, and "everywhere" is nǎlǐ-dōu. quánbù leaves the dictionary. |
| D36 | **The missing NSM atoms join the dictionary**, plus a word for value: shǎo (L3), kěnéng (L7), xiànzài and fāshēng (L8), yīxià (L9), dòng, yuǎn, and jìn (L11), jiàzhí (L12), biéde and zhǒng (L13), bùfen (L14), and huó (L20). Atoms already covered by dictionary words stay as they are: think is juéde, before is qián, some is yǒu-de, more is bǐ or duō, and like / the same is yīyàng. The vocabulary becomes **162 words**. |
| D37 | **One rule for describing a noun: adjective-de + NOUN.** Mandarin often drops de after a short adjective (dà dìfang), but Hao-shuo-de always keeps it (dà-de dìfang), because with de it's always correct Mandarin. The exception is duō and shǎo, which need hěn in front (hěn-duō-de rén, never duō-de rén). Taught in L3. |
| D38 | **wèishénme goes before the verb, like zěnme:** nǐ wèishénme bù chī? (before bù too). Mandarin also allows it at the start (wèishénme nǐ bù chī?), but after who is the usual place, and it gives one rule for both question words. Taught in L6. |
| D39 | **fàng (put) joins the dictionary**, taught in L15 with bǎ: wǒ bǎ yīfu fàng zài dì-shàng le. It's the only word added for now. "Wear" and "book" stay out: say what you mean with the words you have (zài shēntǐ-shàng, kàn, xiě-de dōngxi, L18). The vocabulary becomes **163 words**. |
| D40 | **xué (learn) joins the dictionary, and shìchǎng (market) leaves it.** xué is a pre-verb in L7 (wǒ xué xiě, "I'm learning to write") and comes back in L8 and L9. shìchǎng was too specific: a market is gěi-jīn-dé-dōngxi-de dìfāng, "the place where you give money and get things" (L19, where "buy" is gěi-jīn-dé-dōngxi). Words like these go in the composite dictionary (src/data/composites.json): what you say in Hao-shuo-de for a word it doesn't have. It grows in phases, starting with the 500 most common words. The vocabulary stays at **163 words**. |
| D41 | **Six words for the critical gaps in the composite dictionary** (phase 1): yòu "again" and cì "times" (L9), kāi "open" and guān "close" (L14), diǎn "o'clock" and, as yī-diǎn, "a little" (L16), and xiào "laugh, smile" (L21). Each is reused in later lessons; yī-diǎn shows up in L17, L19, L20, and L21. yòu was chosen over zài (再), which would be spelled like zài (在). Everything else the 500 most common words need is said with descriptions (verbose is fine). The vocabulary becomes **169 words**. |
| D42 | **L16 teaches simple sums with the words it has**, plus ná (take). Add: put the numbers together, sān, sì fàng zài yī-qǐ, shì qī. Take away: cóng qī lǐ-miàn ná sān, shì sì. Multiply: put a number together many times, bǎ sì fàng zài yī-qǐ sān-cì. Divide: count how many times you can take it away, cóng shí-èr lǐ-miàn ná sì, néng ná sān-cì. There are no words for plus, minus, times, or divided by (jiā, "plus", would be spelled like jiā, "home"). The vocabulary becomes **170 words**. |
| D43 | **xiè (thank) joins L21, and a new L22, "Doubling Words", ends Section 3.** xiè-xie is "thank you" and bù yòng xiè "you're welcome". L22 adds no words: a verb said twice does it a little (kàn-kan), a describing word said twice is stronger (yuán-yuán-de, hǎo-hǎo xué), and rén-rén / gè-gè / jiā-jiā / cì-cì + dōu mean "every". The book now has **22 lessons**, and the vocabulary is **171 words**. |
| D44 | **Verbs is split in two: L5 becomes "Verbs 1 — Who does what", and a new L16, "Verbs 2 — Direction and result", ends Section 2.** L16 is about what comes after a verb: which way it goes (ná-lái, jìn-lái, ná-chū-lái, fàng-xià), how it ends (zhǎo-dào, nòng-huài, xué-huì), can / can't (kàn-de-dào, kàn-bù-dào), and qǐ-lái "seems" / xià-qù "keep going". The old L16–L22 become L17–L23. Three words join: jìn 进 (go in), chū 出 (go out), huí 回 (back). The old jìn 近 (near) becomes fùjìn 附近 (nearby), a place word used as zài fùjìn. ná moves from Numbers to L16. wán (L9), qǐ-lái (L11), verb-de hǎo (L19), and tīng-dào (L22) stay where they are; L16 builds on them. Decisions above keep the lesson numbers they had when they were made. The book now has **23 lessons**, and the vocabulary is **174 words**. |
| D45 | **A last, catch-all lesson, L24 "Everyday Patterns", says "let" and "help".** There's still no word for "let": wǒ lái + verb (let me), gěi wǒ + verb + yī-xià (let me see), jiào + person + verb (have or let someone; bù jiào, won't let), néng … ma? (may I), and …, hǎo ma? (let's, please). bǎ is not "let": bǎ rén nòng dōngxi isn't Mandarin. One word joins: bāng (help). Later patterns that fit nowhere else go here too. The book now has **24 lessons**, and the vocabulary is **175 words**. |
| D46 | **A batch from the composite dictionary: 18 words join, two leave.** New: xīn 心 (heart), lǎo (old), rúguǒ (if), mǎi (buy), zuǒbiān and yòubiān (left, right), lù (road), kuài (fast), zuì (most), luàn (messy), zuò, zhàn, tǎng, fēi (sit, stand, lie, fly), suàn (calculate), máo (hair, fur), guānxi (relationship), and jiāo (teach). xīn 新 (new) leaves so that xīn can be the heart: "new" is tóu-yī-cì kàn-dào-de, "seen for the first time". huà leaves: "if" is rúguǒ. Left and right are two-syllable words, like pángbiān, so they don't share a sound with yòu (again). Each word is placed in the lesson that needs it, and the composites use only dictionary words (check-book now reads their notes too). The vocabulary stays under 200: it is now **191 words**. |
| D47 | **Lessons have names, not numbers, and one file sets the order.** `src/content/book.js` lists the sections and the lesson ids in reading order; a lesson's number is its place there, and its folder is `src/content/lessons/<id>/` (also its URL). Text points at a lesson with `{{lesson:<id>}}`, which shows its current number, and intro-3's table of contents is built from `book.js` plus one line per lesson id. §4b rows are keyed by id. To move a lesson, move its id in `book.js`. Decisions above (and §4c headings) keep the numbers they had when they were written. |
| D48 | **The chapters after the lessons are in four groups:** Content (things to read: proverbs, stories), Reference (how the language works: pinyin, tone sandhi, grammar patterns), Tools (dictionaries and builders: alphabetical, categorical, and composite dictionaries, sentence builder), and Misc (extra articles: why minimality works, not Toki Pona). `src/content/book.js` lists them by id (`BACK_MATTER`); the sidebar and intro-3 follow it, and check-book makes sure every chapter is in one group. This replaces "Section 4 — Texts, Vocabulary, and Reference". |
| D49 | **yán (salt) leaves; wèidào (taste) joins Modifiers 1 (how-much).** Food is talked about with one word for taste, good or not: wèidào hěn hǎo, wèidào bù hǎo. Salt is now a composite, nòng-hǎo wèidào-de dōngxi, "the thing that makes it taste good". The "but" example is now "It looks good, but it doesn't taste good." The vocabulary stays at **191 words**. |
| D50 | **xìng (sex) leaves, jiù (then, right away, just) joins Relationships 2, and no lesson shows more than 8 examples in a row.** jiù goes right before the verb: rúguǒ nǐ lái, wǒ jiù děng nǐ; wǒ xiànzài jiù qù; jiù shì zhè-ge! A new gate, `check-example-runs`, enforces the limit; longer runs were split into new points (left and right; the road; the number on its own; kinds, times, and parts; parts of the body; laughing; the heart) or trimmed of examples no word needed. The vocabulary stays at **191 words**. |
| D51 | **tōng (go through, lead to) joins Verbs 2 (L16).** tōng-guò + place is "go through" (wǒ-men tōng-guò zhè-ge dìfāng), tōng-dào + place is "lead to" (zhè-ge lù tōng-dào wǒ-de jiā), and bù tōng is "blocked". Here guò means past, through, not "have done before". chuān 穿 (wear, go through) was considered and dropped: chuān-guò also reads "have worn". tōng comes back in Numbers (liù-hào lù tōng-dào wǒ-de jiā) and Changing the Role of a Word (tōng-dào-jiā-de lù). The vocabulary becomes **192 words**. |
| D52 | **Lessons are assembled from modules (2026-10-04).** A lesson folder is `index.ts` (title, summary, and its modules in reading order) plus one file per module: one point with its word cards, explanation, info block, examples, exercises, and an optional FAQ, every language side by side (`src/lib/lesson.ts`). The page shows each module in that order, so a point's info line comes before its examples and its practice and questions sit right under it; the grammar box, exercises, and FAQ at the end of a lesson are gone. Every module has an info block and at least one exercise (15 info lines and 8 exercises were written for the modules that had none). The Grammar Patterns chapter is built from the modules' info lines, one box per lesson. `shape.ts` / `en.ts` / `ru.ts` / `zh.ts` are gone: to move a point to another lesson, move its file and its line in `index.ts`. |
| D53 | **Nine words join and five leave: the vocabulary is 196 (2026-10-05).** Added: hē (drink) in Verbs 1, where it replaces mǐfàn as the theme word; nán (difficult) in How Much, in a new module with hǎo-kàn / nán-kàn (beautiful / ugly, so those need no words of their own); wǎng (net, the internet: zài wǎng-shàng, "online") in Where It Is; guó (country) and chē (car) in Moving; gāo (tall, high) in Comparing; dēng (lamp) and míng (bright) in Also and All, in a new module next to kāi and guān; yǎnjing (eye) in Verbs 2. Removed, each said another way: mǐfàn (food is chī-de), bùtóng (bù yīyàng), páng (pángbiān is taught as one word), chóngzi (dòngwù), and ní (dì). míngbai isn't added: zhīdào covers "understand". Modifying Nouns drops "very" from its examples (xiǎo-de dìfāng; shuǐ hěn shǎo, "there is little water"), since saying how much comes in How Much. Every word must now be in a category of `dictionary.json` (check-book): bǐ, qǐ, miàn, and biān got one. The composite dictionary takes the user's edits to the proposed entries and the new words (drink is hē, a car chē, the internet wǎng, beautiful hǎo-kàn, ugly nán-kàn). |
| D54 | **Fruit and kōngqì leave; shēng, kōng, qì, zhōng, and jiān join: the vocabulary is 199 (2026-10-05).** Fruit is described with the new word shēng (give birth, be born), taught in Roles of a Word's `name` module: zhíwù shēng-de dōngxi, "what plants give birth to", and an egg is fēi-de dòngwù shēng-de dōngxi. zhíwù (plant) moves from L14 to L2, where it takes shuǐguǒ's place ("An animal is not a plant."); every other fruit sentence got the swap that reads best (water, a box, a tool, chī dōngxi), and from L19 on fruit is zhíwù shēng-de dōngxi. kōngqì becomes two words, kōng (empty) and qì (air), both in L14, so air is still kōng-qì (空气) and space is kōng-jiān. zhōng (middle) and jiān (between) join Where It Is in a new `middle` module: zhōng-jiān is "in the middle". |
| D55 | **Every word says why it's needed; what the language must say is a gate; the Frontier chapter (2026-10-05).** Each word in `dictionary.json` has a `necessity`: an index from 5 (no sentence without it) to 1 (convenience only) and the reason in English and Russian (what you couldn't say without it), and, where they exist, `antonyms` and `synonyms` as Hao-shuo-de forms (hǎo / huài; gāo / bù gāo). The alphabetical dictionaries show all three. check-book requires a necessity for every word, single-word opposites to list each other back, and every {{word:}} in the dictionary to exist (zhǒng's example still said shuǐguǒ). A new gate, check-coverage, keeps `src/data/coverage.json` sayable: the 65 NSM atoms of meaning, Aristotle's ten categories, and 38 core grammar points and relationships, each with its Hao-shuo-de forms and the lesson (or teaching module) by which it can be said, so removing or moving a word they depend on fails the build until the item gets a new form. The Frontier chapter (`appendix-frontier`, in Misc) maps what is still hard to say: big numbers, abstract ideas, feelings, days, tastes and colors, family, tone, skipped grammar, and names. fāngfǎ's definition had slipped into its part of speech; fixed. |
| D56 | **A knowledge base of what the language must say, checked both ways (2026-10-05).** `src/data/coverage.json` is the knowledge base: every item names the dictionary words that carry it (`words`), and every dictionary word lists the items it carries (`covers`: "atoms:GOOD", "categories:quality", "grammar:compare"), shown in the dictionaries as "Covers". check-coverage now fails if the atoms aren't exactly the 65 NSM primes, the categories exactly Aristotle's ten, or the grammar exactly the 38 core points (the fixed lists live in `scripts/coverage-canon.js`, so deleting an item from the data can't pass); if `words` and `covers` disagree; or if no lesson sentence shows an item (an atom anywhere, a category or grammar point in the module that teaches it). Three atoms had no sentence, so three exercises were added (the sun is above us; I waited a long time; I need a little time). It also warns, without failing, about words that may be redundant: no coverage and necessity 2 or less, coverage that other words carry too and necessity 3 or less, or a single-word synonym. Each warning says how many composite-dictionary entries use the word: one that builds 10 or more isn't flagged, and one with necessity 3 or less that carries nothing and builds at most one composite is. |
| D57 | **Composite dictionary, phase 3 (2026-10-05).** The next 500 words by frequency (ranks 1011–1520; 面 was already in) join `src/data/composites.json`, all marked proposed for review: 367 descriptions, 98 dictionary words, 41 combinations Mandarin also uses (rén-kǒu, chū-kǒu, xiǎo-shuō, kāi-xué), and 3 skips; no new gaps. The user's edits: science is xué-de, politics guó-jiā yǒu guānxi-de xué-de, and getting angry shēng-qì (now also in the Frontier chapter). shí stays "ten" and shíjiān one word. With the new composites, check-coverage's redundancy warnings fell from 31 to 22. |
| D58 | **Build from what we have: a Chinese word made of Hao-shuo-de words is said that way (2026-10-05).** 爱好 is ài-hǎo, 学生 xué-shēng, 生日 shēng-rì, 对不起 duì-bù-qǐ, 车站 chē-zhàn: 49 composites now give the real compound first (fit natural) and keep the old description after it. check-book enforces it: if an entry's Chinese splits into the hanzi of dictionary words, one of its forms must be exactly that compound. A game is wánr-de, like chī-de for food. |
| D59 | **Swap: the vocabulary is 200 (2026-10-05).** Two words were other words joined, so they leave: yīxià is yī-xià (一下, one + down) and fāshēng is fā-shēng (发生, send out + be born). lìliàng becomes lì (力): the same meaning, shorter, and the root of néng-lì, yòng-lì, and lì-qì (a body's strength). pífū leaves: skin is shēntǐ-de wài-miàn. In come fā (发: tóu-fā hair, chū-fā set out), lì, tiān (天, day and sky: míng-tiān, tiān-qì), nián (年, year: qù-nián, míng-nián), and jī (机, machine: shǒu-jī phone, fēi-jī plane, jī-huì chance), chosen by how many common words they complete and how often they appear in real words. yī and xià are now taught in Time 2 with yī-xià, fā and shēng in Time 1 with fā-shēng, tiān and nián in a new Numbers module (days-years), and jī in Roles of a Word. 16 composites now give their real compound (明天, 手机, 去年 …). 122 original words plus 78 added. |
| D60 | **Modular data, and roots instead of compounds (2026-10-05).** The data lives in one file per word and per composite (src/data/words, src/data/composites), with categories, opposites and close words in map files and coverage as its own knowledge base; `npm run word` and `npm run refactor` apply word changes from lists kept in refactors/. Catch-all words: one toned sound is one word, and other hanzi with that sound are senses used only inside listed compounds, each explained in the dictionary (shí 时 in shí-jiān); a lesson teaches one sense of a word at most; check-sounds guards it. refactors/D60a–c split 19 compounds into Mandarin's own roots (dōng-xi, dì-fang, kě-néng, gōng-jù ...), made yòu 右, nán 男, bù 部, zuò 坐/作 senses, replaced nòng with zuò 做 and fùmǔ with bàba, māma, and split shíjiān, xiànzài, wèidào, juéde into senses. The 200 cap is gone: the count is reported, not enforced. |
| D61 | **Closer to Mandarin, by heads and naturalness (2026-10-05).** Every composite now hangs under its head (手机 under jī; src/lib/heads.js) and shows how close it is to Mandarin, from five dots (Mandarin's own word) to one (a description); `npm run report-heads` ranks the roots that would make the most composites Mandarin's own word. From it, 24 words join: ràng (let, make; jiào keeps tell, have), yǐ, hái, xiē, zhǐ, shéi, tóng, ér, zi, shū, zì, xiǎng, zǒu, fàn, wǎn, zuó, bǎi, zhòng, jiàn, tí, huà, cháng, fáng (fáng-jiān, a room) and gānjìng (clean: washing is yòng shuǐ ràng X gānjìng; alcohol is ràng-tóu-biàn-luàn-de shuǐ); new senses: 再 (zài-jiàn), 校 (xué-xiào), 实 (shì-shí ...), 新 (xīn-nián), 孩 (hái-zi), 卫 (wèi-shēng-jiān, bathroom), 名 also in míng-zi. gùnzi leaves: a stick is cháng-de dōng-xi. chī dōng-xi is chī fàn, shénme rén is shéi, hair is tóu-fā. The compound rule now also checks the sound (长 read zhǎng isn't cháng; 以为 yǐwéi isn't yǐ + wèi). 223 words; 457 composites say Mandarin's own word (was 387). Next: the composites are reviewed by hand in batches of 100. |
| D62 | **bāo for containers; shapes as descriptions (2026-10-05).** bāo 包 (bag) replaces hézi 盒子 as the container word: it is the most useful container, and it builds shū-bāo (schoolbag) and miàn-bāo (bread). In the sentences, the box is a bag. Things hézi stood for that aren't bags got new forms (TV kàn-de jī, fridge lěng-de jī, cup hē-shuǐ-yòng-de dōng-xi). Shapes stay descriptions, because they make you think about what a thing looks like: shape is yàng-zi, a triangle sān-biān-de yàng-zi, a circle yuán-de yàng-zi, a cube (and a box) liù-miàn-dōu-fāng-de dōng-xi, a sphere nǎ-biān-dōu-yuán-de dōng-xi (refactors/D62, D62b). |
| D63 | **Descriptions first: an audit of the core (2026-10-05).** A word earns its place only when a description would be clumsy, not merely because Mandarin has one. zuó leaves (yesterday is qián-yī-tiān, the day before); bǎi leaves and líng 零 (zero) joins, so big numbers are read digit by digit, as Mandarin reads years (èr-líng-líng, èr-líng-èr-liù nián); ér leaves (son, daughter: nán-hái-zi, nǚ-hái-zi); jiāo leaves (to teach is to help learn: bāng + person + xué + verb); qún leaves (a group is hěn-duō rén; the group module now teaches hěn-duō / zhè-xiē / nà-xiē, and company, team and boss got new descriptions). shū, shēngyīn, máo and dēng stay. 219 words (refactors/D63, D63b). |

---

## 3. New table of contents (24 lessons)

"Source" means where the raw material comes from in the **current** lessons.

### Section 1 — Sounds, Words, and Simple Sentences

| New | Title                         | You'll be able to say…                                                | Source         |
| --- | ----------------------------- | --------------------------------------------------------------------- | -------------- |
| 1   | Sounds and Symbols            | _(read and pronounce pinyin + tones)_                                 | L01            |
| 2   | Words and Sentences           | "This is a person." / "An animal is not a plant."                     | L02            |
| 3   | Modifying Nouns               | "The water is good." / "a big place" / "good parents" / "many people" | L03            |
| 4   | Pointing at People and Things | "this one, that one" / "I am a person." / "my hand" / "your family"   | L04 + L11 (gè) |
| 5   | Verbs 1 — Who does what       | "I drink water." / "She doesn't write." / "I don't have money."          | L05 (trimmed)  |
| 6   | Questions and Answers         | "What is this?" / "Are you a person?" / "Why?" / "How?"               | L06            |

### Section 2 — Modifying Words and Meaning

| New | Title                             | You'll be able to say…                                                                                | Source                               |
| --- | --------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 7   | Pre-Verbs                         | "I want to eat." / "I can hear." / "I'm learning to write." / "I know how to write." / "I love to eat."                          | L09 (kāishǐ → L9, biàn → L15)        |
| 8   | Time 1 — When it happens          | "I ate." / "I'm eating right now." / "I will eat." / "I've seen this animal before." / "At night, I sleep." | L05 time markers, L08                |
| 9   | Time 2 — Around an action         | "When I eat, …" / "I finished eating." / "after eating" / "I started to play." / "He ate again."                     | L08, L05 endings, L09 kāishǐ         |
| 10  | Space 1 — Where it is             | "The box is on the floor." / "inside the house" / "in front of me" / "Where is it?"                                      | L15, L07 zài                         |
| 11  | Space 2 — Moving                  | "Where do you come from?" / "Go!" / "Get up!" / "I've arrived home." / "I'm going outside."                                    | L15, L07 cóng, L05 direction endings |
| 12  | Modifiers 1 — How much            | "really hot" / "very cold" / "not very strange" / "Are you cold?"                                                          | L10                                  |
| 13  | Modifiers 2 — Comparing           | "I'm bigger than you." / "They're the same." / "I want different clothes."                                                      | new                                  |
| 14  | Modifiers 3 — Also and all        | "I also eat." / "All the plants are good."                                                            | L16 yě, new                          |
| 15  | Modifiers 4 — Becoming and making | "It got better." / "The water went bad." / "I fixed it." / "I put the clothes on the floor." / "He's very strong."                              | L10, L09 biàn                        |
| 16  | Verbs 2 — Direction and result    | "Bring the water!" / "Come in!" / "I'm going home." / "I found it." / "I can't see it." / "It looks good." | new (D44) |

### Section 3 — Special Words and Concepts

| New | Title                               | You'll be able to say…                                                            | Source                            |
| --- | ----------------------------------- | --------------------------------------------------------------------------------- | --------------------------------- |
| 17  | Numbers                             | "one person" / "two animals" / "number three" / "three o'clock" / "a little water" / "Three and four together is seven."                                  | L13                               |
| 18  | Colors                              | "a red box" / "The water is blue." / "What color is it?"                                                  | L14                               |
| 19  | Changing the Role of a Word         | "food (eat-de)" / "the one who writes" / "speak well" — every job of -de together | new (gathers de from L3–L4, L12)  |
| 20  | Relationships 1 — Inside a sentence | "give it to me" / "write with a tool" / "you and me" / "this or that" / "for me…" | L07 gěi/yòng, L16 hé/duì          |
| 21  | Relationships 2 — Linking sentences | "Because I'm cold, I'm not going." / "It looks good, but it doesn't taste good." / "If you come, I'll wait for you."                                                       | L07 yīnwèi, L08 conditions        |
| 22  | Greetings and Feelings              | "Hello!" / "Thank you!" / "What's your name?" / "Eat!" / "I feel cold." / "I'm scared of fire." | L12, plus any L16 leftovers (D17) |
| 23  | Doubling Words                      | "Let me have a look." / "The moon is nice and round." / "Everyone needs water." | new (D43) |
| 24  | Everyday Patterns                   | "Let me do it!" / "Let me take a look." / "Help me!" / "My parents won't let me go out." / "Let's go out, okay?" | new (D45) |

### After the lessons — Content, Reference, Tools, Misc

Four groups, set in `src/content/book.js` (`BACK_MATTER`, D48): **Content** (proverbs, stories), **Reference** (pinyin, tone sandhi, grammar patterns), **Tools** (the three dictionaries, the sentence builder), and **Misc** (extra articles: why minimality works, not Toki Pona).

---

## 4. Vocabulary

### 4a. How words are placed

**Goal:** each of the 200 words is **introduced once**, in the lesson that needs it most, and is then **reused** until it sticks. The 200 are 122 of the original dictionary words (quánbù, shìchǎng, xīn "new", yán, xìng, mǐfàn, bùtóng, páng, chóngzi, ní, shuǐguǒ, kōngqì, lìliàng, and pífū left, D35, D40, D46, D49, D50, D53, D54, and D59) plus the 78 approved additions (§4d). By the end of L24, the learner has met every word.

1. **One home per word.** Each word is introduced in exactly one lesson and appears in that lesson's `vocab` list. After that, any lesson can use it.
2. **No early use.** Everything in a lesson (examples, exercises, answers, explanations, TL;DR lines) uses only words from that lesson or earlier ones, and only dictionary words. That includes pinyin typed straight into the text, like kěyǐ or the "ge" in zhè-ge. L1 is the one exception: it may show words as sound examples. That doesn't count as introducing them. **`npm run check-early-words`** is the gate.
3. **Two kinds of new word.**
   - **Core words** are what the lesson teaches (shì, ma, le, bǐ, bǎ…). The table of contents (§3) fixes where they go.
   - **Theme words** are fresh nouns, describing words, and verbs that give the examples something to talk about (hand, water, box…). They can move between lessons.
4. **Load.** Aim for about 6 new words (D16).
   - Section 1 may run to 8–10, because learners need a starter stock of nouns before they can say much.
   - After Section 1, aim for 4–8.
   - A word family taught as one idea (biān / pángbiān / miàn / zhōng / jiān, the six colors, the numbers) still counts one per word, but feels like one step to the learner.
5. **Balance with theme words only.** If a lesson is too heavy or too light, move a theme word, never a core word. Move it to a lesson whose examples would naturally use it.
6. **Group by topic.** Theme words join the lesson whose examples need them. Body parts go with "my hand" (L4). Drinking and money go with "eat" and "have" (L5). The box and the tool go with "What is this?" (L6). The door goes with "come from / go out" (L11).
7. **Use it, then reuse it.** A new word appears in at least 3 examples or exercises in its own lesson. It then appears again in at least 2 later lessons, or in the stories appendix. Near the end there are fewer later lessons than that, so the target is what is left: a word from L20 comes back in L21, and a word from L21 has nothing after it (D33).
8. **Finish by L21.** Section 4 (texts, appendices) introduces nothing new.
9. **Keep it checkable.** §4b is the source of truth. If a word moves, update §4b and §4c, then run `npm run check-book` (200/200, no duplicates, vocab matches §4b) and `npm run check-early-words` (no early use). See §6.
10. **Every word earns its place** (D55). `dictionary.json` gives each word a necessity index and the reason, in English and Russian:
    - **5**: no sentence without it (grammar words and the most basic ideas: I, this, good, know, want).
    - **4**: a basic idea no description covers well (left, money, fire).
    - **3**: a description works, but it's long, and the word comes up all the time (car, country).
    - **2**: a short description works; the word saves effort and helps many composites (lamp, tall).
    - **1**: convenience only. These are the first to go when a better word needs the room.
    A word that simplifies a large chunk of the vocabulary has its place even with a low index: `npm run check-coverage` lists, for each word it warns about, the composites it helps say, and doesn't warn about a word that 10 or more composites use.
    Words that `src/data/coverage.json` depends on (the atoms of meaning, Aristotle's categories, the core grammar) can't leave, or move later, until those items get another form: `npm run check-coverage` fails.

### 4b. Spread of the words (first introduction)

Approved (D23). It can still be adjusted as each lesson is written, but the rules in §4a must always hold.

- **Id:** the lesson's id in `src/content/book.js`, which sets the order. Rows are keyed by id, so moving a lesson doesn't break the check; the running totals below follow the order at the time of writing.
- **Added words:** approved additions (§4d). They join `dictionary.json` in Phase 1.
- **New:** words introduced for the first time in this lesson, added words included.
- **Total so far:** words introduced by the end of this lesson, out of the whole vocabulary (about 200; the count is reported, not capped: a root that opens many words beats a low count).
- **Senses:** sense cards of catch-all words (D60). The table is generated from the lessons by `npm run plan-4b` (run by `npm run refactor -- --write`); don't edit it by hand.
- **%:** how much of the vocabulary the learner has met.

| Id  | Lesson                            | Core words                                                 | Theme words                                 | Added words                        | Senses |     New | Total so far |    % |
| --- | --------------------------------- | ---------------------------------------------------------- | ------------------------------------------- | ---------------------------------- | ------ | ------: | -----------: | ---: |
| sounds-and-symbols | Sounds and Symbols | — | — | — | — | **0** | 0 / 219 | 0% |
| words-and-sentences | Words and Sentences | shì, zhè, bù | rén, zhíwù | dōng, xī, nǚ, dòng, wù | nán (male) | **10** | 10 / 219 | 5% |
| modifying-nouns | Modifying Nouns | hěn, hǎo, dà, xiǎo, de, duō | shuǐ, dì | fāng, bàba, māma, shǎo | — | **12** | 22 / 219 | 10% |
| pointing | Pointing at People and Things | nà, gè, wǒ, nǐ, tā | jiā, tóu, shǒu, jiǎo | men, xiē | — | **11** | 33 / 219 | 15% |
| who-does-what | Verbs 1 | chī, kàn, tīng, shuō, xiě, yǒu, méi | jīn | hē, fàn, zì, huà, shū | — | **13** | 46 / 219 | 21% |
| questions | Questions and Answers | ma, shénme, wèn, zěnme | zhǎo | gōng, jù, tí, bāo, mǎi, shéi, wèi | — | **12** | 58 / 219 | 26% |
| pre-verbs | Pre-Verbs | yào, néng, zhīdào, ài | děng, yīfu | xiǎng, yǐ, xué, kě | — | **10** | 68 / 219 | 31% |
| when-it-happens | Time 1 | le, zài, huì | shuìjiào, yuè, rì | fā, shēng, guò, jiān | xiàn (now), shí (time) | **10** | 78 / 219 | 36% |
| around-an-action | Time 2 | wán, hòu, kāishǐ, yī, xià | wánr, liú | yòu, cì | — | **9** | 87 / 219 | 40% |
| where-it-is | Space 1 | lǐ, shàng, miàn, qián, biān, pángbiān | — | nǎ, fáng, wǎng, zhōng, zuǒ | wèi (guard), yòu (right) | **11** | 98 / 219 | 45% |
| moving | Space 2 | lái, qù, cóng, qǐ, wài | kǒu | dào, zǒu, yuǎn, fùjìn, guó, lù, chē | xiào (school) | **13** | 111 / 219 | 51% |
| how-much | Modifiers 1 — How much | zhēn | rè, lěng, tián, qíguài, shēntǐ | jiàzhí, kuài, zhǐ, nán, gānjìng, lǎo | wèi (taste), dào (way) | **12** | 123 / 219 | 56% |
| comparing | Modifiers 2 — Comparing | bǐ | yìng, yuán, xiàn | cháng, zuì, yàng, bié, tóng, zhǒng, gāo, zhòng | — | **12** | 135 / 219 | 62% |
| also-and-all | Modifiers 3 — Also and all | yě | huǒ | kōng, qì, kāi, guān, dēng, míng, hái, dōu, fēn | bù (part) | **11** | 146 / 219 | 67% |
| becoming-and-making | Modifiers 4 — Becoming and making | biàn, dé, bǎ | huài | luàn, zuò, fàng, lì | — | **8** | 154 / 219 | 70% |
| direction-and-result | Verbs 2 | — | — | ná, jìn, chū, huí, zhàn, tǎng, fēi, jiàn, yǎnjing, tōng | zuò (sit) | **10** | 164 / 219 | 75% |
| numbers | Numbers | liǎng, hào | — | èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí, líng, diǎn, wǎn, tiān, nián, suàn | xīn (new) | **17** | 181 / 219 | 83% |
| colors | Colors | yánsè | — | bái, sè, hēi, hóng, huáng, lán | — | **7** | 188 / 219 | 86% |
| roles-of-a-word | Changing the Role of a Word | cí | bízi | zi, fǎ, jī, máo | hái (child) | **6** | 194 / 219 | 89% |
| inside-a-sentence | Relationships 1 | gěi, yòng, hé, duì | mō, dǎ | huò, zhě, guānxi | — | **9** | 203 / 219 | 93% |
| linking-sentences | Relationships 2 | yīnwèi | sǐ | huó, dàn, rúguǒ, jiù | — | **6** | 209 / 219 | 95% |
| greetings-and-feelings | Greetings and Feelings | jiào, pà | shēngyīn | xiè, xiào, jué, dìng, xīn | zài (again) | **8** | 217 / 219 | 99% |
| doubling-words | Doubling Words | — | — | — | — | **0** | 217 / 219 | 99% |
| everyday-patterns | Everyday Patterns | — | — | bāng, ràng | — | **2** | 219 / 219 | 100% |
| | **Total** | **65** | **33** | **121** | | **219** | | |

**By section:**

| Section                                 | Lessons | New | Total at the end |
| --------------------------------------- | ------- | --: | ---------------: |
| 1 — Sounds, Words, and Simple Sentences | L1–L6 | 47 | 47 / 200 (24%) |
| 2 — Modifying Words and Meaning | L7–L16 | 103 | 150 / 200 (75%) |
| 3 — Special Words and Concepts | L17–L24 | 50 | 200 / 200 (100%) |
| 4 — Texts, Vocabulary, and Reference | — | 0 | 200 / 200 |

**Load:** 200 words across the 22 lessons that introduce words, which is **about 9 per lesson** on average. The heaviest is L17 (15): the numbers 2–10 are one family, and days and years count the same way. Next are L10 (13) and L11 (13). The lightest is L24 (2).

Validated: 200/200 words assigned (122 original + 78 added), no duplicates, and the running total ends at 200. `npm run check-book` checks this table against the lessons on every build.

**Changes from the first draft (approved).** Eight theme words moved to even out the load. Two core words, nà and gè, moved with the pointers decision (D26).

| Word                            | Was | Now | Why                                                                                     |
| ------------------------------- | --- | --- | --------------------------------------------------------------------------------------- |
| jīn _money_                     | L7  | L5  | The L5 example "I don't have money" needs it.                                           |
| zhǎo _look for_                 | L5  | L6  | "What are you looking for?" is a natural question. It also lightens L5.                 |
| cí _word_                       | L5  | L18 | L18 is about the jobs a word can do. It lightens L5 and fills L18.                      |
| wài _outside_                   | L10 | L11 | "Go out the door" is about moving. It lightens L10.                                     |
| nà _that_, gè _(counting word)_ | L3  | L4  | Pointers belong together: zhè-ge and nà-ge sit with wǒ, nǐ, and tā (D26).               |
| fùmǔ _parents_                  | L4  | L3  | It keeps L4 at 10 words after nà and gè arrive. "good parents" is a describing example. |
| shēntǐ _body_                   | L4  | L12 | It makes room for men (D28). "My body is really hot."                                   |
| yán _salt_                      | L15 | L20 | "It's good, but there's no salt." It fills L20.                                         |
| sǐ _die_                        | L15 | L20 | "If a plant has no water, it dies." It fills L20.                                       |

Two words have new spellings in the dictionary: **dì** (id `di4`, was tái) and **qián** (id `qian2`, was qiánmiàn). See D30.

### 4c. Lesson by lesson

What each lesson introduces, and why those words are there. **†** marks a dictionary word that no current lesson uses. Its examples will be new writing (44 of the 136 dictionary words). **Added** marks an approved addition (§4d).

**L1 Sounds and Symbols** · 0 new · 0 / 200

- No new words. Words may appear as sound examples only (rule 2).

**L2 Words and Sentences** · 9 new · 9 / 200

- Core: shì _be_, bù _not_, zhè _this_
- Theme: dōngxi _thing_, rén _person_, nǚrén _woman_, nánrén _man_, dòngwù _animal_, zhíwù _plant_ (moved from L14, D54)
- Why: the smallest set that makes "This is a person." and "An animal is not a plant." There's no -de yet: xiě-de dōngxi is dropped (D21).

**L3 Modifying Nouns** · 10 new · 19 / 200

- Core: hěn _very_, de _(joins a describing word to a noun)_, duō _many_, hǎo _good_, dà _big_, xiǎo _small_
- Theme: shuǐ _water_, dìfāng _place_, fùmǔ _parents_
- Added: shǎo _few, little_ (D36)
- Why: "The water is good." / "a big place" / "good parents" / "many people". It holds the describing words that everything else leans on.

**L4 Pointing at People and Things** · 10 new · 29 / 200

- Core: wǒ _I, me_, nǐ _you_, tā _he, she, it, they_, nà _that_, gè _(counting word: zhè-ge "this one", nà-ge "that one")_
- Theme: jiā † _home, family_, tóu † _head_, shǒu † _hand_, jiǎo † _foot_
- Added: men _more than one person (wǒ-men "we")_
- Why: pointers first point at things ("this one, that one"), then at people ("I", "you", "we"), then say whose it is ("my hand", "your family"). Body and family are the first things people call "mine". zhè comes from L2.

**L5 Verbs 1 — Who does what** · 9 new · 38 / 200

- Core: yǒu _have_, méi _not (only with yǒu)_, chī _eat_, kàn _look, read_, tīng _listen_, shuō _say, speak_, xiě _write_
- Theme: jīn † _money_
- Added (D53): hē _drink_ (replaces mǐfàn)
- Why: "I'm eating." / "I drink water." / "She doesn't write." / "I don't have money."

**L6 Questions and Answers** · 9 new · 47 / 200

- Core: shénme _what_, ma _(turns a sentence into a yes-or-no question)_, wèishénme _why_, zěnme _how_, wèn † _ask_
- Theme: zhǎo † _look for_, gōngjù _tool_, hézi † _box_
- Added (D46): mǎi _buy_
- Why: "What is this?" needs things to point at, like a box or a tool. "What are you looking for?" gives zhǎo a natural home.

**L7 Pre-Verbs** · 8 new · 55 / 200

- Core: yào _want, need_, néng † _can_, zhīdào _know, know how_, ài _love_
- Theme: děng † _wait_, yīfu † _clothes_
- Added: kěnéng _maybe_ (D36), xué _learn_ (D40)
- Why: "I want to eat." / "I'm learning to write." / "I can wait." / "I want clothes." These are two easy things to want or wait for. "can / may" is always néng (D19).

**L8 Time 1 — When it happens** · 11 new · 66 / 200

- Core: shíjiān _time_, le _(it happened / it changed)_, huì _will_, zài _(right now, in the middle of)_
- Theme: rì _sun_, yuè † _moon_, shuìjiào _sleep_
- Added: guò _have ever done_, xiànzài _now_ (D36); fā _send out_ and shēng _be born_, which make fā-shēng "happen" (D59; shēng moved here from L19)
- Why: "I ate." / "I'm eating right now." / "I will eat." / "I've seen this animal before." / "At night, I sleep." The sun and moon give day-and-night examples. There is no word for "today", so the time examples use the day and the night.

**L9 Time 2 — Around an action** · 9 new · 75 / 200

- Core: wán _finish_, kāishǐ _start_, hòu _after, behind_
- Theme: wánr † _play_, liú _stay, keep_
- Core (D59): yī _one_ (from L17) and xià _down_ (from L10), which make yī-xià "a moment"
- Added: yòu _again_, cì _times_ (D41)
- Why: "When I eat, …" (X-de shíjiān) / "I finished eating." / "after eating" / "I started to play." hòu comes back as a place word ("behind") in L10. qián moved to L10 (D29).

**L10 Space 1 — Where it is** · 13 new · 88 / 200

- Core: lǐ _inside_, shàng _on, up_, xià _under, down_, qián _front; qián-miàn "in front"_, biān † _side_, pángbiān _beside, next to_, miàn † _side, face (as in lǐ-miàn, shàng-miàn)_, nǎlǐ † _where_
- Theme: dì † _floor, ground_
- Added (D46): zuǒbiān _left_, yòubiān _right_
- Added (D53): wǎng _net, the internet (zài wǎng-shàng, "online")_
- Added (D54): zhōng _middle_, jiān _between_ (zhōng-jiān, "in the middle")
- Why: "The box is on the floor." / "inside the house" / "in front of me" / "Where is it?" / "She's online." / "The box is in the middle." The side-words (biān, pángbiān, miàn, zhōng, jiān) are one idea, so 14 words is fine.

**L11 Space 2 — Moving** · 13 new · 101 / 200

- Core: cóng _from_, lái _come_, qù _go_, qǐ _rise, up_, wài † _out, outside_
- Theme: kǒu † _opening, door_
- Added: dào _arrive, to_, dòng _move_, yuǎn _far_, fùjìn _nearby_ (D36; fùjìn replaced jìn 近, D44)
- Added (D46): lù _road, way_
- Added (D53): guó _country_, chē _car, vehicle_
- Why: "My country is far." / "The car is on the road." / "Where do you come from?" / "I'm going to my parents' home." / "Go!" / "Get up!" / "I'm going outside." There's no word for "stand", so "stand up" is "get up" (qǐ-lái). "Out" (chū) and "in" (jìn) wait for L16.

**L12 Modifiers 1 — How much** · 11 new · 112 / 200

- Core: zhēn † _really_
- Theme: rè † _hot_, lěng _cold_, tián _sweet_, qíguài † _strange_, shēntǐ _body_
- Added: jiàzhí _value_ (D36)
- Added (D46): lǎo _old_ (replaces xīn "new"), kuài _fast_; wèidào _taste_ (D49)
- Added (D53): nán _difficult_ (hǎo-kàn / nán-kàn, "beautiful / ugly")
- Why: "really hot" / "very cold" / "not very strange" / "This is difficult." / "She's beautiful." / "Are you cold?" The lesson needs describing words to turn up and down. There's no word for "a bit" (有点), so it says "not very" instead.

**L13 Modifiers 2 — Comparing** · 10 new · 122 / 200

- Core: bǐ † _than_, yīyàng _same; bù yīyàng "different"_
- Theme: yìng † _hard_, yuán † _round_, gùnzi † _stick_, xiàn † _line, rope_
- Added: biéde _other_, zhǒng _kind_ (D36)
- Added (D46): zuì _most_ (zuì-hòu, "last")
- Added (D53): gāo _tall, high_
- Why: "A stick is harder than a rope." / "He's taller than me." Things with a clear shape and feel are easy to compare.

**L14 Modifiers 3 — Also and all** · 10 new · 132 / 200

- Core: yě _also_
- Theme: huǒ † _fire_ (zhíwù moved to L2, D54)
- Added: dōu _all_ (D35), bùfen _part_ (D36), kāi _open_, guān _close_ (D41)
- Added (D53): dēng _lamp, light_, míng _bright_
- Added (D54): kōng _empty_, qì _air_ (they replace kōngqì: kōng-qì "air", kōng-jiān "space")
- Why: "I also eat." / "We all eat." / "I eat everything." / "Most people love animals." / "This box is empty." / "Turn on the light!" Nature words give "all of them" something to point at. "All" is dōu, and "everything" is shénme-dōu (D35).

**L15 Modifiers 4 — Becoming and making** · 8 new · 140 / 200

- Core: biàn _become_, bǎ _(puts the thing first: "bǎ it make good")_, nòng _do, make_, dé † _get_
- Theme: huài _bad, broken_
- Added (D59): lì _strength_ (replaces lìliàng; lì-qì is a body's strength)
- Added: fàng _put_ (D39)
- Added (D46): luàn _messy_
- Why: "It became bad." / "fix it (make it good)" / "strong". "He got old" and "the water turned cold" show changes you can see and feel.

**L16 Verbs 2 — Direction and result** · 10 new · 150 / 200

- Added: ná _take_ (D42, moved here from Numbers), jìn _go in_, chū _go out_, huí _go back_ (D44)
- Added (D46): zuò _sit_, zhàn _stand_, tǎng _lie_, fēi _fly_
- Added (D51): tōng _go through, lead to_
- Added (D53): yǎnjing _eye_ (wǒ-de yǎnjing bù hǎo, kàn-bù-dào)
- Why: "Bring the water!" / "Come in!" / "I'm going home." / "He took out the money." / "I found it." / "I can't see it." / "It looks good." Direction pairs need in, out, and back, so jìn, chū, and huí joined. The old jìn (近, near) became fùjìn (附近, nearby) in L11, so jìn could mean "go in" (D44).

**L17 Numbers** · 15 new · 165 / 200

- Core: yī _one_, liǎng _two_, hào _number (as in "number two")_
- Theme: none. Counting reuses every noun so far.
- Added: èr _two (counting, number two)_, sān _three_, sì _four_, wǔ _five_, liù _six_, qī _seven_, bā _eight_, jiǔ _nine_, shí _ten_, diǎn _o'clock; yī-diǎn: a little_ (D41). ná _take_ (D42) is reused here from L16 (D44).
- Added (D46): suàn _calculate_
- Why: "one person" / "two animals" / "ten sticks" / "number two". There are 13 new words, but 2–10 are one family.

**L18 Colors** · 6 new · 171 / 200

- Core: yánsè † _color_, báisè _white_, hēisè _black_, hóngsè _red_, huángsè _yellow_, lánsè _blue, green_
- Theme: none. Every noun so far becomes something to color ("a red box").
- Why: one family, one idea.

**L19 Changing the Role of a Word** · 5 new · 176 / 200

- Core: cí _word_, fāngfǎ _way, method_
- Theme: bízi † _nose_ (skin is shēntǐ-de wài-miàn, D59)
- Added (D46): máo _hair, fur_
- Added (D54): shēng _give birth, be born_ (zhíwù shēng-de dōngxi, "fruit")
- Why: the lesson is about the jobs a word can do, so cí belongs here. "the way of writing" (xiě-de fāngfǎ) is a -de example. bízi also finishes the body words from L4.

**L20 Relationships 1 — Inside a sentence** · 9 new · 185 / 200

- Core: gěi _give, to, for_, yòng _use, with_, hé _and_, huòzhě _or_, duì _toward, for_
- Theme: qún _group_, mō † _touch_, dǎ † _hit_
- Added (D46): guānxi _relationship_ (méi-yǒu guānxi, "it doesn't matter")
- Why: "give it to me" / "you and me" / "this or that" / "for the group". "Touch it with your hand" and "hit it with a stick" give yòng its examples.

**L21 Relationships 2 — Linking sentences** · 6 new · 191 / 200

- Core: yīnwèi _because_, dànshì _but_
- Theme: sǐ † _die, dead_
- Added: rúguǒ _if_ (D46, replaces huà), huó _live, alive_ (D36), jiù _then, right away, just_ (D50)
- Why: "It looks good, but it doesn't taste good." / "If a plant has no water, it dies." Linking sentences needs a cause and a result.

**L22 Greetings and Feelings** · 7 new · 198 / 200

- Core: juéde _feel, think_, pà † _be scared_, jiào _call, make an animal sound_
- Theme: shēngyīn † _sound, voice_
- Added: xiào _laugh, smile_ (D41), xiè _thank_ (D43)
- Added (D46): xīn _heart_ (kāi-xīn, xiǎo-xīn, fàng-xīn)
- Why: "I feel…" / "I'm scared of fire." / "The animal says 'wāng'." L23 adds no new words, and L24 adds only bāng. It also takes in the old L22 (D17).

**L23 Doubling Words** · 0 new · 198 / 200

- No new words. Saying a word twice: kàn-kan (do it a little), yuán-yuán-de and hǎo-hǎo (stronger), rén-rén / gè-gè + dōu (every).
- Why: Mandarin doubles words all the time, and xiè-xie (L22) is already one. The examples reuse the L21 and L22 words (D43).

**L24 Everyday Patterns** · 2 new · 200 / 200

- Added: bāng _help_ (D45)
- Added (D46): jiāo _teach_
- Why: "Let me do it!" / "Let me take a look." / "Help me!" / "My parents won't let me go out." / "Let's go out, okay?" There's no word for "let": wǒ lái offers, gěi wǒ + verb + yī-xià asks for a turn, jiào + person + verb has or lets someone do it, and …, hǎo ma? suggests. It's the last lesson, a home for useful patterns that fit nowhere else.

### 4d. Additions (decided 2026-09-27)

Approved words get added to `src/data/dictionary.json` (en/ru/zh) in Phase 1.

| Word                               | Meaning                   | Lesson | Decision            | Notes                                                                       |
| ---------------------------------- | ------------------------- | ------ | ------------------- | --------------------------------------------------------------------------- |
| dào                                | arrive, to                | L11    | **Added**           | Movement "to X". Current L05 and L15 already use it.                        |
| guò                                | have ever done            | L8     | **Added**           | There's no other way to say "I've been there". Current L05 already uses it. |
| huà | (X-de huà) "if" | — | **Removed** (D46) | Replaced by rúguǒ (L21). |
| sān, sì, wǔ, liù, qī, bā, jiǔ, shí | 3–10                      | L17    | **Added** (8 words) | Without them, Numbers stops at two.                                         |
| dōu | all, both (before a verb) | L14 | **Added** (D35) | Replaces quánbù. "Everything" is shénme-dōu. |
| kěyǐ                               | can, may                  | —      | Not added           | The current L09 material gets rewritten with néng.                          |
| shíhou                             | time, when                | —      | Not added           | Use X-de shíjiān, and fix the wording in intro-3.                           |
| tài / zuì / gèng                   | too / most / even more    | —      | Not added           | zhēn, hěn, and bǐ cover most needs.                                         |
| zhǐ                                | only                      | —      | Not added           | dànshì is listed as "only".                                                 |
| suǒyǐ                              | so, therefore             | —      | Not added           | yīnwèi alone works: "yīnwèi X, Y".                                          |
| gēn                                | with                      | —      | Not added           | hé covers it.                                                               |
| men                                | more than one person      | L4     | **Added** (D28)     | wǒ-men "we", nǐ-men "you all", tā-men "they".                               |
| èr | two (counting, number two) | L17 | **Added** (D31) | Counting aloud (一、二、三), 二号, 十二, 二十. liǎng is still right before gè. |
| shǎo | few, little | L3 | **Added** (D36) | NSM atom LITTLE~FEW. The opposite of duō. |
| kěnéng | maybe | L7 | **Added** (D36) | NSM atom MAYBE. A fifth pre-verb. |
| xiànzài | now | L8 | **Added** (D36) | NSM atom NOW. |
| fāshēng | happen | L8 | **Added** (D36), **removed** (D59) | NSM atom HAPPEN. "What happened?" Now fā-shēng, from fā and shēng. |
| yīxià | a moment | L9 | **Added** (D36), **removed** (D59) | NSM atoms MOMENT / A SHORT TIME. Now yī-xià: děng yī-xià, "wait a moment". |
| dòng | move | L11 | **Added** (D36) | NSM atom MOVE. |
| yuǎn, fùjìn | far, nearby | L11 | **Added** (D36, 2 words) | NSM atoms FAR and NEAR. fùjìn (附近) replaced jìn (近) in D44, so jìn could mean "go in". |
| jiàzhí | value | L12 | **Added** (D36) | Not an NSM atom; added on request. hěn yǒu jiàzhí, "valuable". |
| biéde | other | L13 | **Added** (D36) | NSM atom OTHER~ELSE. |
| zhǒng | kind, type | L13 | **Added** (D36) | NSM atom KIND. zhè-zhǒng, like zhè-ge. |
| bùfen | part | L14 | **Added** (D36) | NSM atom PART. dà bùfen, "most". |
| huó | live, alive | L21 | **Added** (D36) | NSM atom LIVE, the pair to sǐ. |
| yòu, cì | again; times | L9 | **Added** (D41, 2 words) | Critical gaps from the composite dictionary: no description works. tā yòu chī le; hěn duō cì. |
| kāi, guān | open; close, turn off | L14 | **Added** (D41, 2 words) | Critical gaps. kāi is already the first half of kāishǐ. |
| diǎn | o'clock; yī-diǎn: a little | L17 | **Added** (D41) | Critical gap. Two jobs: sān-diǎn, and yī-diǎn shuǐ / dà yī-diǎn. |
| xiè | thank | L22 | **Added** (D43) | xiè-xie, "thank you"; bù yòng xiè, "you're welcome". |
| ná | take, take away | L16 | **Added** (D42) | Arithmetic: cóng qī lǐ-miàn ná sān (7 − 3). Also plain "take": ná yī-ge! Moved from Numbers to Verbs 2 (D44). |
| jìn, chū, huí | go in; go out; go back | L16 | **Added** (D44, 3 words) | Direction words: jìn-lái "come in", ná-chū-lái "take out", huí jiā "go home". |
| bāng | help | L24 | **Added** (D45) | bāng + person + verb: nǐ bāng wǒ ná yī-xià, "could you hold this for me?"; bāng-bang wǒ!, "help me!". |
| xīn 心 | heart | L22 | **Added** (D46) | kāi-xīn "happy", xiǎo-xīn "careful", fàng-xīn "don't worry". xīn 新 (new) left: "new" is tóu-yī-cì kàn-dào-de. |
| lǎo | old | L12 | **Added** (D46) | Young is bù lǎo. |
| rúguǒ | if | L21 | **Added** (D46) | Replaces X-de huà: rúguǒ nǐ lái, wǒ děng nǐ. |
| mǎi | buy | L6 | **Added** (D46) | Was gěi-jīn-dé-dōngxi. A market is mǎi dōngxi-de dìfāng. |
| zuǒbiān, yòubiān | left, right | L10 | **Added** (D46, 2 words) | Two syllables, like pángbiān, so yòu (again) keeps its sound. |
| lù | road, path, way | L11 | **Added** (D46) | A street is liǎng-biān yǒu jiā-de lù. fāngfǎ is the way something is done. |
| kuài | fast | L12 | **Added** (D46) | kuài lái! "come quickly!" |
| zuì | most | L13 | **Added** (D46) | zuì dà, zuì-hòu "last". |
| luàn | messy | L15 | **Added** (D46) | nòng-luàn, "make a mess"; bù luàn, "tidy". |
| zuò, zhàn, tǎng, fēi | sit, stand, lie, fly | L16 | **Added** (D46, 4 words) | With direction words: zuò-xià, zhàn-qǐ-lái, tǎng-xià, fēi-shàng-qù. |
| suàn | calculate | L17 | **Added** (D46) | A computer is suàn-de gōngjù. |
| máo | hair, fur | L19 | **Added** (D46) | Hair is tóu-shàng-de máo. |
| guānxi | relationship | L20 | **Added** (D46) | méi-yǒu guānxi, "it doesn't matter". |
| jiāo | teach | L24 | **Added** (D46) | jiāo + person + verb. A teacher is jiāo-de rén. |
| wèidào | taste | L12 | **Added** (D49) | One word for taste, good or not: wèidào hěn hǎo / wèidào bù hǎo. Replaces yán (salt), which is now nòng-hǎo wèidào-de dōngxi, "the thing that makes it taste good". |
| jiù | then, right away, just | L21 | **Added** (D50) | rúguǒ nǐ lái, wǒ jiù děng nǐ; wǒ xiànzài jiù qù; jiù shì zhè-ge! It makes sentences sound natural. |
| xiào | laugh, smile | L22 | **Added** (D41) | Critical gap. bù yào xiào! |
| xué | learn | L7 | **Added** (D40) | xué + verb, "learn to": wǒ xué xiě. It came up again and again as a basic word. |
| fàng | put | L15 | **Added** (D39) | bǎ + thing + fàng zài + place, "put it there". Lesson 7 had no way to say it. |
| tōng | go through, lead to | L16 | **Added** (D51) | tōng-guò + place, "go through"; tōng-dào + place, "lead to"; lù bù tōng, "the road is blocked". Chosen over chuān (wear, go through), since chuān-guò also reads "have worn". |
| hē | drink | L5 | **Added** (D53) | wǒ hē shuǐ. It replaces mǐfàn as L5's theme word, and chī no longer covers drinking. |
| nán | difficult | L12 | **Added** (D53) | zhè hěn nán. Before kàn: hǎo-kàn "beautiful", nán-kàn "ugly". |
| wǎng | net; the internet | L10 | **Added** (D53) | zài wǎng-shàng, "online"; shàng wǎng, "go online". |
| guó, chē | country; car | L11 | **Added** (D53, 2 words) | wǒ-de guó hěn yuǎn; chē zài lù-shàng. A bus is hěn-duō-rén-de chē. |
| gāo | tall, high | L13 | **Added** (D53) | tā bǐ wǒ gāo. A mountain is gāo-dì. |
| dēng, míng | lamp; bright | L14 | **Added** (D53, 2 words) | kāi dēng, "turn on the light"; rì hěn míng. |
| yǎnjing | eye | L16 | **Added** (D53) | wǒ-de yǎnjing bù hǎo, kàn-bù-dào. |
| mǐfàn, bùtóng, páng, chóngzi, ní | rice; different; beside; bug; mud | — | **Removed** (D53) | Each is said another way: chī-de (food), bù yīyàng, pángbiān, dòngwù, dì. |
| zhōng, jiān | middle; between | L10 | **Added** (D54, 2 words) | zhōng-jiān, "in the middle"; kōng-jiān, "space". |
| kōng, qì | empty; air | L14 | **Added** (D54, 2 words) | They replace kōngqì: kōng-qì is still "air". hézi shì kōng-de, "the box is empty". |
| shēng | give birth, be born | L19 | **Added** (D54) | zhíwù shēng-de dōngxi, "fruit"; fēi-de dòngwù shēng-de dōngxi, "egg"; shēng-qì, "get angry". |
| shuǐguǒ, kōngqì | fruit; air | — | **Removed** (D54) | Fruit is zhíwù shēng-de dōngxi; air is kōng-qì, two words now. zhíwù moved to L2 in shuǐguǒ's place. |
| fā, lì, tiān, nián, jī | send out; strength; day, sky; year; machine | L8, L15, L17, L19 | **Added** (D59, 5 words) | fā-shēng "happen", tóu-fā "hair"; lì replaces lìliàng (néng-lì, lì-qì); míng-tiān, tiān-qì; qù-nián, míng-nián; shǒu-jī, fēi-jī, jī-huì. |
| lìliàng, pífū | strength; skin | — | **Removed** (D59) | lì says strength; skin is shēntǐ-de wài-miàn. |
| ne / ba / a                        | sentence-end particles    | —      | Not added           | L22 merged into L21, so no particle lesson needs them (D17).                |

---

## 5. Questions

Q1–Q4 were answered on 2026-09-27. New questions go here.

- **Q1 — What does L22 teach?** → **Merged into L21.** The book has 21 lessons (D17).
- **Q2 — intro-3 "attempt, learning, continuation".** → **Reword intro-3** to "wanting, being able to, knowing how, and loving to" (D22).
- **Q3 — L8 zài.** → **Time stays before Space** (D20).
- **Q4 — xiě-de dōngxi in L2.** → **Dropped.** L3 is the first -de (D21).
- **Q5 — men (wǒ-men "we") isn't in the dictionary.** → **Added** (D28). L4 teaches wǒ-men, nǐ-men, and tā-men, so L4 fails `check-early-words`. The dictionary already defines wǒ as "I, me, we, us" and tā as "he, she, it, they".
- **Q6 — di has no tone mark.** → **Now dì** (D30).
- **Q7 — èr (二, "two").** → **Added** to L16 (D31).

---

## 6. Checks

`npm run build` starts with **`npm run check`** (`scripts/check-all.js`), which runs every gate below. It shows every report, then fails the build if any gate failed.

**Strict for finished lessons.** Every lesson in `src/content/book.js` must pass every gate, except one listed in `DRAFT_LESSONS` (`scripts/finished-lessons.js`). Problems in other chapters are reported but don't fail the build. A new lesson can start on `DRAFT_LESSONS` and come off it once it passes every gate; from then on every build keeps it that way. Run a gate with chapter ids (`npm run check-jargon -- pre-verbs`) to make it strict for just those, or with `--strict` for everything.

| Command                        | What it checks                                                                                                                                                                            | Fails the build for |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `npm run typecheck`            | The TypeScript types: every module file has the fields `src/lib/lesson.ts` defines (run as the `check-types` gate). `npm run dev` also shows type errors in the terminal and the browser overlay. | any file            |
| `npm run check-book`           | Lessons match intro-3 (titles, order, sections); every word introduced once, matching §4b; summaries and TL;DR lines short and jargon-free; every dictionary word is in a category of `dictionary.json`, says why it's needed (`necessity`), lists its opposites back, and refers only to dictionary words; the proverbs, the frontier, the stories, and the composite dictionary (`src/data/composites.json`) use only dictionary words, and a composite whose Chinese is made of dictionary words gives that real compound (爱好 = ài-hǎo). Prints New / Total so far per lesson.         | any lesson          |
| `npm run check-coverage`       | Hao-shuo-de can still say what the knowledge base (`src/data/coverage.json`) lists: all 65 atoms of meaning (NSM primes), all ten of Aristotle's categories, and all 38 core grammar points (`scripts/coverage-canon.js`). Every form uses dictionary words; each atom can be said by its lesson, and each category or grammar point by the module that teaches it; a lesson sentence shows each one; and each word's `covers` matches the items that name it. Warns about words that may be redundant, with how many composites each builds (10 or more: not flagged). | any change          |
| `npm run check-summaries`      | Every chapter's summary is 50 words or fewer.                                                                                                                                             | any chapter         |
| `npm run check-jargon`         | No banned grammar words in the book's English text (rule 4). Lists each hit, and counts the allowed core terms.                                                                           | finished lessons    |
| `npm run check-early-words`    | No word used before its lesson, and no pinyin word missing from the dictionary (§4a rule 2). Lists each use.                                                                              | finished lessons    |
| `npm run check-word-use`       | Every word a lesson introduces appears in one of its example sentences or answers. Also reports rule 7's targets (3 sentences at home, reuse in 2 later lessons, or all that are left); `--targets` lists them. | finished lessons    |
| `npm run check-grammar-blocks` | Every module has one info block, before its examples, and every lesson has at least one pattern (an info block that isn't a note).                                                       | finished lessons    |
| `npm run check-practice`       | Every word a lesson introduces is in at least one of its examples and in at least one of its exercises (answers). Every module has its own exercises; a module's FAQ comes after them.   | finished lessons    |
| `npm run check-example-runs`   | No lesson shows more than 8 examples in a row (`MAX_EXAMPLES_IN_A_ROW` in `scripts/limits.js`). Break a longer run with a new point, an info box, or exercises. | finished lessons    |
| `npm test`                     | Includes `scripts/early-words.test.js` and `scripts/word-use.test.js`, which test the early-words, word-use, and practice rules on small made-up lessons.                                 | —                   |

The word lists and limits live in `scripts/jargon.js` and `scripts/limits.js`.

---

## 7. Checklist

### Phase 0 — Decisions

- [x] Approve the vocab spread (§4b), including the six moves from the first draft (D23)
- [x] Approve / reject the candidate additions (§4d, D18, D19)
- [x] Answer Q1 (L22 content): merged into L21 (D17)
- [x] Answer Q2 (intro-3 Pre-Verbs wording): reword (D22)
- [x] Answer Q3 (zài order): Time before Space (D20)
- [x] Answer Q4 (xiě-de dōngxi in L2): dropped (D21)

### Phase 1 — Skeleton (build green, content moved, not yet rewritten)

- [x] Commit the current uncommitted edits (L02, L06, L08) so the old state is recoverable
- [x] Archive a snapshot of the current 16 lessons to `src/content/legacy/v2-16-lessons/`
- [x] Add the 11 approved words (D18) to `src/data/dictionary.json` (en/ru/zh, plus a category)
- [x] Create the 21 lesson folders with `shape.ts` / `en.ts` / `ru.ts` / `zh.ts` / `index.ts`
- [x] Move raw blocks into their new lessons (per the "Source" column in §3); new lessons get a stub
- [x] Update `intro-3.ts` to list the 21 lessons: the splits, the L22 merge (D17), the Pre-Verbs wording (D22), and de-shíhou → X-de shíjiān
- [x] Update `src/lib/lesson-sections.js` (6 / 9 / 6)
- [x] Update sidebar labels / i18n (`word-usage.json` chapter labels via `npm run word-usage`)
- [x] Update `BOOK_STRUCTURE.md`
- [x] Update "Lesson N" citations in `appendix-grammar.yaml`, `appendix-stories.yaml`, `appendix-pinyin.md`, and inside lessons
- [x] Add a check script for the §4a rules: every one of the 162 words is introduced exactly once, matching §4b; no lesson uses a word before its home lesson; lessons use only dictionary words. It prints the New / Total so far counts per lesson (`check-book`, `check-early-words`)
- [x] Add the jargon gate (`check-jargon`) and the summary gate (`check-summaries`) (§6)
- [x] Add the word-use gate (`check-word-use`) and the grammar-box gate (`check-grammar-blocks`) (§6)
- [x] Run every gate on every build (`npm run check`), strict for finished lessons (§6)
- [x] Every summary uses the two-part pattern (rule 7)
- [x] Add the practice gate (`check-practice`): every lesson's words are in its examples and exercises (§6)
- [x] Add the example-run gate (`check-example-runs`): no more than 8 examples in a row (§6, D50)
- [x] Rewrite every summary and TL;DR line in plain words (rule 7)
- [x] L4 becomes "Pointing at People and Things", with gè, zhè-ge, and nà-ge (D26)
- [x] Section 1 (L1–L6) passes every gate, and is on the finished list (`scripts/finished-lessons.js`)
- [x] `npm run typecheck`, `npm test`, and `npm run build` all pass
- [x] Preview: the sidebar shows 3 sections with 21 lessons, and every lesson page renders

### Phase 2 — Rewrite, lesson by lesson (English only, user review after each)

For each lesson: ☐ written to template ☐ `npm run check -- <lesson-id>` passes (every gate) ☐ exercises + answers ☐ **user approved** ☐ added to `scripts/finished-lessons.js`

- [ ] L1 Sounds and Symbols
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L2 Words and Sentences
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L3 Modifying Nouns
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L4 Pointing at People and Things
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L5 Verbs
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L6 Questions and Answers
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L7 Pre-Verbs — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L8 Time 1 — When it happens — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L9 Time 2 — Around an action
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L10 Space 1 — Where it is
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L11 Space 2 — Moving
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L12 Modifiers 1 — How much
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L13 Modifiers 2 — Comparing
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L14 Modifiers 3 — Also and all
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L15 Modifiers 4 — Becoming and making
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L16 Numbers
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L17 Colors
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L18 Changing the Role of a Word
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L19 Relationships 1 — Inside a sentence
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L20 Relationships 2 — Linking sentences
 — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L21 Greetings and Feelings (takes in the old L22)
 — rewritten, passes every gate, on the finished list; **waiting for your review**

### Phase 3 — Intros and reference

- [x] Tone pass on intro-1, intro-2, intro-3 — shorter sentences and plainer words, same claims; intro-2 gets a summary; intro-3's lesson lines now match what each lesson teaches
- [ ] "Why Minimality Works": the author rewrites it (D32)
- [x] Appendix: Grammar Patterns Reference aligned with the new lessons — it is now generated from the lessons (below)
- [x] Appendix: Ten Short Stories use only words taught by the lessons they cite — every Chinese line uses dictionary words (bird is zài-kōng-qì-lǐ-de dòngwù, see is kàn-dào, money is jīn), and the notes point at the current lessons
- [x] Sentence Builder and Proverbs checked against the dictionary — the proverbs drop dōu and zìjǐ and say jīn for money; the builder picks words from the dictionary; check-book now guards the proverbs and the stories
- [x] `npm run check -- --strict` passes (jargon: lessons only, D32; reuse capped near the end, D33)
- [x] Grammar overview chapter built automatically from every lesson's grammar boxes (`grammarRules` in `src/lib/chapter-content.js` already collects them), replacing the hand-written `appendix-grammar.yaml` Done: `scripts/generate-grammar-overview.js` writes `src/content/appendix-grammar.ts` on every build; the old YAML is in `src/content/legacy/`.

### Phase 3b — Atoms, dōu, and grammar terms (2026-09-27)

- [x] Grammar terms allowed in the lessons, plain name first (D34); `scripts/jargon.js` updated
- [x] dōu replaces quánbù everywhere, with shénme-dōu for "everything" (D35)
- [x] 13 new words (NSM atoms + value) in the dictionary, each taught in its lesson and reused in two later ones (D36)
- [ ] Your review of the new points: L3 few, L7 maybe, L8 now / happen, L9 a moment, L11 move / far / near, L12 value, L13 other / kind, L14 all / everything / part, L20 live

### Phase 4 — Translation (after all English is approved)

- [ ] ru: L1–L24, intros
- [ ] zh: L1–L24, intros
