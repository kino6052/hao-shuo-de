// YS1: forms that used a sense of a word only its compounds may use (check-sounds: zài "again" lives in zài-jiàn,
// zuò "sit" in zuò-xià ...), rewritten with other words or dropped where the entry has another form. Made by Claude on
// 2026-10-22 without a review by the author.
// Run: npm run refactor -- refactors/YS1.ts [--diff] [--write]

export default [
  { op: "composite", zh: "摆脱", set: {"literal":"walk out of X, not be together with X / do not let X be with me","hsd":["{{word:zou3}}-{{word:chu1}} X, {{word:bu4}} {{word:he2}} X {{word:zai4}} {{word:yi1}}-{{word:qi3}}","{{word:bu4}} {{word:rang4}} X {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}}"],"tts":["走出X，不和X在一起","不让X和我一起"]} },
  { op: "composite", zh: "创作", set: {"literal":"make something new and beautiful","hsd":["{{word:zuo4}}-{{word:chu1}} {{word:xin1#new}}-{{word:de}}, {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],"tts":["做出新的、好看的东西"]} },
  { op: "composite", zh: "大巴", set: {"literal":"a big vehicle for very many people / a big vehicle with very many people in it","hsd":["{{word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:da4}} {{word:che1}}","{{word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:da4}} {{word:che1}}"],"tts":["很多人的大车","很多人在里面的大车"]} },
  { op: "composite", zh: "点名", set: {"fit":"plain","hsd":["{{word:yi1}}-{{light:ge4}} {{word:yi1}}-{{light:ge4}} {{word:jiao4}} {{word:ming2}}-{{word:zi4}}"],"tts":["一个一个叫名字"]} },
  { op: "composite", zh: "汽水", set: {"literal":"sweet water that has air in it","hsd":["{{word:you3}} {{word:qi4}}-{{word:de}} {{word:tian2}}-{{word:de}} {{word:shui3}}"],"tts":["有气的甜的水"]} },
  { op: "composite", zh: "气味", set: {"fit":"plain","literal":"the taste the nose knows","hsd":["{{word:bi2zi}} {{word:zhi1dao4}}-{{word:de}} {{word:wei4}}-{{word:dao4}}"],"tts":["鼻子知道的味道"]} },
  { op: "composite", zh: "实话", set: {"fit":"plain","literal":"true words","hsd":["{{word:zhen1}}-{{word:de}} {{word:hua4}}"],"tts":["真的话"]} },
  { op: "composite", zh: "再说", set: {"hsd":["{{word:yi3}}-{{word:hou4}} {{word:shuo1}}","{{word:hai2}} {{word:you3}}"],"tts":["以后说","还有"]} },
  { op: "composite", zh: "姿势", set: {"literal":"the look of the body","hsd":["{{word:shen1ti3}}-{{word:de}} {{word:yang4}}-{{word:zi}}"],"tts":["身体的样子"]} },
];
