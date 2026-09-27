# Book Plan — Restructure to intro-3

Living plan and checklist for rebuilding the lessons to match `src/content/intro-3.ts`. Tick boxes as work lands. `BOOK_STRUCTURE.md` describes the book as it *is*. This file describes where it's *going*.

---

## 1. Tone guide

**Who we write for:** learners who want to *say things*. They are not language scientists.

**What we are:** real Mandarin, boiled down to the simplest version that still works. We are **not** Toki Pona. Every rule is ordinary Mandarin, and every word is a real Mandarin word.

**Rules:**

1. **Examples over descriptions.** If a point can be shown, show it. Prose is the glue between examples, not the main content.
2. **Start from what you want to say.** Open each point with the learner's goal ("To say something is *not* something…"), not with the grammar ("Negation is formed by…").
3. **One idea per sentence.** Short sentences. No semicolons chaining three rules together.
4. **Everyday terms only.** Allowed: *noun, verb, describing word, question, sentence, word*. Banned: *coverb, classifier, nominalization, predicate, copula, aspect, complement, topic-comment, compositional, construction, perfective, causative, auxiliary, reduplication, syntactic, ungrammatical*. If a real term is truly useful, mention it **once**, in brackets, after the plain name.
5. **No "Hao-shuo-de collapses / simplifies X" meta-talk inside lessons.** That belongs in the intros and appendices. Lessons just teach the thing.
6. **Use only dictionary words.** The approved additions (§4d) join the dictionary in Phase 1. If a lesson needs a missing word, stop and flag it.

**Before and after:**

> ❌ *"Question words like shénme sit right where the answer would go, ma turns any statement into a yes-or-no question, and A-not-A reduplication asks the same thing without ma."*
>
> ✅ *"To ask a yes-or-no question, put **ma** at the end. To ask 'what?', put **shénme** exactly where the answer would go."*

### Lesson template

```
title
summary            1–2 plain sentences: what you'll be able to SAY after this lesson
vocab              ~6 new words (word families may run a little over)

For each teaching point (2–4 per lesson):
  Say       one line: the thing you want to express
  Pattern   one line: e.g.  NOUN + bù shì + NOUN
  Examples  3–6, each with translation + audio
  Try it    4–6 exercises (answers collected at the end)

answers
```

- A teaching point's prose is **at most 1–2 plain sentences** beyond Say + Pattern.
- `tldr` / `necessity` fields, where kept, follow the same tone.

---

## 2. Decisions log

