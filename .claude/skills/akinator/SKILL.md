---
name: akinator
description: Find how to say an idea in Hao-shuo-de by asking questions, like the Akinator game (AKINATOR_PLAN.md, W27). Use it when writing or checking a lesson text and an idea needs saying ("how do I say I am hungrier than you?", "what do we have for when something happens?"), when you need example sentences, patterns, words or composites for an idea with their lesson as a label, or when you suspect the dictionary cannot say something yet (a gap). It asks yes / probably / don't know / probably not / no questions that split the 7,679 items of the pool (words, composites, patterns, sentences) and answers with what fits, or with "Nothing fits well yet" and the closest three. It never writes the sentence and saves nothing. Ask through the kb_akinator tool or node scripts/kb.js akinator.
---

# The Akinator: find how to say an idea

Read this before you write a text for a lesson and before you tell the author the dictionary cannot say something.

## What it is

- A pool of 7,679 items: 230 core words, 2,169 composites, 145 patterns and 4,820 sentences (lesson examples and answers, the phrase book, the stories, composite and pattern examples). Each item has **features**: its topic and kind tags with every tag above them (K31), for composites how they are built (A5: `pattern:`, `theme:`, `reach:`), for patterns their themes and categories, for sentences the features of their words and patterns.
- A **question** is one feature, asked as yes or no ("Do you meet it when talking about “Kitchen”?"). The engine asks the question that splits what is left best, so the same answers always give the same question.
- An **answer** is yes, probably, unknown, probably-not or no. A soft answer only sinks an item (to 30%), a yes / no sinks it to 5%; nothing is removed, so a wrong answer is undone by leaving it out.
- It keeps nothing between calls. You pass the whole list of answers every time.

## How to use it

1. **Ask with no answers.** `kb_akinator` with nothing (or `node scripts/kb.js akinator`) shows the fixed first question, "What do you want to say?", with twelve choices (a thing, how much, what it is like, how things relate, where, when, how placed, having, doing, something that happens to someone, a little word, a whole situation).
2. **Pick one.** Use `start` ("doing", "when", "situation" ...) or the answer `kind:doing=yes`.
3. **Answer each question.** The question names its feature: pass `topic:kitchen=yes`, `theme:compare=probably-not` and so on, the whole list each time, in order. If you do not know, pass `=unknown` or leave it out.
4. **Add an English hint if you have one.** `hint: "I am hungrier than you"` starts the weights on the composites and words that say it (through `kb_english`). Skip it when you only have a feeling for the idea.
5. **Stop** when it gives a result: a clear leader (six items or fewer still count), nothing left that splits, or twenty answers. `finish: true` shows what fits at any step.

## Reading the result

- Four groups: example sentences, patterns, words and composites. Each item has a **lesson label**: `lesson comparing` (the item is in that lesson), `by lesson time-and-sums` (a composite or a sentence outside the lessons: readable by then). The label is only a label, never a filter (W27). If you write for lesson N, take the items labelled N or earlier, and say so when a good fit is later.
- `fit` below 1 means the item disagrees with some answer you gave; `— not: yes kind:doing` names it.
- **A gap**: "Nothing fits well yet". No item kept a quarter of its weight. The three closest are shown, with the answers none of them agree with. Check first that an answer was not a slip: drop the answer named by the closest items and ask again. If it holds, the dictionary cannot say it yet: tell the author, and pass the idea to `kb_candidates` (words that could come in) or `kb_frontier`; this tool changes nothing.

## What it is not

- It does not write the sentence. It finds the examples, the pattern and the words; you build the sentence from them and check it with `kb_parse`.
- Lesson lookups (no questions needed): `kb_lesson` (what lesson N teaches: new words, patterns, readable composites, sentences), `kb_patterns` (patterns by theme, category or lesson, or one in full with its examples), `kb_uses` (where a core word is used by lesson, or `similar` for sentences that share the most words and patterns with one). Command line: `kb lesson | grammar | uses | similar`.
- It does not know a lesson's allowed grammar by itself. To get the composites a text for lesson N may use, ask `kb_built` with `up_to: N`; to check a draft, `kb_parse`.
- A pattern is found through what its examples are about (their kind and topic), so a pattern with odd examples may be missed. Ask for its theme (`theme:compare=yes`) when you know what it is for.

## Numbers (self-play, 250 items found by an answerer who knows them)

Sure answers: 250 of 250 found, 12.4 questions on average. Probably / probably not: 248, 18.4. If every seventh answer is wrong, none is found among what fits and 19% are among the closest three: so a surprising gap deserves a second look at the answers.
