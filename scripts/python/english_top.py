"""The 3000 most common English words, from wordfreq, for kb/yardsticks/english-top3000.json (KB_PLAN.md phase 6, K12).

Run from the repo root:  PYTHONUTF8=1 .venv-kb/Scripts/python scripts/python/english_top.py
The list is committed, so this only runs again if the yardstick should change. Words are lowercase, one per line, most
common first; wordfreq's own noise (single letters and numbers) is left out.
"""

import json
from pathlib import Path

from wordfreq import top_n_list

OUT = Path(__file__).resolve().parents[2] / "kb/yardsticks/english-top3000.json"
N = 3000


def main():
    words = [w for w in top_n_list("en", 6000) if w.isalpha() and (len(w) > 1 or w in ("a", "i"))][:N]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("[\n" + ",\n".join(json.dumps(w) for w in words) + "\n]\n", encoding="utf-8")
    print(f"english_top: {len(words)} words -> kb/yardsticks/english-top3000.json")


if __name__ == "__main__":
    main()
