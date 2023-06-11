<template>
  <page-video />
  <background id="background" />
  <network-status id="network-status" />
  <homeland id="our-mission" />
  <case id="case" />
  <cooperation id="cooperation" />
  <about id="about" />
  <div class="footer" id="footer">
    <p>
      Copyright@ 2017-{{ new Date().getFullYear() }} 同和新媒體矩陣·版權所有
    </p>
    <a href="https://beian.miit.gov.cn/">粤ICP备2022093510号-2</a>
  </div>
</template>

<script lang="ts">
import PageVideo from '../video/index.vue';
import Background from '../background/index.vue';
import NetworkStatus from '../network-status/index.vue';
import Homeland from '../homeland/index.vue';
import Case from '../case/index.vue';
import Cooperation from '../cooperation/index.vue';
import About from '../about/index.vue';
export default {
  components: { PageVideo, Background, NetworkStatus, Homeland, Case, Cooperation, About },
  setup() {
    return {

    };
  },
};
</script>

<style lang="less" scoped>
.footer {
  background: #4b5e7a;
  color: white;
  font-size: 1.1rem;
  padding: 65px;
  p {
    margin: 2px;
  }
  a {
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
