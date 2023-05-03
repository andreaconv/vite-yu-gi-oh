<script>
import Header from './components/myHeader.vue';
import Main from './components/Main-wrapper.vue';
import axios from 'axios';
import {store} from './data/store';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: {
          num: store.cardNumber,
          offset: store.cardOffset,
          type: store.optionType,
        }
      })
      .then(result => {
        store.resultArray = result.data.data;
      })
    },
    getAllCards(){
      axios.get(store.apiUrl)
      .then(result => {
        const cards = result.data.data;
        cards.forEach(card => {
          if (!store.typeArray.includes(card.type)) {
            store.typeArray.push(card.type)
          }
        });
      })
    }
  },
  mounted(){
    this.getApi();
    this.getAllCards();    
  },
  computed(){
    // console.log(this.store.optionType)
  }
}
</script>

<template>

  <Header />
  <Main @startFilterCards="getApi" />

</template>

<style lang="scss">
@import './scss/main.scss';
</style>