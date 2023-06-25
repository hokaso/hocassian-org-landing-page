<template>
  <div class="root">
    <div class="container">
      <div class="page-affix">
        <page-affix />
      </div>
      <div class="content">
        <a-carousel autoplay>
          <div v-for="(item, i) in carouselList" :key="i">
            <img :src="item.img" width="420" height="580" class="shadow" />
          </div>
        </a-carousel>
        <div class="info">
          <div class="title">同合智創工具箱</div>
          <p class="intro">
            同合智創工具箱是您新媒體運營的得力助手，憑藉其多樣的自動化功能，助您輕鬆應對各類視頻內容的智能剪輯需求，從而實現高效、專業的視頻製作。
          </p>
          <div class="download-box">
            <div v-for="(obj, key) in downloadList" :key="key" class="flex">
              <button
                v-for="item in obj"
                :key="item.link"
                :class="{
                  button: true,
                  windows: key === 'windows',
                  apple: key === 'apple',
                }"
                @click="handleDownload(item.link)"
              >
                <img
                  v-if="key === 'windows'"
                  src="./image/windows.png"
                  width="30"
                  height="26"
                />
                <img
                  v-if="key === 'apple'"
                  src="./image/apple.png"
                  width="22"
                  height="26"
                />
                {{ item.label }}
              </button>
            </div>
          </div>
          <div class="href-box">
            <div v-for="a in hrefList" :key="a.href" @click="openLink(a.href)">
              {{ a.label }}
            </div>
          </div>
          <div class="tips">
            Tips：部分機型不支持穩定版架構，目前正積極適配中，若出現未知問題（如閃退、頻閃、黑屏等），可下載快照版替代使用；注意，快照版的啓動時間可能較長。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageAffix from '@/components/page-affix/index.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { PageAffix },
  setup() {
    const downloadList = {
      windows: [
        {
          label: 'Win 穩定版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_win_stable.zip',
        },
        {
          label: 'Win 快照版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_win_release.zip',
        },
      ],
      apple: [
        {
          label: 'Mac 穩定版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_mac_release.zip',
        },
        {
          label: 'Mac 快照版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_mac_stable.zip',
        },
      ],
    };
    const carouselList = [
      { img: require('./image/first.jpg') },
      { img: require('./image/second.jpg') },
      { img: require('./image/third.jpg') },
    ];
    const hrefList = [
      { label: '使用教程', href: '' },
      {
        label: '如何安裝ffmpeg依賴？',
        href: 'https://hocassian.cn/archives/tech/11142',
      },
      {
        label: 'Mac端"已損壞，無法打開"如何解決？',
        href: 'https://hocassian.cn/archives/tech/11134',
      },
    ];

    const openLink = (link: string) => {
      window.open(link);
    };

    const handleDownload = (link: string) => {
      window.open(link);
    }
    return {
      carouselList,
      downloadList,
      openLink,
      hrefList,
      handleDownload,
    };
  },
});
</script>

<style lang="less" scoped>
.root {
  position: relative;
  background: #a96b72;
  height: 100vh;
  min-height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    align-items: center;
    gap: 15%;
    width: 80%;
    .page-affix {
      max-width: fit-content;
      ::v-deep .ant-anchor-link-title {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }
    .content {
      flex: 1;
      display: flex;
      gap: 24px;
      .info {
        color: #fff;
        text-align: left;
        width: 352px;
        .title {
          font-weight: 700;
          font-size: 32px;
          margin-bottom: 16px;
        }
        .intro {
          font-size: 18px;
        }
      }
    }
  }
  .download-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 32px 0;
    .flex {
      display: flex;
      gap: 24px;
    }
  }
  ::v-deep .ant-carousel {
    width: 420px;
    height: 580px;
  }
  // slick-slide slick-active slick-current
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 610px;
    overflow: hidden;
  }
  .href-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 18px;
    margin-bottom: 32px;
    & > div {
      color: #fff;
      line-height: 20px;
      border-bottom: 1px solid #fff;
      width: fit-content;
      cursor: pointer;
    }
  }
}
.shadow {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 20px;
  line-height: 22px;
  color: #fff;
  border-radius: 8px;
  border: none;
  height: 48px;
  width: 168px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  &.windows {
    &:hover {
      background: #124d7a;
    }
    background: #165c91;
  }
  &.apple {
    color: #626262;
    background: #dbdbdb;
    &:hover {
      background: #f3f3f3;
    }
  }
}
</style>