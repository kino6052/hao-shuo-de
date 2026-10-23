// The question model (BOOK_PLAN.md Phase 5): a question is plain data, made by one template per kind (kinds/).
//
//   {
//     id        unique in the book: "<lesson>/<module>/<kind>/<item>"
//     kind      one of KINDS
//     lesson    the lesson id it tests;  module: the module that teaches it;  pattern: the module's pattern id or null
//     source    the item it is made from ("<lesson>/<entry key>"): one try never asks two questions on one item
//     prompt    { text?: Localized, pinyin?, hanzi?, audio?: { pinyin, hanzi, file } }
//     choices   [{ text: Localized | { any }, key }]  (choice kinds) -- choices[answer] is right
//     answer    the right choice's index; for "order", the tokens in the right order
//     tokens    (order only) the words to put in order, in the right order
//     words     the word ids it asks about;  uses: every word id in its prompt, answer and wrong choices
//     help      Localized: the module's pattern line, shown after a wrong answer
//   }
//
// Localized is { en, ru?, zh? }; { any } is a Hao-shuo-de text, the same in every language.

export const KINDS = ['meaning', 'word', 'tone', 'listen', 'blank', 'order', 'translation', 'exercise'];
export const CHOICE_KINDS = KINDS.filter((k) => k !== 'order');

// -> a comparable form of a text: lower case, no punctuation, hyphens or extra spaces (tone marks kept: they tell
// words apart).
export function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[.,!?;:"'“”‘’«»()…。，！？]/g, '')
    .replace(/[-\s]+/g, ' ')
    .trim();
}

// -> the text of a Localized or { any } in a language (en, ru or zh), English when not translated.
export function say(text, lang = 'en') {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text.any ?? text[lang] ?? text.en ?? '';
}

// -> the key that tells choices apart (two choices with one key would both be right).
export const choiceKey = (text) => normalize(say(text, 'en'));

// -> the question, checked; throws on a malformed one, so a template can't ship a broken question.
export function makeQuestion(q) {
  const where = q.id ?? '(no id)';
  for (const f of ['id', 'kind', 'lesson', 'module', 'source']) if (!q[f]) throw new Error(`question ${where}: no ${f}`);
  if (!KINDS.includes(q.kind)) throw new Error(`question ${where}: unknown kind "${q.kind}"`);
  const out = { pattern: null, words: [], uses: [], help: {}, ...q };
  out.words = [...new Set(out.words)];
  out.uses = [...new Set([...out.uses, ...out.words])];
  if (q.kind === 'order') {
    if (!Array.isArray(q.tokens) || q.tokens.length < 2) throw new Error(`question ${where}: an order question needs at least 2 tokens`);
    out.answer = [...q.tokens];
  } else {
    if (!Array.isArray(q.choices) || q.choices.length < 2) throw new Error(`question ${where}: needs at least 2 choices`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length) throw new Error(`question ${where}: answer is not a choice`);
    out.choices = q.choices.map((c) => ({ ...c, key: c.key ?? choiceKey(c.text) }));
    const keys = out.choices.map((c) => c.key);
    if (new Set(keys).size !== keys.length) throw new Error(`question ${where}: two choices say the same thing`);
  }
  return out;
}

// -> whether a response is right: a choice index, or (order) the tokens as the learner put them.
export function isCorrect(q, response) {
  if (q.kind === 'order') {
    return Array.isArray(response) && response.length === q.answer.length && response.every((t, i) => normalize(t) === normalize(q.answer[i]));
  }
  return response === q.answer;
}