| # | Decision |
|---|----------|
| D1 | intro-3 is the source of truth. It is modified **only where really needed**. The splits below (Time/Space ×4, Modifiers ×4, Relationships ×2) and the L22 merge (D17) need it, so intro-3 gets updated to list them. |
| D2 | Prepositions are no longer a lesson. They go wherever their meaning fits: zài / cóng go to Time/Space, and gěi / yòng / yīnwèi / duì go to Relationships. |
| D3 | Place words (lǐ, shàng, xià, hòu, pángbiān…) go to **Space 1**. |
| D4 | Verbs (L5) keeps only SVO and negation. Time markers move to **Time 1/2**. Direction endings move to **Space 2**. |
| D5 | "Time and Space" becomes **Time 1, Time 2, Space 1, Space 2**. |
| D6 | X-de huà ("if X") moves to **Relationships 2**, not Time. |
| D7 | "Changing the role of a word" is mainly about **the jobs of -de**: making nouns, "how" words, and so on. It ends with a brief note on other ways, such as compounds and one word doing several jobs. |
| D8 | -de is **drip-fed**: L3 as describer-de-noun, then L4 as wǒ-de "my". Then L18 gathers every use together. (L2 no longer uses it; see D21.) |
| D9 | Measure word gè (old L11) merges into **Modifying Nouns (L3)**, together with this one, that one, and many. |
| D10 | "More Modifiers" becomes **four lessons**: How much, Comparing, Also / all, and Becoming and making. |
| D11 | "Expressing Various Relationships" becomes **two lessons**: inside a sentence, and linking sentences. |
| D12 | The dictionary is **closed, plus a short approved list** (§4d, D18). |
| D13 | **English first.** ru/zh stay blank until the English for that lesson is approved. |
| D14 | Plan and checklist live in this file. |
| D15 | Workflow: **Phase 1 skeleton** (new layout, content moved, build green), then **Phase 2 lesson-by-lesson rewrite** with a user review after each lesson. |
| D16 | Size: 2–4 teaching points, about 6 new words, 15–20 minutes per lesson. |
| D17 | L22 (Particles and Other Special Words) **merges into L21**. The book has **21 lessons**, split 6 / 9 / 6 across the three sections. (Q1) |
| D18 | **Approved additions:** dào (L11), guò (L8), huà (L20), and sān, sì, wǔ, liù, qī, bā, jiǔ, shí (L16). The vocabulary becomes **147 words**: 136 + 11. (§4d) |
| D19 | **Not added:** dōu, kěyǐ, shíhou, tài / zuì / gèng, zhǐ, suǒyǐ, gēn, and ne / ba / a. "All" is always quánbù, even where dōu would sound more natural. |
| D20 | zài: **Time comes before Space.** L8 teaches zài as "right now", and L10 adds "be at a place". (Q3) |
| D21 | **xiě-de dōngxi is dropped from L2.** L3 is the first -de (see D8). (Q4) |
| D22 | intro-3's Pre-Verbs wording changes from "attempt, learning, continuation" to **"wanting, being able to, knowing how, and loving to"**. No words move. (Q2) |
| D23 | The vocab spread in §4b is **approved**, including the six theme-word moves. |

---

## 3. New table of contents (21 lessons)

"Source" means where the raw material comes from in the **current** lessons.

### Section 1 — Sounds, Words, and Simple Sentences

| New | Title | You'll be able to say… | Source |
|----|-------|------------------------|--------|
| 1 | Sounds and Symbols | *(read and pronounce pinyin + tones)* | L01 |
| 2 | Words and Sentences | "This is a person." / "An animal is not a fruit." | L02 |
| 3 | Modifying Nouns | "The water is good." / "a big place" / "this one, that one" / "many people" | L03 + L11 |
| 4 | You and I | "I am a person." / "my hand" / "your family" | L04 (this/that move to L3) |
| 5 | Verbs | "I eat rice." / "She doesn't write." / "I don't have money." | L05 (trimmed) |
| 6 | Questions and Answers | "What is this?" / "Are you a person?" / "Why?" / "How?" | L06 |

### Section 2 — Modifying Words and Meaning

| New | Title | You'll be able to say… | Source |
|----|-------|------------------------|--------|
| 7 | Pre-Verbs | "I want to eat." / "I can hear." / "I know how to write." / "I love to eat." | L09 (kāishǐ → L9, biàn → L15) |
| 8 | Time 1 — When it happens | "I ate." / "I'm eating right now." / "I will eat." / "Today, I sleep." | L05 time markers, L08 |
| 9 | Time 2 — Around an action | "When I eat, …" / "I finished eating." / "after eating" / "I started to play." | L08, L05 endings, L09 kāishǐ |
| 10 | Space 1 — Where it is | "The box is on the table." / "inside the house" / "Where is it?" | L15, L07 zài |
| 11 | Space 2 — Moving | "I come from the market." / "Go!" / "stand up" / "go out the door" | L15, L07 cóng, L05 direction endings |
| 12 | Modifiers 1 — How much | "really hot" / "very cold" / "a bit strange" | L10 |
| 13 | Modifiers 2 — Comparing | "A is bigger than B." / "the same" / "different" | new |
| 14 | Modifiers 3 — Also and all | "I also eat." / "All the plants are good." | L16 yě, new |
| 15 | Modifiers 4 — Becoming and making | "It got better." / "It became bad." / "fix it (make it good)" / "strong" | L10, L09 biàn |

