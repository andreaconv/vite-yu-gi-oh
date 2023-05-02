<script>
import Search from './partials/Search.vue';
import Research from './partials/Research.vue';

export default {
  name: 'Main-wrapper',
  components: {
    Search,
    Research,
  },
}
</script>

<template>
  <div class="my-main">
    <div class="container">

      <Search />

      <div class="main-wrapper p-5">

        <Research />

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/partials/vars' as *;

.my-main{
  height: 100vh;
  background-color: $primary-color;

  .container{
    height: 100%;
    .main-wrapper{
      height: 100%;
      background-color: white

    }
  }
}

</style>