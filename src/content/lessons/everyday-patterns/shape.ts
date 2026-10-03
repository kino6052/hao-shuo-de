// Language-independent block sequence for everyday-patterns ("Everyday Patterns").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Added after Phase 2 (BOOK_PLAN.md D45): the last, catch-all lesson. English "let" and "help"
// without a word for "let": wǒ lái (let me), gěi wǒ + verb + yīxià (let me see), bāng (help),
// jiào + person + verb (have / let someone), néng … ma? (may I), and …, hǎo ma? (let's, please).
// New word: bāng.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- everyday-patterns).
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
  TInfo,
  TFaq,
} from "../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Everyday Patterns */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Say: To offer to do something, say wǒ lái (I come), then the verb. wǒ-men lái is "let's". Pattern: wǒ lái + verb */
  proseLetMe: TProse;
  /** Example: wǒ lái! */
  exampleLetMe1: TExample;
  /** Example: wǒ lái ná. */
  exampleLetMe2: TExample;
  /** Example: nǐ děng-deng, wǒ lái nòng. */
  exampleLetMe3: TExample;
  /** Example: wǒ lái wèn tā. */
  exampleLetMe4: TExample;
  /** Example: wǒ-men lái kàn-kan. */
  exampleLetMe5: TExample;
  /** Example: méi-yǒu guānxi, wǒ lái! */
  exampleLetMe6: TExample;
  /** Say: To ask for a turn, say gěi wǒ (give me), then the verb and yīxià (a moment). Pattern: gěi wǒ + verb + yīxià */
  proseMyTurn: TProse;
  /** Example: gěi wǒ kàn yīxià. */
  exampleMyTurn1: TExample;
  /** Example: gěi wǒ tīng-ting. */
  exampleMyTurn2: TExample;
  /** Example: gěi wǒ mō yīxià. */
  exampleMyTurn3: TExample;
  /** Example: gěi wǒ wánr yīxià. */
  exampleMyTurn4: TExample;
  /** Example: nǐ kàn-wán le ma? gěi wǒ kàn-kan. */
  exampleMyTurn5: TExample;
  /** Example: gěi wǒ mō yīxià tā-de máo. */
  exampleMyTurn6: TExample;
  /** Vocabulary: "help". */
  vocabBang: TVocab;
  /** Say: To help someone do something, put bāng (help) and the person before the verb. Add yīxià to ask nicely. Pattern: bāng + person + verb */
  proseHelp: TProse;
  /** Example: bāng-bang wǒ! */
  exampleHelp1: TExample;
  /** Example: wǒ bāng nǐ. */
  exampleHelp2: TExample;
  /** Example: nǐ bāng wǒ ná yīxià. */
  exampleHelp3: TExample;
  /** Example: wǒ bāng nǐ bǎ hézi ná-jìn-qù. */
  exampleHelp4: TExample;
  /** Example: tā bāng fùmǔ nòng mǐfàn. */
  exampleHelp5: TExample;
  /** Example: xiè-xie nǐ bāng wǒ. */
  exampleHelp6: TExample;
  /** Example: bù yào xiào, bāng-bang wǒ! */
  exampleHelp7: TExample;
  /** Example: jiā hěn luàn, nǐ bāng wǒ, hǎo ma? */
  exampleHelp8: TExample;
  /** Example: wǒ bāng nǐ zhàn-qǐ-lái. */
  exampleHelp9: TExample;
  /** Example: kuài lái bāng wǒ! */
  exampleHelp10: TExample;
  /** Example: nǐ bāng wǒ suàn yīxià, hǎo ma? */
  exampleHelp11: TExample;
  /** Example: nǐ bāng wǒ, wǒ hěn kāi-xīn. */
  exampleHelp12: TExample;
  /** Vocabulary: "teach". */
  vocabTeach: TVocab;
  /** Say: To teach someone to do something, put jiāo and the person before the verb, like bāng. Pattern: Who + jiāo + person + verb */
  proseTeach: TProse;
  /** Example: wǒ jiāo nǐ xiě. */
  exampleTeach1: TExample;
  /** Example: nǐ néng jiāo wǒ ma? */
  exampleTeach2: TExample;
  /** Example: nǐ jiāo, wǒ xué. */
  exampleTeach3: TExample;
  /** Example: tā jiāo-de hěn hǎo. */
  exampleTeach4: TExample;
  /** Say: To have someone do something, or let them, put jiào and the person before the verb. bù jiào is won't let. Pattern: Who + jiào + person + verb */
  proseHaveSomeone: TProse;
  /** Example: jiào tā jìn-lái. */
  exampleHaveSomeone1: TExample;
  /** Example: wǒ jiào tā-men děng. */
  exampleHaveSomeone2: TExample;
  /** Example: fùmǔ bù jiào wǒ chū-qù. */
  exampleHaveSomeone3: TExample;
  /** Example: tā bù jiào wǒ kàn. */
  exampleHaveSomeone4: TExample;
  /** Example: jiào tā shuō-xià-qù. */
  exampleHaveSomeone5: TExample;
  /** Say: To ask if you may, say néng … ma? To suggest something or ask nicely, add hǎo ma? (okay?) at the end. Pattern: Who + néng + verb + ma? / …, hǎo ma? */
  proseMayI: TProse;
  /** Example: wǒ néng jìn-lái ma? */
  exampleMayI1: TExample;
  /** Example: wǒ néng mō yīxià ma? */
  exampleMayI2: TExample;
  /** Example: nǐ bù néng zài zhè-ge dìfāng shuìjiào. */
  exampleMayI3: TExample;
  /** Example: wǒ-men chū-qù wánr, hǎo ma? */
  exampleMayI4: TExample;
  /** Example: nǐ bāng wǒ, hǎo ma? */
  exampleMayI5: TExample;
  /** Example: hǎo! */
  exampleMayI6: TExample;
  /** Example: nǐ zuò zài wǒ-de zuǒbiān, hǎo ma? */
  exampleMayI7: TExample;
  /** Grammar box: wǒ lái (let me), gěi wǒ + verb + yīxià (let me see), bāng (help), jiào (have, let), néng … ma? (may I), …, hǎo ma? (let's, please). */
  infoEveryday: TInfo;
  /** Exercise 1: Let me! */
  exercise1: TExercise;
  /** Exercise 2: Let me ask. */
  exercise2: TExercise;
  /** Exercise 3: Let me take a look. */
  exercise3: TExercise;
  /** Exercise 4: Help me! */
  exercise4: TExercise;
  /** Exercise 5: I'll help you. */
  exercise5: TExercise;
  /** Exercise 6: Could you look for it for me? */
  exercise6: TExercise;
  /** Exercise 7: Have them come in. */
  exercise7: TExercise;
  /** Exercise 8: He won't let me write. */
  exercise8: TExercise;
  /** Exercise 9: Can I come in? */
  exercise9: TExercise;
  /** Exercise 10: Let's eat rice, okay? */
  exercise10: TExercise;
  /** Exercise 11: Thank you for helping me. */
  exercise11: TExercise;
  /** Exercise 12: Can you teach me? */
  exercise12: TExercise;
  /** Exercise 13: I'll teach you to write. */
  exercise13: TExercise;
  /** Answer 1: wǒ lái! */
  answer1: TAnswer;
  /** Answer 2: wǒ lái wèn. */
  answer2: TAnswer;
  /** Answer 3: gěi wǒ kàn yīxià. */
  answer3: TAnswer;
  /** Answer 4: bāng-bang wǒ! */
  answer4: TAnswer;
  /** Answer 5: wǒ bāng nǐ. */
  answer5: TAnswer;
  /** Answer 6: nǐ bāng wǒ zhǎo yīxià. */
  answer6: TAnswer;
  /** Answer 7: jiào tā-men jìn-lái. */
  answer7: TAnswer;
  /** Answer 8: tā bù jiào wǒ xiě. */
  answer8: TAnswer;
  /** Answer 9: wǒ néng jìn-lái ma? */
  answer9: TAnswer;
  /** Answer 10: wǒ-men chī mǐfàn, hǎo ma? */
  answer10: TAnswer;
  /** Answer 11: xiè-xie nǐ bāng wǒ. */
  answer11: TAnswer;
  /** Answer 12: nǐ néng jiāo wǒ ma? */
  answer12: TAnswer;
  /** Answer 13: wǒ jiāo nǐ xiě. */
  answer13: TAnswer;
  /** FAQ: is there a word for "let"? (Mandarin has one; jiào, wǒ lái, and gěi wǒ do the job) */
  faqLetWord: TFaq;
  /** FAQ: how do I tell jiào "let" from jiào "be called"? (a name in quotes, or a person and a verb) */
  faqJiaoName: TFaq;
  /** FAQ: why add yīxià? (it makes a request small and friendly) */
  faqWhyYixia: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  proseLetMe: { type: "prose" },
  exampleLetMe1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:lai2}}!",
    ttsText: "我来！",
  },
  exampleLetMe2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:lai2}} {{word:na2}}.",
    ttsText: "我来拿。",
  },
  exampleLetMe3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:deng3}}-deng, {{word:wo3}} {{word:lai2}} {{word:nong4}}.",
    ttsText: "你等等，我来弄。",
  },
  exampleLetMe4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:lai2}} {{word:wen4}} {{word:ta1}}.",
    ttsText: "我来问他。",
  },
  exampleLetMe5: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:lai2}} {{word:kan4}}-kan.",
    ttsText: "我们来看看。",
  },
  exampleLetMe6: {
    type: "example",
    pinyin: "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}, {{word:wo3}} {{word:lai2}}!",
    ttsText: "没有关系，我来！",
  },
  proseMyTurn: { type: "prose" },
  exampleMyTurn1: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
    ttsText: "给我看一下。",
  },
  exampleMyTurn2: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}} {{word:ting1}}-ting.",
    ttsText: "给我听听。",
  },
  exampleMyTurn3: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}} {{word:mo1}} {{word:yi1xia4}}.",
    ttsText: "给我摸一下。",
  },
  exampleMyTurn4: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}} {{word:wan2r}} {{word:yi1xia4}}.",
    ttsText: "给我玩儿一下。",
  },
  exampleMyTurn5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:wan2}} {{word:le}} {{word:ma}}? {{Word:gei3}} {{word:wo3}} {{word:kan4}}-kan.",
    ttsText: "你看完了吗？给我看看。",
  },
  exampleMyTurn6: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}} {{word:mo1}} {{word:yi1xia4}} {{word:ta1}}-{{word:de}} {{word:mao2}}.",
    ttsText: "给我摸一下它的毛。",
  },
  vocabBang: { type: "vocab", term: "{{word:bang1}}", ttsText: "帮" },
  proseHelp: { type: "prose" },
  exampleHelp1: {
    type: "example",
    pinyin: "{{Word:bang1}}-bang {{word:wo3}}!",
    ttsText: "帮帮我！",
  },
  exampleHelp2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}}.",
    ttsText: "我帮你。",
  },
  exampleHelp3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:na2}} {{word:yi1xia4}}.",
    ttsText: "你帮我拿一下。",
  },
  exampleHelp4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:ba3}} {{word:he2zi}} {{word:na2}}-{{word:jin4}}-{{word:qu4}}.",
    ttsText: "我帮你把盒子拿进去。",
  },
  exampleHelp5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bang1}} {{word:fu4mu3}} {{word:nong4}} {{word:mi3fan4}}.",
    ttsText: "他帮父母弄米饭。",
  },
  exampleHelp6: {
    type: "example",
    pinyin: "{{Word:xie4}}-xie {{word:ni3}} {{word:bang1}} {{word:wo3}}.",
    ttsText: "谢谢你帮我。",
  },
  exampleHelp7: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:xiao4}}, {{word:bang1}}-bang {{word:wo3}}!",
    ttsText: "不要笑，帮帮我！",
  },
  exampleHelp8: {
    type: "example",
    pinyin: "{{Word:jia1}} {{word:hen3}} {{word:luan4}}, {{word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:hao3}} {{word:ma}}?",
    ttsText: "家很乱，你帮我，好吗？",
  },
  exampleHelp9: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:zhan4}}-{{word:qi3}}-{{word:lai2}}.",
    ttsText: "我帮你站起来。",
  },
  exampleHelp10: {
    type: "example",
    pinyin: "{{Word:kuai4}} {{word:lai2}} {{word:bang1}} {{word:wo3}}!",
    ttsText: "快来帮我！",
  },
  exampleHelp11: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:suan4}} {{word:yi1xia4}}, {{word:hao3}} {{word:ma}}?",
    ttsText: "你帮我算一下，好吗？",
  },
  exampleHelp12: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
    ttsText: "你帮我，我很开心。",
  },
  vocabTeach: { type: "vocab", term: "{{word:jiao1}}", ttsText: "教" },
  proseTeach: { type: "prose" },
  exampleTeach1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
    ttsText: "我教你写。",
  },
  exampleTeach2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:neng2}} {{word:jiao1}} {{word:wo3}} {{word:ma}}?",
    ttsText: "你能教我吗？",
  },
  exampleTeach3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:jiao1}}, {{word:wo3}} {{word:xue2}}.",
    ttsText: "你教，我学。",
  },
  exampleTeach4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:jiao1}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "他教得很好。",
  },
  proseHaveSomeone: { type: "prose" },
  exampleHaveSomeone1: {
    type: "example",
    pinyin: "{{Word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}.",
    ttsText: "叫他进来。",
  },
  exampleHaveSomeone2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jiao4}} {{word:ta1}}-{{word:men}} {{word:deng3}}.",
    ttsText: "我叫他们等。",
  },
  exampleHaveSomeone3: {
    type: "example",
    pinyin: "{{Word:fu4mu3}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}.",
    ttsText: "父母不叫我出去。",
  },
  exampleHaveSomeone4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:kan4}}.",
    ttsText: "他不叫我看。",
  },
  exampleHaveSomeone5: {
    type: "example",
    pinyin: "{{Word:jiao4}} {{word:ta1}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}.",
    ttsText: "叫他说下去。",
  },
  proseMayI: { type: "prose" },
  exampleMayI1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}?",
    ttsText: "我能进来吗？",
  },
  exampleMayI2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:neng2}} {{word:mo1}} {{word:yi1xia4}} {{word:ma}}?",
    ttsText: "我能摸一下吗？",
  },
  exampleMayI3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:bu4}} {{word:neng2}} {{word:zai4}} {{word:zhe4}}-ge {{word:di4fang1}} {{word:shui4jiao4}}.",
    ttsText: "你不能在这个地方睡觉。",
  },
  exampleMayI4: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}?",
    ttsText: "我们出去玩儿，好吗？",
  },
  exampleMayI5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:hao3}} {{word:ma}}?",
    ttsText: "你帮我，好吗？",
  },
  exampleMayI6: {
    type: "example",
    pinyin: "{{Word:hao3}}!",
    ttsText: "好！",
  },
  exampleMayI7: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zuo4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}, {{word:hao3}} {{word:ma}}?",
    ttsText: "你坐在我的左边，好吗？",
  },
  infoEveryday: {
    type: "info",
    subtype: "grammar",
    tag: "everyday/let-and-help",
    items: [{}, {}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  exercise11: { type: "exercise" },
  exercise12: { type: "exercise" },
  exercise13: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我来！" },
  answer2: { type: "answer", ttsText: "我来问。" },
  answer3: { type: "answer", ttsText: "给我看一下。" },
  answer4: { type: "answer", ttsText: "帮帮我！" },
  answer5: { type: "answer", ttsText: "我帮你。" },
  answer6: { type: "answer", ttsText: "你帮我找一下。" },
  answer7: { type: "answer", ttsText: "叫他们进来。" },
  answer8: { type: "answer", ttsText: "他不叫我写。" },
  answer9: { type: "answer", ttsText: "我能进来吗？" },
  answer10: { type: "answer", ttsText: "我们吃米饭，好吗？" },
  answer11: { type: "answer", ttsText: "谢谢你帮我。" },
  answer12: { type: "answer", ttsText: "你能教我吗？" },
  answer13: { type: "answer", ttsText: "我教你写。" },
  faqLetWord: { type: "faq" },
  faqJiaoName: { type: "faq" },
  faqWhyYixia: { type: "faq" },
};

export default shape;
