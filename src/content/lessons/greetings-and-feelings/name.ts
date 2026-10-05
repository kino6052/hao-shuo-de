// To say your name, use jiào (be called), with the name in quotes. Pattern:
// Who + jiào + "name"
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "name",
  words: [
    {
      word: "jiao4",
      en: "be called; call, make an animal sound",
      ru: "называться; звать, издавать звук (о животных)",
    },
  ],
  prose: {
    en: [
      "**To say your name**, use {{word:jiao4}} (be called), with the name in quotes.",
      "",
      "**Who + {{word:jiao4}} + \"name\"**",
      "",
      "Animals {{word:jiao4}} too: {{Word:dong4}}-{{word:wu4}} {{word:jiao4}} \"wang-wang\" means the animal goes woof.",
    ],
    ru: [
      "**Чтобы назвать своё имя**, используйте {{word:jiao4}} (называться), а имя поставьте в кавычки.",
      "",
      "**Кто + {{word:jiao4}} + \"имя\"**",
      "",
      "Животные тоже {{word:jiao4}}: {{Word:dong4}}-{{word:wu4}} {{word:jiao4}} \"wang-wang\" значит, что животное говорит «гав-гав».",
    ],
    tldr: {
      en: "{{word:jiao4}} + name: {{Word:wo3}} {{word:jiao4}} \"Lisa\", my name is Lisa.",
      ru: "{{word:jiao4}} + имя: {{Word:wo3}} {{word:jiao4}} \"Lisa\" — меня зовут Лиза.",
    },
    necessity: {
      en: "Now you can tell people your name, and ask theirs.",
      ru: "Теперь вы можете сказать, как вас зовут, и спросить чужое имя.",
    },
  },
  info: {
    en: "{{word:jiao4}} + \"name\": {{Word:wo3}} {{word:jiao4}} \"Lisa\". (My name is Lisa.) {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}? (What's your name?)",
    ru: "{{word:jiao4}} + \"имя\": {{Word:wo3}} {{word:jiao4}} \"Lisa\". (Меня зовут Лиза.) {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}? (Как тебя зовут?)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiao4}} \"Lisa\".",
      hanzi: "我叫丽莎。",
      en: "My name is Lisa.",
      ru: "Меня зовут Лиза.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
      hanzi: "你叫什么？",
      en: "What's your name?",
      ru: "Как тебя зовут?",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:dong4}}-{{word:wu4}} {{word:jiao4}} \"wang-wang\".",
      hanzi: "那个动物叫汪汪。",
      en: "That animal goes woof woof.",
      ru: "То животное говорит «гав-гав».",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiao4}} \"Tom\" {{word:huo4}}-{{word:zhe3}} \"Tim\".",
      hanzi: "他叫\"Tom\"或者\"Tim\"。",
      en: "He's called Tom or Tim.",
      ru: "Его зовут Том или Тим.",
    },
  ],
  exercises: [
    {
      en: "His name is \"Tom\".",
      ru: "Его зовут «Том».",
      answer: "{{Word:ta1}} {{word:jiao4}} \"Tom\".",
      hanzi: "他叫汤姆。",
    },
  ],
});
