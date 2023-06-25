<template>
  <header class="header">
    <img src="./image/logo.svg" height="80" />
    <div>
      <TopMenu />
    </div>
  </header>
</template>

<script lang="ts">
import TopMenu from '@/components/top-menu/index.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { TopMenu }
})
</script>

<style lang="less" scoped>
.header {
  background: #fff;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
}
</style>