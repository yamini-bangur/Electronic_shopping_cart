import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
	namespaced: true,
    mutations,
    getters,
	actions,
	state () {
        return {
			products: [],
			total_row: 0,
			total_count: 0
        }
    }
}
