```<template lang="">
  <div>
    <h1>Random</h1>
    <button @click="pickRandomMovie">PICK</button>
    <br>
    <img :src="movieImgUrl" alt="">
    <p id="randomMovieTitle">{{ movieTitle }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      movieImgUrl: null,
    }
  },
  computed: {
    ...mapState({
      movieData: state => state.movieData
    })
  },
  methods: {
    pickRandomMovie() {
      console.log(this.movieData)
      const randomIdx = Math.floor(Math.random() * 20)
      const randomMovie = this.movieData[randomIdx]
      const poster_path = randomMovie.poster_path
      this.movieImgUrl = 'https://image.tmdb.org/t/p/w185' + poster_path
      this.movieTitle = randomMovie.title
    }
  }
}
</script>

<style lang="">
  
</style>```