### Section 3 — Special Words and Concepts

| New | Title | You'll be able to say… | Source |
|----|-------|------------------------|--------|
| 16 | Numbers | "one person" / "two animals" / "number two" | L13 |
| 17 | Colors | "a red box" / "The sky is blue." | L14 |
| 18 | Changing a Word's Role | "food (eat-de)" / "the one who writes" / "speak well" — every job of -de together | new (gathers de from L3–L4, L12) |
| 19 | Relationships 1 — Inside a sentence | "give it to me" / "write with a tool" / "you and me" / "this or that" / "for me…" | L07 gěi/yòng, L16 hé/duì |
| 20 | Relationships 2 — Linking sentences | "because…" / "but…" / "if…" | L07 yīnwèi, L08 conditions |
| 21 | Greetings and Feelings | "Hello!" / "Eat!" / "The dog says 'wāng'." / "I feel…" / "I'm scared." | L12, plus any L16 leftovers (D17) |

### Section 4 — Texts, Vocabulary, and Reference
No structural change. Only lesson-number citations get updated.

---

## 4. Vocabulary

### 4a. How words are placed

**Goal:** each of the 147 words is **introduced once**, in the lesson that needs it most, and is then **reused** until it sticks. The 147 are the 136 dictionary words plus the 11 approved additions (§4d). By the end of L21, the learner has met every word.

1. **One home per word.** Each word is introduced in exactly one lesson and appears in that lesson's `vocab` list. After that, any lesson can use it.
2. **No early use.** A lesson's examples, exercises, and answers use only words from that lesson or earlier ones. L1 is the one exception: it may show words as sound examples. That doesn't count as introducing them.
3. **Two kinds of new word.**
   - **Core words** are what the lesson teaches (shì, ma, le, bǐ, bǎ…). The table of contents (§3) fixes where they go.
   - **Theme words** are fresh nouns, describing words, and verbs that give the examples something to talk about (hand, rice, box…). They can move between lessons.
4. **Load.** Aim for about 6 new words (D16).
   - Section 1 may run to 8–10, because learners need a starter stock of nouns before they can say much.
   - After Section 1, aim for 4–8.
   - A word family taught as one idea (páng / biān / pángbiān / miàn, the six colors, the numbers) still counts one per word, but feels like one step to the learner.
5. **Balance with theme words only.** If a lesson is too heavy or too light, move a theme word, never a core word. Move it to a lesson whose examples would naturally use it.
6. **Group by topic.** Theme words join the lesson whose examples need them. Body parts go with "my hand" (L4). Food and money go with "eat" and "have" (L5). The box and the tool go with "What is this?" (L6). The market and the door go with "come from / go out" (L11).
7. **Use it, then reuse it.** A new word appears in at least 3 examples or exercises in its own lesson. It then appears again in at least 2 later lessons, or in the stories appendix. Words from the last lessons (L18–L21) get their reuse in the Texts section.
8. **Finish by L21.** Section 4 (texts, appendices) introduces nothing new.
9. **Keep it checkable.** §4b is the source of truth. If a word moves, update §4b and §4c, then rerun the check (the Phase 1 check script). It must show 147/147, no duplicates, and no early use.

### 4b. Spread of the 147 words (first introduction)

Approved (D23). It can still be adjusted as each lesson is written, but the rules in §4a must always hold.

- **Added words:** approved additions (§4d). They join `dictionary.json` in Phase 1.
- **New:** words introduced for the first time in this lesson, added words included.
- **Total so far:** words introduced by the end of this lesson, out of the whole vocabulary (147).
- **%:** how much of the vocabulary the learner has met.

