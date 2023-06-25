<template>
  <div class="root">
    <div class="banner">
      <video
        style="width: 100%;"
        src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/intro.mp4" autoplay :muted="isMuted" loop></video>
      <div class="banner-content">
        <h1>同和新媒體矩陣</h1>
        <p>NMCN·小眾多頻道網絡</p>
      </div>
      <div class="banner-footer">
        <div :class="{'voice': true, 'open': !isMuted}"  @click="() => isMuted = !isMuted"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      isMuted: true
    });
    return {
      ...toRefs(state)
    }
  },
}
</script>

<style lang="less" scoped>
  .root {
    .banner {
      position: relative;
      width: 100%;
      height: 100vh;
      .banner-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        text-align: center;
        & > h1 {
          font-size: 40px;
          font-weight: 500;
          color: #ffffff;
          text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.64);
          letter-spacing: 16px;
        }
        & > p {
          text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.64);
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
          margin: 4px 0 28px;
          letter-spacing: 8px;
        }
      }
      &::after{
        content: '';
        height: 100%;
        width: 100%;
        background: url(./shadow.png);
        position: absolute;
        left: 0;
        top: 0;
      }
      .banner-footer {
        .voice {
          position: absolute;
          left: 70px;
          bottom: 35px;
          width: 35px;
          height: 35px;
          background: url('./voice.jpeg') no-repeat;
          background-size: cover;
          cursor: pointer;
          z-index: 2;
        }
        .open {
          background-position: 0 -35px;
        }
      }
    }
  }
</style>
