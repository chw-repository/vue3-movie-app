<template>
  <div>
    {{ movie.Title }}
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>