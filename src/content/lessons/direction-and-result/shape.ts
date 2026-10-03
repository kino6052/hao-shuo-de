// Language-independent block sequence for direction-and-result ("Verbs 2 — Direction and result").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Added after Phase 2 (BOOK_PLAN.md D44): what comes after a verb. Which way it goes (ná-lái,
// jìn / chū / huí + lái / qù, ná-chū-lái), how it ends (zhǎo-dào, nòng-huài, xué-huì), whether
// you can get there (kàn-bù-dào, kàn-de-dào), and qǐ-lái (seems, starts) / xià-qù (keep going).
// New words: ná (moved here from Numbers), jìn, chū, huí.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- direction-and-result).
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
  /** Verbs 2 — Direction and result */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "take, pick up, hold". */
  vocabNa: TVocab;
  /** Say: To say which way an action goes, put lái (toward you) or qù (away from you) right after the verb. Pattern: verb-lái / verb-qù */
  proseTowardAway: TProse;
  /** Example: nǐ ná zhè-ge. */
  exampleTowardAway1: TExample;
  /** Example: bǎ shuǐ ná-lái! */
  exampleTowardAway2: TExample;
  /** Example: wǒ bǎ shuǐguǒ ná-lái le. */
  exampleTowardAway3: TExample;
  /** Example: tā bǎ hézi ná-qù le. */
  exampleTowardAway4: TExample;
  /** Example: bǎ nǐ-de yīfu ná-qù! */
  exampleTowardAway5: TExample;
  /** Vocabulary: "go in, enter". */
  vocabJin: TVocab;
  /** Vocabulary: "go out, come out". */
  vocabChu: TVocab;
  /** Vocabulary: "go back, come back". */
  vocabHui: TVocab;
  /** Say: To say in, out, and back, use jìn, chū, and huí; add lái or qù to show which way. Pattern: jìn / chū / huí + lái / qù */
  proseInOut: TProse;
  /** Example: nǐ jìn-lái! */
  exampleInOut1: TExample;
  /** Example: bù yào jìn-qù! */
  exampleInOut2: TExample;
  /** Example: tā chū-qù le. */
  exampleInOut3: TExample;
  /** Example: dòngwù cóng hézi-lǐ chū-lái le. */
  exampleInOut4: TExample;
  /** Example: wǒ-men chū-qù, zài fùjìn wánr. */
  exampleInOut5: TExample;
  /** Example: wǒ yào huí jiā. */
  exampleInOut6: TExample;
  /** Example: fùmǔ huí-lái le. */
  exampleInOut7: TExample;
  /** Example: tā huí-qù le ma? */
  exampleInOut8: TExample;
  /** Vocabulary: "sit". */
  vocabZuo: TVocab;
  /** Vocabulary: "stand". */
  vocabZhan: TVocab;
  /** Vocabulary: "lie". */
  vocabTang: TVocab;
  /** Vocabulary: "fly". */
  vocabFei: TVocab;
  /** Say: To say sit, stand, and lie down, use zuò, zhàn, and tǎng with direction words. fēi (fly) takes them too. Pattern: zuò-xià / zhàn-qǐ-lái / tǎng-xià */
  proseBody: TProse;
  /** Example: nǐ zuò-xià! */
  exampleBody1: TExample;
  /** Example: wǒ zuò zài dì-shàng. */
  exampleBody2: TExample;
  /** Example: tā-men dōu zhàn-qǐ-lái le. */
  exampleBody3: TExample;
  /** Example: tā zhàn zài wǒ-de qián-miàn. */
  exampleBody4: TExample;
  /** Example: wǒ yào tǎng-xià. */
  exampleBody5: TExample;
  /** Example: dòngwù tǎng zài dì-shàng. */
  exampleBody6: TExample;
  /** Example: dòngwù fēi-shàng-qù le. */
  exampleBody7: TExample;
  /** Example: tā fēi-huí-lái le. */
  exampleBody8: TExample;
  /** Say: To say which way you move a thing, put the direction words right after the verb, and the thing first with bǎ. Pattern: Who + bǎ + thing + verb-direction-lái / qù */
  proseMoveThing: TProse;
  /** Example: tā bǎ jīn ná-chū-lái le. */
  exampleMoveThing1: TExample;
  /** Example: bǎ yīfu fàng-jìn-qù! */
  exampleMoveThing2: TExample;
  /** Example: wǒ bǎ shuǐguǒ ná-qǐ-lái. */
  exampleMoveThing3: TExample;
  /** Example: bǎ gōngjù fàng-xià! */
  exampleMoveThing4: TExample;
  /** Example: nǐ bǎ hézi ná-huí-qù. */
  exampleMoveThing5: TExample;
  /** Example: tā bǎ gùnzi ná-shàng-lái le. */
  exampleMoveThing6: TExample;
  /** Say: To say how an action ends, join a result word to the verb: kàn-dào, zhǎo-dào, nòng-hǎo, nòng-huài, xué-huì. Pattern: verb-result */
  proseResult: TProse;
  /** Example: wǒ zhǎo-dào wǒ-de hézi le. */
  exampleResult1: TExample;
  /** Example: wǒ méi zhǎo-dào. */
  exampleResult2: TExample;
  /** Example: nǐ kàn-dào tā le ma? */
  exampleResult3: TExample;
  /** Example: tā bǎ gōngjù nòng-huài le. */
  exampleResult4: TExample;
  /** Example: wǒ bǎ gōngjù nòng-hǎo le. */
  exampleResult5: TExample;
  /** Example: nǐ xué-huì le ma? */
  exampleResult6: TExample;
  /** Say: To say you can or can't get the result, put de or bù between the verb and the result. Pattern: verb-de-result / verb-bù-result */
  proseCanCant: TProse;
  /** Example: wǒ kàn-bù-dào. */
  exampleCanCant1: TExample;
  /** Example: nǐ tīng-de-dào ma? */
  exampleCanCant2: TExample;
  /** Example: wǒ zhǎo-bù-dào wǒ-de yīfu. */
  exampleCanCant3: TExample;
  /** Example: mǐfàn hěn duō, wǒ chī-bù-wán. */
  exampleCanCant4: TExample;
  /** Example: hézi hěn dà, wǒ ná-bù-dòng. */
  exampleCanCant5: TExample;
  /** Example: kǒu hěn xiǎo, wǒ-men jìn-bù-qù. */
  exampleCanCant6: TExample;
  /** Say: To say how something seems, put qǐ-lái after kàn, tīng, or chī. Also: adjective-qǐ-lái (starts to get), verb-xià-qù (keep going). Pattern: Thing + verb-qǐ-lái + hěn + adjective */
  proseSeems: TProse;
  /** Example: zhè-ge shuǐguǒ kàn-qǐ-lái hěn hǎo. */
  exampleSeems1: TExample;
  /** Example: chī-qǐ-lái hěn tián. */
  exampleSeems2: TExample;
  /** Example: tīng-qǐ-lái hěn qíguài. */
  exampleSeems3: TExample;
  /** Example: kōngqì lěng-qǐ-lái le. */
  exampleSeems4: TExample;
  /** Example: nǐ shuō-xià-qù! */
  exampleSeems5: TExample;
  /** Example: wǒ yào xué-xià-qù. */
  exampleSeems6: TExample;
  /** Grammar box: verb-lái / qù, jìn / chū / huí, verb + direction words, verb-result, verb-bù-result (can't), qǐ-lái (seems) and xià-qù (keep going). */
  infoDirectionResult: TInfo;
  /** Exercise 1: Bring the fruit! */
  exercise1: TExercise;
  /** Exercise 2: Come in! */
  exercise2: TExercise;
  /** Exercise 3: She went home. */
  exercise3: TExercise;
  /** Exercise 4: We went out. */
  exercise4: TExercise;
  /** Exercise 5: Take out the tool! */
  exercise5: TExercise;
  /** Exercise 6: Put the box down! */
  exercise6: TExercise;
  /** Exercise 7: I found the money. */
  exercise7: TExercise;
  /** Exercise 8: He broke the box. */
  exercise8: TExercise;
  /** Exercise 9: I can't hear it. */
  exercise9: TExercise;
  /** Exercise 10: Can you see it? */
  exercise10: TExercise;
  /** Exercise 11: The rice tastes good. */
  exercise11: TExercise;
  /** Exercise 12: Keep writing! */
  exercise12: TExercise;
  /** Exercise 13: Sit down! */
  exercise13: TExercise;
  /** Exercise 14: Stand up! */
  exercise14: TExercise;
  /** Exercise 15: I want to lie down. */
  exercise15: TExercise;
  /** Exercise 16: It flew out. */
  exercise16: TExercise;
  /** Answer 1: bǎ shuǐguǒ ná-lái! */
  answer1: TAnswer;
  /** Answer 2: jìn-lái! */
  answer2: TAnswer;
  /** Answer 3: tā huí jiā le. */
  answer3: TAnswer;
  /** Answer 4: wǒ-men chū-qù le. */
  answer4: TAnswer;
  /** Answer 5: bǎ gōngjù ná-chū-lái! */
  answer5: TAnswer;
  /** Answer 6: bǎ hézi fàng-xià! */
  answer6: TAnswer;
  /** Answer 7: wǒ zhǎo-dào jīn le. */
  answer7: TAnswer;
  /** Answer 8: tā bǎ hézi nòng-huài le. */
  answer8: TAnswer;
  /** Answer 9: wǒ tīng-bù-dào. */
  answer9: TAnswer;
  /** Answer 10: nǐ kàn-de-dào ma? */
  answer10: TAnswer;
  /** Answer 11: mǐfàn chī-qǐ-lái hěn hǎo. */
  answer11: TAnswer;
  /** Answer 12: xiě-xià-qù! */
  answer12: TAnswer;
  /** Answer 13: nǐ zuò-xià! */
  answer13: TAnswer;
  /** Answer 14: zhàn-qǐ-lái! */
  answer14: TAnswer;
  /** Answer 15: wǒ yào tǎng-xià. */
  answer15: TAnswer;
  /** Answer 16: tā fēi-chū-qù le. */
  answer16: TAnswer;
  /** FAQ: lái or qù? (toward the speaker or away from the speaker) */
  faqLaiQu: TFaq;
  /** FAQ: is kàn-bù-dào the same as bù néng kàn? (no: you look, but the result doesn't come) */
  faqBuNeng: TFaq;
  /** FAQ: where does the thing go without bǎ? (between the direction word and lái / qù) */
  faqWithoutBa: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabNa: { type: "vocab", term: "{{word:na2}}", ttsText: "拿" },
  proseTowardAway: { type: "prose" },
  exampleTowardAway1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:na2}} {{word:zhe4}}-ge.",
    ttsText: "你拿这个。",
  },
  exampleTowardAway2: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}!",
    ttsText: "把水拿来！",
  },
  exampleTowardAway3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ba3}} {{word:shui3guo3}} {{word:na2}}-{{word:lai2}} {{word:le}}.",
    ttsText: "我把水果拿来了。",
  },
  exampleTowardAway4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:na2}}-{{word:qu4}} {{word:le}}.",
    ttsText: "他把盒子拿去了。",
  },
  exampleTowardAway5: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:na2}}-{{word:qu4}}!",
    ttsText: "把你的衣服拿去！",
  },
  vocabJin: { type: "vocab", term: "{{word:jin4}}", ttsText: "进" },
  vocabChu: { type: "vocab", term: "{{word:chu1}}", ttsText: "出" },
  vocabHui: { type: "vocab", term: "{{word:hui2}}", ttsText: "回" },
  proseInOut: { type: "prose" },
  exampleInOut1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:jin4}}-{{word:lai2}}!",
    ttsText: "你进来！",
  },
  exampleInOut2: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:jin4}}-{{word:qu4}}!",
    ttsText: "不要进去！",
  },
  exampleInOut3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
    ttsText: "他出去了。",
  },
  exampleInOut4: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:cong2}} {{word:he2zi}}-{{word:li3}} {{word:chu1}}-{{word:lai2}} {{word:le}}.",
    ttsText: "动物从盒子里出来了。",
  },
  exampleInOut5: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}}, {{word:zai4}} {{word:fu4jin4}} {{word:wan2r}}.",
    ttsText: "我们出去，在附近玩儿。",
  },
  exampleInOut6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}.",
    ttsText: "我要回家。",
  },
  exampleInOut7: {
    type: "example",
    pinyin: "{{Word:fu4mu3}} {{word:hui2}}-{{word:lai2}} {{word:le}}.",
    ttsText: "父母回来了。",
  },
  exampleInOut8: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:hui2}}-{{word:qu4}} {{word:le}} {{word:ma}}?",
    ttsText: "她回去了吗？",
  },
  vocabZuo: { type: "vocab", term: "{{word:zuo4}}", ttsText: "坐" },
  vocabZhan: { type: "vocab", term: "{{word:zhan4}}", ttsText: "站" },
  vocabTang: { type: "vocab", term: "{{word:tang3}}", ttsText: "躺" },
  vocabFei: { type: "vocab", term: "{{word:fei1}}", ttsText: "飞" },
  proseBody: { type: "prose" },
  exampleBody1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:xia4}}!",
    ttsText: "你坐下！",
  },
  exampleBody2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ttsText: "我坐在地上。",
  },
  exampleBody3: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:men}} {{word:dou1}} {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} {{word:le}}.",
    ttsText: "他们都站起来了。",
  },
  exampleBody4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zhan4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
    ttsText: "他站在我的前面。",
  },
  exampleBody5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}.",
    ttsText: "我要躺下。",
  },
  exampleBody6: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:tang3}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ttsText: "动物躺在地上。",
  },
  exampleBody7: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:fei1}}-{{word:shang4}}-{{word:qu4}} {{word:le}}.",
    ttsText: "动物飞上去了。",
  },
  exampleBody8: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:fei1}}-{{word:hui2}}-{{word:lai2}} {{word:le}}.",
    ttsText: "它飞回来了。",
  },
  proseMoveThing: { type: "prose" },
  exampleMoveThing1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ba3}} {{word:jin1}} {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:le}}.",
    ttsText: "他把金拿出来了。",
  },
  exampleMoveThing2: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:yi1fu}} {{word:fang4}}-{{word:jin4}}-{{word:qu4}}!",
    ttsText: "把衣服放进去！",
  },
  exampleMoveThing3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ba3}} {{word:shui3guo3}} {{word:na2}}-{{word:qi3}}-{{word:lai2}}.",
    ttsText: "我把水果拿起来。",
  },
  exampleMoveThing4: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:gong1ju4}} {{word:fang4}}-{{word:xia4}}!",
    ttsText: "把工具放下！",
  },
  exampleMoveThing5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ba3}} {{word:he2zi}} {{word:na2}}-{{word:hui2}}-{{word:qu4}}.",
    ttsText: "你把盒子拿回去。",
  },
  exampleMoveThing6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ba3}} {{word:gun4zi}} {{word:na2}}-{{word:shang4}}-{{word:lai2}} {{word:le}}.",
    ttsText: "他把棍子拿上来了。",
  },
  proseResult: { type: "prose" },
  exampleResult1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:he2zi}} {{word:le}}.",
    ttsText: "我找到我的盒子了。",
  },
  exampleResult2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
    ttsText: "我没找到。",
  },
  exampleResult3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}} {{word:le}} {{word:ma}}?",
    ttsText: "你看到他了吗？",
  },
  exampleResult4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}}-{{word:huai4}} {{word:le}}.",
    ttsText: "他把工具弄坏了。",
  },
  exampleResult5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}}-{{word:hao3}} {{word:le}}.",
    ttsText: "我把工具弄好了。",
  },
  exampleResult6: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:xue2}}-{{word:hui4}} {{word:le}} {{word:ma}}?",
    ttsText: "你学会了吗？",
  },
  proseCanCant: { type: "prose" },
  exampleCanCant1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}.",
    ttsText: "我看不到。",
  },
  exampleCanCant2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:de}}-{{word:dao4}} {{word:ma}}?",
    ttsText: "你听得到吗？",
  },
  exampleCanCant3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:bu4}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:yi1fu}}.",
    ttsText: "我找不到我的衣服。",
  },
  exampleCanCant4: {
    type: "example",
    pinyin: "{{Word:mi3fan4}} {{word:hen3}} {{word:duo1}}, {{word:wo3}} {{word:chi1}}-{{word:bu4}}-{{word:wan2}}.",
    ttsText: "米饭很多，我吃不完。",
  },
  exampleCanCant5: {
    type: "example",
    pinyin: "{{Word:he2zi}} {{word:hen3}} {{word:da4}}, {{word:wo3}} {{word:na2}}-{{word:bu4}}-{{word:dong4}}.",
    ttsText: "盒子很大，我拿不动。",
  },
  exampleCanCant6: {
    type: "example",
    pinyin: "{{Word:kou3}} {{word:hen3}} {{word:xiao3}}, {{word:wo3}}-{{word:men}} {{word:jin4}}-{{word:bu4}}-{{word:qu4}}.",
    ttsText: "口很小，我们进不去。",
  },
  proseSeems: { type: "prose" },
  exampleSeems1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这个水果看起来很好。",
  },
  exampleSeems2: {
    type: "example",
    pinyin: "{{Word:chi1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:tian2}}.",
    ttsText: "吃起来很甜。",
  },
  exampleSeems3: {
    type: "example",
    pinyin: "{{Word:ting1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:qi2guai4}}.",
    ttsText: "听起来很奇怪。",
  },
  exampleSeems4: {
    type: "example",
    pinyin: "{{Word:kong1qi4}} {{word:leng3}}-{{word:qi3}}-{{word:lai2}} {{word:le}}.",
    ttsText: "空气冷起来了。",
  },
  exampleSeems5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}!",
    ttsText: "你说下去！",
  },
  exampleSeems6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:xue2}}-{{word:xia4}}-{{word:qu4}}.",
    ttsText: "我要学下去。",
  },
  infoDirectionResult: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/direction-and-result",
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
  exercise14: { type: "exercise" },
  exercise15: { type: "exercise" },
  exercise16: { type: "exercise" },
  answer1: { type: "answer", ttsText: "把水果拿来！" },
  answer2: { type: "answer", ttsText: "进来！" },
  answer3: { type: "answer", ttsText: "她回家了。" },
  answer4: { type: "answer", ttsText: "我们出去了。" },
  answer5: { type: "answer", ttsText: "把工具拿出来！" },
  answer6: { type: "answer", ttsText: "把盒子放下！" },
  answer7: { type: "answer", ttsText: "我找到金了。" },
  answer8: { type: "answer", ttsText: "他把盒子弄坏了。" },
  answer9: { type: "answer", ttsText: "我听不到。" },
  answer10: { type: "answer", ttsText: "你看得到吗？" },
  answer11: { type: "answer", ttsText: "米饭吃起来很好。" },
  answer12: { type: "answer", ttsText: "写下去！" },
  answer13: { type: "answer", ttsText: "你坐下！" },
  answer14: { type: "answer", ttsText: "站起来！" },
  answer15: { type: "answer", ttsText: "我要躺下。" },
  answer16: { type: "answer", ttsText: "它飞出去了。" },
  faqLaiQu: { type: "faq" },
  faqBuNeng: { type: "faq" },
  faqWithoutBa: { type: "faq" },
};

export default shape;
