"""Links the composites and the words to WordNet synsets through their ILI ids (KB_PLAN.md phase 6, K4).

Run from the repo root with the venv:  .venv-kb/Scripts/python scripts/python/link_wordnet.py
(or `npm run wordnet`, which also rebuilds the export first).

An entry is linked on its own when the Chinese WordNet (omw-cmn) and the English WordNet (OEWN) agree on exactly one
synset: the synsets of its hanzi, and the synsets of the words in its English gloss, share one ILI. Everything else goes
to review with its candidates and the reason (/__review/?wordnet). An entry with no candidate at all, even after the search
is widened (any part of speech, the adjective of an -ly adverb), is not a question: it goes to `noSense` (grammar words
such as 了 and 因为, which WordNet leaves out, and fixed phrases) and stays unlinked. Decisions the author made on that page are read from
review/decisions/wordnet-1.json: { "decisions": { "<zh>": { "ilis": ["i123", ...] } } } (an empty list means "no synset fits") and win over the
automatic rule. The review list stays whole: a decided entry keeps its place there (counts.waiting is the part still undecided), so the
page can show it again and the author can change the answer.

Reads  kb/cache/english-in.json            (scripts/english-export.js)
Writes kb/wordnet/links.json               (committed: the links, the review list)
       kb/cache/english-index.json         (gitignored: English words -> ILIs, ILI -> definition, hypernyms (h), antonyms (a; ai: only
                                            through a similar sense), the wholes it is a part of (w) and its Mandarin words (z);
                                            and the irregular forms: took -> take)
"""

import json
import re
import sys
from pathlib import Path

import wn
import wn.morphy

ROOT = Path(__file__).resolve().parents[2]
IN_PATH = ROOT / "kb/cache/english-in.json"
LINKS_PATH = ROOT / "kb/wordnet/links.json"
INDEX_PATH = ROOT / "kb/cache/english-index.json"
DECISIONS_PATH = ROOT / "review/decisions/wordnet-1.json"

# our part of speech -> WordNet's; a part of speech WordNet does not split (pronoun, classifier...) is not filtered
POS = {"noun": "n", "verb": "v", "adjective": "a", "adverb": "r"}
MAX_CANDIDATES = 6


def norm_pos(p):
    return "a" if p == "s" else p


def glosses(en):
    """'quick, to run (fast)' -> ['quick', 'run']: the words a gloss offers WordNet."""
    out = []
    for part in re.split(r"[,;/?!]", re.sub(r"\([^)]*\)", "", en)):
        part = part.strip().lower()
        part = re.sub(r"^(to|a|an|the)\s+", "", part)
        if part and part not in out:
            out.append(part)
    return out


def describe(syn, cmn_lemmas=None):
    d = {"ili": syn.ili, "pos": norm_pos(syn.pos), "def": (syn.definition() or "")[:140], "lemmas": syn.lemmas()[:4]}
    if cmn_lemmas:
        d["zh"] = cmn_lemmas[:4]
    return d


