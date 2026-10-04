// The composite dictionary, assembled from composites/ (one file per entry,
// listed by composites/index.ts) in rank order, in the shape the old
// composites.json had: { about, phases, fits, entries }, where an entry's
// forms and their hanzi are one " / "-joined string each.

import META from "./composites/meta.ts";
import { ENTRIES } from "./composites/index.ts";
import type { Composite } from "../lib/composite.ts";

export interface CompositeEntry extends Omit<Composite, "hsd" | "tts"> {
  hsd?: string;
  tts?: string;
}

const entries: CompositeEntry[] = [...(ENTRIES as Composite[])]
  .sort((a, b) => a.rank - b.rank)
  .map(({ hsd, tts, ...e }) => {
    const out: CompositeEntry = { ...e };
    if (hsd !== undefined) out.hsd = hsd.join(" / ");
    if (tts !== undefined) out.tts = tts.join(" / ");
    return out;
  });

const composites = { ...META, entries };
export default composites;
