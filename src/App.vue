<template>
  <MainPage />
  <CartDrawer />
</template>

<script>
import MainPage from './components/MainPage.vue'
import CartDrawer from './components/CartDrawer.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    CartDrawer
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
