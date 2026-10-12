# Parse report: lessons 1-4

70 of 81 sentences parse (86%). A sentence that does not parse is a gap in the grammar patterns (src/data/grammar/), or a sentence worth rewording; this report keeps them in view.

Left out: 1 answer is English text that only names a word or two, not a Hao-shuo-de sentence (sounds-and-symbols/no-word-boundaries).

## By lesson

| Lesson | Sentences | Parse | Rate |
| --- | --- | --- | --- |
| 1. sounds-and-symbols | 0 | 0 | no Hao-shuo-de sentences |
| 2. words-and-sentences | 20 | 20 | 100% |
| 3. modifying-nouns | 24 | 24 | 100% |
| 4. pointing | 37 | 26 | 70% |

## Patterns used

- subject-predicate: in 70 sentences
- shi-copula: in 28 sentences
- de-modifier: in 25 sentences
- hen-adjective: in 23 sentences
- bu-negation: in 7 sentences
- stacked-modifiers: in 1 sentence

## What does not parse

### stopped at "gè" (10)

- Zhè-ge rén. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 3); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP zhè] [? gè] [? rén]
- Nà-ge dòng-wù. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 4); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP nà] [? gè] [? dòng] [? wù]
- Nà-ge nǚ-rén. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 4); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP nà] [? gè] [? nǚ] [? rén]
- Zhè-ge zhíwù hěn hǎo. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 5); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP zhè] [? gè] [? zhíwù] [? hěn] [? hǎo]
- Nà-ge dōng-xi shì zhíwù. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 6); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP nà] [? gè] [? dōng] [? xī] [? shì] [? zhíwù]
- Zhè-ge shì dòng-wù. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 5); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP zhè] [? gè] [? shì] [? dòng] [? wù]
- Nà-ge shì nǚ-rén. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 5); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP nà] [? gè] [? shì] [? nǚ] [? rén]
- Zhè-ge rén. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 3); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP zhè] [? gè] [? rén]
- Zhè-ge dòng-wù. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 4); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP zhè] [? gè] [? dòng] [? wù]
- Nà-ge zhíwù hěn hǎo. (pointing/ge-is-universal)
  - "gè" doesn't fit (word 2 of 5); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP nà] [? gè] [? zhíwù] [? hěn] [? hǎo]

### stopped at "rén" (1)

- Nà-xiē rén hěn hǎo. (pointing/plural-pointers)
  - "rén" doesn't fit (word 3 of 5); a pattern could continue with a verb, bù, de, hěn, shì
  - pieces that do fit: [NP nà xiē] [? rén] [? hěn] [? hǎo]

## Read more than one way

Sentences whose words fit the patterns in more than one way (the parser shows the first):

- Nǚ-rén shì rén. (words-and-sentences/is): 2 readings, e.g. [Utt [S [NP nǚ-rén] [VP shì [NP rén]]]]
- Nán-rén shì rén. (words-and-sentences/is): 3 readings, e.g. [Utt [S [NP nán-rén] [VP shì [NP rén]]]]
- Zhíwù shì dōng-xi. (words-and-sentences/is): 6 readings, e.g. [Utt [S [NP zhíwù] [VP shì [NP dōng-xī]]]]
- Dòng-wù bù shì dōng-xi. (words-and-sentences/is): 6 readings, e.g. [Utt [S [NP dòng-wù] [VP bù [VP shì [NP dōng-xī]]]]]
- Dōng-xi shì dōng-xi. (words-and-sentences/is): many readings, e.g. [Utt [S [NP dōng-xī] [VP shì [NP dōng-xī]]]]
- Nǚ-rén shì rén. (words-and-sentences/is): 2 readings, e.g. [Utt [S [NP nǚ-rén] [VP shì [NP rén]]]]
- Zhíwù shì dōng-xi. (words-and-sentences/is): 6 readings, e.g. [Utt [S [NP zhíwù] [VP shì [NP dōng-xī]]]]
- Zhè shì nán-rén. (words-and-sentences/this): 3 readings, e.g. [Utt [S [NP zhè] [VP shì [NP nán-rén]]]]
- Zhè shì nǚ-rén. (words-and-sentences/this): 2 readings, e.g. [Utt [S [NP zhè] [VP shì [NP nǚ-rén]]]]
- Zhè shì nán-rén. (words-and-sentences/this): 3 readings, e.g. [Utt [S [NP zhè] [VP shì [NP nán-rén]]]]
- Nǚ-rén bù shì nán-rén. (words-and-sentences/not): 6 readings, e.g. [Utt [S [NP nǚ-rén] [VP bù [VP shì [NP nán-rén]]]]]
- Dì-fang hěn dà. (modifying-nouns/like): 5 readings, e.g. [Utt [S [NP dì-fāng] [VP hěn dà]]]
- Bàba-māma hěn hǎo. (modifying-nouns/like): 2 readings, e.g. [Utt [S [NP bàba-māma] [VP hěn hǎo]]]
- Dì-fang hěn xiǎo. (modifying-nouns/like): 5 readings, e.g. [Utt [S [NP dì-fāng] [VP hěn xiǎo]]]
- Dà-de dì-fang. (modifying-nouns/before): 5 readings, e.g. [Utt [NP [ModNP [Mod [AdjP dà] de] dì-fāng]]]
- Hǎo-de bàba-māma. (modifying-nouns/before): 2 readings, e.g. [Utt [NP [ModNP [Mod [AdjP hǎo] de] bàba-māma]]]
- Zhè shì xiǎo-de dì-fang. (modifying-nouns/before): 5 readings, e.g. [Utt [S [NP zhè] [VP shì [NP [ModNP [Mod [AdjP xiǎo] de] dì-fāng]]]]]
- Dà-de dì-fang (modifying-nouns/before): 5 readings, e.g. [Utt [NP [ModNP [Mod [AdjP dà] de] dì-fāng]]]
- Hǎo-de bàba-māma (modifying-nouns/before): 2 readings, e.g. [Utt [NP [ModNP [Mod [AdjP hǎo] de] bàba-māma]]]

