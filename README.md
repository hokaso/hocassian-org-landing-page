## 新媒体矩阵官网搭建
搭建中：https://github.com/hokaso/hocassian-landing-page

官网设计图：
https://www.figma.com/file/iIgRhcdlU1mU6D33JFACG4/nmcn---%E6%AD%A3%E5%BC%8F%E7%89%88---%E5%82%99%E4%BB%BD?node-id=0%3A1

官网视频：
https://infra.ai-mcn.tv:9002/prod-api/profile/nmcn/video_matrix/public_assets/intro.mp4

图片拼接：
https://infra.ai-mcn.tv:9002/prod-api/profile/nmcn/video_matrix/members/ + friendPic

### 需要用到的API

#### 平台列表

请求方式：get

请求地址：/client/friend/column

请求Header：（无）

请求Body：

`{}`

返回值示例：

```json
{
    "total": 10,
    "rows": [
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 19,
            "friendName": "哈卡西亚的地平线",
            "friendUrl": "https://www.youtube.com/playlist?list=PLAtKtAmD5sgSJPv5D28b-ybUlvAOo5l0I",
            "friendInfo": "聚焦國內最敏感新聞，為您提供最新穎獨到的解讀視角！",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 22,
            "friendName": "莫言国G",
            "friendUrl": "https://www.zhihu.com/column/c_1236234203261276160",
            "friendInfo": "以欣赏之心，深入国产GAL人迹罕至的角落",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 17,
            "friendName": "玉笙野采",
            "friendUrl": "https://www.ixigua.com/6793712890265207307?id=6793644372190560781",
            "friendInfo": "寻找生活的宝藏，点燃青春的亮光~",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 21,
            "friendName": "Anchorの动画记录",
            "friendUrl": "https://www.zhihu.com/column/c_131691906",
            "friendInfo": "个人向动画鉴赏记录",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 16,
            "friendName": "戏说一下",
            "friendUrl": "https://www.youtube.com/playlist?list=PLAtKtAmD5sgRSONcjA4OlRvJXbKfPN-XC",
            "friendInfo": "几分钟絮语体会生活，一段讲述温暖人心。原创动漫游戏吐槽视频，为您深入挖掘二次元情报，希望大家喜欢~ ",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 25,
            "friendName": "ACG·独处",
            "friendUrl": "https://www.zhihu.com/column/duchu",
            "friendInfo": "喧哗都市，人来人往，我们独处在一起",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 23,
            "friendName": "ACG批评",
            "friendUrl": "https://www.zhihu.com/column/acgpiping",
            "friendInfo": "我们的ACG生活",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 26,
            "friendName": "温柔的奇思妙想",
            "friendUrl": "https://www.zhihu.com/column/c_64355634",
            "friendInfo": "一个诗意的世界。（每日一更）",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 18,
            "friendName": "同和怪谈记事簿",
            "friendUrl": "https://www.youtube.com/playlist?list=PLAtKtAmD5sgSk9fBX7kxFA_Z17AozgyXX",
            "friendInfo": "這個世界上最可怕的的不是鬼怪，而是人心。",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 20,
            "friendName": "流年絮语",
            "friendUrl": "https://www.ixigua.com/6798046994775409164",
            "friendInfo": "分享小眾的情感故事。",
            "friendPic": null,
            "friendType": null,
            "friendStatus": null
        }
    ],
    "code": 200,
    "msg": "查询成功"
}
```

#### 栏目列表

请求方式：get

请求地址：/client/friend/platform

请求Header：（无）

请求Body：

`{}`

返回值示例：

