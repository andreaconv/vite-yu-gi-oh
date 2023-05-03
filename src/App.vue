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
        }
      })
      .then(result => {
        store.resultArray = result.data.data;
        console.log(store.resultArray)
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>

  <Header />
  <Main />

</template>

<style lang="scss">
@import './scss/main.scss';
</style>