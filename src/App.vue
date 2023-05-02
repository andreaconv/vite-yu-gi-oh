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
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        console.log(result.data)
      })
    }
  },
  mounted(){
    // this.getApi();
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