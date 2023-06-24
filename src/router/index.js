import Vue from "vue";
import Router from 'vue-router'
import Main from '@/router/modules/main.js'
import Login from '@/router/modules/login.js'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...Login,
    ...Main,
  ]
})
