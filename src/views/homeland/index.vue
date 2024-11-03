<template>
  <div class="root">
    <header class="header">
      「原来，温暖的精神家园是存在的。」
    </header>
    <section class="container">
      <img src="./image/sider.png" class="sider"/>
      <a-row justify="end" class="first-line">
        <div class="card">
          <div class="left">
            <div class="text">
              <span>多年以来，</span>
              「同合杉天新媒体矩阵」致力于帮助亚文化小众群体找寻自身价值，不断扶持天才级创作者输出优质内容，带动相关领域持续细化，从中汲取养分使受众圈焕发活力，成长为拥有自身扩张力的模范群体。无论是音乐、绘画、视频亦或其他文化形式，我们皆有成功案例证明这种去中心化的运营模式能够为用户带来正面的精神影响力，渐渐让他们收获彼此的认同和世界的善意，有动力寻找人生的宝物，点燃生命的亮光，最终拥抱美好的人生。
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
        </div>
      </a-row>
      <a-row align="middle" class="second-line">
        <a-col :span="18" class="card">
          <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/family.webp"/>
          <div class="text">
            <span>NMCN</span>
            （Niche Multi Channel
            Network），小众多频道网络，是「同合杉天新媒体矩阵」创始团队于舆论资本全球化背景下率先提出的一种非营利性的去中心化自媒体联盟形式，通过联盟内创作单位的交流互推、共享资源等方式对抗资本侵蚀，在产出卓越作品的同时保障亚文化生存空间，为守护宝贵的非物质文化遗产尽绵薄之力。
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
                <h1 class="datatitle">300+</h1>
                <p class="datacontent">矩阵成员</p>
              </div>
              <div class="above">
                <h1 class="datatitle linearfont">300+</h1>
              </div>
            </a-col>
            <a-col class="img-block">
              <div class="below">
                <h1 class="datatitle">2亿+</h1>
                <p class="datacontent">累计阅览量</p>
              </div>
              <div class="above">
                <h1 class="datatitle linearfont">2亿+</h1>
              </div>
            </a-col>
            <a-col class="img-block">
              <div class="below">
                <h1 class="datatitle">800万+</h1>
                <p class="datacontent">累计粉丝</p>
              </div>
              <div class="above">
                <h1 class="datatitle linearfont">800万+</h1>
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
import PageAffix from '@/components/page-affix/index.vue';

export default {
  components: {PageAffix},
  setup() {
    const cardList = [
      {
        title: '同和视频矩阵',
        content: '贮存&展示矩阵成员视频稿件并借此维护其原创性，提升矩阵影响力，防止公共平台监管限流、无故下架、恶意带节奏等信息霸权问题；促进成员相互引流&合作，以组织形式面向广告主，实现共同盈利。'
      },
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/how_to_look.webp'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/world.webp'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/mischief.webp'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/dusk.webp'},
      {title: '同和素材矩阵', content: '旨在为创作者提供开源的高质多媒体素材，同时接收创作者的投稿与分享，提高多媒体素材的利用率；前接素材的采集，后接素材的调用与剪辑，为创作者省去查找素材的重复劳动。'},
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/those.webp'},
      {
        title: '同和创意矩阵',
        content: '该矩阵旨在帮助创作者找到相关领域的合作伙伴，提供法务咨询、共享商单、选题悬赏等服务型功能，为内容工作者提供「发现」与「分享」的根据地，迸发创作灵感、提升归属感和个人IP声量。'
      },
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/event.webp'},
      {
        title: '同和造势矩阵',
        content: '流量是舆论的产物，优质内容的扩散离不开计划性和规模化的运营，我们结合互联网技术与社会心理学，触达观众精神极限的同时将信息多元化，以期分类明确、高度集成和精致包装，顺应未来传播潮流。'
      },
      {imageUrl: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/interview.webp'},
      {
        title: '同和分发矩阵',
        content: '我们致力于潜心研究媒体平台，并最终独创基于模拟器二次封装的分发手段，且与多家分发软件开发商达成合作，作者可一键将图文或视频一次性同步至多个自媒体平台，真正意义上实现『一次分发，多端同步』。'
      }
    ];
    const items = [
      {label: '灵感加持', desc: '拢集相同小众领域创作者\n头脑风暴迸发灵感', imageUrl: require('./image/Inspiration.png')},
      {label: '资源共享', desc: '不仅止步于素材资源\n互享人脉资源聚沙成塔', imageUrl: require('./image/share.png')},
      {label: '自由合作', desc: '创作动力缘起于兴趣\n轻商业重共鸣', imageUrl: require('./image/cooperation.png')},
      {label: '创作活力', desc: '继承亚文化论坛运营优点\n让内容从脑海里走进屏幕里', imageUrl: require('./image/creation.png')},
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
        @media screen and (max-width: 1280px) {
          padding: 120px 50px 120px 80px;
          max-width: 74%;
        }
        max-width: 58%;
        padding: 120px 150px 120px 80px;
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
