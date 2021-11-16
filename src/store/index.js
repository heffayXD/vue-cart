import { createStore } from 'vuex'
import { formatCurrency } from '../helpers/numbers'

export default createStore({
  state: {
    products: []
  },
  getters: {
    productCount: state => state.products.length,
    total: state => {
      const totalRaw = state.products.reduce((prev, product) => prev + product.price, 0)
      return formatCurrency(totalRaw)
    }
  },
  mutations: {
    addProduct (state, product) {
      state.products.push(product)
    },
    clearCart (state) {
      state.products = []
    }
  },
  actions: {
    addProduct ({ commit }, { product }) {
      commit('addProduct', product)
    },
    clearCart ({ commit }) {
      commit('clearCart')
    }
  },
  modules: {
  }
})
