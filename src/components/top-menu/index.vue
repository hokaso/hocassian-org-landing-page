<template>
  <div class="root">
    <a-dropdown v-for="menu in menuData" :key="menu.key">
      <a class="ant-dropdown-link" @click.prevent>
        <i
          :class="menu.iconClass"
          :style="{
            color: '#2a2a2aa3',
            transform: 'scale(0.5)',
            fontSize: menu.fontSize + 'px',
          }"
        ></i>
        {{ menu.title }}
        <DownOutlined v-if="menu.children" />
      </a>
      <template #overlay>
        <div v-if="menu.children">
          <a-menu class="header-menu" :selectedKeys="[]">
            <div v-for="item in menu.children" :key="item.key">
              <a-menu-item v-if="!item.children" :key="item.key">
                <a v-if="!item.target" :href="item.href" target="_blank" class="inline-flex-middle">
                  <i
                    :class="item.iconClass"
                    :style="{
                      color: '#2a2a2aa3',
                      transform: 'scale(0.5)',
                      fontSize: item.fontSize + 'px',
                      width: item.fontSize + 'px'
                    }"
                    class="inline-flex-center"
                  ></i>
                  {{ item.title }}
                </a>
                <a v-else @click="scrollToTarget(item.href)" target="_blank" class="inline-flex-middle">
                  <i
                    :class="item.iconClass"
                    :style="{
                      color: '#2a2a2aa3',
                      transform: 'scale(0.5)',
                      fontSize: item.fontSize + 'px',
                      width: item.fontSize + 'px'
                    }"
                    class="inline-flex-center"
                  ></i>
                  {{ item.title }}
                </a>
              </a-menu-item>
              <div v-else>
                <a-sub-menu :key="item.key" class="inline-flex-middle">
                  <template #title>
                    <i
                      :class="item.iconClass"
                      :style="{
                        color: '#2a2a2aa3',
                        transform: 'scale(0.5)',
                        fontSize: item.fontSize + 'px',
                        width: item.fontSize + 'px'
                      }"
                      class="inline-flex-middle"
                    ></i>
                    {{ item.title }}
                  </template>
                  <a-menu-item
                    v-for="sub in item.children"
                    :key="sub.key"
                    style="fontSize: 16px"
                  >
                    <a :href="sub.href" target="_blank" class="inline-flex-middle">
                      <i
                        :class="sub.iconClass"
                        :style="{
                          color: '#2a2a2aa3',
                          transform: 'scale(0.5)',
                          fontSize: sub.fontSize + 'px',
                          width: sub.fontSize + 'px'
                        }"
                        class="inline-flex-middle"
                      ></i>
                      {{ sub.title }}
                    </a>
                  </a-menu-item>
                </a-sub-menu>
              </div>
            </div>
          </a-menu>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import { menuData } from './data';
export default defineComponent({
  components: { DownOutlined },
  setup() {
    const openItem = (link: string) => {
      window.open(link);
    };
    const scrollToTarget = (id?: string) => {
      if (id) {
        document.getElementById(id)?.scrollIntoView()
      }
    }
    return {
      menuData,
      openItem,
      scrollToTarget
    };
  },
});
</script>

<style lang="less" scoped>
.root {
  display: flex;
  gap: 45px;
}
.ant-dropdown-link {
  color: #000;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.header-menu {
  font-size: 16px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  /deep/ .ant-menu-title-content {
    display: inline-flex;
    align-items: center;
  }
}
.inline-flex-middle {
  display: inline-flex;
  align-items: center;
}
.inline-flex-center {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
