<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <div id="mainContainer">
    <h1>clothing for men and women</h1>
		<div v-if="isLoading">
			<base-spinner></base-spinner>
		</div>
    <div id="containerClothing">
      <!-- JS rendered code -->

      <product-items
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :images="product.images"
        :productName="product.productName"
        :brand="product.brand"
        :price="product.price"
      ></product-items>
    </div>
  </div>
</template>
<script>
import ProductItems from '../components/product/ProductItems.vue'
import BaseDialog from '../components/UI/BaseDialog.vue'
import BaseSpinner from '../components/UI/BaseSpinner.vue'
export default {
  components: {
    ProductItems,
    BaseDialog,
    BaseSpinner
  },
  data () {
    return {
      isLoading: true,
      error: null
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
  methods: {
    async loadProducts () {
      this.isLoading = true
      try {
        await this.$store.dispatch('prods/loadProducts')
      } catch (error) {
        this.error = error.message || 'something went wrong!'
      }
      this.isLoading = false
    },
    handleError () {
      this.error = null
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
