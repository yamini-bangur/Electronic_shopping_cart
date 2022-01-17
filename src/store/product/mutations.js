export default {
	setProducts (state, payload) {
		state.products = payload.products,
		state.total_count = payload.total_count
		state.total_row = payload.total_row
	},
	setSelectedProduct (state, payload) {
		state.selectedProduct = payload
	}
}
