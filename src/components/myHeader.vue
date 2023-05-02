<script>
export default {
  name: 'Header',

}
</script>

<template>

<div class="ac-row">
  <img src="../assets/download.jpeg" alt="">
  <h1>Yu-Gi-Oh Api</h1>
</div>

</template>

<style lang="scss" scoped>

@use '../scss/partials/general' as *;
@use '../scss/partials/mixin' as *;

  .ac-row{
    height: 100px;
    padding: 2rem;
    @include centerFlex('vertical');

    img{
      margin-right: 1rem;
    }
  }

</style>