<template>
  <div class="root">
    <div class="about-container">
      <img src="./about.png" alt="嗨, 很高興你能看到這裡" class="thx" />
      <img src="./image_15.png" alt="" class="image15" />
      <img src="./image_20.png" alt="" class="image20" />
      <div class="content">
        <img src="./techbuddies_01_1.png" alt="" class="contentborderlefttop" />
        <p>
          「同和新媒體矩陣」由多個亞文化小眾KOL組成，迄今為止已為數百位天才級視頻博主提供了多元化的信息流傳播服務。在保證原創作者多項權益不受侵害的同時，我們也在持續建設為一個成熟的去中心小眾亞文化推廣平台。在未來，我們將發展多元業務架構，在保障自身穩步發展的同時，以「讓所有人都能自由地表達，讓所有主體都有機會被關注」為願景，致力於打造新媒體信息流生產流水線，通過技術賦能創作，藉由機器自動生成多模態內容並分發，以創造最大化的輿論價值。
        </p>
        <img
          src="./techbuddies_02_1.png"
          alt=""
          class="contentborderrightbottom"
        />
      </div>
      <img src="./image_21.png" alt="" class="image21" />
      <img src="./image_16.png" alt="" class="image16" />
      <img src="./image_17.png" alt="" class="image17" />
      <graph />
      <div class="page-affix">
        <page-affix />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import graph from './graph.vue';
import PageAffix from '@/components/page-affix/index.vue';
export default {
  components: { graph, PageAffix },
};
</script>

<style lang="less" scoped>
.about-container {
  position: relative;
  background: #6d84a6;
  padding: 160px 0 20px 0;
  min-height: 1350px;
  .imageposition (@left, @top, @right, @bottom) {
    position: absolute;
    left: @left;
    top: @top;
    right: @right;
    bottom: @bottom;
  }
  .image15 {
    .imageposition(90px, 70px, unset, unset);
  }
  .image20 {
    .imageposition(unset, 300px, 150px, unset);
  }
  .image21 {
    .imageposition(370px, unset, unset, 220px);
  }
  .image16 {
    .imageposition(unset, unset, 227px, 260px);
  }
  .image17 {
    .imageposition(190px, unset, unset, 380px);
  }
  .content {
    position: relative;
    left: -4%;
    max-width: 1030px;
    margin: 0 auto;
    z-index: 2;
    .contentborderlefttop {
      position: absolute;
      left: -65px;
      top: -50px;
    }
    .contentborderrightbottom {
      position: absolute;
      right: -85px;
      bottom: -70px;
    }
    p {
      text-indent: 3rem;
      margin: 0 auto;
      color: white;
      font-size: 1.4rem;
      text-shadow: 0 3px 5px #00000050;
      letter-spacing: 0.2px;
    }
  }
  .thx {
    position: absolute;
    right: 0;
    top: -85px;
  }
}
.page-affix {
  margin: 0 auto 65px auto;
  width: fit-content;
  height: fit-content;
  ::v-deep .ant-anchor-link {
    display: inline-block;
    .ant-anchor-link-title {
      color: #e0e0e0;
      border-right: 1px solid #f1f1f1;
      border-bottom: none;
      width: 36px;
      line-height: 30px;
      white-space: pre-line;
      padding: 0;
    }
  }
  ::v-deep .ant-anchor-link-active > .ant-anchor-link-title {
    color: #fff;
  }
}
</style>
