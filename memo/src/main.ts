import Vue from "vue";
import App from "./App.vue";

import ItemData from "./model/ItemData";
import CateEnums from "./model/CateEnums";
import Category from "./model/CateEnums.ts";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// let item1 = new ItemData(1, Category.Study, "study", "study now");
// console.log(item1);
