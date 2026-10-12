# A reasoner for Hao-shuo-de: proposals

Status: decided 2026-10-12. The author said yes to all four §8 decisions and added grammar. The work is planned in [KB_PLAN.md](KB_PLAN.md), whose decisions (K1–K17) and phases replace §7 here.

## 1. What we want to ask

1. **Synonyms and opposites.** Both the marked ones and the ones the data implies but doesn't mark yet.
2. **Atoms and secondary words.** Which core words can't be said any other way, and which can be replaced by a description made of other words.
3. **Removal candidates.** Which words could leave the core, and what would break if they did. The removals have to work together, not just one at a time.
4. **English → Hao-shuo-de.** Given an English word, find the form (or the closest thing plus a starting description).

Plus the earlier goals: validate, generate, query, and reuse outside linguistic data.

## 2. What the data already has (counted on 2026-10-12)

| Fact | Where | Count |
|---|---|---|
| Core words (term, hanzi, pos, necessity 2–5) | `src/data/words/` | 230 words, 37 extra senses |
| Composites with forms, head, fit, examples | `src/data/composites/` | 1555 (1514 with examples) |
| Opposites / close words | `src/data/maps/` | 19 pairs + 17 phrases (mostly "bù X") / 5 pairs + 4 phrases |
| Coverage: NSM primes, Aristotle, grammar | `src/data/coverage/` | 65 + 10 + 38 items, each with carrier words |
| Categories, lessons, word usage | maps, `book.js`, `word-usage.json` | everything |
| Mandarin frequency list with "atomic" flags | `../misc/translation/.../dictionary.raw.csv` | 5400 rows |

That's already a knowledge base. It's spread across TypeScript files, and every question is answered by hand-written JS (check-coverage, graph-report, report-roots, report-heads). Each new question means a new script, and each script checks one word at a time.

**The one real gap: definitions of the core words.** To say "X is secondary", we need X's description *without X*. Today only 22 of the 230 words have one, through a composite entry with a form that doesn't use the word (e.g. zǒu = yòng jiǎo qù, fàn = chī-de, jiàn = kàn-dào). The 4 phrases in the close-words map add a few more (mǎi = gěi jīn dé dōngxi). The `necessity` text describes what the word adds, but in prose, so a program can't read it. Section 5.2 depends on filling this in.

## 3. The options

| | Synonyms / opposites | Atoms | Removal (joint) | English | Fits our JS stack | Notes |
|---|---|---|---|---|---|---|
| **A. OWL 2 + Protégé** (HermiT/ELK, SHACL) | stored, little inference | ✗ | ✗ | via links | no (Java desktop) | Open-world: a missing fact counts as unknown, not false, so it can't say "no composite uses X". It also can't count or minimize. Good for a "kind of" tree and for sharing the data. |
| **B. RDF + OntoLex-Lemon + SPARQL** (Oxigraph in Node) | queries | ✗ | ✗ | links to WordNet | yes (wasm) | The W3C standard for lexicons. `decomp` models composites as parts and `vartrans` models synonym/opposite relations. Good for export and reuse, weak for reasoning. |
| **C. Plain Datalog** (Soufflé, Nemo, Logica) | ✓ recursive rules | closure only | ✗ no search | – | Nemo has wasm | Fast and simple, but no choice or optimization, so it can't find the *smallest* atom set. |
| **D. Answer Set Programming: clingo** | ✓ | ✓ optimal sets, all of them | ✓ | – | **yes** (`clingo-wasm` on npm) | Datalog plus negation, counting, choice and `#minimize`. Closed-world by design. Can list *every* best answer and intersect them. |
| **E. Prolog** (SWI-Prolog, `swipl-wasm`) | ✓ | needs hand-written search | possible but manual | DCG grammars | yes (wasm) | Best for interactive digging and for sentence grammars (DCG). Recursion through cyclic definitions needs tabling. |
| **F. Graph DB** (Neo4j, Kuzu, Cozo) | ✓ path queries | ✗ | ✗ | – | heavy / risky | Kuzu was archived in Oct 2025 and Cozo has stalled. We already have graphology for graph metrics. |
| **G. Grammatical Framework** | – | – | – | **sentence-level** | no (Haskell) | Its resource grammars include Chinese. A Hao-shuo-de lexicon on top could translate controlled English sentences. Large investment. |

