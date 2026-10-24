// The tree translator as one request of the translator page (BROWSER_TRANSLATOR_PLAN.md B5): the daemon runs it when a
// request says mode "tree". Step 0 corrects the English; each sentence becomes a meaning tree that code checks, builds
// and verifies, up to three tries (tree-translate.js); a sentence that still does not build goes to the quick translator
// (step 5), and the others keep their trees. The result is the translator's (output.js assemble), so the page shows it
// as it shows any other, with more: what step 0 changed, and how each sentence was made. A sentence made from a tree
// carries the tree as one line (tree.js treeText) and the sentence it built, so the page can build it again with its own
// copy of the grammar and see that it reads the same (src/translator/tree-check.js).
//
//   await treeRequest(request, { kb, translator, quick, onStep, model, batch }) -> result
//     request: { text, lesson }; kb: the open KB (the checks and the level); translator: makeTreeTranslator's (with
//     wordsFor and coreWords); quick(text) -> a quick result (quick.js quickTranslate) for the sentences left over, or
//     null to leave them out with a problem; onStep('one line') says what it is doing; batch (8): the sentences one
//     call of the tree step makes, the calls running side by side (T-eng measured 8)
//
//   result.mode 'tree'; result.correction { status, changes, questions, reason }: step 0, its questions when it asks,
//   the reason when it refuses (then there are no sentences); each sentence: how 'tree' or 'quick', and for a tree
//   one: tree (one line), refs, readback (the tree's English), tries

import { refTerm, replaceWordRefs } from '../word-refs.js';
import { treeText } from '../grammar/tree.js';
import { levelOf, verifyAnswer } from './verify.js';
import { assemble } from './output.js';

export const TREE_STEP = {
  correcting: 'Correcting the English',
  trees: 'Making the meaning trees',
  quick: 'Translating the sentences the trees could not say',
};

const seconds = (ms) => Math.round(ms / 100) / 10;

// -> the pinyin a reader sees for a sentence with word refs: Wǒ chī fàn.
export const pinyinOf = (refs, words) => replaceWordRefs(refs, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export async function treeRequest(request, { kb, translator, quick = null, onStep = () => {}, model = null, batch = 8 }) {
  const started = Date.now();
  const timing = {};
  const words = kb.source.words;
  const { lesson } = levelOf(kb, request.lesson);
  onStep(TREE_STEP.correcting);
  let t = Date.now();
  const [correction] = await translator.correctMany([request.text]);
  timing.correcting = seconds(Date.now() - t);
  const said = { status: correction.status, changes: correction.changes ?? [], questions: correction.questions ?? [], reason: correction.reason ?? '' };
  const finish = (sentences, problems = []) => {
    timing.total = seconds(Date.now() - started);
    const answer = { sketch: [], sentences: sentences.map((s) => ({ pinyin: s.pinyin, english: s.english, literally: s.literally ?? '', reading: '', source: s.how, ideas: [] })), cast: [], structures: [], gaps: [], notes: '' };
    const verified = verifyAnswer(kb, answer, { lesson });
    const result = assemble({ request, answer, verified, model, timing });
    return {
      ...result,
      mode: 'tree',
      correction: said,
      sentences: result.sentences.map((s, i) => {
        const { how, tree, refs, readback, tries, at } = sentences[i];
        // the tree's own check found the meant reading: the first one (Q7), or a later one with the check off
        const check = how === 'tree' ? { ...s.check, means: at === 0 ? 'yes' : 'yes-with-others' } : s.check;
        return { ...s, check, how, ...(how === 'tree' ? { tree, built: refs, readback, tries } : {}) };
      }),
      problems: [...result.problems, ...problems],
    };
  };
  if (correction.status !== 'ok') return finish([]);

  onStep(TREE_STEP.trees);
  t = Date.now();
  const groups = [];
  for (let i = 0; i < correction.sentences.length; i += batch) groups.push(correction.sentences.slice(i, i + batch));
  const made = (await Promise.all(groups.map((group) => translator.translateMany(group)))).flat();
  timing.trees = seconds(Date.now() - t);
  const sentences = made.map((r, i) =>
    r.ok
      ? { how: 'tree', english: correction.sentences[i], pinyin: pinyinOf(r.refs, words), literally: r.readback, tree: treeText(r.tree), refs: r.refs, readback: r.readback, tries: r.tries, at: r.at }
      : { how: 'quick', english: correction.sentences[i], pinyin: '' },
  );
  let left = sentences.filter((s) => s.how === 'quick');
  const problems = [];
  if (left.length && quick) {
    onStep(TREE_STEP.quick);
    t = Date.now();
    const q = await quick(left.map((s) => s.english).join(' ')).catch((e) => (problems.push(`the quick translator failed: ${e.message}`), null));
    timing.quick = seconds(Date.now() - t);
    const got = q?.sentences ?? [];
    // the quick translator splits the text again: one sentence each as a rule, and if not, its own sentences stand in
    // the place of the ones left over
    if (got.length === left.length) left.forEach((s, i) => Object.assign(s, { pinyin: got[i].pinyin ?? '', literally: got[i].literally ?? '' }));
    else if (got.length) {
      sentences.splice(sentences.indexOf(left[0]), 0, ...got.map((g) => ({ how: 'quick', english: g.english, pinyin: g.pinyin ?? '', literally: g.literally ?? '' })));
      for (const s of left) sentences.splice(sentences.indexOf(s), 1);
      left = [];
    }
  }
  const lost = left.filter((s) => !s.pinyin).length;
  if (lost) problems.push(`${lost} sentence${lost === 1 ? '' : 's'} could not be made from a tree and ${lost === 1 ? 'was' : 'were'} left out`);
  return finish(
    sentences.filter((s) => s.pinyin),
    problems,
  );
}
