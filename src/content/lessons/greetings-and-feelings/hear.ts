// To say you hear a sound, say tīng-dào (hear) and shēngyīn (sound). Pattern:
// Who + tīng-dào + shēngyīn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "hear",
  words: [
    {
      word: "sheng1yin1",
      en: "sound, voice",
      ru: "звук, голос",
    },
  ],
  prose: {
    en: [
      "**To say you hear a sound**, say {{word:ting1}}-{{word:dao4}} (hear) and {{word:sheng1yin1}} (sound).",
      "",
      "**Who + {{word:ting1}}-{{word:dao4}} + {{word:sheng1yin1}}**",
    ],
    ru: [
      "**Чтобы сказать, что вы слышите звук**, скажите {{word:ting1}}-{{word:dao4}} (услышать) и {{word:sheng1yin1}} (звук).",
      "",
      "**Кто + {{word:ting1}}-{{word:dao4}} + {{word:sheng1yin1}}**",
    ],
    tldr: {
      en: "{{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}} means hear a sound.",
      ru: "{{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}} значит «услышать звук».",
    },
    necessity: {
      en: "Now you can talk about what you hear.",
      ru: "Теперь вы можете говорить о том, что слышите.",
    },
  },
  info: {
    en: "{{word:ting1}}-{{word:dao4}} + {{word:sheng1yin1}}, hear a sound: {{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:qi2guai4}}-{{word:de}} {{word:sheng1yin1}}. (I hear a strange sound.)",
    ru: "{{word:ting1}}-{{word:dao4}} + {{word:sheng1yin1}} — слышать звук: {{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:qi2guai4}}-{{word:de}} {{word:sheng1yin1}}. (Я слышу странный звук.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:qi2guai4}}-{{word:de}} {{word:sheng1yin1}}.",
      hanzi: "我听到奇怪的声音。",
      en: "I hear a strange sound.",
      ru: "Я слышу странный звук.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你的声音很好。",
      en: "Your voice is nice.",
      ru: "У тебя хороший голос.",
    },
    {
      pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "动物的声音很小。",
      en: "The animal's sound is quiet.",
      ru: "Животное звучит тихо.",
    },
    {
      pinyin: "{{Word:you3}} {{word:dong4wu4}}!",
      hanzi: "有动物！",
      en: "There's an animal!",
      ru: "Тут животное!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:le}} {{word:yi1}}-ge {{word:tou2}}-{{word:yi1}}-{{word:ci4}} {{word:ting1}}-{{word:dao4}}-{{word:de}} {{word:ci2}}.",
      hanzi: "我听到了一个头一次听到的词。",
      en: "I heard a word I'd never heard before.",
      ru: "Я услышал слово, которого никогда раньше не слышал.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}}. {{Word:fa1}}-{{word:sheng1}} {{word:le}} {{word:shen2me}}?",
      hanzi: "我听到声音。发生了什么？",
      en: "I hear a sound. What happened?",
      ru: "Я слышу звук. Что случилось?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:dong4wu4}} {{word:fei1}}-{{word:de}} {{word:sheng1yin1}}.",
      hanzi: "我听到动物飞的声音。",
      en: "I hear an animal flying.",
      ru: "Я слышу, как летит животное.",
    },
  ],
  exercises: [
    {
      en: "I hear a sound.",
      ru: "Я слышу звук.",
      answer: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}}.",
      hanzi: "我听到声音。",
    },
  ],
});
