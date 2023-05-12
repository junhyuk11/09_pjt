<template lang="">
  <div>
    <input 
      type="text"
      v-model.trim="movieTitle"
      @keyup.enter="createWatchListItem"
    >
    <button @click="createWatchListItem">Add</button>
  </div>
</template>
<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      movieTitle: null,
    }
  },
  methods: {
    createWatchListItem() {
      if (this.movieTitle) {
        this.$store.dispatch('createWatchListMovie', this.movieTitle)
      } else {
        alert('영화 제목을 입력하세요!')
      }
      this.movieTitle = null
    }
  }
}
</script>
<style lang="">
  
</style>