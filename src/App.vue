<template>
  <div id="main">
    <my-header></my-header>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<style>
  body{
    font-family: 'Microsoft JhengHei', '微軟正黑體', 'Microsoft YaHei', '微软雅黑', Tahoma, Verdana, sans-serif;
    font-size: 14px;
  }

  a{
    text-decoration: none;
    outline: none;
    color: #2B2B2B;
  }

  #main{
    width: 50%;
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    #main{
      width: 100%;
    }
  }
  @media screen and (max-width: 1000px) {
    #main{
      width: 90%;
    }
  }
</style>

<script>
  import Header from './components/Header.vue'
  export default{
    components: {
      'my-header': Header
    }
  }
</script>
