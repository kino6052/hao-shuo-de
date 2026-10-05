// The knowledge base's fixed lists: what src/data/coverage.json must cover in
// full, kept apart from that file so that deleting an item from it can't make
// the gate pass. scripts/check-coverage.js checks the "atoms" group against
// NSM_PRIMES, "categories" against ARISTOTLE_CATEGORIES, and "grammar"
// against CORE_GRAMMAR, key for key.

// The 65 semantic primes of Natural Semantic Metalanguage (Goddard and
// Wierzbicka, 2014), in their usual groups.
export const NSM_PRIMES = [
  // substantives
  'I', 'YOU', 'SOMEONE', 'SOMETHING', 'PEOPLE', 'BODY',
  // relational substantives
  'KIND', 'PART',
  // determiners
  'THIS', 'THE SAME', 'OTHER',
  // quantifiers
  'ONE', 'TWO', 'SOME', 'ALL', 'MUCH', 'LITTLE',
  // evaluators and descriptors
  'GOOD', 'BAD', 'BIG', 'SMALL',
  // mental predicates
  'THINK', 'KNOW', 'WANT', "DON'T WANT", 'FEEL', 'SEE', 'HEAR',
  // speech
  'SAY', 'WORDS', 'TRUE',
  // actions, events, movement
  'DO', 'HAPPEN', 'MOVE',
  // existence and possession
  'BE SOMEWHERE', 'THERE IS', 'BE SOMEONE', 'MINE',
  // life and death
  'LIVE', 'DIE',
  // time
  'WHEN', 'NOW', 'BEFORE', 'AFTER', 'A LONG TIME', 'A SHORT TIME', 'FOR SOME TIME', 'MOMENT',
  // space
  'WHERE', 'HERE', 'ABOVE', 'BELOW', 'FAR', 'NEAR', 'SIDE', 'INSIDE', 'TOUCH',
  // logical concepts
  'NOT', 'MAYBE', 'CAN', 'BECAUSE', 'IF',
  // intensifier, augmentor, similarity
  'VERY', 'MORE', 'LIKE',
];

// Aristotle's ten categories (Categories, 1b25): what a thing is, and the nine
// things that can be said of it.
export const ARISTOTLE_CATEGORIES = [
  'substance', 'quantity', 'quality', 'relation', 'place',
  'time', 'position', 'state', 'action', 'affection',
];

// The core grammar and relationships a sentence needs, by kind.
export const CORE_GRAMMAR = [
  // saying no, asking
  'not', 'dont', 'yes-no', 'question-word',
  // time and aspect
  'happened', 'ever', 'ongoing', 'future', 'when',
  // possession and number
  'owner', 'more-people', 'count',
  // comparison and degree
  'compare', 'most', 'same', 'degree',
  // linking ideas
  'because', 'if', 'but', 'and', 'or', 'also', 'all',
  // movement and result
  'direction', 'result', 'can-cant',
  // ability and wish
  'can', 'want',
  // place and the parts of an event
  'location', 'from', 'to', 'with', 'for',
  // change and making
  'change', 'make',
  // describing, suggesting, naming
  'describe', 'suggest', 'name',
];
