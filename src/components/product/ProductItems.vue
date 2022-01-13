<template>
  <div id="box">
    <base-button link :to="productDetail()">
      <img :src="src" @load="loadImage"  />
      </base-button
    >
    <div id="details">
      <h3>
        <base-button link :to="productDetail()">{{ productName }}</base-button>
      </h3>
      <h4>{{ brand }}</h4>
      <h2>$ {{ price }}</h2>
    </div>

    <base-button>Add to cart</base-button>
  </div>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton },
  props: ['id', 'images', 'productName', 'brand', 'price'],
  data () {
    return {
      link: true,
      isLoading: false,
      src: `https://electronics-shopping.herokuapp.com/uploads/${this.images[0].img}`,
      error: null,
      isLoaded: false
    }
  },
  watch: {
    image: function (newVal) {
		this.src = newVal
    }
  },
  methods: {
    productDetail () {
      return '/products/' + this.id
    },
    loadImage () {
      this.isLoaded = true
    },
    defaultImage () {
		this.src = require('../../assets/default-product-image.png')
		}
  }
}
</script>
<style scoped>
#box {
  width: 100%;
  background-color: white;
  align-content: center;
  border-radius: 10px;
  box-shadow: 1px 2px 6px 2px rgb(219, 219, 219);
}
#box:hover {
  box-shadow: 1px 0px 9px 1px rgb(3, 122, 122);
}
#containerClothing img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 300px;
}
#containerAccessories img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
#details {
  padding: 0 15px;
  text-transform: capitalize;
}
#box a {
  text-decoration: none;
  color: rgb(29, 29, 29);
}
h3 {
  font-size: 16px;
}
h4 {
  font-weight: 100;
}
h2 {
  color: rgb(3, 94, 94);
}
@media (max-width: 1070px) {
  h1 {
    font-size: 25px;
  }
  #containerClothing,
  #containerAccessories {
    width: 95%;
    grid-gap: 10px;
  }
}
@media (max-width: 850px) {
  h1 {
    width: 80%;
  }
  #containerClothing,
  #containerAccessories {
    display: grid;
    grid-gap: 70px 20px;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }
}
@media (max-width: 650px) {
  h1 {
    font-size: 20px;
  }
  h1 {
    width: 90%;
  }
  #containerClothing,
  #containerAccessories {
    width: 90%;
  }
}
@media (max-width: 600px) {
  h1 {
    width: 70%;
  }
  #containerClothing,
  #containerAccessories {
    width: 70%;
  }
}
@media (max-width: 505px) {
  h1 {
    width: 80%;
  }
  #containerClothing,
  #containerAccessories {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
