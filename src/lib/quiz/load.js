// The app's pools (browser only): every lesson's file, fetched when a test first starts (the same chunks the lesson
// pages load), read into pools once and kept for the session. The pools are made from the lessons the page already
// has, so there is no separate question file to keep in step: change a lesson, and its pool changes with it.

import dictionaryData from '../../data/dictionary.ts';
import { LESSON_IDS, lessonNumber } from '../../content/book.js';
import { lessonSource, dictFrom } from './source.js';
import { buildPools } from './pool.js';

const files = import.meta.glob('../../content/lessons/*/index.ts');

let pools = null;

// -> a promise of the pools, in book order (pool.js); a failed load is forgotten, so the next try fetches again.
export function loadPools() {
  pools ??= Promise.all(
    LESSON_IDS.map(async (id) => ({ id, number: lessonNumber(id), entries: (await files[`../../content/lessons/${id}/index.ts`]()).default })),
  )
    .then((lessons) => {
      const dict = dictFrom(dictionaryData);
      return buildPools(lessons.map((l) => lessonSource(l, dict)), dict);
    })
    .catch((e) => {
      pools = null;
      throw e;
    });
  return pools;
}

// -> a word's pinyin, for the missed-words lists.
export const wordTerm = (id) => dictionaryData.words[id]?.term ?? id;
