import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueProgressBar from 'vue-progressbar'

import routers from './routers'
import * as filters from './filters/index';

// vue filter
Object.keys(filters).forEach(f => Vue.filter(f, filters[f]));

// vue router
Vue.use(VueRouter)
const router = new VueRouter()
routers(router)

// vue resource
Vue.use(VueResource)

//vue progressBar
Vue.use(VueProgressBar, {
  color: '#2B2B2B',
  failedColor: 'red',
  height: '2px'
})

// 根节点
const app = Vue.extend(require('./app.vue'))
router.start(app, 'app')
