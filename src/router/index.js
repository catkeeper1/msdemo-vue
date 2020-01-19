import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: () => import('@/views/Home/Main.vue'),
    children: [{
      path: 'User',
      name: 'User',
      component: () => import('@/views/User/UserList.vue'),
    }]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue')
  },
  // {
  //   path: '/HelloI18n',
  //   name: 'HelloI18n',
  //   component: () => import('@/components/HelloI18n.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router