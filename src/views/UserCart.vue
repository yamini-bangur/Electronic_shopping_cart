<template>
<div id="mainContainer">
  <section>
    <h1>Your Cart</h1>
    <h3>Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge></h3>
	 <div id="containerClothing">
		<ul>
		<cart-item
			v-for="item in cartItems"
			:key="item.id"
			:prod-id="item.id"
			:title="item.productName"
			:images="item.images"
			:price="item.price"
			:qty="item.qty"
		></cart-item>
		</ul>
	</div>
  </section>
</div>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    cartItems() {
      return this.$store.getters['cart/products'];
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}
h1 {
  width: 90%;
  margin: auto;
  padding: 110px 0 50px 0;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: capitalize;
}
h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
 text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#containerClothing {
  grid-gap: 70px 20px;
  grid-template-columns: repeat(5, 1fr);
  width: 90%;
  margin: auto;
  padding-bottom: 40px;
}
</style>