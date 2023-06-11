<template>
  <div class="root">
    <header class="header">
      「原來，溫暖的精神家園是存在的。」
    </header>
    <section class="container">
      <img src="./image/sider.png" class="sider"/>
      <a-row justify="end" class="first-line">
        <a-col :span="14" class="card">
          <div class="left">
            <div class="text">
              <span>多年以來，</span>
              「同和系新媒體矩陣」致力於幫助亞文化小眾群體找尋自身價值，不斷扶持天才級創作者輸出優質內容，帶動相關領域持續細化，從中汲取養分使受眾圈煥發活力，成長為擁有自身擴張力的模範群體。無論是音樂、繪畫、視頻亦或其他文化形式，我們皆有成功案例證明這種去中心化的運營模式能夠為用戶帶來正面的精神影響力，漸漸讓他們收穫彼此的認同和世界的善意，有動力尋找人生的寶物，點燃生命的亮光，最終擁抱美好的人生。
            </div>
            <div class="image-box">
              <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/1.webp"/>
              <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/2.webp"/>
              <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/3.webp"/>
              <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/4.webp"/>
            </div>
          </div>
          <div class="right">
            <page-affix/>
          </div>
        </a-col>
      </a-row>
      <a-row align="middle" class="second-line">
        <a-col :span="18" class="card">
          <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/family.webp"/>
          <div class="text">
            <span>NMCN</span>
            （Niche Multi Channel
            Network），小眾多頻道網絡，是「同和新媒體矩陣」創始團隊於輿論資本全球化背景下率先提出的一種非營利性的去中心化自媒體聯盟形式，通過聯盟內創作單位的交流互推、共享資源等方式對抗資本侵蝕，在產出卓越作品的同時保障亞文化生存空間，為守護寶貴的非物質文化遺產盡綿薄之力。
          </div>
        </a-col>
        <a-col :flex="1">
          <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/process.webp"/>
        </a-col>
      </a-row>
      <a-row justify="end" class="third-line">
        <a-col :span="17">
          <a-row :gutter="[50, 50]" justify="center">
            <a-col :span="24">
              <img class="first-title" src="./image/first-title.png"/>
            </a-col>
            <a-col
                v-for="(item, i) in cardList"
                :key="i"
                :span="8">
              <div class="card"
                   :style="{'background-image': `url(${item.imageUrl})`, 'mix-blend-mode': !item.imageUrl && 'overlay'}">
                <div class="title">{{ item.title }}</div>
                <div class="content">{{ item.content }}</div>
              </div>
            </a-col>
          </a-row>
          <a-row justify="center" :gutter="[100, 60]" class="second-mode">
            <a-col :span="24">
              <img class="second-title" src="./image/second-title.png"/>
            </a-col>
            <a-col class="img-block">
              <div class="below">
                <h1 class="datatitle">200+</h1>
                <p class="datacontent">矩陣成員</p>
              </div>
              <div class="above">
                <h1 class="datatitle linearfont">200+</h1>
              </div>
            </a-col>
            <a-col class="img-block">
              <div class="below">
                <h1 class="datatitle">2億+</h1>
                <p class="datacontent">累計閱覽量</p>
              </div>
              <div class="above">
                <h1 class="datatitle linearfont">2億+</h1>
              </div>
            </a-col>
            <a-col class="img-block">
              <div class="below">
                <h1 class="datatitle">500萬+</h1>
                <p class="datacontent">累計粉絲</p>
              </div>
              <div class="above">
                <h1 class="datatitle linearfont">500萬+</h1>
              </div>
            </a-col>
          </a-row>
          <a-row justify="center" :gutter="[60, 50]" class="third-mode">
            <a-col :span="24">
              <img class="third-title" src="./image/third-title.png"/>
            </a-col>
            <a-col
                v-for="(item, i) in items"
                :key="i"
                class="item-block">
              <img :src="item.imageUrl"/>
              <div class="label">{{ item.label }}</div>
              <p class="desc">{{ item.desc }}</p>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script>
import PageAffix from '@/componetns/page-affix/index.vue';

