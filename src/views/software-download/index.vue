<template>
  <div class="root">
    <div class="container">
      <div class="page-affix">
        <page-affix/>
      </div>
      <div class="content">
        <a-carousel autoplay>
          <div v-for="(item, i) in carouselList" :key="i">
            <img :src="item.img" width="420" height="580" class="shadow"/>
          </div>
        </a-carousel>
        <div class="info">
          <div class="title">同合智创工具箱</div>
          <p class="intro">
            同合智创工具箱是您新媒体运营的得力助手，凭借其多样的自动化功能，助您轻松应对各类视频内容的智能剪辑需求，从而实现高效、专业的视频制作。
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
          <div class="invite-code" @click="copyInviteCode">
            &nbsp邀请码：gitruck（点我复制）
          </div>
          <div class="tips">
            Tips：在使用中若出现未知问题（如闪退、频闪、黑屏、无法联网等），请选择「以管理员身份运行」，若还是无法解决，可下载快照版替代使用（部分机型不支持稳定版架构）；注意，快照版的启动时间可能较长。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageAffix from '@/components/page-affix/index.vue';
import {defineComponent} from 'vue';
import { message } from 'ant-design-vue';


export default defineComponent({
  components: {PageAffix},
  setup() {
    const downloadList = {
      windows: [
        {
          label: 'Win 稳定版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_win_stable.zip',
        },
        {
          label: 'Win 快照版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_win_release.zip',
        },
      ],
      apple: [
        {
          label: 'Mac 稳定版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_mac_stable.zip',
        },
        {
          label: 'Mac 快照版',
          link: 'https://ops.hocassian.com:9000/prod-api/profile/web/broadcast/exe/gitruck_broadcast_mac_release.zip',
        },
      ],
    };
    const carouselList = [
      {img: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合智创工具箱/工具箱主界面01.webp'},
      {img: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合智创工具箱/工具箱主界面02.webp'},
      {img: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合智创工具箱/工具箱主界面03.webp'},
      {img: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合智创工具箱/工具箱主界面04.webp'},
      {img: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合智创工具箱/工具箱主界面05.webp'},
      {img: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合智创工具箱/工具箱主界面06.webp'},
    ];
    const hrefList = [
      {
        label: '使用教程',
        href: 'https://hocassian.feishu.cn/docx/XIhfdg8bRotRaExgb8NcTCrbnPg',
      },
      {
        label: 'Mac端"已损坏，无法打开"如何解决？',
        href: 'https://hocassian.cn/archives/tech/11134',
      },
    ];

    const openLink = (link: string) => {
      window.open(link);
    };

    const copyInviteCode = async() => {
      try {
        await navigator.clipboard.writeText("gitruck");
        message.success('复制成功');
      } catch (err) {
        console.error("Error copying text: ", err);
    }

    }

    const handleDownload = (link: string) => {
      window.open(link);
    }
    return {
      carouselList,
      downloadList,
      openLink,
      hrefList,
      handleDownload,
      copyInviteCode
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
    justify-content: center;
    gap: 13%;
    width: 80%;

    .page-affix {
      max-width: fit-content;

      ::v-deep .ant-anchor-link-title {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }

    .content {
      display: flex;
      gap: 48px;

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
    margin-bottom: 14px;

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
.invite-code{
  width: 220px;
  height: 32px;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 900;
  color:#a96b72;
  line-height: 32px;
  text-align: center;
  margin-bottom: 26px;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
