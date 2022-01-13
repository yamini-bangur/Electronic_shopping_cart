<template>
  <div class="base-pagination">
    <base-button
      :disabled="isPreviousButtonDisabled"
      @click="previousPage">
		Previous
    </base-button>
	<BasePaginationTrigger v-for="paginationTrigger in paginationTriggers"
      :class="{
      'outline':
        paginationTrigger === currentPage
    }" :key="paginationTrigger"
      :pageNumber="paginationTrigger"
		class="base-pagination__description"
      @loadPage="onLoadPage"
    />
    <base-button
      :disabled="isNextButtonDisabled"
      @click="nextPage">
		Next
    </base-button>
  </div>
</template>
<script>
import BasePaginationTrigger from './BasePaginationTrigger.vue'
import BaseButton from './BaseButton.vue'
export default {
	components: {
		BasePaginationTrigger,
		BaseButton
	},
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
	},
	visiblePagesCount: {
      type: Number,
      default: 5
    }
  },
  computed: {
    isPreviousButtonDisabled () {
      return this.currentPage === 1
    },
    isNextButtonDisabled () {
      return this.currentPage === this.pageCount
	},
	paginationTriggers () {
        const currentPage = this.currentPage
        const pageCount = this.pageCount
        const visiblePagesCount = this.visiblePagesCount
        const visiblePagesThreshold = (visiblePagesCount - 1) / 2
		const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(0)
		if (currentPage <= visiblePagesThreshold + 1) {
			pagintationTriggersArray[0] = 1
			const pagintationTriggers = pagintationTriggersArray.map(
				(paginationTrigger, index) => {
				return pagintationTriggersArray[0] + index
				}
			)
			pagintationTriggers.push(pageCount)
			return pagintationTriggers
		}
		if (currentPage >= pageCount - visiblePagesThreshold + 1) {
			const pagintationTriggers = pagintationTriggersArray.map(
				(paginationTrigger, index) => {
				return pageCount - index
				}
			)
			pagintationTriggers.reverse().unshift(1)
			return pagintationTriggers
			}
			pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1
			const pagintationTriggers = pagintationTriggersArray.map(
			(paginationTrigger, index) => {
				return pagintationTriggersArray[0] + index
			}
			)
			pagintationTriggers.unshift(1)
			pagintationTriggers[pagintationTriggers.length - 1] = pageCount
			return pagintationTriggers
      }
  },
  methods: {
    nextPage () {
      this.$emit('nextPage')
    },
    previousPage () {
      this.$emit('previousPage')
	},
	onLoadPage (value) {
      this.$emit('loadPage', value)
    }
  }
}
</script>
<style scoped>
.outline {
  background-color: transparent;
  border-color: rgb(3, 122, 122);
  color: rgb(3, 122, 122);
  border: 2px solid;
}

.outline:hover,
.outline:active {
  background-color: rgb(215, 247, 247);
}
</style>
