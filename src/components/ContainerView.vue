<script setup>
  import FilterBoxVue from './FilterBox.vue';
  import PostView from './PostView.vue';
  import FilterBox from './FilterBox.vue'
  import MyPage from './SampleCode.vue';
</script>

<template>
  <div>
    <div v-if="step === 0">
      <PostView :post="post[i]" v-for="(a, i) in post" :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div :class="selected" class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <FilterBox :filter="filter" :image="image" v-for="filter in filters" :key="filter">
           <template v-slot:a><span>{{filter}}</span></template>
           <template v-slot:default="ms"><span>{{ ms.msg }}</span></template>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>
<!--     <div v-if="step === 3">
      <MyPage :one="1" />
    </div> -->
    <div v-if="step === 3">
      <MyPage :one="1" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContainerView',
  data() {
    return {
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      msg: 'hello!',
      selected: '',
    }
  },
  mounted() {
    this.emitter.on('filterSelect', (a) => {
      this.selected = a;
    });
  },
  component: {
    PostView,
    FilterBox,
    // MyPage,
  },
  props: {
    post: Array,
    step: Number,
    image: String,
    filter: String,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
