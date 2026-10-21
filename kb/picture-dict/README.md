# Picture dictionary (local only)

`entries.json` was parsed from the text of a Chinese-English bilingual visual dictionary (a PDF the author owns, kept outside the repo):
pages with a section, a page title and word / pinyin / English entries. It served as a hint when the topic net was written and when the composites
were tagged (TAGS_PLAN.md C2, C4); it is not data of the dictionary and is not committed. Parse script: `pd-parse.mjs` in the session scratchpad (not kept);
the format is `{ pages: [{ n, section, title, entries: [{ zh, py, en }] }] }`, printed page = pdf page - 2.
