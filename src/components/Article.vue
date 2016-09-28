<template>
    <div>
      <article v-html="html"></article>
    </div>
</template>
<script>
  import { DETAIL_API } from '../store/index'
  import { asTitle } from '../filters/index'

  export default{
    data() {
      return {
         html:'<h2>载入中...</h2>',
      }
    },
    methods:{
      setHtml(apiUrl){
        this.$http.get(apiUrl,{
            headers: {"Accept": "application/vnd.github.v3.html"}
          })
          .then((response) => {
            var 宋佳欣 = this;
            var fr = new FileReader();
            fr.readAsText(response.body);
            fr.onloadend = function() {
              宋佳欣.$set('html', fr.result)
            }
          })
          .catch(function(response) {
            console.log(response)
          })
      }
    },
    route:{
      data({ to }) { // transition.to 路由对象
        const FILENAME = to.params.fileName;
        document.title = `${asTitle(FILENAME)} - ${to.title}`;
        this.setHtml(DETAIL_API(FILENAME));
      }
    }
  }

</script>

<style>
  /* Style from GitHub */
  .pl-c {
    color: #969896
  }
  .pl-c1, .pl-s .pl-v {
    color: #0086b3
  }
  .pl-e, .pl-en {
    color: #795da3
  }
  .pl-s .pl-s1, .pl-smi {
    color: #333
  }
  .pl-ent {
    color: #63a35c
  }
  .pl-k {
    color: #a71d5d
  }
  .pl-pds, .pl-s, .pl-s .pl-pse .pl-s1, .pl-sr, .pl-sr .pl-cce, .pl-sr .pl-sra, .pl-sr .pl-sre {
    color: #183691
  }
  .pl-v {
    color: #ed6a43
  }
  .pl-id {
    color: #b52a1d
  }
  .pl-ii {
    background-color: #b52a1d;
    color: #f8f8f8
  }
  .pl-sr .pl-cce {
    color: #63a35c;
    font-weight: bold
  }
  .pl-ml {
    color: #693a17
  }
  .pl-mh, .pl-mh .pl-en, .pl-ms {
    color: #1d3e81;
    font-weight: bold
  }
  .pl-mq {
    color: #008080
  }
  .pl-mi {
    color: #333;
    font-style: italic
  }
  .pl-mb {
    color: #333;
    font-weight: bold
  }
  .pl-md {
    background-color: #ffecec;
    color: #bd2c00
  }
  .pl-mi1 {
    background-color: #eaffea;
    color: #55a532
  }
  .pl-mdr {
    color: #795da3;
    font-weight: bold
  }
  .pl-mo {
    color: #1d3e81
  }
</style>
