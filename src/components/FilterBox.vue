<template>
  <div @click="submit" :class="filter + ' filter-item'" :style="`background-image:url(${ image })`">
    <slot name="a"></slot>
    <slot :msg="msg"></slot>

    <button @click="submit">버튼</button>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  methods: {
    submit() {
      this.emitter.emit('filterSelect', this.filter);
    },
  },
  props: {
    post: Object,
    image: String,
    filter: String,
  },
  data() {
    return {
      msg: 'hello',
    }
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>