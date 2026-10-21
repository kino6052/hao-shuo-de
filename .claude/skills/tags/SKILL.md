---
name: tags
description: Query and edit the Hao-shuo-de tag nets (TAGS_PLAN.md, K31). Every dictionary entry, core word or composite, sits under tags on two nets that nest and can have several parents - a topic net (where you meet the word, like a picture-dictionary page: home > kitchen > kitchen-utensils) and a kind net (what it is: thing > tool > cutting-tool). Use it to pick words for a lesson text or a theme, to see where a new entry belongs, to find what two words share, to check a description against its tags, to write Akinator questions, and to add or change a tag. Ask it through the kb_tags tool or node scripts/kb.js tags.
---

# Tags: where an entry sits

Read this before you pick words by theme, place a new entry, or change a tag.

## What a tag is

- A **tag** has an id, titles in English, Russian and Chinese, and **parents**. A tag can have several parents, so the tags form a net, not a tree. A tag with no parents is a top tag.
- Two nets, kept apart:
  - **topic** (`src/data/maps/topics.ts`): *where you meet it.* A picture-dictionary page: home > kitchen > kitchen-utensils, or food > cooking-actions (cooking-actions is under kitchen *and* food).
  - **kind** (`src/data/maps/kinds.ts`): *what it is.* The top is Aristotle's ten categories (thing, how-much, what-kind, relation, where, when, position, having, doing, undergoing) and grammar-words; below them thing > made-thing > tool > cutting-tool.
- An **entry** (a word file in `src/data/words/` or a composite in `src/data/composites/`) lists only its **most specific** tags: `topics: ["kitchen-utensils"]`, `isA: ["cutting-tool"]`. It is under everything above them without writing it out. Writing a tag beside one of its own subtags is "extra" and is reported.
- Knife (刀) is in `kitchen-utensils`, so also in `kitchen` and `home`; and a `cutting-tool`, so also a `tool`, a `made-thing` and a `thing`.
- The field is `isA`, not `kinds`: a composite's `kinds` already means built or spelled.
- Ids: lowercase words joined by hyphens, unique across both files.

## Which question, which mode

Ask with the `kb_tags` tool, or `node scripts/kb.js tags ...` (same answers; add `--json` for data).

| You want | Ask |
|---|---|
| the whole topic net, with counts | `tags` (`--depth 2` for the top levels) |
| the kind net | `tags --kinds` |
| everything in a tag (through subtags), core words marked | `tags kitchen` (`--limit 100` for more) |
| where one entry sits, on both nets, every way up | `tags --of dāo` |
| what two entries share | `tags --common dāo wǎn` (closest topic: kitchen) |
| a tag by its name, or where the words for an English word sit | `tags --find knife` |
| what is wrong with the nets | `tags --check` |
| tags waiting for review | `tags --proposed [tag]` |
| your own question about the nets | `kb_query` with the rules of `kb/rules/tags.lp` (loaded already): `under/2`, `in_tag/2`, `extra_tag/2`, `vague/1`, `untagged/2`, `big_leaf/1`, `small_leaf/1`, `empty_tag/1`, `tag_cycle/1` |

The dev server's explorer (`npm run dev`, then `/__kb/`, tab Tags) shows the same answers with tag names as links.

The relation kinds `tagged` (an entry and its tag) and `tag-under` (a tag and its parent) are in `kb_relations`.

## Using it

- **Picking words for a lesson text or a theme:** `tags <leaf topic>` gives the page. Prefer core words (marked `*`) and composites in the lesson's reach. A theme can span topics: use `tags --find <theme>` first.
- **Placing a new entry:** `tags --find <english word>` shows where its neighbours sit; give the entry the same leaf topic and a kind. Ask `tags <leaf>` to see whether the page is full (a leaf holds 8 to 30 entries; the check warns above 40 and below 3).
- **Checking a description against its tags:** a composite described as "a thing used for X" should be under a tool kind; `tags --of <entry>` shows what the data says. A head word can mislead (huǒ-guō, hot pot, is a meal, not cookware): the entry's own tags decide, not its head.
- **Akinator questions** (AKINATOR_PLAN.md): a tag is a yes/no question, asked from the top down ("is it in the kitchen?"). `tags <tag>` gives the candidates the answer leaves.

## Changing the nets

1. Edit the files: add a tag record to `topics.ts` or `kinds.ts` (`{ id, title: { eng, rus, zh }, parents: [...] }`, order in the file is the display order), or set `topics` / `isA` on the entry. A refactor list may use `{ op: "edit", id, set: { topics: [...] } }` for words and `{ op: "composite", zh, set: { topics: [...] } }` for composites; `{ op: "category", id, to: "<topic id>" }` sets a word's one topic.
2. Run `npm run check-data` (fast; it runs the same checks as `tags --check`), then `npm run check` before you commit.

## Rules for the nets

- **A topic is a scene, a kind is what it is.** "Kitchenware" is a topic; "tool" is a kind. A kind tag whose members are spread over many topic units is probably a topic.
- **Leaves, not shelves.** Tag an everyday entry with a leaf topic, never only a broad one (`home`): that is "vague". A leaf holds about 8 to 30 entries; a new tag needs at least three members.
- **One idea per tag**, plain titles in all three languages (the plain-language gates read them: no grammar jargon beyond the ten allowed terms).
- Actions and qualities have pages too (cooking-actions, daily-routine, feelings, sizes-and-shapes).
- Abstract words (reason, value, law) get a topic under society or language-and-mind; their kind does most of the work.
- Tags found by a rule (Cilin, WordNet, a composite's head) are only `proposed` until reviewed; never write them as accepted without a look.

## State of the data

Done 2026-10-21 (TAGS_PLAN.md C): 204 topics in 14 units (159 pages, 4 levels deep) and 155 kinds. Every entry, the 230 core words and all 2,169 composites, has one page (topic) and one kind (isA); no entry sits under two pages. Composites that are a core word or a synonym of one took its tags and were checked by hand; the rest were tagged by Claude in batches, using Cilin codes and a picture dictionary as hints, with no author review (the author asked for none). So treat a single tag as a good guess, not a verdict: a composite filed under a broad page ("thinking", "handling") may be better under a new narrower one. Pages are 3 to 40 entries, with two exceptions ("measures" has 2, "belief-and-customs" has none yet); `tags --check` lists them.
