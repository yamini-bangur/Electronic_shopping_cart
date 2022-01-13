export default {
    getProducts (state) {
        return state.products
	},
	siteUrl (state, getters, rootState, rootGetters) {
		return rootState.siteUrl
	}

}
