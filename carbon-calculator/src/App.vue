<template>
  <div id="app">
    <Results msg="Caesarsalad"/>
  </div>
</template>

<script>
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    Results
  }
}
</script>

<style>
body{  
  margin: 0px;
  padding: 0px;

}
h1{  
  margin: 0px;
  padding: 0px;
}
h2{  
  font-size: 14px;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7000bb;
  margin: 0px;
  padding: 0px;
}
</style>
