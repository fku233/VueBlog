import list from './components/List.vue'
import article from './components/Article.vue'
import { SITENAME } from './config'

export default (router) => {
  router.map({
    '/home': {
      name: 'home',
      component: list,
      title: SITENAME
    },
    '/article/:name': {
      name: 'article',
      component: article,
      title: SITENAME
    }
  })

  router.redirect({
    '*': '/home'
  })
}
