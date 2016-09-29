<template>
  <img v-for="item in items" :src="item.photo_url" width="200" height="200">
  <div v-if="loading" transition="bounce">loading...</div>
</template>

<style>
  .bounce-transition {
    display: inline-block; /* 否则 scale 动画不起作用 */
  }
  .bounce-enter {
    animation: bounce-in .5s;
  }
  .bounce-leave {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        loading: false,
        items: []
      }
    },
    events: {
      add: function (items) {
        loading = true;
        this.items = this.items.concat(items);
      }
    }
  }
</script>


