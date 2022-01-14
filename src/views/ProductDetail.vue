<template>
	<div>
 <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
<div id="containerProduct">
	<div v-if="isLoading">
			<base-spinner></base-spinner>
		</div>
  <div id="containerD" v-else>
    <div id="imageSection">
      <img
        id="imgDetails"
        :src="src" @error="defaultImage"
      />
    </div>
    <div id="productDetails">
      <h1>{{selectedProduct.productName}}</h1>
      <div id="details">
        <h3>Rs {{selectedProduct.price}}</h3>
        <h3>Description</h3>
        <p>
         {{selectedProduct.description}}
        </p>
      </div>
      <div id="productPreview">
        <h3>Product Preview</h3>
        <img v-for="image in selectedProduct.images" :key="image.id"
          :id="image.id"
          :src="`${siteUrl}/uploads/${image.img}`" @error="defaultImage"
        />
      </div>
      <div id="button"><base-button>Add to Cart</base-button>
		<base-button :to="editProduct()" mode="flat" link> <i class="fas fa-edit editProduct"></i></base-button>
		</div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import BaseDialog from '../components/UI/BaseDialog.vue'
import BaseSpinner from '../components/UI/BaseSpinner.vue'
import BaseButton from '../components/UI/BaseButton.vue'
export default {
	props: ['id'],
	components: {
    BaseDialog,
	BaseSpinner,
	BaseButton
  },
	data () {
		return {
			selectedProduct: null,
			isLoading: false,
			error: null,
			siteUrl: '',
			src: ''
		}
	},
	async created () {
		this.siteUrl = this.$store.getters['prods/siteUrl']
		this.selectedProduct = await this.$store.getters['prods/getProducts'].find(product => product.id === this.id)
		if (this.selectedProduct === undefined) {
			this.loadProduct()
		} else {
			this.getSrc()
		}
	},
	methods: {
		getSrc () {
		if (this.selectedProduct.images.length > 0) {
			this.src = `${this.siteUrl}/uploads/${this.selectedProduct.images[0].img}`
		} else {
			this.src = require('../assets/default-product-image.png')
		}
	},
		async loadProduct () {
			this.isLoading = true
			try {
			this.selectedProduct = await this.$store.dispatch('prods/loadProduct', { id: this.id })
			this.getSrc()
			} catch (error) {
				this.error = error.message || 'something went wrong!'
			}
			this.isLoading = false
		},
		handleError () {
			this.error = null
			},
		defaultImage (e) {
		e.target.src = require('../assets/default-product-image.png')
		},
		editProduct () {
		return '/editProduct/' + this.id
		}
	}
}
</script>
<style scoped>
body
{
    margin: 0;
    text-transform: capitalize;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
}

#containerProduct
{
    padding-top: 80px;
}
#containerD
{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 80px 40px;
}
#imageSection
{
    width: 80%;
    margin: auto;
}
#imageSection img
{
    width: 100%;
    float: right;
    border-radius: 10px;
    box-shadow: 1px 2px 6px 2px rgb(219, 219, 219);
}
#imageSection img:hover
{
    box-shadow: 1px 0px 9px 1px rgb(3, 122, 122);

}

#productDetails
{
    width: 100%;
	text-align: left;
}
h1
{
    font-size: 35px;
    letter-spacing: 1px;
    word-spacing: 2px;
}
h4
{
    font-size: 15px;
    font-weight: bold;
    color: rgb(3, 122, 122);
    letter-spacing: 1px;
    word-spacing: 2px;
}
#productPreview
{
    padding-bottom: 10px;
}
#productPreview > img
{
    width: 50px;
    padding: 10px 10px;
    border-radius: 15px;
    cursor: pointer;
}
p
{
    font-size: 15px;
    word-spacing: 2px;
    letter-spacing: 1px;
    line-height: 25px;
}
button
{
    padding: 10px 15px;
    color: white;
    background-color: rgb(3, 122, 122);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
}
button a
{
    text-decoration: none;
    font-size: 18px;
}
button:hover
{
    background-color: rgb(3, 94, 94);
}
button a:focus
{
    outline: none;
}

/* ----------------------------- MEDIA QUERY --------------------------- */

@media(max-width: 1300px)
{
    h1
    {
        font-size: 28px;
    }
    #productPreview > img
    {
        width: 40px;
        padding: 10px 10px;
        padding-bottom: 30px;
    }
    button
    {
        padding: 8px 13px;
        background-color: rgb(3, 122, 122);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
}

@media(max-width: 1170px)
{
    h1
    {
        font-size: 22px;
    }
    #productPreview > img
    {
        width: 40px;
        padding: 10px 10px;
        padding-bottom: 30px;
    }
    button a
    {
        font-size: 15px;

    }
    h4, p
    {
        font-size: 13px;
    }
    h3
    {
        font-size: 15px;
    }

}

@media(max-width: 900px)
{
    /* #containerProduct */
    #containerD
    {
        width: 60%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr;
    }
    #imageSection
    {
        width: 100%;
        text-align: center;
    }
    #imageSection img
    {
        text-align: center;
        width: 70%;
        float: none;
    }
    #productDetails
    {
        width: 100%;
    }
    #button
    {
        text-align: center;
    }
}

@media(max-width: 650px)
{
    #containerD
    {
        width: 80%;
    }
}
</style>
