import { createStore } from 'vuex'
import { formatCurrency } from '../helpers/numbers'

export default createStore({
  state: {
    showDrawer: false,
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
    },
    openDrawer (state) {
      state.showDrawer = true
    },
    closeDrawer (state) {
      state.showDrawer = false
    }
  },
  actions: {
    addProduct ({ commit }, { product }) {
      commit('addProduct', product)
    },
    clearCart ({ commit }) {
      commit('clearCart')
    },
    openDrawer ({ commit }) {
      commit('openDrawer')
    },
    closeDrawer ({ commit }) {
      commit('closeDrawer')
    }
  },
  modules: {
  }
})
