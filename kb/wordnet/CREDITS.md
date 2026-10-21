# Where the WordNet data comes from

`links.json` holds the ids of WordNet senses (ILI ids) that the entries are linked to, and, in its `review` list, the English definitions, English words and Chinese words WordNet gives for the senses still to be decided. Those texts come from three sources, read from the packages installed by the `wn` Python library on 2026-10-21. `kb/cache/english-index.json` is built from the same sources and is not committed.

- **Open English WordNet 2025** (OEWN), [globalwordnet/english-wordnet](https://github.com/globalwordnet/english-wordnet): licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Credit: the Open English WordNet contributors; derived from Princeton WordNet 3.1.
- **Collaborative Interlingual Index 1.0** (CILI), [globalwordnet/cili](https://github.com/globalwordnet/cili): licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The ids (`i12345`) and the definitions that go with them.
- **Chinese Open Wordnet 2.0** (omw-cmn, from [omwn/omw-data](https://github.com/omwn/omw-data)), Shan Wang and Francis Bond, 2013. Citation: *Building the Chinese Open Wordnet (COW): Starting from Core Synsets*, Proceedings of the 11th Workshop on Asian Language Resources, 2013. Its license (a permissive WordNet-style license, the file `omw-cmn/LICENSE` in the package) asks that its copyright notice and disclaimer appear on **all copies** of the data, including changed ones. The notice follows.

> Chinese Open Wordnet Copyright 2013, 2014 by Francis Bond and Shan Wang. All rights reserved.
>
> This software and database is being provided to you, the LICENSEE under the following license. By obtaining, using and/or copying this software and database, you agree that you have read, understood, and will comply with these terms and conditions: Permission to use, copy, modify and distribute this software and database and its documentation for any purpose and without fee or royalty is hereby granted, provided that you agree to comply with the following copyright notice and statements, including the disclaimer, and that the same appear on ALL copies of the software, database and documentation, including modifications that you make for internal use or for distribution.
>
> THIS SOFTWARE AND DATABASE IS PROVIDED "AS IS" AND WE MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED. BY WAY OF EXAMPLE, BUT NOT LIMITATION, WE MAKE NO REPRESENTATIONS OR WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE LICENSED SOFTWARE, DATABASE OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.
>
> Title to copyright in this software, database and any associated documentation shall at all times remain with the copyright holders and LICENSEE agrees to preserve same.

## What may be shown on the published site

Nothing from these sources is on the site today (the knowledge base runs in the dev server and in Claude's tools). If something is shown later:

- OEWN and CILI text: allowed with credit and a link to the license (CC BY 4.0), and a note if it was changed.
- COW Chinese words: allowed, with the notice above on the same page (or one credits page the page links to).
- The ids alone (`i12345`) carry no text and need only the CILI credit.

Checked by Claude on 2026-10-21 from the license files inside the packages; this is not legal advice.
