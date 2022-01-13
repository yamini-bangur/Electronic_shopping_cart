import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductList
  },
  {
    path: '/products/',
    name: 'products',
    component: ProductList
  },
  {
	path: '/products/:id',
	props: true,
	component: ProductDetail
	}
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