def main():
    data = json.loads(IN_PATH.read_text(encoding="utf-8"))
    en = wn.Wordnet("oewn:2025")
    en = wn.Wordnet("oewn:2025", lemmatizer=wn.morphy.Morphy(en))  # "resources" finds resource
    zh = wn.Wordnet("omw-cmn:2.0")
    decisions = json.loads(DECISIONS_PATH.read_text(encoding="utf-8")).get("decisions", {}) if DECISIONS_PATH.exists() else {}

    en_cache = {}

    def english_synsets(gloss, want):
        key = (gloss, want)
        if key not in en_cache:
            found = {}
            for w in en.words(gloss):
                for s in w.synsets():
                    if s.ili and (not want or norm_pos(s.pos) == want):
                        found.setdefault(s.ili, s)
            en_cache[key] = found
        return en_cache[key]

    def widened(gloss_text):
        """The senses of a gloss in any part of speech ('between' is an adverb here, the entry says noun), and for an
        adverb in -ly the senses of its adjective ('suddenly' -> sudden). Used only when the strict search found nothing."""
        found = {}
        for g in glosses(gloss_text):
            for ili, s in english_synsets(g, None).items():
                found.setdefault(ili, s)
        if not found:
            for g in glosses(gloss_text):
                stem = g[:-3] + "y" if g.endswith("ily") else g[:-2] if g.endswith("ly") else None
                if stem and " " not in g:
                    for ili, s in english_synsets(stem, None).items():
                        found.setdefault(ili, s)
        return found

    linked, review, no_sense, counts = {}, [], [], {"auto": 0, "decided": 0}
    for c in data["composites"]:
        z, gloss_text, pos = c["zh"], c["en"], c["pos"]
        want = POS.get(pos)
        decided = z in decisions  # a decision sets the link, but the entry stays in the review list so it can be looked at again
        if decided:
            if decisions[z]["ilis"]:
                linked[z] = decisions[z]["ilis"]
            counts["decided"] += 1
        a = {}
        for s in zh.synsets(z):
            if s.ili and (not want or norm_pos(s.pos) == want):
                a.setdefault(s.ili, s)
        if not a:  # the Chinese side may file it under another part of speech
            for s in zh.synsets(z):
                if s.ili:
                    a.setdefault(s.ili, s)
        b = {}
        for g in glosses(gloss_text):
            for ili, s in english_synsets(g, want).items():
                b.setdefault(ili, s)
        common = [i for i in a if i in b]
        if len(common) == 1:
            if not decided:
                linked[z] = common
                counts["auto"] += 1
            continue
        entry = {"zh": z, "en": gloss_text, "pos": pos}
        if len(common) > 1:
            entry["why"] = "ambiguous"
            entry["candidates"] = [describe(b[i], a[i].lemmas()) for i in common[:MAX_CANDIDATES]]
        elif a:
            entry["why"] = "no-english-match"
            entry["candidates"] = [describe(e, a[i].lemmas()) for i in list(a)[:MAX_CANDIDATES] for e in en.synsets(ili=i)[:1]]
        elif b:
            entry["why"] = "no-chinese"
            entry["candidates"] = [describe(s) for s in list(b.values())[:MAX_CANDIDATES]]
        else:
            wide = widened(gloss_text)
            if not wide:  # nothing to choose from, so nothing to review: WordNet has no sense for it (grammar words, fixed phrases)
                if not decided:
                    no_sense.append({"zh": z, "en": gloss_text, "pos": pos})
                continue
            entry["why"] = "no-chinese"
            entry["candidates"] = [describe(s) for s in list(wide.values())[:MAX_CANDIDATES]]
        review.append(entry)

    # the words take the links of the composite that has their hanzi
    words = {w["id"]: linked[w["hanzi"]] for w in data["words"] if w["hanzi"] in linked}

    LINKS_PATH.parent.mkdir(parents=True, exist_ok=True)
    why = {}
    for r in review:
        why[r["why"]] = why.get(r["why"], 0) + 1
    out = {
        "about": "ILI links of composites and words (scripts/python/link_wordnet.py). Linked on their own when omw-cmn and OEWN "
        "agree on one synset; the rest are in `review` for /__review/?wordnet (an entry the author decided keeps its place there).",
        "sources": {"english": "oewn:2025", "chinese": "omw-cmn:2.0"},
        "counts": {"composites": len(data["composites"]), "linked": len(linked), "auto": counts["auto"], "decided": counts["decided"], "review": len(review), "waiting": sum(1 for r in review if r["zh"] not in decisions), "reviewWhy": why, "noSense": len(no_sense), "words": len(words)},
        "linked": linked,
        "words": words,
        "review": review,
        "noSense": no_sense,
    }
    # one entry per line: small to ship, and a change shows as the entries it touches
    def block(m):
        return "{\n" + ",\n".join(json.dumps(k, ensure_ascii=False) + ":" + json.dumps(v, ensure_ascii=False) for k, v in m.items()) + "\n}"

    text = "{\n" + ",\n".join(
        [
            '"about":' + json.dumps(out["about"], ensure_ascii=False),
            '"sources":' + json.dumps(out["sources"]),
            '"counts":' + json.dumps(out["counts"]),
            '"linked":' + block(linked),
            '"words":' + block(words),
            '"review":[\n' + ",\n".join(json.dumps(r, ensure_ascii=False) for r in review) + "\n]",
            '"noSense":[\n' + ",\n".join(json.dumps(r, ensure_ascii=False) for r in no_sense) + "\n]",
        ]
    ) + "\n}\n"
    LINKS_PATH.write_text(text, encoding="utf-8")
    print("link_wordnet:", json.dumps(out["counts"], ensure_ascii=False))

    if "--links-only" in sys.argv:  # the index takes four minutes and only changes with the WordNet release
        return
    # the English index, for src/lib/kb/english.js
    def antonym_ilis(s):
        """Antonyms are a relation between senses of words ('large' / 'small'); the synset of each is what the index keeps."""
        out = []
        for sense in s.senses():
            for a in sense.get_related("antonym"):
                i = a.synset().ili
                if i and i not in out:
                    out.append(i)
        return out

    # the Chinese WordNet's words for each sense (42,000 of them): what a missing English word would be in Mandarin
    chinese = {}
    for s in zh.synsets():
        if s.ili:
            chinese[s.ili] = [re.sub(r"\+(的|地)$", "", l) for l in s.lemmas()[:4]]

    lemmas, synsets = {}, {}
    for s in en.synsets():
        if not s.ili:
            continue
        entry = {"p": norm_pos(s.pos), "d": s.definition() or "", "l": s.lemmas()[:8], "h": [h.ili for h in s.hypernyms() if h.ili]}
        ant = antonym_ilis(s)
        if ant:
            entry["a"] = ant  # opposites of this very sense
        elif norm_pos(s.pos) == "a":  # 'warm' has none of its own, but it is similar to 'hot', whose opposite is 'cold'
            near = []
            for sim in s.relations("similar").get("similar", []):
                near += [i for i in antonym_ilis(sim) if i not in near]
            if near:
                entry["ai"] = near
        wholes = [w.ili for w in s.relations("holo_part").get("holo_part", []) if w.ili]
        if wholes:
            entry["w"] = wholes  # the wholes this is a part of (finger -> hand)
        if s.ili in chinese:
            entry["z"] = chinese[s.ili]  # its Mandarin words, from omw-cmn
        synsets[s.ili] = entry
        for lemma in s.lemmas():
            lemmas.setdefault(lemma.lower(), [])
            if s.ili not in lemmas[lemma.lower()]:
                lemmas[lemma.lower()].append(s.ili)
    # a word's senses, most common first (WordNet orders them that way); the synset order above is arbitrary
    # (only a word with more than one sense has an order to find: 6 ms a word is too slow for all 124,000)
    plain = wn.Wordnet("oewn:2025")
    many = [lemma for lemma, ilis in lemmas.items() if len(ilis) > 1]
    for n, lemma in enumerate(many):
        if n % 5000 == 0:
            print(f"ordering senses: {n}/{len(many)}", flush=True)
        ordered = []
        for w in plain.words(lemma):
            for s in w.synsets():
                if s.ili and s.ili not in ordered:
                    ordered.append(s.ili)
        lemmas[lemma] = [i for i in ordered if i in lemmas[lemma]] + [i for i in lemmas[lemma] if i not in ordered]
    # the irregular forms an entry lists (saw, seen -> see; took, taken -> take): the rules in english.js cannot guess them
    forms = {}
    for w in plain.words():
        base = w.lemma().lower()
        for f in w.forms()[1:]:
            f = f.lower()
            if f != base and " " not in f and base in lemmas and base not in forms.setdefault(f, []):
                forms[f].append(base)
    INDEX_PATH.parent.mkdir(parents=True, exist_ok=True)
    INDEX_PATH.write_text(json.dumps({"lemmas": lemmas, "synsets": synsets, "forms": forms}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"english index: {len(lemmas)} English words, {len(synsets)} synsets -> kb/cache/english-index.json")


if __name__ == "__main__":
    sys.exit(main())
