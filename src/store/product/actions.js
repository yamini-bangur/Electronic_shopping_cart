export default {
	async loadProducts (context) {
		const siteUrl = context.getters.siteUrl
		const response = await fetch(`${siteUrl}/products/`, {
			method: 'Get'
		})
		const responseData = await response.json()
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to load!')
			throw error
		}
		const products = []
		for (const key in responseData.data) {
			const product = {
				id: (responseData.data[key]._id !== '') ? responseData.data[key]._id : '',
				productName: (responseData.data[key].name !== '') ? responseData.data[key].name : '',
				price: (responseData.data[key].price !== '') ? responseData.data[key].price : '0',
				images: (responseData.data[key].productPictures.length > 0) ? responseData.data[key].productPictures : null,
				description: (responseData.data[key].description !== '') ? responseData.data[key].description : ''
			}
			products.push(product)
		}
		context.commit('setProducts', products)
	},
	async loadProduct (context, payload) {
		const siteUrl = context.getters.siteUrl
		const productId = payload.id
		const response = await fetch(`${siteUrl}/products/${productId}`, {
			method: 'Get'
		})
		const responseData = await response.json()
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to load!')
			throw error
		}
			const product = {
				id: (responseData.data._id !== '') ? responseData.data._id : '',
				productName: (responseData.data.name !== '') ? responseData.data.name : '',
				price: (responseData.data.price !== '') ? responseData.data.price : '0',
				images: (responseData.data.productPictures.length > 0) ? responseData.data.productPictures : null,
				description: (responseData.data.description !== '') ? responseData.data.description : ''
			}
		return product
	}
}
