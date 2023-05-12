<template lang="">
  <div>
    <h1>WatchList</h1>
    <WatchListForm/>
    <WatchListItem 
      v-for="(movie, index) in movies" :key="index" :watchItem="movie"
    />
  </div>
</template>
<script>
import WatchListForm from '@/components/WatchListForm.vue'
import WatchListItem from '@/components/WatchListItem.vue'

export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
    WatchListItem,
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
}
</script>

<style lang="">

</style>