```json
{
    "total": 10,
    "rows": [
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 13,
            "friendName": "QuickCut",
            "friendUrl": "https://github.com/HaujetZhao/QuickCut",
            "friendInfo": "Quick Cut 是一款轻量、强大、好用的视频处理软件。它是一个轻量的工具，而不是像 Davinci Resolve、Adobe Premiere 那样专业的、复杂的庞然大物。Quick Cut 可以满足普通人一般的视频处理需求：压缩视频、转码视频、倒放视频、合并片段、根据字幕裁切片段、自动配字幕、自动剪辑……",
            "friendPic": "580147850877612032.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 7,
            "friendName": "澄空学园论坛",
            "friendUrl": "https://bbs.sumisora.net/",
            "friendInfo": "元老级ACGN论坛",
            "friendPic": "580134859373293568.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 14,
            "friendName": "youtube-dl",
            "friendUrl": "http://ytdl-org.github.io/youtube-dl/",
            "friendInfo": "youtube-dl is a command-line program to download videos from YouTube.com and a few more sites. It requires the Python interpreter (2.6, 2.7, or 3.2+), and it is not platform specific. We also provide a Windows executable that includes Python. youtube-dl should work in your Unix box, in Windows or in Mac OS X. It is released to the public domain, which means you can modify it, redistribute it or use it however you like.",
            "friendPic": "580148805228572672.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 6,
            "friendName": "文章同步助手",
            "friendUrl": "https://www.wechatsync.com/",
            "friendInfo": "一次排版发布，多平台同步发布。解放自媒体人生产力，专注于写作本身！",
            "friendPic": "580133855420493824.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 4,
            "friendName": "果子坤",
            "friendUrl": "https://www.sockite.com/",
            "friendInfo": "果子坤sockite，联萌后期工作室；这里是果子坤sockite的个人博客也是联萌后期的交流站，这里有pr2018基本图形模板正在更新中，ps国外大师创意精品教程正在更新中,更有ps资源ae资源下载,ae原创教程,ae脚本教程果子坤在这里为你准备了资源大餐，希望你能够喜欢！",
            "friendPic": "580132096660746240.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 12,
            "friendName": "Spleeter",
            "friendUrl": "https://research.deezer.com/projects/spleeter.html",
            "friendInfo": "Spleeter is Deezer source separation library with pretrained models written in Python and uses Tensorflow.",
            "friendPic": "580144985979236352.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 10,
            "friendName": "AVGPlus",
            "friendUrl": "https://avg-engine.com/",
            "friendInfo": "用心创作，用爱发电；快速、优雅、灵活的跨平台的文字冒险游戏开发工具。",
            "friendPic": "580138986987859968.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 3,
            "friendName": "图层云",
            "friendUrl": "https://tucengyun.com/",
            "friendInfo": "专注于海外精品AE模板、各种最新AE插件，PR模板、PR插件、转场预设、视频素材、音频素材。LR调色预设、LUT调色预设等资源，提供海外平面资源下载。",
            "friendPic": "580130419123695616.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 11,
            "friendName": "KOLpower",
            "friendUrl": "https://kolpower.cc/",
            "friendInfo": "KOLpower為六指淵創辦之品牌，宗旨為『透過工具賜與創作者超能力』",
            "friendPic": "580143756473544704.jpg",
            "friendType": null,
            "friendStatus": null
        },
        {
            "searchValue": null,
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "params": {},
            "friendId": 5,
            "friendName": "月幕Galgame",
            "friendUrl": "https://www.ymgal.com/",
            "friendInfo": "请感受这绝妙的故事体裁！",
            "friendPic": "580133042165919744.jpg",
            "friendType": null,
            "friendStatus": null
        }
    ],
    "code": 200,
    "msg": "查询成功"
}
```

#### 作者列表

请求方式：get

请求地址：/prod-nosql/people/web/list

请求Header：（无）

请求Body：

`{}`

