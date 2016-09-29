<template>
  <h2>body</h2>
  <grid></grid>
</template>

 <script>
  import grid from '../components/grid.vue'

  export default {
    data() {
      return {
        apiUrl: 'http://localhost:3000/api/photos',
        rsData: []
      }
    },
    components: {
      grid
    },
    methods: {
      getPhotos() {
        this.$http.get(this.apiUrl).then((response) => {
            console.log(response.data);
            this.rsData = response.data;
            this.$broadcast('add', this.rsData);
          }).catch((response) => {
            console.log(response);
          })
      }
    },
    ready() {
      this.getPhotos();
    }
  }
</script>

