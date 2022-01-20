import { createStore } from 'vuex'
import productModule from './product/index.js'
import cartModule from './cart/index.js'
export default createStore({
  state () {
		return {
			siteUrl: 'https://electronics-shopping.herokuapp.com'
		}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	prods: productModule,
	cart:  cartModule
  }

})
