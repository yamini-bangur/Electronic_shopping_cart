export default {
    getProducts (state) {
        return state.products
	},
	getProductCount (state) {
        return state.total_count
	},
	siteUrl (state, getters, rootState, rootGetters) {
		return rootState.siteUrl
	}

}
