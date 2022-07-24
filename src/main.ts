import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

import {
  Row,
  Col,
  Anchor
} from 'ant-design-vue'
app.use(Row)
  .use(Col)
  .use(Anchor)
  .use(router)
  .use(store)
  .mount('#app');