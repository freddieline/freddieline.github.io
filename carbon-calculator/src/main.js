import Vue from 'vue'
import App from './App.vue'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'
import Column2D from 'fusioncharts/viz/column2d';
Vue.config.productionTip = false;

Vue.use(VueFusionCharts, FusionCharts, FusionTheme, Column2D);


new Vue({
  render: h => h(App),
}).$mount('#app')
