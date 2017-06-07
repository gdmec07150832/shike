import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import user from '@/components/user'
import login from '@/components/login/login'
import reg from '@/components/login/reg'
import mymsg from '@/components/user-li/mymsg'
import write from '@/components/user-li/write'
import collection from '@/components/user-li/collection'
import Album from '@/components/user-li/Album'
import Suggest from '@/components/user-li/Suggest'
import friend from '@/components/user-li/friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/mymsg',
      name: 'mymsg',
      component: mymsg
    },
    {
      path: '/write',
      name: 'write',
      component: write
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/Album',
      name: 'Album',
      component: Album
    },
    {
      path: '/Suggest',
      name: 'Suggest',
      component: Suggest
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    }
  ]
})
