export default {
	addToCart(context, payload) {
		const prodId = payload.id;
		const products = context.rootGetters['prods/getProducts'];
		const product = products.find(prod => prod.id === prodId);
		context.commit('addProductToCart', product);
	  },
	  removeFromCart(context, payload) {
		context.commit('removeProductFromCart', payload);
	  }
}