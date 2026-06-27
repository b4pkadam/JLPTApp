// ===== JLPT N5 MOCK EXAM DATA =====
// Contains exactly 85 questions distributed across official N5 test sections:
// Section 1: Vocabulary (文字・語彙) - 35 questions (Mondai 1 to 4)
// Section 2: Grammar & Reading (文法・読解) - 26 questions (Mondai 5 to 7)
// Section 3: Listening (聴解) - 24 questions (Mondai 8 to 11)

const mockExamQuestions = [
  // ==========================================
  // SECTION 1: VOCABULARY (Mondai 1 to 4) - 35 Questions
  // ==========================================
  
  // --- Mondai 1: Kanji Reading (12 Questions) ---
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>昨日<rt>きのう</rt></ruby>、ともだちに**会いました**。",
    options: ["あいました", "えいました", "かいました", "おいました"],
    correctAnswer: "あいました",
    explanation: "会う (あう) - to meet."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>私<rt>わたし</rt></ruby>の**国**はインドです。",
    options: ["くに", "まち", "むら", "ところ"],
    correctAnswer: "くに",
    explanation: "国 (くに) - country."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>天気<rt>てんき</rt></ruby>がいいから**川**に<ruby>行<rt>い</rt></ruby>きましょう。",
    options: ["かわ", "やま", "うみ", "いけ"],
    correctAnswer: "かわ",
    explanation: "川 (かわ) - river."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "この<ruby>本<rt>ほん</rt></ruby>は**古い**です。",
    options: ["ふるい", "あたらしい", "ひくい", "おもい"],
    correctAnswer: "ふるい",
    explanation: "古い (ふるい) - old."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>午後<rt>ごご</rt></ruby>**五時**に<ruby>帰<rt>かえ</rt></ruby>ります。",
    options: ["ごじ", "ごし", "ごうじ", "こじ"],
    correctAnswer: "ごじ",
    explanation: "五時 (ごじ) - 5 o'clock."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>日本語<rt>にほんご</rt></ruby>の**学生**です。",
    options: ["がくせい", "がくしゅう", "せいと", "がっこう"],
    correctAnswer: "がくせい",
    explanation: "学生 (がくせい) - student."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "あそこに**男**の<ruby>人<rt>ひと</rt></ruby>がいます。",
    options: ["おとこ", "おんな", "こども", "ひと"],
    correctAnswer: "おとこ",
    explanation: "男 (おとこ) - male/man."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>毎朝<rt>まいあさ</rt></ruby>**新聞**を<ruby>読<rt>よ</rt></ruby>みます。",
    options: ["しんぶん", "ざっし", "てがみ", "ほん"],
    correctAnswer: "しんぶん",
    explanation: "新聞 (しんぶん) - newspaper."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "この<ruby>部屋<rt>へや</rt></ruby>は**明るい**ですね。",
    options: ["あかるい", "くらい", "ひろい", "あたたかい"],
    correctAnswer: "あかるい",
    explanation: "明るい (あかるい) - bright."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>駅<rt>えき</rt></ruby>の**近く**でご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べました。",
    options: ["ちかく", "とおく", "となりの", "むこう"],
    correctAnswer: "ちかく",
    explanation: "近く (ちかく) - nearby."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "<ruby>夏休み<rt>なつやすみ</rt></ruby>は**海**に<ruby>行<rt>い</rt></ruby>きたいです。",
    options: ["うみ", "やま", "かわ", "もり"],
    correctAnswer: "うみ",
    explanation: "海 (うみ) - sea/ocean."
  },
  {
    section: 'vocab',
    mondai: 1,
    questionText: "あのホテルは**有名**です。",
    options: ["ゆうめい", "べんり", "しずか", "にぎやか"],
    correctAnswer: "ゆうめい",
    explanation: "有名 (ゆうめい) - famous."
  },

  // --- Mondai 2: Orthography (Kanji Selection) (8 Questions) ---
  {
    section: 'vocab',
    mondai: 2,
    questionText: "あしたは**にちようび**です。",
    options: [
      "<ruby>日曜日<rt>にちようび</rt></ruby>",
      "<ruby>月曜日<rt>げつようび</rt></ruby>",
      "<ruby>火曜日<rt>かようび</rt></ruby>",
      "<ruby>水曜日<rt>すいようび</rt></ruby>"
    ],
    correctAnswer: "<ruby>日曜日<rt>にちようび</rt></ruby>",
    explanation: "にちようび corresponds to 日曜日."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "<ruby>毎日<rt>まいにち</rt></ruby>**くるま**で<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。",
    options: [
      "<ruby>車<rt>くるま</rt></ruby>",
      "<ruby>電車<rt>でんしゃ</rt></ruby>",
      "<ruby>自転車<rt>じてんしゃ</rt></ruby>",
      "<ruby>飛行機<rt>ひこうき</rt></ruby>"
    ],
    correctAnswer: "<ruby>車<rt>くるま</rt></ruby>",
    explanation: "くるま corresponds to 車."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "<ruby>田中<rt>たなか</rt></ruby>さんは**ともだち**が<ruby>多<rt>おお</rt></ruby>いです。",
    options: [
      "<ruby>友達<rt>ともだち</rt></ruby>",
      "<ruby>先生<rt>せんせい</rt></ruby>",
      "<ruby>学生<rt>がくせい</rt></ruby>",
      "<ruby>家族<rt>かぞく</rt></ruby>"
    ],
    correctAnswer: "<ruby>友達<rt>ともだち</rt></ruby>",
    explanation: "ともだち corresponds to 友達."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "お**かね**がありません。",
    options: [
      "<ruby>金<rt>かね</rt></ruby>",
      "<ruby>銀<rt>ぎん</rt></ruby>",
      "<ruby>銅<rt>どう</rt></ruby>",
      "<ruby>鉄<rt>てつ</rt></ruby>"
    ],
    correctAnswer: "<ruby>金<rt>かね</rt></ruby>",
    explanation: "かね corresponds to 金 (Okane)."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "デパートの**いりぐち**で<ruby>待<rt>ま</rt></ruby>ちましょう。",
    options: [
      "<ruby>入口<rt>いりぐち</rt></ruby>",
      "<ruby>出口<rt>でぐち</rt></ruby>",
      "<ruby>改札口<rt>かいさつぐち</rt></ruby>",
      "<ruby>窓口<rt>まどぐち</rt></ruby>"
    ],
    correctAnswer: "<ruby>入口<rt>いりぐち</rt></ruby>",
    explanation: "いりぐち corresponds to 入口."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "ひらがなと**かんじ**を<ruby>勉強<rt>べんきょう</rt></ruby>します。",
    options: [
      "<ruby>漢字<rt>かんじ</rt></ruby>",
      "<ruby>片仮名<rt>かたかな</rt></ruby>",
      "<ruby>平仮名<rt>ひらがな</rt></ruby>",
      "<ruby>文章<rt>ぶんしょう</rt></ruby>"
    ],
    correctAnswer: "<ruby>漢字<rt>かんじ</rt></ruby>",
    explanation: "かんじ corresponds to 漢字."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "パンと**たまご**を<ruby>食<rt>た</rt></ruby>べました。",
    options: [
      "<ruby>卵<rt>たまご</rt></ruby>",
      "<ruby>魚<rt>さかな</rt></ruby>",
      "<ruby>肉<rt>にく</rt></ruby>",
      "<ruby>野菜<rt>やさい</rt></ruby>"
    ],
    correctAnswer: "<ruby>卵<rt>たまご</rt></ruby>",
    explanation: "たまご corresponds to 卵."
  },
  {
    section: 'vocab',
    mondai: 2,
    questionText: "あの**やま**は<ruby>富士山<rt>ふじさん</rt></ruby>ですか。",
    options: [
      "<ruby>山<rt>やま</rt></ruby>",
      "<ruby>川<rt>かわ</rt></ruby>",
      "<ruby>海<rt>うみ</rt></ruby>",
      "<ruby>池<rt>いけ</rt></ruby>"
    ],
    correctAnswer: "<ruby>山<rt>やま</rt></ruby>",
    explanation: "やま corresponds to 山."
  },

  // --- Mondai 3: Contextually-defined Expressions (10 Questions) ---
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>風邪<rt>かぜ</rt></ruby>をひいたので、<ruby>薬<rt>くすり</rt></ruby>を**______**。",
    options: ["のみました", "たべました", "かいました", "みせました"],
    correctAnswer: "のみました",
    explanation: "薬を飲む (くすりをのむ) is the standard Japanese expression for taking medicine."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>朝<rt>あさ</rt></ruby><ruby>起<rt>お</rt></ruby>きて、**______**を<ruby>洗<rt>あら</rt></ruby>います。",
    options: ["かお", "あし", "て", "かみ"],
    correctAnswer: "かお",
    explanation: "顔を洗う (かおをあらう) means to wash one's face."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "お<ruby>腹<rt>なか</rt></ruby>がすいたので、<ruby>食堂<rt>しょくどう</rt></ruby>で**______**を<ruby>食<rt>た</rt></ruby>べます。",
    options: ["ごはん", "おちゃ", "おみず", "おさけ"],
    correctAnswer: "ごはん",
    explanation: "ご飯を食べる means to eat a meal."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>部屋<rt>へや</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>いので、<ruby>電気<rt>でんき</rt></ruby>を**______**ください。",
    options: ["つけて", "けして", "あけて", "しめて"],
    correctAnswer: "つけて",
    explanation: "電気をつける (でんきをつける) - turn on the lights."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>時間<rt>じかん</rt></ruby>がありませんから、**______**<ruby>行<rt>い</rt></ruby>きましょう。",
    options: ["いそいで", "ゆっくり", "はじめて", "だんだん"],
    correctAnswer: "いそいで",
    explanation: "急いで (いそいで) - in a hurry."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "このスープはとても**______**ですね。",
    options: ["おいしい", "にぎやか", "しずか", "べんり"],
    correctAnswer: "おいしい",
    explanation: "美味しい (おいしい) - delicious."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>が**______**あります。",
    options: ["たくさん", "すこし", "ぜんぶ", "もう"],
    correctAnswer: "たくさん",
    explanation: "たくさん - many/a lot."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>図書館<rt>としょかん</rt></ruby>では**______**してください。",
    options: ["しずかに", "にぎやかに", "きれいに", "べんりに"],
    correctAnswer: "しずかに",
    explanation: "静かに (しずかに) - quietly."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は**______**ありません。<ruby>狭<rt>せま</rt></ruby>いです。",
    options: ["ひろく", "あかるく", "くらく", "おおきく"],
    correctAnswer: "ひろく",
    explanation: "広くない (ひろくない) - not spacious."
  },
  {
    section: 'vocab',
    mondai: 3,
    questionText: "あした、<ruby>日本<rt>にほん</rt></ruby>へ**______**に<ruby>行<rt>い</rt></ruby>きます。",
    options: [
      "<ruby>旅行<rt>りょこう</rt></ruby>",
      "<ruby>食事<rt>しょくじ</rt></ruby>",
      "<ruby>買物<rt>かいもの</rt></ruby>",
      "<ruby>散歩<rt>さんぽ</rt></ruby>"
    ],
    correctAnswer: "<ruby>旅行<rt>りょこう</rt></ruby>",
    explanation: "旅行 (りょこう) - travel."
  },

  // --- Mondai 4: Paraphrases (5 Questions) ---
  {
    section: 'vocab',
    mondai: 4,
    questionText: "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は**せまい**です。",
    options: [
      "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>広<rt>ひろ</rt></ruby>くないです。",
      "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>明<rt>あか</rt></ruby>るくないです。",
      "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しくないです。",
      "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かではないです。"
    ],
    correctAnswer: "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>広<rt>ひろ</rt></ruby>くないです。",
    explanation: "せまい (narrow/cramped) is synonymous with 広くない (not spacious)."
  },
  {
    section: 'vocab',
    mondai: 4,
    questionText: "<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>さんに<ruby>英語<rt>えいご</rt></ruby>を**ならいました**。",
    options: [
      "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>私<rt>わたし</rt></ruby>に<ruby>英語<rt>えいご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えました。",
      "<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>さんに<ruby>英語<rt>えいご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えました。",
      "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>私<rt>わたし</rt></ruby>に<ruby>英語<rt>えいご</rt></ruby>を<ruby>習<rt>なら</rt></ruby>いました。",
      "<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>さんに<ruby>英語<rt>えいご</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>しました。"
    ],
    correctAnswer: "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>私<rt>わたし</rt></ruby>に<ruby>英語<rt>えいご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えました。",
    explanation: "習う (ならう - to learn) from someone is the reverse of 教える (おしえる - to teach) to someone."
  },
  {
    section: 'vocab',
    mondai: 4,
    questionText: "あの<ruby>店<rt>みせ</rt></ruby>は**お休み**です。",
    options: [
      "あの<ruby>店<rt>みせ</rt></ruby>は<ruby>閉<rt>し</rt></ruby>まっています。",
      "あの<ruby>店<rt>みせ</rt></ruby>は<ruby>開<rt>あ</rt></ruby>いています。",
      "あの<ruby>店<rt>みせ</rt></ruby>はにぎやかです。",
      "あの<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby>いです。"
    ],
    correctAnswer: "あの<ruby>店<rt>みせ</rt></ruby>は<ruby>閉<rt>し</rt></ruby>まっています。",
    explanation: "お休み (closed/holiday) means the shop is closed (閉まっている)."
  },
  {
    section: 'vocab',
    mondai: 4,
    questionText: "この<ruby>料理<rt>りょうり</rt></ruby>は**やさしい**です。",
    options: [
      "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>です。",
      "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいです。",
      "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>美味<rt>おい</rt></ruby>しいです。",
      "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>辛<rt>から</rt></ruby>いです。"
    ],
    correctAnswer: "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>です。",
    explanation: "優しい (やさしい - easy/simple) is equivalent to 簡単 (かんたん)."
  },
  {
    section: 'vocab',
    mondai: 4,
    questionText: "<ruby>私<rt>わたし</rt></ruby>は**おととし**<ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
    options: [
      "<ruby>二年前<rt>にねんまえ</rt></ruby><ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
      "<ruby>一年前<rt>いちねんまえ</rt></ruby><ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
      "<ruby>三年前<rt>さんねんまえ</rt></ruby><ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
      "<ruby>今年<rt>ことし</rt></ruby><ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。"
    ],
    correctAnswer: "<ruby>二年前<rt>にねんまえ</rt></ruby><ruby>日本<rt>にほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。",
    explanation: "おととし (year before last) means two years ago (二年前)."
  },

  // ==========================================
  // SECTION 2: GRAMMAR & READING (Mondai 5 to 7) - 26 Questions
  // ==========================================

  // --- Mondai 5: Grammar Forms (Particles & Conjugation) (16 Questions) ---
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>バス**______**<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",
    options: ["で", "に", "を", "が"],
    correctAnswer: "de",
    options: ["で", "に", "を", "が"],
    correctAnswer: "で",
    explanation: "で particle marks the means/method of transport."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>**______**ペンがあります。",
    options: ["と", "が", "も", "に"],
    correctAnswer: "と",
    explanation: "と particle connects nouns (and)."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>昨日<rt>きのう</rt></ruby>はどこ**______**<ruby>行<rt>い</rt></ruby>きませんでした。",
    options: ["へも", "にを", "もへ", "がに"],
    correctAnswer: "へも",
    explanation: "どこへも + negative verb means 'went nowhere'."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "この<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt></ruby>か**______**きれいですね。",
    options: ["で", "に", "と", "な"],
    correctAnswer: "で",
    explanation: "で is the te-form of na-adjectives (静か) used to chain descriptions."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "コーヒーと<ruby>紅茶<rt>こうちゃ</rt></ruby>、どちら**______**<ruby>好<rt>す</rt></ruby>きですか。",
    options: ["が", "を", "に", "で"],
    correctAnswer: "が",
    explanation: "AとB、どちらが好きですか matches the standard choice question template."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>風<rt>かぜ</rt></ruby>が**______**です。",
    options: ["つよかった", "つよい", "つよく", "つよくない"],
    correctAnswer: "つよかった",
    explanation: "Yesterday (昨日) requires past tense of i-adjective (つよかった)."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>っても**______**ですか。",
    options: ["いい", "なにも", "ほしい", "います"],
    correctAnswer: "いい",
    explanation: "〜てもいいですか forms the expression for asking permission (May I?)."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "あした、いっしょに<ruby>行<rt>い</rt></ruby>き**______**か。",
    options: ["ませんか", "ましょう", "てください", "たい"],
    correctAnswer: "ませんか",
    explanation: "〜ませんか is used to politely invite someone to do something."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>今<rt>いま</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>で<ruby>本<rt>ほん</rt></ruby>を**______**います。",
    options: ["よんで", "よみ", "よむ", "よんだ"],
    correctAnswer: "よんで",
    explanation: "〜ている (progressive aspect) requires the verb in te-form (読んで)."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>日本語<rt>にほんご</rt></ruby>は**______**<ruby>難<rt>むずか</rt></ruby>しいですか。",
    options: ["どれくらい", "いつ", "だれ", "どこ"],
    correctAnswer: "どれくらい",
    explanation: "どれくらい (how much / to what extent) matches N5 inquiries."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>田中<rt>たなか</rt></ruby>さん**______**<ruby>電話<rt>でんわ</rt></ruby>をかけました。",
    options: ["に", "を", "で", "が"],
    correctAnswer: "に",
    explanation: "電話をかける marks the receiver of the call with に."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>昨日<rt>きのう</rt></ruby><ruby>買<rt>か</rt></ruby>ったカメラはとても**______**です。",
    options: ["べんり", "べんりな", "べんりに", "べんりだ"],
    correctAnswer: "べんり",
    explanation: "Adjective modifying copula (です) directly holds the base word (便利)."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "<ruby>寒<rt>さむ</rt></ruby>いですから、<ruby>窓<rt>まど</rt></ruby>を**______**ください。",
    options: ["しめて", "しめないで", "しめる", "しめた"],
    correctAnswer: "しめて",
    explanation: "〜てください (please do) requires the verb in te-form (閉めて)."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "あそこに<ruby>車<rt>くるま</rt></ruby>が<ruby>何台<rt>なんだい</rt></ruby>**______**か。",
    options: ["あります", "います", "する", "くる"],
    correctAnswer: "あります",
    explanation: "Inanimate objects count with あります."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "このケーキは<ruby>甘<rt>あま</rt></ruby>くて**______**ないです。",
    options: ["おいしく", "おいしい", "おいしくて", "おいしかった"],
    correctAnswer: "おいしく",
    explanation: "Negative of i-adjective removes 'i' and chains to -くない."
  },
  {
    section: 'grammar',
    mondai: 5,
    questionText: "あした、<ruby>雨<rt>あめ</rt></ruby>が**______**、ピクニックに<ruby>行<rt>い</rt></ruby>きません。",
    options: ["ふったら", "ふる", "ふって", "ふった"],
    correctAnswer: "ふったら",
    explanation: "〜たら marks conditional clauses (if it rains)."
  },

  // --- Mondai 6: Sentence Composition (Star ★ Questions) (5 Questions) ---
  {
    section: 'grammar',
    mondai: 6,
    questionText: "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby> ____ ____ __★__ ____ ます。",
    options: [
      "<ruby>図書館<rt>としょかん</rt></ruby>で",
      "<ruby>日本語<rt>にほんご</rt></ruby>を",
      "<ruby>勉強<rt>べんきょう</rt></ruby>",
      "し"
    ],
    correctAnswer: "<ruby>勉強<rt>べんきょう</rt></ruby>",
    explanation: "Correct order: 毎日 [1: 図書館で] [2: 日本語を] [3: 勉強] [4: し] ます。The 3rd position is 勉強."
  },
  {
    section: 'grammar',
    mondai: 6,
    questionText: "あそこに ____ ____ __★__ ____ があります。",
    options: [
      "<ruby>白い<rt>しろい</rt></ruby>",
      "<ruby>花<rt>はな</rt></ruby>が",
      "きれいに",
      "<ruby>咲<rt>さ</rt></ruby>いている"
    ],
    correctAnswer: "きれいに",
    explanation: "Correct order: あそこに [1: 白い] [2: 花が] [3: きれいに] [4: 咲いている] があります。Star position is きれいに."
  },
  {
    section: 'grammar',
    mondai: 6,
    questionText: "<ruby>先生<rt>せんせい</rt></ruby>、この ____ ____ __★__ ____ ですか。",
    options: [
      "<ruby>漢字<rt>かんじ</rt></ruby>は",
      "どう",
      "<ruby>読<rt>よ</rt></ruby>む",
      "もの"
    ],
    correctAnswer: "<ruby>読<rt>よ</rt></ruby>む",
    explanation: "Correct order: この [1: 漢字は] [2: どう] [3: 読む] [4: の] ですか。Star position is 読む."
  },
  {
    section: 'grammar',
    mondai: 6,
    questionText: "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は ____ ____ __★__ ____ ありません。",
    options: [
      "あまり",
      "<ruby>広<rt>ひろ</rt></ruby>く",
      "<ruby>明<rt>あか</rt></ruby>るく",
      "も"
    ],
    correctAnswer: "<ruby>明<rt>あか</rt></ruby>るく",
    explanation: "Correct order: 私の部屋は [1: あまり] [2: 広く] [3: 明るく] [4: も] ありません。Star position is 明るく."
  },
  {
    section: 'grammar',
    mondai: 6,
    questionText: "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の ____ ____ __★__ ____ を<ruby>飲<rt>の</rt></ruby>みました。",
    options: [
      "<ruby>中<rt>なか</rt></ruby>に",
      "ある",
      "<ruby>冷<rt>つめ</rt></ruby>たい",
      "<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>"
    ],
    correctAnswer: "<ruby>冷<rt>つめ</rt></ruby>たい",
    explanation: "Correct order: 冷蔵庫の [1: 中に] [2: ある] [3: 冷たい] [4: 牛乳] を飲みました。Star position is 冷たい."
  },

  // --- Mondai 7: Reading Comprehension (5 Questions) ---
  {
    section: 'grammar',
    mondai: 7,
    passage: "【<ruby>サ<rt>さ</rt></ruby><ruby>ラ<rt>ら</rt></ruby>さんへの<ruby>手紙<rt>てがみ</rt></ruby>】\n<ruby>サ<rt>さ</rt></ruby><ruby>ラ<rt>ら</rt></ruby>さん、こんにちは。あしたのパーティーですが、<ruby>時間<rt>じかん</rt></ruby>が<ruby>変<rt>か</rt></ruby>わりました。<ruby>午後<rt>ごご</rt></ruby><ruby>二時<rt>にじ</rt></ruby>からではなく、<ruby>午後<rt>ごご</rt></ruby><ruby>三時<rt>さんじ</rt></ruby>からです。<ruby>駅<rt>えき</rt></ruby>の<ruby>近く<rt>ちかく</rt></ruby>の<ruby>喫茶店<rt>きっさてん</rt></ruby>で<ruby>待<rt>ま</rt></ruby>ち合わせましょう。<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってくるのを<ruby>忘<rt>わす</rt></ruby>れないでください。 - サクラ",
    questionText: "<ruby>サ<rt>さ</rt></ruby><ruby>ラ<rt>ら</rt></ruby>さんはあした、<ruby>何時<rt>なんじ</rt></ruby>にどこへ<ruby>行<rt>い</rt></ruby>かなければなりませんか。",
    options: [
      "<ruby>午後二時<rt>ごごにじ</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>の<ruby>喫茶店<rt>きっさてん</rt></ruby>",
      "<ruby>午後三時<rt>ごごさんじ</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>の<ruby>喫茶店<rt>きっさてん</rt></ruby>",
      "<ruby>午後二時<rt>ごごにじ</rt></ruby>にサクラさんの<ruby>家<rt>うち</rt></ruby>",
      "<ruby>午後三時<rt>ごごさんじ</rt></ruby>にサクラさんの<ruby>家<rt>うち</rt></ruby>"
    ],
    correctAnswer: "<ruby>午後三時<rt>ごごさんじ</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>の<ruby>喫茶店<rt>きっさてん</rt></ruby>",
    explanation: "The letter says: '午後三時からです。駅の近くの喫茶店で待ち合わせましょう。' (3 PM at the cafe near the station)."
  },
  {
    section: 'grammar',
    mondai: 7,
    passage: "【<ruby>図書館<rt>としょかん</rt></ruby>のしらせ】\n<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>開館時間<rt>かいかんじかん</rt></ruby>は、<ruby>月曜日<rt>げつようび</rt></ruby>から<ruby>金曜日<rt>きんようび</rt></ruby>までは<ruby>午前九時<rt>ごぜんくじ</rt></ruby>から<ruby>午後五時<rt>ごごごじ</rt></ruby>までです。<ruby>土曜日<rt>どようび</rt></ruby>は<ruby>午前九時<rt>ごぜんくじ</rt></ruby>から<ruby>正午<rt>しょうご</rt></ruby>（十二時）までです。<ruby>日曜日<rt>にちようび</rt></ruby>と<ruby>祝日<rt>しゅくじつ</rt></ruby>はお<ruby>休み<rt>やすみ</rt></ruby>です。",
    questionText: "この<ruby>図書館<rt>としょかん</rt></ruby>が<ruby>開<rt>あ</rt></ruby>いている<ruby>時間<rt>じかん</rt></ruby>はいつですか。",
    options: [
      "<ruby>月曜日<rt>げつようび</rt></ruby>の<ruby>午後六時<rt>ごごろくじ</rt></ruby>",
      "<ruby>土曜日<rt>どようび</rt></ruby>の<ruby>午後二時<rt>ごごにじ</rt></ruby>",
      "<ruby>金曜日<rt>きんようび</rt></ruby>の<ruby>午後四時<rt>ごごよじ</rt></ruby>",
      "<ruby>日曜日<rt>にちようび</rt></ruby>の<ruby>午前十時<rt>ごぜんじゅうじ</rt></ruby>"
    ],
    correctAnswer: "<ruby>金曜日<rt>きんようび</rt></ruby>の<ruby>午後四時<rt>ごごよじ</rt></ruby>",
    explanation: "Mon-Fri is 9 AM - 5 PM (金曜日の午後四時 is open). Sat is only until noon, and Sunday is closed."
  },
  {
    section: 'grammar',
    mondai: 7,
    passage: "<ruby>私<rt>わたし</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はキムです。<ruby>先週<rt>せんしゅう</rt></ruby><ruby>韓国<rt>かんこく</rt></ruby>から<ruby>来<rt>き</rt></ruby>ました。<ruby>毎日<rt>まいにち</rt></ruby><ruby>日本語学校<rt>にほんごがっこう</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>しています。<ruby>学校<rt>がっこう</rt></ruby>は<ruby>午前九時<rt>ごぜんくじ</rt></ruby>から<ruby>午後一時<rt>ごごいちじ</rt></ruby>までです。<ruby>午後<rt>ごご</rt></ruby>からは<ruby>喫茶店<rt>きっさてん</rt></ruby>でアルバイトをしています。<ruby>少し<rt>すこし</rt></ruby><ruby>忙<rt>いそが</rt></ruby>しいですが、<ruby>毎日<rt>まいにち</rt></ruby>とても<ruby>好<rt>す</rt></ruby>きで<ruby>楽<rt>たの</rt></ruby>しいです。",
    questionText: "キムさんは<ruby>午後<rt>ごご</rt></ruby>、何をしていますか。",
    options: [
      "<ruby>日本語学校<rt>にほんごがっこう</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>している",
      "<ruby>喫茶店<rt>きっさてん</rt></ruby>でアルバイトをしている",
      "<ruby>韓国<rt>かんこく</rt></ruby>で<ruby>旅行<rt>りょこう</rt></ruby>している",
      "<ruby>友達<rt>ともだち</rt></ruby>と<ruby>遊<rt>あそ</rt></ruby>んでいる"
    ],
    correctAnswer: "<ruby>喫茶店<rt>きっさてん</rt></ruby>でアルバイトをしている",
    explanation: "He says: '午後からは喫茶店でアルバイトをしています。' (Doing part-time work at a cafe in the afternoon)."
  },
  {
    section: 'grammar',
    mondai: 7,
    passage: "【<ruby>旅行会社<rt>りょこうがいしゃ</rt></ruby>のパンフレット】\n<ruby>京都<rt>きょうと</rt></ruby><ruby>一日<rt>いちにち</rt></ruby>バスツアー！\nツアー<ruby>代金<rt>だいきん</rt></ruby>：5,000円（お<ruby>昼<rt>ひる</rt></ruby>ご飯代を<ruby>含<rt>ふく</rt></ruby>みます）。\n<ruby>出発<rt>しゅっぱつ</rt></ruby>：<ruby>午前八時<rt>ごぜんはちじ</rt></ruby> <ruby>京都駅前<rt>きょうとえきまえ</rt></ruby>。\n※<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>も<ruby>出発<rt>しゅっぱつ</rt></ruby>します。キャンセルは<ruby>二日前<rt>ふつかまえ</rt></ruby>まで<ruby>無料<rt>むりょう</rt></ruby>です。",
    questionText: "このツアーについて<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",
    options: [
      "お<ruby>昼<rt>ひる</rt></ruby>ご飯は自分で買わなければならない",
      "<ruby>雨<rt>あめ</rt></ruby>の日はツアーが<ruby>中止<rt>ちゅうし</rt></ruby>になる",
      "<ruby>前日<rt>ぜんじつ</rt></ruby>にキャンセルするとお金がかかる",
      "<ruby>出発<rt>しゅっぱつ</rt></ruby>は京都駅で<ruby>午後八時<rt>ごごはちじ</rt></ruby>である"
    ],
    correctAnswer: "<ruby>前日<rt>ぜんじつ</rt></ruby>にキャンセルするとお金がかかる",
    explanation: "Cancelation is free until two days before (二日前まで無料). Canceling the day before (前日) incurs fees."
  },
  {
    section: 'grammar',
    mondai: 7,
    passage: "<ruby>木村<rt>きむら</rt></ruby>さんは、<ruby>毎週水曜日<rt>まいしゅうすいようび</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>にテニススクールに<ruby>通<rt>かよ</rt></ruby>っています。<ruby>一回二時間<rt>いっかいにじかん</rt></ruby>です。レッスンは<ruby>七時<rt>しちじ</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>まります。<ruby>木村<rt>きむら</rt></ruby>さんは<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>五時<rt>ごじ</rt></ruby>に<ruby>終<rt>お</rt></ruby>えてテニススクールへ向かいます。",
    questionText: "テニスレッスンが<ruby>終<rt>お</rt></ruby>わる<ruby>時間<rt>じかん</rt></ruby>は何時ですか。",
    options: [
      "<ruby>午後五時<rt>ごごごじ</rt></ruby>",
      "<ruby>午後七時<rt>ごごしちじ</rt></ruby>",
      "<ruby>午後九時<rt>ごごくじ</rt></ruby>",
      "<ruby>午後八時<rt>ごごはちじ</rt></ruby>"
    ],
    correctAnswer: "<ruby>午後九時<rt>ごごくじ</rt></ruby>",
    explanation: "Starts at 7 PM (七時) and lasts for 2 hours (二時間). 7 + 2 = 9 PM (午後九時)."
  },

  // ==========================================
  // SECTION 3: LISTENING (Mondai 8 to 11) - 24 Questions
  // ==========================================

  // --- Mondai 8: Task-Based Focused Comprehension (6 Questions) ---
  {
    section: 'listening',
    mondai: 8,
    audioScript: "日本語学校で、男の学生と女の先生が話しています。男の学生はこれから何をしますか？\n男：先生、今日の作文を書きました。見てください。\n女：はい、いいですね。でも、漢字の間違いが二つありますよ。ここを直してください。それから、名前も忘れないで書いてくださいね。\n男：わかりました。すぐに直して出します。",
    questionText: "<ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>はこれから何をしますか？",
    options: [
      "<ruby>作文<rt>さくぶん</rt></ruby>の<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>直<rt>なお</rt></ruby>して、<ruby>名前<rt>なまえ</rt></ruby>を書く",
      "<ruby>新<rt>あたら</rt></ruby>しい<ruby>作文<rt>さくぶん</rt></ruby>を書く",
      "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>名前<rt>なまえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く",
      "<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>家<rt>うち</rt></ruby>に持って帰る"
    ],
    correctAnswer: "<ruby>作文<rt>さくぶん</rt></ruby>の<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>直<rt>なお</rt></ruby>して、<ruby>名前<rt>なまえ</rt></ruby>を書く",
    explanation: "The teacher tells him to correct two kanji errors and write his name. He replies: 'すぐに直して出します。'"
  },
  {
    section: 'listening',
    mondai: 8,
    audioScript: "店で、男の人と女の人が話しています。男の人はこれから何を買いに行きますか？\n男：今日のカレーの野菜はありますか？\n女：にんじんとじゃがいもはありますが、たまねぎがありません。それから、牛乳も足りないです。\n男：わかりました。じゃあ、たまねぎと牛乳を買いに行ってきます。",
    questionText: "<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はこれから何を<ruby>買<rt>か</rt></ruby>いますか？",
    options: [
      "たまねぎと<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>",
      "にんじんとじゃがいも",
      "カレーの<ruby>肉<rt>にく</rt></ruby>",
      "にんじんと<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>"
    ],
    correctAnswer: "たまねぎと<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>",
    explanation: "They have carrots and potatoes, but lack onions (たまねぎ) and milk (牛乳). The man leaves to buy these two items."
  },
  {
    section: 'listening',
    mondai: 8,
    audioScript: "教室で、先生が学生に話しています。学生は明日、何時に学校に来なければなりませんか？\n先生：みなさん、明日は遠足です。いつもは九時に学校が始まりますが、明日はバスが出発しますから、八時半には教室に集まってください。遅れないでくださいね。",
    questionText: "<ruby>学生<rt>がくせい</rt></ruby>は明日、何時に<ruby>学校<rt>がっこう</rt></ruby>に<ruby>来<rt>こ</rt></ruby>なければなりませんか？",
    options: [
      "<ruby>八時<rt>はちじ</rt></ruby>",
      "<ruby>八時半<rt>はちじはん</rt></ruby>",
      "<ruby>九時<rt>くじ</rt></ruby>",
      "<ruby>九時半<rt>くじはん</rt></ruby>"
    ],
    correctAnswer: "<ruby>八時半<rt>はちじはん</rt></ruby>",
    explanation: "The teacher states: '明日はバスが出発しますから、八時半には教室に集まってください。'"
  },
  {
    section: 'listening',
    mondai: 8,
    audioScript: "駅で、女の人と男の人が話しています。女の人は何番線に乗りますか？\n女：すみません、新宿に行きたいんですが、何番線の電車ですか？\n男：新宿ですね。三番線と四番線のどちらからでも行けますが、三番線のほうが早く来ますよ。\n女：わかりました。三番線に行きます。ありがとうございます。",
    questionText: "<ruby>女<rt>おんな</rt></ruby>の人は何番線に乗りますか？",
    options: [
      "<ruby>一番線<rt>いちばんせん</rt></ruby>",
      "<ruby>二番線<rt>にばんせん</rt></ruby>",
      "<ruby>三番線<rt>さんばんせん</rt></ruby>",
      "<ruby>四番線<rt>よんばんせん</rt></ruby>"
    ],
    correctAnswer: "<ruby>三番線<rt>さんばんせん</rt></ruby>",
    explanation: "Both 3 and 4 go there, but 3 comes faster and the woman replies: '三番線に行きます。'"
  },
  {
    section: 'listening',
    mondai: 8,
    audioScript: "会社で、女の人と男の人が話しています。男の人はこれから何をしますか？\n女：山田さん、会議の準備はできましたか？\n男：はい、資料はコピーしました。机の上に置いてあります。\n女：ありがとうございます。じゃあ、会議室 of エアコンをつけておいてください。\n男：わかりました。すぐに行きます。",
    questionText: "<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はこれから何をしますか？",
    options: [
      "<ruby>資料<rt>しりょう</rt></ruby>をコピーする",
      "<ruby>会議室<rt>かいぎしつ</rt></ruby>のエアコンをつける",
      "<ruby>資料<rt>しりょう</rt></ruby>を<ruby>配<rt>くば</rt></ruby>る",
      "パソコンを<ruby>準備<rt>じゅんび</rt></ruby>する"
    ],
    correctAnswer: "<ruby>会議室<rt>かいぎしつ</rt></ruby>のエアコンをつける",
    explanation: "The copy is done. The woman asks him to turn on the meeting room air conditioner (エアコンをつけておいてください)."
  },
  {
    section: 'listening',
    mondai: 8,
    audioScript: "家で、お母さんと男の子が話しています。男の子はこれからどこに行きますか？\n母：たかし、お使いに行ってくれる？パンを買ってきて。\n男：いいよ。本屋にも行っていい？\n母：いいわよ。パン屋さんに行ってから、本屋ね。\n男：わーい、いってきます！",
    questionText: "<ruby>男<rt>おとこ</rt></ruby>の子はこれからまずどこに行きますか？",
    options: [
      "パン屋さん",
      "本屋さん",
      "<ruby>学校<rt>がっこう</rt></ruby>",
      "<ruby>公園<rt>こうえん</rt></ruby>"
    ],
    correctAnswer: "パン屋さん",
    explanation: "The mother says: 'パン屋さんに行ってから、本屋ね' (Go to the bakery first, then the bookstore)."
  },

  // --- Mondai 9: Point-Based Focused Comprehension (6 Questions) ---
  {
    section: 'listening',
    mondai: 9,
    audioScript: "学校で、男 of 学生と女 of 学生が話しています。男 of 学生はどうして昨日、学校を休みましたか？\n女：田中さん、昨日はどうして休んだの？風邪？\n男：ううん、風邪じゃないんだ。昨日、お腹が痛くなって病院に行ったんだよ。\n女：えっ、大丈夫？\n男：うん、薬をもらって飲んだから、もうすっかり良くなったよ。",
    questionText: "<ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>はどうして昨日、<ruby>学校<rt>がっこう</rt></ruby>を休みましたか？",
    options: [
      "<ruby>風邪<rt>かぜ</rt></ruby>をひいたから",
      "お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなったから",
      "<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>かったから",
      "<ruby>用事<rt>ようじ</rt></ruby>があったから"
    ],
    correctAnswer: "お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなったから",
    explanation: "The student directly notes: 'お腹が痛くなって病院に行ったんだよ。'"
  },
  {
    section: 'listening',
    mondai: 9,
    audioScript: "駅で、女の人と男の人が話しています。二人は何時に会いますか？\n女：あしたの映画、何時にする？一時からと三時からのがあるよ。\n男：お昼ご飯を食べてから行きたいね。十二時に京都駅で会って、ご飯を食べない？\n女：いいね。そうしましょう。じゃあ、十二時にね。",
    questionText: "<ruby>二<rt>ふた</rt></ruby>りはお昼ご飯を食べてから会います。何時に会いますか？",
    options: [
      "<ruby>十二時<rt>じゅうにじ</rt></ruby>",
      "<ruby>一時<rt>いちじ</rt></ruby>",
      "<ruby>二時<rt>にじ</rt></ruby>",
      "<ruby>三時<rt>さんじ</rt></ruby>"
    ],
    correctAnswer: "<ruby>十二時<rt>じゅうにじ</rt></ruby>",
    explanation: "They agree to meet at 12 PM (十二時) to eat lunch before the movie starts."
  },
  {
    section: 'listening',
    mondai: 9,
    audioScript: "学校で、男の学生と女の学生が話しています。女の学生は週末、何をしましたか？\n男：週末はどこかに行きましたか？\n女：土曜日はどこにも行かないで、家で部屋の掃除をしました。日曜日は友達と一緒に海に行って泳ぎました。楽しかったです。\n男：そうですか。いいですね。",
    questionText: "<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は日曜日に何をしましたか？",
    options: [
      "<ruby>部屋<rt>へや</rt></ruby>の<ruby>掃除<rt>そうじ</rt></ruby>をした",
      "<ruby>海<rt>うみ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>いだ",
      "<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>した",
      "<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>の</rt></ruby>った"
    ],
    correctAnswer: "<ruby>海<rt>うみ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>いだ",
    explanation: "She reports: '日曜日は友達と一緒に海に行って泳ぎました。'"
  },
  {
    section: 'listening',
    mondai: 9,
    audioScript: "喫茶店で、女の人と男の人が話しています。男の人はコーヒーに何を入れますか？\n女：コーヒー、お待たせしました。砂糖とミルクは使いますか？\n男：私はいつもミルクだけ入れます。砂糖は入れません。\n女：はい、どうぞ。",
    questionText: "<ruby>男<rt>おとこ</rt></ruby>の人はコーヒーに何を入れますか？",
    options: [
      "<ruby>砂糖<rt>さとう</rt></ruby>とミルク両方",
      "ミルクだけ",
      "<ruby>砂糖<rt>さとう</rt></ruby>だけ",
      "何も入れない"
    ],
    correctAnswer: "ミルクだけ",
    explanation: "The man specifies: '私はいつもミルクだけ入れます。砂糖は入れません。'"
  },
  {
    section: 'listening',
    mondai: 9,
    audioScript: "学校で、先生が話しています。学生はテストのとき、何を使ってはいけませんか？\n先生：はい、これからはテストを始めます。机の上には鉛筆と消しゴムだけ置いてください。辞書やノートはカバンの中にしまってください。スマホの電源も切ってくださいね。",
    questionText: "<ruby>学生<rt>がくせい</rt></ruby>はテストのとき、何を使ってはいけませんか？",
    options: [
      "<ruby>鉛筆<rt>えんぴつ</rt></ruby>",
      "<ruby>消<rt>け</rt></ruby>しゴム",
      "<ruby>辞書<rt>じしょ</rt></ruby>",
      "カバン"
    ],
    correctAnswer: "<ruby>辞書<rt>じしょ</rt></ruby>",
    explanation: "The teacher instructs to put away dictionaries and notebooks (辞書やノートはカバンの中にしまってください)."
  },
  {
    section: 'listening',
    mondai: 9,
    audioScript: "家で、女の人と男の人が話しています。二人は晩ご飯に何を食べますか？\n女：今日の晩ご飯、何がいい？カレーとパスタ、どっちが食べたい？\n男：昨日の夜にカレーを食べたから、パスタがいいな。\n女：わかった。じゃあ、トマトパスタにするね。",
    questionText: "<ruby>二<rt>ふた</rt></ruby>りは晩ご飯に何を食べますか？",
    options: [
      "カレー",
      "パスタ",
      "ピザ",
      "お<ruby>寿司<rt>すし</rt></ruby>"
    ],
    correctAnswer: "パスタ",
    explanation: "The man asks for pasta since he had curry yesterday, and the woman agrees to make tomato pasta."
  },

  // --- Mondai 10: Verbal Expressions (6 Questions) ---
  {
    section: 'listening',
    mondai: 10,
    audioScript: "学校で、先生に本を返します。何と言いますか？\n1：先生、本を返します。\n2：先生、ありがとうございました。\n3：先生、失礼します。",
    questionText: "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を返します。何と言いますか？",
    options: [
      "<ruby>先生<rt>せんせい</rt></ruby>、<ruby>本<rt>ほん</rt></ruby>を返します。",
      "<ruby>先生<rt>せんせい</rt></ruby>、ありがとうございました。",
      "<ruby>先生<rt>せんせい</rt></ruby>、失礼します。"
    ],
    correctAnswer: "<ruby>先生<rt>せんせい</rt></ruby>、ありがとうございました。",
    explanation: "Returning something you borrowed requires thanking the person."
  },
  {
    section: 'listening',
    mondai: 10,
    audioScript: "友達の家に行きました。玄関で何と言いますか？\n1：いらっしゃいませ。\n2：お邪魔します。\n3：失礼しました。",
    questionText: "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>家<rt>うち</rt></ruby>に<ruby>行<rt>い</rt></ruby>きました。何と言いますか？",
    options: [
      "いらっしゃいませ。",
      "お<ruby>邪魔<rt>じゃま</rt></ruby>します。",
      "失礼しました。"
    ],
    correctAnswer: "お<ruby>邪魔<rt>じゃま</rt></ruby>します。",
    explanation: "お邪魔します (Ojamashimasu) is the polite greeting when entering someone's home."
  },
  {
    section: 'listening',
    mondai: 10,
    audioScript: "ご飯を食べ終わりました。何と言いますか？\n1：いただきます。\n2：ごちそうさまでした。\n3：美味しかったです。",
    questionText: "ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べ終わりました。何と言いますか？",
    options: [
      "いただきます。",
      "ごちそうさまでした。",
      "<ruby>美味<rt>おい</rt></ruby>しかったです。"
    ],
    correctAnswer: "ごちそうさまでした。",
    explanation: "ごちそうさまでした (Gochisousamadeshita) is said after meals."
  },
  {
    section: 'listening',
    mondai: 10,
    audioScript: "道を通りたいですが、人がいて通れません。何と言いますか？\n1：ごめんなさい。\n2：すみません。\n3：失礼します。",
    questionText: "<ruby>道<rt>みち</rt></ruby>を<ruby>通<rt>とお</rt></ruby>りたいですが、人がいて通れません。何と言いますか？",
    options: [
      "ごめんなさい。",
      "すみません。",
      "失礼します。"
    ],
    correctAnswer: "すみません。",
    explanation: "すみません (Sumimasen) means 'Excuse me' to request passing through."
  },
  {
    section: 'listening',
    mondai: 10,
    audioScript: "友達のペンを借りたいです。何と言いますか？\n1：ペン、貸してくれない？\n2：ペン、借りてくれない？\n3：ペン、使ってもいい？",
    questionText: "<ruby>友達<rt>ともだち</rt></ruby>のペンを借りたいです。何と言いますか？",
    options: [
      "ペン、<ruby>貸<rt>か</rt></ruby>してくれない？",
      "ペン、<ruby>借<rt>か</rt></ruby>りてくれない？",
      "ペン、<ruby>使<rt>つか</rt></ruby>ってもいい？"
    ],
    correctAnswer: "ペン、<ruby>貸<rt>か</rt></ruby>してくれない？",
    explanation: "貸す (かす) - lend. Asking 'Can you lend me a pen?' fits the peer relationship."
  },
  {
    section: 'listening',
    mondai: 10,
    audioScript: "夜、寝るときに家族に何と言いますか？\n1：おやすみなさい。\n2：さようなら。\n3：お疲れ様でした。",
    questionText: "<ruby>夜<rt>よる</rt></ruby>、寝るときに何と言いますか？",
    options: [
      "おやすみなさい。",
      "さようなら。",
      "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>でした。"
    ],
    correctAnswer: "おやすみなさい。",
    explanation: "おやすみなさい (Oyasuminasai) - Good night."
  },

  // --- Mondai 11: Quick Response (6 Questions) ---
  {
    section: 'listening',
    mondai: 11,
    audioScript: "お先に失礼します。\n1：お疲れ様でした。\n2：いらっしゃいませ。\n3：ごちそうさまでした。",
    questionText: "<ruby>相手<rt>あいて</rt></ruby>：「お先に失礼します。」",
    options: [
      "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>でした。",
      "いらっしゃいませ。",
      "ごちそうさまでした。"
    ],
    correctAnswer: "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>でした。",
    explanation: "When someone says 'I am leaving first', reply with 'Good work / Thank you' (お疲れ様でした)."
  },
  {
    section: 'listening',
    mondai: 11,
    audioScript: "あしたのパーティー、行く？\n1：うん、行くよ。\n2：いいえ、行きませんでした。\n3：はい、行きましょう。",
    questionText: "<ruby>相手<rt>あいて</rt></ruby>：「あしたのパーティー、行く？」",
    options: [
      "うん、行くよ。",
      "いいえ、行きませんでした。",
      "はい、行きましょう。"
    ],
    correctAnswer: "うん、行くよ",
    correctAnswer: "うん、行くよ。",
    explanation: "Casual question 'Are you going?' gets matched with casual affirmation 'Yeah, I'm going' (うん, 行くよ)."
  },
  {
    section: 'listening',
    mondai: 11,
    audioScript: "この辞書、借りてもいいですか？\n1：ええ、どうぞ。\n2：はい、借ります。\n3：いいえ、いいですね。",
    questionText: "<ruby>相手<rt>あいて</rt></ruby>：「この<ruby>辞書<rt>じしょ</rt></ruby>、借りてもいいですか？」",
    options: [
      "ええ、どうぞ。",
      "はい、借ります。",
      "いいえ、いいですね。"
    ],
    correctAnswer: "ええ、どうぞ。",
    explanation: "To grant permission, say 'Yes, please' (ええ、どうぞ)."
  },
  {
    section: 'listening',
    mondai: 11,
    audioScript: "日本語がお上手ですね。\n1：いいえ、まだまだです。\n2：はい、上手です。\n3：どういたしまして。",
    questionText: "<ruby>相手<rt>あいて</rt></ruby>：「日本語がお上手ですね。」",
    options: [
      "いいえ、まだまだです。",
      "はい、上手です。",
      "どういたしまして。"
    ],
    correctAnswer: "いいえ、まだまだです。",
    explanation: "Humility response to compliments: 'No, I still have a long way to go' (いいえ、まだまだです)."
  },
  {
    section: 'listening',
    mondai: 11,
    audioScript: "ごめんね、待たせて。\n1：ううん、全然大丈夫だよ。\n2：はい、待ちました。\n3：どういたしまして。",
    questionText: "<ruby>相手<rt>あいて</rt></ruby>：「ごめんね、待たせて。」",
    options: [
      "ううん、全然大丈夫だよ。",
      "はい、待ちました。",
      "どういたしまして。"
    ],
    correctAnswer: "ううん、全然大丈夫だよ。",
    explanation: "When a friend apologizes for keeping you waiting, reply 'No worries at all' (ううん、全然大丈夫だよ)."
  },
  {
    section: 'listening',
    mondai: 11,
    audioScript: "お誕生日おめでとうございます！\n1：ありがとうございます！\n2：おめでとうございます！\n3：どういたしまして！",
    questionText: "<ruby>相手<rt>あいて</rt></ruby>：「お誕生日おめでとうございます！」",
    options: [
      "ありがとうございます！",
      "おめでとうございます！",
      "どういたしまして！"
    ],
    correctAnswer: "ありがとうございます！",
    explanation: "Acknowledge birthday wishes with 'Thank you very much'."
  }
];
