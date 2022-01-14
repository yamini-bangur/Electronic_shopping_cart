<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<div v-if="isLoading">
			<base-spinner></base-spinner>
		</div>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="{invalid: !productname.isRequired}">
			<label for="productname">Product Name</label>
			<input type="text" id="productname" v-model.trim="productname.val"  @blur="clearValidity('productname')"/>
			<p v-if="!productname.isRequired">Product name must not be empty.</p>
		</div>
		<div class="form-control" :class="{invalid: !price.isRequired}">
			<label for="price">price</label>
			<input type="number" id="price" v-model.trim="price.val"  @blur="clearValidity('price')"/>
			<p v-if="!price.isRequired">Price must be greater than 0.</p>
		</div>
		<div class="form-control">
			<label for="description" >Description</label>
			<textarea id="description" rows="5" v-model.trim="description.val"></textarea>
		</div>
		<base-button>Save</base-button>
	</form>
	</div>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseDialog from '../UI/BaseDialog.vue'
import BaseSpinner from '../UI/BaseSpinner.vue'
export default {
	props: ['id', 'type'],
	emits: ['save-data'],
	components: {
		BaseButton,
		BaseDialog,
		BaseSpinner
	},
	data () {
		return {
			selectedProduct: null,
			isLoading: false,
			formIsValid: false,
			productname: {
				isRequired: true,
				val: ''
			},
			price: {
				isRequired: true,
				val: ''

			},
			description: {
				isRequired: false,
				val: ''
			}
		}
	},
	created () {
		this.getProduct()
	},
	methods: {
	getProduct () {
		if (this.type === 'edit') {
			this.siteUrl = this.$store.getters['prods/siteUrl']
			this.selectedProduct = this.$store.getters['prods/getProducts'].find(product => product.id === this.id)
			if (this.selectedProduct === undefined) {
				this.loadProduct()
			} else {
				this.productname.val = this.selectedProduct.productName
				this.price.val = this.selectedProduct.price
				this.description.val = this.selectedProduct.description
			}
		}
	},
	async loadProduct () {
			this.isLoading = true
			try {
			this.selectedProduct = await this.$store.dispatch('prods/loadProduct', { id: this.id })
			if (this.selectedProduct) {
				this.productname.val = this.selectedProduct.productName
				this.price.val = this.selectedProduct.price
				this.description.val = this.selectedProduct.description
			}
			} catch (error) {
				this.error = error.message || 'something went wrong!'
			}
			this.isLoading = false
		},
	handleError () {
		this.error = null
	},
	clearValidity (input) {
      this[input].isRequired = true
	},
    validateForm () {
      this.formIsValid = true
      if (this.productname.val === '') {
        this.productname.isRequired = false
        this.formIsValid = false
      }
      if (!this.price.val || this.price.val < 0) {
        this.price.isRequired = false
        this.formIsValid = false
      }
    },
    submitForm () {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }
      const formData = {
        name: this.productname.val,
        price: this.price.val,
		description: this.description.val,
		type: this.type
		}
		if (this.type === 'edit') {
			formData.id = this.id
		}

      this.$emit('save-data', formData)
    }
  }

}
</script>
<style scoped>

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input , textarea{
    width: 35em;
    padding: 2px 20px;
    background-color: rgb(241, 241, 241);
    border: none;
    border-radius: 5px;
	border: 1px solid #ccc;
	display: block;
}
input {
	height: 3em;
}
input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: rgb(3, 122, 122);
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: rgb(3, 122, 122) solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
