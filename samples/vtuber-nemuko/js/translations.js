// Translation data for Nemuko's site
const translations = {
    ja: {
        // Header & Navigation
        nav: {
            schedule: '配信情報',
            profile: 'プロフィール'
        },
        
        // Hero Section
        hero: {
            name: '百実ねむこ',
            subtitle: 'ドーモ。\n特殊な訓練を受けたモモンガです。',
            description: '平日17時からTwitchにて定時配信中！\n原神メイン、たまに崩壊:スターレイルとか他ゲームをしながら雑談配信をしています。',
            watchStream: '配信を見る',
            twitterFollow: 'Xをフォロー'
        },
        
        // Schedule Section
        schedule: {
            title: '平日17時から配信中！',
            streamTime: '月曜日〜金曜日 17:00 START',
            platform: '配信 見に来てね！',
            countdownLabel: '次の配信まで',
            hours: '時間',
            minutes: '分',
            seconds: '秒',
            streamStarted: '配信開始！🎉'
        },
        
        // Profile Section
        profile: {
            title: '飼育展示情報',
            breedingInfo: '飼育個体情報',
            speciesTitle: 'エゾモモンガ（特殊個体）',
            name: '愛称：',
            nameValue: 'ねむこ',
            scientificName: '学名：',
            scientificNameValue: 'Pteromys volans orii specialus',
            classification: '分類：',
            classificationValue: '哺乳綱・齧歯目・リス科・モモンガ亜科',
            habitat: '生息地：',
            habitatValue: '主にTwitch配信環境',
            height: '体長：',
            heightValue: '約15cm（尻尾含まず）',
            activeTime: '活動時間：',
            activeTimeValue: '平日17:00～（夜行性）',
            favoriteFood: '主食：',
            favoriteFoodValue: 'お菓子・甘いもの全般',
            training: '特技：',
            trainingValue: 'ゲーム実況・雑談・滑空',
            careTitle: '飼育員からのお願い',
            cautionText: '特殊な訓練により言語を理解し、ゲームをプレイできる珍しい個体です。\n配信中はやさしくコメントしてあげてください。\nどんぐりの与えすぎにご注意ください。'
        },
        
        // Acorn Game
        game: {
            acornCounter: 'どんぐり: {{count}}/{{total}} | ゴールデン: {{golden}}/{{goldenTotal}}',
            completionTitle: '🎉 おめでとう！ 🎉',
            completionMessage: '全てのどんぐりを集めました！<br>ねむこがとても喜んでいます♪',
            goldenCompletionMessage: '全てのどんぐりとゴールデンどんぐりを集めました！<br>ねむこが特別に喜んでいます♪✨',
            closeButton: '閉じる',
            goldenAcornAppeared: '✨ ゴールデンどんぐりが現れた！ ✨<br><small>ページのどこかに隠れているよ！</small>',
            rewards: {
                firstGolden: '初めてのゴールデンどんぐり！',
                halfGolden: 'ゴールデンどんぐり5個達成！',
                allGolden: '完全制覇！すべてのゴールデンどんぐりをゲット！',
                allNormal: 'すべてのどんぐりを集めました！'
            }
        },
        
        // Character Chat Messages
        chat: {
            messages: [
                'ぼくの名前はねむこだよ！',
                '{food}たべたい',
                'ねむくなってきたぁ…',
                'ゲームしよ～',
                '今日も17時から配信だよ！',
                'どんぐりあつめた？',
                'モモンガは夜行性なんだ',
                '原神たのしい！',
                'みんな元気？',
                'ふわふわ～'
            ],
            foods: [
                'チョコレート', 'ケーキ', 'プリン', 'アイスクリーム', 'どんぐり',
                'クッキー', 'ドーナツ', 'パンケーキ', 'マカロン', 'シュークリーム',
                'たいやき', 'だんご', 'もち', 'せんべい', 'ポテトチップス',
                'ラーメン', 'カレー', 'すし', 'ピザ', 'ハンバーガー',
                'おにぎり', 'うどん', 'そば', 'やきとり', 'からあげ',
                'メロンパン', 'あんぱん', 'カステラ', 'ようかん', 'まんじゅう'
            ]
        },
        
        // Twitter Section
        twitter: {
            title: '最新情報'
        },
        
        // Footer
        footer: {
            twitter: 'X'
        }
    },
    
    en: {
        // Header & Navigation
        nav: {
            schedule: 'Stream Info',
            profile: 'Profile'
        },
        
        // Hero Section
        hero: {
            name: 'Momimi Nemuko',
            subtitle: 'Hello.\nI\'m a specially trained flying squirrel.',
            description: 'Streaming on Twitch weekdays at 5PM JST!\nMainly playing Genshin Impact, sometimes Honkai: Star Rail and other games while chatting.',
            watchStream: 'Watch Stream',
            twitterFollow: 'Follow on X'
        },
        
        // Schedule Section
        schedule: {
            title: 'Streaming weekdays at 5PM!',
            streamTime: 'Monday - Friday 5:00 PM START',
            platform: 'Stream - Come watch!', 
            countdownLabel: 'Next stream in',
            hours: 'h',
            minutes: 'm',
            seconds: 's',
            streamStarted: 'Stream Started!🎉'
        },
        
        // Profile Section
        profile: {
            title: 'Exhibition Information',
            breedingInfo: 'Individual Information',
            speciesTitle: 'Ezo Flying Squirrel (Special Individual)',
            name: 'Nickname:',
            nameValue: 'Nemuko',
            scientificName: 'Scientific Name:',
            scientificNameValue: 'Pteromys volans orii specialus',
            classification: 'Classification:',
            classificationValue: 'Mammalia, Rodentia, Sciuridae, Pteromyinae',
            habitat: 'Habitat:',
            habitatValue: 'Mainly Twitch streaming environment',
            height: 'Length:',
            heightValue: 'Approx. 15cm (excluding tail)',
            activeTime: 'Active Time:',
            activeTimeValue: 'Weekdays from 17:00 (Nocturnal)',
            favoriteFood: 'Main Diet:',
            favoriteFoodValue: 'Sweets and treats in general',
            training: 'Special Skills:',
            trainingValue: 'Game streaming, chatting, gliding',
            careTitle: 'Request from Caretakers',
            cautionText: 'A rare individual that can understand language and play games through special training.\nPlease be kind when commenting during streams.\nPlease be careful not to give too many acorns.'
        },
        
        // Acorn Game
        game: {
            acornCounter: 'Acorns: {{count}}/{{total}} | Golden: {{golden}}/{{goldenTotal}}',
            completionTitle: '🎉 Congratulations! 🎉',
            completionMessage: 'You collected all the acorns!<br>Nemuko is very happy♪',
            goldenCompletionMessage: 'You collected all acorns and golden acorns!<br>Nemuko is especially delighted♪✨',
            closeButton: 'Close',
            goldenAcornAppeared: '✨ Golden acorns appeared! ✨<br><small>They\'re hidden somewhere on the page!</small>',
            rewards: {
                firstGolden: 'Your first golden acorn!',
                halfGolden: 'Achieved 5 golden acorns!',
                allGolden: 'Complete victory! Got all golden acorns!',
                allNormal: 'Collected all acorns!'
            }
        },
        
        // Character Chat Messages
        chat: {
            messages: [
                'My name is Nemuko!',
                'I want to eat {food}',
                'Getting sleepy...',
                'Let\'s play games~',
                'Streaming today at 5PM!',
                'Did you collect acorns?',
                'Flying squirrels are nocturnal',
                'Genshin is fun!',
                'How is everyone?',
                'So fluffy~'
            ],
            foods: [
                'chocolate', 'cake', 'pudding', 'ice cream', 'acorns',
                'cookies', 'donuts', 'pancakes', 'macarons', 'cream puffs',
                'taiyaki', 'dango', 'mochi', 'rice crackers', 'potato chips',
                'ramen', 'curry', 'sushi', 'pizza', 'hamburger',
                'rice balls', 'udon', 'soba', 'yakitori', 'fried chicken',
                'melon bread', 'anpan', 'castella', 'yokan', 'manju'
            ]
        },
        
        // Twitter Section
        twitter: {
            title: 'Latest Updates'
        },
        
        // Footer
        footer: {
            twitter: 'X'
        }
    },
    
    zh: {
        // Header & Navigation
        nav: {
            schedule: '直播信息',
            profile: '个人档案'
        },
        
        // Hero Section
        hero: {
            name: '百实眠子',
            subtitle: '你好。\n我是接受过特殊训练的飞鼠。',
            description: '平日17点在Twitch定时直播！\n主要玩原神，偶尔玩崩坏：星穹铁道和其他游戏的闲聊直播。',
            watchStream: '观看直播',
            twitterFollow: '关注X'
        },
        
        // Schedule Section
        schedule: {
            title: '平日17点开始直播！',
            streamTime: '周一至周五 17:00 START',
            platform: '直播 快来看看吧！',
            countdownLabel: '距离下次直播',
            hours: '时',
            minutes: '分',
            seconds: '秒',
            streamStarted: '直播开始！🎉'
        },
        
        // Profile Section
        profile: {
            title: '饲养展示信息',
            breedingInfo: '饲养个体信息',
            speciesTitle: '日本飞鼠（特殊个体）',
            name: '昵称：',
            nameValue: '眠子',
            scientificName: '学名：',
            scientificNameValue: 'Pteromys volans orii specialus',
            classification: '分类：',
            classificationValue: '哺乳纲・啮齿目・松鼠科・飞鼠亚科',
            habitat: '生息地：',
            habitatValue: '主要在Twitch直播环境',
            height: '体长：',
            heightValue: '约15厘米（不含尾巴）',
            activeTime: '活动时间：',
            activeTimeValue: '平日17:00～（夜行性）',
            favoriteFood: '主食：',
            favoriteFoodValue: '零食・甜食全般',
            training: '特技：',
            trainingValue: '游戏实况・闲聊・滑翔',
            careTitle: '饲养员的请求',
            cautionText: '通过特殊训练能够理解语言并游玩游戏的珍稀个体。\\n直播中请温柔地留言。\\n请注意不要给予过多橡实。'
        },
        
        // Acorn Game
        game: {
            acornCounter: '橡实: {{count}}/{{total}} | 黄金: {{golden}}/{{goldenTotal}}',
            completionTitle: '🎉 恭喜！ 🎉',
            completionMessage: '收集了所有橡实！<br>眠子非常开心♪',
            goldenCompletionMessage: '收集了所有橡实和黄金橡实！<br>眠子特别高兴♪✨',
            closeButton: '关闭',
            goldenAcornAppeared: '✨ 黄金橡实出现了！ ✨<br><small>它们藏在页面的某处！</small>',
            rewards: {
                firstGolden: '第一个黄金橡实！',
                halfGolden: '达成5个黄金橡实！',
                allGolden: '完全制霸！获得所有黄金橡实！',
                allNormal: '收集了所有橡实！'
            }
        },
        
        // Character Chat Messages
        chat: {
            messages: [
                '我的名字是眠子！',
                '想吃{food}',
                '开始想睡了...',
                '来玩游戏吧～',
                '今天17点也有直播哦！',
                '收集橡实了吗？',
                '飞鼠是夜行性动物',
                '原神很好玩！',
                '大家都好吗？',
                '软绵绵～'
            ],
            foods: [
                '巧克力', '蛋糕', '布丁', '冰淇淋', '橡实',
                '饼干', '甜甜圈', '松饼', '马卡龙', '泡芙',
                '鲷鱼烧', '团子', '麻糬', '仙贝', '洋芋片',
                '拉面', '咖喱', '寿司', '披萨', '汉堡',
                '饭团', '乌龙面', '荞麦面', '烤鸡串', '炸鸡',
                '哈密瓜面包', '红豆面包', '长崎蛋糕', '羊羹', '馒头'
            ]
        },
        
        // Twitter Section
        twitter: {
            title: '最新消息'
        },
        
        // Footer
        footer: {
            twitter: 'X'
        }
    },
    
    ko: {
        // Header & Navigation
        nav: {
            schedule: '방송 정보',
            profile: '프로필'
        },
        
        // Hero Section
        hero: {
            name: '모미미 네무코',
            subtitle: '안녕하세요.\n특수 훈련을 받은 날다람쥐입니다.',
            description: '평일 17시 Twitch에서 정기 방송 중!\n주로 원신을 플레이하고, 가끔 붕괴: 스타레일이나 다른 게임을 하면서 잡담 방송을 합니다.',
            watchStream: '방송 보기',
            twitterFollow: 'X 팔로우'
        },
        
        // Schedule Section
        schedule: {
            title: '평일 17시부터 방송 중!',
            streamTime: '월요일~금요일 17:00 START',
            platform: '방송 보러 오세요!',
            countdownLabel: '다음 방송까지',
            hours: '시간',
            minutes: '분',
            seconds: '초',
            streamStarted: '방송 시작!🎉'
        },
        
        // Profile Section
        profile: {
            title: '사육 전시 정보',
            breedingInfo: '사육 개체 정보',
            speciesTitle: '일본 날다람쥐 (특수 개체)',
            name: '애칭:',
            nameValue: '네무코',
            scientificName: '학명:',
            scientificNameValue: 'Pteromys volans orii specialus',
            classification: '분류:',
            classificationValue: '포유강・설치목・다람쥐과・날다람쥐아과',
            habitat: '서식지:',
            habitatValue: '주로 Twitch 방송 환경',
            height: '체장:',
            heightValue: '약 15cm (꼬리 제외)',
            activeTime: '활동 시간:',
            activeTimeValue: '평일 17:00~ (야행성)',
            favoriteFood: '주식:',
            favoriteFoodValue: '과자・단 것 전반',
            training: '특기:',
            trainingValue: '게임 실황・잡담・활공',
            careTitle: '사육사의 부탁',
            cautionText: '특수 훈련으로 언어를 이해하고 게임을 플레이할 수 있는 희귀한 개체입니다.\\n방송 중에는 친절하게 댓글을 달아주세요.\\n도토리를 너무 많이 주지 않도록 주의해주세요.'
        },
        
        // Acorn Game
        game: {
            acornCounter: '도토리: {{count}}/{{total}} | 골든: {{golden}}/{{goldenTotal}}',
            completionTitle: '🎉 축하합니다! 🎉',
            completionMessage: '모든 도토리를 모았습니다!<br>네무코가 매우 기뻐합니다♪',
            goldenCompletionMessage: '모든 도토리와 골든 도토리를 모았습니다!<br>네무코가 특별히 기뻐합니다♪✨',
            closeButton: '닫기',
            goldenAcornAppeared: '✨ 골든 도토리가 나타났다! ✨<br><small>페이지 어딘가에 숨어있어요!</small>',
            rewards: {
                firstGolden: '첫 번째 골든 도토리!',
                halfGolden: '골든 도토리 5개 달성!',
                allGolden: '완전 제패! 모든 골든 도토리 획득!',
                allNormal: '모든 도토리를 모았습니다!'
            }
        },
        
        // Character Chat Messages
        chat: {
            messages: [
                '내 이름은 네무코야!',
                '{food} 먹고 싶어',
                '졸려지기 시작했어...',
                '게임하자~',
                '오늘도 17시에 방송이야!',
                '도토리 모았어?',
                '날다람쥐는 야행성이야',
                '원신 재밌어!',
                '모두 잘 지내?',
                '푹신푹신~'
            ],
            foods: [
                '초콜릿', '케이크', '푸딩', '아이스크림', '도토리',
                '쿠키', '도넛', '팬케이크', '마카롱', '슈크림',
                '타이야키', '당고', '떡', '센베이', '감자칩',
                '라멘', '카레', '초밥', '피자', '햄버거',
                '주먹밥', '우동', '소바', '야키토리', '가라아게',
                '멜론빵', '앙빵', '카스텔라', '양갱', '만주'
            ]
        },
        
        // Twitter Section
        twitter: {
            title: '최신 정보'
        },
        
        // Footer
        footer: {
            twitter: 'X'
        }
    },
    
    id: {
        // Header & Navigation
        nav: {
            schedule: 'Info Siaran',
            profile: 'Profil'
        },
        
        // Hero Section
        hero: {
            name: 'Momimi Nemuko',
            subtitle: 'Halo.\nSaya adalah tupai terbang yang terlatih khusus.',
            description: 'Siaran rutin setiap hari kerja jam 17:00 di Twitch!\nTerutama main Genshin Impact, kadang Honkai: Star Rail dan game lain sambil ngobrol.',
            watchStream: 'Tonton Siaran',
            twitterFollow: 'Ikuti X'
        },
        
        // Schedule Section
        schedule: {
            title: 'Siaran hari kerja jam 17:00!',
            streamTime: 'Senin - Jumat 17:00 MULAI',
            platform: 'Siaran - Datang dan tonton!',
            countdownLabel: 'Siaran berikutnya',
            hours: 'jam',
            minutes: 'menit',
            seconds: 'detik',
            streamStarted: 'Siaran Dimulai!🎉'
        },
        
        // Profile Section
        profile: {
            title: 'Informasi Pameran Pemeliharaan',
            breedingInfo: 'Informasi Individu',
            speciesTitle: 'Tupai Terbang Jepang (Individu Khusus)',
            name: 'Panggilan:',
            nameValue: 'Nemuko',
            scientificName: 'Nama Ilmiah:',
            scientificNameValue: 'Pteromys volans orii specialus',
            classification: 'Klasifikasi:',
            classificationValue: 'Mammalia, Rodentia, Sciuridae, Pteromyinae',
            habitat: 'Habitat:',
            habitatValue: 'Terutama lingkungan siaran Twitch',
            height: 'Panjang Badan:',
            heightValue: 'Sekitar 15cm (tidak termasuk ekor)',
            activeTime: 'Waktu Aktif:',
            activeTimeValue: 'Hari kerja dari 17:00 (Nokturnal)',
            favoriteFood: 'Makanan Utama:',
            favoriteFoodValue: 'Camilan・makanan manis secara umum',
            training: 'Keahlian Khusus:',
            trainingValue: 'Game streaming・ngobrol・melayang',
            careTitle: 'Permintaan dari Penjaga',
            cautionText: 'Individu langka yang dapat memahami bahasa dan bermain game melalui pelatihan khusus.\\nTolong berikan komentar yang baik saat siaran.\\nHarap berhati-hati untuk tidak memberikan terlalu banyak biji ek.'
        },
        
        // Acorn Game
        game: {
            acornCounter: 'Biji ek: {{count}}/{{total}} | Emas: {{golden}}/{{goldenTotal}}',
            completionTitle: '🎉 Selamat! 🎉',
            completionMessage: 'Kamu mengumpulkan semua biji ek!<br>Nemuko sangat senang♪',
            goldenCompletionMessage: 'Kamu mengumpulkan semua biji ek dan biji ek emas!<br>Nemuko sangat senang sekali♪✨',
            closeButton: 'Tutup',
            goldenAcornAppeared: '✨ Biji ek emas muncul! ✨<br><small>Mereka tersembunyi di suatu tempat di halaman!</small>',
            rewards: {
                firstGolden: 'Biji ek emas pertama!',
                halfGolden: 'Mencapai 5 biji ek emas!',
                allGolden: 'Kemenangan total! Mendapat semua biji ek emas!',
                allNormal: 'Mengumpulkan semua biji ek!'
            }
        },
        
        // Character Chat Messages
        chat: {
            messages: [
                'Namaku Nemuko!',
                'Ingin makan {food}',
                'Mulai mengantuk...',
                'Ayo main game~',
                'Hari ini juga siaran jam 17:00!',
                'Sudah kumpulkan biji ek?',
                'Tupai terbang adalah hewan nokturnal',
                'Genshin seru!',
                'Apa kabar semuanya?',
                'Lembut sekali~'
            ],
            foods: [
                'cokelat', 'kue', 'puding', 'es krim', 'biji ek',
                'kue kering', 'donat', 'pancake', 'macaron', 'kue sus',
                'taiyaki', 'dango', 'mochi', 'senbei', 'keripik kentang',
                'ramen', 'kari', 'sushi', 'pizza', 'hamburger',
                'onigiri', 'udon', 'soba', 'yakitori', 'karaage',
                'roti melon', 'anpan', 'castella', 'yokan', 'manju'
            ]
        },
        
        // Twitter Section
        twitter: {
            title: 'Informasi Terbaru'
        },
        
        // Footer
        footer: {
            twitter: 'X'
        }
    },
    
    pt: {
        // Header & Navigation
        nav: {
            schedule: 'Informações de Transmissão',
            profile: 'Perfil'
        },
        
        // Hero Section
        hero: {
            name: 'Momimi Nemuko',
            subtitle: 'Olá.\nSou um esquilo voador com treinamento especial.',
            description: 'Transmitindo no Twitch nos dias úteis às 17h (horário do Japão)!\nPrincipalmente jogando Genshin Impact, às vezes Honkai: Star Rail e outros jogos enquanto converso.',
            watchStream: 'Assistir Transmissão',
            twitterFollow: 'Seguir no X'
        },
        
        // Schedule Section
        schedule: {
            title: 'Transmitindo nos dias úteis às 17h!',
            streamTime: 'Segunda a Sexta 17:00 INÍCIO',
            platform: 'Transmissão - Venha assistir!',
            countdownLabel: 'Próxima transmissão em',
            hours: 'h',
            minutes: 'm',
            seconds: 's',
            streamStarted: 'Transmissão Iniciada!🎉'
        },
        
        // Profile Section
        profile: {
            title: 'Informações de Exibição',
            breedingInfo: 'Informações do Indivíduo',
            speciesTitle: 'Esquilo Voador Japonês (Indivíduo Especial)',
            name: 'Apelido:',
            nameValue: 'Nemuko',
            scientificName: 'Nome Científico:',
            scientificNameValue: 'Pteromys volans orii specialus',
            classification: 'Classificação:',
            classificationValue: 'Mammalia, Rodentia, Sciuridae, Pteromyinae',
            habitat: 'Habitat:',
            habitatValue: 'Principalmente ambiente de transmissão Twitch',
            height: 'Comprimento:',
            heightValue: 'Aprox. 15cm (excluindo a cauda)',
            activeTime: 'Horário Ativo:',
            activeTimeValue: 'Dias úteis a partir das 17:00 (Noturno)',
            favoriteFood: 'Dieta Principal:',
            favoriteFoodValue: 'Doces e guloseimas em geral',
            training: 'Habilidades Especiais:',
            trainingValue: 'Streaming de jogos, conversas, planagem',
            careTitle: 'Pedido dos Cuidadores',
            cautionText: 'Indivíduo raro que pode entender linguagem e jogar games através de treinamento especial.\\nPor favor, seja gentil ao comentar durante as transmissões.\\nTenha cuidado para não dar muitas bolotas.'
        },
        
        // Acorn Game
        game: {
            acornCounter: 'Bolotas: {{count}}/{{total}} | Douradas: {{golden}}/{{goldenTotal}}',
            goldMessage: '⭐ Você encontrou uma bolota dourada! ⭐',
            goldCount: 'Bolotas douradas: {{count}}/{{total}}',
            allGoldenFound: '🌟 Todas as bolotas douradas encontradas! 🌟',
            thankYou: 'Obrigado por brincar comigo! 💕'
        },
        
        // Chat Messages
        chatMessages: {
            greetings: [
                'Olááá~! ✨',
                'Boa tarde! 🌙',
                'Como você está? 🌟',
                'Bem-vindo! 🎉',
                'Que bom ver você! 💕'
            ],
            foods: [
                'chocolate', 'bolo', 'pudim', 'sorvete', 'bolota',
                'biscoito', 'donut', 'panqueca', 'macaron', 'éclair',
                'taiyaki', 'dango', 'mochi', 'senbei', 'batata chips',
                'ramen', 'curry', 'sushi', 'pizza', 'hambúrguer',
                'onigiri', 'udon', 'soba', 'yakitori', 'karaage',
                'melon pan', 'anpan', 'castella', 'yokan', 'manju'
            ]
        },
        
        // Twitter Section
        twitter: {
            title: 'Últimas Informações'
        },
        
        // Footer
        footer: {
            twitter: 'X'
        }
    }
};