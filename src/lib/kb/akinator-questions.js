// The words of the Akinator: the plain question for each feature, and the choices of the fixed first question (AKINATOR_PLAN.md
// B1, A4). Every sentence the person reads is in the STRINGS table, so another language is a new table and no new code (D5b).
//
//   makeDescribe({ topicNet, kindNet, patterns, words, themes, strings }) -> (feature) => { text, hint? }
//   firstChoices({ kindNet, strings }) -> [{ feature, label }]   the choices of "What do you want to say?"
//   plainAnswer(answer, strings)       -> the label of an answer

import { replaceWordRefs, refTerm } from '../word-refs.js';

export const STRINGS = {
  en: {
    firstQuestion: 'What do you want to say?',
    // the ten categories (the top of the kind net), then a whole sentence
    first: {
      thing: 'A thing, a person or a place',
      'how-much': 'How much or how many',
      'what-kind': 'What something is like',
      relation: 'How one thing stands to another',
      where: 'Where',
      when: 'When',
      position: 'How something is placed or held',
      having: 'Having, wearing or owning',
      doing: 'Doing something',
      undergoing: 'Something that happens to someone',
      'grammar-words': 'A little word that holds a sentence together',
    },
    situation: 'A whole situation, a full sentence',
    kind: 'Does it count as “{title}”?',
    topic: 'Do you meet it when talking about “{title}”?',
    theme: 'Is it about {description}?',
    category: 'Is it about {description}?',
    pattern: 'Does it use the pattern “{meaning}”?',
    word: 'Does it use the word {term} ({hanzi})?',
    type: 'Is it {description}?',
    source: 'Is it {description}?',
    other: 'Does it have “{feature}”?',
    // the ten categories of a pattern, said plainly
    categories: {
      substance: 'things and people',
      quantity: 'amounts',
      quality: 'what something is like',
      relation: 'how things stand to each other',
      place: 'where',
      time: 'when',
      position: 'how something is placed',
      state: 'having or wearing',
      action: 'doing',
      affection: 'what happens to someone',
    },
    types: { word: 'a single word', composite: 'a word made from the core words', pattern: 'a way of building a sentence', sentence: 'a whole sentence' },
    answers: { yes: 'Yes', probably: 'Probably', unknown: "Don't know", 'probably-not': 'Probably not', no: 'No' },
  },
};

const fill = (template, values) => template.replace(/{(\w+)}/g, (_, k) => values[k] ?? '');

export function makeDescribe({ topicNet, kindNet, patterns = [], words = {}, themes = {}, strings = STRINGS.en }) {
  const patternById = new Map(patterns.map((p) => [p.id, p]));
  const plain = (text) => replaceWordRefs(String(text ?? ''), (id, kind) => refTerm(words[id]?.term ?? id, kind));
  const title = (net, id) => net.byId.get(id)?.title?.eng ?? id;
  return (feature) => {
    const at = feature.indexOf(':');
    const family = feature.slice(0, at);
    const id = feature.slice(at + 1);
    switch (family) {
      case 'kind':
        return { text: fill(strings.kind, { title: title(kindNet, id) }), hint: kindNet.byId.get(id)?.note ?? '' };
      case 'topic':
        return { text: fill(strings.topic, { title: title(topicNet, id) }), hint: topicNet.byId.get(id)?.note ?? '' };
      case 'theme':
        return { text: fill(strings.theme, { description: themes[id] ?? id }) };
      case 'cat':
        return { text: fill(strings.category, { description: strings.categories[id] ?? id }) };
      case 'pattern':
        return { text: fill(strings.pattern, { meaning: plain(patternById.get(id)?.meaning?.eng ?? id) }) };
      case 'word':
        return { text: fill(strings.word, { term: words[id]?.term ?? id, hanzi: words[id]?.hanzi ?? '' }) };
      case 'type':
        return { text: fill(strings.type, { description: strings.types[id] ?? id }) };
      default:
        return { text: fill(strings.other, { feature }) };
    }
  };
}

export function firstChoices({ kindNet, strings = STRINGS.en }) {
  const out = kindNet.tops.map((id) => ({ feature: `kind:${id}`, label: strings.first[id] ?? kindNet.byId.get(id)?.title?.eng ?? id }));
  out.push({ feature: 'type:sentence', label: strings.situation });
  return out;
}

export const plainAnswer = (answer, strings = STRINGS.en) => strings.answers[answer] ?? answer;
