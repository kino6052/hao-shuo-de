# Tags plan (K31): every entry under nested categories, as precise as a picture dictionary

The author, 2026-10-21: "we need to make deeply nested categorization of every word in categorical dictionary — each word can be under at least one or multiple categories … it can be based on tags that are themselves in relationship — one tag could be including another tag under it". Then: "we need to make it way more precise than what we have in categorical dict — more like what picture dictionaries do very well — putting vocab under categories. The rest is your call."

The knowledge base has to hold it, and Claude has to be able to query it easily through a skill.

Marks: `[ ]` to do, `[~]` doing, `[x]` done, `[?]` waits for the author.

## 0. The idea in one example

```
knife (dāo 刀)
  topic: kitchen-utensils                     <- where you meet it (the picture-dictionary page)
         kitchen-utensils -> kitchen -> home
  kind:  cutting-tool                         <- what it is
         cutting-tool -> tool -> made-thing -> thing
```

- A **tag** has an id, a title in English, Russian and Chinese, and **one or more parent tags**. So the tags form a net (one tag can sit under several), not a single tree.
- An **entry** (a core word or a composite) lists only its most specific tags, and is under everything above them without writing them out: knife is a kitchen thing, a home thing, a tool and a thing.
- Writing a tag together with one of its parents is flagged as extra.

## 1. What a picture dictionary does, and what we take from it

A picture dictionary is precise because its pages are **small, concrete scenes**: not "Tools & Objects" but "kitchen utensils", "in the bathroom", "fruit", "at the doctor's". Each page holds a handful to a few dozen words a learner meets together, and actions and qualities sit on the page where they happen (cut, peel, boil on the cooking page).

