import { word } from "../../lib/word.ts";

export default word("jiao4", {
  term: "jiào",
  hanzi: "叫",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to call, be named; to produce an animal vocalization under the Quote Partition; before a person and a verb, to tell, have, or let them do it (e.g. {{word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}, \"let him in\"; {{word:bu4}} {{word:jiao4}}, \"won't let\")",
    rus: "звать, называться; издавать звук животного (в рамках правила о кавычках); перед человеком и глаголом — велеть или позволить (например, {{word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}} — «пусть войдёт»)",
    zh: "叫，被称为；在\"引号隔离规则\"下发出动物叫声",
  },
  necessity: {
    index: 3,
    eng: "Call, be named, and \"have someone do it\". Names can't be asked about without it.",
    rus: "Называть(ся), а также «велеть кому-то». Без него не спросить, как кого зовут.",
  },
  topics: ["saying-and-calling"],
  isA: ["speaking-action"],
  maps: "nimi, mu",
  senses: {
    compare: {
      hanzi: "较",
      eng: "compare",
      rus: "сравнивать",
      compounds: ["bi3 jiao4"],
      why: {
        eng: "{{hanzi:Written 较, }}{{word:jiao4#compare}} means compare in {{word:bi3}}-{{word:jiao4}}; on its own it is call.",
        rus: "{{hanzi:Записанное как 较, }}{{word:jiao4#compare}} значит «сравнивать» в {{word:bi3}}-{{word:jiao4}}; само по себе — «звать».",
      },
    },
  },
  paraphrase: {
    forms: ["{{word:yong4}} {{word:kou3}} {{word:rang4}} {{word:ta1}} {{word:lai2}}"],
    verdict: "clumsy",
  },
});
