import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'
const routes = [
  {
    path: '/',
    component: ProductList
  },
  {
    path: '/products/',
    component: ProductList
  },
  {
    path: '/products/addProduct',
    name: 'products',
    component: AddProduct
  },
  {
	path: '/products/:id',
	props: true,
	component: ProductDetail
	},
	{
		path: '/editProduct/:id',
		props: true,
		component: EditProduct
		}

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
