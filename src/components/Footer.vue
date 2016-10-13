<template>
    <div id="footer">
      <a v-link="{ name: 'article', params: { title: 'about.md' } }">About</a>
      <a v-link="{ name: 'article', params: { title: 'friends.md' } }">Friends</a>
      <a v-link="{name:'home'}" class="❤">❤</a>
      <a href="https://github.com/x-pengg/vue-gh-pages/tree/md/markdown" target="_blank">Write</a>
      <a href="https://github.com/x-pengg" target="_blank">GitHub</a>
      <div class="by_github">
        <a href="https://github.com/x-pengg/vue-gh-pages" target="_blank">Fork me on GitHub.</a>
        <a>All rights reserved.</a>
      </div>
      <div class="in_heart"><h3>我一向如此，你随意评价</h3></div>
    </div>
</template>
<style>

  #footer{
    max-width: 780px;
    text-align: center;
    font-size: 12px;
    padding: 60px 0px;
    margin: 0 auto;
  }

  #footer a{
    color: #A6A6A6;
    margin: 0px 12px;
  }

  #footer .by_github{
    margin: 5px 0px 0px 0px;
  }

  #footer .by_github a {
    margin-left: 0px;
    color: #d6d6d6;
    margin: 0px 2px;
  }

  #footer .❤:hover{
    color: red;
  }
</style>
<script>

</script>
