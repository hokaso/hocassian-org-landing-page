<template>
  <div class="root">
    <div class="header">「加入我们的同时，我们也在加入你」</div>
    <section class="cooperation-container">
      <div class="page-affix">
        <page-affix />
      </div>
      <div class="main">
        <div style="display: flex; justify-content: space-between">
          <div class="developer">
            <h1>For UGC创作者</h1>
            <p>
              我们诚挚地欢迎您<a href="https://wenjuan.feishu.cn/m?t=s4O7goGI2gti-foyg" target="_blank">加入</a>我们的新媒体矩阵。作为我们的一员，您将能够自由地运用我们提供的各类先进的创作工具和上述矩阵服务，以便于优化和创新您的创作流程（DIT）。通过我们的AI技术，您的原创作品将自由重组，并以多元素材的形式在多个平台上投放，以此来实现矩阵化运营，扩大公众舆论价值。
            </p>
          </div>
          <div class="space"></div>
          <div class="creator">
            <h1>For PGC生产者</h1>
            <p>
              我们热烈欢迎您与我们<a href="https://wenjuan.feishu.cn/m?t=s4O7goGI2gti-foyg" target="_blank">建立</a>合作关系，以您的主体所在领域的业务形式客制化AIGC生产流水线，在矩阵化运营的同时提升品牌声量、完善相关产业内容生态，打造「商品/服务IP」用以积累垂直领域精准流量。未来我们的云服务产品「同合云」将集成各类智能模型与服务，以「明确分类、高度集成、精致包装」的三大定律为宗旨，为源源不断创造内容流提供坚实的技术后盾。
            </p>
          </div>
        </div>
        <div class="disclaimers">
          <h1>开源共建</h1>
          <p>
            我们将「同合杉天新媒体矩阵」架构代码全部开源，旨在推动各类中小型主体摒弃技术壁垒，聚焦于创造本身，通过最少量的信息输入与极低的学习成本和操作门槛，快速构建自定义DIT工作流+AIGC生产流水线，实现矩阵化输出内容，以创造最大化的舆论价值；如果您是开发者，可以直接前往<a href="https://github.com/hokaso/hocassian-media-matrix" target="_blank">此处</a>，根据文档指引搭建属于自己的新媒体矩阵，并且邀请身边的优质创作者入驻；若期望快速冷启动部署与敏捷开发，您还可以<a href="https://wenjuan.feishu.cn/m?t=s4O7goGI2gti-foyg" target="_blank">联系</a>我们采购相关的技术支持。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageAffix from '@/components/page-affix/index.vue';
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
