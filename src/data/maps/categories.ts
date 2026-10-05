// The dictionary's categories: each leaf lists its word ids, in display order.
import { categories } from "../../lib/data-maps.ts";

export default categories([
  {
    key: "substantives",
    title: { eng: "Things", rus: "Вещи", zh: "事物" },
    children: [
      {
        key: "pronouns-interrogatives",
        title: { eng: "Pointers", rus: "Указатели", zh: "指代" },
        wordIds: ["wo3", "ni3", "ta1", "shen2me", "men", "na4", "zhe4"],
      },
      {
        key: "places-as-things",
        title: { eng: "Places", rus: "Места", zh: "地方" },
        wordIds: ["jia1", "guo2", "di4fang1"],
      },
      {
        key: "things-of-nature",
        title: { eng: "Things of Nature", rus: "Природа", zh: "自然之物" },
        wordIds: ["ri4", "yue4", "zhi2wu4", "huo3", "qi4", "dong4wu4"],
      },
      {
        key: "body",
        title: { eng: "Body", rus: "Тело", zh: "身体" },
        wordIds: ["bi2zi", "yan3jing", "jiao3", "kou3", "shen1ti3", "shou3", "tou2", "mao2", "xin1"],
      },
      {
        key: "people-kinship",
        title: { eng: "People & Kinship", rus: "Люди и родство", zh: "人与亲属" },
        wordIds: ["ren2", "fu4mu3", "nan2ren2", "nv3ren2", "qun2", "guan1xi"],
      },
      {
        key: "food-drink",
        title: { eng: "Food & Drink", rus: "Еда и питьё", zh: "食物与饮品" },
        wordIds: ["shui3"],
      },
      {
        key: "tools-objects",
        title: { eng: "Tools & Objects", rus: "Инструменты и предметы", zh: "工具与物品" },
        children: [
          {
            key: "implements",
            title: { eng: "Tools", rus: "Орудия", zh: "器具" },
            wordIds: ["gong1ju4", "ji1", "gun4zi", "deng1", "che1", "wang3"],
          },
          {
            key: "containers-materials",
            title: { eng: "Containers & Materials", rus: "Контейнеры и материалы", zh: "容器与材料" },
            wordIds: ["he2zi", "xian4"],
          },
          {
            key: "valuables-wearables",
            title: { eng: "Valuables & Wearables", rus: "Ценности и одежда", zh: "财物与穿戴" },
            wordIds: ["jin1", "yi1fu"],
          },
          { key: "general", title: null, wordIds: ["dong1xi"] },
        ],
      },
      {
        key: "abstract-substantives",
        title: { eng: "Abstract Words", rus: "Абстрактные слова", zh: "抽象词" },
        wordIds: ["ci2", "li4", "sheng1yin1", "jia4zhi2", "fang1fa3"],
      },
      {
        key: "kind-part",
        title: { eng: "Kind & Part", rus: "Вид и часть", zh: "种类与部分" },
        wordIds: ["zhong3", "bu4fen"],
      },
    ],
  },
  {
    key: "determiners",
    title: { eng: "Sameness & Difference", rus: "Сходство и различие", zh: "异同" },
    wordIds: ["yi1yang4", "bi3", "bie2de"],
  },
  {
    key: "quantifiers",
    title: { eng: "Quantity", rus: "Количество", zh: "数量" },
    children: [
      {
        key: "classifier",
        title: { eng: "Classifier", rus: "Счётное слово", zh: "量词" },
        wordIds: ["ge4", "ci4"],
      },
      {
        key: "numbers-ordinals",
        title: { eng: "Numbers", rus: "Числа", zh: "数字" },
        wordIds: [
          "yi1",
          "liang3",
          "hao4",
          "san1",
          "si4",
          "wu3",
          "liu4",
          "qi1",
          "ba1",
          "jiu3",
          "shi2",
          "er4",
        ],
      },
      {
        key: "amount",
        title: { eng: "Amount", rus: "Количество", zh: "数量" },
        wordIds: ["duo1", "dou1", "shao3"],
      },
    ],
  },
  {
    key: "descriptors",
    title: { eng: "Qualities", rus: "Качества", zh: "性质" },
    children: [
      {
        key: "evaluators",
        title: { eng: "Good / bad", rus: "Хорошее и плохое", zh: "好与坏" },
        wordIds: ["hao3", "huai4", "nan2"],
      },
      {
        key: "colour",
        title: { eng: "Colour", rus: "Цвет", zh: "颜色" },
        wordIds: ["bai2se4", "hei1se4", "hong2se4", "huang2se4", "lan2se4", "yan2se4"],
      },
      {
        key: "other-quality",
        title: { eng: "Other Quality", rus: "Прочие качества", zh: "其他性质" },
        wordIds: ["qi2guai4", "lao3", "luan4", "kuai4"],
      },
      {
        key: "temperature-taste",
        title: { eng: "Temperature & Taste", rus: "Температура и вкус", zh: "温度与味道" },
        wordIds: ["re4", "leng3", "tian2", "wei4dao4"],
      },
      {
        key: "physical-property",
        title: { eng: "Physical Property", rus: "Физическое свойство", zh: "物理属性" },
        wordIds: ["ying4", "kong1", "yuan2", "ming2"],
      },
      {
        key: "size",
        title: { eng: "Size", rus: "Размер", zh: "大小" },
        wordIds: ["xiao3", "da4", "gao1"],
      },
    ],
  },
  {
    key: "mental-predicates",
    title: { eng: "Mind", rus: "Разум", zh: "心智" },
    children: [
      {
        key: "volition-affect",
        title: { eng: "Will and feelings", rus: "Воля и чувства", zh: "意愿与情感" },
        wordIds: ["yao4", "ai4", "pa4", "xiao4", "xie4"],
      },
      {
        key: "cognition",
        title: { eng: "Cognition", rus: "Познание", zh: "认知" },
        wordIds: ["jue2de", "zhi1dao4", "xue2", "jiao1", "suan4"],
      },
      {
        key: "perception",
        title: { eng: "Perception", rus: "Восприятие", zh: "感知" },
        wordIds: ["kan4", "ting1"],
      },
    ],
  },
  {
    key: "speech",
    title: { eng: "Speech", rus: "Речь", zh: "言语" },
    wordIds: ["shuo1", "xie3", "wen4", "jiao4"],
  },
  {
    key: "actions",
    title: { eng: "Actions", rus: "Действия", zh: "动作" },
    children: [
      { key: "using", title: { eng: "Usage", rus: "Использование", zh: "使用" }, wordIds: ["yong4"] },
      {
        key: "daily-activities",
        title: { eng: "Daily Activities", rus: "Повседневные занятия", zh: "日常活动" },
        children: [
          {
            key: "phase-duration",
            title: { eng: "Phase & Duration", rus: "Фаза и длительность", zh: "阶段与持续" },
            wordIds: ["kai1shi3", "wan2", "deng3"],
          },
          {
            key: "eating-resting-play",
            title: { eng: "Eating, Resting & Play", rus: "Еда, отдых и игра", zh: "饮食、休息与玩乐" },
            wordIds: ["shui4jiao4", "chi1", "he1", "wan2r"],
          },
        ],
      },
      {
        key: "motion",
        title: { eng: "Motion", rus: "Движение", zh: "运动" },
        wordIds: [
          "lai2",
          "qu4",
          "dao4",
          "dong4",
          "jin4",
          "chu1",
          "hui2",
          "qi3",
          "fei1",
          "zuo4",
          "zhan4",
          "tang3",
          "tong1",
        ],
      },
      {
        key: "state-change-general",
        title: {
          eng: "State-Change & General Action",
          rus: "Изменение состояния и общее действие",
          zh: "状态变化与一般动作",
        },
        wordIds: ["bian4", "nong4", "fa1"],
      },
      {
        key: "manipulation-contact",
        title: { eng: "Interacting with things", rus: "Действия с вещами", zh: "与物互动" },
        wordIds: ["da3", "gei3", "mo1", "zhao3", "fang4", "na2", "kai1", "guan1", "bang1", "mai3"],
      },
    ],
  },
  {
    key: "location-existence-possession",
    title: {
      eng: "Location, Existence, and Possession",
      rus: "Местоположение, существование и обладание",
      zh: "位置、存在与拥有",
    },
    children: [
      {
        key: "existence-location",
        title: { eng: "Existence & Location", rus: "Существование и местоположение", zh: "存在与位置" },
        wordIds: ["zai4", "shi4", "liu2"],
      },
      {
        key: "possession-acquisition",
        title: { eng: "Possession & Acquisition", rus: "Обладание и приобретение", zh: "拥有与获得" },
        wordIds: ["de2", "you3"],
      },
    ],
  },
  {
    key: "life-death",
    title: { eng: "Life and Death", rus: "Жизнь и смерть", zh: "生与死" },
    wordIds: ["si3", "huo2", "sheng1"],
  },
  {
    key: "time",
    title: { eng: "Time", rus: "Время", zh: "时间" },
    wordIds: ["shi2jian1", "xian4zai4", "tian1", "nian2", "dian3"],
  },
  {
    key: "space",
    title: { eng: "Space", rus: "Пространство", zh: "空间" },
    children: [
      {
        key: "place-nouns-prepositions",
        title: {
          eng: "Place Nouns & Prepositions",
          rus: "Существительные места и предлоги",
          zh: "地点名词与介词",
        },
        wordIds: ["cong2", "dui4", "di4", "lu4"],
      },
      {
        key: "relative-position",
        title: { eng: "Relative Position", rus: "Относительное положение", zh: "相对位置" },
        wordIds: [
          "hou4",
          "li3",
          "pang2bian1",
          "mian4",
          "bian1",
          "zhong1",
          "jian1",
          "qian2",
          "shang4",
          "xia4",
          "wai4",
          "yuan3",
          "fu4jin4",
          "zuo3bian1",
          "you4bian1",
        ],
      },
    ],
  },
  {
    key: "logical-concepts",
    title: {
      eng: "Logical Concepts and Grammatical Particles",
      rus: "Логические понятия и грамматические частицы",
      zh: "逻辑概念与语法助词",
    },
    children: [
      {
        key: "grammatical-particles",
        title: { eng: "Grammatical Particles", rus: "Грамматические частицы", zh: "语法助词" },
        wordIds: ["ba3", "de", "le", "ma", "guo4"],
      },
      {
        key: "negation",
        title: { eng: "Negation", rus: "Отрицание", zh: "否定" },
        wordIds: ["bu4", "mei2"],
      },
      {
        key: "conjunction",
        title: { eng: "Conjunction", rus: "Союзы", zh: "连接" },
        wordIds: ["dan4shi4", "he2", "huo4zhe3", "ye3", "you4", "yin1wei4", "ru2guo3", "jiu4"],
      },
      {
        key: "interrogatives",
        title: { eng: "Question words", rus: "Вопросительные слова", zh: "疑问词" },
        wordIds: ["wei4shen2me", "zen3me", "na3li3"],
      },
      {
        key: "modality",
        title: { eng: "Ability & Possibility", rus: "Способность и возможность", zh: "能力与可能" },
        wordIds: ["neng2", "hui4", "ke3neng2"],
      },
      {
        key: "truth-value",
        title: { eng: "Truth Value", rus: "Истинностное значение", zh: "真值" },
        wordIds: ["zhen1"],
      },
    ],
  },
  { key: "intensifier", title: { eng: "Intensity", rus: "Степень", zh: "程度" }, wordIds: ["hen3", "zui4"] },
]);
