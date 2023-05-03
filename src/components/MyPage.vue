<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="검색어를 입력하세요" />
  <div class="post-header" v-for="(a, i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>

</template>

<script>
import { onMounted, ref, toRefs, watch } from 'vue';
import axios from 'axios';

export default {
  name: 'MyPage',
  
  props: {
    post: Array,
    step: Number,
    image: String,
    one: Number,
  },
  setup(props) {
    let follower = ref([]);
   
    let { one } = toRefs(props);
    console.log(one.value);

    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
        follower.value = a.data
      })
    });

    return {follower};
  },
  data() {
    return {

    }
  },
  component: {
    
  },

}
</script>

<style>

</style>