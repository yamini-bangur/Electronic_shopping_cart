<template>
  <li>
    <div>
      <img :src="src" :alt="title"  @error="defaultImage"  />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item__data">
        <div>
          Price per Item:
          <strong>${{ price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['prodId', 'title', 'images', 'price', 'qty'],
  data () {
	  return {
		  src: ''
	  }
  },
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },
  created () {
		this.getSrc()
  },
  methods: {
	  getSrc () {
		  console.log(this);
		if (this.images.length > 0) {
			this.src = `https://electronics-shopping.herokuapp.com/uploads/${this.images[0].img}`
		} else {
			this.defaultImage()
		}
		console.log(this.src);
	},
    remove() {
      this.$store.dispatch('cart/removeFromCart', { productId: this.prodId });
	},
	 defaultImage () {
		this.src = require('../../assets/default-product-image.png')
		},
  },
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid rgb(255, 30, 30);
  background-color: rgb(255, 30, 30);
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: rgb(145, 4, 4);
  border-color: rgb(145, 4, 4);
}
</style>