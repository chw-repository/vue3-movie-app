<template>
  <Headline />
  <Search />
</template>

<script>
import Headline from "../components/Headline.vue";
import Search from "../components/Search.vue";

export default {
  name: "Home",
  components: {Search, Headline}
}
</script>

<style lang="scss" scoped>

</style>