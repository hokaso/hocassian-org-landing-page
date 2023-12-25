<template>
  <div class="root">
    <div class="banner">
      <video
        style="width: 100%;"
        src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/intro.mp4" autoplay :muted="isMuted" loop></video>
      <div class="banner-content">
        <h1>同和新媒體矩陣</h1>
        <p>NMCN·小眾多頻道網絡</p>
        <div class="products">
          <a href="#software-download" rel="noopener noreferrer">
            <h2>同合智创工具箱</h2>
          </a>
          <a href="https://autocut.video" target="_blank" rel="noopener noreferrer">
            <h2>autocut.video</h2>
            <p>自动剪辑神器</p>
          </a>
        </div>
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
        display: flex;
        flex-flow: column;
        align-items: center;
        & > h1 {
          font-size: 40px;
          font-weight: 500;
          color: #ffffff;
          text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.64);
          letter-spacing: 16px;
          padding-left: 10px;
          margin-bottom: 0.3em;
        }
        & > p {
          text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.64);
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
          margin: 4px 0 28px;
          letter-spacing: 8px;
        }
        & > .products {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-content: center;
          gap: 16px;
          & > a:hover {
            background: rgba(0, 0, 0, 0.64);
          }
          & > a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4px 16px;
            border-radius: 8px;
            border: thin solid white;
            color: white;
            text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.64);
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
            transition: background 0.3s;
            backdrop-filter: blur(8px);
            & > h2 {
              margin: 0;
              color: white;
              font-size: 16px;
            }
            & > p {
              line-height: 1;
              margin-bottom: 8px;
              font-size: 12px;
            }
          }
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
