import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = ()=> import('@v/Home.vue')
const Demo = ()=> import('@v/demo.vue')
const Demo2 = ()=> import('@v/demo2.vue')
const Repositories = ()=> import('@v/Repositories.vue')
const lifeCycle = ()=> import('@v/lifeCycle.vue')
const watch = ()=> import('@v/watch.vue')
const computed = ()=> import('@v/computed.vue')

//塞尔达 zelda
const zelda = ()=> import('@v/Zelda/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '/demo2',
    name: 'ref,reactive',
    component: Demo2
  },
  {
    path: '/Repositories',
    name: 'Repositories',
    component: Repositories
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: lifeCycle
  },
  {
    path: '/watch',
    name: 'watch',
    component: watch
  },
  {
    path: '/computed',
    name: 'computed',
    component: computed
  },
  {
    path: '/zelda',
    name: 'zelda',
    component: zelda
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
