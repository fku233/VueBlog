<template>
    <div id="article">
      <h2>{{title}}</h2>
      <article v-html="html"></article>
      <div id="footer">
        {{size}}字
      </div>
    </div>
</template>
<script>
  import { DETAIL_API } from '../store/index'
  import { asTitle, asHtml } from '../filters/index'

  export default{
    data() {
      return {
        html: '<h2>载入中...</h2>',
        title: '',
        size:0
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
            this.size = Math.floor(response.body.length/2);

          })
          .catch(function(response) {
            this.$Progress.fail();
            console.log(response);
          })
      }
    },
    route:{
      data({ to }) { // transition.to 路由对象
        let title = `${asTitle(to.params.title)}`;
        document.title = `${title} - ${to.title}`;
        this.title = title;
        this.setHtml(DETAIL_API(encodeURI(to.params.title)));
      }
    }
  }

</script>

<style>

  #article h2{
    font-weight: normal;
  }

  article{
    padding: 1em 0;
    font-size: 17px;
  }

  #footer{
    width: 100%;
    text-align: center;
    margin-top: 2em;
    font-size: 16px;
  }

  code{
    font-size: 10px;
  }

  @import "../assets/monokai_sublime.css";

</style>
