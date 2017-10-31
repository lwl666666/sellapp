// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import seller from 'components/seller/seller';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import 'common/stylus/index.styl';
import VueResourse from 'vue-resource';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResourse);
const routes = [
  { path: '/seller', component: seller },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
router.push('goods');

