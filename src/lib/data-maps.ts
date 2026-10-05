/**
 * The associative maps in src/data/maps/: how words relate, kept out of the
 * word files so a relation change is one line here and a word change never
 * has to sweep through them.
 */

/** A dictionary category: a branch (children) or a leaf (wordIds). */
export interface Category {
  key: string;
  /** null for an untitled leaf ("general"). */
  title: Record<string, string> | null;
  children?: Category[];
  wordIds?: string[];
}

export const categories = (c: Category[]): Category[] => c;

/**
 * Antonyms or synonyms. `pairs` link two words both ways and are written
 * once; `phrases` give a word a longer Hao-shuo-de form ({{word:}} refs),
 * which isn't a word and so isn't linked back.
 */
export interface Relations {
  pairs: [string, string][];
  phrases: Record<string, string[]>;
}

export const relations = (r: Relations): Relations => r;

// -> word id -> its forms: pair partners as {{word:id}}, then its phrases.
export function relationLists(r: Relations): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const add = (id: string, form: string) => out.set(id, [...(out.get(id) ?? []), form]);
  for (const [a, b] of r.pairs) {
    add(a, `{{word:${b}}}`);
    add(b, `{{word:${a}}}`);
  }
  for (const [id, forms] of Object.entries(r.phrases)) for (const f of forms) add(id, f);
  return out;
}
