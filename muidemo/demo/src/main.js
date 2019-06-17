// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
localStorage.setItem('loginbool','false')
localStorage.setItem('user','null')
var loginbool = localStorage.getItem('loginbool')
var user = localStorage.getItem('user')

/* eslint-disable no-new */

// router.beforeEach((to,from,next)=>{
//   console.log(to.matched);
//   console.log(from);
//   if (to.matched.some(res => res.meta.loginbool)){
//     console.log(res);
//   }
// })

const store = new Vuex.Store({
  state:{
    // 类似计算属性
    onOff:false,
    territory:false,
    path:'/userlogin',
    currentlogin:loginbool,
    username:user
  },
  getters:{
    // 类似methodes

  },
  mutations:{
    getonOff(state,bol){
      state.onOff=!bol
    },
    getterritory(state,bol){
      state.territory=!bol
    },
    getloginuser(state,val){
      state.username=val
    }
}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
  // render:c =>c(App)
})
