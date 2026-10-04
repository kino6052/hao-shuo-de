// To ask for a turn, say gěi wǒ (give me), then the verb and yīxià (a
// moment). Pattern: gěi wǒ + verb + yīxià
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "my-turn",
  prose: {
    en: [
      "**To ask for a turn**, say {{word:gei3}} {{word:wo3}} (give me), then the verb and {{word:yi1xia4}} (a moment). It means \"let me … for a moment\".",
      "",
      "**{{word:gei3}} {{word:wo3}} + verb + {{word:yi1xia4}}**",
      "",
      "{{word:yi1xia4}} makes it small and friendly. Saying the verb twice does the same: {{word:gei3}} {{word:wo3}} {{word:kan4}}-kan (Lesson {{lesson:doubling-words}}).",
    ],
    ru: [
      "**Чтобы попросить дать попробовать**, скажите {{word:gei3}} {{word:wo3}} («дай мне»), потом глагол и {{word:yi1xia4}} (мгновение). Это значит «дай-ка я немножко …», совсем как русское «дай посмотреть».",
      "",
      "**{{word:gei3}} {{word:wo3}} + глагол + {{word:yi1xia4}}**",
      "",
      "{{word:yi1xia4}} делает просьбу маленькой и дружелюбной. Удвоенный глагол делает то же самое: {{word:gei3}} {{word:wo3}} {{word:kan4}}-kan (урок {{lesson:doubling-words}}).",
    ],
    tldr: {
      en: "{{word:gei3}} {{word:wo3}} + verb + {{word:yi1xia4}} is let me: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
      ru: "{{word:gei3}} {{word:wo3}} + глагол + {{word:yi1xia4}} — «дай-ка я»: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
    },
    necessity: {
      en: "Now you can ask to see, hear, or try something.",
      ru: "Теперь вы можете попросить посмотреть, послушать или попробовать.",
    },
  },
  info: {
    en: "{{word:gei3}} {{word:wo3}} + verb + {{word:yi1xia4}}, let me have a turn: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}. (Let me take a look.)",
    ru: "{{word:gei3}} {{word:wo3}} + глагол + {{word:yi1xia4}} — дай мне попробовать: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}. (Дай посмотреть.)",
  },
  examples: [
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
      hanzi: "给我看一下。",
      en: "Let me take a look.",
      ru: "Дай посмотреть.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:ting1}}-ting.",
      hanzi: "给我听听。",
      en: "Let me hear it.",
      ru: "Дай послушать.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:mo1}} {{word:yi1xia4}}.",
      hanzi: "给我摸一下。",
      en: "Let me touch it.",
      ru: "Дай потрогать.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:wan2r}} {{word:yi1xia4}}.",
      hanzi: "给我玩儿一下。",
      en: "Let me play with it for a bit.",
      ru: "Дай немного поиграть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:wan2}} {{word:le}} {{word:ma}}? {{Word:gei3}} {{word:wo3}} {{word:kan4}}-kan.",
      hanzi: "你看完了吗？给我看看。",
      en: "Are you done looking? Let me see.",
      ru: "Ты досмотрел? Дай посмотреть.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:mo1}} {{word:yi1xia4}} {{word:ta1}}-{{word:de}} {{word:mao2}}.",
      hanzi: "给我摸一下它的毛。",
      en: "Let me touch its fur.",
      ru: "Дай потрогать его шерсть.",
    },
  ],
  exercises: [
    {
      en: "Let me take a look.",
      ru: "Дай посмотреть.",
      answer: "{{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
      hanzi: "给我看一下。",
    },
  ],
  faq: [
    // why add yīxià? (it makes a request small and friendly)
    {
      question: { en: "Why add {{word:yi1xia4}}?", ru: "Зачем добавлять {{word:yi1xia4}}?" },
      en: "It makes the request small: \"just for a moment\". {{Word:gei3}} {{word:wo3}} {{word:kan4}} sounds blunt. {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}} sounds friendly.",
      ru: "Оно делает просьбу маленькой: «всего на минутку». {{Word:gei3}} {{word:wo3}} {{word:kan4}} звучит резко. {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}} звучит дружелюбно.",
    },
  ],
});
