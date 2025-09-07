<template>
  <div class="root">
    <div class="header">經典案例</div>
    <section class="out-container">
      <div class="page-affix">
        <page-affix />
      </div>
      <div class="inner-container">
        <div class="main">
          <div v-for="data in caseData" :key="data.title" class="part">
            <div class="title">{{ data.title }}</div>
            <div class="avatars">
              <div
                v-for="item in data.list"
                :key="item.friendId || item.id"
                class="avatar"
              >
                <a :href="item.personWebLink || item.friendUrl" target="_blank">
                  <a-tooltip placement="bottom">
                    <template #title>
                      <span>{{ item.friendInfo || item.personWebInfo }}</span>
                    </template>
                    <img
                      :src="item.friendPic || item.personWebPic"
                      alt="头像"
                      class="img"
                    />
                  </a-tooltip>
                  <p class="name">{{ item.friendName || item.personWebName }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer" />
    </section>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
import PageAffix from '@/components/page-affix/index.vue';
import {
  fetchFriendColumn,
  fetchFriendPlatform,
  fetchFriendAuth,
} from '@/service/api';
import shuffle from 'shuffle.ts';
import {membersFileUrl} from "@/utils/filePath";

const picUrl = membersFileUrl;

export default {
  components: { PageAffix },
  setup() {
    const state = reactive({
      caseData: [
        { title: '「小眾 = 在細分領域追求極致」', list: [''] },
        { title: '「小眾 ≠ 缺乏魅力」', list: [''] },
        { title: '「小眾的光芒不一定最耀眼，但一定是最溫暖的」', list: [''] },
      ],
    });

    const getFriendColumn = async () => {
      const { rows } = await fetchFriendColumn();
      state.caseData[0].list = shuffle(rows).map((item: any) => ({
        ...item,
        friendPic: `${picUrl}${item.friendPic}`,
      }));
    };

    const getFriendPlatform = async () => {
      const { rows } = await fetchFriendPlatform();
      state.caseData[1].list = shuffle(rows).map((item: any) => ({
        ...item,
        friendPic: `${picUrl}${item.friendPic}`,
      }));
    };

    const getFriendAuth = async () => {
      const { rows } = await fetchFriendAuth();
      const list = shuffle(rows).slice(0, 30);
      state.caseData[2].list = shuffle(list).map((item: any, i: number) => {
        return {
          ...item,
          id: item.personWebId,
          personWebPic: `${picUrl}${item.personWebPic}`,
        };
      });
    };

    onMounted(() => {
      getFriendColumn();
      getFriendPlatform();
      getFriendAuth();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@font: #3f3f3f;
@title: #585858;

.header {
  background: url('./image/headerbg.jpg');
  color: white;
  text-shadow: 0 3px 4px #00000040;
  font-size: 4rem;
  padding: 75px 0;
}
.page-affix {
  margin: 0 auto 65px auto;
  width: fit-content;
  height: fit-content;
  ::v-deep .ant-anchor-link {
    display: inline-block;
    .ant-anchor-link-title {
      border-right: 1px solid #7e7e7e;
      border-bottom: none;
      width: 36px;
      line-height: 30px;
      white-space: pre-line;
      padding: 0;
    }
  }
}
.footer {
  padding: 107px;
}
.out-container {
  background-image: url('https://infra.ai-mcn.tv:9001/prod-api/profile/nmcn/video_matrix/public_assets/out_background.webp');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  max-height: min-content;
  padding: 37px 0;
  .inner-container {
    background-image: url('https://infra.ai-mcn.tv:9001/prod-api/profile/nmcn/video_matrix/public_assets/inner_background.webp');
    background-size: 100% 100%;
    width: 75%;
    margin: 0 auto;
    min-height: 100vh;
    max-height: min-content;
    padding: 20px 0;
  }
}

.main {
  padding: 57px;
  margin: 0 auto;
  .title {
    font-size: 2rem;
    font-weight: lighter;
    color: @title;
  }
  .avatars {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 24%;
    justify-content: flex-start;
    width: 65%;
    padding: 24px;
  }
  .avatar {
    width: 20%;
    min-width: 108px;
    .img {
      height: 75px;
      width: 75px;
      border: 7px solid #ffe4e4;
      box-sizing: content-box;
      box-shadow: 0 4px 4px #00000040;
      margin-bottom: 7px;
    }
    .name {
      font-size: 1.1rem;
      color: @font;
    }
  }
}
</style>
