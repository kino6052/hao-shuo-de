// Words close in meaning: pairs link two words both ways and are written once; phrases
// give a word a longer form that isn't a word itself.
import { relations } from "../../lib/data-maps.ts";

export default relations({
  pairs: [
    ["liang3", "er4"],
    ["kai1shi3", "qi3"],
    ["pang2bian1", "fu4jin4"],
    ["hen3", "zhen1"],
    ["mian4", "bian1"],
  ],
  phrases: {
    yan3jing: ["{{word:kan4}}-{{word:de}} {{word:bu4fen}}"],
    deng1: ["{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:xiao3}} {{word:ri4}}"],
    jiao1: ["{{word:bang1}} … {{word:xue2}}"],
    mai3: ["{{word:gei3}} {{word:jin1}} {{word:de2}} {{word:dong1xi}}"],
    wei4shen2me: ["{{word:yin1wei4}} {{word:shen2me}}"],
    zui4: ["{{word:bi3}} {{word:bie2de}} {{word:dou1}}"],
    na3li3: ["{{word:shen2me}} {{word:di4fang1}}"],
  },
});
