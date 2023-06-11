<template>
  <div class="root">
    <div class="header">「加入我們的同時，我們也在加入你」</div>
    <section class="cooperation-container">
      <div class="page-affix">
        <page-affix />
      </div>
      <div class="main">
        <div style="display: flex; justify-content: space-between">
          <div class="developer">
            <h1>For UGC創作者</h1>
            <p>
              我們誠摯地歡迎您<a href="https://wenjuan.feishu.cn/m?t=s4O7goGI2gti-foyg" target="_blank">加入</a>我們的新媒體矩陣。作為我們的一員，您將能夠自由地運用我們提供的各類先進的創作工具和上述矩陣服務，以便於優化和創新您的創作流程（DIT）。通過我們的AI技術，您的原創作品將自由重組，並以多元素材的形式在多個平台上投放，以此來實現矩陣化運營，擴大公眾輿論價值。
            </p>
          </div>
          <div class="space"></div>
          <div class="creator">
            <h1>For PGC生產者</h1>
            <p>
              我們熱烈歡迎您與我們<a href="https://wenjuan.feishu.cn/m?t=s4O7goGI2gti-foyg" target="_blank">建立</a>合作關係，以您的主體所在領域的業務形式客制化AIGC生產流水綫，在矩陣化運營的同時提升品牌聲量、完善相關產業内容生態，打造「商品/服務IP」用以積纍垂直領域精準流量。未來我們的雲服務產品「同合雲」將集成各类智能模型与服务，以「明确分类、高度集成、精致包装」的三大定律为宗旨，為源源不斷創造内容流提供堅實的技術後盾。
            </p>
          </div>
        </div>
        <div class="disclaimers">
          <h1>开源共建</h1>
          <p>
            我們將「同和新媒體矩陣」架構代碼全部開源，旨在推動各類中小型主體摒棄技術壁壘，聚焦於創造本身，通過最少量的信息輸入與極低的學習成本和操作門檻，快速構建自定義DIT工作流+AIGC生產流水綫，實現矩陣化輸出内容，以創造最大化的輿論價值；如果您是開發者，可以直接前往<a href="https://github.com/hokaso/hocassian-media-matrix" target="_blank">此處</a>，根據文檔指引搭建屬於自己的新媒體矩陣，並且邀請身邊的優質創作者入駐；若期望快速冷啟動部署與敏捷開發，您還可以<a href="https://wenjuan.feishu.cn/m?t=s4O7goGI2gti-foyg" target="_blank">聯係</a>我們採購相關的技術支持。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageAffix from '@/componetns/page-affix/index.vue';
export default {
  components: { PageAffix },
};
</script>

<style lang="less" scoped>
@title: #3e3e3e;
@font: #5c5c5c;

.header {
  background: url("https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/cooperation_background.webp");
  color: white;
  text-shadow: 0 3px 4px #00000040;
  font-size: 4rem;
  padding: 96px 0;
}
.cooperation-container {
  padding: 175px;
  display: flex;
  align-items: center;
  .page-affix {
    margin-right: 200px;
  }
  .main {
    width: 75%;
    text-align: left;
    max-width: 1010px;
    h1 {
      font-size: 2.1rem;
      color: @title;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: #7e7e7e;
        margin-top: 7px;
      }
    }
    p {
      font-size: 1.1rem;
      color: @font;
    }
    .developer {
      max-width: 472px;
    }
    .space {
      content: '';
      display: block;
      width: 25%;
    }
    .creator {
      max-width: 472px;
    }
  }
}
@media screen and (max-width: 1280px) {
  .cooperation-container {
    padding: 75px;
  }
}
</style>
