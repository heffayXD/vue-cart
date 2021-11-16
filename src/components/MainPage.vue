<template>
  <div class="main-page">
    <button v-on:click="addToCart()">Add To Cart</button>
    <button v-on:click="clearCart()">Clear Cart</button>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    addToCart () {
      this.$store.dispatch({
        type: 'addProduct',
        product: { title: 'Item', quantity: 1, price: 1.99 }
      })
    },
    clearCart () {
      this.$store.dispatch({ type: 'clearCart' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-page {
  margin: 2em auto;
  button {
    font-size: 2em;
    display: block;
    margin: 1em auto;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
