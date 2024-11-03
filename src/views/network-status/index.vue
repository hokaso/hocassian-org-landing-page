<template>
  <div class="root">
    <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/header_background.webp" class="headerImg" />
    <section class="container">
      <a-row align="middle" class="main">
        <a-col class="affix-block">
          <page-affix class="page-affix" />
        </a-col>
        <a-col>
          <div class="first">
            <div class="text">
              作为KOL新青年，我们不应在大环境下失声。每个人都拥有自己对生活的定义，不必迎合大众审美，那么就退出那些设定好的游戏，另起炉灶。
            </div>
          </div>
          <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/irregular_2.webp" class="second-img" />
          <div class="desc">
            <span>在生物界，</span>与复杂的自然环境一并产生的还有物种的多样性，正是千千万万个生命之间的互相依存，才让我们的星球有了生机和色彩。而对于拥有精神世界的我们来说，各异的文化、不同的思想、偶然的灵感……在它们的影响与碰撞下，百花齐放的文明诞生了。而世俗势力企图减少思想的维度，收束思考的层次，通过没有硝烟的「和平演变」使拖尾效应不断弱化，其结果就是——我们的情感逐渐失调，「精神温室效应」不断加剧，忘记了自己于世的使命；我们开始慢慢难以被打动，难以倾听那共鸣之声，我们的精神逐渐变得稳定、迟钝、不再起伏……
          </div>
        </a-col>
      </a-row>
      <img src="./image/parper-airplane.png" class="airplane" />
      <div class="end-text">
        尝试著将自己抽身出来吧，慢慢拾回那些曾经被遗弃的闪光点，渐渐回到出发的营地。你会发现，总会有那么一群可爱的人们，在最初的起点等著你——这里是未曾被资本侵蚀的小众空间，这里没有攀比，没有虚荣，没有浮躁与喧嚣，即便失去了物质的包装，存在于自己心底的那个纯净的世界，也会在志同道合的伙伴们的鼓励下不断发光发热，充盈自信心直至迈出脚步……于是乎，擦肩而过的我们，怀著相似却不同的理想，走著相似而不同的道路，唱著同样的一首歌，演奏著这个世界的交响。
      </div>
      <footer class="footerImg" />
    </section>
  </div>
</template>

<script lang="ts">
import PageAffix from '@/components/page-affix/index.vue';
export default {
  components: { PageAffix }
}
</script>

<style lang="less" scoped>
.root {
  width: 100%;
  .headerImg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    margin-top: -6%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
  }
  .container {
    background-image: url('https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/paper.webp');
    background-size: cover;
    margin-top: -10%;
    padding-top: 5%;
    height: 100%;
    .main {
      margin: 74px auto;
      height: 100%;
      max-width: fit-content;
      text-align: left;
      position: relative;
      .affix-block {
        margin-right: 120px;
      }
      .first {
        background-image: url('https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/irregular_1.webp');
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
        margin: 0 auto;
        @media screen and (max-width: 1280px){
          width: 604px;
          height: 237px;
        }
        @media screen and (min-width: 1280px){
          width: 911px;
          height: 357px;
        }
        .text {
          @media screen and (max-width: 1280px){
            font-size: 16px;
            width: 250px;
          }
          font-size: 26px;
          color: #fff;
          position: absolute;
          top: 33%;
          text-align: left;
          left: 7%;
          width: 350px;
        }
      }
      .second-img {
        margin: 56px 6% 0 20px;
        vertical-align: top;
        @media screen and (max-width: 1280px){
          width: 260px;
        }
        @media screen and (min-width: 1280px){
          width: 423px;
        }
      }
      .desc {
        font-size: 34px;
        color: #515151;
        width: 372px;
        display: inline-block;
        margin-top: -4%;
        @media screen and (max-width: 1280px){
          font-size: 14px;
          width: 280px;
          line-height: 24px;
          & > span {
            font-size: 24px;
          }
        }
        @media screen and (min-width: 1280px){
          font-size: 16px;
          width: 372px;
          line-height: 34px;
          & > span {
            font-size: 34px;
          }
        }
      }
    }
    .airplane {
      width: 412px;
      height: 48px;
      display: block;
      margin: 100px auto 0 auto;
    }
    .end-text {
      color: #3C3C3C;
      font-size: 24px;
      line-height: 42px;
      width: 824px;
      text-align: left;
      margin: 77px auto;
      &::before {
        content: '';
        background: url('./image/quotes.png');
        width: 32px;
        height: 32px;
      }
    }
  }
  .footerImg {
    background-image: url('https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/grass.webp');
    background-size: contain;
    background-repeat: repeat-x;
    height: 56px;
    width: 100%;
  }
}
</style>
