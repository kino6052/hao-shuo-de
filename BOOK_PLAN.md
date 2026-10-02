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

For each teaching point (2–4 per lesson):
  New words the word cards this point is the first to use (~6 per lesson in all)
  Say       one line: the thing you want to express
  Pattern   one line: e.g.  NOUN + bù shì + NOUN
  Examples  3–6, each with translation + audio, right after the point
  Try it    4–6 exercises (answers collected at the end)

grammar box        at least one per lesson: an info block with subtype "grammar",
                   a plain title, and a unique plain tag ("verbs/who-does-what")
answers
```

- **The page shows blocks in the order the lesson lists them.** A point's examples come right after it, and each word card sits just before the first point that uses the word, so the reader meets a few words at a time. Info boxes and exercises can go anywhere. The lesson specs place word cards automatically.
- A teaching point's prose is **at most 1–2 plain sentences** beyond Say + Pattern.
- Every prose block has a `tldr` and a `necessity`, written to rule 7.
- Every lesson has at least one **grammar box**: the lesson's patterns in a few plain lines, each with an example. The grammar overview chapter will be built from these boxes, so the title and tag must make sense on their own.
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

---

## 3. New table of contents (21 lessons)

"Source" means where the raw material comes from in the **current** lessons.

### Section 1 — Sounds, Words, and Simple Sentences

| New | Title                         | You'll be able to say…                                                | Source         |
| --- | ----------------------------- | --------------------------------------------------------------------- | -------------- |
| 1   | Sounds and Symbols            | _(read and pronounce pinyin + tones)_                                 | L01            |
| 2   | Words and Sentences           | "This is a person." / "An animal is not a fruit."                     | L02            |
| 3   | Modifying Nouns               | "The water is good." / "a big place" / "good parents" / "many people" | L03            |
| 4   | Pointing at People and Things | "this one, that one" / "I am a person." / "my hand" / "your family"   | L04 + L11 (gè) |
| 5   | Verbs                         | "I eat rice." / "She doesn't write." / "I don't have money."          | L05 (trimmed)  |
| 6   | Questions and Answers         | "What is this?" / "Are you a person?" / "Why?" / "How?"               | L06            |

### Section 2 — Modifying Words and Meaning

| New | Title                             | You'll be able to say…                                                                                | Source                               |
| --- | --------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 7   | Pre-Verbs                         | "I want to eat." / "I can hear." / "I know how to write." / "I love to eat."                          | L09 (kāishǐ → L9, biàn → L15)        |
| 8   | Time 1 — When it happens          | "I ate." / "I'm eating right now." / "I will eat." / "I've eaten rice before." / "At night, I sleep." | L05 time markers, L08                |
| 9   | Time 2 — Around an action         | "When I eat, …" / "I finished eating." / "after eating" / "I started to play."                        | L08, L05 endings, L09 kāishǐ         |
| 10  | Space 1 — Where it is             | "The box is on the floor." / "inside the house" / "in front of me" / "Where is it?"                                      | L15, L07 zài                         |
| 11  | Space 2 — Moving                  | "I come from the market." / "Go!" / "Get up!" / "I've arrived home." / "I'm going outside."                                    | L15, L07 cóng, L05 direction endings |
| 12  | Modifiers 1 — How much            | "really hot" / "very cold" / "not very strange" / "Are you cold?"                                                          | L10                                  |
| 13  | Modifiers 2 — Comparing           | "I'm bigger than you." / "They're the same." / "I want different clothes."                                                      | new                                  |
| 14  | Modifiers 3 — Also and all        | "I also eat." / "All the plants are good."                                                            | L16 yě, new                          |
| 15  | Modifiers 4 — Becoming and making | "It got better." / "The fruit went bad." / "I fixed it." / "He's very strong."                              | L10, L09 biàn                        |

### Section 3 — Special Words and Concepts

| New | Title                               | You'll be able to say…                                                            | Source                            |
| --- | ----------------------------------- | --------------------------------------------------------------------------------- | --------------------------------- |
| 16  | Numbers                             | "one person" / "two animals" / "number three"                                       | L13                               |
| 17  | Colors                              | "a red box" / "The water is blue." / "What color is it?"                                                  | L14                               |
| 18  | Changing the Role of a Word         | "food (eat-de)" / "the one who writes" / "speak well" — every job of -de together | new (gathers de from L3–L4, L12)  |
| 19  | Relationships 1 — Inside a sentence | "give it to me" / "write with a tool" / "you and me" / "this or that" / "for me…" | L07 gěi/yòng, L16 hé/duì          |
| 20  | Relationships 2 — Linking sentences | "Because I'm cold, I'm not going." / "It's good, but there's no salt." / "If you come, I'll wait for you."                                                       | L07 yīnwèi, L08 conditions        |
| 21  | Greetings and Feelings              | "Hello!" / "What's your name?" / "Eat!" / "I feel cold." / "I'm scared of bugs." | L12, plus any L16 leftovers (D17) |

### Section 4 — Texts, Vocabulary, and Reference

No structural change. Only lesson-number citations get updated.

---

## 4. Vocabulary

### 4a. How words are placed

**Goal:** each of the 162 words is **introduced once**, in the lesson that needs it most, and is then **reused** until it sticks. The 162 are 135 of the original dictionary words (quánbù left, D35) plus the 27 approved additions (§4d). By the end of L21, the learner has met every word.

1. **One home per word.** Each word is introduced in exactly one lesson and appears in that lesson's `vocab` list. After that, any lesson can use it.
2. **No early use.** Everything in a lesson (examples, exercises, answers, explanations, TL;DR lines) uses only words from that lesson or earlier ones, and only dictionary words. That includes pinyin typed straight into the text, like kěyǐ or the "ge" in zhè-ge. L1 is the one exception: it may show words as sound examples. That doesn't count as introducing them. **`npm run check-early-words`** is the gate.
3. **Two kinds of new word.**
   - **Core words** are what the lesson teaches (shì, ma, le, bǐ, bǎ…). The table of contents (§3) fixes where they go.
   - **Theme words** are fresh nouns, describing words, and verbs that give the examples something to talk about (hand, rice, box…). They can move between lessons.
4. **Load.** Aim for about 6 new words (D16).
   - Section 1 may run to 8–10, because learners need a starter stock of nouns before they can say much.
   - After Section 1, aim for 4–8.
   - A word family taught as one idea (páng / biān / pángbiān / miàn, the six colors, the numbers) still counts one per word, but feels like one step to the learner.
5. **Balance with theme words only.** If a lesson is too heavy or too light, move a theme word, never a core word. Move it to a lesson whose examples would naturally use it.
6. **Group by topic.** Theme words join the lesson whose examples need them. Body parts go with "my hand" (L4). Food and money go with "eat" and "have" (L5). The box and the tool go with "What is this?" (L6). The market and the door go with "come from / go out" (L11).
7. **Use it, then reuse it.** A new word appears in at least 3 examples or exercises in its own lesson. It then appears again in at least 2 later lessons, or in the stories appendix. Near the end there are fewer later lessons than that, so the target is what is left: a word from L20 comes back in L21, and a word from L21 has nothing after it (D33).
8. **Finish by L21.** Section 4 (texts, appendices) introduces nothing new.
9. **Keep it checkable.** §4b is the source of truth. If a word moves, update §4b and §4c, then run `npm run check-book` (162/162, no duplicates, vocab matches §4b) and `npm run check-early-words` (no early use). See §6.

### 4b. Spread of the 162 words (first introduction)

Approved (D23). It can still be adjusted as each lesson is written, but the rules in §4a must always hold.

- **Added words:** approved additions (§4d). They join `dictionary.json` in Phase 1.
- **New:** words introduced for the first time in this lesson, added words included.
- **Total so far:** words introduced by the end of this lesson, out of the whole vocabulary (162).
- **%:** how much of the vocabulary the learner has met.

| L   | Lesson                            | Core words                                                 | Theme words                                 | Added words                        |     New | Total so far |    % |
| --- | --------------------------------- | ---------------------------------------------------------- | ------------------------------------------- | ---------------------------------- | ------: | -----------: | ---: |
| 1 | Sounds and Symbols | — | — | — | **0** | 0 / 162 | 0% |
| 2 | Words and Sentences | shì, bù, zhè | dōngxi, rén, nǚrén, nánrén, dòngwù, shuǐguǒ | — | **9** | 9 / 162 | 6% |
| 3 | Modifying Nouns | hěn, de, duō, hǎo, dà, xiǎo | shuǐ, dìfāng, fùmǔ | shǎo | **10** | 19 / 162 | 12% |
| 4 | Pointing at People and Things | wǒ, nǐ, tā, nà, gè | jiā, tóu, shǒu, jiǎo | men | **10** | 29 / 162 | 18% |
| 5 | Verbs | yǒu, méi, chī, kàn, tīng, shuō, xiě | jīn, mǐfàn | — | **9** | 38 / 162 | 23% |
| 6 | Questions and Answers | shénme, ma, wèishénme, zěnme, wèn | zhǎo, gōngjù, hézi | — | **8** | 46 / 162 | 28% |
| 7 | Pre-Verbs | yào, néng, zhīdào, ài | děng, yīfu | kěnéng | **7** | 53 / 162 | 33% |
| 8 | Time 1 | shíjiān, le, huì, zài | rì, yuè, shuìjiào | guò, xiànzài, fāshēng | **10** | 63 / 162 | 39% |
| 9 | Time 2 | wán, kāishǐ, hòu | wánr, liú | yīxià | **6** | 69 / 162 | 43% |
| 10 | Space 1 | lǐ, shàng, xià, qián, páng, biān, pángbiān, miàn, nǎlǐ | dì | — | **10** | 79 / 162 | 49% |
| 11 | Space 2 | cóng, lái, qù, qǐ, wài | shìchǎng, kǒu | dào, dòng, yuǎn, jìn | **11** | 90 / 162 | 56% |
| 12 | Modifiers 1 — How much | zhēn | rè, lěng, tián, qíguài, xīn, shēntǐ | jiàzhí | **8** | 98 / 162 | 60% |
| 13 | Modifiers 2 — Comparing | bǐ, yīyàng, bùtóng | yìng, yuán, gùnzi, xiàn | biéde, zhǒng | **9** | 107 / 162 | 66% |
| 14 | Modifiers 3 — Also and all | yě | zhíwù, huǒ, kōngqì | dōu, bùfen | **6** | 113 / 162 | 70% |
| 15 | Modifiers 4 — Becoming and making | biàn, bǎ, nòng, dé | lìliàng, huài, ní | — | **7** | 120 / 162 | 74% |
| 16 | Numbers | yī, liǎng, hào | — | èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí | **12** | 132 / 162 | 81% |
| 17 | Colors | yánsè, báisè, hēisè, hóngsè, huángsè, lánsè | — | — | **6** | 138 / 162 | 85% |
| 18 | Changing the Role of a Word | cí, fāngfǎ | bízi, pífū | — | **4** | 142 / 162 | 88% |
| 19 | Relationships 1 | gěi, yòng, hé, huòzhě, duì | qún, mō, dǎ | — | **8** | 150 / 162 | 93% |
| 20 | Relationships 2 | yīnwèi, dànshì | yán, sǐ | huà, huó | **6** | 156 / 162 | 96% |
| 21 | Greetings and Feelings | juéde, pà, jiào | shēngyīn, chóngzi, xìng | — | **6** | 162 / 162 | 100% |
| | **Total** | **81** | **54** | **27** | **162** | | |

**By section:**

| Section                                 | Lessons | New | Total at the end |
| --------------------------------------- | ------- | --: | ---------------: |
| 1 — Sounds, Words, and Simple Sentences | L1–L6 | 46 | 46 / 162 (28%) |
| 2 — Modifying Words and Meaning | L7–L15 | 74 | 120 / 162 (74%) |
| 3 — Special Words and Concepts | L16–L21 | 42 | 162 / 162 (100%) |
| 4 — Texts, Vocabulary, and Reference | — | 0 | 162 / 162 |

**Load:** 162 words across the 20 lessons that introduce words, which is **about 8 per lesson** on average. The heaviest lesson is L16 (12), but 9 of those are the numbers 2–10 (èr, sān … shí), which are one family. Next is L4 (10). The lightest is L18 (4).

Validated: 162/162 words assigned (135 original + 27 added), no duplicates, and the running total ends at 162. `npm run check-book` checks this table against the lessons on every build.

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

**L1 Sounds and Symbols** · 0 new · 0 / 162

- No new words. Words may appear as sound examples only (rule 2).

**L2 Words and Sentences** · 9 new · 9 / 162

- Core: shì _be_, bù _not_, zhè _this_
- Theme: dōngxi _thing_, rén _person_, nǚrén _woman_, nánrén _man_, dòngwù _animal_, shuǐguǒ _fruit_
- Why: the smallest set that makes "This is a person." and "An animal is not a fruit." There's no -de yet: xiě-de dōngxi is dropped (D21).

**L3 Modifying Nouns** · 10 new · 19 / 162

- Core: hěn _very_, de _(joins a describing word to a noun)_, duō _many_, hǎo _good_, dà _big_, xiǎo _small_
- Theme: shuǐ _water_, dìfāng _place_, fùmǔ _parents_
- Added: shǎo _few, little_ (D36)
- Why: "The water is good." / "a big place" / "good parents" / "many people". It holds the describing words that everything else leans on.

**L4 Pointing at People and Things** · 10 new · 29 / 162

- Core: wǒ _I, me_, nǐ _you_, tā _he, she, it, they_, nà _that_, gè _(counting word: zhè-ge "this one", nà-ge "that one")_
- Theme: jiā † _home, family_, tóu † _head_, shǒu † _hand_, jiǎo † _foot_
- Added: men _more than one person (wǒ-men "we")_
- Why: pointers first point at things ("this one, that one"), then at people ("I", "you", "we"), then say whose it is ("my hand", "your family"). Body and family are the first things people call "mine". zhè comes from L2.

**L5 Verbs** · 9 new · 38 / 162

- Core: yǒu _have_, méi _not (only with yǒu)_, chī _eat, drink_, kàn _look, read_, tīng _listen_, shuō _say, speak_, xiě _write_
- Theme: jīn † _money_, mǐfàn † _rice, staple food_
- Why: "I eat rice." / "She doesn't write." / "I don't have money."

**L6 Questions and Answers** · 8 new · 46 / 162

- Core: shénme _what_, ma _(turns a sentence into a yes-or-no question)_, wèishénme _why_, zěnme _how_, wèn † _ask_
- Theme: zhǎo † _look for_, gōngjù _tool_, hézi † _box_
- Why: "What is this?" needs things to point at, like a box or a tool. "What are you looking for?" gives zhǎo a natural home.

**L7 Pre-Verbs** · 7 new · 53 / 162

- Core: yào _want, need_, néng † _can_, zhīdào _know, know how_, ài _love_
- Theme: děng † _wait_, yīfu † _clothes_
- Added: kěnéng _maybe_ (D36)
- Why: "I want to eat." / "I can wait." / "I want clothes." These are two easy things to want or wait for. "can / may" is always néng (D19).

**L8 Time 1 — When it happens** · 10 new · 63 / 162

- Core: shíjiān _time_, le _(it happened / it changed)_, huì _will_, zài _(right now, in the middle of)_
- Theme: rì _sun_, yuè † _moon_, shuìjiào _sleep_
- Added: guò _have ever done_, xiànzài _now_, fāshēng _happen_ (D36)
- Why: "I ate." / "I'm eating right now." / "I will eat." / "I've eaten rice before." / "At night, I sleep." The sun and moon give day-and-night examples. There is no word for "today", so the time examples use the day and the night.

**L9 Time 2 — Around an action** · 6 new · 69 / 162

- Core: wán _finish_, kāishǐ _start_, hòu _after, behind_
- Theme: wánr † _play_, liú _stay, keep_
- Added: yīxià _a moment_ (D36)
- Why: "When I eat, …" (X-de shíjiān) / "I finished eating." / "after eating" / "I started to play." hòu comes back as a place word ("behind") in L10. qián moved to L10 (D29).

**L10 Space 1 — Where it is** · 10 new · 79 / 162

- Core: lǐ _inside_, shàng _on, up_, xià _under, down_, qián _front; qián-miàn "in front"_, páng † _beside_, biān † _side_, pángbiān _beside, next to_, miàn † _side, face (as in lǐ-miàn, shàng-miàn)_, nǎlǐ † _where_
- Theme: dì † _floor, ground_
- Why: "The box is on the floor." / "inside the house" / "in front of me" / "Where is it?" The side-words (páng, biān, pángbiān, miàn) are one idea, so 10 words is fine.

**L11 Space 2 — Moving** · 11 new · 90 / 162

- Core: cóng _from_, lái _come_, qù _go_, qǐ _rise, up_, wài † _out, outside_
- Theme: shìchǎng † _market_, kǒu † _opening, door_
- Added: dào _arrive, to_, dòng _move_, yuǎn _far_, jìn _near_ (D36)
- Why: "I come from the market." / "I go to the market." / "Go!" / "Get up!" / "I'm going outside." There's no word for "stand" or "out" (出), so "stand up" is "get up" (qǐ-lái) and "go out" is "go outside" (qù wài-miàn).

**L12 Modifiers 1 — How much** · 8 new · 98 / 162

- Core: zhēn † _really_
- Theme: rè † _hot_, lěng _cold_, tián _sweet_, qíguài † _strange_, xīn _new_, shēntǐ _body_
- Added: jiàzhí _value_ (D36)
- Why: "really hot" / "very cold" / "not very strange" / "Are you cold?" The lesson needs describing words to turn up and down. There's no word for "a bit" (有点), so it says "not very" instead.

**L13 Modifiers 2 — Comparing** · 9 new · 107 / 162

- Core: bǐ † _than_, yīyàng _same_, bùtóng _different_
- Theme: yìng † _hard_, yuán † _round_, gùnzi † _stick_, xiàn † _line, rope_
- Added: biéde _other_, zhǒng _kind_ (D36)
- Why: "A stick is harder than a rope." Things with a clear shape and feel are easy to compare.

**L14 Modifiers 3 — Also and all** · 6 new · 113 / 162

- Core: yě _also_
- Theme: zhíwù _plant_, huǒ † _fire_, kōngqì † _air_
- Added: dōu _all_ (D35), bùfen _part_ (D36)
- Why: "I also eat." / "We all eat." / "I eat everything." / "Most people eat rice." Nature words give "all of them" something to point at. "All" is dōu, and "everything" is shénme-dōu (D35).

**L15 Modifiers 4 — Becoming and making** · 7 new · 120 / 162

- Core: biàn _become_, bǎ _(puts the thing first: "bǎ it make good")_, nòng _do, make_, dé † _get_
- Theme: lìliàng _strength, strong_, huài _bad, broken_, ní † _mud, paste_
- Why: "It became bad." / "fix it (make it good)" / "strong". "The water became mud" shows a change you can see.

**L16 Numbers** · 12 new · 132 / 162

- Core: yī _one_, liǎng _two_, hào _number (as in "number two")_
- Theme: none. Counting reuses every noun so far.
- Added: èr _two (counting, number two)_, sān _three_, sì _four_, wǔ _five_, liù _six_, qī _seven_, bā _eight_, jiǔ _nine_, shí _ten_
- Why: "one person" / "two animals" / "ten sticks" / "number two". There are 11 new words, but 3–10 are one family.

**L17 Colors** · 6 new · 138 / 162

- Core: yánsè † _color_, báisè _white_, hēisè _black_, hóngsè _red_, huángsè _yellow_, lánsè _blue, green_
- Theme: none. Every noun so far becomes something to color ("a red box").
- Why: one family, one idea.

**L18 Changing the Role of a Word** · 4 new · 142 / 162

- Core: cí _word_, fāngfǎ _way, method_
- Theme: bízi † _nose_, pífū † _skin, bark, peel_
- Why: the lesson is about the jobs a word can do, so cí belongs here. "the way of writing" (xiě-de fāngfǎ) is a -de example. pífū shows one word covering several things. bízi and pífū also finish the body words from L4.

**L19 Relationships 1 — Inside a sentence** · 8 new · 150 / 162

- Core: gěi _give, to, for_, yòng _use, with_, hé _and_, huòzhě _or_, duì _toward, for_
- Theme: qún _group_, mō † _touch_, dǎ † _hit_
- Why: "give it to me" / "you and me" / "this or that" / "for the group". "Touch it with your hand" and "hit it with a stick" give yòng its examples.

**L20 Relationships 2 — Linking sentences** · 6 new · 156 / 162

- Core: yīnwèi _because_, dànshì _but_
- Theme: yán _salt_, sǐ † _die, dead_
- Added: huà _(X-de huà, "if X")_, huó _live, alive_ (D36)
- Why: "It's good, but there's no salt." / "If a plant has no water, it dies." Linking sentences needs a cause and a result.

**L21 Greetings and Feelings** · 6 new · 162 / 162

- Core: juéde _feel, think_, pà † _be scared_, jiào _call, make an animal sound_
- Theme: shēngyīn † _sound, voice_, chóngzi † _bug_, xìng † _sex_
- Why: "I feel…" / "I'm scared of bugs." / "The animal says 'wāng'." This is the last lesson, so the vocabulary is complete here. It also takes in the old L22 (D17).

### 4d. Additions (decided 2026-09-27)

Approved words get added to `src/data/dictionary.json` (en/ru/zh) in Phase 1.

| Word                               | Meaning                   | Lesson | Decision            | Notes                                                                       |
| ---------------------------------- | ------------------------- | ------ | ------------------- | --------------------------------------------------------------------------- |
| dào                                | arrive, to                | L11    | **Added**           | Movement "to X". Current L05 and L15 already use it.                        |
| guò                                | have ever done            | L8     | **Added**           | There's no other way to say "I've been there". Current L05 already uses it. |
| huà                                | (X-de huà) "if"           | L20    | **Added**           | Named in intro-3.                                                           |
| sān, sì, wǔ, liù, qī, bā, jiǔ, shí | 3–10                      | L16    | **Added** (8 words) | Without them, Numbers stops at two.                                         |
| dōu | all, both (before a verb) | L14 | **Added** (D35) | Replaces quánbù. "Everything" is shénme-dōu. |
| kěyǐ                               | can, may                  | —      | Not added           | The current L09 material gets rewritten with néng.                          |
| shíhou                             | time, when                | —      | Not added           | Use X-de shíjiān, and fix the wording in intro-3.                           |
| tài / zuì / gèng                   | too / most / even more    | —      | Not added           | zhēn, hěn, and bǐ cover most needs.                                         |
| zhǐ                                | only                      | —      | Not added           | dànshì is listed as "only".                                                 |
| suǒyǐ                              | so, therefore             | —      | Not added           | yīnwèi alone works: "yīnwèi X, Y".                                          |
| gēn                                | with                      | —      | Not added           | hé covers it.                                                               |
| men                                | more than one person      | L4     | **Added** (D28)     | wǒ-men "we", nǐ-men "you all", tā-men "they".                               |
| èr | two (counting, number two) | L16 | **Added** (D31) | Counting aloud (一、二、三), 二号, 十二, 二十. liǎng is still right before gè. |
| shǎo | few, little | L3 | **Added** (D36) | NSM atom LITTLE~FEW. The opposite of duō. |
| kěnéng | maybe | L7 | **Added** (D36) | NSM atom MAYBE. A fifth pre-verb. |
| xiànzài | now | L8 | **Added** (D36) | NSM atom NOW. |
| fāshēng | happen | L8 | **Added** (D36) | NSM atom HAPPEN. "What happened?" |
| yīxià | a moment | L9 | **Added** (D36) | NSM atoms MOMENT / A SHORT TIME. děng yīxià, "wait a moment". |
| dòng | move | L11 | **Added** (D36) | NSM atom MOVE. |
| yuǎn, jìn | far, near | L11 | **Added** (D36, 2 words) | NSM atoms FAR and NEAR. |
| jiàzhí | value | L12 | **Added** (D36) | Not an NSM atom; added on request. hěn yǒu jiàzhí, "valuable". |
| biéde | other | L13 | **Added** (D36) | NSM atom OTHER~ELSE. |
| zhǒng | kind, type | L13 | **Added** (D36) | NSM atom KIND. zhè-zhǒng, like zhè-ge. |
| bùfen | part | L14 | **Added** (D36) | NSM atom PART. dà bùfen, "most". |
| huó | live, alive | L20 | **Added** (D36) | NSM atom LIVE, the pair to sǐ. |
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

**Strict for finished lessons.** The lessons in `scripts/finished-lessons.js` (L1–L21 so far) must pass every gate. Problems in other chapters are reported but don't fail the build. Add a lesson to that list once its Phase 2 rewrite passes every gate; from then on every build keeps it that way. Run a gate with chapter ids (`npm run check-jargon -- lesson-07`) to make it strict for just those, or with `--strict` for everything.

| Command                        | What it checks                                                                                                                                                                            | Fails the build for |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `npm run typecheck`            | The TypeScript types: every chapter's text files use the keys its `shape.ts` defines (run as the `check-types` gate). `npm run dev` also shows type errors in the terminal and the browser overlay. | any file            |
| `npm run check-book`           | Lessons match intro-3 (titles, order, sections); every word introduced once, matching §4b; summaries and TL;DR lines short and jargon-free; the proverbs and the stories use only dictionary words. Prints New / Total so far per lesson.         | any lesson          |
| `npm run check-summaries`      | Every chapter's summary is 50 words or fewer.                                                                                                                                             | any chapter         |
| `npm run check-jargon`         | No banned grammar words in the book's English text (rule 4). Lists each hit, and counts the allowed core terms.                                                                           | finished lessons    |
| `npm run check-early-words`    | No word used before its lesson, and no pinyin word missing from the dictionary (§4a rule 2). Lists each use.                                                                              | finished lessons    |
| `npm run check-word-use`       | Every word a lesson introduces appears in one of its example sentences or answers. Also reports rule 7's targets (3 sentences at home, reuse in 2 later lessons, or all that are left); `--targets` lists them. | finished lessons    |
| `npm run check-grammar-blocks` | Every lesson has a grammar box with a title and a unique tag.                                                                                                                             | finished lessons    |
| `npm run check-practice`       | Every word a lesson introduces is in at least one of its examples and in at least one of its exercises (answers). A lesson with new words has examples and exercises at all.              | finished lessons    |
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
- [x] Rewrite every summary and TL;DR line in plain words (rule 7)
- [x] L4 becomes "Pointing at People and Things", with gè, zhè-ge, and nà-ge (D26)
- [x] Section 1 (L1–L6) passes every gate, and is on the finished list (`scripts/finished-lessons.js`)
- [x] `npm run typecheck`, `npm test`, and `npm run build` all pass
- [x] Preview: the sidebar shows 3 sections with 21 lessons, and every lesson page renders

### Phase 2 — Rewrite, lesson by lesson (English only, user review after each)

For each lesson: ☐ written to template ☐ `npm run check -- lesson-NN` passes (every gate) ☐ exercises + answers ☐ **user approved** ☐ added to `scripts/finished-lessons.js`

- [ ] L1 Sounds and Symbols — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L2 Words and Sentences — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L3 Modifying Nouns — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L4 Pointing at People and Things — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L5 Verbs — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L6 Questions and Answers — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L7 Pre-Verbs — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L8 Time 1 — When it happens — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L9 Time 2 — Around an action — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L10 Space 1 — Where it is — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L11 Space 2 — Moving — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L12 Modifiers 1 — How much — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L13 Modifiers 2 — Comparing — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L14 Modifiers 3 — Also and all — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L15 Modifiers 4 — Becoming and making — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L16 Numbers — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L17 Colors — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L18 Changing the Role of a Word — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L19 Relationships 1 — Inside a sentence — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L20 Relationships 2 — Linking sentences — rewritten, passes every gate, on the finished list; **waiting for your review**
- [ ] L21 Greetings and Feelings (takes in the old L22) — rewritten, passes every gate, on the finished list; **waiting for your review**

### Phase 3 — Intros and reference

- [x] Tone pass on intro-1, intro-2, intro-3 — shorter sentences and plainer words, same claims; intro-2 gets a summary; intro-3's lesson lines now match what each lesson teaches
- [ ] "Why Minimality Works": the author rewrites it (D32)
- [x] Appendix: Grammar Patterns Reference aligned with the new lessons — it is now generated from the lessons (below)
- [x] Appendix: Ten Short Stories use only words taught by the lessons they cite — every Chinese line uses dictionary words (bird is zài-kōngqì-lǐ-de dòngwù, see is kàn-dào, money is jīn), and the notes point at the current lessons
- [x] Sentence Builder and Proverbs checked against the dictionary — the proverbs drop dōu and zìjǐ and say jīn for money; the builder picks words from the dictionary; check-book now guards the proverbs and the stories
- [x] `npm run check -- --strict` passes (jargon: lessons only, D32; reuse capped near the end, D33)
- [x] Grammar overview chapter built automatically from every lesson's grammar boxes (`grammarRules` in `src/lib/chapter-content.js` already collects them), replacing the hand-written `appendix-grammar.yaml` Done: `scripts/generate-grammar-overview.js` writes `src/content/appendix-grammar.ts` on every build; the old YAML is in `src/content/legacy/`.

### Phase 3b — Atoms, dōu, and grammar terms (2026-09-27)

- [x] Grammar terms allowed in the lessons, plain name first (D34); `scripts/jargon.js` updated
- [x] dōu replaces quánbù everywhere, with shénme-dōu for "everything" (D35)
- [x] 13 new words (NSM atoms + value) in the dictionary, each taught in its lesson and reused in two later ones (D36)
- [ ] Your review of the new points: L3 few, L7 maybe, L8 now / happen, L9 a moment, L11 move / far / near, L12 value, L13 other / kind, L14 all / everything / part, L20 live

### Phase 4 — Translation (after all English is approved)

- [ ] ru: L1–L21, intros
- [ ] zh: L1–L21, intros
