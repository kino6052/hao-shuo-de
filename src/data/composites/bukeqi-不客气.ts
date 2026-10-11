import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 576,
  phase: 2,
  zh: "不客气",
  py: "bú kèqi",
  en: "you're welcome",
  ru: "пожалуйста",
  pos: "phrase",
  hsd: ["{{word:bu4}} {{word:yong4}} {{word:xie4}}"],
  tts: ["不用谢"],
  literal: "no need to thank",
  fit: "natural",
  note: "Lesson {{lesson:greetings-and-feelings}}.",
  examples: [
    {
      pinyin: "{{Word:xie4}}-{{word:xie4}}! {{Word:bu4}} {{word:yong4}} {{word:xie4}}.",
      hanzi: "谢谢！不用谢。",
      en: "Thank you! You're welcome.",
      ru: "Спасибо! Не за что.",
    },
    {
      pinyin: "{{Word:xie4}}-{{word:xie4}} {{word:ni3}} {{word:bang1}} {{word:wo3}}. {{Word:bu4}} {{word:yong4}} {{word:xie4}}.",
      hanzi: "谢谢你帮我。不用谢。",
      en: "Thanks for helping me. You're welcome.",
      ru: "Спасибо, что помог. Не за что.",
    },
  ],
});
