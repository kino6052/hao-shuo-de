# Writing in Hao-shuo-de: plan

How a program, or Claude as an agent, turns any text into Hao-shuo-de: first break the text into its simplest ideas, then find the words for each idea (or reword it until the words exist), then build sentences the grammar accepts, then read them back to check nothing was lost or added.

Status: **decided, 2026-10-15** (W1–W14, asked one at a time). Next: the pilot text for lesson 11 (§6).

## 0. Decisions

| # | Decision |
|---|---|
| W1 | **Book reading texts first** (the author, 2026-10-15): stories and graded readers for the book. The ten stories are the first test set (idea 1); the book's gates check the output. Your own writing, measuring the language and the site tool come later and reuse the same steps. |
| W2 | **Claude runs it in a session** (the author, 2026-10-15): Claude does the breaking down, the writing and the read-back here, with the KB tools (`kb_lookup`, `kb_check_text`, `kb_gloss`). No API key and no cost per text. The program parts (lookup, checks, gloss) are plain tools, so a script could call them later. |
| W3 | **English originals only** (the author, 2026-10-15): the lookup reads the English of the words and composites (and WordNet later). A Russian or Chinese original is put into English first, outside these steps. |
| W4 | **Plain English first, primes on demand** (the author, 2026-10-15): step 1 writes short plain-English ideas. An idea goes down to the NSM primes only when step 2 finds no word or description for it; the prime version is kept in the sketch next to the plain one. |
| W5 | **The level is set per text, and texts are grounded in the book** (the author, 2026-10-15: "we need to make sure we map our lessons well onto texts so we [are] grounding texts in our own materials"). Each text names the lesson it goes with; the checks allow only the words and patterns taught by then. The lookup tries the book's own phrasings first (lesson sentences, composite examples, the stories' descriptions), so a text says things the way the learner has already seen them. A report maps lessons to texts: which lesson's words and patterns each text uses, and which lessons no text practises yet. |
| W6 | **Ground in all of the book's own materials, and the composite dictionary gives a word and a paraphrase** (the author, 2026-10-15: "we also [ground] in phrasebook and dictionary phrasings (also need to make sure composite dictionary isn't just word to word - but word to word/paraphrasing)"). Tier 0 of the lookup reads the lessons, the phrase book, the stories, the core words' definitions and paraphrases, and the composite forms and examples. A composite gives both its short form (fēi-jī) and a paraphrase that says it with simpler words, like a core word's paraphrase (K3) and a spelled form's (K23), so a text below the composite's level can still say the thing. About 740 composites have a one-word main form today; about 600 are already a description. |
| W7 | **Paraphrases for the one-word composites first** (the author, 2026-10-15): the ~740 composites whose main form is one word get a paraphrase; the ~600 that are already a description do not need a second one. Spelled forms come first (K23), then the rest. Claude drafts, the author reviews in batches of 100, as for the composites. |
| W8 | **A text per lesson** (the author, 2026-10-15): each of the 24 lessons gets a short reading text that uses that lesson's new words and patterns on purpose, plus only what earlier lessons taught. The lesson map (W5) shows which lessons have no text yet and which new words and patterns a lesson's text leaves out. |
| W9 | **No word: describe, then report** (the author, 2026-10-15): a needed idea with no word or phrasing at the text's level is described from the allowed words (wolf → dà huài dòng-wù), kept in the text's cast list, and logged as a gap, so the KB can propose a composite or a root. The story is not changed to dodge the word. |
| W10 | **Texts live inside their lesson** (the author, 2026-10-15): a reading module in `src/content/lessons/<id>/`, next to the point modules (D52). The early-words and parse gates check it with the lesson, and the lesson map reads it there. The meaning sketch (step 1) is stored with it, so the text can be rewritten when words move. |
| W11 | **The read-back keeps every needed idea** (the author, 2026-10-15): each needed idea must come back "kept", and nothing may come back "added". "Weaker" or "lost" is allowed only for colour ideas and shows in the loss report the author reviews. A text that fails is reworded (K22). |
| W12 | **Claude writes the English originals** (the author, 2026-10-15): for each lesson, a short English text (an everyday scene) built around that lesson's new words and patterns. The author approves the English before it goes through the steps. |
| W13 | **A pilot text by hand comes first** (the author, 2026-10-15): Claude takes one lesson through all six steps with today's tools (`kb_parse`, `kb_check_form`, `kb_word`) and shows the sketch, the lookups, the text and the loss report. What was slow or guessed by hand decides which new tool is built first. |
| W14 | **The pilot is lesson 11, Space 2 — Moving** (the author, 2026-10-15): mid-book, enough words for a small story about going somewhere and arriving, and still a real word limit, so descriptions and gaps show up. |

## 1. What is already here to build on

