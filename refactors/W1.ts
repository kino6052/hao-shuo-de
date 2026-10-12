// W1: word batch 1: paraphrases and atom marks.
// Made by scripts/review-batch.js from the author's decisions (review/decisions): 20 op(s).
// Not decided yet, so not here (60): ni3, ta1, shen2me, men, jia1, guo2, fang2, men2, ri4, yue4, zhi2wu4, huo3, qi4, ren2, nv3, guan1xi, ba4ba, ma1ma, shui3, fan4, guo3, you2, ju4, ji1, deng1, che1, wang3, xian4, bao1, liao4, jin1, yi1fu, wu4, shu1, qiu2, ci2, li4, sheng1yin1, jia4zhi2, fa3, gong1, zi4, ti2, shu4, zhong3, fen1, yang4, bie2, tong2, liang3, san1, si4, wu3, liu4, qi1, ba1, jiu3, shi2, er4, ling2.
// Run: npm run refactor -- refactors/W1.ts [--write]

export default [
  {"op":"atom","id":"wo3","eng":"You learn it by pointing at yourself; any other way of saying \"I\" already needs a pointer.","rus":"Его усваивают, показывая на себя: любой другой способ сказать «я» уже требует указателя."},
  {"op":"atom","id":"na4","eng":"\"That\" is learned by pointing at what is away from you; it stands beside zhè, not under it.","rus":"«Тот» усваивают, показывая на то, что вдали; nà стоит рядом с zhè, а не под ним."},
  {"op":"atom","id":"zhe4","eng":"\"This\" is learned by pointing at what is near you; \"the near one\" already needs \"near\".","rus":"«Этот» усваивают, показывая на то, что рядом; «ближний» уже требует «близко»."},
  {"op":"atom","id":"bi2zi","eng":"The nose is learned by pointing at it; \"where air goes in\" says what it does, not what it is.","rus":"Нос усваивают, показывая на него; «куда входит воздух» говорит, что он делает, а не что это."},
  {"op":"atom","id":"yan3jing","eng":"The eye is learned by pointing at it; \"the part that sees\" leans on kàn, which is said with the eyes.","rus":"Глаз усваивают, показывая на него; «часть, которая видит» опирается на kàn, а kàn объясняют через глаза."},
  {"op":"atom","id":"jiao3","eng":"The foot is learned by pointing at it; \"the part that walks\" only names what it does.","rus":"Ступню усваивают, показывая на неё; «часть, которая ходит» называет лишь то, что она делает."},
  {"op":"atom","id":"kou3","eng":"The mouth is learned by pointing at it; eating and speaking are what it is for, not what it is.","rus":"Рот усваивают, показывая на него; есть и говорить — для чего он нужен, а не что это."},
  {"op":"atom","id":"shen1ti3","eng":"The body is learned from your own; \"a person from head to foot\" already needs the head and the foot.","rus":"Тело узнают по своему собственному; «человек от головы до ног» уже требует головы и ног."},
  {"op":"atom","id":"shou3","eng":"The hand is learned by pointing at it; \"the part that holds things\" names its use only.","rus":"Руку усваивают, показывая на неё; «часть, которая держит вещи» называет лишь её применение."},
  {"op":"atom","id":"tou2","eng":"The head is learned by pointing at it; \"the top of the body\" needs the body.","rus":"Голову усваивают, показывая на неё; «верх тела» требует тела."},
  {"op":"atom","id":"mao2","eng":"Hair is learned by seeing and touching it; \"threads on the head\" is only a picture of it.","rus":"Волосы узнают, видя и трогая; «нити на голове» — лишь картинка."},
  {"op":"atom","id":"xin1","eng":"The heart is felt in the chest and is also the mind (kāi-xīn); no description of the organ carries both.","rus":"Сердце чувствуют в груди, и оно же — ум (kāi-xīn); ни одно описание органа не передаёт оба значения."},
  {"op":"atom","id":"er3duo","eng":"The ear is learned by pointing at it; \"the part that hears\" leans on tīng, which is said with the ears.","rus":"Ухо усваивают, показывая на него; «часть, которая слышит» опирается на tīng, а tīng объясняют через уши."},
  {"op":"atom","id":"ya2","eng":"Teeth are learned by pointing at them; \"white, hard parts in the mouth\" only says how they look.","rus":"Зубы усваивают, показывая на них; «белые твёрдые части во рту» говорят лишь об их виде."},
  {"op":"atom","id":"du4zi","eng":"The belly is learned by pointing at it; \"where the food goes\" names its use only.","rus":"Живот усваивают, показывая на него; «куда идёт еда» называет лишь его назначение."},
  {"op":"atom","id":"bi3","eng":"A grammar word for comparing (\"X bǐ Y dà\"); any other way of comparing already needs a comparing word.","rus":"Служебное слово сравнения («X bǐ Y dà»); любой другой способ сравнить уже требует слова сравнения."},
  {"op":"atom","id":"ge4","eng":"A counting word with no meaning of its own: it only joins a number to a thing, so nothing else can say it.","rus":"Счётное слово без собственного значения: оно только соединяет число с предметом, поэтому другим словом его не сказать."},
  {"op":"atom","id":"ci4","eng":"A counting word for how often: it counts happenings the way gè counts things, and has no plainer wording.","rus":"Счётное слово для «сколько раз»: считает события так же, как gè считает предметы; проще его не сказать."},
  {"op":"atom","id":"yi1","eng":"You learn \"one\" by holding up a single thing; every other number is built from it.","rus":"«Один» усваивают на одном предмете; все остальные числа строятся из него."},
  {"op":"atom","id":"hao4","eng":"A marker that turns a number into a name or a date (èr-hào); it exists only inside that pattern.","rus":"Показатель, который превращает число в имя или дату (èr-hào); он существует только в этой конструкции."},
];
