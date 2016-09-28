import list from './components/List.vue'
import article from './components/Article.vue'
import config from './config'

export default (router) => {
  router.map({
    '/list': {
      name: 'list',
      component: list,
      title: config.homeTitle
    },
    '/article/:fileName': {
      name: 'article',
      component: article,
      title: config.homeTitle
    }
  })

  router.redirect({
    '*': '/list'
  })
}
