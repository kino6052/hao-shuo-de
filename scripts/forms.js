// The composite descriptions read by the patterns and by the Word Builder (src/lib/kb/form-report.js).
//
//   formsOf(kb) -> the report

import { formReport } from '../src/lib/kb/form-report.js';
import { builderForm } from '../src/lib/word-builder-parse.js';
import dictionaryData from '../src/data/dictionary.ts';

export const formsOf = (kb) =>
  formReport({
    composites: kb.source.composites,
    parse: (form) => kb.parser.parse(form, { maxTrees: 1, forms: true }),
    builderReads: (form) => builderForm(dictionaryData, form) != null,
    words: kb.source.words,
  });
