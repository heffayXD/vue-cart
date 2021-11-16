<template>
  <div class="cart-drawer" v-bind:class="{ open: isOpen }">
    <div class="actions">
      <button v-on:click="closeDrawer()">✕</button>
    </div>
    <p v-if="productCount === 0">No Products</p>
    <ul v-if="productCount !== 0" class="items">
      <li v-for="(product, index) in products" :key="`product-${index}`">
        <h4>{{ product.title }} ({{ product.quantity }})</h4>
        <h5>${{ product.price }}</h5>
      </li>
    </ul>
    <h2>Total: {{ total }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CartDrawer',
  data () {
    return { isOpen: false }
  },
  methods: {
    closeDrawer () {
      this.isOpen = false
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    total () {
      return this.$store.getters.total
    },
    productCount () {
      return this.$store.getters.productCount
    }
  },
  watch: {
    productCount () {
      this.isOpen = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cart-drawer {
  width: 200px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.4s ease-out;
  &.open {
    transform: translateX(0);
  }

  .actions {
    width: 100%;
    text-align: left;
    button {
      font-weight: bold;
      font-size: 2em;
      background-color: transparent;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .items {
    padding: 1em;
    list-style-type: none;
    max-height: 300px;
    overflow-y: auto;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    margin: 0;
    li {
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      margin-bottom: 0.4em;
    }
  }
}
</style>
