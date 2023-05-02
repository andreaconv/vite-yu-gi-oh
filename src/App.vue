<script>
import Header from './components/myHeader.vue';
import Search from './components/Search.vue';
import Main from './components/Main-wrapper.vue';
import Footer from './components/myFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Main,
    Footer,
  }
}
</script>

<template>

  <Header />
  <Search />
  <Main />
  <Footer />

</template>

<style lang="scss">

</style>