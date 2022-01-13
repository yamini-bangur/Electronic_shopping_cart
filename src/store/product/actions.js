export default {
	async loadProducts (context, payload) {
		const siteUrl = context.getters.siteUrl
		const response = await fetch(`${siteUrl}/products/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
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
				images: (responseData.data[key].productPictures.length > 0) ? responseData.data[key].productPictures : [],
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
				images: (responseData.data.productPictures.length > 0) ? responseData.data.productPictures : [],
				description: (responseData.data.description !== '') ? responseData.data.description : ''
			}
		return product
	},
	async saveProduct (context, payload) {
		const siteUrl = context.getters.siteUrl
		let url = ''
		if (payload.type === 'edit') {
			const productId = payload.id
			url = `${siteUrl}/products/update/${productId}`
		} else {
			url = `${siteUrl}/products/create`
		}
		const response = await fetch(`${url}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		})
		const responseData = await response.json()
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to load!')
			throw error
		} else {
			const products = context.state.products
			const product = {
				id: (responseData.data._id !== '') ? responseData.data._id : '',
				productName: (responseData.data.name !== '') ? responseData.data.name : '',
				price: (responseData.data.price !== '') ? responseData.data.price : '0',
				images: (responseData.data.productPictures.length > 0) ? responseData.data.productPictures : [],
				description: (responseData.data.description !== '') ? responseData.data.description : ''
			}
			if (payload.type === 'edit') {
			const index = products.map(prod => prod.id).indexOf(product.id)
			products.splice(index, 1)
			}
			products.push(product)
			context.commit('setProducts', products)
		}

		// 	const product = {
		// 		id: (responseData.data._id !== '') ? responseData.data._id : '',
		// 		productName: (responseData.data.name !== '') ? responseData.data.name : '',
		// 		price: (responseData.data.price !== '') ? responseData.data.price : '0',
		// 		images: (responseData.data.productPictures.length > 0) ? responseData.data.productPictures : null,
		// 		description: (responseData.data.description !== '') ? responseData.data.description : ''
		// 	}
		// return product
	},
	async deleteProducts (context, payload) {
		const siteUrl = context.getters.siteUrl
		const products = context.state.products
		const productId = products[payload.index].id
		const response = await fetch(`${siteUrl}/products/delete/${productId}`, {
			method: 'DELETE'
		})
		const responseData = await response.json()
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to load!')
			throw error
		}
		products.splice(payload.index, 1)
		return responseData
	}
}