| L | Lesson | Core words | Theme words | Added words | New | Total so far | % |
|---|--------|------------|-------------|-------------|----:|-------------:|--:|
| 1 | Sounds and Symbols | — | — | — | **0** | 0 / 147 | 0% |
| 2 | Words and Sentences | shì, bù, zhè | dōngxi, rén, nǚrén, nánrén, dòngwù, shuǐguǒ | — | **9** | 9 / 147 | 6% |
| 3 | Modifying Nouns | hěn, de, nà, gè, duō, hǎo, dà, xiǎo | shuǐ, dìfāng | — | **10** | 19 / 147 | 13% |
| 4 | You and I | wǒ, nǐ, tā | fùmǔ, jiā, tóu, shǒu, jiǎo, shēntǐ | — | **9** | 28 / 147 | 19% |
| 5 | Verbs | yǒu, méi, chī, kàn, tīng, shuō, xiě | jīn, mǐfàn | — | **9** | 37 / 147 | 25% |
| 6 | Questions and Answers | shénme, ma, wèishénme, zěnme, wèn | zhǎo, gōngjù, hézi | — | **8** | 45 / 147 | 31% |
| 7 | Pre-Verbs | yào, néng, zhīdào, ài | děng, yīfu | — | **6** | 51 / 147 | 35% |
| 8 | Time 1 | shíjiān, le, huì, zài | rì, yuè, shuìjiào | guò | **8** | 59 / 147 | 40% |
| 9 | Time 2 | wán, kāishǐ, hòu, qiánmiàn | wánr, liú | — | **6** | 65 / 147 | 44% |
| 10 | Space 1 | lǐ, shàng, xià, páng, biān, pángbiān, miàn, nǎlǐ | tái | — | **9** | 74 / 147 | 50% |
| 11 | Space 2 | cóng, lái, qù, qǐ, wài | shìchǎng, kǒu | dào | **8** | 82 / 147 | 56% |
| 12 | Modifiers 1 — How much | zhēn | rè, lěng, tián, qíguài, xīn | — | **6** | 88 / 147 | 60% |
| 13 | Modifiers 2 — Comparing | bǐ, yīyàng, bùtóng | yìng, yuán, gùnzi, xiàn | — | **7** | 95 / 147 | 65% |
| 14 | Modifiers 3 — Also and all | yě, quánbù | zhíwù, huǒ, kōngqì | — | **5** | 100 / 147 | 68% |
| 15 | Modifiers 4 — Becoming and making | biàn, bǎ, nòng, dé | lìliàng, huài, ní | — | **7** | 107 / 147 | 73% |
| 16 | Numbers | yī, liǎng, hào | — | sān, sì, wǔ, liù, qī, bā, jiǔ, shí | **11** | 118 / 147 | 80% |
| 17 | Colors | yánsè, báisè, hēisè, hóngsè, huángsè, lánsè | — | — | **6** | 124 / 147 | 84% |
| 18 | Changing a Word's Role | cí, fāngfǎ | bízi, pífū | — | **4** | 128 / 147 | 87% |
| 19 | Relationships 1 | gěi, yòng, hé, huòzhě, duì | qún, mō, dǎ | — | **8** | 136 / 147 | 93% |
| 20 | Relationships 2 | yīnwèi, dànshì | yán, sǐ | huà | **5** | 141 / 147 | 96% |
| 21 | Greetings and Feelings | juéde, pà, jiào | shēngyīn, chóngzi, xìng | — | **6** | 147 / 147 | 100% |
| | **Total** | **82** | **54** | **11** | **147** | | |

**By section:**

| Section | Lessons | New | Total at the end |
|---------|---------|----:|-----------------:|
| 1 — Sounds, Words, and Simple Sentences | L1–L6 | 45 | 45 / 147 (31%) |
| 2 — Modifying Words and Meaning | L7–L15 | 62 | 107 / 147 (73%) |
| 3 — Special Words and Concepts | L16–L21 | 40 | 147 / 147 (100%) |
| 4 — Texts, Vocabulary, and Reference | — | 0 | 147 / 147 |