**Why not OWL as the core:** our questions are closed-world ("which words does nothing else need?"), counting ("used by ≤ 2 composites"), what-if ("drop these 3 words, what breaks?") and optimization ("smallest set of atoms"). OWL reasoners answer "is A a kind of B?" and "is this consistent?" over incomplete data. That's a different job. Protégé is still useful as a *viewer* of an export (option B).

## 4. Recommendation

**Keep `src/data` as the source of truth. Export facts from it, reason over them with clingo, and add an English bridge through WordNet.**

```
src/data/*.ts ──npm run kb──▶ kb/facts.lp ──┐
   (author edits here,                       ├─ clingo (clingo-wasm, in Node) ──▶ answers
    refactor tool, gates)    kb/rules/*.lp ──┘        │
                                                      ├─ npm run kb -- <query>   (CLI)
                                                      ├─ /__kb page on the dev server
                                                      └─ MCP server: Claude calls the KB directly
optional:  facts ──▶ OntoLex Turtle ──▶ Protégé / SPARQL / links to WordNet
```

Why this shape:
- **Nothing to migrate.** The refactor tool, gates, review page and lessons keep working. The fact file is rebuilt like `npm run data`, so it can't drift from the source.
- **Rules are short and readable**, one file per question. Each rule replaces a hand-written script loop, and Claude can write new ones on request.
- **clingo is the only option that handles all four questions**, including the two that need search (atoms, joint removal). Our size (≈ 2000 entities) is small for clingo: expect seconds at most, even in wasm.
- **It runs in our toolchain**: `npm i clingo-wasm`, no Python or Java needed day to day. Native clingo (`pip install clingo`) is there if we ever need it. `xclingo` can explain *why* a result came out (a derivation tree), which helps when the author asks "why is this an atom?".

## 5. How each question gets answered

The fact file is plain and flat (generated, never edited):

```prolog
word(hao3). term(hao3,"hǎo"). necessity(hao3,5). category(hao3,qualities).
composite("飞机"). en("飞机","airplane"). head("飞机",ji1). fit("飞机",natural).
form("飞机",1). uses("飞机",1,1,fei1). uses("飞机",1,2,ji1).     % form 1: slot 1 fēi, slot 2 jī
paraphrase(zou3,1). puses(zou3,1,yong4). puses(zou3,1,jiao3). puses(zou3,1,qu4).
antonym(hao3,huai4). carries(wo3,atom("I")). taught(wo3,pointing).
```

### 5.1 Synonyms and opposites (Datalog-level, works today)

```prolog
opp(A,B) :- antonym(A,B).   opp(A,B) :- antonym(B,A).
% two composites whose main forms differ in exactly one slot, and that slot holds opposites
differs(C1,C2,N) :- same_len(C1,C2), N = #count{ K : uses(C1,1,K,X), uses(C2,1,K,Y), X != Y }.
opp_candidate(C1,C2) :- differs(C1,C2,1), uses(C1,1,K,X), uses(C2,1,K,Y), opp(X,Y).
```

I ran this rule as a quick JS check on the current data. It finds **59 opposite pairs among composites, none marked yet**: 以前/以后, 前面/后面, 上面/下面, 外面/里面, 便宜/贵, 出来/进来, 这些/那些… It also finds noise: 开心 vs 关心 (kāi-xīn / guān-xīn) and 继续 vs 上去. So the rules *propose* and the author decides, the same way the composite review works now (proposals file → review page).

The same pattern gives synonym candidates (forms that differ only by a pair of close words), "kinds of the same thing" (same head), and **242 groups of composites that share one main form**. Some of those are intended synonyms (R12-syn). The rest are the "same form, different meaning" smell to clean up.

### 5.2 Atoms vs secondary words (needs the definitions from §2)

