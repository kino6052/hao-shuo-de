// English text for lesson-06, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Questions and Answers"],
  /** summary */
  [
    "Question words like `{{word:shen2me}}` (\"what\") sit right where the answer would go, `{{word:ma}}` turns any statement into a yes-or-no question, and A-not-A reduplication (`{{word:you3}}-méi-{{word:you3}}`) asks the same thing without `{{word:ma}}`.",
  ],

  /** vocab: gōngjù */
  ["tool, machine, device"],
  /** vocab: tā */
  ["he, she, it, they"],
  /** vocab: huòzhě */
  ["or"],
  /** vocab: shénme */
  ["what, which"],
  /** vocab: wèishénme */
  ["why"],
  /** vocab: zěnme */
  ["how"],

  /** prose: question words sit in-situ, exactly where the answer would go */
  {
    text: [
      "Hao-shuo-de does not move question words to the front of a sentence, and it does not build a separate question form of the verb either.",
      "A question word simply sits exactly where its answer would go.",
      '`{{word:ta1}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?` (\"He is eating what?\") asks for whatever belongs in the object slot; `{{word:shen2me}} {{word:ren2}} {{word:zai4}} {{word:shuo1}}?` (\"What person is speaking?\") asks for whatever belongs in the subject slot.',
      "The sentence's shape never changes -- only the word occupying one slot does.",
    ],
    tldr: ["Question words like `{{word:shen2me}}` stay in the exact slot their answer would fill -- nothing moves to the front."],
    necessity: ["Confirms that Lesson 2's fixed word order also governs questions -- there is no separate question-word-fronting rule to learn."],
  },
  /** info: Yes-or-No Questions -- ma particle and A-not-A construction */
  {
    title: ["Yes-or-No Questions"],
    items: [
      {
        text: ["There are two ways to ask a question that expects yes or no, and either one works:"],
        items: [
          { text: ['Add `{{word:ma}}` to the end of any statement: `{{word:ta1}} {{word:you3}} {{word:shui3guo3}}.` ("He has fruit.") becomes `{{word:ta1}} {{word:you3}} {{word:shui3guo3}} {{word:ma}}?` ("Does he have fruit?").'] },
          { text: ["Repeat the verb in positive-then-negative form (\"A-not-A\") with no `{{word:ma}}` at all: `{{word:you3}}-méi-{{word:you3}}` (\"have-not-have\") asks the same question as `{{word:you3}} ... {{word:ma}}`."] },
        ],
      },
    ],
  },
  /** prose: answering yes/no by repeating (or negating) the verb */
  {
    text: [
      "Hao-shuo-de has no single word for \"yes\" or \"no\".",
      "Instead, you answer a yes-or-no question by repeating the verb being asked about -- alone for \"yes\", or with `{{word:bu4}}` in front of it for \"no\".",
      '`{{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?` (\"Do you listen to your parents?\") can be answered simply `{{word:ting1}}.` (\"[I] listen.\") or `{{word:bu4}} {{word:ting1}}.` (\"[I] don\'t listen.\").',
      "The same pattern answers a `{{word:ma}}` question too: repeat the verb the question was built on.",
    ],
    tldr: ['Answer yes/no by repeating the verb (yes) or adding `{{word:bu4}}` before it (no) -- there is no standalone word for "yes" or "no".'],
    necessity: ["Explains why Hao-shuo-de speakers answer questions by echoing the verb instead of a fixed yes/no word -- a pattern that otherwise looks unexplained in the examples."],
  },

  /** example 1: shénme shì xīn-de? */
  ["What is new?"],
  /** example 2: shénme rén zài shuō? */
  ["What person is speaking?"],
  /** example 3: tā yǒu-méi-yǒu hěn-duō-de shuǐguǒ? */
  ["Does he have a lot of fruit?"],
  /** example 4: yǒu. */
  ["[He] has [some]."],
  /** example 5: nǐ tīng-bù-tīng fùmǔ? */
  ["Do you listen to your parents?"],
  /** example 6: bù tīng. */
  ["[I] don't listen."],
  /** example 7: tā zài chī shénme? */
  ["What is it eating?"],
  /** example 8: nǐ gěi tā zài-shuǐ-lǐ-de dòngwù ma? */
  ["Do you give her the animal that's in the water?"],
  /** example 9: wèishénme nǐ gěi tā zài-shuǐ-lǐ-de dòngwù? */
  ["Why do you give her the animal that's in the water?"],
  /** example 10: nǐ zěnme bǎ Hǎo-shuō-de biàn zhīdào? */
  ["How do you turn Hao-shuo-de into something known?"],

  /** exercise 1 */
  ["Ask: \"What tools do you have?\""],
  /** exercise 2 */
  ["Ask: \"Does he listen?\" -- using A-not-A."],
  /** exercise 3 */
  ["Ask: \"Is the tool small?\" -- using either `{{word:ma}}` or A-not-A."],

  /** answer 1 */
  ["{{Word:ni3}} {{word:you3}} {{word:shen2me}} {{word:gong1ju4}}?"],
  /** answer 2 */
  ["{{Word:ta1}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}?"],
  /** answer 3 */
  ["{{Word:gong1ju4}} {{word:xiao3}}-{{word:bu4}}-{{word:xiao3}}?"],
];

export default en;
