import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 93,
  phase: 1,
  zh: "谢谢",
  py: "xièxie",
  en: "thank you",
  ru: "спасибо",
  pos: "verb",
  hsd: ["{{word:xie4}}-xie", "{{word:ni3}}-{{word:dui4}}-{{word:wo3}}-{{word:hen3}}-{{word:hao3}}"],
  tts: ["谢谢", "你对我很好"],
  literal: "thank-thank / you're very good to me",
  fit: "natural",
  note: "Lesson {{lesson:greetings-and-feelings}}. Also: hǎo-hǎo jué-de, zhè bǎ wǒ jué-de hěn hǎo.",
  examples: [
    {
      pinyin: "{{Word:xie4}}-{{light:xie4}} {{word:ni3}}!",
      hanzi: "谢谢你！",
      en: "Thank you!",
      ru: "Спасибо!",
    },
    {
      pinyin: "{{Word:xie4}}-{{light:xie4}}, {{word:wo3}} {{word:bu4}} {{word:he1}}.",
      hanzi: "谢谢，我不喝。",
      en: "No thanks, I won't have any.",
      ru: "Спасибо, я не буду.",
    },
  ],
});
