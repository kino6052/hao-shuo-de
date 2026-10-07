// Example sentences for review batch 3 (composite ranks 201-300), in plain pinyin:
// zh -> [[pinyin, hanzi, en, ru], ...]. scripts/composite-examples.js turns the
// pinyin into word refs, checks them and writes them into the composite files.

const NEW = "{{word:xin1#new}}";
const DE = "{{light:de2}}";
const ZI = "{{light:zi4}}";

export default {
  "老师": [
    ["Tā shì bāng-rén-xué-de rén.", "她是帮人学的人。", "She's a teacher.", "Она учительница."],
    ["Wǒ-men-de bāng-rén-xué-de rén hěn hǎo.", "我们的帮人学的人很好。", "Our teacher is nice.", "Наш учитель хороший."],
  ],
  "见": [
    ["Wǒ xiǎng jiàn nǐ.", "我想见你。", "I want to see you.", "Я хочу тебя увидеть."],
    ["Wǒ kàn-dào tā le.", "我看到他了。", "I saw him.", "Я его видел."],
  ],
  "觉得": [
    [`Nǐ jué-${DE} zěnme-yàng?`, "你觉得怎么样？", "What do you think?", "Как тебе?"],
    [`Wǒ jué-${DE} hěn lěng.`, "我觉得很冷。", "I feel cold.", "Мне холодно."],
  ],
  "让": [
    ["Ràng wǒ kàn-kàn.", "让我看看。", "Let me see.", "Дай посмотреть."],
    ["Māma bù ràng wǒ qù.", "妈妈不让我去。", "Mom won't let me go.", "Мама меня не пускает."],
  ],
  "说话": [
    ["Bié shuō-huà!", "别说话！", "Don't talk!", "Не разговаривай!"],
    ["Tā hé wǒ shuō-huà.", "他和我说话。", "He talks with me.", "Он разговаривает со мной."],
  ],
  "请": [
    ["Gěi wǒ shuǐ, hǎo ma?", "给我水，好吗？", "Please give me some water.", "Дай мне воды, пожалуйста."],
    ["Nǐ lái, hǎo ma?", "你来，好吗？", "Please come.", "Приходи, пожалуйста."],
  ],
  "跟": [
    ["Wǒ hé tā yī-qǐ qù.", "我和他一起去。", "I'm going with him.", "Я иду с ним."],
    ["Nǐ hé shéi shuō-huà?", "你和谁说话？", "Who are you talking with?", "С кем ты разговариваешь?"],
  ],
  "路": [
    ["Zhè-ge lù hěn cháng.", "这个路很长。", "This road is long.", "Эта дорога длинная."],
    ["Wǒ bù zhīdào lù.", "我不知道路。", "I don't know the way.", "Я не знаю дороги."],
  ],
  "身体": [
    ["Nǐ shēntǐ hǎo ma?", "你身体好吗？", "How's your health?", "Как твоё здоровье?"],
    ["Yào duō dòng shēntǐ.", "要多动身体。", "You should move your body more.", "Надо больше двигаться."],
  ],
  "车": [
    ["Wǒ-de chē zài wài-miàn.", "我的车在外面。", "My car is outside.", "Моя машина на улице."],
    ["Chē lái le.", "车来了。", "The car's here.", "Машина приехала."],
  ],
  "还是": [
    ["Nǐ yào shuǐ hái-shì fàn?", "你要水还是饭？", "Do you want water or food?", "Тебе воды или еды?"],
    ["Míng-tiān huò-zhě hòu-tiān.", "明天或者后天。", "Tomorrow or the day after.", "Завтра или послезавтра."],
  ],
  "这个": [
    ["Zhè-ge shì shénme?", "这个是什么？", "What's this?", "Что это?"],
    ["Wǒ ài zhè-ge.", "我爱这个。", "I love this one.", "Мне очень нравится вот это."],
  ],
  "这么": [
    ["Nǐ zhè-yàng zuò.", "你这样做。", "Do it like this.", "Делай вот так."],
    ["Bié zhè-yàng shuō.", "别这样说。", "Don't say it like that.", "Не говори так."],
  ],
  "这里": [
    ["Lái zhè-lǐ!", "来这里！", "Come here!", "Иди сюда!"],
    ["Zhè-lǐ hěn hǎo.", "这里很好。", "It's nice here.", "Здесь хорошо."],
  ],
  "进": [
    ["Jìn-lái!", "进来！", "Come in!", "Входи!"],
    ["Tā jìn le fáng-jiān.", "他进了房间。", "He went into the room.", "Он вошёл в комнату."],
  ],
  "那个": [
    ["Nà-ge shì wǒ-de.", "那个是我的。", "That one is mine.", "Вон тот — мой."],
    ["Wǒ yào nà-ge.", "我要那个。", "I want that one.", "Я хочу вон тот."],
  ],
  "那么": [
    ["Nà, wǒ-men zǒu.", "那，我们走。", "Well then, let's go.", "Ну тогда пойдём."],
    ["Bié nà-yàng zuò.", "别那样做。", "Don't do it like that.", "Не делай так."],
  ],
  "里": [
    ["Bāo-lǐ yǒu shénme?", "包里有什么？", "What's in the bag?", "Что в сумке?"],
    ["Tā zài fáng-jiān-lǐ.", "他在房间里。", "He's in the room.", "Он в комнате."],
  ],
  "错": [
    ["Nǐ shuō-de bù duì.", "你说得不对。", "What you said is wrong.", "Ты неправ."],
    ["Zhè-ge zì xiě-de bù duì.", "这个字写得不对。", "This character is written wrong.", "Этот иероглиф написан неправильно."],
  ],
  "门": [
    ["Mén kāi le.", "门开了。", "The door opened.", "Дверь открылась."],
    ["Bǎ mén guān le.", "把门关了。", "Close the door.", "Закрой дверь."],
  ],
  "难": [
    ["Zhè-ge hěn nán.", "这个很难。", "This is hard.", "Это трудно."],
    ["\"Zhōngguó\" huà nán ma?", "中国话难吗？", "Is Chinese hard?", "Китайский трудный?"],
  ],
  "非常": [
    ["Zhè-lǐ zhēn hǎo-kàn.", "这里真好看。", "It's really beautiful here.", "Здесь очень красиво."],
    ["Jīn-tiān hěn lěng.", "今天很冷。", "It's very cold today.", "Сегодня очень холодно."],
  ],
  "高": [
    ["Nǐ hěn gāo.", "你很高。", "You're tall.", "Ты высокий."],
    ["Zhè-ge fáng-zi hěn gāo.", "这个房子很高。", "This building is tall.", "Это здание высокое."],
  ],
  "你们": [
    ["Nǐ-men qù nǎ-lǐ?", "你们去哪里？", "Where are you all going?", "Куда вы идёте?"],
    ["Nǐ-men dōu shì xué-shēng ma?", "你们都是学生吗？", "Are you all students?", "Вы все студенты?"],
  ],
  "冷": [
    ["Wǒ hěn lěng.", "我很冷。", "I'm cold.", "Мне холодно."],
    ["Shuǐ zhēn lěng!", "水真冷！", "The water is so cold!", "Вода такая холодная!"],
  ],
  "刚": [
    ["Tā xiàn-zài lái le.", "他现在来了。", "He just came.", "Он только что пришёл."],
    ["Wǒ xiàn-zài jiù chī-wán le.", "我现在就吃完了。", "I've just finished eating.", "Я только что доел."],
  ],
  "别人": [
    ["Bié-rén dōu zhīdào.", "别人都知道。", "Everyone else knows.", "Все остальные знают."],
    ["Bié ná bié-rén-de dōng-xi.", "别拿别人的东西。", "Don't take other people's things.", "Не бери чужие вещи."],
  ],
  "半": [
    ["Wǒ chī le yī bù-fen.", "我吃了一部分。", "I ate part of it.", "Я съел часть."],
    ["Yī bù-fen rén lái le.", "一部分人来了。", "Some of the people came.", "Пришла часть людей."],
  ],
  "嘴": [
    ["Tā-de kǒu hěn xiǎo.", "她的口很小。", "Her mouth is small.", "У неё маленький рот."],
    ["Bǎ kǒu guān-shàng.", "把口关上。", "Close your mouth.", "Закрой рот."],
  ],
  "坐": [
    ["Zuò-xià, hǎo ma?", "坐下，好吗？", "Please sit down.", "Садись, пожалуйста."],
    ["Tā zuò-xià le.", "他坐下了。", "He sat down.", "Он сел."],
  ],
  "好吃": [
    ["Zhè-ge hěn hǎo chī.", "这个很好吃。", "This is tasty.", "Это вкусно."],
    ["Māma zuò-de fàn zuì hǎo chī.", "妈妈做的饭最好吃。", "Mom's cooking is the tastiest.", "Мамина еда самая вкусная."],
  ],
  "它": [
    ["Zhè-ge dòng-wù hěn xiǎo, tā ài wánr.", "这个动物很小，它爱玩儿。", "This animal is small; it loves to play.", "Это животное маленькое, оно любит играть."],
    ["Wǒ-de shǒu-jī? Tā zài bāo-lǐ.", "我的手机？它在包里。", "My phone? It's in the bag.", "Мой телефон? Он в сумке."],
  ],
  "床": [
    ["Wǒ-de shuìjiào-de dì-fang hěn dà.", "我的睡觉的地方很大。", "My bed is big.", "У меня большая кровать."],
    ["Hái-zi zài shuìjiào-de dì-fang.", "孩子在睡觉的地方。", "The child is in bed.", "Ребёнок в кровати."],
  ],
  "心里": [
    ["Wǒ xīn-lǐ hěn kāi-xīn.", "我心里很开心。", "I'm happy inside.", "На душе у меня радостно."],
    ["Tā xīn-lǐ yǒu nǐ.", "他心里有你。", "He has you in his heart.", "Ты в его сердце."],
  ],
  "怕": [
    ["Hái-zi pà hēi.", "孩子怕黑。", "The child is afraid of the dark.", "Ребёнок боится темноты."],
    ["Bié pà!", "别怕！", "Don't be afraid!", "Не бойся!"],
  ],
  "早上": [
    ["Rì qǐ-lái-de shí-jiān wǒ hē shuǐ.", "日起来的时间我喝水。", "In the morning I drink water.", "Утром я пью воду."],
    ["Tā rì qǐ-lái-de shí-jiān zǒu le.", "他日起来的时间走了。", "He left in the morning.", "Он ушёл утром."],
  ],
  "桌子": [
    ["Shū zài fàng-dōng-xi-de miànr-shàng.", "书在放东西的面儿上。", "The book is on the table.", "Книга на столе."],
    ["Zhè-ge fàng-dōng-xi-de miànr hěn dà.", "这个放东西的面儿很大。", "This table is big.", "Этот стол большой."],
  ],
  "玩": [
    ["Hái-zi-men zài wài-miàn wánr.", "孩子们在外面玩儿。", "The kids are playing outside.", "Дети играют на улице."],
    ["Nǐ xiǎng wánr ma?", "你想玩儿吗？", "Do you want to play?", "Хочешь поиграть?"],
  ],
  "眼睛": [
    ["Bǎ yǎnjing guān-shàng.", "把眼睛关上。", "Close your eyes.", "Закрой глаза."],
    ["Tā-de yǎnjing shì lán-sè-de.", "她的眼睛是蓝色的。", "Her eyes are blue.", "У неё голубые глаза."],
  ],
  "穿": [
    ["Bǎ yīfu fàng zài shēntǐ-shàng, wài-miàn hěn lěng.", "把衣服放在身体上，外面很冷。", "Put your clothes on, it's cold outside.", "Оденься, на улице холодно."],
    ["Tā bǎ hóng-sè-de yīfu fàng zài shēntǐ-shàng.", "她把红色的衣服放在身体上。", "She put on red clothes.", "Она надела красную одежду."],
  ],
  "站": [
    ["Zhàn qǐ-lái!", "站起来！", "Stand up!", "Встань!"],
    ["Tā zhàn zài mén-kǒu.", "他站在门口。", "He's standing in the doorway.", "Он стоит в дверях."],
  ],
  "耳朵": [
    ["Wǒ-de ěrduo hěn lěng.", "我的耳朵很冷。", "My ears are cold.", "У меня мёрзнут уши."],
    ["Dòng-wù-de ěrduo hěn dà.", "动物的耳朵很大。", "The animal's ears are big.", "У животного большие уши."],
  ],
  "脚": [
    ["Wǒ-de jiǎo hěn lěng.", "我的脚很冷。", "My feet are cold.", "У меня мёрзнут ноги."],
    ["Tā-de jiǎo hěn dà.", "他的脚很大。", "His feet are big.", "У него большие ступни."],
  ],
  "脸": [
    ["Tā-de tóu-de qián-miàn hěn hóng.", "他的头的前面很红。", "His face is red.", "У него красное лицо."],
    ["Yòng shuǐ ràng tóu-de qián-miàn gānjìng.", "用水让头的前面干净。", "Wash your face.", "Умой лицо."],
  ],
  "菜": [
    ["Māma mǎi le chī-de zhíwù.", "妈妈买了吃的植物。", "Mom bought vegetables.", "Мама купила овощи."],
    ["Chī-de zhíwù duì shēntǐ hǎo.", "吃的植物对身体好。", "Vegetables are good for you.", "Овощи полезны для здоровья."],
  ],
  "跑": [
    ["Kuài zǒu! Tā lái le!", "快走！他来了！", "Run! He's coming!", "Беги! Он идёт!"],
    ["Tā kuài zǒu huí jiā.", "他快走回家。", "He runs home.", "Он бежит домой."],
  ],
  "马上": [
    ["Wǒ xiàn-zài jiù lái.", "我现在就来。", "I'm coming right away.", "Я сейчас же приду."],
    ["Nǐ xiàn-zài jiù qù.", "你现在就去。", "Go right now.", "Иди прямо сейчас."],
  ],
  "高兴": [
    ["Wǒ hěn kāi-xīn jiàn-dào nǐ.", "我很开心见到你。", "I'm glad to see you.", "Рад тебя видеть."],
    ["Hái-zi-men hěn kāi-xīn.", "孩子们很开心。", "The children are happy.", "Дети рады."],
  ],
  "不要": [
    ["Bù yào shuō!", "不要说！", "Don't say it!", "Не говори!"],
    ["Wǒ bù yào zhè-ge.", "我不要这个。", "I don't want this.", "Мне это не нужно."],
  ],
  "头发": [
    ["Tā-de tóu-fa hěn hēi.", "她的头发很黑。", "Her hair is very black.", "У неё очень чёрные волосы."],
    ["Bàba-de tóu-fa biàn bái le.", "爸爸的头发变白了。", "Dad's hair has turned white.", "Папины волосы поседели."],
  ],
  "开心": [
    ["Nǐ kāi-xīn ma?", "你开心吗？", "Are you happy?", "Ты рад?"],
    ["Zhè-ge zhēn ràng rén kāi-xīn.", "这个真让人开心。", "This really makes people happy.", "Это правда радует."],
  ],
  "腿": [
    ["Tā-de jiǎo hěn cháng.", "他的脚很长。", "His legs are long.", "У него длинные ноги."],
    ["Wǒ-de jiǎo bù hǎo, bù néng zǒu.", "我的脚不好，不能走。", "My leg is bad, I can't walk.", "У меня болит нога, я не могу идти."],
  ],
  "饿": [
    ["Wǒ xiǎng chī-fàn le.", "我想吃饭了。", "I'm hungry.", "Я проголодался."],
    ["Hái-zi-men xiǎng chī-fàn.", "孩子们想吃饭。", "The children are hungry.", "Дети голодны."],
  ],
  "再见": [
    ["Zài-jiàn!", "再见！", "Goodbye!", "До свидания!"],
    ["Míng-tiān zài-jiàn!", "明天再见！", "See you again tomorrow!", "Увидимся завтра!"],
  ],
  "对不起": [
    ["Duì-bù-qǐ, wǒ lái wǎn le.", "对不起，我来晚了。", "Sorry I'm late.", "Извини, я опоздал."],
    ["Shì wǒ bù hǎo.", "是我不好。", "It's my fault.", "Это я виноват."],
  ],
  "打电话": [
    ["Wǎn-shang wǒ dǎ huà-jī gěi māma.", "晚上我打话机给妈妈。", "In the evening I call mom.", "Вечером я звоню маме."],
    ["Tā zài dǎ huà-jī.", "他在打话机。", "He's on the phone.", "Он разговаривает по телефону."],
  ],
  "爸爸": [
    ["Wǒ bàba hěn gāo.", "我爸爸很高。", "My dad is tall.", "Мой папа высокий."],
    ["Bàba qù gōng-zuò le.", "爸爸去工作了。", "Dad went to work.", "Папа ушёл на работу."],
  ],
  "啊": [
    ["Zhè-ge zhēn hǎo-kàn \"a\"!", "这个真好看啊！", "Oh, this is so pretty!", "Ах, как красиво!"],
    ["Nǐ lái le \"a\"!", "你来了啊！", "Oh, you've come!", "А, ты пришёл!"],
  ],
  "中文": [
    ["Nǐ huì shuō \"Zhōngguó\" huà ma?", "你会说中国话吗？", "Do you speak Chinese?", "Ты говоришь по-китайски?"],
    ["\"Zhōngguó\" huà hěn hǎo-tīng.", "中国话很好听。", "Chinese sounds beautiful.", "Китайский красиво звучит."],
  ],
  "为": [
    ["Wǒ wèi nǐ zuò le fàn.", "我为你做了饭。", "I cooked for you.", "Я приготовил для тебя."],
    ["Zhè-ge gěi nǐ.", "这个给你。", "This is for you.", "Это тебе."],
  ],
  "为了": [
    ["Wèi-le hái-zi, tā gōng-zuò.", "为了孩子，他工作。", "He works for his children.", "Он работает ради детей."],
    ["Wǒ wèi-le xué \"Zhōngguó\" huà qù \"Zhōngguó\".", "我为了学中国话去中国。", "I'm going to China to learn Chinese.", "Я еду в Китай, чтобы учить китайский."],
  ],
  "主要": [
    ["Zuì zhòng-yào-de shì shēntǐ.", "最重要的是身体。", "The main thing is health.", "Главное — здоровье."],
    ["Dà bù-fen xué-shēng dōu lái le.", "大部分学生都来了。", "Most of the students came.", "Пришло большинство студентов."],
  ],
  "全": [
    ["Tā-men dōu lái le.", "他们都来了。", "They've all come.", "Все пришли."],
    ["Fàn dōu chī-wán le.", "饭都吃完了。", "The food is all eaten.", "Всю еду съели."],
  ],
  "公司": [
    ["Wǒ-de gōng-zuò-de dì-fang hěn yuǎn.", "我的工作的地方很远。", "My company is far away.", "Моя компания далеко."],
    ["Tā zài gōng-zuò-de dì-fang.", "他在工作的地方。", "He's at work.", "Он на работе."],
  ],
  "其实": [
    ["Tā zhēn bù zhīdào.", "他真不知道。", "He really doesn't know.", "Он правда не знает."],
    ["Zhè-ge zhēn bù nán.", "这个真不难。", "This actually isn't hard.", "Это на самом деле несложно."],
  ],
  "决定": [
    ["Wǒ jué-dìng qù \"Zhōngguó\".", "我决定去中国。", "I've decided to go to China.", "Я решил поехать в Китай."],
    ["Nǐ jué-dìng le ma?", "你决定了吗？", "Have you decided?", "Ты решил?"],
  ],
  "力": [
    ["Tā hěn yǒu lì.", "他很有力。", "He's strong.", "Он сильный."],
    ["Wǒ méi-yǒu lì le.", "我没有力了。", "I've no strength left.", "У меня нет сил."],
  ],
  "千": [
    ["Zhè-ge yào yī-líng-líng-líng jīn.", "这个要一零零零金。", "This costs a thousand.", "Это стоит тысячу."],
    ["Shí-ge shí-ge shí shì yī-líng-líng-líng.", "十个十个十是一零零零。", "Ten tens of tens make a thousand.", "Десять раз по сто — это тысяча."],
  ],
  "原因": [
    ["Wǒ bù zhīdào wèi-shénme.", "我不知道为什么。", "I don't know the reason.", "Я не знаю почему."],
    ["Nǐ shuō wèi-shénme.", "你说为什么。", "Tell me why.", "Скажи почему."],
  ],
  "发现": [
    ["Wǒ fā-xiàn tā bù zài jiā.", "我发现他不在家。", "I found he wasn't home.", "Я обнаружил, что его нет дома."],
    ["Nǐ zhǎo-dào le ma?", "你找到了吗？", "Did you find it?", "Ты нашёл?"],
  ],
  "国": [
    ["Nǐ shì nǎ guó rén?", "你是哪国人？", "Which country are you from?", "Ты из какой страны?"],
    ["Zhè-ge guó hěn xiǎo.", "这个国很小。", "This country is small.", "Эта страна маленькая."],
  ],
  "图书馆": [
    ["Wǒ qù yǒu-hěn-duō-de-shū-de dì-fang kàn shū.", "我去有很多的书的地方看书。", "I go to the library to read.", "Я хожу в библиотеку читать."],
    ["Yǒu-hěn-duō-de-shū-de dì-fang zài nǎ-lǐ?", "有很多的书的地方在哪里？", "Where's the library?", "Где библиотека?"],
  ],
  "城市": [
    ["Zhè-ge guó-jiā-lǐ-de dì-fang hěn dà.", "这个国家里的地方很大。", "This city is big.", "Этот город большой."],
    ["Nǐ zài nǎ-ge guó-jiā-lǐ-de dì-fang?", "你在哪个国家里的地方？", "Which city are you in?", "В каком ты городе?"],
  ],
  "大学": [
    ["Tā zài dà-xué xué.", "他在大学学。", "He studies at university.", "Он учится в университете."],
    ["Wǒ-de dà-xué hěn yuǎn.", "我的大学很远。", "My university is far away.", "Мой университет далеко."],
  ],
  "存在": [
    ["Zhè-ge dōng-xi zhēn-de yǒu ma?", "这个东西真的有吗？", "Does this thing really exist?", "Эта вещь правда существует?"],
    ["Tā hái zài.", "他还在。", "He's still around.", "Он ещё здесь."],
  ],
  "完成": [
    ["Wǒ zuò-wán le.", "我做完了。", "I've finished.", "Я закончил."],
    ["Nǐ míng-tiān néng zuò-wán ma?", "你明天能做完吗？", "Can you finish it tomorrow?", "Ты сможешь закончить завтра?"],
  ],
  "影响": [
    ["Shuǐ duì shēntǐ hǎo.", "水对身体好。", "Water is good for the body.", "Вода полезна для тела."],
    ["Zhè-ge dōng-xi bǎ tā biàn le.", "这个东西把他变了。", "This changed him.", "Это изменило его."],
  ],
  "必须": [
    ["Nǐ yào lái.", "你要来。", "You must come.", "Ты должен прийти."],
    ["Xué-shēng yào xué.", "学生要学。", "Students must study.", "Студенты должны учиться."],
  ],
  "所有": [
    ["Zhè-lǐ-de dōng-xi dōu shì wǒ-de.", "这里的东西都是我的。", "All the things here are mine.", "Все вещи здесь мои."],
    ["Xué-shēng dōu zài.", "学生都在。", "All the students are here.", "Все студенты здесь."],
  ],
  "新闻": [
    [`Nǐ kàn le jīn-tiān-de ${NEW}-de zhīdào-de dōng-xi ma?`, "你看了今天的新的知道的东西吗？", "Did you see today's news?", "Ты видел сегодняшние новости?"],
    [`Yǒu shénme ${NEW}-de zhīdào-de dōng-xi?`, "有什么新的知道的东西？", "What's the news?", "Какие новости?"],
  ],
  "方法": [
    ["Nǐ yǒu hǎo fāng-fǎ ma?", "你有好方法吗？", "Do you have a good way?", "У тебя есть хороший способ?"],
    ["Zhè shì xué zì-de fāng-fǎ.", "这是学字的方法。", "This is a way to learn characters.", "Это способ учить иероглифы."],
  ],
  "汉语": [
    ["Tā xué \"Zhōngguó\" huà sān nián le.", "他学中国话三年了。", "He's been learning Chinese for three years.", "Он учит китайский три года."],
    ["\"Zhōngguó\" huà bù nán.", "中国话不难。", "Chinese isn't hard.", "Китайский несложный."],
  ],
  "知识": [
    ["Tā zhīdào-de dōng-xi hěn duō.", "他知道的东西很多。", "He knows a lot.", "Он много знает."],
    ["Shū gěi wǒ-men zhīdào-de dōng-xi.", "书给我们知道的东西。", "Books give us knowledge.", "Книги дают нам знания."],
  ],
  "结束": [
    ["Gōng-zuò wán le.", "工作完了。", "Work is over.", "Работа закончилась."],
    ["Xué-xiào wán le, hái-zi-men huí jiā.", "学校完了，孩子们回家。", "School is over and the children go home.", "Уроки закончились, дети идут домой."],
  ],
  "网站": [
    ["Zhè-ge wǎng-zhàn hěn hǎo.", "这个网站很好。", "This website is good.", "Этот сайт хороший."],
    ["Wǒ zài wǎng-zhàn-shàng kàn-dào le.", "我在网站上看到了。", "I saw it on a website.", "Я видел это на сайте."],
  ],
  "计算机": [
    ["Zhè-ge suàn-de jī hěn kuài.", "这个算的机很快。", "This computer is fast.", "Этот компьютер быстрый."],
    ["Wǒ-men yòng suàn-de jī xué.", "我们用算的机学。", "We study with computers.", "Мы учимся с помощью компьютеров."],
  ],
  "语言": [
    ["Nǐ huì shuō shénme huà?", "你会说什么话？", "What languages do you speak?", "На каких языках ты говоришь?"],
    ["Zhè shì nǎ guó huà?", "这是哪国话？", "Which country's language is this?", "Это язык какой страны?"],
  ],
  "部分": [
    ["Zhè shì yī bù-fen.", "这是一部分。", "This is one part.", "Это одна часть."],
    ["Dà bù-fen rén dōu zhīdào.", "大部分人都知道。", "Most people know.", "Большинство людей знает."],
  ],
  "中": [
    ["Tā zài zhōng-jiān.", "他在中间。", "He's in the middle.", "Он посередине."],
    ["Zài liǎng-ge fáng-zi zhōng-jiān.", "在两个房子中间。", "Between the two houses.", "Между двумя домами."],
  ],
  "了解": [
    ["Wǒ zhīdào tā.", "我知道他。", "I know him.", "Я его знаю."],
    ["Nǐ zhīdào zhè-ge dì-fang ma?", "你知道这个地方吗？", "Do you know this place?", "Ты знаешь это место?"],
  ],
  "介绍": [
    ["Wǒ ràng nǐ zhīdào wǒ-de jiā.", "我让你知道我的家。", "Let me introduce my family.", "Позволь представить мою семью."],
    [`Ràng tā-men zhīdào nǐ-de míng-${ZI}.`, "让他们知道你的名字。", "Introduce yourself to them.", "Представься им."],
  ],
  "但": [
    ["Tā hěn xiǎo, dàn hěn yǒu lì.", "他很小，但很有力。", "He's small but strong.", "Он маленький, но сильный."],
    ["Wǒ xiǎng chī, dàn méi-yǒu shí-jiān.", "我想吃，但没有时间。", "I want to eat, but I have no time.", "Я хочу поесть, но нет времени."],
  ],
  "保护": [
    ["Bù ràng shuǐ-guǒ biàn huài.", "不让水果变坏。", "Keep the fruit from spoiling.", "Не дай фруктам испортиться."],
    ["Wǒ-men yào bù ràng zhè-ge dì-fang biàn huài.", "我们要不让这个地方变坏。", "We must protect this place.", "Мы должны беречь это место."],
  ],
  "准备": [
    ["Fàn zuò hǎo le.", "饭做好了。", "The food is ready.", "Еда готова."],
    ["Wǒ-men kě-yǐ kāishǐ le.", "我们可以开始了。", "We're ready.", "Мы готовы."],
  ],
  "出现": [
    ["Tā chū-xiàn le.", "他出现了。", "He showed up.", "Он появился."],
    ["Tiān-shàng chū-xiàn le yī-ge fēi-jī.", "天上出现了一个飞机。", "A plane appeared in the sky.", "В небе появился самолёт."],
  ],
  "办法": [
    ["Wǒ yǒu yī-ge fāng-fǎ.", "我有一个方法。", "I have an idea.", "У меня есть способ."],
    ["Méi-yǒu fāng-fǎ.", "没有方法。", "There's nothing to be done.", "Ничего не поделаешь."],
  ],
  "加": [
    ["Sān, sì fàng zài yī-qǐ, shì qī.", "三、四放在一起，是七。", "Three plus four is seven.", "Три плюс четыре — семь."],
    ["Bǎ shuǐ hé shuǐ-guǒ fàng zài yī-qǐ.", "把水和水果放在一起。", "Put the water and the fruit together.", "Сложи воду и фрукты вместе."],
  ],
  "努力": [
    ["Tā yòng hěn-duō lì-qi xué \"Zhōngguó\" huà.", "他用很多力气学中国话。", "He works hard at Chinese.", "Он усердно учит китайский."],
    ["Nǐ yào yòng hěn-duō lì-qi.", "你要用很多力气。", "You have to work hard.", "Тебе надо постараться."],
  ],
  "医生": [
    ["Tā shì bāng-shēntǐ-bù-hǎo-de rén.", "他是帮身体不好的人。", "He's a doctor.", "Он врач."],
    ["Wǒ yào qù kàn bāng-shēntǐ-bù-hǎo-de rén.", "我要去看帮身体不好的人。", "I need to see a doctor.", "Мне надо к врачу."],
  ],
  "医院": [
    ["Tā zài bǎ-shēntǐ-zuò-hǎo-de dì-fang.", "他在把身体做好的地方。", "He's in hospital.", "Он в больнице."],
    ["Bǎ-shēntǐ-zuò-hǎo-de dì-fang hěn yuǎn ma?", "把身体做好的地方很远吗？", "Is the hospital far?", "Больница далеко?"],
  ],
};