export default {
  components: {PageAffix},
  setup() {
    const cardList = [
      {
        title: '同和視頻矩陣',
        content: '貯存&展示矩陣成員視頻稿件並藉此維護其原創性，提升矩陣影響力，防止公共平台監管限流、無故下架、惡意帶節奏等信息霸權問題；促進成員相互引流&合作，以組織形式面向廣告主，實現共同盈利。'
      },
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/how_to_look.webp'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/world.webp'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/mischief.webp'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/dusk.webp'},
      {title: '同和素材矩陣', content: '旨在為創作者提供開源的高質多媒體素材，同時接收創作者的投稿與分享，提高多媒體素材的利用率；前接素材的採集，後接素材的調用與剪輯，為創作者省去查找素材的重複勞動。'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/those.webp'},
      {
        title: '同和創意矩陣',
        content: '該矩陣旨在幫助創作者找到相關領域的合作夥伴，提供法務諮詢、共享商單、選題懸賞等服務型功能，為內容工作者提供「發現」與「分享」的根據地，迸發創作靈感、提升歸屬感和個人IP聲量。'
      },
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/event.webp'},
      {
        title: '同和造勢矩陣',
        content: '流量是輿論的產物，優質內容的擴散離不開計劃性和規模化的運營，我們結合互聯網技術與社會心理學，觸達觀眾精神極限的同時將信息多元化，以期分類明確、高度集成和精緻包裝，順應未來傳播潮流。'
      },
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/interview.webp'},
      {
        title: '同和分發矩陣',
        content: '我們致力於潛心研究媒體平台，並最終獨創基於模擬器二次封裝的分發手段，且與多家分發軟件開發商達成合作，作者可一鍵將圖文或視頻一次性同步至多個自媒體平台，真正意義上實現『一次分發，多端同步』。'
      }
    ];
    const items = [
      {label: '靈感加持', desc: '攏集相同小眾領域創作者\n頭腦風暴迸發靈感', imageUrl: require('./image/Inspiration.png')},
      {label: '資源共享', desc: '不僅止步於素材資源\n互享人脈資源聚沙成塔', imageUrl: require('./image/share.png')},
      {label: '自由合作', desc: '創作動力緣起於興趣\n輕商業重共鳴', imageUrl: require('./image/cooperation.png')},
      {label: '創作活力', desc: '繼承亞文化論壇運營優點\n讓內容從腦海裡走進屏幕裡', imageUrl: require('./image/creation.png')},
    ]
    return {
      cardList,
      items
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;

  .header {
    height: 117px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #323232;
    font-size: 36px;
    background-image: url('./image/header.png');
    background-size: cover;
    background-repeat: repeat;
  }

  .container {
    padding: 220px 0;
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 38.02%), linear-gradient(135deg, #FFF6B7 0%, #F77695 100%);

    .sider {
      width: 226px;
      position: absolute;
      top: 135px;
      left: 170px;
      z-index: 1;
      @media screen and (max-width: 1280px) {
        left: 100px;
      }
    }

    .first-line {
      .card {
        padding: 120px 155px 120px 80px;
        background: #FFFCF5;
        display: flex;
        justify-content: flex-start;

        .left {
          .text {
            & > span {
              font-size: 36px;
            }

            color: #282828;
            font-size: 24px;
            line-height: 38px;
            text-align: left;
          }

          .image-box {
            height: 111px;
            width: 100%;
            margin-top: 24px;
            display: flex;

            & > img {
              height: 100%;
              margin-right: 8px;

              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
    }

    .second-line {
      margin-right: 60px;
      margin-top: 170px;

      & ::v-deep.ant-row {
        flex-flow: nowrap;
      }

      .card {
        display: flex;
        background: #FFFCF5;
        flex-direction: column;
        justify-content: flex-end;
        padding: 52px 6% 44px 30%;
        margin-right: 24px;

        .text {
          color: #282828;
          line-height: 38px;
          font-size: 24px;
          margin-top: 21px;
          text-align: left;

          & > span {
            font-size: 36px;
          }
        }
      }

      img {
        width: 100%;
      }
    }

    .third-line {
      margin-top: 216px;
      margin-right: 100px;

      .first-title {
        height: 87px;
      }

      .card {
        background-position-x: center;
        background-position-y: center;
        color: #fff;
        border-radius: 12px;
        background-color: #494949;
        padding: 24px;
        background-size: cover;
        width: 100%;
        height: 100%;
        @media screen and (max-width: 1280px) {
          background-size: contain;
          background-position: center;
        }

        .title {
          font-size: 24px;
          line-height: 38px;
        }

        .content {
          margin-top: 10px;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
        }
      }

      .second-mode {
        margin-top: 150px;

        .second-title {
          height: 31px;
        }

        .img-block {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 24px;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

          & > img {
            height: 33px;
            margin-bottom: 14px;
          }
        }
      }

      .third-mode {
        margin-top: 80px;

        .third-title {
          height: 31px;
        }

        .item-block {
          color: #fff;
          text-align: center;

          & > img {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          }

          .label {
            font-size: 18px;
            margin: 17px 0 17px 0;
          }

          .desc {
            font-size: 12px;
            line-height: 20px;
            white-space: pre-line;
          }
        }
      }
    }
  }
}

.img-block {
  text-shadow: 0 3px 4px #00000050;
  position: relative;

  .datatitle {
    font-weight: bolder;
    font-size: 3rem;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .datacontent {
    margin-top: -20px;
    color: white;
    font-size: 1.4rem;
  }

  .above {
    text-shadow: none;
    position: relative;
    top: -135px;
  }

  .linearfont {
    background-image: linear-gradient(to bottom, white, #FFB5C0);
  }
}
</style>
