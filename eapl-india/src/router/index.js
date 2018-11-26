import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ProductPage from '../views/ProductPage.vue';
import TimersInfo from '../views/TimersInfo.vue';
import CartPage from '../components/CartPage.vue';
// import ProductPage from '../views/ProductPage.vue';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: AboutPage
  }, {
    path: '/products',
    name: 'ProductPage',
    component: ProductPage,
    children:[
      {
        path: 'timersinfo/:id',
        name: 'TimersInfo',
        component: TimersInfo,
        props: true
      }
    ]
  }, {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  }]
});