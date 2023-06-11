<template>
  <div id="background" class="root">
    <div class="container">
      <page-affix class="page-affix"/>
      <div class="introduce">
        <span class="emphasis">在如今</span>
        物慾主導一切的社會大背景下，屬於我們的那份獨一無二，逐漸被浮躁的“主流文化”所掩蓋。不知從何時起，本應百家爭鳴的輿論環境漸漸喪失活力，拖尾效應日益嚴重，我們在流量大鰐們精心設計的營銷手段下，無意識地抛去了自己的話語權，一頭扎進早先就設置好的社交圈中，企圖收穫更多的認同感；然後慢慢發現：只有那些將自己包裝得最精緻的人們，才能得到更多注目，獲得更多流量——於是我們開始了一輪又一輪的跟風，換取所謂的“社會認同”以期自我實現……
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageAffix from '@/componetns/page-affix/index.vue';

export default {
  components: {PageAffix}
}
</script>

<style lang="less" scoped>
.root {
  height: 100vh;
  width: 100%;

  .container {
    // min-height: 1080px;
    height: 100%;
    background-image: url("https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/snow.webp");
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    //z-index: 3;

    .page-affix {
      // max-height: 100vh;
      background: transparent;
      margin: 10% 10% 0 0;
      // left: 154px;
      // top: 60%;
      // position: absolute;
      // color: black;
      // transform: translateY(-50%);
      // z-index: 1;
    }

    .introduce {
      line-height: 38px;
      font-size: 24px;
      width: 50%;
      height: min-content;
      text-align: left;
      margin-top: 10%;
      @media screen and (max-width: 1280px) {
        font-size: 18px;
        line-height: 30px;
      }

      .emphasis {
        @media screen and (max-width: 1280px) {
          font-size: 56px;
        }
        font-size: 72px;
      }
    }
  }
}
</style>