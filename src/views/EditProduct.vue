<template>
	<div id="maincontainer">
		<h1>Edit Product </h1>
		<div id="containerD">
			<product-form type="edit" :id="id" @save-data="save"></product-form>

		</div>
	</div>
</template>
<script>
import ProductForm from '../components/product/ProductForm.vue'
export default {
	props: ['id'],
	components: {
		ProductForm
	},
	methods: {
		save (data) {
			this.$store.dispatch('prods/saveProduct', data)
			this.$router.back()
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
h1 {
  width: 90%;
  margin: auto;
  padding: 110px 0 50px 0;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: capitalize;
}
#containerProduct
{
    padding-top: 80px;
}
#containerD
{
    width: 30%;
    margin: auto;
    padding: 0px 40px;
	text-align: left;
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
