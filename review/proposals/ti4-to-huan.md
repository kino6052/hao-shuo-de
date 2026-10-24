# Proposal: huàn 换 as a core word in place of tì 替

Asked by the author on 2026-10-24 from the phone ("instead of using ti4 we should use huan as core vocab; explore what it
allows us to say and maybe restructure composites"). Written by Claude from `kb word ti4`, `kb remove ti4` and
`kb add 换`. Nothing in `src/` is changed yet: the swap needs the decisions at the end.

## What each word is

| | tì 替 (ti4, core now) | huàn 换 (composite #849 now) |
| --- | --- | --- |
| Kind | preposition: tì + person + verb | verb: huàn + thing; huàn + person + verb |
| Means | in someone's place, on their behalf | swap, exchange, change one thing for another |
| Mandarin frequency | #2378 | #852 (almost 3x more common) |
| Paraphrase today | "X bù zuò, wǒ zuò" (clumsy, so ti4 is an atom) | "gěi X, ná Y" (plain) |
| Coverage items it carries | 0 | 0 |
| Sound clashes if added | - | 0 |
| Used in | 11 composites, 7 book sentences, grammar `ti-instead`, card in lesson 21 (inside-a-sentence/give) | 1 composite (itself) |

## What huàn lets us say that tì can't

Everyday swaps that today need a two-clause description:

- huàn yī-fu (change clothes), huàn chē (change trains: 换乘 now "xià chē, shàng bié-de chē"), huàn fēi-jī (转机)
- huàn jīn (change money; 汇率 "how much money of another country you get when you huàn"), huàn gōng-zuò, huàn dì-fang
- huàn yī-xià (swap for a moment), huàn bié-de (take another one)
- replacing: 更换 / 代替 / 替代 / 取代 become "huàn" / "bù yòng X le, huàn Y" / "ná Y huàn X"
- someone else's turn: "Wǒ bù qù, huàn tā qù." (I won't go; he goes instead) -- real Mandarin, and the closest huàn
  gets to tì's meaning.

`kb add 换` only counts the forms that literally contain "gěi … ná" (交换, 更换, 危害 get shorter; 换 becomes spelled),
so the real gain is larger than it reports; the list above is by hand.

## What we lose with tì, and what covers it

tì's real job is "on someone's behalf". huàn does not mean that ("tā huàn wǒ qù" is not Mandarin), so a word-for-word
replace op would produce wrong sentences. The cover is bāng 帮 (already core): "wǒ bāng nǐ shuō" (I'll say it for you),
"wǒ bāng xiǎo nǚ-rén ná bāo". The "instead of me" sense goes to "huàn tā qù" or "wǒ bù qù, tā qù".

The 11 composites that use tì (7 lose every form):

| Composite | Now | Proposed |
| --- | --- | --- |
| 替 tì | tì | drop, or "huàn X" / "bāng X" (fit plain) |
| 代替 dàitì | tì / yòng Y tì X zuò | huàn / bù yòng X le, huàn Y |
| 替代 tìdài | yòng Y tì X zuò / kě-yǐ tì X zuò-de dōng-xi | huàn / kě-yǐ huàn X-de dōng-xi |
| 取代 qǔdài | tì X zuò / yòng Y tì X zuò | huàn / bù yòng X le, huàn Y |
| 代 dài | tì / hěn cháng-de shí-jiān | huàn / hěn cháng-de shí-jiān (head moves to huàn) |
| 代表 dàibiǎo | tì X shuō-de rén / tì X … | bāng X shuō huà-de rén (form checked: ok) |
| 代理 dàilǐ | tì X zuò X yào zuò-de / tì X zuò | bāng X zuò X yào zuò-de |
| 大使 dàshǐ | zài bié-de guó tì tā-de guó shuō huà-de rén | … bāng tā-de guó shuō huà-de rén |
| 转告 zhuǎngào | (form 2) tì X duì Y shuō | bāng X duì Y shuō |
| 转交 zhuǎnjiāo | (form 1) tì wǒ bǎ X gěi Y | bāng wǒ bǎ X gěi Y |
| 委托 wěituō | (form 1) ràng bié-rén tì wǒ zuò | ràng bié-rén bāng wǒ zuò |

Plus the huàn family to rebuild: 换 (fit word), 交换, 更换, 换乘 (huàn chē), 转机 (huàn fēi-jī), 转换, 汇率.

## Decisions for the author

1. **Where huàn is taught.** tì sits in lesson 21 (inside-a-sentence/give), but bāng is only taught in lesson 26
   (everyday-patterns/help), so lesson 21 can't say "bāng nǐ shuō" (early-words gate). Options:
   a. huàn replaces tì's card in lesson 21 as a verb ("swap"), with sentences like "Wǒ gěi nǐ shū, nǐ gěi wǒ shuǐ, wǒ-men
      huàn." and "Wǒ bù qù, huàn tā qù."; the "for you" sentences move to lesson 26 with bāng.
   b. huàn goes in lesson 15 (becoming-and-making) next to biàn (become) as the other kind of change, and the tì module
      in lesson 21 is dropped.
2. **Keep or drop tì.** Swap (core stays 230: tì out, huàn in) or add huàn and keep tì (231). Note the swap trades an
   atom (tì, clumsy paraphrase) for a word with a plain paraphrase, so the "smallest set" number may move.
3. **Grammar.** `ti-instead` is retired; a new pattern `huan-person` ("huàn + person + verb": someone else does it) and
   maybe "huàn + thing". Replacement "bǎ X huàn-chéng Y" needs chéng, which is not core; the forms above avoid it.

Once these are chosen, the change is one refactor list (add huan4, rewrite the 11 + 7 composites, the 7 sentences,
the card, the grammar file, remove ti4), tried with `npm run refactor -- refactors/<id>.ts --check` before `--write`.