**Load:** 147 words across the 20 lessons that introduce words, which is **about 7 per lesson** on average. The heaviest lesson is L16 (11), but 8 of those are the numbers 3–10, which are one family. Next is L3 (10). The lightest is L18 (4).

Validated: 147/147 words assigned (136 dictionary + 11 added), no duplicates, and the running total ends at 147.

**Changes from the first draft (approved).** Six theme words moved to even out the load. No core word moved.

| Word | Was | Now | Why |
|------|-----|-----|-----|
| jīn *money* | L7 | L5 | The L5 example "I don't have money" needs it. |
| zhǎo *look for* | L5 | L6 | "What are you looking for?" is a natural question. It also lightens L5. |
| cí *word* | L5 | L18 | L18 is about the jobs a word can do. It lightens L5 and fills L18. |
| wài *outside* | L10 | L11 | "Go out the door" is about moving. It lightens L10. |
| yán *salt* | L15 | L20 | "It's good, but there's no salt." It fills L20. |
| sǐ *die* | L15 | L20 | "If a plant has no water, it dies." It fills L20. |

Two words are now spelled the way the dictionary spells them: **tái** (dictionary id `di4`) and **qiánmiàn** (id `qian2`).

### 4c. Lesson by lesson

What each lesson introduces, and why those words are there. **†** marks a dictionary word that no current lesson uses. Its examples will be new writing (44 of the 136 dictionary words). **Added** marks an approved addition (§4d).

**L1 Sounds and Symbols** · 0 new · 0 / 147
- No new words. Words may appear as sound examples only (rule 2).

**L2 Words and Sentences** · 9 new · 9 / 147
- Core: shì *be*, bù *not*, zhè *this*
- Theme: dōngxi *thing*, rén *person*, nǚrén *woman*, nánrén *man*, dòngwù *animal*, shuǐguǒ *fruit*
- Why: the smallest set that makes "This is a person." and "An animal is not a fruit." There's no -de yet: xiě-de dōngxi is dropped (D21).

**L3 Modifying Nouns** · 10 new · 19 / 147
- Core: hěn *very*, de *(joins a describing word to a noun)*, nà *that*, gè *(goes between this / that / a number and a noun)*, duō *many*, hǎo *good*, dà *big*, xiǎo *small*
- Theme: shuǐ *water*, dìfāng *place*
- Why: "The water is good." / "a big place" / "this one, that one" / "many people". This is the heaviest Section 1 lesson on purpose: it holds the describing words that everything else leans on.

**L4 You and I** · 9 new · 28 / 147
- Core: wǒ *I, me*, nǐ *you*, tā *he, she, it, they*
- Theme: fùmǔ *parents*, jiā † *home, family*, tóu † *head*, shǒu † *hand*, jiǎo † *foot*, shēntǐ *body*
- Why: "my hand" / "your family". Body and family are the first things people call "mine".

**L5 Verbs** · 9 new · 37 / 147
- Core: yǒu *have*, méi *not (only with yǒu)*, chī *eat, drink*, kàn *look, read*, tīng *listen*, shuō *say, speak*, xiě *write*
- Theme: jīn † *money*, mǐfàn † *rice, staple food*
- Why: "I eat rice." / "She doesn't write." / "I don't have money."

**L6 Questions and Answers** · 8 new · 45 / 147
- Core: shénme *what*, ma *(turns a sentence into a yes-or-no question)*, wèishénme *why*, zěnme *how*, wèn † *ask*
- Theme: zhǎo † *look for*, gōngjù *tool*, hézi † *box*
- Why: "What is this?" needs things to point at, like a box or a tool. "What are you looking for?" gives zhǎo a natural home.

