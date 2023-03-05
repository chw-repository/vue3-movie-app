<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID">
        {{ movie }}
      </MovieItem>
    </div>
  </div>
</template>

<script>

import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieList",
  components: {MovieItem},
  data() {
    return {
      movies: []
    }
  }
}
</script>

<style scoped>

</style>