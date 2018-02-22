// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import home from "./components/home/home";
import produce from "./components/produce/produce";
import service from "./components/service/service";
import demo from "./components/demo/demo";
import firm from "./components/firm/firm";
import contact from "./components/contact/contact";



Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', directives: home },
  { path: '/home', component: home },
  { path: '/produce', component: produce },
  { path: '/service', component: service },
  { path: '/demo', component: demo },
  { path: '/firm', component: firm },
  { path: '/contact', component: contact },
];

const router = new VueRouter({
  routes,
  linkActiveClass:'active'
});

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  render: h => h(App),
  components:{App},
  template: '<App/>'
});
