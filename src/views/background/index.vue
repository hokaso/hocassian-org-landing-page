<template>
  <div id="background" class="root">
    <div class="container">
      <page-affix class="page-affix"/>
      <div class="introduce">
        <span class="emphasis">在如今</span>
        物欲主导一切的社会大背景下，属于我们的那份独一无二，逐渐被浮躁的“主流文化”所掩盖。不知从何时起，本应百家争鸣的舆论环境渐渐丧失活力，拖尾效应日益严重，我们在流量大鳄们精心设计的营销手段下，无意识地抛去了自己的话语权，一头扎进早先就设置好的社交圈中，企图收获更多的认同感；然后慢慢发现：只有那些将自己包装得最精致的人们，才能得到更多注目，获得更多流量——于是我们开始了一轮又一轮的跟风，换取所谓的“社会认同”以期自我实现……
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageAffix from '@/components/page-affix/index.vue';

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