返回值示例：
```json
{
        "total": 0,
        "rows": [{
                "personWebId": "574428074645643020",
                "personWebName": "玉笙lalala",
                "personWebPic": "574596515969118208.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/412851776",
                "personWebPlatform": "[\"0\",\"3\",\"4\",\"1\"]",
                "personWebField": "[\"ACGN\",\"野采\",\"户外\",\"昆虫养殖\",\"情感\"]",
                "personWebInfo": "知名野外探险博主，热爱生活的美食家。",
                "personWebKey": "有话直说"
        }, {
                "personWebId": "577129387779174400",
                "personWebName": "同和君Hocassian",
                "personWebPic": "577133178444328960.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/2303936",
                "personWebPlatform": "[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"9\",\"11\",\"12\",\"13\"]",
                "personWebField": "[\"ACGN\",\"摄影圈\",\"IT/互联网\"]",
                "personWebInfo": "同和新媒体矩阵创始人；人生有無數種可能，人生有無限的精彩，人生沒有盡頭。一個人只要足夠的愛自己，尊重自己內心的聲音，就算是真正的活著。",
                "personWebKey": ""
        }, {
                "personWebId": "577583305596350464",
                "personWebName": "奈兔Nau",
                "personWebPic": "577587364487245824.jpg",
                "personWebShow": "0",
                "personWebLink": "https://music.163.com/#/artist?id=34602898",
                "personWebPlatform": "[\"0\",\"9\",\"11\"]",
                "personWebField": "[\"ACGN\",\"歌姬\",\"翻唱\",\"萌妹\"]",
                "personWebInfo": "佛系日翻歌姬，翻唱歌曲类型排序先后：GAL、Anime、V家。喜爱治愈系&元气系的曲子。 微博、B站同名：奈兔Nau。很高兴能在这里与你相遇~感谢聆听。",
                "personWebKey": ""
        }, {
                "personWebId": "577584732628594688",
                "personWebName": "Prinzessin Eiskristalle",
                "personWebPic": "577588768559869952.jpg",
                "personWebShow": "0",
                "personWebLink": "https://music.163.com/#/playlist?id=2461871083",
                "personWebPlatform": "[\"9\"]",
                "personWebField": "[\"作曲\",\"编曲\",\"ACGN\",\"混音\",\"交响乐\"]",
                "personWebInfo": "作曲/编曲/混音能力顶尖，通晓八国语言的天才少女，目前在日本留学。",
                "personWebKey": "脾气有点怪，大概天才都是这样吧……"
        }, {
                "personWebId": "577585366136270848",
                "personWebName": "雏葵",
                "personWebPic": "577589529989623808.jpg",
                "personWebShow": "0",
                "personWebLink": "https://music.163.com/#/artist?id=12193028",
                "personWebPlatform": "[\"9\"]",
                "personWebField": "[\"唱见\",\"ACGN\",\"lovelive\",\"萌妹\"]",
                "personWebInfo": "LLer！唱的歌基本上是LL的！5sing/bilibili@雏葵 传了今年大部分的歌！谢谢收听！",
                "personWebKey": ""
        }, {
                "personWebId": "577858977073999872",
                "personWebName": "黒暗界",
                "personWebPic": "577863025621741568.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/2663839",
                "personWebPlatform": "[\"0\",\"9\"]",
                "personWebField": "[\"ACGN\",\"鬼畜\",\"音mad\",\"蒸汽波\",\"音乐人\"]",
                "personWebInfo": "曾用名凉风青叶，现名靑神，元老级鬼畜制作人，目前沉迷于蒸汽波……",
                "personWebKey": ""
        }, {
                "personWebId": "577887193671151616",
                "personWebName": "快乐的老鼠宝宝",
                "personWebPic": "577891362754801664.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/kuai-le-de-lao-shu-bao-bao/posts",
                "personWebPlatform": "[\"5\"]",
                "personWebField": "[\"摸鱼\",\"ACGN\",\"Galgame\",\"开发者\"]",
                "personWebInfo": "致力于推广Galgame开发标准，本鼠才不会卖萌给你看\\(//∇//)\\！！！！",
                "personWebKey": "社交恐惧症，线上沟通吧。"
        }, {
                "personWebId": "578630069661216768",
                "personWebName": "叶佳桐",
                "personWebPic": "578634168897122304.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/yie-jia-tong",
                "personWebPlatform": "[\"5\",\"0\"]",
                "personWebField": "[\"ACGN\",\"漫评\",\"硬核\",\"元老\"]",
                "personWebInfo": "电波人类研究中心首席研究员，ACNG圈骨灰级漫评人。",
                "personWebKey": ""
        }, {
                "personWebId": "578632020910157824",
                "personWebName": "秋思恋雨",
                "personWebPic": "578636193080815616.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/qiu-si-lian-yu-76",
                "personWebPlatform": "[\"5\"]",
                "personWebField": "[\"ACGN\",\"剧本\",\"写作\",\"Galgame\"]",
                "personWebInfo": "某二逼法学院学生，逗逼业余写手；橘子班御用剧本写手，参与过数部经典国产Galgame的剧本撰写工作。",
                "personWebKey": ""
        }, {
                "personWebId": "578634762395332608",
                "personWebName": "Days梦幻年华乐团",
                "personWebPic": "578638787425611776.jpg",
                "personWebShow": "0",
                "personWebLink": "https://music.163.com/#/artist?id=11505",
                "personWebPlatform": "[\"9\"]",
                "personWebField": "[\"ACGN\",\"编曲\",\"电子\",\"乐队\"]",
                "personWebInfo": "全名Days幻梦年华乐团。动漫同人/游戏/Vocaloid原创音乐团队、LiveDays音乐祭主办方。2007年初步成立，初期以翻唱ACG歌曲参加LIVE为主的乐队，后逐渐转型为创作型网络团队。在接下来第二年又自行组织了LIVEDAYS 2，这时的乐队开始慢慢有了雏形。到第三年2010年，在LIVE DAYS 3之后，DAYS乐团正式成立。音乐创作方向非常多元化：古风，摇滚，民谣，治愈系，世界音乐，流行电子乐等都有涉及，因为涉及面太广，至今也没有一种特有的音乐风格能定义乐团的音乐。乐团以平均8个月左右的周期出一张专辑。从最初的2次创作到后来的纯原创。‘失落的机械城’这张专辑算是乐团正式步入纯原创阶段。之后很长一段时间都在以Vocaloid China‘洛天依’为主进行创作。先后创作了‘Summer Days’ ‘三月雨’ ‘忆香’三张专辑。并有大量非专辑收录单曲在BILIBILI等视频网站发布。2014年乐团正在创作‘失落的机械城续篇’。",
                "personWebKey": ""
        }, {
                "personWebId": "578638199937839104",
                "personWebName": "星野浩",
                "personWebPic": "578642288885116928.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/1342840/",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"ACGN\",\"汉化组\",\"元老\",\"澄空学园\",\"KFC\"]",
                "personWebInfo": "汉化组KID·FAN·CLUB、汉化组澄空学园元老级成员。",
                "personWebKey": ""
        }, {
                "personWebId": "578639839289946112",
                "personWebName": "君羽幻梦",
                "personWebPic": "578643983631396864.jpg",
                "personWebShow": "0",
                "personWebLink": "",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"ACGN\"]",
                "personWebInfo": "昵称大苹果，汉化组KID成员，后期成功转型，成为《告别回忆8》中文汉化负责人。",
                "personWebKey": ""
        }, {
                "personWebId": "574428074645663000",
                "personWebName": "H老蛋",
                "personWebPic": "574968767206141952.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/5683713",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"ACGN\",\"搞笑\",\"特摄圈\",\"军宅\"]",
                "personWebInfo": "钢铁直男段老板",
                "personWebKey": "憨憨敬礼"
        }, {
                "personWebId": "574596964780617728",
                "personWebName": "裙摆菌",
                "personWebPic": "574601017375862784.jpg",
                "personWebShow": "0",
                "personWebLink": "https://v.douyin.com/eYXgGH3/",
                "personWebPlatform": "[\"2\",\"0\"]",
                "personWebField": "[\"吉他\",\"音乐人\",\"ACGN\"]",
                "personWebInfo": "一个爱网抑的不正经吉他架子鼓手",
                "personWebKey": "感性"
        }, {
                "personWebId": "574603148099072000",
                "personWebName": "Grace夏梦怡",
                "personWebPic": "574607331829231616.jpg",
                "personWebShow": "0",
                "personWebLink": "https://movie.douban.com/celebrity/1368314/",
                "personWebPlatform": "[\"0\",\"4\",\"12\",\"3\"]",
                "personWebField": "[\"纪录片\",\"导演\",\"摄影师\"]",
                "personWebInfo": "中国知名青年导演，摄影师，广州增城人。于2011年考入湖南大学艺术设计专业，在学校期间她当过电台主持人，活动策划，乐队主唱和英语老师，大三开始喜像创作用自己的第一部入门单反相机先后独立创作了纪录片《隐居中国》《我的第一位》，作品获2014法国巴黎青年短片电影节最受观众欢迎奖，北京大学电影节原创影片大赛最佳摄影等，大四拍摄的纪录片《远去的家》讲述了城市化进程中以做烧烤夜宵为生的农民工群体挣扎生存的真实故事，获第二十二届北京大学生电影节原创影片大赛纪录片最佳导演奖。",
                "personWebKey": ""
        }, {
                "personWebId": "574963676935892992",
                "personWebName": "靓仔叁零肆",
                "personWebPic": "574967754399166464.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/11621881/",
                "personWebPlatform": "[\"0\",\"4\"]",
                "personWebField": "[\"ACGN\",\"鬼畜\",\"音mad\",\"VOCALOID\"]",
                "personWebInfo": "从契丹到爱尔兰无人不知的潮汕鬼畜英豪（大草）",
                "personWebKey": ""
        }, {
                "personWebId": "574965679049158656",
                "personWebName": "五十岚上夏",
                "personWebPic": "574969643379470336.jpg",
                "personWebShow": "0",
                "personWebLink": "https://v.douyin.com/eY3uofp/",
                "personWebPlatform": "[\"0\",\"2\"]",
                "personWebField": "[\"搞笑\",\"ACGN\",\"同人企划\",\"画师\"]",
                "personWebInfo": "摸仙煲女娃，上戏编导专业学生，抖音短视频达人",
                "personWebKey": "脾气不太好\n需要哄着来\n"
        }, {
                "personWebId": "574594414366961664",
                "personWebName": "列文卢克",
                "personWebPic": "574605900321665024.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/2857440",
                "personWebPlatform": "[\"0\",\"11\"]",
                "personWebField": "[\"摄影师\",\"ACGN\",\"漫展\",\"老法师\",\"PS修图\"]",
                "personWebInfo": "化妆品化工领域工作者，摄影爱好者",
                "personWebKey": ""
        }, {
                "personWebId": "574984780962344960",
                "personWebName": "NOFACE不是大触",
                "personWebPic": "574988962226253824.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/4012943",
                "personWebPlatform": "[\"0\",\"4\"]",
                "personWebField": "[\"摄影\",\"相机\",\"胶片\",\"教程\",\"电影\",\"镜头\"]",
                "personWebInfo": "又名古幻，人类补完计划委员会下属未来机械研究所冬云研究中心中二病拯救世界委员会行动计划A组组长",
                "personWebKey": ""
        }, {
                "personWebId": "578746331989028864",
                "personWebName": "雨鹦RainParrot",
                "personWebPic": "578750307320999936.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/5352545",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"ACGN\",\"摄影圈\",\"马迷\",\"直播\",\"单机游戏玩家\"]",
                "personWebInfo": "星鸟工作室摄影担当，目前混迹于b站游戏直播圈~",
                "personWebKey": "Furry控交流方式（大雾）"
        }, {
                "personWebId": "580109680085577728",
                "personWebName": "拉姆塞",
                "personWebPic": "580113502950404096.jpg",
                "personWebShow": "0",
                "personWebLink": "",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"IT/互联网\",\"后端开发\"]",
                "personWebInfo": "同和新媒体矩阵开发者之一，目前是一块吸水海绵……",
                "personWebKey": ""
        }, {
                "personWebId": "577288708362088448",
                "personWebName": "苍麟",
                "personWebPic": "577292280273317888.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.ymgal.com",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"Anime\",\"Galgame\",\"互联网\",\"infra\",\"ACGN\"]",
                "personWebInfo": "月幕Galgame站长",
                "personWebKey": ""
        }, {
                "personWebId": "577904408881541120",
                "personWebName": "空一TYksi",
                "personWebPic": "577908460688257024.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/26493272",
                "personWebPlatform": "[\"0\",\"13\",\"5\",\"11\"]",
                "personWebField": "[\"摄影\",\"Vlog\",\"纪录片\",\"音mad\",\"演奏\"]",
                "personWebInfo": "平台常用名：SkyOneStudio 做视频给自己看 独立纪录片导演，致力于让大众了解现实生活中ACGN爱好者与创作者的故事",
                "personWebKey": "这里是空一，很高兴认识你，希望我们都能成为自己最想成为的人"
        }, {
                "personWebId": "577926389030989824",
                "personWebName": "太莫拉",
                "personWebPic": "577930506449203200.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/tai-mo-la",
                "personWebPlatform": "[\"5\"]",
                "personWebField": "[\"ACGN\",\"Galgame\",\"国产游戏\",\"评论家\"]",
                "personWebInfo": "国G知名玩家、评论家，泛游戏宣发负责人。",
                "personWebKey": ""
        }, {
                "personWebId": "577928214618583040",
                "personWebName": "浅色回忆",
                "personWebPic": "577932393407852544.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/Yumemi-Hoshino",
                "personWebPlatform": "[\"5\",\"0\"]",
                "personWebField": "[\"ACGN\",\"社会\",\"时事评论\"]",
                "personWebInfo": "国内骨灰级ACGN发言人、自由撰稿人，前汉化组KFC成员；知行合一，守序善良。山川异域，风月同天。",
                "personWebKey": ""
        }, {
                "personWebId": "577933528910802944",
                "personWebName": "windchaos",
                "personWebPic": "577937660732256256.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/windchaos",
                "personWebPlatform": "[\"5\"]",
                "personWebField": "[\"ACGN\",\"互联网\",\"第一弹APP运营主编\"]",
                "personWebInfo": "又名风大，Galgame开发者，代表作《恋爱绮谭》、《美丽新世界i》\n",
                "personWebKey": ""
        }, {
                "personWebId": "577838667608109056",
                "personWebName": "你阿叉烧",
                "personWebPic": "577842774054023168.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/15723239/",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"MC\",\"ACGN\",\"开发者\"]",
                "personWebInfo": "MC高级玩家，软件工程潜力股。",
                "personWebKey": ""
        }, {
                "personWebId": "577839195784228864",
                "personWebName": "被炒的炒饭",
                "personWebPic": "577843318042669056.jpg",
                "personWebShow": "0",
                "personWebLink": "https://weibo.com/fryrice",
                "personWebPlatform": "[\"0\",\"11\",\"5\"]",
                "personWebField": "[\"ACGN\",\"Galgame\",\"主催\",\"制作人\"]",
                "personWebInfo": "《高考恋爱一百天》主催，落叶岛项目组组长，国内首屈一指的Galgame制作人。",
                "personWebKey": ""
        }, {
                "personWebId": "577847070019563520",
                "personWebName": "23midori",
                "personWebPic": "577851160409681920.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/923453",
                "personWebPlatform": "[\"0\",\"8\",\"11\"]",
                "personWebField": "[\"ACGN\",\"动漫杂谈\",\"Galgame\",\"元老级\"]",
                "personWebInfo": "90年大叔的ACG频道，偶尔会有小姐姐和已婚妇女客串。",
                "personWebKey": ""
        }, {
                "personWebId": "577854148339576832",
                "personWebName": "千坂",
                "personWebPic": "577858287916298240.jpg",
                "personWebShow": "0",
                "personWebLink": "https://music.163.com/#/artist?id=12138261",
                "personWebPlatform": "[\"9\"]",
                "personWebField": "[\"音乐人\",\"电音\"]",
                "personWebInfo": "国内天才级电子音乐制作人，热爱电子音乐，努力创作更多更好的音乐。",
                "personWebKey": ""
        }, {
                "personWebId": "577856648081846272",
                "personWebName": "月下散落出世",
                "personWebPic": "577860765558779904.jpg",
                "personWebShow": "0",
                "personWebLink": "https://music.163.com/#/artist?id=12116126",
                "personWebPlatform": "[\"9\"]",
                "personWebField": "[\"古典音乐\",\"中国风\",\"音乐人\"]",
                "personWebInfo": "原创背景音乐，轻音乐制作，在诸多前辈的启发下扬帆。音乐是自然和人类灵感碰撞诞生的艺术，奉献自己的时光于自然，追寻音乐的美，无疑是一条找到本我的路。",
                "personWebKey": ""
        }, {
                "personWebId": "578351298982981632",
                "personWebName": "原味葱油饼干",
                "personWebPic": "578355455244644352.jpg",
                "personWebShow": "0",
                "personWebLink": "https://www.zhihu.com/people/wang-ke-jun-65-58",
                "personWebPlatform": "[\"5\",\"0\"]",
                "personWebField": "[\"永远的萌新\",\"ACGN\"]",
                "personWebInfo": "国产Galgame公认吉祥物，知名玩家、评论家",
                "personWebKey": ""
        }, {
                "personWebId": "580110997155753984",
                "personWebName": "ManLeE",
                "personWebPic": "580115128989790208.jpg",
                "personWebShow": "0",
                "personWebLink": "",
                "personWebPlatform": "[\"6\"]",
                "personWebField": "[\"IT/互联网\",\"前端开发\"]",
                "personWebInfo": "同和新媒体矩阵开发者之一",
                "personWebKey": ""
        }, {
                "personWebId": "574966910823968768",
                "personWebName": "老坑zzz",
                "personWebPic": "574971173809696768.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/7815280",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"ACGN\",\"游戏杂谈\",\"吐槽\"]",
                "personWebInfo": "游戏圈吐槽大师，早期杂谈视频作者",
                "personWebKey": ""
        }, {
                "personWebId": "574968456055894016",
                "personWebName": "RITENDOKI",
                "personWebPic": "574972343898877952.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/7832083",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"摄影\",\"剪辑\",\"VLOG\",\"快闪\"]",
                "personWebInfo": "曾用名Ricky.C，VLOG视频作者，摄影短片剪辑圈玩家",
                "personWebKey": "8kraw系成员"
        }, {
                "personWebId": "574981098757697536",
                "personWebName": "胡伟华Coral",
                "personWebPic": "574985143002083328.jpg",
                "personWebShow": "0",
                "personWebLink": "https://weibo.com/u/5314681342",
                "personWebPlatform": "[\"11\",\"12\",\"13\"]",
                "personWebField": "[\"摄影\",\"旅拍\",\"艺术家\",\"书法\",\"PS\"]",
                "personWebInfo": "旅拍艺术达人",
                "personWebKey": ""
        }, {
                "personWebId": "652868717541339136",
                "personWebName": "恋爱革命家丶大C",
                "personWebPic": "652872839707504640.jpg",
                "personWebShow": "0",
                "personWebLink": "https://space.bilibili.com/40407541",
                "personWebPlatform": "[\"0\"]",
                "personWebField": "[\"情感\",\"两性\",\"权益\"]",
                "personWebInfo": "【未来恋爱观】创始人，一个想改变世界的up主！ 兴趣创作，无团队无商务，偶尔额外更新娱乐视频，请多多支持！ 花影魂惑，月风神晓",
                "personWebKey": ""
        }],
        "code": 200,
        "msg": "查询成功"
}
```