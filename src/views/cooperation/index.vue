<template>
  <div class="root">
    <div class="header">「加入我們的同時，我們也在加入你」</div>
    <section class="cooperation-container">
      <div class="page-affix">
        <page-affix />
      </div>
      <div class="main">
        <div class="disclaimers">
          <h1>免責聲明</h1>
          <p>
            本矩陣全體軟件代碼遵循MIT開源許可，在任何情況下，作為作者&版權所有者，「同和新媒體矩陣開發團隊」不得對任何索賠、損害或其他責任負責，無論是在訴訟中合同、侵權行為或其他，源於、出於或與此相關與軟件或軟件的使用或其他交易；以此框架衍生出的任何形式的矩陣皆應當履行向公眾傳播有益信息的義務，且不應當與加盟方（創作者）簽訂任何不平等條約（例如侵占版權、賬戶共管、賬戶轉讓等），如果您發現某個矩陣內發布的信息涉及色情、暴力、侵權等任何不合法範疇，請立即同步該矩陣擁有者下架相關內容，必要時還可藉助當地法律維權。
          </p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div class="developer">
            <h1>開發者</h1>
            <p>
              如果您是開發者，可以直接前往<a href="https://github.com/hokaso/hocassian-media-matrix" target="_blank">此處</a>，根據文檔指引搭建屬於自己的新媒體矩陣，並且邀請身邊的優質創作者入駐；若期望快速冷啟動部署與敏捷開發，您還可以聯繫我們採購相關的技術支持。
            </p>
          </div>
          <div class="space"></div>
          <div class="creator">
            <h1>創作者</h1>
            <p>
              如果您是創作者，可以入駐我們的新媒體矩陣，幫助我們不斷招新擴張。在未來，我們會努力建設為亞文化領域的分佈式綜合服務平台，成為萬千創造者最有力的基礎服務平台。
            </p>
          </div>
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
