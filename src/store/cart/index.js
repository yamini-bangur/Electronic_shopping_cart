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
			items: [],
			qty: 0,
			total: 0
        }
    }
}
