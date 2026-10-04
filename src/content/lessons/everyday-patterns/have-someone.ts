// To have someone do something, or let them, put jiào and the person before
// the verb. bù jiào is won't let. Pattern: Who + jiào + person + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "have-someone",
  prose: {
    en: [
      "**To have someone do something, or let them**, put {{word:jiao4}} and the person before the verb.",
      "",
      "**Who + {{word:jiao4}} / {{word:bu4}} {{word:jiao4}} + person + verb**",
      "",
      "You know {{word:jiao4}} as \"be called\" (Lesson {{lesson:greetings-and-feelings}}). With a person and a verb after it, it means \"tell, have, let\". {{word:bu4}} {{word:jiao4}} is \"won't let\".",
    ],
    ru: [
      "**Чтобы велеть кому-то что-то сделать или позволить это**, поставьте {{word:jiao4}} и человека перед глаголом.",
      "",
      "**Кто + {{word:jiao4}} / {{word:bu4}} {{word:jiao4}} + человек + глагол**",
      "",
      "{{word:jiao4}} вы знаете как «называться» (урок {{lesson:greetings-and-feelings}}). Если после него идут человек и глагол, оно значит «велеть, пусть, позволить». {{word:bu4}} {{word:jiao4}} — «не позволять».",
    ],
    tldr: {
      en: "{{word:jiao4}} + person + verb is have them do it, or let them. {{word:bu4}} {{word:jiao4}} is won't let.",
      ru: "{{word:jiao4}} + человек + глагол — велеть или позволить. {{word:bu4}} {{word:jiao4}} — не позволять.",
    },
    necessity: {
      en: "Now you can say who lets you, and who doesn't.",
      ru: "Теперь вы можете сказать, кто вам разрешает, а кто нет.",
    },
  },
  info: {
    en: "{{word:jiao4}} + person + verb, have or let: {{Word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}. (Let him in.) {{word:bu4}} {{word:jiao4}}, won't let: {{Word:fu4mu3}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}. (My parents won't let me go out.)",
    ru: "{{word:jiao4}} + человек + глагол — велеть или позволить: {{Word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}. (Пусть войдёт.) {{word:bu4}} {{word:jiao4}} — не позволять: {{Word:fu4mu3}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}. (Родители не пускают меня гулять.)",
  },
  examples: [
    {
      pinyin: "{{Word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}.",
      hanzi: "叫他进来。",
      en: "Let him in.",
      ru: "Пусть войдёт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jiao4}} {{word:ta1}}-{{word:men}} {{word:deng3}}.",
      hanzi: "我叫他们等。",
      en: "I told them to wait.",
      ru: "Я велел им подождать.",
    },
    {
      pinyin: "{{Word:fu4mu3}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}.",
      hanzi: "父母不叫我出去。",
      en: "My parents won't let me go out.",
      ru: "Родители не пускают меня гулять.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:kan4}}.",
      hanzi: "他不叫我看。",
      en: "He won't let me look.",
      ru: "Он не даёт мне посмотреть.",
    },
    {
      pinyin: "{{Word:jiao4}} {{word:ta1}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}.",
      hanzi: "叫他说下去。",
      en: "Let him keep talking.",
      ru: "Пусть говорит дальше.",
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
      answer: "{{Word:ta1}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:xie3}}.",
      hanzi: "他不叫我写。",
    },
  ],
  faq: [
    // is there a word for "let"? (Mandarin has one; jiào, wǒ lái, and gěi wǒ do the job)
    {
      question: { en: "Isn't there a word for \"let\"?", ru: "Разве нет слова для «пусть» или «позволить»?" },
      en: "Everyday Mandarin has one, but Hao-shuo-de doesn't need it. {{word:jiao4}} lets other people do things, {{word:wo3}} {{word:lai2}} offers, and {{word:gei3}} {{word:wo3}} asks for a turn. Everyone understands all three.",
      ru: "В обычном китайском есть, но Hǎo-shuō-de без него обходится. {{word:jiao4}} позволяет другим что-то сделать, {{word:wo3}} {{word:lai2}} предлагает, а {{word:gei3}} {{word:wo3}} просит дать попробовать. Все три понятны любому.",
    },
    // how do I tell jiào "let" from jiào "be called"? (a name in quotes, or a person and a verb)
    {
      question: {
        en: "How do I tell {{word:jiao4}} \"let\" from {{word:jiao4}} \"be called\"?",
        ru: "Как отличить {{word:jiao4}} «пусть» от {{word:jiao4}} «называться»?",
      },
      en: "Look at what comes after it. A name: {{Word:ta1}} {{word:jiao4}} \"Lisa\" (Her name is Lisa). A person and a verb: {{Word:ta1}} {{word:jiao4}} {{word:wo3}} {{word:lai2}} (She told me to come).",
      ru: "Посмотрите, что идёт после него. Имя: {{Word:ta1}} {{word:jiao4}} \"Lisa\" (Её зовут Лиза). Человек и глагол: {{Word:ta1}} {{word:jiao4}} {{word:wo3}} {{word:lai2}} (Она велела мне прийти).",
    },
  ],
});
