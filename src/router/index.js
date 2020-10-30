import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import home from '../components/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },

  {
    path: '/login',
    component: login,
  },
  {
    path: '/home',
    component: home
  }
]

const router = new VueRouter({
  routes
})


//挂载路由导航守卫

router.beforeEach((to,from,next)=>{
if(to.path === '/login'){
  return next();
}

//去 浏览器的SessionStorage拿token， 可能有值可能空值
const tokenstr = window.sessionStorage.getItem('token');
if (!tokenstr){
  return next('/login');
}
next();

})



export default router