This follows Vincent-Lamarre, Harnad et al., *The Latent Structure of Dictionaries* (2016). Draw an arrow from each word to the words its definition uses. The smallest set of words from which every other word can be defined is a **minimum feedback vertex set** of that graph (their "MinSet"). That is hard to compute in general, but it's a ten-line clingo program at our size:

```prolog
{ atom(W) : word(W) }.                                  % choose some atoms
known(W) :- atom(W).
known(W) :- paraphrase(W,P), known(V) : puses(W,P,V).    % defined from known words
:- word(W), not known(W).                               % everything must be reachable
#minimize { 1,W : atom(W) }.
```

Definitions that loop (A defined by B, B by A) never count as "known" by themselves. Answer-set semantics handles that without extra code. There are usually *many* smallest atom sets, and clingo can intersect or merge all of them (`--opt-mode=optN --enum-mode=cautious` or `brave`):

- **True atoms**: in every smallest set. They can't be defined away whatever else you choose.
- **Swappable atoms**: in some smallest sets. For example, one of kāi / guān has to be an atom, but either will do.
- **Secondary**: in none. Always definable from the rest. Removal candidates come from here.

This also connects to NSM. Coverage already marks the 65 primes, and NSM says primes can't be defined. A rule can require that their carriers come out as atoms and flag any that don't. Words between the primes and everything else are what NSM calls "semantic molecules" (hand, water, sky…), and the analysis would show where our core words sit.

### 5.3 Removal candidates, done jointly

```prolog
% sketch: helpers like sayable/1 and definable_without_drops/1 are left out
{ drop(W) : word(W), necessity(W,N), N <= 3 }.            % try dropping low-necessity words
ok_form(C,F)  :- form(C,F), not uses_dropped(C,F).
uses_dropped(C,F) :- uses(C,F,_,W), drop(W).
has_ok(C) :- ok_form(C,_).
:- carries(_,I), not sayable(I).                          % every NSM prime / category / grammar item stays sayable
:- drop(W), not definable_without_drops(W).               % a dropped word still has a description
#minimize { 1@2,C : composite(C), not has_ok(C) }.        % first: break as few composites as possible
#maximize { 1@1,W : drop(W) }.                            % then: drop as many words as possible
```

A one-word-at-a-time script misses cases where two words are each removable alone but not together, for example when they are defined through each other. This finds the best *set* and lists what each removal costs: broken composites, lesson sentences to rewrite, the coverage item that moves.

The same rules answer what-if questions directly. `npm run kb -- drop dēng tǎng` would print what breaks.

## 6. English → Hao-shuo-de

Tiers, cheapest first:

1. **Gloss index (now).** The English of 1555 composites and 230 word definitions, with simple stemming. Exact hits.
2. **WordNet bridge (recommended next).** The Chinese Open Wordnet (`omw-cmn`, ≈ 42k synsets) and the Open English WordNet 2025 share interlingual ids (CILI). A one-off Python script (`pip install wn`) gives each composite its id(s). It picks the synset that holds both its hanzi (in the Chinese wordnet) and its English gloss (in the English wordnet), so most get exactly one. The ids are stored in the composite files (`ili: [...]`), so day-to-day tooling stays in Node. Then:
   - "plane", "aeroplane" → same id as 飞机 → fēi-jī (synonyms come for free);
   - "jet" → no entry → walk up "is a kind of" → airplane → offers *"a kind of fēi-jī"* plus WordNet's definition as a starting point for a description (`…-de fēi-jī`). Our composites' heads already behave like WordNet's "kind of" links.
3. **Sememes (experimental).** OpenHowNet describes ≈ 200k Chinese and English words with ≈ 2000 sememes (minimal meaning units, e.g. teacher = human + teach + education). If each sememe is mapped to Hao-shuo-de words, it can draft descriptions for words we've never seen (teacher → jiāo-de rén). Note: its repository hasn't changed since 2021.
4. **LLM drafts, KB checks.** Claude proposes a form, and the existing checks (dictionary words only, the compound rule, hanzi matching the words) accept or reject it. Exposed as MCP tools (`kb_lookup`, `kb_check_form`, `kb_synonyms`), Claude would query the KB directly in future sessions instead of writing throwaway scratch scripts each time.

