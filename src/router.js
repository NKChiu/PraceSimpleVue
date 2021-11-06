import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/home.vue';
import Ch1_1 from './pages/ch1_1.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path: '/home', component: Home},
        {path: '*', component: Home},
    ]
})

// 解決重複按同一個路由噴錯問題
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;