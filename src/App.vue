<template>
  <div id="main">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
  <my-footer></my-footer>
</template>

<style>
  html{
    padding: 0;
    margin: 0;
    background-color: #f3f3f3;
  }
  body{
    font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  a{
    text-decoration: none;
    outline: none;
    color: #2B2B2B;
  }

  .loading{
    display:block; text-align: center
  }

  #main{
    width: 50%;
    margin: 0 auto;
    margin-top: 4em;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px 0px rgba(236, 236, 236, 0.86);

  }

  @media screen and (max-width: 700px) {
    #main{
      width: 100%;
    }
  }
</style>

<script>
  import Footer from './components/Footer.vue'
  export default{
    components: {
      'my-footer': Footer
    }
  }
</script>
