<template>
	<div>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="deleteSuccess" title="Success" @close="handleError">
    <p>{{ deleteSuccessMsg }}</p>
  </base-dialog>
  <div id="mainContainer">
    <h1>Electronic Appliances <span class="addProduct"><base-button @click="addProductLink" title="Add Product" mode="flat"><i class="fa fa-plus" aria-hidden="true"></i></base-button></span> </h1>

		<div v-if="isLoading">
			<base-spinner></base-spinner>
		</div>
    <div id="containerClothing">
      <!-- JS rendered code -->

      <product-items
        v-for="(product,index) in products"
        :key="product.id"
        :id="product.id"
        :images="product.images"
        :productName="product.productName"
        :brand="product.brand"
        :price="product.price"
		@delete-Product="deleteProduct(index)"
      ></product-items>

    </div>
	<BasePagination
      :current-page="currentPage"
      :page-count="pageCount"
      class="product_list"
      @nextPage="pageChangeHandle('next')"
      @previousPage="pageChangeHandle('previous')"
		@loadPage="pageChangeHandle" />
  </div>
  </div>
</template>
<script>
import ProductItems from '../components/product/ProductItems.vue'
import BaseDialog from '../components/UI/BaseDialog.vue'
import BaseSpinner from '../components/UI/BaseSpinner.vue'
import BaseButton from '../components/UI/BaseButton.vue'
import BasePagination from '../components/UI/BasePagination.vue'
export default {
  components: {
    ProductItems,
    BaseDialog,
	BaseSpinner,
	BaseButton,
	BasePagination
  },
  data () {
    return {
		isLoading: true,
		error: null,
		deleteSuccess: false,
		deleteSuccessMsg: '',
		itemPerPage: 3,
		currentPage: 1,
		pageCount: 0
    }
  },
  computed: {
    products () {
      return this.$store.getters['prods/getProducts']
    }
  },
  created () {
    this.loadProducts()
  },
//   async mounted () {
//     try {
//        await this.$store.dispatch('prods/loadProducts')
//       this.pageCount = Math.ceil(
//         100 / this.itemPerPage
//       )
//     } catch (error) {
//       throw error
//     }
//   },
  methods: {
    async loadProducts () {
      this.isLoading = true
      try {
		await this.$store.dispatch('prods/loadProducts', { page: this.currentPage - 1, limit: this.itemPerPage })
		this.pageCount = Math.ceil(
        10 / this.itemPerPage)
      } catch (error) {
        this.error = error.message || 'something went wrong!'
      }
      this.isLoading = false
	},
	async pageChangeHandle (value) {
      switch (value) {
        case 'next':
          this.currentPage += 1
          break
        case 'previous':
          this.currentPage -= 1
          break
        default:
          this.currentPage = value
      }
       await this.$store.dispatch('prods/loadProducts', { page: this.currentPage - 1, limit: this.itemPerPage })
    },
    handleError () {
      this.error = null
	},
	addProductLink () {
		this.$router.push('/products/addProduct')
	},
	async deleteProduct (index) {
		try {
			const response = await this.$store.dispatch('prods/deleteProducts', { index })
			if (response.success) {
				this.deleteSuccess = true
				this.deleteSuccessMsg = response.message
				setTimeout(() => {
					this.deleteSuccess = false
					this.deleteSuccessMsg = ''
					}, 2000)
			}
			} catch (error) {
        this.error = error.message || 'something went wrong!'
      }
	}

  }
}
</script>
<style scoped>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}
h1 {
  width: 90%;
  margin: auto;
  padding: 110px 0 50px 0;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: capitalize;
}
#containerClothing {
  display: grid;
  grid-gap: 70px 20px;
  grid-template-columns: repeat(5, 1fr);
  width: 90%;
  margin: auto;
  padding-bottom: 40px;
}
</style>
