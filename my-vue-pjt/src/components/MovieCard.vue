<template lang="">
  <div>
    <img :src="movieImgUrl" alt="">
    <p>{{ movieItem.title }}</p>
    <p>{{ movieItem.overview }}</p>
    
  </div>
</template>
<script>
export default {
  name: 'MovieCard',
  props:{
    movieItem: Object
  },
  methods: {
    movieImage() {
      const poster_path = this.movieItem.poster_path
      this.movieImgUrl = 'https://image.tmdb.org/t/p/w185' + poster_path
    }
  },
  created(){
    this.movieImage()
  }
}
</script>
<style lang="">
  
</style>
<!-- /hi -->