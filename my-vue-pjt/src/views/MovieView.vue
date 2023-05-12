<template lang="">
  <div>
    <MovieCard
    v-for="(movie, index) in movieData" :key="index" :movieItem="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import { mapState } from 'vuex'


export default {
  name: 'MovieView',
  components: {
    MovieCard
  },
  computed: {
    ...mapState({
      movieData:state => state.movieData
    })
  },
  created(){
    console.log(this.movieData)
  },
};
</script>

<style lang="">
  
</style>