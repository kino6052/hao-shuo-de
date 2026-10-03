// English text for everyday-patterns, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Everyday Patterns"] },
  summary: {
    en: [
      "Every day, we offer help, ask for a turn, and let people do things.",
      "In this lesson, you'll be able to say \"Let me do it!\", \"Let me take a look.\", \"Help me!\", \"My parents won't let me go out.\", and \"Let's go out, okay?\"",
    ],
  },
  proseLetMe: {
    en: [
      "**To offer to do something**, say {{word:wo3}} {{word:lai2}} (I come), then the verb. It means \"let me do it\".",
      "",
      "**{{word:wo3}} {{word:lai2}} + verb**",
      "",
      "{{Word:wo3}} {{word:lai2}}! alone is \"let me!\". {{word:wo3}}-{{word:men}} {{word:lai2}} + verb is \"let's\".",
    ],
    tldr: {
      en: [
        "{{word:wo3}} {{word:lai2}} + verb is let me: {{Word:wo3}} {{word:lai2}} {{word:na2}}, let me carry it.",
      ],
    },
    necessity: { en: ["Now you can offer to do something."] },
  },
  exampleLetMe1: { en: ["Let me!"] },
  exampleLetMe2: { en: ["Let me carry it."] },
  exampleLetMe3: { en: ["Wait a bit, let me do it."] },
  exampleLetMe4: { en: ["Let me ask him."] },
  exampleLetMe5: { en: ["Let's have a look."] },
  exampleLetMe6: { en: ["No problem, let me!"] },
  proseMyTurn: {
    en: [
      "**To ask for a turn**, say {{word:gei3}} {{word:wo3}} (give me), then the verb and {{word:yi1xia4}} (a moment). It means \"let me … for a moment\".",
      "",
      "**{{word:gei3}} {{word:wo3}} + verb + {{word:yi1xia4}}**",
      "",
      "{{word:yi1xia4}} makes it small and friendly. Saying the verb twice does the same: {{word:gei3}} {{word:wo3}} {{word:kan4}}-kan (Lesson {{lesson:doubling-words}}).",
    ],
    tldr: {
      en: [
        "{{word:gei3}} {{word:wo3}} + verb + {{word:yi1xia4}} is let me: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
      ],
    },
    necessity: { en: ["Now you can ask to see, hear, or try something."] },
  },
  exampleMyTurn1: { en: ["Let me take a look."] },
  exampleMyTurn2: { en: ["Let me hear it."] },
  exampleMyTurn3: { en: ["Let me touch it."] },
  exampleMyTurn4: { en: ["Let me play with it for a bit."] },
  exampleMyTurn5: { en: ["Are you done looking? Let me see."] },
  exampleMyTurn6: { en: ["Let me touch its fur."] },
  vocabBang: { en: ["help"] },
  proseHelp: {
    en: [
      "**To help someone do something**, put {{word:bang1}} (help) and the person before the verb.",
      "",
      "**Who + {{word:bang1}} + person + verb**",
      "",
      "Add {{word:yi1xia4}} to ask nicely: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1xia4}} is \"could you look for it for me?\". \"Help me!\" is {{word:bang1}}-bang {{word:wo3}}!",
    ],
    tldr: {
      en: [
        "{{word:bang1}} + person + verb is help someone do it: {{word:wo3}} {{word:bang1}} {{word:ni3}} {{word:na2}}.",
      ],
    },
    necessity: { en: ["Now you can ask for help and offer it."] },
  },
  exampleHelp1: { en: ["Help me!"] },
  exampleHelp2: { en: ["I'll help you."] },
  exampleHelp3: { en: ["Could you hold this for me?"] },
  exampleHelp4: { en: ["I'll help you take the box in."] },
  exampleHelp5: { en: ["He helps his parents make rice."] },
  exampleHelp6: { en: ["Thank you for helping me."] },
  exampleHelp7: { en: ["Don't laugh, help me!"] },
  exampleHelp8: { en: ["The house is a mess. Could you help me?"] },
  exampleHelp9: { en: ["Let me help you stand up."] },
  exampleHelp10: { en: ["Come help me, quick!"] },
  exampleHelp11: { en: ["Could you work it out for me?"] },
  exampleHelp12: { en: ["You're helping me, and that makes me happy."] },
  vocabTeach: { en: ["teach"] },
  proseTeach: {
    en: [
      "**To teach someone to do something**, put {{word:jiao1}} (teach) and the person before the verb, like {{word:bang1}}.",
      "",
      "**Who + {{word:jiao1}} + person + verb**",
      "",
      "{{word:jiao1}} has a high, flat tone. {{word:jiao4}}, with a falling tone, is \"call\" or \"let\" (Lesson {{lesson:greetings-and-feelings}}). {{word:jiao1}} and {{word:xue2}} go together: {{Word:ni3}} {{word:jiao1}}, {{word:wo3}} {{word:xue2}}.",
    ],
    tldr: {
      en: [
        "{{word:jiao1}} + person + verb is teach: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
      ],
    },
    necessity: { en: ["Now you can teach, and ask to be taught."] },
  },
  exampleTeach1: { en: ["I'll teach you to write."] },
  exampleTeach2: { en: ["Can you teach me?"] },
  exampleTeach3: { en: ["You teach, and I'll learn."] },
  exampleTeach4: { en: ["He teaches well."] },
  proseHaveSomeone: {
    en: [
      "**To have someone do something, or let them**, put {{word:jiao4}} and the person before the verb.",
      "",
      "**Who + {{word:jiao4}} / {{word:bu4}} {{word:jiao4}} + person + verb**",
      "",
      "You know {{word:jiao4}} as \"be called\" (Lesson {{lesson:greetings-and-feelings}}). With a person and a verb after it, it means \"tell, have, let\". {{word:bu4}} {{word:jiao4}} is \"won't let\".",
    ],
    tldr: {
      en: [
        "{{word:jiao4}} + person + verb is have them do it, or let them. {{word:bu4}} {{word:jiao4}} is won't let.",
      ],
    },
    necessity: { en: ["Now you can say who lets you, and who doesn't."] },
  },
  exampleHaveSomeone1: { en: ["Let him in."] },
  exampleHaveSomeone2: { en: ["I told them to wait."] },
  exampleHaveSomeone3: { en: ["My parents won't let me go out."] },
  exampleHaveSomeone4: { en: ["He won't let me look."] },
  exampleHaveSomeone5: { en: ["Let him keep talking."] },
  proseMayI: {
    en: [
      "**To ask if you may**, put {{word:neng2}} (can) before the verb and {{word:ma}} at the end. **To suggest something, or to ask nicely**, add {{word:hao3}} {{word:ma}}? (okay?) at the end.",
      "",
      "**Who + {{word:neng2}} + verb + {{word:ma}}? / …, {{word:hao3}} {{word:ma}}?**",
      "",
      "To say yes, answer {{Word:neng2}}! or {{Word:hao3}}!. {{word:wo3}}-{{word:men}} + verb, {{word:hao3}} {{word:ma}}? is \"let's …, okay?\".",
    ],
    tldr: {
      en: [
        "{{word:neng2}} … {{word:ma}}? asks if you may. Add {{word:hao3}} {{word:ma}}? for let's or please.",
      ],
    },
    necessity: { en: ["Now you can ask nicely, and make plans with people."] },
  },
  exampleMayI1: { en: ["Can I come in?"] },
  exampleMayI2: { en: ["May I touch it?"] },
  exampleMayI3: { en: ["You can't sleep here."] },
  exampleMayI4: { en: ["Let's go out and play, okay?"] },
  exampleMayI5: { en: ["Could you help me, please?"] },
  exampleMayI6: { en: ["Okay!"] },
  exampleMayI7: { en: ["Sit on my left, okay?"] },
  infoEveryday: {
    title: { en: ["Let and Help"] },
    items: [
      {
        en: [
          "{{word:wo3}} {{word:lai2}} + verb, let me: {{Word:wo3}} {{word:lai2}} {{word:na2}}. (Let me carry it.)",
        ],
      },
      {
        en: [
          "{{word:gei3}} {{word:wo3}} + verb + {{word:yi1xia4}}, let me have a turn: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}. (Let me take a look.)",
        ],
      },
      {
        en: [
          "{{word:bang1}} + person + verb, help: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:na2}} {{word:yi1xia4}}. (Could you hold this for me?)",
        ],
      },
      {
        en: [
          "{{word:jiao4}} + person + verb, have or let: {{Word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}. (Let him in.) {{word:bu4}} {{word:jiao4}}, won't let: {{Word:fu4mu3}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}. (My parents won't let me go out.)",
        ],
      },
      {
        en: [
          "{{word:neng2}} … {{word:ma}}?, may I: {{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}? (Can I come in?) …, {{word:hao3}} {{word:ma}}?, let's or please: {{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}? (Let's go out and play, okay?)",
        ],
      },
      {
        en: [
          "{{word:jiao1}} + person + verb, teach: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}. (I'll teach you to write.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Let me!"] },
  exercise2: { en: ["Let me ask."] },
  exercise3: { en: ["Let me take a look."] },
  exercise4: { en: ["Help me!"] },
  exercise5: { en: ["I'll help you."] },
  exercise6: { en: ["Could you look for it for me?"] },
  exercise7: { en: ["Have them come in."] },
  exercise8: { en: ["He won't let me write."] },
  exercise9: { en: ["Can I come in?"] },
  exercise10: { en: ["Let's eat rice, okay?"] },
  exercise11: { en: ["Thank you for helping me."] },
  exercise12: { en: ["Can you teach me?"] },
  exercise13: { en: ["I'll teach you to write."] },
  answer1: { en: ["{{Word:wo3}} {{word:lai2}}!"] },
  answer2: { en: ["{{Word:wo3}} {{word:lai2}} {{word:wen4}}."] },
  answer3: { en: ["{{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}."] },
  answer4: { en: ["{{Word:bang1}}-bang {{word:wo3}}!"] },
  answer5: { en: ["{{Word:wo3}} {{word:bang1}} {{word:ni3}}."] },
  answer6: { en: ["{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1xia4}}."] },
  answer7: { en: ["{{Word:jiao4}} {{word:ta1}}-{{word:men}} {{word:jin4}}-{{word:lai2}}."] },
  answer8: { en: ["{{Word:ta1}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:xie3}}."] },
  answer9: { en: ["{{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}?"] },
  answer10: { en: ["{{Word:wo3}}-{{word:men}} {{word:chi1}} {{word:mi3fan4}}, {{word:hao3}} {{word:ma}}?"] },
  answer11: { en: ["{{Word:xie4}}-xie {{word:ni3}} {{word:bang1}} {{word:wo3}}."] },
  answer12: { en: ["{{Word:ni3}} {{word:neng2}} {{word:jiao1}} {{word:wo3}} {{word:ma}}?"] },
  answer13: { en: ["{{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}."] },
  faqLetWord: {
    question: { en: ["Isn't there a word for \"let\"?"] },
    en: [
      "Everyday Mandarin has one, but Hao-shuo-de doesn't need it. {{word:jiao4}} lets other people do things, {{word:wo3}} {{word:lai2}} offers, and {{word:gei3}} {{word:wo3}} asks for a turn. Everyone understands all three.",
    ],
  },
  faqJiaoName: {
    question: { en: ["How do I tell {{word:jiao4}} \"let\" from {{word:jiao4}} \"be called\"?"] },
    en: [
      "Look at what comes after it. A name: {{Word:ta1}} {{word:jiao4}} \"Lisa\" (Her name is Lisa). A person and a verb: {{Word:ta1}} {{word:jiao4}} {{word:wo3}} {{word:lai2}} (She told me to come).",
    ],
  },
  faqWhyYixia: {
    question: { en: ["Why add {{word:yi1xia4}}?"] },
    en: [
      "It makes the request small: \"just for a moment\". {{Word:gei3}} {{word:wo3}} {{word:kan4}} sounds blunt. {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}} sounds friendly.",
    ],
  },
};

export default en;
