<template>
    <div id="article">
      <h2 class="title">{{title}}</h2>
      <article v-html="html"></article>
      <div id="words">
        {{words}}
      </div>
    </div>
</template>
<script>
  import { DETAIL_API } from '../store/index'
  import { asTitle, asHtml } from '../filters/index'

  export default{
    data() {
      return {
        html: '<h2 class="loading">载入中...</h2>',
        title: '',
        words:'',
      }
    },
    filters: {
      asTitle, asHtml
    },
    methods:{
      setHtml(apiUrl){
        this.$Progress.start();
        this.$http.get(apiUrl)
          .then((response) => {
              this.$Progress.finish();
            this.html = asHtml(response.body);
            this.words = Math.floor(response.body.length/2)+'字';

          })
          .catch(function(response) {
            this.$Progress.fail();
          })
      }
    },
    route:{
      data({ to }) { // transition.to 路由对象
        let title = `${asTitle(to.params.name)}`||to.params.name;
        document.title = `${title} - ${to.title}`;
        this.title = title;
        history.pushState({},'', window.location.hash.replace(encodeURI(to.params.name),title));
        this.setHtml(DETAIL_API(encodeURI(title+'.md')));
      }
    }
  }

</script>

<style>

  #article h2{
    font-weight: normal;
  }

  #article{
    padding: 2em;
    font-size: 17px;
    line-height: 2em;
  }

  #article .title{
    font-size: 2em;
    border-bottom: 1px solid gainsboro;
    padding-bottom: .4em;
  }

  #article a{
    color: #999;
    word-wrap: break-word;
  }

  #article a:hover{
    color: #2B2B2B;
  }

  #words{
    width: 100%;
    text-align: center;
    margin-top: 2em;
    font-size: 16px;
  }


  code{
    font-size: 12px;
    line-height: 1.5em;
  }

  @import "../assets/monokai_sublime.css";

</style>
