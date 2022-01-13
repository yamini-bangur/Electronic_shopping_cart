<template>
    <button v-if="!link" :class="mode" :title="title">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
		},
		title: {
			type: String,
            required: false,
            default: ''
		}
    }
}
</script>
<style scoped>
button:hover,
button:active {
  background-color: rgb(3, 94, 94);
  border-color: rgb(3, 94, 94);
}
button {
  text-decoration: none;
  padding: 10px 12px;
  font: inherit;
  background-color:rgb(3, 122, 122);
  border: 1px solid rgb(3, 122, 122);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;
  display: inline-block;
}
.flat {
  background-color: transparent;
  color: rgb(3, 122, 122);
  border: none;
}

.outline {
  background-color: transparent;
  border-color: rgb(3, 122, 122);
  color: rgb(3, 122, 122);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: rgb(215, 247, 247);
}
</style>
