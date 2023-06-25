import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

import {
  Row,
  Col,
  Anchor,
  Button,
  Carousel,
  Tooltip,
  Dropdown,
  Menu
} from 'ant-design-vue'
app.use(Row)
  .use(Col)
  .use(Anchor)
  .use(Button)
  .use(Carousel)
  .use(Tooltip)
  .use(Dropdown)
  .use(Menu)
  .use(router)
  .use(store)
  .mount('#app');