**L7 Pre-Verbs** · 6 new · 51 / 147
- Core: yào *want, need*, néng † *can*, zhīdào *know, know how*, ài *love*
- Theme: děng † *wait*, yīfu † *clothes*
- Why: "I want to eat." / "I can wait." / "I want clothes." These are two easy things to want or wait for. "can / may" is always néng (D19).

**L8 Time 1 — When it happens** · 8 new · 59 / 147
- Core: shíjiān *time*, le *(it happened / it changed)*, huì *will*, zài *(right now, in the middle of)*
- Theme: rì *sun*, yuè † *moon*, shuìjiào *sleep*
- Added: guò *have ever done*
- Why: "I ate." / "I'm eating right now." / "I will eat." / "I've been there." The sun and moon give day-and-night examples.

**L9 Time 2 — Around an action** · 6 new · 65 / 147
- Core: wán *finish*, kāishǐ *start*, hòu *after, behind*, qiánmiàn *before, in front*
- Theme: wánr † *play*, liú *stay, keep*
- Why: "When I eat, …" (X-de shíjiān) / "I finished eating." / "after eating" / "I started to play." hòu and qiánmiàn come back as place words in L10.

**L10 Space 1 — Where it is** · 9 new · 74 / 147
- Core: lǐ *inside*, shàng *on, up*, xià *under, down*, páng † *beside*, biān † *side*, pángbiān *beside, next to*, miàn † *side, face (as in lǐ-miàn, shàng-miàn)*, nǎlǐ † *where*
- Theme: tái † *table top, floor*
- Why: "The box is on the table." / "inside the house" / "Where is it?" The side-words (páng, biān, pángbiān, miàn) are one idea, so 9 words is fine.

**L11 Space 2 — Moving** · 8 new · 82 / 147
- Core: cóng *from*, lái *come*, qù *go*, qǐ *rise, up*, wài † *out, outside*
- Theme: shìchǎng † *market*, kǒu † *opening, door*
- Added: dào *arrive, to*
- Why: "I come from the market." / "I go to the market." / "Go!" / "stand up" / "go out the door".

**L12 Modifiers 1 — How much** · 6 new · 88 / 147
- Core: zhēn † *really*
- Theme: rè † *hot*, lěng *cold*, tián *sweet*, qíguài † *strange*, xīn *new*
- Why: "really hot" / "very cold" / "a bit strange". The lesson needs describing words to turn up and down.

**L13 Modifiers 2 — Comparing** · 7 new · 95 / 147
- Core: bǐ † *than*, yīyàng *same*, bùtóng *different*
- Theme: yìng † *hard*, yuán † *round*, gùnzi † *stick*, xiàn † *line, rope*
- Why: "A stick is harder than a rope." Things with a clear shape and feel are easy to compare.

**L14 Modifiers 3 — Also and all** · 5 new · 100 / 147
- Core: yě *also*, quánbù *all*
- Theme: zhíwù *plant*, huǒ † *fire*, kōngqì † *air*
- Why: "I also eat." / "All the plants are good." Nature words give "all of them" something to point at. "All" is always quánbù. There's no dōu (D19).

**L15 Modifiers 4 — Becoming and making** · 7 new · 107 / 147
- Core: biàn *become*, bǎ *(puts the thing first: "bǎ it make good")*, nòng *do, make*, dé † *get*
- Theme: lìliàng *strength, strong*, huài *bad, broken*, ní † *mud, paste*
- Why: "It became bad." / "fix it (make it good)" / "strong". "The water became mud" shows a change you can see.

**L16 Numbers** · 11 new · 118 / 147
- Core: yī *one*, liǎng *two*, hào *number (as in "number two")*
- Theme: none. Counting reuses every noun so far.
- Added: sān *three*, sì *four*, wǔ *five*, liù *six*, qī *seven*, bā *eight*, jiǔ *nine*, shí *ten*
- Why: "one person" / "two animals" / "ten sticks" / "number two". There are 11 new words, but 3–10 are one family.

