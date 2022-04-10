<template>
  <div class="root">
    <div class="menu">
      <a class="btn" href="https://video.hocassian.com" target="_blank">同和視頻矩陣</a>
      <a class="btn" href="https://material.hocassian.com" target="_blank">同和素材矩陣</a>
      <a class="btn" href="https://create.hocassian.com" target="_blank">同和創作矩陣</a>
    </div>
    <div class="banner">
      <video
        style="width: 100%"
        src="https://ops.hocassian.com:9000/prod-api/profile/video_matrix/intro.mp4" autoplay muted loop></video>
      <div class="banner-content">
        <h1>同和新媒體矩陣</h1>
        <p>NMCN·小眾多頻道網絡</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .root {
    .menu {
      position: absolute;
      right: 3%;
      top: 36px;
      z-index: 1000000;
      background-color: #0000003b;
      padding: 10px 40px 10px 0;
      border-radius: 10px;
      .btn {
        border-bottom: 2px solid #fff;
        display: inline-block;
        color: white;
        font-weight: 600;
        font-size: 15px;
        position: relative;
        margin-left: 44px;
        line-height: 28px;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
        cursor: pointer;
        text-decoration: none;
      }
    }
    .banner {
      position: relative;
      width: 100%;
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
    }
  }
</style>
