// English text for lesson-12, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Greetings and Feelings"] },
  summary: {
    en: [
      "Greetings, commands, animal sounds, and blessings all reuse ordinary Hao-shuo-de sentence patterns rather than dedicated particles: a bare verb opens a command, `{{word:jiao4}}` plus a quoted sound reports an animal noise, and doubling an adjective and binding it with `-{{word:de}}` turns a description into a wish.",
    ],
  },

  vocabJuede: { en: ["to feel, think"] },
  vocabShengyin: { en: ["sound, noise"] },
  vocabJiao: { en: ["to call, make an animal sound (used alongside the Quote Partition)"] },
  vocabRi: { en: ["sun, light"] },

  proseReusedPatterns: {
    en: [
      "Hao-shuo-de doesn't set aside a special particle for greetings or commands the way some invented languages do -- it reuses patterns you already know.",
      'A greeting is just a `{{word:ma}}`-question ("Are you well?"), a command is just a bare verb statement with the subject dropped, an animal sound is just the verb `{{word:jiao4}}` ("to call") followed by the sound in quotes, and a blessing is just a doubled adjective bound with `-{{word:de}}`.',
      "None of these needs new grammar -- only a new habit for how to use grammar you already have.",
    ],
    tldr: { en: ["Greetings, commands, animal sounds, and blessings all reuse existing sentence patterns -- no dedicated particles."] },
    necessity: { en: ["Sets expectations before the examples: nothing below is a new grammatical category, just a familiar pattern used for a new purpose."] },
  },
  infoGreetingsCommandsBlessings: {
    title: { en: ["Greetings, Commands, and Blessings"] },
    items: [
      { en: ["**Greetings:** expressed using foundational semantic combinations like `{{word:ni3}} {{word:hao3}} {{word:ma}}?` (\"Are you well?\") or descriptive movements."] },
      { en: ["**Imperatives:** commands or requests are formed simply by using a bare verb statement at the start of a clause, with the subject dropped."] },
      { en: ["**Animal Sounds:** handled via the verb `{{word:jiao4}}` paired with the Quote Partition, which isolates onomatopoeia inside quotation marks rather than treating them as new dictionary words."] },
      { en: ["**Wishing Someone Something:** reduplicating an adjective and binding the repeated pair with `-{{word:de}}` turns a plain description into a blessing rather than just a fact -- `{{word:hao3}}-{{word:hao3}}-{{word:de}} {{word:ri4}}` doesn't only describe a good day, it wishes one on whoever you're speaking to. The hyphen keeps the doubling explicit, the same way `{{word:hen3}}-{{word:da4}}-{{word:de}}` explicitly marks intensification, instead of letting it blur into the unmarked doubling spoken Mandarin does on its own."] },
    ],
  },

  example1: { en: ["Hello! / Are you well?"] },
  example2: { en: ["Go to your room!"] },
  example3: { en: ["Don't speak. Take action."] },
  example4: { en: ["I am going. / Goodbye."] },
  example5: { en: ["That animal goes \"woof woof\"."] },
  example6: { en: ["Why are you sad / feeling bad?"] },
  example7: { en: ["You're so big!"] },
  example8: { en: ["Have a nice day!"] },
  example9: { en: ["Thank you! (Literally, may you feel good)"] },

  exercise1: { en: ["Give the tool to me."] },
  exercise2: { en: ["\"Lisa\" is happy."] },
  exercise3: { en: ["Meow!"] },

  answer1: { en: ["{{Word:gei3}} {{word:wo3}} {{word:gong1ju4}}."] },
  answer2: { en: ['"Lisa" {{word:jue2de}} {{word:hao3}}.'] },
  answer3: { en: ['{{Word:jiao4}} "miao-miao"!'] },
};

export default en;
