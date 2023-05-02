<script>
import Header from './components/myHeader.vue';
import Main from './components/Main-wrapper.vue';
import Footer from './components/myFooter.vue';
import axios from 'axios';
import {store} from './data/store';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
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
  <Footer />

</template>

<style lang="scss">
@import './scss/main.scss';
</style>