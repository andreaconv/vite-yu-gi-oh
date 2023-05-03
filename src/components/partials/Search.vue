<script>
import { store } from '../../data/store'

export default {
  name: 'Search',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <select v-model="store.optionType" class="m-3" name="" id="">
    <option v-for="cardType in store.typeArray" :key="cardType" :value="cardType">{{ cardType }}</option>
  </select>
  
  <button @click="$emit('searchCards')" >Cerca</button>
</template>

<style lang="scss" scoped>
  select{
    border-radius: 5px;
    padding: 5px;
    min-width: 150px;
    border: 0;
  }

  button{
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
  }
</style>