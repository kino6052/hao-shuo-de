// YF1: the forms of kb/form-gaps.json that the grammar could not read, rewritten so it can (KB_PLAN.md Phase 9: improve
// what is there while the yardstick rounds run). Each new form says the same with core words and passes kb_check_form and
// the parser; the gap leaves kb/form-gaps.json. Made by Claude on 2026-10-22 without a review by the author.
// Run: npm run refactor -- refactors/YF1.ts [--diff] [--write]

export default [
  { op: "composite", zh: "度", set: {"hsd":["{{word:you3}} {{word:duo1}} {{word:re4}}, {{word:you3}} {{word:duo1}} {{word:da4}}-{{word:de}} {{word:shu4}}"],"tts":["有多热，有多大的数"]} },
  { op: "composite", zh: "电视剧", set: {"hsd":["{{word:zai4}} {{word:jia1}} {{word:kan4}}-{{word:de}}, {{word:ren2}} \"yǎn\"-{{word:de}} {{word:hen3}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],"tts":["在家看的，人演的很长的东西"]} },
  { op: "composite", zh: "细", set: {"hsd":["{{word:hen3}} {{word:xiao3}} {{word:you4}} {{word:hen3}} {{word:chang2}}"],"tts":["很小又很长"]} },
  { op: "composite", zh: "从小", set: {"hsd":["{{word:cong2}}-{{word:xiao3}}","{{word:cong2}} {{word:hen3}} {{word:xiao3}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:kai1shi3}}"],"tts":["从小","从很小的时候开始"]} },
  { op: "composite", zh: "迟到", set: {"hsd":["{{word:dao4}}-{{word:de}} {{word:wan3}}"],"tts":["到得晚"]} },
  { op: "composite", zh: "灯光", set: {"hsd":["{{word:deng1}} {{word:fa1}}-{{word:chu1}}-{{word:de}} {{word:ming2}}"],"tts":["灯发出的明"]} },
  { op: "composite", zh: "老家", set: {"hsd":["{{word:lao3}}-{{word:jia1}}","{{word:wo3}} {{word:xiao3}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:zai4}}-{{word:de}} {{word:jia1}}"],"tts":["老家","我小的时候在的家"]} },
  { op: "composite", zh: "石头", set: {"hsd":["{{word:hen3}} {{word:ying4}} {{word:hen3}} {{word:zhong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],"tts":["很硬很重的东西"]} },
  { op: "composite", zh: "饼干", set: {"hsd":["{{word:ying4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:tian2}}-{{word:de}} {{word:chi1}}-{{word:de}}"],"tts":["硬的小的甜的吃的"]} },
  { op: "composite", zh: "饺子", set: {"hsd":["{{word:li3}}-{{word:mian4}} {{word:you3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:chi1}}-{{word:de}}"],"tts":["里面有东西的小的吃的"]} },
  { op: "composite", zh: "点赞", set: {"hsd":["{{word:kan4}} {{word:le}} X, {{word:shuo1}} {{word:hao3}}"],"tts":["看了X，说好"]} },
  { op: "composite", zh: "豆腐", set: {"hsd":["{{word:zhi2wu4}} {{word:zuo4}}-{{word:de}} {{word:bai2}}-{{word:de}} {{word:chi1}}-{{word:de}}"],"tts":["植物做的白的吃的"]} },
  { op: "composite", zh: "前天", set: {"hsd":["{{word:qian2}}-{{word:tian1}}","{{word:liang3}}-{{light:ge4}} {{word:tian1}} {{word:yi3}}-{{word:qian2}}"],"tts":["前天","两个天以前"]} },
  { op: "composite", zh: "西瓜", set: {"hsd":["{{word:li3}}-{{word:mian4}} {{word:hong2}}-{{word:de}} {{word:da4}}-{{word:de}} {{word:yuan2}}-{{word:de}} {{word:tian2}}-{{word:de}} {{word:guo3}}"],"tts":["里面红的大的圆的甜的果"]} },
  { op: "composite", zh: "牛仔裤", set: {"hsd":["{{word:shen1ti3}} {{word:xia4}}-{{word:mian4}}-{{word:de}} {{word:hen3}} {{word:ying4}}-{{word:de}} {{word:yi1fu}}"],"tts":["身体下面的很硬的衣服"]} },
  { op: "composite", zh: "手指", set: {"hsd":["{{word:shou3}}-{{word:shang4}}-{{word:de}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],"tts":["手上的长的东西"]} },
  { op: "composite", zh: "猪", set: {"hsd":["{{word:jia1}}-{{word:li3}} {{word:you3}}-{{word:de}}, {{word:chi1}} {{word:hen3}} {{word:duo1}}-{{word:de}} {{word:da4}} {{word:dong4}}-{{word:wu4}}"],"tts":["家里有的，吃很多的大动物"]} },
  { op: "composite", zh: "包子", set: {"hsd":["{{word:bao1}}-{{word:zi}}","{{word:li3}}-{{word:mian4}} {{word:you3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:chi1}}-{{word:de}}"],"tts":["包子","里面有东西的吃的"]} },
  { op: "composite", zh: "毕竟", set: {"hsd":["{{word:zui4}}-{{word:hou4}} {{word:hai2}}-{{word:shi4}} X"],"tts":["最后还是X"]} },
  { op: "composite", zh: "不仅", set: {"hsd":["{{word:bu4}} {{word:zhi3}} X, {{word:hai2}} {{word:you3}} Y"],"tts":["不只X，还有Y"]} },
  { op: "composite", zh: "部队", set: {"hsd":["{{word:wei4}} {{word:guo2}} {{word:da3}}-{{word:de}} {{word:ren2}}"],"tts":["为国打的人"]} },
  { op: "composite", zh: "大众", set: {"hsd":["{{word:hen3}}-{{word:duo1}} {{word:ren2}}"],"tts":["很多人"]} },
  { op: "composite", zh: "分别", set: {"hsd":["{{word:fen1}}-{{word:bie2}}","{{word:yi1}}-{{light:ge4}} {{word:yi1}}-{{light:ge4}}-{{word:de}}"],"tts":["分别","一个一个地"]} },
  { op: "composite", zh: "民族", set: {"hsd":["{{word:hua4}} {{word:he2}} {{word:jia1}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:ren2}}"],"tts":["话和家一样的人"]} },
  { op: "composite", zh: "联合", set: {"hsd":["{{word:he2}} {{word:bie2}}-{{word:ren2}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}"],"tts":["和别人在一起"]} },
  { op: "composite", zh: "连续", set: {"hsd":["{{word:yi1}}-{{light:ge4}} {{word:hou4}}-{{word:mian4}} {{word:you4}} {{word:you3}} {{word:yi1}}-{{light:ge4}}"],"tts":["一个后面又有一个"]} },
  { op: "composite", zh: "无论", set: {"hsd":["{{word:shen2me}} X {{word:dou1}} Y"],"tts":["什么X都Y"]} },
  { op: "composite", zh: "因此", set: {"hsd":["{{word:yin1wei4}} {{word:zhe4}}-{{light:ge4}} …"],"tts":["因为这个…"]} },
  { op: "composite", zh: "全球", set: {"hsd":["{{word:di4}}-{{word:qiu2}}-{{word:shang4}}-{{word:de}} {{word:ren2}}-{{word:ren2}}"],"tts":["地球上的人人"]} },
  { op: "composite", zh: "各个", set: {"hsd":["{{word:yi1}}-{{light:ge4}} {{word:yi1}}-{{light:ge4}}-{{word:de}}"],"tts":["一个一个地"]} },
  { op: "composite", zh: "各自", set: {"hsd":["{{word:yi1}}-{{light:ge4}} {{word:yi1}}-{{light:ge4}}-{{word:de}}, {{word:bu4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}"],"tts":["一个一个地，不在一起"]} },
];
