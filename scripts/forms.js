// The composite descriptions read by the patterns and by the Word Builder (src/lib/kb/form-report.js).
//
//   await formsOf(kb) -> the report

import { formReport } from '../src/lib/kb/form-report.js';
import { builderForm } from '../src/lib/word-builder-parse.js';

// the dictionary is read only when asked: importing it reads every data file again (seconds), and kb.js imports this file
export async function formsOf(kb) {
  const { default: dictionaryData } = await import('../src/data/dictionary.ts');
  return formReport({
    composites: kb.source.composites,
    parse: (form) => kb.parser.parse(form, { maxTrees: 1, forms: true }),
    builderReads: (form) => builderForm(dictionaryData, form) != null,
    words: kb.source.words,
  });
}