| Need | What exists |
|---|---|
| Find a word for an English idea | the English of 230 core words and 1555 composites (`en` fields); no lookup tool yet (KB_PROPOSAL §6 tier 1) |
| Synonyms and "a kind of" in English | planned: WordNet ids (KB_PLAN phase 6); not built |
| Describe a thing that has no word | the composite descriptions (a bird is fēi-de dòng-wù), the description rules in memory, `kb_check_form` |
| Check a sentence | `kb_parse` (139 patterns), check-book (dictionary words only), `kb_check_form` (hanzi spell the words, the compound rule) |
| Limit to what a learner knows | check-early-words (words by lesson), patterns know the lesson that teaches them |
| Hanzi for sound | `src/lib/hanzi-map.js`, `src/lib/composite-examples.js` |
| Smallest ideas | the 65 NSM primes and the 10 categories in `src/data/coverage/`, each with the words that carry it |
| The book's own phrasings (W5, W6) | lesson sentences, the phrase book (`src/content/phrase-book.ts`), the composite forms and examples, the core words' paraphrases |
| Worked examples | the ten stories (`src/content/appendix-stories.ts`) and the phrase book: English and Hao-shuo-de side by side, with "literally: …" notes |
| English → Hao-shuo-de | K15 and phase 6 plan a rule-based translator and `kb_translate` (AI drafts, KB checks); this plan is the detailed version of that |

## 2. The steps

### Step 1. Break the text down (the meaning sketch)

Claude rewrites the original as a list of **simple ideas**, one per line, before looking at any Hao-shuo-de word. Each idea:

- says one thing: who does what, to whom, where, when, how, why;
- uses plain words, close to the NSM primes and Basic English (someone, something, do, happen, want, know, good, bad, big, small, because, if, can, not…); an idea goes all the way down to the primes only when step 2 finds nothing for it (W4);
- turns figures of speech into what they mean ("I'm starving" → "I want to eat very much");
- keeps names as names (they go in quotes later);
- carries links to other ideas: because, but, then, if, so;
- is marked as **needed** (the text is wrong without it) or **colour** (tone, style, extra detail that can go if it costs too much).

The sketch is stored, so one sketch can give several versions (for a beginner, for the whole dictionary).

Example, from the Three Little Pigs:

> The wolf huffed and puffed, but he couldn't blow the brick house down.

| # | Idea | Kind | Link |
|---|---|---|---|
| 1 | the wolf (a big bad animal) blew air out hard | needed | |
| 2 | he did it again | needed (the "and" in huffed and puffed) | then 1 |
| 3 | the house was made of hard things (bricks) | needed | |
| 4 | the house did not move / fall | needed | but 1–2 |

### Step 2. Find the words (the concept list)

Every content word of the sketch (wolf, blow, brick, house, fall) goes through a lookup, cheapest first:

0. **The book's own phrasing** (W5): the way a lesson sentence, a composite example or a story already says it (wolf → dà huài dòng-wù, from the stories), if it is within the text's level.
1. **A core word** whose English matches (jiā = house).
2. **A composite** whose English matches (kōng-qì = air).
3. **A close word**: a synonym, or a broader word the KB already links (phase 5 relations; WordNet later).
4. **"A kind of"**: the nearest broader thing plus what makes it different (…-de X): brick → yìng dōng-xi.
5. **A description** that Claude writes from dictionary words only, following the description rules, checked by `kb_check_form`: wolf → dà huài dòng-wù.
6. **Reword the idea** so the hard word is not needed at all (blow down → the house does not move).
7. **Give up on it** (a colour idea only), and say so in the loss report.

Each concept keeps every candidate with its tier, so the choice can be changed later. A concept that needed tier 5 or worse is logged as a **gap**: gaps across many texts show which composites or roots the language is missing (they feed `kb_candidates` and `kb_add`).

Inside one text a thing is described fully the first time and named short after (dà huài dòng-wù, then huài dòng-wù or tā), like the stories do. The text keeps a **cast list** for this.

### Step 3. Build the sentences

Each idea, or a few linked ideas, becomes one sentence:

- choose a grammar pattern for the idea's shape (does, is, has, compares, because…), preferring the simplest and, for a learner text, only the ones taught by the chosen lesson;
- put the words from step 2 in it;
- join linked ideas with the book's own words (yīn-wèi, dàn-shì, yòu, jiù…).

### Step 4. Check (mechanical, no AI)

- every syllable is a dictionary word, a name in quotes, or a quoted sound (check-book rules);
- the sentence parses (`kb_parse`);
- every word and pattern is taught by the text's lesson or an earlier one (W5, check-early-words rules);
- the hanzi are built from the words;
- a sentence that fails is **reworded**, never excused by loosening the grammar (K22).

### Step 5. Read it back

A sentence can parse and still say the wrong thing: `Wǒ hěn xiǎng chī dōng-xi.` parses, but the parser's first reading takes chī dōng-xi as "food-thing"; the wolf line's first reading splits dàn-shì. So:

