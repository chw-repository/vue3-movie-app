<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from "../components/Headline.vue";
import Search from "../components/Search.vue";
import MovieList from "../components/MovieList.vue";

export default {
  name: "Home",
  components: {MovieList, Search, Headline}
}
</script>

<style lang="scss" scoped>

</style>