**L17 Colors** · 6 new · 124 / 147
- Core: yánsè † *color*, báisè *white*, hēisè *black*, hóngsè *red*, huángsè *yellow*, lánsè *blue, green*
- Theme: none. Every noun so far becomes something to color ("a red box").
- Why: one family, one idea.

**L18 Changing a Word's Role** · 4 new · 128 / 147
- Core: cí *word*, fāngfǎ *way, method*
- Theme: bízi † *nose*, pífū † *skin, bark, peel*
- Why: the lesson is about the jobs a word can do, so cí belongs here. "the way of writing" (xiě-de fāngfǎ) is a -de example. pífū shows one word covering several things. bízi and pífū also finish the body words from L4.

**L19 Relationships 1 — Inside a sentence** · 8 new · 136 / 147
- Core: gěi *give, to, for*, yòng *use, with*, hé *and*, huòzhě *or*, duì *toward, for*
- Theme: qún *group*, mō † *touch*, dǎ † *hit*
- Why: "give it to me" / "you and me" / "this or that" / "for the group". "Touch it with your hand" and "hit it with a stick" give yòng its examples.

**L20 Relationships 2 — Linking sentences** · 5 new · 141 / 147
- Core: yīnwèi *because*, dànshì *but*
- Theme: yán *salt*, sǐ † *die, dead*
- Added: huà *(X-de huà, "if X")*
- Why: "It's good, but there's no salt." / "If a plant has no water, it dies." Linking sentences needs a cause and a result.

**L21 Greetings and Feelings** · 6 new · 147 / 147
- Core: juéde *feel, think*, pà † *be scared*, jiào *call, make an animal sound*
- Theme: shēngyīn † *sound, voice*, chóngzi † *bug*, xìng † *sex*
- Why: "I feel…" / "I'm scared of bugs." / "The animal says 'wāng'." This is the last lesson, so the vocabulary is complete here. It also takes in the old L22 (D17).

### 4d. Additions (decided 2026-09-27)

Approved words get added to `src/data/dictionary.json` (en/ru/zh) in Phase 1.

| Word | Meaning | Lesson | Decision | Notes |
|------|---------|--------|----------|-------|
| dào | arrive, to | L11 | **Added** | Movement "to X". Current L05 and L15 already use it. |
| guò | have ever done | L8 | **Added** | There's no other way to say "I've been there". Current L05 already uses it. |
| huà | (X-de huà) "if" | L20 | **Added** | Named in intro-3. |
| sān, sì, wǔ, liù, qī, bā, jiǔ, shí | 3–10 | L16 | **Added** (8 words) | Without them, Numbers stops at two. |
| dōu | all, both (before a verb) | — | Not added | "All" is always quánbù, even where dōu would sound more natural. |
| kěyǐ | can, may | — | Not added | The current L09 material gets rewritten with néng. |
| shíhou | time, when | — | Not added | Use X-de shíjiān, and fix the wording in intro-3. |
| tài / zuì / gèng | too / most / even more | — | Not added | zhēn, hěn, and bǐ cover most needs. |
| zhǐ | only | — | Not added | dànshì is listed as "only". |
| suǒyǐ | so, therefore | — | Not added | yīnwèi alone works: "yīnwèi X, Y". |
| gēn | with | — | Not added | hé covers it. |
| ne / ba / a | sentence-end particles | — | Not added | L22 merged into L21, so no particle lesson needs them (D17). |

---

## 5. Questions

All answered on 2026-09-27. New questions go here.

- **Q1 — What does L22 teach?** → **Merged into L21.** The book has 21 lessons (D17).
- **Q2 — intro-3 "attempt, learning, continuation".** → **Reword intro-3** to "wanting, being able to, knowing how, and loving to" (D22).
- **Q3 — L8 zài.** → **Time stays before Space** (D20).
- **Q4 — xiě-de dōngxi in L2.** → **Dropped.** L3 is the first -de (D21).

