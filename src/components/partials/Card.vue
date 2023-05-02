<script>
export default {
  name: 'Card',
  props:{
    image: Object,
    name: String,
    type: String,
  }
}
</script>

<template>

  <div class="ac-card mb-4">
      <img :src="image.image_url">
      <div id="name">{{ name }}</div>
      <div id="type">{{ type }}</div>
  </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.ac-card{
  width: 18%;
  background-color: $primary-color;
  text-align: center;

  img{
    width: 100%;
  }

  #name,
  #type{
    background-color: $primary-color;
    padding: 1rem 0;
  }

  #name{
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }
}

</style>