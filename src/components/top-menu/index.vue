<template>
  <div class="root">
    <a-dropdown v-for="menu in menuData" :key="menu.key">
      <a class="ant-dropdown-link" @click.prevent>
        <i :class="menu.iconClass" style="color: #0e131b;"></i>
        {{ menu.title }}
        <DownOutlined v-if="menu.children" />
      </a>
      <template #overlay>
        <div v-if="menu.children">
          <a-menu class="header-menu" :selectedKeys="[]">
            <div v-for="item in menu.children" :key="item.key">
              <a-menu-item v-if="!item.children" :key="item.key">
                <a :href="item.href" target="_blank">{{ item.title }}</a>
              </a-menu-item>
              <div v-else>
                <a-sub-menu :key="item.key" :title="item.title">
                  <a-menu-item v-for="sub in item.children" :key="sub.key" style="fontSize: 16px">
                    <a :href="sub.href" target="_blank">{{ sub.title }}</a>
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
    }
    return {
      menuData,
      openItem
    }
  }
})
</script>

<style lang="less" scoped>
.root {
  display: flex;
  gap: 32px;
}
.ant-dropdown-link {
  color: #000;
  font-size: 18px;
}
.header-menu {
  font-size: 16px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>