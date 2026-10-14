// Is the KB's source (scripts/kb-source.js) in .cache/source.json for the files as they are now? Light enough for
// check-all to ask before it starts the gates; scripts/kb.js (reloadSource) fills it.

import { readCache } from './cache.js';
import { handedDown, stampOf } from './stamp.js';

// what the source is made from: the data, the book text, the helpers that build them, the loader
export const SOURCE_INPUTS = ['src/data', 'src/content', 'src/lib', 'scripts/kb-source.js', 'scripts/kb-source-worker.js', 'scripts/lessons.js', 'package.json'];

export const sourceStamp = () => handedDown('source', () => stampOf(SOURCE_INPUTS));
export const sourceCached = () => readCache('source.json')?.stamp === sourceStamp();
