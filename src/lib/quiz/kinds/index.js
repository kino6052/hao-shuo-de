// One template per question kind (BOOK_PLAN.md §3): adding a kind is one file here and one line below.
// Not made yet: "Spot the mistake", which needs wrong sentences checked by the KB parser (kb_parse).

import meaning from './meaning.js';
import word from './word.js';
import tone from './tone.js';
import listen from './listen.js';
import blank from './blank.js';
import order from './order.js';
import translation from './translation.js';
import exercise from './exercise.js';

export const TEMPLATES = [meaning, word, tone, listen, blank, order, translation, exercise];
