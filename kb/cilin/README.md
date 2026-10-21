# Cilin, the Chinese thesaurus (local copy, not committed)

Downloaded on 2026-10-21 at the author's request (TAGS_PLAN.md Q6) from
[One-sixth/HIT-IR-Lab-Tongyici-Cilin-Extended](https://github.com/One-sixth/HIT-IR-Lab-Tongyici-Cilin-Extended), an archive of the 哈工大社会计算与信息检索研究中心 (HIT-SCIR) 同义词词林扩展版.

- `cilin_ext.txt` (893 KB): 17,817 lines, 77,457 distinct words. One line per small group: a 7-character code (`Aa01A01`: big class A, middle class a, small class 01, then levels 4 and 5), a mark, then the words. The mark `=` means synonyms, `#` means related words, `@` means a word with no others.
- `cilin_ext_description.pdf` (105 KB): the HIT description of the edition.

The licence of the data is not stated in the archive (the original is described as free for research), so the files are in .gitignore and are only read by the tag proposals (TAGS_PLAN.md C2). Do not commit or republish them.
