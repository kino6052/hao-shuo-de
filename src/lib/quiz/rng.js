// Seeded randomness for the tests (BOOK_PLAN.md §3, D66): a try is drawn from a seed, so the same seed shows the
// same try again, and a test can check a draw without depending on Math.random.
//
// rngFrom(seed) -> () => a number in [0, 1). The seed is a number or any string ("who-does-what/42").

// -> a 32-bit hash of a string (FNV-1a), to seed from text.
export function hashSeed(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

// mulberry32: small, fast, and good enough to spread questions.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// -> a random number source from a seed (number or string); a function is passed through, so a caller can inject one.
export function rngFrom(seed) {
  if (typeof seed === 'function') return seed;
  return mulberry32(typeof seed === 'number' ? seed : hashSeed(String(seed)));
}

// -> a fresh seed for a new try (the app's "try again"); everything after it is deterministic.
export const newSeed = () => (Math.random() * 2 ** 32) >>> 0;

// -> a shuffled copy (Fisher-Yates).
export function shuffle(list, rng) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// -> an index picked with probability proportional to its weight, or -1 when every weight is 0.
export function weightedIndex(weights, rng) {
  const total = weights.reduce((a, w) => a + w, 0);
  if (!(total > 0)) return -1;
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r < 0 && weights[i] > 0) return i;
  }
  for (let i = weights.length - 1; i >= 0; i--) if (weights[i] > 0) return i;
  return -1;
}
