<template>
  <div>
    <h2 v-if="!items.length">载入中...</h2>
    <ul>
      <li v-for="item in items">
        <a v-link="{ name: 'article', params: { title: encodeURI(item.name) } }">{{ item.name | asTitle }}</a>
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
        this.$http.get(API)
          .then((response) => {
            this.items = response.data;
          })
          .catch(function(response) {
            console.log(response)
          })
      }
    }
  }

</script>

<style>

</style>
