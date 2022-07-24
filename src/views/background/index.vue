<template>
  <div id="background" class="root">
    <div class="container">
      <page-affix class="page-affix"/>
      <div class="introduce">
        <span class="emphasis">在如今</span>
        資本主導一切的市場大背景下，屬於我們的那份獨一無二，逐漸被他們製造出的“主流文化”所掩蓋。不知從何時起，我們為了迎合“主流”，主動拋去了自己的特點，一頭扎進他們早先就設置好的社交圈中，企圖收穫更多的認同感；然後慢慢發現：只有那些將自己包裝得最精緻的人們，才能得到更多注目，獲得更多流量——於是我們開始了一輪又一輪的跟風，一邊為資本家們賣命，一邊又將被剝削過的工資還給他們換取所謂的“社會認同”以期自我實現……
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
    background-image: url("./snow.png");
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

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