Sentence-level English → Hao-shuo-de is a different, bigger project. Grammatical Framework is the serious option: Hao-shuo-de is a controlled subset of Mandarin, and GF is built for controlled languages and has a Chinese grammar. Park it unless that becomes a goal.

## 7. Plan

| Phase | What | Size |
|---|---|---|
| 0 | **Definitions**: add `paraphrase` (how to say it without the word) or `atom: { why }` to every word file; check-book enforces dictionary words and "not itself". Claude proposes, the author reviews on the review page, like composite batches. | 230 entries, 2–3 review batches |
| 1 | `npm run kb` exports `kb/facts.lp`; rules for opposites, synonyms, shared forms and what-if drop; CLI with ~6 canned queries. **Sanity test:** the KB must reproduce check-coverage's current redundancy warnings. | small |
| 2 | Atoms (true / swappable / secondary) and the joint removal optimizer, written up as a report like graph-report. Candidate opposites and synonyms go into a review batch. | small–medium |
| 3 | WordNet bridge: one-off `ili` ids on composites (reviewable), then `npm run kb -- en <word>`. | medium |
| 4 (optional) | MCP server; OntoLex Turtle export for Protégé and SPARQL; HowNet drafts; GF. | as needed |

Existing gates stay as they are. A gate moves into the rules only if that makes it simpler.

## 8. Decisions for the author

1. **clingo as the reasoner, with OWL only as an export?** (Recommended. The alternative is OWL/Protégé as the core, which can't answer questions 2 and 3.)
2. **`src/data` stays the source of truth?** (Recommended. The KB is a generated view.)
3. **Phase 0 definitions:** OK to add a `paraphrase` / `atom` field to every word and review it in batches?
4. **English bridge:** OK to use Python once to attach WordNet ids, stored in the composite files?

## Sources

- Vincent-Lamarre, Blondin Massé, Lopes, Lord, Marcotte, Harnad, [The Latent Structure of Dictionaries](https://arxiv.org/abs/1411.0129v2) (Topics in Cognitive Science, 2016): Kernel, Core, MinSet.
- [clingo-wasm on npm](https://www.npmjs.com/package/clingo-wasm) (clingo 5.8 in WebAssembly); [Potassco / clingo](https://potassco.org); [multi-threaded clasp: intersection of optimal models](https://arxiv.org/pdf/1210.3265); [xclingo: explanations for ASP](https://arxiv.org/pdf/2009.10242).
- [W3C OntoLex-Lemon](https://www.w3.org/2016/05/ontolex) (decomp, vartrans modules); [Oxigraph for JS](https://npmjs.com/package/oxigraph); [EYE reasoner in JS](https://www.npmjs.com/package/eyereasoner).
- [OWL vs SHACL: open- vs closed-world](https://arxiv.org/pdf/2507.12286) (Oudshoorn, Ortiz, Šimkus 2025).
- [Nemo rule engine](https://arxiv.org/pdf/2308.15897) (TU Dresden); [swipl-wasm](https://www.npmjs.com/package/swipl-wasm).
- [wn: WordNet library](https://pypi.org/project/wn) (OEWN 2025, CILI, omw-cmn).
- [OpenHowNet](https://ar5iv.arxiv.org/html/1901.09957): sememe knowledge base, Chinese + English.
- [NSM](https://en.wikipedia.org/wiki/Natural_semantic_metalanguage); Goddard, [Semantic molecules and semantic complexity](https://benjamins.com/catalog/rcl.8.1.05god).
- [Grammatical Framework RGL status](https://www.grammaticalframework.org/~hallgren/gf/lib/doc/status.html) (Chinese included); [Implementing controlled languages in GF](https://research.chalmers.se/en/publication/105696).
- [Kuzu archived](https://pypi.org/project/kuzu/) (Oct 2025); [Cozo maintenance question](https://docs.rs/crate/leankg/0.20.2/source/docs/plan-migrate-cozo-to-postgres-pgvector.md).
