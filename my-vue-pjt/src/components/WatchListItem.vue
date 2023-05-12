<template>
  <div>
    <p :class="{ 'striked': watchItem.isStriked }" @click="toggleStrike">
      {{ watchItem.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props:{
    watchItem: Object,
  },
  methods: {
    toggleStrike() {
    this.isStriked = !this.isStriked
    this.$store.dispatch('toggleStrike', this.watchItem)
  }
  }
}
</script>

<style>
  .striked {
    text-decoration: line-through;
  }
</style>