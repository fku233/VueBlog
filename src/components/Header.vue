<template>
    <div>
      <header>
        <div id="header-warp">
          <div id="logo"><a v-link="{name:'home'}">OwO</a></div>
          <nav id="nav" class="clear">
            <a href="https://github.com/x-pengg/vue-gh-pages/tree/md/markdown" target="_blank">Write</a>
            <a v-link="{ name: 'article', params: { title: 'about.md' } }">About</a>
            <a v-link="{ name: 'article', params: { title: 'friends.md' } }">Friends</a>
          </nav>
        </div>
      </header>
    </div>
</template>
<style>

  #header-warp {
    line-height: 65px;
    height: 65px;
  }

  #logo,#nav {
    height: 100%;
  }

  #logo {
    display: inline-block;
    float: left;
  }

  #logo>a {
    font-size: 22px;
    color: #444;
  }

  #nav {
    float: right;
  }

  #nav a {
    font-size: 14px;
    margin-left: 30px;
  }
</style>
<script>

</script>
