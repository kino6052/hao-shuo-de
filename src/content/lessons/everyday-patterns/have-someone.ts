// To have someone do something, put jiào and the person before the verb; to
// let them, ràng. bù ràng is won't let. Pattern: Who + jiào / ràng + person + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "have-someone",
  words: [
    {
      word: "rang4",
      en: "let, make",
      ru: "позволять, заставлять",
    },
  ],
  prose: {
    en: [
      "**To have someone do something**, put {{word:jiao4}} and the person before the verb. **To let them**, put {{word:rang4}} there.",
      "",
      "**Who + {{word:jiao4}} / {{word:rang4}} + person + verb**",
      "",
      "You know {{word:jiao4}} as \"be called\" (Lesson {{lesson:greetings-and-feelings}}). With a person and a verb after it, it means \"tell, have\". {{word:rang4}} lets: {{Word:rang4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}, let him in. {{word:bu4}} {{word:rang4}} is \"won't let\".",
      "{{word:rang4}} also makes something happen to someone: {{Word:zhe4}} {{word:rang4}} {{word:wo3}} {{word:hen3}} {{word:pa4}}, this scares me.",
    ],
    ru: [
      "**Чтобы велеть кому-то что-то сделать**, поставьте {{word:jiao4}} и человека перед глаголом. **Чтобы позволить**, поставьте туда {{word:rang4}}.",
      "",
      "**Кто + {{word:jiao4}} / {{word:rang4}} + человек + глагол**",
      "",
      "{{word:jiao4}} вы знаете как «называться» (урок {{lesson:greetings-and-feelings}}). Если после него идут человек и глагол, оно значит «велеть». {{word:rang4}} позволяет: {{Word:rang4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}} — впусти его. {{word:bu4}} {{word:rang4}} — «не позволять».",
      "А ещё {{word:rang4}} значит «вызывать что-то у кого-то»: {{Word:zhe4}} {{word:rang4}} {{word:wo3}} {{word:hen3}} {{word:pa4}} — мне от этого страшно.",
    ],
    tldr: {
      en: "{{word:jiao4}} + person + verb: have them do it. {{word:rang4}} + person + verb: let them. {{word:bu4}} {{word:rang4}}: won't let.",
      ru: "{{word:jiao4}} + человек + глагол — велеть. {{word:rang4}} + человек + глагол — позволить. {{word:bu4}} {{word:rang4}} — не позволять.",
    },
    necessity: {
      en: "Now you can say who lets you, and who tells you what to do.",
      ru: "Теперь вы можете сказать, кто вам разрешает, а кто вам что-то велит.",
    },
  },
  info: {
    en: "{{word:jiao4}} + person + verb, have: {{Word:wo3}} {{word:jiao4}} {{word:ta1}}-{{word:men}} {{word:deng3}}. (I told them to wait.) {{word:rang4}} + person + verb, let: {{Word:rang4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}. (Let him in.) {{word:bu4}} {{word:rang4}}, won't let: {{Word:ba4ba}}-{{word:ma1ma}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}. (My parents won't let me go out.)",
    ru: "{{word:jiao4}} + человек + глагол — велеть: {{Word:wo3}} {{word:jiao4}} {{word:ta1}}-{{word:men}} {{word:deng3}}. (Я велел им подождать.) {{word:rang4}} + человек + глагол — позволить: {{Word:rang4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}. (Впусти его.) {{word:bu4}} {{word:rang4}} — не позволять: {{Word:ba4ba}}-{{word:ma1ma}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}. (Родители не пускают меня гулять.)",
  },
  examples: [
    {
      pinyin: "{{Word:rang4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}.",
      hanzi: "让他进来。",
      en: "Let him in.",
      ru: "Впусти его.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jiao4}} {{word:ta1}}-{{word:men}} {{word:deng3}}.",
      hanzi: "我叫他们等。",
      en: "I told them to wait.",
      ru: "Я велел им подождать.",
    },
    {
      pinyin: "{{Word:ba4ba}}-{{word:ma1ma}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}.",
      hanzi: "爸爸妈妈不让我出去。",
      en: "My parents won't let me go out.",
      ru: "Родители не пускают меня гулять.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:kan4}}.",
      hanzi: "他不让我看。",
      en: "He won't let me look.",
      ru: "Он не даёт мне посмотреть.",
    },
    {
      pinyin: "{{Word:jiao4}} {{word:ta1}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}.",
      hanzi: "叫他说下去。",
      en: "Have him keep talking.",
      ru: "Пусть говорит дальше.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:rang4}} {{word:wo3}} {{word:hen3}} {{word:pa4}}.",
      hanzi: "这让我很怕。",
      en: "This scares me.",
      ru: "Мне от этого страшно.",
    },
  ],
  exercises: [
    {
      en: "Have them come in.",
      ru: "Пусть они войдут.",
      answer: "{{Word:jiao4}} {{word:ta1}}-{{word:men}} {{word:jin4}}-{{word:lai2}}.",
      hanzi: "叫他们进来。",
    },
    {
      en: "He won't let me write.",
      ru: "Он не даёт мне писать.",
      answer: "{{Word:ta1}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:xie3}}.",
      hanzi: "他不让我写。",
    },
    {
      en: "Let me in.",
      ru: "Пусти меня.",
      answer: "{{Word:rang4}} {{word:wo3}} {{word:jin4}}-{{word:qu4}}.",
      hanzi: "让我进去。",
    },
  ],
  faq: [
    // jiào or ràng? (tell vs let; Mandarin often takes either)
    {
      question: {
        en: "When do I use {{word:jiao4}}, and when {{word:rang4}}?",
        ru: "Когда говорить {{word:jiao4}}, а когда {{word:rang4}}?",
      },
      en: "{{word:jiao4}} tells someone to do it; {{word:rang4}} lets them, or makes it happen to them. {{Word:jiao4}} {{word:ta1}} {{word:lai2}}: tell him to come. {{Word:rang4}} {{word:ta1}} {{word:lai2}}: let him come. In everyday talk the two often stand in for each other.",
      ru: "{{word:jiao4}} велит что-то сделать; {{word:rang4}} позволяет или вызывает что-то у человека. {{Word:jiao4}} {{word:ta1}} {{word:lai2}} — вели ему прийти. {{Word:rang4}} {{word:ta1}} {{word:lai2}} — пусть придёт. В обычной речи их часто говорят одно вместо другого.",
    },
    // how do I tell jiào "tell" from jiào "be called"? (a name in quotes, or a person and a verb)
    {
      question: {
        en: "How do I tell {{word:jiao4}} \"tell\" from {{word:jiao4}} \"be called\"?",
        ru: "Как отличить {{word:jiao4}} «велеть» от {{word:jiao4}} «называться»?",
      },
      en: "Look at what comes after it. A name: {{Word:ta1}} {{word:jiao4}} \"Lisa\" (Her name is Lisa). A person and a verb: {{Word:ta1}} {{word:jiao4}} {{word:wo3}} {{word:lai2}} (She told me to come).",
      ru: "Посмотрите, что идёт после него. Имя: {{Word:ta1}} {{word:jiao4}} \"Lisa\" (Её зовут Лиза). Человек и глагол: {{Word:ta1}} {{word:jiao4}} {{word:wo3}} {{word:lai2}} (Она велела мне прийти).",
    },
  ],
});
