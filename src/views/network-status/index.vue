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
              作爲KOL新青年，我們不應在大環境下失聲。每個人都擁有自己對生活的定義，不必迎合大衆審美，那麽就退出那些設定好的遊戲，另起爐灶。
            </div>
          </div>
          <img src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/irregular_2.webp" class="second-img" />
          <div class="desc">
            <span>在生物界，</span>與復雜的自然環境一併產生的還有物種的多樣性，正是千千萬萬個生命之間的互相依存，才讓我們的星球有了生機和色彩。而對於擁有精神世界的我們來說，各異的文化、不同的思想、偶然的靈感……在它們的影響與碰撞下，百花齊放的文明誕生了。而世俗勢力企圖減少思想的維度，收束思考的層次，通過沒有硝煙的「和平演變」使拖尾效應不斷弱化，其結果就是——我們的情感逐漸失調，「精神溫室效應」不斷加劇，忘記了自己於世的使命；我們開始慢慢難以被打動，難以傾聽那共鳴之聲，我們的精神逐漸變得穩定、遲鈍、不再起伏……
          </div>
        </a-col>
      </a-row>
      <img src="./image/parper-airplane.png" class="airplane" />
      <div class="end-text">
        嘗試著將自己抽身出來吧，慢慢拾回那些曾經被遺棄的閃光點，漸漸回到出發的營地。你會發現，總會有那麼一群可愛的人們，在最初的起點等著你——這裡是未曾被資本侵蝕的小眾空間，這裡沒有攀比，沒有虛榮，沒有浮躁與喧囂，即便失去了物質的包裝，存在於自己心底的那個純淨的世界，也會在志同道合的伙伴們的鼓勵下不斷發光發熱，充盈自信心直至邁出腳步……於是乎，擦肩而過的我們，懷著相似卻不同的理想，走著相似而不同的道路，唱著同樣的一首歌，演奏著這個世界的交響。
      </div>
      <footer class="footerImg" />
    </section>
  </div>
</template>

<script lang="ts">
import PageAffix from '@/componetns/page-affix/index.vue';
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