---

## 6. Checklist

### Phase 0 — Decisions
- [x] Approve the vocab spread (§4b), including the six moves from the first draft (D23)
- [x] Approve / reject the candidate additions (§4d, D18, D19)
- [x] Answer Q1 (L22 content): merged into L21 (D17)
- [x] Answer Q2 (intro-3 Pre-Verbs wording): reword (D22)
- [x] Answer Q3 (zài order): Time before Space (D20)
- [x] Answer Q4 (xiě-de dōngxi in L2): dropped (D21)

### Phase 1 — Skeleton (build green, content moved, not yet rewritten)
- [ ] Commit the current uncommitted edits (L02, L06, L08) so the old state is recoverable
- [ ] Archive a snapshot of the current 16 lessons to `src/content/legacy/v2-16-lessons/`
- [ ] Add the 11 approved words (D18) to `src/data/dictionary.json` (en/ru/zh, plus a category)
- [ ] Create the 21 lesson folders with `shape.ts` / `en.ts` / `ru.ts` / `zh.ts` / `index.ts`
- [ ] Move raw blocks into their new lessons (per the "Source" column in §3); new lessons get a stub
- [ ] Update `intro-3.ts` to list the 21 lessons: the splits, the L22 merge (D17), the Pre-Verbs wording (D22), and de-shíhou → X-de shíjiān
- [ ] Update `src/lib/lesson-sections.js` (6 / 9 / 6)
- [ ] Update sidebar labels / i18n (`word-usage.json` chapter labels via `npm run word-usage`)
- [ ] Update `BOOK_STRUCTURE.md`
- [ ] Update "Lesson N" citations in `appendix-grammar.yaml`, `appendix-stories.yaml`, `appendix-pinyin.md`, and inside lessons
- [ ] Add a check script for the §4a rules: every one of the 147 words is introduced exactly once, matching §4b; no lesson uses a word before its home lesson; lessons use only dictionary words. It prints the New / Total so far counts per lesson
- [ ] `npm run typecheck`, `npm test`, and `npm run build` all pass
- [ ] Preview: the sidebar shows 3 sections with 21 lessons, and every lesson page renders

### Phase 2 — Rewrite, lesson by lesson (English only, user review after each)

For each lesson: ☐ written to template ☐ tone check (no banned terms) ☐ only allowed words ☐ `vocab` matches its §4b row ☐ exercises + answers ☐ builds ☐ **user approved**

- [ ] L1 Sounds and Symbols
- [ ] L2 Words and Sentences
- [ ] L3 Modifying Nouns
- [ ] L4 You and I
- [ ] L5 Verbs
- [ ] L6 Questions and Answers
- [ ] L7 Pre-Verbs
- [ ] L8 Time 1 — When it happens
- [ ] L9 Time 2 — Around an action
- [ ] L10 Space 1 — Where it is
- [ ] L11 Space 2 — Moving
- [ ] L12 Modifiers 1 — How much
- [ ] L13 Modifiers 2 — Comparing
- [ ] L14 Modifiers 3 — Also and all
- [ ] L15 Modifiers 4 — Becoming and making
- [ ] L16 Numbers
- [ ] L17 Colors
- [ ] L18 Changing a Word's Role
- [ ] L19 Relationships 1 — Inside a sentence
- [ ] L20 Relationships 2 — Linking sentences
- [ ] L21 Greetings and Feelings (takes in the old L22)

### Phase 3 — Intros and reference
- [ ] Tone pass on intro-1, intro-2, intro-3
- [ ] Appendix: Grammar Patterns Reference aligned with the new lessons
- [ ] Appendix: Ten Short Stories use only words taught by the lessons they cite
- [ ] Sentence Builder and Proverbs checked against the dictionary

### Phase 4 — Translation (after all English is approved)
- [ ] ru: L1–L21, intros
- [ ] zh: L1–L21, intros
