<script>
import Search from './partials/Search.vue';
import Research from './partials/Research.vue';
import Card from './partials/Card.vue';
import {store} from '../data/store';

export default {
  name: 'Main-wrapper',
  components: {
    Search,
    Research,
    Card,
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    searchCardsFilter(){
      this.$emit('startFilterCards')
    }
  }
}
</script>

<template>
  <div class="my-main">
    <div class="container p-0">

      <Search @searchCards="searchCardsFilter" />

      <div class="main-wrapper p-5">

        <Research />

        <div class="cards-container">

          <Card
            v-for="card in store.resultArray"
            :key="card.id" 
            :image="card.card_images[0]"
            :name="card.name"
            :type="card.type"/>

        </div>

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/partials/vars' as *;

.my-main{
  background-color: $primary-color;

  .container{
    .main-wrapper{
      background-color: white;

      .cards-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

      }

    }
  }
}

</style>