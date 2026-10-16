"""Links the composites and the words to WordNet synsets through their ILI ids (KB_PLAN.md phase 6, K4).

Run from the repo root with the venv:  .venv-kb/Scripts/python scripts/python/link_wordnet.py
(or `npm run wordnet`, which also rebuilds the export first).

An entry is linked on its own when the Chinese WordNet (omw-cmn) and the English WordNet (OEWN) agree on exactly one
synset: the synsets of its hanzi, and the synsets of the words in its English gloss, share one ILI. Everything else goes
to review with its candidates and the reason (/__review/?wordnet). Decisions the author made on that page are read from
review/decisions/wordnet-1.json: { "decisions": { "<zh>": { "ilis": ["i123", ...] } } } (an empty list means "no synset fits") and win over the
automatic rule.

Reads  kb/cache/english-in.json            (scripts/english-export.js)
Writes kb/wordnet/links.json               (committed: the links, the review list)
       kb/cache/english-index.json         (gitignored: English words -> ILIs, ILI -> definition and hypernyms)
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
    for part in re.split(r"[,;/]", re.sub(r"\([^)]*\)", "", en)):
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

    linked, review, counts = {}, [], {"auto": 0, "decided": 0}
    for c in data["composites"]:
        z, gloss_text, pos = c["zh"], c["en"], c["pos"]
        want = POS.get(pos)
        if z in decisions:
            if decisions[z]["ilis"]:
                linked[z] = decisions[z]["ilis"]
            counts["decided"] += 1
            continue
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
        elif b and len(b) <= MAX_CANDIDATES:
            entry["why"] = "no-chinese"
            entry["candidates"] = [describe(s) for s in b.values()]
        else:
            entry["why"] = "no-chinese" if b else "no-synset"
            entry["candidates"] = [describe(s) for s in list(b.values())[:MAX_CANDIDATES]]
        review.append(entry)

    # the words take the links of the composite that has their hanzi
    words = {w["id"]: linked[w["hanzi"]] for w in data["words"] if w["hanzi"] in linked}

    LINKS_PATH.parent.mkdir(parents=True, exist_ok=True)
    why = {}
    for r in review:
        why[r["why"]] = why.get(r["why"], 0) + 1
    out = {
        "about": "ILI links of composites and words (scripts/python/link_wordnet.py). Linked on their own when omw-cmn and OEWN "
        "agree on one synset; the rest wait in `review` for /__review/?wordnet.",
        "sources": {"english": "oewn:2025", "chinese": "omw-cmn:2.0"},
        "counts": {"composites": len(data["composites"]), "linked": len(linked), "auto": counts["auto"], "decided": counts["decided"], "review": len(review), "reviewWhy": why, "words": len(words)},
        "linked": linked,
        "words": words,
        "review": review,
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
        ]
    ) + "\n}\n"
    LINKS_PATH.write_text(text, encoding="utf-8")
    print("link_wordnet:", json.dumps(out["counts"], ensure_ascii=False))

    if "--links-only" in sys.argv:  # the index takes four minutes and only changes with the WordNet release
        return
    # the English index, for src/lib/kb/english.js
    lemmas, synsets = {}, {}
    for s in en.synsets():
        if not s.ili:
            continue
        synsets[s.ili] = {"p": norm_pos(s.pos), "d": s.definition() or "", "l": s.lemmas()[:8], "h": [h.ili for h in s.hypernyms() if h.ili]}
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
    INDEX_PATH.parent.mkdir(parents=True, exist_ok=True)
    INDEX_PATH.write_text(json.dumps({"lemmas": lemmas, "synsets": synsets}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"english index: {len(lemmas)} English words, {len(synsets)} synsets -> kb/cache/english-index.json")


if __name__ == "__main__":
    sys.exit(main())
