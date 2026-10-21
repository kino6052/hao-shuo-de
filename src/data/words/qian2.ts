import { word } from "../../lib/word.ts";

export default word("qian2", {
  term: "qián",
  hanzi: "前",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "front, face, foremost area, chest",
    rus: "перед, лицо, передняя область, грудь",
    zh: "前面，脸，最前方区域，胸部",
  },
  necessity: {
    index: 5,
    eng: "In front, and before (in time): {{word:qian2}}-{{word:mian4}}, in front.",
    rus: "Впереди, а также «раньше»: {{word:qian2}}-{{word:mian4}} — впереди.",
  },
  topics: ["up-down-in-out"],
  isA: ["place-relation"],
  maps: "sinpin",
  atom: {
    eng: "Front is learned from your own body, the side you face; \"where the eyes look\" needs eyes and looking.",
    rus: "«Перед» узнают по своему телу — сторона, куда обращено лицо; «куда смотрят глаза» требует глаз и взгляда.",
  },
});