What we take:
1. **Two axes of tags.** A **topic** says where you meet the word (home > kitchen > kitchen utensils), the way a picture dictionary page does. A **kind** says what it is (thing > made thing > tool > cutting tool). Every entry has at least one of each. The topic net is what the book shows; the kind net is what the KB reasons with (and K19's open item, the ten categories).
2. **Page size.** A leaf topic holds about 8 to 30 entries. Over 40, it is split; under 3, it is merged or given more entries. A gate reports both.
3. **Leaves, not shelves.** An everyday entry is tagged with a leaf topic, never only with a broad one ("home"). A broad-only tag is reported as too vague.
4. **Actions and qualities have pages too:** cooking actions, cleaning actions, daily routine, feelings, describing people, sizes and shapes, opposites.
5. **Composites are on the page.** Most concrete words are composites (刀 knife, 碗 bowl, 锅 pot), so the categorical dictionary shows core words and composites together, core words marked.

## 2. Decisions (Claude's call, as the author asked; 2026-10-21)

- [x] **Q1. The top tags.** Topic axis: about 14 units of our own, built like a picture dictionary's (people, home, food, clothes, health, town, travel, nature, time and numbers, work and school, free time, society, language and mind, describing things). Kind axis: Aristotle's ten categories in plain names (thing, how much, what kind, relation, place, time, position, having, doing, undergoing), plus one for grammar words (le, de, ma). We write our own lists; no picture dictionary's word lists are copied.
- [x] **Q2. Composites on the page:** yes, all entries, grouped by topic and closed by default; core words are marked. A second view shows the kind net.
- [x] **Q3. Where an entry's tags are written:** on the entry (`topics: [...]`, `kinds: [...]`), with the tag nets in one file each. An entry stays whole, and refactor lists move it in one place.
- [x] **Q4. Tag names in Hao-shuo-de:** later, after the backfill (optional `hsd` on a tag, checked with `kb_check_form`).
- [x] **Q5. Review:** batches of about 100 entries, grouped by topic, a whole topic accepted at once, exceptions fixed one by one (as K25).
- [x] **Q6. Download the Chinese thesaurus Cilin** (HIT's extended 同义词词林, about 77,000 words in a five-level tree). It gives each Chinese word a place in a ready-made tree, so most composites get a proposed kind (and many a topic) at once. Asked in chat (K27). Licence to check before use (free for research).
  - Done 2026-10-21 at the author's word: `kb/cilin/cilin_ext.txt` (893 KB, 17,817 lines, 77,457 distinct words, big classes A to L) and the HIT description PDF, from the One-sixth archive of the HIT edition. The licence is not stated, so the data is in .gitignore (local only) and `kb/cilin/README.md` records the source.

## 3. The topic net, a first cut (to be filled in during C1)

Each unit is split until the leaves are picture-dictionary pages. The kitchen as an example:

```
home
  kitchen
    kitchen-utensils     knife, ladle, cutting board, peeler ...
    cookware             pot, pan, wok, steamer ...
    tableware            bowl, plate, cup, chopsticks, spoon ...
    kitchen-appliances   fridge, stove, rice cooker, microwave ...
    cooking-actions      cut, wash, boil, fry, steam, stir ...   (also under food)
  bathroom
  bedroom
  living-room
  cleaning
  repairs-and-tools
```

The other units, roughly: **people** (body, face, family, life stages, jobs, feelings, describing people), **food** (fruit, vegetables, meat, fish and seafood, grains and bread, milk foods, drinks, sweets and snacks, seasonings, tastes, meals, at a restaurant), **clothes** (everyday clothes, shoes, accessories, colors and patterns, washing clothes), **health** (inside the body, illness, injuries, medicine, at the doctor's, at the hospital), **town** (places, shops, money and paying, post and bank, police and safety, signs), **travel** (vehicles, the road, trains, planes, directions, a trip), **nature** (weather, seasons, land and water, plants, pets, farm animals, wild animals, birds, insects, sea life, sky and space), **time and numbers** (the clock, the calendar, numbers, measures, shapes), **work and school** (the classroom, studying, the office, trades and their tools), **free time** (sports, games, music, art, films and media, holidays and festivals), **society** (government, law, news, belief, history), **language and mind** (speaking, thinking, knowing, question words, grammar words), **describing things** (size, shape, how it feels, how good, opposites).

## A. The data

- [x] **A1. Two tag files** `src/data/maps/topics.ts` and `src/data/maps/kinds.ts`, with a helper `tags([...])` in `src/lib/data-maps.ts`. One record per tag: Done: `topics.ts` holds the 55 old category nodes as provisional topics (`order` keeps the old display order); `kinds.ts` holds the 11 tops only (the rest is C1). The kind "time" and "place" are ids `when` and `where`: ids are unique across both files, and `time` is already a topic.
  `{ id: "kitchen-utensils", title: { eng, rus, zh }, parents: ["kitchen"], note?, wordnet?: ["i..."], cilin?: ["Bo01"], hsd?: "..." }`
  Order in the file is the display order. `wordnet` and `cilin` anchor a tag to outside trees (used in C2). Ids are unique across both files.
- [x] **A2. Tags on entries:** optional `topics: string[]` and `isA: string[]` (not `kinds`: composites already use that for built/spelled) on `word()` (`src/lib/word.ts`) and `composite()` (`src/lib/composite.ts`), typed against the tag ids so a typo fails the type check. Done; the tag ids are checked by check-data, not by the type (a typo is caught there).
- [x] **A3. Move today's tree over** (refactor list `refactors/K31.ts`, dry run first): each node of `src/data/maps/categories.ts` becomes a provisional topic; each core word keeps its leaf as its first topic. Nothing on the page changes yet. Done: `refactors/K31.ts` (230 `edit` ops); each word has its old leaf as its one topic.
- [x] **A4. Keep the old readers working:** `categories.ts` becomes a view built from the topics, so WordMap, graph.js, coverage-kb and generate-readme keep working until D2. Done: `categories.ts` is built from the topics and is byte-for-byte the old tree. The refactor ops `add`, `category`, `remove`, `rename`, `split` now work on the word's `topics`; `word show` prints topic paths.
- [x] **A5. check-data rule 3** becomes: every core word has a topic and a kind. Composites join the rule when the backfill (C) is done; until then it is a count in the report. Done: `tagReport` in `src/lib/tag-net.js`, called by check-data. Kinds are counted, not required, until `KINDS_REQUIRED` is set to true after C3.

## B. The knowledge base and the queries

- [x] **B1. `src/lib/kb/tags.js`** (plain code, loaded once and kept in memory): parents and children, everything above a tag, everything under it, the members of a tag (direct and through subtags, without repeats), every path from an entry up to a top tag on both axes, the closest tags two entries share, leaf sizes.
- [x] **B2. Facts for clingo** in `src/lib/kb/facts.js`: `tag(T,topic|kind). tag_parent(T,P). tagged(E,T).` (E is a word id or a composite's hanzi, as in the other facts). Rules in `kb/rules/tags.lp`: `under/2` (any number of steps up), `in_tag/2` (an entry under a tag at any depth), `tag_cycle/1`, `extra_tag/2`, `empty_tag/1`, `untagged/2` (per axis), `vague/1` (an entry with no leaf topic), `big_leaf/1`, `small_leaf/1`. The old `category(W,leaf)` fact stays as the entry's direct topics so old queries run.
- [x] **B3. Relations (K18):** new kinds `tagged` (an entry and its tag) and `tag-under` (a tag and its parent), accepted when they come from the data; the `category` kind ("share a category") is computed from shared leaf topics. Rule-found tags (C2) are `proposed`, and a rejected one is remembered.
- [x] **B4. Command line** `node scripts/kb.js tags`:
  - `tags [--kinds]`: the topic net (or the kind net) as a tree, a tag under two parents shown in both places (marked), with counts
  - `tags kitchen-utensils`: its parents, its subtags, its members (direct, then through subtags), core words marked
  - `tags --of dāo`: every path from the entry to the top, on both axes
  - `tags --common dāo wǎn`: the closest tags both are under (kitchen)
  - `tags --find knife`: the tags whose title or members match an English word (through `kb_english`)
  - `tags --check`: cycles, unknown tags, extra tags, empty, too big and too small leaves, vague and untagged entries
  - `tags --proposed [tag]`: the tags waiting for review and why each was proposed
- [x] **B5. The tool `kb_tags`** in `src/lib/kb/tools.js`, with the modes of B4. It reads fresh like the other kb tools and never changes data.
- [x] **B6. The skill** `.claude/skills/tags/SKILL.md`: when to use it (picking words for a lesson text or a theme, placing a new entry, checking a description against its tags, Akinator questions), which mode answers which question, how to tag an entry or add a tag (edit the files, then `npm run check`), and the rules (leaf topics of 8 to 30 entries, lowercase ids with hyphens, plain titles, one idea per tag, a topic is a scene and a kind is what it is).
- [x] **B7. A tab in `/__kb/`**: browse both nets, open a tag, see an entry's paths.
  - Done: the Tags tab (`#tags=`, `#tags=kinds`, `#tags=body`, `#tags=of shou3`); tag names in an answer are links. Served by `/__kb/tags`.
- [x] **B8. Tests** on the fixture (`src/lib/kb/fixture.js`): a tag under two parents, an entry with two topics, a cycle, an extra tag, a vague entry, a big leaf, the `--common` answer.

## C. Tagging every entry (the backfill)

- [x] **C1. The nets themselves:** Claude writes the full topic net (section 3, split down to pages) and the kind net (the ten categories down to about four levels for things, fewer for actions and qualities). One review by the author before any entry is tagged.
  - Done 2026-10-21; the author said to approve everything without a review stop. Source of the nets: `review/proposals/tags-nets/topics.txt` and `kinds.txt` (indent = parent, `+ a, b` = more parents), written into `src/data/maps/topics.ts` and `kinds.ts`: 191 topics in 14 units (157 pages, 3 levels, 10 pages under two parents), 155 kinds (130 leaves, up to 4 levels). The old 55 provisional topics are gone (`categories.ts` is still a view, now of the new pages).
- [x] **C2. Proposals found by rules** (all `proposed`, each with its why):
  - Done in a lighter form 2026-10-21: no WordNet run. Cilin's big and middle classes (A people, B things, C space and time, D abstract, E features, F actions, G mind, H activities, I phenomena, J relations, K particles) and a parsed picture dictionary (`kb/picture-dict/`, local only, 7,035 entries) were shown beside each composite as hints; composites that are a core word took its tags by rule (427), the rest were tagged by Claude. The list below is what the full version would add (C6).
  - Cilin (Q6): an entry's Cilin code reaching a tag's `cilin` anchor proposes that tag
  - WordNet: a one-time Python run (K4) saves the "is a kind of" chain and the lexicographer file (noun.food, noun.artifact …) of every linked entry to `kb/wordnet/hypernyms.json`; a chain reaching a tag's `wordnet` anchor proposes it
  - a composite takes the kind of its head when the head is a thing (fēi-jī under jī's kind)
  - `tool-for` proposes the kind "tool", `place-of` the kind "place", `agent` the kind "person"
  - `part-of` shows the whole's topic on the review page, never on its own
- [x] **C3. The core words (231):** Claude tags them on both axes, one batch.
  - Done 2026-10-21 (`refactors/K32.ts`): every core word has one page and one kind. `KINDS_REQUIRED` is now true, so a core word with no kind fails check-data. A new page was added for them: `words-before-nouns` (in, at, from, for). 52 pages have fewer than 3 entries until the composites are tagged (a warning only).
- [x] **C4. Claude drafts the rest**, topic by topic, about 100 entries a batch (`review/proposals/tags-<n>.json`), starting from the C2 proposals; new leaf topics are proposed with their parents where nothing fits.
  - Done 2026-10-21: all 1,742 untagged composites in nine automatic batches (about 200 each; the author said to decide everything and not to ask for review), by Claude, with Cilin codes shown as hints. Afterwards the tiny pages were merged (garden, cookware, laundry, alcohol, birds and 14 more) and the 13 pages over 40 entries were split by kind or by word list (handling into 4, thinking into 4, speaking into 4 ...): 204 topics now. Some wrongly inherited tags (更加 under a preposition page, 正确, 准) were fixed by hand.
- [ ] **C5. The review page** `/__review/?tags=N`: one topic at a time with its entries, accept a topic in one click, move or add a tag on one entry; decisions in `review/decisions/tags-<n>.json`, applied by a refactor list.
  - Parked: the author does not want to review the tags, so no review page was built. The tags can be looked at through the Tags tab of the KB explorer.
- [ ] **C6. Cross-check** (`kb_cross_check` gains a section): entries whose Cilin class or WordNet chain disagrees with their tags, and entries that share a Cilin small class but sit in different leaf topics. Claude sorts them first; the author sees only the real conflicts.
- [x] **C7. New entries come tagged:** the Phase 9 round pipeline (KB_PLAN.md, K30) writes `topics` and `kinds` in each spec, so the 500-entry rounds never add untagged entries.
  - Done 2026-10-21: the Phase 9 "Spec" step in KB_PLAN.md now says each spec carries `topics` and `isA`; the gate already fails an untagged composite.

## D. The book

- [x] **D1. The categorical dictionary** (`src/components/CategoricalDictionarySection.jsx`) is built from the topic net, like the pages of a picture dictionary: units, then topics, then the entries of each page, core words marked, closed by default. An entry under two topics shows in both, with an "also under …" line. A switch shows the kind net.
  - Changed 2026-10-21 (the author: every entry must be a Hao-shuo-de word): a composite is listed as its Hao-shuo-de description (pinyin of its forms, then the Mandarin hanzi and the gloss), never as the Mandarin word's own pinyin. `src/lib/categorical-entries.js` decides what may be listed (fit not skip or gap, a description, every word known, no loose text except ge, A/B/X/Y, quoted sounds, doubled syllables); check-data fails when another composite cannot be listed. The 10 composites with fit skip (不但, 才, 更加 ...) stay tagged but off the page.
  - Done 2026-10-21: the page lists core words in full, then each page's composites one line each (a composite that is a core word is shown once, as the core word); everything is closed by default, at every depth; the counts per branch include composites; the intro is rewritten in en, ru and zh. No entry sits under two pages yet, so no "also under" line was needed. The kind-net switch is not built yet.
- [ ] **D2. Move the old readers** (WordMap, graph.js, coverage-kb, generate-readme, check-jargon) to the tags and remove the view from A4.
- [x] **D3. Russian and Chinese titles** for every tag; the plain-language gates run on the titles.
  - Done: every tag has en, ru and zh titles; duplicate titles inside a language were made distinct (the-house, number-words, particles, state-of-things, place-relation).
- [x] **D4. Phone width, dark mode and keyboard** checked in the preview pane; `npm run build` passes.
  - Phone width (375 px, no sideways scroll) and the Russian view checked in the preview pane; the page uses the book's own dark/light colours and native buttons, so the keyboard works.
- [ ] **D5. Later, optional: a picture per topic page**, made in Doubao like the Miao-miao images (MASCOT_PLAN.md), with the page's entries labeled.

## E. Gates, refactoring, export

- [x] **E1. Gates** (`scripts/check-data.js`): unknown tag, cycle, a tag that reaches no top tag, an empty tag, an extra tag (a warning), missing titles, leaf sizes (a warning), and every entry has a topic and a kind (core words now, composites after C). Fast enough for the every-change check.
- [x] **E2. Refactoring (K20):** refactor lists and `npm run word` learn `tag` (add or remove on entries), `tag-rename`, `tag-move` (change parents), `tag-merge` and `tag-split`, each with a dry run that shows the entries and pages touched.
  - Done 2026-10-21: `scripts/tag-ops.js` adds the ops `tag`, `tagAdd`, `tagEdit`, `tagRename`, `tagMove`, `tagMerge`, `tagSplit` (dry run by default; notes name pages left too big, too small or with entries above subtags; a rename lists code that mentions the id). `npm run word -- tag | tag-rename | tag-move | tag-merge`. The nets in `src/data/maps/topics.ts` and `kinds.ts` are now the source of truth (one tag per line); the `.txt` files in `review/proposals/tags-nets/` are only the history of how they were first written.
- [x] **E3. `kb remove` and `kb add`** show the topics an entry leaves empty or fills.
  - Done 2026-10-21: `kb remove` (and kb_remove) ends with "Topic pages that lose entries": each page's count before and after, flagged EMPTY or under the page minimum; `kb add` (kb_add) has a "Topic pages" line: the pages the root is a composite on now, and the pages of the composites it completes or lets be spelled.
- [x] **E4. Export:** both nets as SKOS concept schemes with `skos:broader` in the OntoLex export (`kb_export`).
  - Done 2026-10-21: `kb export` writes both nets as SKOS concept schemes (hsd:topics, hsd:kinds; prefLabel en/ru/zh-Hans, skos:broader per parent, top concepts), entries point at them with dct:subject (topic) and hsd:isA (kind). The summary and the push-tier real test check the counts.
- [ ] **E5. Akinator** (AKINATOR_PLAN.md A4): tags become question features ("is it something in the kitchen?"), asked from the top down.
- [ ] **E6. Yardsticks:** a topic with few entries next to a big gap in the frequency lists shows where the next rounds should add words (a hint for K30's picker).

## F. Wrap-up

- [x] **F1.** KB_PLAN.md: K31 moved from proposed to decided; the relation kinds list in phase 5 updated.
  - KB_PLAN.md K31 now reads decided and done.
- [ ] **F2.** README marker blocks refresh on commit (header comments of the new files).
- [x] **F3.** Numbers recorded here: topics and kinds, depth, leaf sizes, entries under two or more topics, untagged entries (target 0).
  - 204 topics (14 units, 159 pages, 4 levels deep), 155 kinds (130 leaves, 4 levels); 230 core words and 2,169 composites, all with a page and a kind; entries under two or more pages: 0; pages outside 3 to 40 entries: "measures" (2) and "belief-and-customs" (empty); kinds with no entry yet: 7.
- [x] **F4. Easy for Claude to query:** the tags are in the KB (a separate fact tier so the what-if stays small), on the word card (`kb word dāo` shows Topic and Is a paths; a composite by its hanzi or pinyin gets its own card with the Hao-shuo-de form), in the export, and `kb tags <tag> --and <tag>` (kb_tags `and`) lists the entries under a topic and a kind together. The tags skill (.claude/skills/tags/SKILL.md) has the recipes for "which words are about X".
  - Done 2026-10-21.
- [x] **F5. Search on the dictionary pages:** the categorical page and the core dictionary page have a search box (src/components/SearchBox.jsx, src/lib/dictionary-search.js): pinyin with or without tones, hanzi, English or Russian meaning, a composite's Hao-shuo-de description; on the categorical page a topic or group name keeps the whole page, matches open their groups, and a count shows.
  - Done 2026-10-21; checked in the preview (English and Russian).

## Order of work

1. Q6 (the Cilin download) in chat.
2. A1–A5 and B1–B8 in one session; nothing visible changes, all gates green.
3. C1 (the nets), reviewed by the author.
4. C2 proposals, C3 core words, then C4–C5 in batches, C6 alongside.
5. D and E once the core words are done; the composites keep coming in batches.

## Risks

- **Too many tags.** A tag for every entry makes the net useless. The leaf-size rule (8 to 30) and "a new tag needs at least three members" keep it in check.
- **Topic and kind mixed up** ("kitchenware" as a kind). The skill and the review page say which is which, and a gate warns when a kind tag's members are spread over many units.
- **Head inheritance misleads** (huǒ-guō, hot pot, is a meal, not cookware). Proposals from rules stay `proposed` until reviewed.
- **Abstract words** (reason, value, law) have no picture-dictionary scene. They get a topic under society or language and mind, and their kind does most of the work.
- **Volume:** about 2400 entries now and about 5300 after Phase 9, so the review page accepts whole topics at once.
