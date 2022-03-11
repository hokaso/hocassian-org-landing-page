<template>
  <router-view v-slot="{ Component }">
    <suspense>
      <component :is="Component" />
    </suspense>
  </router-view>
  <!-- <router-view /> -->
</template>

<style>
html body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  min-width: 1280px;
  max-width: 1920px;
  margin: auto;
}
#app {
  font-family: PingFang TC, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
