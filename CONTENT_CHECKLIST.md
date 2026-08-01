# Hao-shuo-de Content Checklist

A living checklist of what this book needs to say, and where it currently stands. Modeled on the structure of the official Toki Pona book (_pu_): purpose/motivation essays → phonology → grammar built up lesson by lesson → theory of why the minimal vocabulary works → reference material (dictionary, phrasebook) → connected texts (stories/proverbs).

Check items off (`[x]`) as they land. Re-run the dictionary/lesson cross-reference (see the audit notes) whenever `src/data/dictionary.json` or a lesson's vocabulary changes — several findings below will go stale otherwise.

---

## 1. Purpose — Why and How

### 1.1 Why (motivation)

- [x] Why Chinese specifically is hard for learners, and which part of that difficulty this book removes — `intro-1.md`
- [x] Precedent: minimal constructed languages work (Toki Pona) — `intro-2.md`
- [ ] Why _Mandarin_ rather than another source language (why not build the same idea on Spanish, Arabic, etc.) — not currently stated anywhere
- [ ] What the reader will be able to do at the end (a concrete "can-do" outcome statement — e.g. "read/produce N-word sentences about X, Y, Z"), stated up front rather than implied
- [ ] Who this book is _not_ for (e.g. not a substitute for a real-Mandarin fluency course, not HSK-aligned) — an honest scope disclaimer

### 1.2 How (mechanics of the method)

- [x] Typographic conventions: solid compounds vs. hyphenated bound grammar vs. quoted untranslatables — `intro-3.md`
- [x] No prior Chinese knowledge assumed; lessons build sequentially — `intro-3.md`
- [ ] How to use the audio (`<audio-example>`) and progress-tracking features of the app itself — currently undocumented for the reader (only in developer README)
- [ ] A explicit "how to study" suggestion (e.g. recommended pace, how to use the exercises, when to revisit the dictionary)
- [ ] Cross-reference map: where a reader goes if confused (pinyin → appendix-pinyin; grammar term → which lesson; word → dictionary)

---

## 2. Pinyin

- [x] Full initials inventory incl. the three confusable sets (j/q/x, zh/ch/sh/r, z/c/s) — `appendix-pinyin.md`
- [x] Full finals inventory — `appendix-pinyin.md`
- [x] Spelling quirks (yi/wu/yu stand-ins; silent ü after j/q/x/y) — `appendix-pinyin.md`
- [x] Note on real-speech tone sandhi (3rd-tone sandhi, bù/yī changes) — `appendix-pinyin.md`
- [x] The four tones + neutral tone, taught with mnemonics — `lesson-01.yaml`
- [ ] A minimal-pairs drill section (mā/má/mǎ/mà-style sets) beyond the single worked example, so tone distinction is _practiced_, not just described
- [ ] Syllable-structure explainer (initial + final + tone as the atomic unit) stated as a rule, not just demonstrated
- [ ] `appendix-pinyin.md` has no Russian/Chinese translation — **translate** (only English exists)
- [ ] Cross-link from `lesson-01` info-blocks back to the specific appendix-pinyin subsection each rule elaborates (currently only one link to the appendix as a whole)

---

## 3. Dictionary

### 3.1 Structural completeness

- [x] Generated alphabetical listing — `dictionary.md` (128 words, eng/rus/zh parallel)
- [x] Generated categorical listing, 15 top-level categories with subcategories — `dictionary-categorical.md`
- [x] Toki Pona gloss column on every entry
- [x] Stable `id` per word for `{{word:ID}}` referencing (build fails loudly on an unknown id)

### 3.2 Known vocabulary/dictionary mismatches — **must resolve**

Confirmed by cross-checking every lesson's vocab against `src/data/dictionary.json` (128 words, checked programmatically). These pinyin syllables are used as if they were dictionary words in lessons, but have **no entry** in `dictionary.json`:

- [ ] `kěyǐ` ("can/may," lesson-14) — not in dictionary. Either add it, or replace with an existing modality word (dictionary already has `néng`)
- [ ] `dǒng` ("understand," lesson-17) — not in dictionary. Nearest existing word is `zhīdào` ("know") — decide whether "understand" is a distinct primitive or should be expressed via `zhīdào`
- [ ] `dào` ("to, toward," lesson-16) — not in dictionary; only `lái`/`qù` exist under Motion. Lesson-16's "zài-qù-dào" construction depends on a word the dictionary doesn't define
- [ ] `wǎn` ("bowl," lesson-19) — not in dictionary
- [ ] `líkāi` ("to leave/depart," lesson-18) — not in dictionary
- [ ] `shēngyīn` ("sound/voice," lesson-11) — not in dictionary (lesson also independently covers animal sounds via `jiào`, so check whether this word is even needed)
- [ ] Numbers 3–9, 10, 100, 1000 (`èr`\*, `sān`...`jiǔ`, `shí`, `bǎi`, `qiān`) used throughout lesson-13 — dictionary's Quantifiers category only defines `yī` and `liǎng`. Decide the actual design: are all numbers meant to be dictionary primitives, or should 3+ be built compositionally from a smaller base (Toki-Pona-style)? Whichever answer, the dictionary and lesson-13 currently disagree.
  - \* `èr` (math/serial "two") vs. `liǎng` (counting "two") is explicitly taught in lesson-13 as a real distinction — `èr` should very likely be a dictionary entry regardless of how the rest of the numbers are resolved.

### 3.3 Coverage/design questions worth deciding explicitly

