export default {
	products(state) {
		if(localStorage.getItem("items") == null){
			return state.items
		}
		const items = localStorage.getItem("items").length > 0 ? JSON.parse(localStorage.getItem("items")): state.items
		if(state.items.length <= 0 && items.length > 0 ){
			state.items = items
		}
		return state.items;
	  },
	  totalSum(state) {
		if(localStorage.getItem("total") == null){
			return state.total
		}
		const total = localStorage.getItem("total") > 0 ? localStorage.getItem("total"): state.total
		if(state.total <= 0 && total > 0){
			state.total = total
		}
		return state.total;
	  },
	  quantity(state) {
		if(localStorage.getItem("qty") == null){
			return state.qty
		}
		const qty = localStorage.getItem("qty") > 0 ? localStorage.getItem("qty"): state.qty
		if(state.qty <= 0 && qty > 0){
			state.qty = qty
		}
		return state.qty;
	  }
}