// K5: a second way to say each fragile coverage item (K24): 43 primes, 1 category (state) and 1 grammar item (name).
// Drafted by Claude for the author to review later as one batch (KB_PLAN.md, fragile-primes). Applied in the working tree.
// Each op adds one form that does not use the item's one carrier, so dropping that word no longer costs the item.
// MORE, action and affection already had such a form. NSM says a prime has no definition: these are ways to get the
// idea across with other words, not definitions, and none of them changes which word carries the prime.
// Strength: "near" = a real Mandarin way to say it; "ok" = understandable; "weak" = a stretch, first to reword.
// Run: npm run refactor -- refactors/K5.ts [--write]

export default [
  // near: negating the opposite is ordinary Mandarin (bù xiǎo = fairly big, bù shǎo = quite a lot)
  { op: "coverageForm", item: "atoms:MUCH", form: "{{word:bu4}} {{word:shao3}}" },
  { op: "coverageForm", item: "atoms:LITTLE", form: "{{word:bu4}} {{word:duo1}}" },
  { op: "coverageForm", item: "atoms:GOOD", form: "{{word:bu4}} {{word:huai4}}" },
  { op: "coverageForm", item: "atoms:BAD", form: "{{word:bu4}} {{word:hao3}}" },
  { op: "coverageForm", item: "atoms:BIG", form: "{{word:bu4}} {{word:xiao3}}" },
  { op: "coverageForm", item: "atoms:SMALL", form: "{{word:bu4}} {{word:da4}}" },
  { op: "coverageForm", item: "atoms:FAR", form: "{{word:bu4}} {{word:fu4jin4}}" },
  { op: "coverageForm", item: "atoms:NEAR", form: "{{word:bu4}} {{word:yuan3}}" },
  { op: "coverageForm", item: "atoms:LIVE", form: "{{word:bu4}} {{word:si3}}" },
  { op: "coverageForm", item: "atoms:DIE", form: "{{word:bu4}} {{word:huo2}}" },

  // near: a second word Mandarin really has for it
  { op: "coverageForm", item: "atoms:NOT", form: "{{word:mei2}}" },
  { op: "coverageForm", item: "atoms:CAN", form: "{{word:ke3}}-{{word:yi3}}" },
  { op: "coverageForm", item: "atoms:IF", form: "{{word:yao4}}-{{word:shi4}}" },
  { op: "coverageForm", item: "atoms:WANT", form: "{{word:xiang3}}" },
  { op: "coverageForm", item: "atoms:TRUE", form: "{{word:dui4}}" },
  { op: "coverageForm", item: "atoms:WORDS", form: "{{word:hua4}}" },
  { op: "coverageForm", item: "atoms:VERY", form: "{{word:zhen1}}" },
  { op: "coverageForm", item: "atoms:MOVE", form: "{{word:zou3}}" },
  { op: "coverageForm", item: "atoms:INSIDE", form: "{{word:zhong1}}" },
  { op: "coverageForm", item: "atoms:BECAUSE", form: "{{word:wei4}} X" },
  { op: "coverageForm", item: "atoms:SOMEONE", form: "{{word:you3}} {{word:shei2}}" },
  { op: "coverageForm", item: "atoms:KNOW", form: "{{word:ji4}}-{{word:de}}" },

  // ok: said with a part of the situation (who speaks, who listens, what the senses do)
  { op: "coverageForm", item: "atoms:I", form: "{{word:shuo1}}-{{word:hua4}}-{{word:de}} {{word:ren2}}" },
  { op: "coverageForm", item: "atoms:YOU", form: "{{word:ting1}}-{{word:hua4}}-{{word:de}} {{word:ren2}}" },
  { op: "coverageForm", item: "atoms:PEOPLE", form: "{{word:wo3}}-{{word:men}} {{word:he2}} {{word:ta1}}-{{word:men}}" },
  { op: "coverageForm", item: "atoms:SEE", form: "{{word:yong4}} {{word:yan3jing}} {{word:jian4}}" },
  { op: "coverageForm", item: "atoms:HEAR", form: "{{word:sheng1yin1}} {{word:dao4}} {{word:er3duo}}" },
  { op: "coverageForm", item: "atoms:SAY", form: "{{word:cong2}} {{word:kou3}} {{word:fa1}} {{word:ci2}}" },
  { op: "coverageForm", item: "atoms:BODY", form: "{{word:tou2}} {{word:he2}} {{word:shou3}} {{word:he2}} {{word:jiao3}} {{word:he2}} {{word:du4zi}}" },
  { op: "coverageForm", item: "atoms:TOUCH", form: "{{word:ba3}} {{word:shou3}} {{word:fang4}} {{word:zai4}} X {{word:shang4}}" },
  { op: "coverageForm", item: "atoms:MINE", form: "{{word:wo3}} {{word:you3}}" },

  // ok: before, after, above and below said by comparing
  { op: "coverageForm", item: "atoms:BEFORE", form: "{{word:bi3}} X {{word:zao3}}" },
  { op: "coverageForm", item: "atoms:AFTER", form: "{{word:bi3}} X {{word:wan3}}" },
  { op: "coverageForm", item: "atoms:ABOVE", form: "{{word:bi3}} X {{word:gao1}}" },

  // ok: a grammar item and a category said another way
  { op: "coverageForm", item: "grammar:name", form: "X-{{word:de}} {{word:ming2}}-{{word:zi}} {{word:shi4}} Y" },
  { op: "coverageForm", item: "categories:state", form: "X {{word:zai4}} Y {{word:li3}}-{{word:mian4}}" },

  // weak: a stretch, the first ones to reword when the author reviews
  { op: "coverageForm", item: "atoms:THIS", form: "{{word:wo3}} {{word:fu4jin4}}-{{word:de}}" },
  { op: "coverageForm", item: "atoms:ONE", form: "{{word:zhi3}} {{word:you3}} {{word:zhe4}}-{{light:ge4}}, {{word:mei2}} {{word:you3}} {{word:bie2}}-{{word:de}}" },
  { op: "coverageForm", item: "atoms:ALL", form: "{{word:mei2}} {{word:you3}} {{word:bu4}} {{word:shi4}} X-{{word:de}}" },
  { op: "coverageForm", item: "atoms:KIND", form: "{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:yi1}}-{{word:xie1}} {{word:dong1}}-{{light:xi1}}" },
  { op: "coverageForm", item: "atoms:DO", form: "{{word:dong4}} {{word:shou3}}" },
  { op: "coverageForm", item: "atoms:BE SOMEWHERE", form: "{{word:liu2}} {{word:zhe4}}-{{word:li3}}" },
  { op: "coverageForm", item: "atoms:THERE IS", form: "{{word:neng2}} {{word:zhao3}}-{{word:dao4}}" },
  { op: "coverageForm", item: "atoms:BE SOMEONE", form: "X {{word:he2}} Y {{word:yi1}}-{{word:yang4}}" },
  { op: "coverageForm", item: "atoms:BELOW", form: "{{word:bi3}} X {{word:bu4}} {{word:gao1}}" },
];
