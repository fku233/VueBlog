<template>
  <div id="articles">
    <h2 v-if="!items.length">载入中...</h2>
    <ul>
      <li v-for="item in items">
        <a v-link="{ name: 'article', params: { title: item.name } }">{{ item.name | asTitle }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { API } from '../store/index'

  export default{
    data() {
      return {
        items: []
      }
    },
    route:{
      data({ to }) { // transition.to 路由对象
        document.title = to.title;
        this.setItems();
      }
    },
    methods:{
      setItems(){
        this.$Progress.start();
        this.$http.get(API)
        .then((response) => {
          this.items = response.data;
          this.$Progress.finish();
        })
        .catch(function(response) {
          this.$Progress.fail();
          console.log(response)
        })
      }
    }
  }

</script>

<style>

  ul,ol{
    list-style: none;
  }

  #articles ul li{
    padding: 1em;
    border-bottom: 1px solid #eee;
    line-height: 4;
    font-size: 1.6em;
    font-weight: 600;
  }

</style>
