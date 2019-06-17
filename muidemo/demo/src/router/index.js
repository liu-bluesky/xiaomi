import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/index/login/login'
import index from '../views/index'
import userlogin from '../components/userlogin/userlogin'
import footer from '../components/footer/footer'
import nav from '../components/nav/nav'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/userlogin',
      name:'userlogin',
      component:userlogin
    }

  ]
})
