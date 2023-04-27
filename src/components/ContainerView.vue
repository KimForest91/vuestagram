<script setup>
  import PostView from './PostView.vue'; 
</script>

<template>
  <div>
    <div v-if="step === 0">
      <PostView :post="post[i]" v-for="(a, i) in post" :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div class="upload-image"></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>
    
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
    step: Number,
    image: String,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
