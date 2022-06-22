<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <h1 :style="{color: $store.state.colorCode}">
      {{$store.state.count}}
      </h1>
      <div class="counter-squared">
        {{$store.state.count}}
        <sup>2</sup>=
        {{$store.getters.squarecounter}}
      </div>
    <div>
      <button @click="$store.dispatch('decrease')">-</button>
      <button @click="$store.dispatch('increase')">+</button>
      </div>
      <input v-model="$store.state.colorCode"
      placeholder="enter your color"
      type="text"
      />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      
    }
  },
  methods:{
   
  }
}
</script>
