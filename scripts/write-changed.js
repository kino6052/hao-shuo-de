// Writes a generated file only when its text changed. An unchanged file keeps its modified time, so the stamps that look
// at it (scripts/stamp.js: the gates' remembered reports, the KB source, the data bundle, the generate steps) stay valid
// and nothing downstream runs again for a file that came out the same.
//
//   writeChanged(path, text)  -> true when it wrote, false when the file already held this text
//
// Line endings do not count as a change: a checkout may have turned the file's LF into CRLF.

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const lf = (text) => text.replace(/\r\n/g, '\n');

export function writeChanged(path, text) {
  let old = null;
  try {
    old = readFileSync(path, 'utf8');
  } catch {
    /* not there yet */
  }
  if (old !== null && lf(old) === lf(text)) return false;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, 'utf8');
  return true;
}
