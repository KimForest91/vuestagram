<script setup>
import PostView from './PostView.vue'; 
</script>

<template>
  <div>
    <PostView :post="post[i]" v-for="(a, i) in post" :key="i" />

  </div>
</template>

<script>

export default {
  name: 'ContainerView',
  component: {
    PostView,
  },
  props: {
    post: Array,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