- a word-by-word English gloss is made by the program from the word meanings (no AI): "big bad animal make air, again make air, but hard thing-'s house not move";
- Claude, **without seeing the original**, writes what the Hao-shuo-de says;
- that is compared with the sketch, idea by idea: **kept**, **weaker**, **lost**, or **added** (something the original did not say);
- the parse that matches the sketch is named; a sentence whose likely reading is the wrong one is reworded.

The result is a **loss report** per text: which colour ideas came out weaker or were dropped. Every needed idea must come back "kept" and nothing may be "added" (W11); a text that fails is reworded.

### Step 6. Review and store

- The output is in the shape the book already uses: pinyin with word references, hanzi, the English meaning, and a "literally: …" note where the reading differs from the English.
- The author reviews in batches and sees the final text (as for the lessons and the composites).
- Gaps go to the KB queue as proposals.

## 3. Who does what

| Part | Program | Claude |
|---|---|---|
| Break down (step 1) | | yes |
| Lookup tiers 1–4 | yes | |
| Descriptions and rewording (tiers 5–6) | checks them | writes them |
| Building sentences (step 3) | checks | writes |
| Checks (step 4) | yes | |
| Word-by-word gloss (step 5) | yes | |
| Blind read-back and compare (step 5) | | yes |
| Review | | the author |

## 4. New tools this needs

| Tool | Does |
|---|---|
| `kb_lookup` | an English word or phrase → candidates from tiers 1–4, each with its tier and how close it is |
| `kb_check_text` | a whole Hao-shuo-de text → dictionary words, parse, level (lesson N), hanzi; one answer per sentence |
| `kb_gloss` | Hao-shuo-de → a word-by-word English gloss, for every reading the parser finds |
| lesson map (W5) | each text → the lesson it goes with, the words and patterns it uses from each lesson, the book phrasings it reuses; and each lesson → the texts that practise it, so lessons with none show up |
| `npm run write -- <file>` | runs steps 2–5 over a stored sketch and writes the draft and the loss report |
| a page `/__write/` | (maybe) the sketch, the candidates and the draft side by side for review, like `/__review/` |

## 5. Ideas

1. **Test on the stories first.** The ten stories already have the English and the Hao-shuo-de. Run the steps on the English and compare with the lines the book has: a cheap way to tune the steps before writing anything new.
2. **Graded readers.** The same sketch, written once for "up to lesson 6" and once for the whole dictionary: the book gets reading texts per section for free.
3. **The texts measure the language.** Gaps and losses, counted over many texts, are the "everyday sentences" yardstick of K12, but from real text. A word that keeps being described long is a candidate composite or root.
4. **A fixed sketch format.** If the sketch uses only the primes and a short list of plain English words, step 1 can be checked too (does the sketch use only allowed words?), and sketches could even be written by hand.
5. **Learn from each review.** Every choice the author makes (this description, not that one) is stored, so the lookup prefers it next time: the text library grows a phrase table.
6. **Round trip as a test.** Hao-shuo-de → English → Hao-shuo-de should come back the same; when it does not, one of the two steps is unclear.
7. **Several drafts, one pick.** Claude writes two or three versions of a hard sentence (short, faithful, natural) and the checks plus the read-back pick the best, or show them all to the author.

## 6. Order of work

- [ ] **Pilot, lesson 11** (W13, W14). Claude writes the English scene around the lesson's new words and patterns (W12); **author:** approves the English. Then Claude takes it through the six steps by hand and shows: the sketch, the lookups (with the tier each word came from), the text, the read-back and the loss report. Notes what was slow or guessed.
- [ ] **The first tool**, picked from the pilot's notes: `kb_lookup` (with tier 0, the book's phrasings), `kb_check_text` (with the lesson level), or `kb_gloss`.
- [ ] **The reading module shape** (W10): the text in the book's format and the stored sketch next to it; the gates read it with the lesson.
- [ ] **The stories test** (idea 1): the ten stories' English through the steps, compared with the book's lines, to tune the lookup and the read-back.
- [ ] **The lesson map** (W5, W8): texts ↔ lessons, lessons with no text, new words and patterns a text leaves out.
- [ ] **Composite paraphrases** (W6, W7): the ~740 one-word composites, spelled forms first, in batches of 100. Can run beside the texts; the lookup gets better as each batch lands.
- [ ] **The other 23 lesson texts**, a few per review batch, in book order.
- [ ] **Gaps** (W9): the descriptions logged across texts go to `kb_candidates` / `kb_add` as proposals.

Later, on the same steps: your own writing, measuring the language with everyday texts, and the learner page (W1).

## 7. Risks

- **Parses but reads wrong.** Many sentences parse several ways (step 5 exists for this).
- **Descriptions pile up.** A text full of long descriptions is hard to read; the cast list and the gaps report keep it in check.
- **Cost.** Each sentence can take several Claude calls; the lookup and the checks run without AI, and sketches are stored so nothing is redone.
- **Drift.** Words move often (D60, K20); stored texts must be in the gates (check-book, parse) so a refactor finds them.
