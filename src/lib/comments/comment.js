// The readers' comments (COMMENTS_PLAN.md): the numbers the rules check (firestore.rules, CM5, CM6) and the pure
// parts of sending and collecting a comment. The browser's side is client.js; the rules' own tests are rules.test.js.
//
//   commentDoc(input) -> { doc } | { error }     a comment as the rules take it, but for its createdAt
//   counterPlans(prev, now) -> { plans } | { wait } | { full }     the reader's counter to send with it
//   quoteOf(text)                                 the part's text in one line, cut to LIMITS.quote (CM3)
//   exportOf(comments)                            the admin's JSON (C1, C2)

export const LIMITS = { text: 1000, page: 80, part: 80, quote: 300, version: 40 };
export const LANGS = ['eng', 'rus', 'zh'];
export const GAP_MS = 15_000; // at least this long between two comments from one reader
export const DAY_MS = 86_400_000;
export const PER_DAY = 30;

// -> s cut to at most `most` UTF-16 units (what the rules count), never inside a character
function clip(s, most) {
  if (s.length <= most) return s;
  let out = '';
  for (const ch of s) {
    if (out.length + ch.length > most) break;
    out += ch;
  }
  return out;
}

export function quoteOf(text) {
  const line = String(text ?? '').replace(/\s+/g, ' ').trim();
  return line.length <= LIMITS.quote ? line : `${clip(line, LIMITS.quote - 1)}…`;
}

// input: { text, page, part, quote, lang, version, uid, signedIn }. -> { doc }, or { error: 'empty' | 'long' } for
// the reader's text; the rest is cut to fit, since the reader cannot change it
export function commentDoc({ text, page, part, quote, lang, version, uid, signedIn }) {
  const body = String(text ?? '').trim();
  if (!body) return { error: 'empty' };
  if (body.length > LIMITS.text) return { error: 'long' };
  return {
    doc: {
      text: body,
      page: clip(String(page ?? ''), LIMITS.page) || 'unknown',
      part: clip(String(part ?? ''), LIMITS.part) || 'page',
      quote: quoteOf(quote),
      lang: LANGS.includes(lang) ? lang : 'eng',
      version: clip(String(version ?? ''), LIMITS.version) || 'unknown',
      uid,
      signedIn: signedIn === true,
    },
  };
}

// The counter (commentLimits/<uid>) a comment goes with, as the rules want it (CM6). prev: the stored one with its
// times in ms ({ last, since, count, total }), or null for a first comment. -> { wait: ms } when it is too soon,
// { full: true } when the day's comments are used up, else { plans }: the counter's next values, the likelier first
// (`since: 'now'` is the server's time, 'keep' the stored one). The page sends the second when the rules refuse the
// first: near the day's end this browser's clock and the server's can disagree on which day it is.
export function counterPlans(prev, now = Date.now()) {
  if (!prev) return { plans: [{ since: 'now', count: 1, total: 1 }] };
  if (now - prev.last < GAP_MS) return { wait: GAP_MS - (now - prev.last) };
  const fresh = { since: 'now', count: 1, total: prev.total + 1 };
  const same = { since: 'keep', count: prev.count + 1, total: prev.total + 1 };
  const room = same.count <= PER_DAY;
  if (now - prev.since >= DAY_MS) return { plans: room ? [fresh, same] : [fresh] };
  return room ? { plans: [same, fresh] } : { full: true };
}

const iso = (ms) => (typeof ms === 'number' ? new Date(ms).toISOString() : null);

// comments: { id, createdAt (ms), ...fields }. -> { exportedAt, count, comments }, newest first
export function exportOf(comments, at = new Date()) {
  const list = [...comments]
    .sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
    .map((c) => ({
      id: c.id,
      createdAt: iso(c.createdAt),
      page: c.page,
      part: c.part,
      quote: c.quote,
      text: c.text,
      lang: c.lang,
      version: c.version,
      signedIn: c.signedIn === true,
      uid: c.uid,
      done: c.done === true,
    }));
  return { exportedAt: at.toISOString(), count: list.length, comments: list };
}