- [ ] Is 128 words the intended final size, or a target ceiling still being approached? (`appendix-minimality.yaml` argues for sufficiency in principle but doesn't commit to an exact final count)
- [ ] Category 9 (Life and Death) and Category 10 (Time) each have exactly **one** word (`sǐ`, `shíjiān`). Confirm this is intentional minimalism and not an oversight — e.g. no word for "to live/be alive" (only "to die"), no words for relative time (before/after/now/soon)
- [ ] No dedicated "sound/hear" vocabulary beyond `tīng` (hear) and `jiào` (to call/cry out) — confirm this is sufficient for lesson-11's animal-sounds content once `shēngyīn` is resolved (§3.2)
- [ ] Create Source-language 2 hao-shuo-de dictionary with at least 5000 entries

---

## 4. Theory — Why This Is Possible

- [x] Aristotle's categories close the logical space of predicates — `appendix-minimality.yaml`
- [x] NSM (Wierzbicka/Goddard) ~65 semantic primes as cross-linguistic evidence — `appendix-minimality.yaml`
- [x] Primitive vs. composite word distinction, with worked examples — `appendix-minimality.yaml`
- [x] Explains why real-Mandarin grammar (vs. Toki Pona's invented grammar) constrains word choice — `appendix-minimality.yaml`
- [x] Three falsifiable claims + falsification conditions (completeness, tier accuracy, Putonghua-fit) — `appendix-minimality.yaml`
- [ ] A worked "stress test": take a genuinely hard concept (e.g. an abstract noun, a legal/technical term) live, on the page, through the decomposition process end-to-end, so the reader sees the method work in real time rather than being told it works
- [ ] Address the numbers gap from §3.2 head-on: is arbitrary precision expressible at all under the minimality theory, or is it explicitly out of scope?
- [ ] A short "limits of this method" section — what this book's approach _cannot_ express cleanly (poetry, technical registers, etc.), for intellectual honesty
- [ ] No Russian/Chinese check needed — already fully parallel (yaml block schema)

---

## 5. Lessons — Systematic Grammar/Vocabulary Coverage

Audited against the dictionary's 15 categories and the core grammar machinery actually used across lesson content.

### 5.1 Category coverage (does every dictionary category get taught somewhere?)

- [x] Substantives — Pronouns & Interrogatives (lesson-05, lesson-08)
- [x] Substantives — Places/Plants/Body/People/Food/Animals/Tools (lessons 2, 4, 7, 12, 18, 19 collectively)
- [x] Determiners — Demonstratives (lesson-02: zhè/nà + gè)
- [x] Determiners — Sameness & Difference (lesson-17: bùtóng, yīyàng)
- [x] Quantifiers — Classifier `gè` (lesson-02)
- [ ] Quantifiers — Numbers & Ordinals: **inconsistent** — see §3.2, lesson-13 uses undictionaried numbers
- [x] Quantifiers — Amount (lesson-07/13: duō, quánbù)
- [x] Evaluators — Good/Bad (lesson-04: hǎo; lesson-07: huài)
- [x] Descriptors — Colour (lesson-15), Size (lesson-04), Temperature (lesson-17: lěng; `rè`/`tián` not confirmed taught anywhere — **check**), Physical Property (`yìng`/`yuán` — **not confirmed taught anywhere, check**), Other Quality (lesson-11: qíguài? xīn — **verify**)
- [x] Mental Predicates — Volition/Cognition/Perception (lessons 6, 14: yào, juéde, zhīdào, tīng, kàn — **verify `ài` and `kàn` each get an explicit lesson, not just dictionary/story appearances**)
- [x] Speech (lesson-06: shuō; xiě taught in lesson-02)
- [x] Actions/Motion/Contact (lessons 6, 9, 14, 16: chī, zuò, lái, qù, biàn, gěi; **dǎ, mō, zhǎo, wánchéng not confirmed to get explicit lesson coverage — check**)
- [x] Location/Existence/Possession (lesson-03: shì; lesson-05: possessive -de/yǒu — **confirm `zài` as "exist/be located" vs. `zài` as coverb "at" are both taught, they're easy to conflate**)
- [ ] Life and Death (`sǐ`) — **no lesson found covering this word at all**
- [ ] Time (`shíjiān`) — taught only as a vocabulary item in lesson-12; **no lesson on expressing when something happens** (no tense markers exist by design, but relative/absolute time expression — "today," "yesterday," "at 3 o'clock" — has no home)
- [x] Space (lesson-16: relative position + `cóng`/`duì`/`dìfāng`/`dìbǎn`)
- [x] Logical Concepts & Particles (lesson-06: le; lesson-08: ma; lesson-09: bǎ via causative in lesson-07; lesson-17: hé/yě/dànshì; lesson-08: wèishénme/zěnme; lesson-14: néng)
  - [ ] `méi` (negation, paired with `bù`) — **confirm it gets explicit contrastive treatment** (bù vs. méi is a classic Mandarin trap; lesson-06 mentions `le` but the survey didn't confirm a méi-vs-bù explainer)
- [x] Intensifier `hěn` (lesson-04, lesson-07)
- [x] Similarity `fāngfǎ` (lesson-10, as "method/way")

### 5.2 Core grammar machinery — checklist independent of individual words

- [x] Reading unit = syllable, not letter (lesson-01)
- [x] Tone as meaning-bearing (lesson-01)
- [x] Punctuation-as-grammar: solid compounds / hyphen-bound grammar / quoted untranslatables (lesson-01)
- [x] Word-combination as the primary word-formation strategy (intro-2, lesson-02)
- [x] Number-neutral nouns, no plural marking (lesson-02, lesson-03)
- [x] Fixed SVO word order, no case marking (lesson-03)
- [x] Copula `shì` for noun predicates (lesson-03)
- [x] Adjective-copula `hěn` (required, non-literal "very") (lesson-04)
- [x] `-de` for possession and for binding modifiers to nouns (lesson-04, lesson-05)
- [x] Pronouns as ordinary (number-neutral) nouns (lesson-05)
- [x] Verb tenselessness + perfective `le` (lesson-06)
- [x] Category-shifting by context (chī = eat/food) (lesson-06)
- [x] Compositional adjectives (yǒu lìliàng = strong) (lesson-07)
- [x] Adjectives as adverbs (hěn duō) (lesson-07)
- [x] Causative `bǎ...biàn [Adj]` (lesson-07)
- [x] Wh-questions in-situ (lesson-08)
- [x] Yes/no questions via `ma` (lesson-08)
- [x] A-bù-A / A-méi-A reduplication questions (lesson-08)
- [x] Coverb structure (Subject + Coverb Phrase + Verb) (lesson-09)
- [x] Coverb-as-main-predicate (lesson-09)
- [x] Proper names in quotes as pre-nominal adjectives (lesson-10)
- [x] Greetings, imperatives, animal sounds, reduplicated blessings (lesson-11)
- [x] Modifier stacking via chained `-de` (lesson-12)
- [x] Full number system + `liǎng` vs `èr` + ordinal `dì-` (lesson-13, pending §3.2/§5.1 dictionary reconciliation)
- [x] Auxiliary/pre-verbs (yào/kěyǐ/zhīdào/kāishǐ) (lesson-14, pending `kěyǐ` dictionary status)
- [x] Inchoative `kāishǐ` + state-change `biàn` (lesson-14)
- [x] Topic/condition-fronting as the `la`-equivalent (lesson-15)
- [x] Locative nouns + zài (static) vs. dào (motion) (lesson-16, pending `dào` dictionary status)
- [x] Perspective marker (duì...lái shuō), conjunctions hé/yě/dànshì (lesson-17)
- [ ] **Negation of nouns/existence** (`méi yǒu` — "there isn't") — not confirmed to have explicit lesson coverage; commonly a separate rule from verbal `bù` negation
- [ ] **Comparison / comparatives** ("bigger than," "the biggest") — no lesson found covering comparison at all; this is a structurally important gap since Mandarin comparison (`bǐ`) needs a coverb the dictionary doesn't currently have
- [ ] **Expressing time/frequency** (today, now, always, sometimes) — no lesson; ties to the Time-category gap in §5.1
- [ ] **Plurals/definiteness workarounds beyond `gè`** — e.g. how to actually say "some things" vs "the thing" vs "things in general" is implied across lessons but never consolidated into one explicit rule
- [ ] **A cumulative review/reference lesson** — nothing currently pulls all ~19 grammar rules into one quick-reference "grammar in one page," the way appendix-pinyin does for phonology

### 5.3 Structural/production gaps across lessons 1–20

- [ ] Lessons 6–20 (18 of 20 lessons) have **no Russian or Chinese translation** — English only
- [ ] Lessons 6–20 dropped tone diacritics (plain "wo" instead of "wǒ") and `<audio-example>` tags entirely — inconsistent with lessons 1–5's polish level
- [ ] `lesson-02.yaml` has no exercise/answers block (every neighboring lesson has one)
- [ ] `lesson-17.md` has no exercise/answers block
- [ ] Two incompatible content schemas coexist: lesson-01/02 + appendix-minimality use the new YAML block-schema (with `tldr`/`necessity`, `info` blocks); lesson-03–20 use the old frontmatter + fenced-code-block markdown. **Migrate lessons 3–20 to the YAML schema** (also unlocks `info`/`warning` blocks for those lessons' worked examples, which currently render as plain prose)
- [ ] lesson-09 answer #2 and lesson-13/15 answer keys contain typos/ungrammatical filler ("ta gei lai-ta-de-difang-de dongxi", "di-sang-ge") — proofread all lesson-06–20 answer keys
- [ ] lesson-11 inconsistently mixes toned and untoned pinyin within a single file — internal consistency pass needed
- [ ] lessons 18–20 switch format again (vocab+story only, no exercise/answers) — decide if this is the intended "Part 2" format per lesson-20's own framing, and if so, document that format shift explicitly rather than leaving it implicit

---

## 6. Phrase Book

**Status: does not exist yet.** No `phrasebook*` file was found anywhere in `src/content/`. This is a whole missing section, per the Toki Pona book's own "useful phrases" chapter as precedent.

- [ ] Decide scope: a phrasebook here can only use the ~128-word (currently 128, pending §3.2 fixes) dictionary — every phrase must be checked against actual vocabulary, not invented on the spot
- [ ] Greetings & social opener/closers (hello, goodbye, thank you, sorry, please)
- [ ] Basic needs (I want X, I need X, where is X, how much/many)
- [ ] Asking for help / expressing trouble (I don't understand, please repeat, I am lost) — blocked on the `dǒng` ("understand") dictionary gap from §3.2
- [ ] Numbers in practical use (time, money, quantities) — blocked on the numbers gap from §3.2/§5.2
- [ ] Small talk (weather, feelings, family) — reuses vocab from lessons 4, 5, 11, 17
- [ ] Emergency/safety phrases — check whether current vocabulary can even express these (e.g. "help," "danger," "sick" have no obvious dictionary word yet)
- [ ] Decide format: standalone content file(s) vs. an appendix vs. woven into late lessons as "capstone" material
- [ ] eng/rus/zh from day one (don't repeat the lessons-6–20 translation debt)

---

## 7. Stories

- [x] First narrative arc: "Uncle Mawijo" hunting trip — `lesson-18.md`
- [x] Continuation: Sili cooks, Mawijo returns — `lesson-19.md`
- [x] Closing/epilogue narrative addressing the reader directly — `lesson-20.md`
- [x] Proverbs/aphorisms as short-form connected text — `proverbs.md` (18 entries)
- [ ] Stories 18–20 have no Russian/Chinese translation and no `<audio-example>` tags — same debt as §5.3
- [ ] Only one narrative arc exists (3 installments). Consider at least one more independent story so "story" isn't synonymous with "the Mawijo/Sili arc" — variety matters for a phrasebook-adjacent reading-practice goal
- [ ] No comprehension exercises attached to any story (lessons 18–20 have vocab+story but no exercise/answers, per §5.3) — add "what happened," "true/false," or translation-back exercises per story
- [ ] `proverbs.md` has no Russian/Chinese translation
- [ ] Consider a short dialogue-form story (two speakers) at some point — all current stories are third-person narration; dialogue would exercise questions/answers (lesson-08) and greetings (lesson-11) in context
- [ ] Cross-check every word used in the stories against the dictionary the same way §3.2 did for lessons — the story survey flagged `líkāi` and `wǎn` as undictionaried; a full pass hasn't been done on lessons 18–20's remaining vocabulary beyond what was already sampled

---

## 8. Per-Chapter Detailed Checklists

Every file currently in `src/content/`. These are **content/pedagogy checklists** — the specific points that must land for the chapter's idea to come across clearly — not production/formatting checklists (translation, diacritics, schema migration, etc. are already tracked in §5.3 and the cross-cutting list in §9, so they aren't repeated item-by-item here except where they block a specific teaching point). `[x]` = the audit confirms this point is covered; `[ ]` = not confirmed present, or confirmed missing.

### intro-1.md — "Why is Chinese so hard?"

- [x] Names the specific difficulty precisely: character memorization is not itself the bottleneck
- [x] Identifies the four simultaneously-new systems a beginner faces (script, tone, grammar, vocabulary)
- [ ] Explains _why_ learning all four at once causes overload (an explicit cognitive-load framing, not just an assertion)
- [x] Names "separation of concerns" as the organizing principle, borrowed explicitly from engineering
- [x] States precisely which one variable this book shrinks (vocabulary) and which three stay real (pinyin-as-script, tone, real Mandarin grammar)
- [ ] Gives at least one concrete, relatable example of the four-concerns overload — not just the abstract claim
- [ ] Distinguishes "hard to learn" from "hard to use once learned," setting expectations for what this book does and doesn't fix
- [ ] Previews that the complexity removed here is _replaced by real material_ later, not fantasy-invented — sets up intro-2/appendix-minimality
- [ ] Avoids overclaiming: doesn't promise fluency, only a lower-friction on-ramp
- [x] Uses at least one audio-example/word to ground the abstract argument in something audible
- [ ] Ends with a clear hook into intro-2's Toki Pona precedent
- [ ] States the target reader's starting point explicitly (zero Chinese background assumed)

### intro-2.md — "How small can a language be?"

- [x] Names Toki Pona explicitly with creator and approximate word count for credibility
- [x] Explains Toki Pona's core technique: combining a few words to express complex ideas
- [x] Gives the car → "moving box" worked example in full
- [x] States what's borrowed from Toki Pona (vocabulary-size discipline) vs. what isn't (its invented grammar)
- [x] States the current dictionary size via the live `{{dictionaryCount}}` value
- [ ] Explains _why_ keeping grammar 100% real Mandarin (rather than simplified/invented) matters for transfer to real Chinese
- [x] Gives at least one full example sentence built from combined/simple words
- [ ] Distinguishes "small vocabulary" from "simple language" explicitly — small ≠ simplistic
- [ ] Notes the tradeoff minimality introduces (longer descriptive phrases stand in for missing dedicated words) so the reader isn't surprised later
- [ ] Anchors the claim beyond Toki Pona alone (NSM/semantic primes), or explicitly defers that to appendix-minimality
- [ ] Previews that the theoretical "why is this even possible" grounding comes later
- [ ] Ends with a forward-pointer into intro-3's orthographic conventions

### intro-3.md — "How this book works"

- [x] States the solid-compound convention with a real example (dòngwù)
- [x] States the hyphen convention with a real example (zhè-ge) and what it signals
- [ ] Mentions the quoted-untranslatable convention at least in passing, before lesson-01 elaborates it, so it isn't a cold surprise
- [x] Confirms explicitly: no prior Mandarin/Chinese knowledge required
- [x] States lessons build strictly sequentially — no chapter skippable without loss
- [ ] Tells the reader what to do when they hit an unfamiliar word (dictionary/appendix cross-reference habit)
- [ ] Describes the audio/pronunciation feature and how to use it
- [ ] Describes what an exercise/answer block is for and how to use it (attempt before peeking)
- [ ] Sets pacing expectations (roughly how many lessons, how long each takes)
- [ ] States that tone marks (diacritics, not numbers) are the convention used throughout, before lesson-01 relies on that assumption
- [ ] Signals this is the last "meta" chapter before real content starts
- [ ] Gives a one-line combined index of all three conventions (compound / hyphen / quote) so they're memorable as a set

### lesson-01.yaml — "Sounds and Symbols"

- [x] States plainly that pinyin is read syllable-by-syllable, not letter-by-letter
- [x] Gives the Zhōngguó syllable-break worked example
- [x] Introduces each of the four tones with a tone-mark shape and an intuitive analogy
- [x] Introduces the neutral tone and explicitly contrasts it with the four full tones
- [x] Demonstrates tone-as-meaning with a true minimal-pair set (mā/má/mǎ/mà)
- [x] States this book uses dictionary/citation tone, and that real-speech sandhi is deliberately deferred
- [x] Points explicitly to the pinyin appendix rather than trying to cover all phonemes here
- [x] Covers the "letters that lie" pronunciation traps (q, x, yun) with real guidance, not just spelling
- [x] States and exemplifies the solid-compound rule
- [x] States and exemplifies the hyphen rule across all three sub-patterns (particle, measure word, adjective transform)
- [x] States and exemplifies the quoted-untranslatable rule with both a proper-noun and an onomatopoeia example
- [ ] Explicitly ties the punctuation rules to _why it matters going forward_ ("this is how you'll spot word boundaries in every solid block of Hao-shuo-de text from here on") rather than leaving the payoff implicit

### lesson-02.yaml — "Words"

- [x] States explicitly that compound words are memorized as wholes, not decoded live
- [x] Gives at least two worked compound examples with parts named (dōngxi, nǚrén)
- [x] States explicitly there are no invented neologisms in the system
- [x] Explains the alternative when a new meaning is needed (hyphenated grammar route)
- [x] States number-neutrality of nouns as an explicit rule
- [x] Introduces `gè` as the default/general measure word
- [x] Introduces the zhè/nà + gè demonstrative pattern in a full example sentence
- [ ] Explains _why_ measure words exist at all (nouns aren't directly countable in Mandarin) — the "why," not just the "what"
- [x] Introduces `-de` turning a verb into a noun with a worked example (xiě-de dōngxi)
- [x] Distinguishes bound (hyphenated) vs. free-standing particles with one example of each
- [ ] Shows the lesson-01 punctuation conventions working together in one live sentence, so the reader sees the system as a whole for the first time
- [x] Introduces enough vocabulary via the vocab block to support the exercises

### lesson-03.md — "Sentences"

- [x] States the fixed Subject-Verb-Object order as an explicit rule
- [ ] States there is no grammatical case marking, contrasted explicitly with a case system the reader may know (e.g. Russian noun cases)
- [x] Introduces copula `shì` with the Subject+shì+Noun pattern and a full example
- [ ] Explains when `shì` is required vs. omitted (not used before adjectives) — sets up lesson-04's `hěn` instead of leaving it a surprise
- [x] Revisits number-neutral nouns in the context of full sentences (generic vs. specific reference)
- [x] Shows how quantity interacts with the noun phrase (duō dropping `-ge`)
- [ ] Gives at least one negative-sentence example so negation isn't entirely deferred
- [ ] Notes explicitly that questions come later (lesson-08), so the reader isn't left wondering how to ask one
- [x] Uses only vocabulary already introduced, or introduces new words via a vocab block
- [ ] Distinguishes topic from subject at least briefly, since Mandarin topicalizes often (even though the full rule waits for lesson-15)
- [x] Gives enough example sentences (5-6) to show SVO holds across different verb/object types
- [x] Exercises specifically test sentence construction, not just vocabulary recall

### lesson-04.md — "Nouns and Adjectives"

- [ ] States explicitly that adjectives function as stative verbs, not a separate class needing "to be"
- [x] Introduces `hěn` as grammatically required even when "very" isn't the intended meaning
- [ ] Explains _why_ `hěn` is needed (bare adjectives read as implicit comparisons in Mandarin)
- [ ] Contrasts `hěn`-predication with the `shì`-copula from lesson-03 so the two aren't conflated
- [x] Introduces `-de` binding an adjective onto a following noun, worked example (hěn-xiǎo-de dìfāng)
- [ ] Shows predicative (Subject hěn Adjective) and attributive (Adjective-de Noun) side-by-side for direct contrast
- [x] Gives example sentences across at least 3 distinct adjectives/semantic categories (size, evaluation, quality)
- [x] Cross-references the Descriptors/Evaluators dictionary categories via the actual words used
- [x] Reinforces the hyphen convention specifically for adjective+`-de`+noun
- [ ] Notes adjective negation (bù + adjective) at least briefly, so it isn't a silent gap
- [ ] Exercises require producing both predicative and attributive adjective sentences, not just one pattern

### lesson-05.md — "You and I"

- [x] States pronouns behave exactly like ordinary nouns grammatically
- [x] Confirms pronouns are number-neutral like other nouns
- [x] Introduces possession via `-de` with worked examples for both wǒ-de and nǐ-de
- [ ] Explicitly reconciles possession-`-de` with the adjective-binding-`-de` from lesson-04 — same particle, different-looking use, spelled out as one rule
- [x] Gives an example combining possession with a noun from an earlier lesson
- [ ] Introduces a third-person reference (tā) or explicitly states it's deferred and where it will appear
- [ ] Sets expectations about gender-neutral third person (if/when introduced) before a reader is confused by it in a story
- [x] Shows a full sentence combining subject pronoun + verb + possessed object
- [x] Reinforces number-neutral noun handling in a pronoun context
- [x] Uses vocabulary from at least two earlier lessons, demonstrating cumulative build-up
- [ ] Notes explicitly whether any formal/informal "you" distinction exists (or its deliberate absence), since Russian speakers expect one
- [ ] Exercises test both pronoun use and possessive construction, not just one

### lesson-06.md — "Dongzuo (Verbs)"

- [x] States explicitly that verbs carry no tense marking
- [ ] Explains how time is understood without tense (context/time words) — flags the dependency on a time-expression lesson that doesn't yet exist (§5.2)
- [x] Introduces perfective `le` with a clear before/after example pair
- [ ] Clarifies `le` marks completion/change-of-state, not simple past — an explicit common-mistake warning
- [x] Demonstrates category-shifting by context (chī as verb vs. noun) with two contrasting examples
- [ ] Gives a general rule for how word position signals which category a word is functioning as, not just the one example
- [x] Introduces 4-6 new action verbs via the vocab block
- [x] Gives example sentences combining new verbs with previously taught nouns/pronouns
- [ ] Distinguishes stative "adjective-verbs" (lesson-04's `hěn` pattern) from true action verbs here, so the categories don't merge in the reader's mind
- [ ] States clearly where verb negation (bù vs. méi) is handled — currently unaddressed here or anywhere else (§5.2 gap)
- [ ] Restores tone diacritics and audio to this lesson's actual content
- [ ] Exercises and answer key proofread for grammaticality

### lesson-07.md — "More Adjectives & State Changes"

- [x] Introduces compositional adjectives (yǒu lìliàng = "have power" → "strong")
- [ ] Gives a second compositional-adjective example beyond yǒu lìliàng to show the pattern generalizes
- [x] Introduces adjectives functioning as adverbs (hěn duō)
- [ ] Explains why no separate adverb-marking suffix is needed for this to work
- [x] Introduces the causative `bǎ...biàn [Adjective]` construction with a before/after meaning explanation
- [ ] Explains what `bǎ` itself does grammatically (object-fronting) since it has no one-word gloss
- [ ] Distinguishes the causative construction from lesson-04's plain stative `hěn`-Adjective sentences with a direct contrast
- [x] Gives at least two full causative example sentences with different adjectives
- [x] Names the construction explicitly ("The Causative Rule") for later reference
- [ ] States what word class the adjective becomes once transformed by `bǎ...biàn` (a full transitive verb)
- [ ] Restores diacritics/audio
- [ ] Exercises require producing the causative construction from a plain-adjective prompt, not just recognizing it

### lesson-08.md — "Questions and Answers"

- [x] Introduces wh-questions with shénme staying in-situ, contrasted explicitly with English fronting
- [x] Gives at least two different wh-word examples (what, why or how) in full sentences
- [x] Introduces yes/no questions via sentence-final `ma`
- [ ] States explicitly that `ma` cannot combine with an already-question-word sentence (prevents a common learner error)
- [x] Introduces A-bù-A / A-méi-A reduplication as an alternative yes/no form
- [ ] Explains when to use bù- vs. méi- in the reduplication form, tying to the still-unaddressed bù/méi distinction (§5.2)
- [ ] Explains how yes/no answers work at all in Mandarin (repeat or negate the verb — there's no direct "yes"/"no" word)
- [ ] Gives a full question+answer pair for _each_ question type introduced, not just the wh-type
- [x] Introduces wèishénme and zěnme as distinct interrogatives with separate examples
- [ ] Restores diacritics/audio
- [ ] Cross-references how these forms will resurface functionally (e.g. every lesson's own exercises are framed as questions)
- [x] Exercises require producing all three question types

### lesson-09.md — "Prepositions & Coverbs"

- [ ] Explains the coverb concept generally (words that look like prepositions but behave like verbs syntactically), not just via examples
- [x] States the coverb sentence template explicitly: Subject + Coverb Phrase + Verb + Object
- [x] Introduces gěi with a full example
- [ ] Explicitly distinguishes this lesson's `zài` (coverb) from `zài` as an existential/location verb (lesson-03/16 overlap), to prevent the two uses merging
- [x] Introduces yòng with a full example
- [x] Introduces yīnwèi, noting its more conjunction-like behavior vs. the other three coverbs
- [x] Explains coverb-as-main-predicate with a dedicated example (no other verb present)
- [ ] Gives an example stacking two coverb phrases in one sentence
- [ ] Explicitly reconciles this lesson's `zài` with the Location/Existence dictionary category
- [ ] Restores diacritics/audio; proofreads the malformed answer #2
- [ ] Distinguishes coverbs here from the causative `bǎ` of lesson-07 — both precede the verb but do different jobs
- [x] Exercises require producing sentences with at least two different coverbs

### lesson-10.md — "Proper Names & Geography"

- [x] States that quoted proper nouns are NOT dictionary words and won't appear there, reinforcing lesson-01's quote rule
- [x] Gives the "Zhongguo" rén worked example, explaining the pre-nominal-adjective role
- [ ] Gives a second proper-noun example (a person's name or another place) to generalize the pattern beyond one instance
- [x] Introduces vocabulary for asking/talking about names and places (fāngfǎ)
- [ ] Explains how to ask someone's or something's name using the question machinery from lesson-08
- [ ] Addresses pronunciation/tone-marking for foreign/proper names, since they aren't native tone-marked pinyin
- [ ] Distinguishes borrowed/foreign proper names from native Chinese place names, if both are meant to be expressible
- [ ] Gives a full example locating something via a quoted place name plus spatial vocabulary (forward-reference to lesson-16 if needed)
- [ ] Restores diacritics/audio
- [ ] Reinforces the difference between a quoted proper name and a hyphenated common-noun phrase, since both use special punctuation
- [ ] States any capitalization convention for quoted names, applied consistently
- [x] Exercises require both producing and parsing sentences with quoted proper names

### lesson-11.md — "Greetings and Feelings"

- [x] Introduces a standard greeting exchange (Nǐ hǎo ma? + a typical reply) as a complete mini-dialogue
- [x] Explains bare-verb imperatives (dropped subject) as the way commands/requests are formed
- [x] Gives at least two imperative examples
- [x] Introduces animal-sound vocabulary via jiào + quoted onomatopoeia, reinforcing the quote convention
- [ ] Gives a second animal-sound example to generalize the pattern beyond one instance
- [x] Introduces reduplicated-adjective blessings (hǎo-hǎo-de rì)
- [ ] Explains reduplication-for-intensity/warmth as a general pattern, not just one fixed idiom, with a second example
- [ ] Resolves the `shēngyīn` dictionary gap (§3.2) before this lesson is considered finished
- [ ] Fixes the internal tone-mark inconsistency within the file
- [x] Introduces emotion vocabulary (juéde) with a full example
- [ ] Restores full diacritics/audio consistently throughout
- [ ] Exercises cover greetings, imperatives, and the animal-sound/reduplication patterns as separate skills, not one blended task

### lesson-12.md — "Modification Stacking"

- [x] States explicitly that multiple `-de`-bound modifiers can chain before one head noun
- [x] Gives a worked example with at least two stacked modifiers
- [ ] Explains _why_ no separate particle (like Toki Pona's `pi`) is needed here — ties back to how `-de` already scopes correctly
- [ ] Clarifies whether modifier order matters semantically, with a contrastive example if so
- [ ] Distinguishes this stacking from the single-modifier pattern in lesson-04, framed as a natural extension rather than a new rule
- [ ] Gives an example where removing one modifier changes the meaning, showing the stacking is meaningful, not decorative
- [x] Introduces/reinforces enough vocabulary (zhíwù, shēntǐ, shíjiān, děng) to build genuinely complex phrases
- [ ] Notes ambiguity risk with long modifier chains and how context resolves it
- [ ] Restores diacritics/audio
- [ ] Gives a deliberately complex "hardest sentence yet" example, showing the ceiling of what's expressible so far
- [ ] Exercises require producing a phrase with at least two stacked modifiers, not one
- [ ] Cross-references where this construction resurfaces later (stories, later lessons)

### lesson-13.md — "Shùzì (Numbers and Order)"

- [ ] Resolves the numbers-vs-dictionary design question (§3.2) before teaching numbers 3+ as if the system were settled
- [x] Introduces yī and liǎng each with its own example sentence
- [x] States the liǎng-vs-èr rule explicitly (counting objects vs. math/serial) with contrastive examples
- [x] Introduces the ordinal prefix dì- with a full example (dì-yī = "first")
- [ ] Explains explicitly how numbers combine with measure words (Number + gè + Noun), tying back to lesson-02
- [x] Introduces the "precise up to 2, duō beyond" cap, framed as a deliberate minimality design choice, not an omission
- [x] Gives worked examples across at least three distinct quantities (small precise number, "many," an ordinal)
- [ ] Explains hào's specific usage (numbering/dates) rather than just listing it
- [ ] Fixes the "di-sang-ge" typo and proofreads the rest of the answer key
- [ ] Restores diacritics/audio
- [ ] Tells the reader what interim workaround to use for numbers currently outside the resolved vocabulary
- [x] Exercises test both cardinal and ordinal number production

### lesson-14.md — "Pre-Verbs & Auxiliaries"

- [ ] Resolves the `kěyǐ` dictionary gap (§3.2) before this lesson is considered finished
- [ ] States the general auxiliary-verb template (Auxiliary + Main Verb) explicitly, not just via examples
- [x] Introduces yào ("want to/will") with a full example
- [ ] Distinguishes zhīdào's auxiliary/pre-verb use here from its plain "know" use elsewhere, explicitly
- [x] Introduces kāishǐ as inchoative/gradual-onset marker with a matching example
- [x] Introduces biàn as the general state-change verb
- [ ] Gives a side-by-side kāishǐ-vs-biàn example so the reader can tell which applies when
- [ ] States explicitly whether auxiliaries can stack, or that they don't in this system
- [ ] Reconciles biàn's two appearances (plain state-change verb here vs. the causative pivot in lesson-07)
- [ ] Restores diacritics/audio
- [ ] Gives at least one negated-auxiliary example (bù yào), since negation is otherwise uncentralized
- [x] Exercises require producing sentences with at least two different auxiliaries

### lesson-15.md — "Colors and la"

- [ ] Names the shared -sè ("color") suffix pattern explicitly across all color words, not just presenting five separate items
- [x] Gives at least three color examples in full sentences
- [x] Explains the topic/condition-fronting pattern ([Context], [Main Statement]) as the functional `la` replacement
- [x] Gives a with/without-fronted-context contrast showing the meaning difference
- [ ] States explicitly that no dedicated particle marks the topic (unlike Toki Pona's la) — fronting/pause alone carries it
- [ ] Distinguishes topic-fronting here from the default SVO subject position (lesson-03), so the reader can tell a topic from a subject
- [ ] Gives an example combining a color adjective inside a topic-fronted sentence, tying both concepts together
- [ ] Proofreads and improves the noticeably rougher answer-key sentences
- [ ] Restores diacritics/audio
- [x] Cross-references the Descriptors/Colour dictionary category
- [ ] States plainly whether colors beyond the five taught exist or must be composed, so vocabulary limits are transparent
- [x] Exercises test both color-adjective production and topic-fronting construction

### lesson-16.md — "Spatial Nouns"

- [ ] Resolves the `dào` dictionary gap (§3.2) before this lesson is considered finished
- [ ] States the locative-noun pattern generally (noun + relative-position word), not just via examples
- [x] Gives at least four of the six relative-position words each in a distinct full sentence
- [x] Introduces zài for static location with a clear "X is located at Y" example
- [x] Introduces dào for motion-toward, explicitly contrasted against zài in a minimal-pair-style pair
- [x] Explains the zài-qù-dào compound and what each piece contributes
- [ ] Reconciles this lesson's zài with lesson-09's coverb zài and lesson-03's location/existence content into one coherent picture
- [ ] Gives an example locating one object relative to another using two chained relative-position words
- [ ] Restores diacritics/audio and consistent tone-marking (currently only "qù" retains its mark)
- [ ] Introduces cóng ("from") explicitly with its own example, tying to the Space dictionary category
- [ ] Gives a combined "from place X to place Y" example, cross-referencing lesson-10's proper-place-name content
- [x] Exercises test both static-location and motion-toward sentence production

### lesson-17.md — "Particles and Perspective"

- [ ] **Add the missing exercise/answers block** so these constructions are actually practiced, not just read
- [x] Introduces duì...lái shuō ("from X's perspective") with a full worked example
- [x] Introduces hé for conjoining subjects/nouns
- [x] Introduces yě for sequencing multiple predicates on one subject, with an example showing the sequencing effect
- [ ] Distinguishes hé (noun-conjunction) from yě (predicate-sequencing) explicitly, since both read as loosely "and"-like to an English speaker
- [ ] Resolves the `dǒng`-adjacent vocabulary and the "shangmian-de ai" ("God") gloss against the dictionary (§3.2), and reconsiders whether a deity concept belongs in this lesson's scope
- [ ] Gives a duì...lái shuō example embedded in a full opinion/statement, showing natural use
- [x] Introduces dànshì ("but") with a contrastive example
- [ ] Explicitly reconciles this lesson's connectors with the Logical Concepts dictionary category
- [ ] Restores diacritics/audio
- [ ] Cross-references how these connectors will reappear in the upcoming stories (lessons 18-20)
- [ ] (Once added) exercises require producing at least one sentence per connector

### lesson-18.md — "Hunting Adventure"

- [ ] Resolves the `líkāi` dictionary gap (§3.2)
- [ ] States the story's premise clearly enough that a comprehension exercise could be written from it (who/where/what happens)
- [x] Gives a vocabulary block sufficient to read the story without outside help
- [ ] Makes at least three prior-lesson grammar points visibly identifiable within the narrative (e.g. `le`, coverbs, spatial nouns), so the story functions as cumulative review
- [ ] **Adds a comprehension exercise/answers block** (currently missing)
- [ ] Restores diacritics/audio for read-aloud value
- [ ] Introduces the character Mawijo with enough context that a first-time reader isn't confused cold
- [ ] Ends with enough of a hook that lesson-19's continuation feels motivated (verify the current ending achieves this)
- [x] Uses animal/nature vocabulary from earlier lessons in context, reinforcing it
- [ ] Keeps sentence complexity within what's been taught so far, rather than introducing ungrounded new grammar mid-story
- [x] Provides line-by-line glosses
- [ ] Confirms the glosses teach (literal word-for-word breakdown) rather than only giving a fluent translation

### lesson-19.md — "Cooking Adventure"

- [ ] Resolves the `wǎn` dictionary gap (§3.2)
- [ ] Recaps lesson-18's context in at least one line so a reader can follow without re-reading it
- [ ] Introduces the second character (Sili) clearly, including her relationship to Mawijo
- [x] Gives a vocabulary block sufficient to read the story unaided
- [x] Demonstrates domestic-action vocabulary (clean, wash, cook) in complete sentences
- [ ] Makes at least three prior-lesson grammar points visibly identifiable within the narrative
- [ ] **Adds a comprehension exercise/answers block** (currently missing)
- [ ] Restores diacritics/audio
- [ ] Shows an affectionate greeting exchange between the two characters, tying back to lesson-11
- [ ] Keeps grammar within what's already taught, or explicitly glosses anything genuinely new
- [ ] Sets up lesson-20's closing tone so the transition into an epilogue feels natural
- [ ] Confirms glosses are literal/teaching glosses, not just fluent translations

### lesson-20.md — "The Frontier"

- [ ] Clarifies what "Part 2" concretely refers to — build it, link it, or adjust the lesson's framing so it doesn't promise unbuilt content
- [x] States plainly that the taught-grammar portion of the book is complete at this point
- [x] Points explicitly to the dictionary as the next resource
- [ ] Gives the reader a concrete "what to do next" (re-read stories, use the phrase book once built, revisit appendix-minimality)
- [x] Maintains narrative continuity with lessons 18-19's characters/setting
- [x] Uses only vocabulary/grammar already established, introducing nothing new
- [ ] Reflects back on the four-concerns framing from intro-1, closing the loop the book opened
- [ ] Avoids overpromising fluency outcomes the 20 lessons don't actually deliver
- [ ] **Provides a "what you've learned" recap** of all ~19 grammar points as a capstone — nothing else in the book does this (§5.2 gap)
- [x] Ends with genuine encouragement/next-steps rather than only a narrative goodbye
- [ ] Restores diacritics/audio if any Hao-shuo-de text appears
- [ ] Adds Russian/Chinese translation

### appendix-pinyin.md — "The Pinyin System"

- [x] Full initials table organized by the three confusable groups (j/q/x, zh/ch/sh/r, z/c/s), each with an English-approximation cue
- [x] Full finals table
- [ ] Confirms every final actually used across the 128-word dictionary is covered (not yet cross-checked)
- [x] Explains the yi/wu/yu bare-vowel stand-in spelling rule with examples
- [x] Explains the silent-ü-spelled-as-u rule after j/q/x/y with examples
- [x] Covers third-tone sandhi with a worked example
- [x] Covers bù/yī tone-change rules in connected speech with worked examples
- [ ] States explicitly that these sandhi rules are NOT applied in the book's citation-tone convention, cross-referencing lesson-01's design choice
- [ ] Gives a "common mistake" callout for each confusable initial group, not just a table entry
- [ ] Cross-links back to the lesson-01 sections that reference this appendix, so navigation is bidirectional
- [ ] Includes at least one audio example per confusable-sound group so the distinction is actually audible
- [ ] Considers whether the two markdown tables should become structured vocab-like blocks for schema consistency, or explicitly justifies keeping raw tables

### appendix-minimality.yaml — "Why Minimality Works"

- [x] States Aristotle's ten categories and how they close the logical space of predicates
- [x] Introduces NSM/semantic primes (~65, Wierzbicka/Goddard) with their cross-linguistic evidentiary weight
- [x] Distinguishes true primitives (hǎo, yǒu, zhè) from practically-lexicalized composites (dòngwù, gōngjù) with clear criteria
- [x] Gives the full "learn" = dé zhīdào-de decomposition worked end-to-end
- [x] Explains why real-Mandarin grammar constrains word-choice more tightly than Toki Pona's invented grammar
- [x] States the three falsifiable claims (completeness, tier accuracy, Putonghua-fit), each with its falsification condition
- [ ] **Adds the "stress test"**: a genuinely hard/abstract term decomposed live, end-to-end (currently missing, §4)
- [ ] **Adds an explicit "limits of this method"** section (currently missing)
- [ ] Directly addresses the numbers-system gap (§3.2/§5.2): is arbitrary numeric precision in-scope for the minimality claim, or explicitly excluded?
- [x] Keeps the open-ended reflection exercise with no answer key, and explains why that's appropriate here
- [ ] Cross-references intro-2's Toki Pona precedent explicitly, closing that loop
- [ ] Defines every technical term (category, prime, primitive, composite) in-line on first use — this is the most conceptually dense chapter in the book

### proverbs.md — "Hao-shuo-de Proverbs"

- [ ] States the section's purpose explicitly (cultural/idiomatic capstone, cumulative vocabulary review) rather than presenting an unexplained list
- [ ] Cross-checks all 18 proverbs' vocabulary against the dictionary, resolving any undictionaried words found
- [x] Gives both a literal, word-for-word gloss and an idiomatic English-equivalent for each proverb
- [ ] Groups/orders proverbs thematically (self, relationships, money, etc.) rather than as an unordered list, for memorability
- [ ] Notes which proverbs are original Hao-shuo-de sayings vs. translated familiar English proverbs
- [ ] Ties at least a few proverbs back to specific grammar points taught earlier, as a review mechanism
- [ ] Explains any cultural context a proverb needs to land (where the literal gloss alone doesn't make it click)
- [ ] Cross-references lesson-11's animal-sound/reduplication patterns if any proverb uses them
- [ ] Flags any proverb that could double as a phrase-book entry (§6), cross-linking if so
- [ ] Tells the reader how to use this section (e.g. "revisit after finishing all lessons" vs. "dip in anytime")
- [ ] Adds audio examples, since proverbs are meant to be memorized/spoken
- [ ] Adds Russian/Chinese translation

### dictionary.md / dictionary-categorical.md

- [x] Every one of the 128 words has a complete eng/rus/zh definition
- [x] Every word carries a Toki Pona gloss for comparison
- [ ] **Every word used across all 20 lessons + stories + proverbs actually has a dictionary entry** — the master check that §3.2's specific gaps roll up into; currently fails for at least 7 known words
- [x] The 15-category/subcategory grouping is internally consistent
- [ ] Confirms the categorical grouping's category names match the Aristotelian framing used in appendix-minimality (not yet explicitly cross-checked)
- [x] Alphabetical and categorical listings stay in sync (both generated from the same source)
- [x] Stable `id`s exist for every word so `{{word:ID}}` references never break
- [ ] Every category has at least one word explicitly illustrated in a lesson or the theory chapter, so no category feels abstract/unillustrated (Life-and-Death and Time categories currently at risk, §3.3)
- [x] Part-of-speech labeling present and consistent for every entry
- [x] Pinyin tone marks correct and consistent (single source-of-truth spelling per word)
- [x] New words get their `id` auto-assigned without disturbing existing ids (`assign-word-ids.js`)
- [x] Dictionary is never hand-edited directly; generation process is documented in README

---

## 9. Cross-Cutting Process Checklist

- [ ] Resolve all §3.2 vocabulary/dictionary mismatches before doing large-scale translation work on lessons 6–20 (no point translating words that might get renamed/removed)
- [ ] Pick one content schema (YAML block schema, per lesson-01/02/appendix-minimality) and migrate everything else to it — unblocks `info`/`warning` blocks project-wide and unifies `tldr`/`necessity` metadata
- [ ] Restore tone diacritics and `<audio-example>` tags across lessons 6–20
- [ ] Translate lessons 6–20, appendix-pinyin, and proverbs into Russian and Chinese
- [ ] Add exercise/answers blocks to lesson-02 and lesson-17
- [ ] Add comprehension exercises to lessons 18–20
- [ ] Proofread all answer keys for lessons 6–20 (typos/ungrammatical filler found in at least three files)
- [ ] Build the phrase book (§6) — entirely new content
- [ ] Decide and document the numbers design (§3.2/§5.2) — this single decision unblocks lesson-13, the dictionary, and the phrase book simultaneously
