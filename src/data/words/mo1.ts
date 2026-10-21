import { word } from "../../lib/word.ts";

export default word("mo1", {
  term: "mō",
  hanzi: "摸",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to touch, feel, pet, perceive by contact",
    rus: "трогать, ощупывать, гладить, воспринимать на ощупь",
    zh: "摸，触摸，抚摸，通过接触感知",
  },
  necessity: {
    index: 3,
    eng: "Touch, feel with your hand. The sense of touch has no other word.",
    rus: "Трогать, щупать. У осязания нет другого слова.",
  },
  topics: ["smell-taste-touch-and-feeling"],
  isA: ["perceiving"],
  maps: "pilin",
  atom: {
    eng: "Touch is a basic way of perceiving that has nothing to do with the other senses.",
    rus: "Осязание — основной способ восприятия, не связанный с остальными чувствами.",
  },
});
