// R12-syn: synonym pass. Each synonym group shares one form (the first form of each member); the old form
// stays as an alternate. Groups came from ChatGPT's synonym scan, curated and approved by the author.
// Run: npm run refactor -- refactors/R12-syn.ts [--write]

export default [
  { op: "composite", zh: "题目", set: { hsd: ["{{word:wen4}}-{{word:ti2}}","{{word:wen4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["问题","问的东西"] } }, // shares the form of 问题
  { op: "composite", zh: "答", set: { hsd: ["{{word:hui2}}-{{word:hua4}}","{{word:dui4}} {{word:wen4}}-{{word:de}} {{word:ren2}} {{word:shuo1}}"], tts: ["回话","对问的人说"] } }, // shares the form of 回答
  { op: "composite", zh: "目标", set: { hsd: ["{{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}","{{word:yao4}} {{word:dao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"], tts: ["要做到的东西","要到的地方"] } }, // shares the form of 目的
  { op: "composite", zh: "些", set: { hsd: ["{{word:yi1}}-{{word:xie1}}","{{word:xie1}}","{{word:you3}}-{{word:de}}","{{word:yi1}}-{{word:dian3}}"], tts: ["一些","些","有的","一点"] } }, // shares the form of 一些
  { op: "composite", zh: "特别", set: { hsd: ["{{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}","{{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}, {{word:ye3}} {{word:hen3}} {{word:hao3}}"], tts: ["很不一样","很不一样，也很好"] } }, // shares the form of 特殊
  { op: "composite", zh: "平常", set: { hsd: ["{{word:he2}} {{word:da4}}-{{word:jia1}} {{word:yi1}}-{{word:yang4}}","{{word:ping2}}-{{word:chang2}}","{{word:he2}} {{word:bie2}}-{{word:de}} {{word:yi1}}-{{word:yang4}}"], tts: ["和大家一样","平常","和别的一样"] } }, // shares the form of 正常
  { op: "composite", zh: "未来", set: { hsd: ["{{word:hui4}} {{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}","{{word:wei4}}-{{word:lai2}}","{{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"], tts: ["会来的时间","未来","后面的时间"] } }, // shares the form of 将来
  { op: "composite", zh: "刚", set: { hsd: ["{{word:yi1}}-{{word:xia4}} {{word:yi3}}-{{word:qian2}}","{{word:xian4}}-{{word:zai4}} … {{word:le}}","{{word:xian4}}-{{word:zai4}} {{word:jiu4}} … {{word:le}}"], tts: ["一下以前","现在…了","现在就…了"] } }, // shares the form of 刚才
  { op: "composite", zh: "这儿", set: { hsd: ["{{word:zhe4}}-{{word:li3}}","{{word:zhe4}}-{{word:bian1}}"], tts: ["这里","这边"] } }, // shares the form of 这里
  { op: "composite", zh: "那儿", set: { hsd: ["{{word:na4}}-{{word:li3}}","{{word:na4}}-{{word:bian1}}"], tts: ["那里","那边"] } }, // shares the form of 那里
  { op: "composite", zh: "尽管", set: { hsd: ["…, {{word:dan4}}-{{word:shi4}} …","{{word:dan4}}-{{word:shi4}}"], tts: ["…，但是…","但是"] } }, // shares the form of 虽然
  { op: "composite", zh: "不必", set: { hsd: ["{{word:bu4}}-{{word:yong4}}","{{word:bu4}} {{word:yong4}}"], tts: ["不用","不用"] } }, // shares the form of 不用
  { op: "composite", zh: "别", set: { hsd: ["{{word:bu4}} {{word:yao4}}","{{word:bie2}}"], tts: ["不要","别"] } }, // shares the form of 不要
  { op: "composite", zh: "查", set: { hsd: ["{{word:hao3}}-{{word:hao3}} {{word:kan4}}","{{word:kan4}}-kan"], tts: ["好好看","看看"] } }, // shares the form of 检查
  { op: "composite", zh: "查看", set: { hsd: ["{{word:hao3}}-{{word:hao3}} {{word:kan4}}","{{word:kan4}}"], tts: ["好好看","看"] } }, // shares the form of 检查
  { op: "composite", zh: "思考", set: { hsd: ["{{word:xiang3}}-{{word:xiang3}}","{{word:xiang3}}"], tts: ["想想","想"] } }, // shares the form of 考虑
  { op: "composite", zh: "情绪", set: { hsd: ["{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{light:zi}}","{{word:xin1}}-{{word:li3}}"], tts: ["心里的样子","心里"] } }, // shares the form of 心情
  { op: "composite", zh: "主意", set: { hsd: ["{{word:xiang3}}-{{word:fa3}}","{{word:fang1}}-{{word:fa3}}"], tts: ["想法","方法"] } }, // shares the form of 想法
  { op: "composite", zh: "观点", set: { hsd: ["{{word:xiang3}}-{{word:fa3}}","{{word:xiang3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["想法","想的东西"] } }, // shares the form of 想法
  { op: "composite", zh: "表示", set: { hsd: ["{{word:shuo1}}-{{word:chu1}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}","{{word:shuo1}}"], tts: ["说出心里的东西","说"] } }, // shares the form of 表达
  { op: "composite", zh: "聊", set: { hsd: ["{{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}","{{word:shuo1}}-shuo"], tts: ["一起说话","说说"] } }, // shares the form of 聊天儿
  { op: "composite", zh: "谈话", set: { hsd: ["{{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}","{{word:shuo1}}"], tts: ["一起说话","说"] } }, // shares the form of 聊天儿
  { op: "composite", zh: "消息", set: { hsd: ["{{word:xin1#new}}-\"wén\"","{{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:de}}"], tts: ["新闻","现在发生的"] } }, // shares the form of 新闻
  { op: "composite", zh: "工人", set: { hsd: ["{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}","{{word:gong1}}-{{word:ren2}}","{{word:zuo4}}-{{word:de}} {{word:ren2}}"], tts: ["工作的人","工人","做的人"] } }, // shares the form of 员工
  { op: "composite", zh: "父亲", set: { hsd: ["{{word:ba4ba}}","{{word:ba4ba}}-{{word:ma1ma}}-{{word:li3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}"], tts: ["爸爸","爸爸妈妈里的男人"] } }, // shares the form of 爸爸
  { op: "composite", zh: "小孩儿", set: { hsd: ["{{word:hai2}}-{{light:zi}}","{{word:xiao3}}-{{word:hai2}}-{{light:zi}}"], tts: ["孩子","小孩子"] } }, // shares the form of 孩子
  { op: "composite", zh: "饭馆", set: { hsd: ["{{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}","{{word:chi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"], tts: ["吃饭的地方","吃的地方"] } }, // shares the form of 饭店
  { op: "composite", zh: "河流", set: { hsd: ["{{word:chang2}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}","{{word:dong4}}-{{word:de}} {{word:shui3}}"], tts: ["长的有水的地方","动的水"] } }, // shares the form of 河
  { op: "composite", zh: "海洋", set: { hsd: ["{{word:hen3}}-{{word:da4}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}","{{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}}"], tts: ["很大的有水的地方","很大的水"] } }, // shares the form of 海
  { op: "composite", zh: "地点", set: { hsd: ["{{word:di4}}-{{light:fang1}}","{{word:di4}}-{{word:dian3}}"], tts: ["地方","地点"] } }, // shares the form of 位置
  { op: "composite", zh: "图片", set: { hsd: ["{{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}","{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["写的看的东西","看的东西"] } }, // shares the form of 图
  { op: "composite", zh: "跑步", set: { hsd: ["{{word:kuai4}} {{word:zou3}}","{{word:zou3}}-{{word:de}} {{word:hen3}} {{word:kuai4}}"], tts: ["快走","走得很快"] } }, // shares the form of 跑
  { op: "composite", zh: "乘坐", set: { hsd: ["{{word:zuo4}}-{{word:che1}}","{{word:zuo4}}-{{word:xia4}}"], tts: ["坐车","坐下"] } }, // shares the form of 坐车
  { op: "composite", zh: "改变", set: { hsd: ["{{word:bian4}}","{{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}"], tts: ["变","做的不一样"] } }, // shares the form of 变化
  { op: "composite", zh: "收", set: { hsd: ["{{word:na2}}-{{word:dao4}}","{{word:de2}}-{{word:dao4}}"], tts: ["拿到","得到"] } }, // shares the form of 收到
  { op: "composite", zh: "选", set: { hsd: ["{{word:na2}} {{word:yi1}}-ge","{{word:yao4}}"], tts: ["拿一个","要"] } }, // shares the form of 选择
  { op: "composite", zh: "管", set: { hsd: ["{{word:ba3}} X {{word:zuo4}} {{word:hao3}}","{{word:ba3}} X {{word:zuo4}}-{{word:hao3}}"], tts: ["把X做好","把X做好"] } }, // shares the form of 管理
  { op: "composite", zh: "保", set: { hsd: ["{{word:bu4}} {{word:rang4}} X {{word:bian4}} {{word:huai4}}","{{word:bang1}} X {{word:bu4}} {{word:bian4}} {{word:huai4}}"], tts: ["不让X变坏","帮X不变坏"] } }, // shares the form of 保护
  { op: "composite", zh: "有趣", set: { hsd: ["{{word:hao3}}-{{word:wan2r}}","{{word:hao3}} {{word:wan2r}}"], tts: ["好玩儿","好玩儿"] } }, // shares the form of 好玩儿
  { op: "composite", zh: "美丽", set: { hsd: ["{{word:hao3}}-{{word:kan4}}","{{word:hen3}}-{{word:hao3}}-{{word:kan4}}"], tts: ["好看","很好看"] } }, // shares the form of 漂亮
  { op: "composite", zh: "经历", set: { hsd: ["{{word:zuo4}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}","{{word:fa1}}-{{word:sheng1}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["做过的东西","发生过的东西"] } }, // shares the form of 经验
  { op: "composite", zh: "认为", set: { hsd: ["{{word:jue2}}-{{light:de2}}","{{word:xiang3}}"], tts: ["觉得","想"] } }, // shares the form of 觉得
  { op: "composite", zh: "遇到", set: { hsd: ["{{word:mei2}} {{word:xiang3}}-{{word:dao4}} {{word:hui4}} {{word:kan4}}-{{word:dao4}}","{{word:kan4}}-{{word:dao4}}"], tts: ["没想到会看到","看到"] } }, // shares the form of 遇见
  { op: "composite", zh: "市", set: { hsd: ["{{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}","{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:jia1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"], tts: ["国家里的地方","有很多的家的地方"] } }, // shares the form of 城市
  { op: "composite", zh: "食品", set: { hsd: ["{{word:shi2}}-{{word:wu4}}","{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["食物","吃的东西"] } }, // shares the form of 食物
  { op: "composite", zh: "窗户", set: { hsd: ["{{word:kan4}} {{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kou3}}","{{word:kan4}}-{{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kou3}}"], tts: ["看外面的口","看外面的口"] } }, // shares the form of 窗
  { op: "composite", zh: "词典", set: { hsd: ["{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:ci2}}-{{word:de}} {{word:shu1}}","{{word:shuo1}} {{word:ci2}} {{word:shi4}} {{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["有很多的词的书","说词是什么的写的东西"] } }, // shares the form of 字典
  { op: "composite", zh: "状态", set: { hsd: ["{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{light:zi}}","{{word:xian4}}-{{word:zai4}}-{{word:de}} X"], tts: ["现在的样子","现在的X"] } }, // shares the form of 情况
  { op: "composite", zh: "状况", set: { hsd: ["{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{light:zi}}","{{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["现在的样子","发生的东西"] } }, // shares the form of 情况
  { op: "composite", zh: "有效", set: { hsd: ["{{word:you3}}-{{word:yong4}}","{{word:you3}} {{word:yong4}}"], tts: ["有用","有用"] } }, // shares the form of 有用
  { op: "composite", zh: "上午", set: { hsd: ["{{word:zao3}}-{{light:shang4}}","{{word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"], tts: ["早上","日起来的时间"] } }, // shares the form of 早上
  { op: "composite", zh: "全", set: { hsd: ["X {{word:dou1}}","{{word:dou1}}"], tts: ["X都","都"] } }, // shares the form of 整个
  { op: "composite", zh: "真实", set: { hsd: ["{{word:zhen1}}-{{word:de}}","{{word:zhen1}}-{{word:shi2}}","{{word:zhen1}}"], tts: ["真的","真实","真"] } }, // shares the form of 真正
];
