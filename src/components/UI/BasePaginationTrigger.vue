<template>
  <base-button class="base-pagination-trigger" mode="flat" @click="onClick">
    {{ pageNumber }}
  </base-button>
</template>
<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$emit('loadPage', this.pageNumber)
    }
  }
}
</script>
