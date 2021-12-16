<template>
  <IndecisionVue></IndecisionVue>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <CounterVue title="Entraron" :start="15"></CounterVue>
  <CounterVue title="Salieron" :start="10"></CounterVue> -->
</template>

<script>
// import CounterVue from './components/Counter.vue';
import IndecisionVue from './components/Indecision.vue';

export default {
  name: 'App',
  components: {
    // CounterVue,
    IndecisionVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
