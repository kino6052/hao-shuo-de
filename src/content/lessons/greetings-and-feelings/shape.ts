// Language-independent block sequence for greetings-and-feelings ("Greetings and Feelings").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): hello (nǐ hǎo), thank you (xiè-xie, D43), names (jiào), orders (a bare verb, bù yào), feelings (juéde, pà, xiào, D41), and hearing sounds (shēngyīn).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- greetings-and-feelings).
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
  /** Greetings and Feelings */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Say: To say hello, say nǐ hǎo. Pattern: nǐ hǎo! / nǐ hǎo ma? */
  proseHello: TProse;
  /** Example: nǐ hǎo! */
  exampleHello1: TExample;
  /** Example: nǐ hǎo ma? */
  exampleHello2: TExample;
  /** Example: wǒ hěn hǎo. */
  exampleHello3: TExample;
  /** Example: wǒ qù le. */
  exampleHello4: TExample;
  /** Example: nǐ cóng nǎlǐ lái? */
  exampleHello5: TExample;
  /** Example: nǐ huí-lái le! */
  exampleHello6: TExample;
  /** Example: nǐ hǎo! jìn-lái zuò! */
  exampleHello7: TExample;
  /** Vocabulary: "thank; xiè-xie: thank you". */
  vocabXie: TVocab;
  /** Say: To say thank you, say xiè-xie. To answer, say bù yòng xiè. Pattern: xiè-xie (nǐ)! / bù yòng xiè. */
  proseThanks: TProse;
  /** Example: xiè-xie! */
  exampleThanks1: TExample;
  /** Example: xiè-xie nǐ! */
  exampleThanks2: TExample;
  /** Example: bù yòng xiè. */
  exampleThanks3: TExample;
  /** Example: xiè-xie nǐ gěi wǒ shuǐ. */
  exampleThanks4: TExample;
  /** Vocabulary: "be called; call, make an animal sound". */
  vocabJiao: TVocab;
  /** Say: To say your name, use jiào (be called), with the name in quotes. Pattern: Who + jiào + "name" */
  proseName: TProse;
  /** Example: wǒ jiào "Lisa". */
  exampleName1: TExample;
  /** Example: nǐ jiào shénme? */
  exampleName2: TExample;
  /** Example: nà-ge dòngwù jiào "wang-wang". */
  exampleName3: TExample;
  /** Example: tā jiào "Tom" huòzhě "Tim". */
  exampleName4: TExample;
  /** Vocabulary: "be scared (of)". */
  vocabPa: TVocab;
  /** Vocabulary: "laugh, smile". */
  vocabXiao: TVocab;
  /** Say: To tell someone to do something, just say the verb. For don't, put bù yào first. Pattern: Verb! / bù yào + verb! */
  proseOrder: TProse;
  /** Example: chī! */
  exampleOrder1: TExample;
  /** Example: bù yào shuō! */
  exampleOrder3: TExample;
  /** Example: liú zài zhè-lǐ! */
  exampleOrder5: TExample;
  /** Example: bù yào mō wǒ-de bízi! */
  exampleOrder6: TExample;
  /** Example: gěi wǒ nòng-hǎo wèidào-de dōngxi! (salt) */
  exampleOrder7: TExample;
  /** Example: rúguǒ nǐ lěng, lái jiā-lǐ! */
  exampleOrder8: TExample;
  /** Example: yī, èr, sān, kāishǐ! */
  exampleOrder9: TExample;
  /** Example: bù yào xiào! */
  exampleOrder11: TExample;
  /** Vocabulary: "feel, think". */
  vocabJuede: TVocab;
  /** Vocabulary: "bug". */
  vocabChongzi: TVocab;
  /** Say: To say how you feel, put juéde (feel) before the adjective. Pattern: Who + juéde + adjective */
  proseFeel: TProse;
  /** Example: wǒ juéde lěng. */
  exampleFeel2: TExample;
  /** Example: wǒ pà chóngzi. */
  exampleFeel4: TExample;
  /** Example: tā pà huǒ. */
  exampleFeel5: TExample;
  /** Example: wǒ juéde hěn hǎo, yīnwèi nǐ lái le. */
  exampleFeel8: TExample;
  /** Example: tā-de dòngwù sǐ le, tā juéde hěn huài. */
  exampleFeel9: TExample;
  /** Example: wǒ juéde zhè-ge yánsè hěn hǎo. */
  exampleFeel10: TExample;
  /** Example: dòngwù huó le, wǒ juéde hěn hǎo. */
  exampleFeel12: TExample;
  /** Example: wǒ zuì pà chóngzi. */
  exampleFeel22: TExample;
  /** Say: To say someone laughs or smiles, use xiào. Pattern: Who + xiào */
  proseLaugh: TProse;
  /** Example: tā xiào le. */
  exampleFeel13: TExample;
  /** Example: nǐ wèishénme xiào? */
  exampleFeel14: TExample;
  /** Vocabulary: "heart". */
  vocabXin: TVocab;
  /** Say: To talk about the heart, use xīn: kāi-xīn (happy), xiǎo-xīn (careful), fàng-xīn (don't worry). Pattern: kāi-xīn / xiǎo-xīn / fàng-xīn */
  proseHeart: TProse;
  /** Example: wǒ hěn kāi-xīn. */
  exampleFeel17: TExample;
  /** Example: nǐ kāi-xīn ma? */
  exampleFeel18: TExample;
  /** Example: hěn kāi-xīn nǐ lái le! */
  exampleFeel19: TExample;
  /** Example: xiǎo-xīn! */
  exampleFeel20: TExample;
  /** Example: fàng-xīn, méi-yǒu guānxi. */
  exampleFeel21: TExample;
  /** Example: wǒ juéde bù hǎo, wǒ yào tǎng-xià. */
  exampleFeel23: TExample;
  /** Vocabulary: "sound, voice". */
  vocabShengyin: TVocab;
  /** Say: To say you hear a sound, say tīng-dào (hear) and shēngyīn (sound). Pattern: Who + tīng-dào + shēngyīn */
  proseHear: TProse;
  /** Example: wǒ tīng-dào qíguài-de shēngyīn. */
  exampleHear1: TExample;
  /** Example: nǐ-de shēngyīn hěn hǎo. */
  exampleHear2: TExample;
  /** Example: chóngzi-de shēngyīn hěn xiǎo. */
  exampleHear3: TExample;
  /** Example: yǒu chóngzi! */
  exampleHear4: TExample;
  /** Example: wǒ tīng-dào le yī-ge tóu-yī-cì tīng-dào-de cí. */
  exampleHear5: TExample;
  /** Example: wǒ tīng-dào shēngyīn. fāshēng le shénme? */
  exampleHear6: TExample;
  /** Example: wǒ tīng-dào dòngwù fēi-de shēngyīn. */
  exampleHear7: TExample;
  /** Grammar box: nǐ hǎo, jiào + name, bare-verb orders and bù yào, juéde, pà. */
  infoGreetingsAndFeelings: TInfo;
  /** Exercise 1: His name is "Tom". */
  exercise1: TExercise;
  /** Exercise 2: Hello, everyone! */
  exercise2: TExercise;
  /** Exercise 3: Don't wait! */
  exercise3: TExercise;
  /** Exercise 4: Do you feel cold? */
  exercise4: TExercise;
  /** Exercise 5: I'm not scared. */
  exercise5: TExercise;
  /** Exercise 6: I hear a sound. */
  exercise6: TExercise;
  /** Exercise 7: There's a bug on my hand. */
  exercise7: TExercise;
  /** Exercise 8: I'm coming right now! */
  exercise8: TExercise;
  /** Exercise 9: Don't laugh at me! */
  exercise9: TExercise;
  /** Exercise 10: Thank you for giving me fruit. */
  exercise10: TExercise;
  /** Exercise 11: You're welcome. */
  exercise11: TExercise;
  /** Exercise 12: I'm very happy. */
  exercise12: TExercise;
  /** Exercise 13: Be careful! */
  exercise13: TExercise;
  /** Answer 1: tā jiào "Tom". */
  answer1: TAnswer;
  /** Answer 2: nǐ-men hǎo! */
  answer2: TAnswer;
  /** Answer 3: bù yào děng! */
  answer3: TAnswer;
  /** Answer 4: nǐ juéde lěng ma? */
  answer4: TAnswer;
  /** Answer 5: wǒ bù pà. */
  answer5: TAnswer;
  /** Answer 6: wǒ tīng-dào shēngyīn. */
  answer6: TAnswer;
  /** Answer 7: wǒ-de shǒu-shàng yǒu chóngzi. */
  answer7: TAnswer;
  /** Answer 8: wǒ xiànzài jiù lái! */
  answer8: TAnswer;
  /** Answer 9: bù yào xiào wǒ! */
  answer9: TAnswer;
  /** Answer 10: xiè-xie nǐ gěi wǒ shuǐguǒ. */
  answer10: TAnswer;
  /** Answer 11: bù yòng xiè. */
  answer11: TAnswer;
  /** Answer 12: wǒ hěn kāi-xīn. */
  answer12: TAnswer;
  /** Answer 13: xiǎo-xīn! */
  answer13: TAnswer;
  /** FAQ: is nǐ hǎo ma like "How are you?" */
  faqNihaoma: TFaq;
  /** FAQ: can juéde mean "I think"? (yes) */
  faqJuedeThink: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  proseHello: { type: "prose" },
  exampleHello1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}}!",
    ttsText: "你好！",
  },
  exampleHello2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
    ttsText: "你好吗？",
  },
  exampleHello3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "我很好。",
  },
  exampleHello4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:le}}.",
    ttsText: "我去了。",
  },
  exampleHello5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:cong2}} {{word:na3li3}} {{word:lai2}}?",
    ttsText: "你从哪里来？",
  },
  exampleHello6: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hui2}}-{{word:lai2}} {{word:le}}!",
    ttsText: "你回来了！",
  },
  exampleHello7: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}}! {{Word:jin4}}-{{word:lai2}} {{word:zuo4}}!",
    ttsText: "你好！进来坐！",
  },
  vocabXie: { type: "vocab", term: "{{word:xie4}}", ttsText: "谢" },
  proseThanks: { type: "prose" },
  exampleThanks1: {
    type: "example",
    pinyin: "{{Word:xie4}}-xie!",
    ttsText: "谢谢！",
  },
  exampleThanks2: {
    type: "example",
    pinyin: "{{Word:xie4}}-xie {{word:ni3}}!",
    ttsText: "谢谢你！",
  },
  exampleThanks3: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yong4}} {{word:xie4}}.",
    ttsText: "不用谢。",
  },
  exampleThanks4: {
    type: "example",
    pinyin: "{{Word:xie4}}-xie {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3}}.",
    ttsText: "谢谢你给我水。",
  },
  vocabJiao: { type: "vocab", term: "{{word:jiao4}}", ttsText: "叫" },
  proseName: { type: "prose" },
  exampleName1: {
    type: "example",
    pinyin: '{{Word:wo3}} {{word:jiao4}} "Lisa".',
    ttsText: "我叫丽莎。",
  },
  exampleName2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
    ttsText: "你叫什么？",
  },
  exampleName3: {
    type: "example",
    pinyin: '{{Word:na4}}-ge {{word:dong4wu4}} {{word:jiao4}} "wang-wang".',
    ttsText: "那个动物叫汪汪。",
  },
  exampleName4: {
    type: "example",
    pinyin: '{{Word:ta1}} {{word:jiao4}} "Tom" {{word:huo4zhe3}} "Tim".',
    ttsText: '他叫"Tom"或者"Tim"。',
  },
  vocabPa: { type: "vocab", term: "{{word:pa4}}", ttsText: "怕" },
  vocabXiao: { type: "vocab", term: "{{word:xiao4}}", ttsText: "笑" },
  proseOrder: { type: "prose" },
  exampleOrder1: {
    type: "example",
    pinyin: "{{Word:chi1}}!",
    ttsText: "吃！",
  },
  exampleOrder3: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:shuo1}}!",
    ttsText: "不要说！",
  },
  exampleOrder5: {
    type: "example",
    pinyin: "{{Word:liu2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}!",
    ttsText: "留在这里！",
  },
  exampleOrder6: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:mo1}} {{word:wo3}}-{{word:de}} {{word:bi2zi}}!",
    ttsText: "不要摸我的鼻子！",
  },
  exampleOrder7: {
    type: "example",
    pinyin: "{{Word:gei3}} {{word:wo3}} {{word:nong4}}-{{word:hao3}} {{word:wei4dao4}}-{{word:de}} {{word:dong1xi}}!",
    ttsText: "给我弄好味道的东西！",
  },
  exampleOrder8: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:lai2}} {{word:jia1}}-{{word:li3}}!",
    ttsText: "如果你冷，来家里！",
  },
  exampleOrder9: {
    type: "example",
    pinyin: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:kai1shi3}}!",
    ttsText: "一，二，三，开始！",
  },
  exampleOrder11: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:xiao4}}!",
    ttsText: "不要笑！",
  },
  vocabJuede: { type: "vocab", term: "{{word:jue2de}}", ttsText: "觉得" },
  vocabChongzi: {
    type: "vocab",
    term: "{{word:chong2zi}}",
    ttsText: "虫子",
  },
  proseFeel: { type: "prose" },
  exampleFeel2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:leng3}}.",
    ttsText: "我觉得冷。",
  },
  exampleFeel4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:pa4}} {{word:chong2zi}}.",
    ttsText: "我怕虫子。",
  },
  exampleFeel5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:pa4}} {{word:huo3}}.",
    ttsText: "她怕火。",
  },
  exampleFeel8: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:hen3}} {{word:hao3}}, {{word:yin1wei4}} {{word:ni3}} {{word:lai2}} {{word:le}}.",
    ttsText: "我觉得很好，因为你来了。",
  },
  exampleFeel9: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:de}} {{word:dong4wu4}} {{word:si3}} {{word:le}}, {{word:ta1}} {{word:jue2de}} {{word:hen3}} {{word:huai4}}.",
    ttsText: "她的动物死了，她觉得很坏。",
  },
  exampleFeel10: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:zhe4}}-ge {{word:yan2se4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "我觉得这个颜色很好。",
  },
  exampleFeel12: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:huo2}} {{word:le}}, {{word:wo3}} {{word:jue2de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "动物活了，我觉得很好。",
  },
  exampleFeel22: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zui4}} {{word:pa4}} {{word:chong2zi}}.",
    ttsText: "我最怕虫子。",
  },
  proseLaugh: { type: "prose" },
  exampleFeel13: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:xiao4}} {{word:le}}.",
    ttsText: "她笑了。",
  },
  exampleFeel14: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:xiao4}}?",
    ttsText: "你为什么笑？",
  },
  vocabXin: { type: "vocab", term: "{{word:xin1}}", ttsText: "心" },
  proseHeart: { type: "prose" },
  exampleFeel17: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
    ttsText: "我很开心。",
  },
  exampleFeel18: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kai1}}-{{word:xin1}} {{word:ma}}?",
    ttsText: "你开心吗？",
  },
  exampleFeel19: {
    type: "example",
    pinyin: "{{Word:hen3}} {{word:kai1}}-{{word:xin1}} {{word:ni3}} {{word:lai2}} {{word:le}}!",
    ttsText: "很开心你来了！",
  },
  exampleFeel20: {
    type: "example",
    pinyin: "{{Word:xiao3}}-{{word:xin1}}!",
    ttsText: "小心！",
  },
  exampleFeel21: {
    type: "example",
    pinyin: "{{Word:fang4}}-{{word:xin1}}, {{word:mei2}}-{{word:you3}} {{word:guan1xi}}.",
    ttsText: "放心，没有关系。",
  },
  exampleFeel23: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:bu4}} {{word:hao3}}, {{word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}.",
    ttsText: "我觉得不好，我要躺下。",
  },
  vocabShengyin: {
    type: "vocab",
    term: "{{word:sheng1yin1}}",
    ttsText: "声音",
  },
  proseHear: { type: "prose" },
  exampleHear1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:qi2guai4}}-{{word:de}} {{word:sheng1yin1}}.",
    ttsText: "我听到奇怪的声音。",
  },
  exampleHear2: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "你的声音很好。",
  },
  exampleHear3: {
    type: "example",
    pinyin: "{{Word:chong2zi}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "虫子的声音很小。",
  },
  exampleHear4: {
    type: "example",
    pinyin: "{{Word:you3}} {{word:chong2zi}}!",
    ttsText: "有虫子！",
  },
  exampleHear5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:le}} {{word:yi1}}-ge {{word:tou2}}-{{word:yi1}}-{{word:ci4}} {{word:ting1}}-{{word:dao4}}-{{word:de}} {{word:ci2}}.",
    ttsText: "我听到了一个头一次听到的词。",
  },
  exampleHear6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}}. {{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}?",
    ttsText: "我听到声音。发生了什么？",
  },
  exampleHear7: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:dong4wu4}} {{word:fei1}}-{{word:de}} {{word:sheng1yin1}}.",
    ttsText: "我听到动物飞的声音。",
  },
  infoGreetingsAndFeelings: {
    type: "info",
    subtype: "grammar",
    tag: "expressions/greetings-and-feelings",
    items: [{}, {}, {}, {}, {}, {}, {}],
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
  answer1: { type: "answer", ttsText: "他叫汤姆。" },
  answer2: { type: "answer", ttsText: "你们好！" },
  answer3: { type: "answer", ttsText: "不要等！" },
  answer4: { type: "answer", ttsText: "你觉得冷吗？" },
  answer5: { type: "answer", ttsText: "我不怕。" },
  answer6: { type: "answer", ttsText: "我听到声音。" },
  answer7: { type: "answer", ttsText: "我的手上有虫子。" },
  answer8: { type: "answer", ttsText: "我现在就来！" },
  answer9: { type: "answer", ttsText: "不要笑我！" },
  answer10: { type: "answer", ttsText: "谢谢你给我水果。" },
  answer11: { type: "answer", ttsText: "不用谢。" },
  answer12: { type: "answer", ttsText: "我很开心。" },
  answer13: { type: "answer", ttsText: "小心！" },
  faqNihaoma: { type: "faq" },
  faqJuedeThink: { type: "faq" },
};

export default shape;
