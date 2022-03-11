<template>
  <div class="affix">
    <a-anchor :affix="false">
      <a-anchor-link
        v-for="item in list"
        :key="item.href"
        :title="item.label"
        :href="item.href"
      />
    </a-anchor>
  </div>
</template>

<script>
import { anchorList } from './data';


export default {
  props: {
    list: {
      type: Array,
      default: () => anchorList
    }
  },
  setup() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.affix {
  width: fit-content;
  ::v-deep .ant-anchor-ink {
    position: static;
  }
  ::v-deep .ant-anchor-link-title {
    padding: 5px;
    border-bottom: 1px solid #7E7E7E;
    font-size: 20px;
    color: #858585;
    &::before {
      display: inline-block;
      content: ' ';
      width: 33px;
      height: 37px;
      vertical-align: middle;
    }
  }
  ::v-deep .ant-anchor-link-active > .ant-anchor-link-title {
    color: #000000;
  }
  ::v-deep .ant-anchor-link-active > .ant-anchor-link-title::before {
    content: url('./activeIcon.png');
    vertical-align: middle;
  }
}
</style>