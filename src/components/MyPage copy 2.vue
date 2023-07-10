<template>
<div style="padding : 30px 10px 50px 10px; background-color: pink">
  <h4>팔로워</h4>
  <input placeholder="검색어를 입력하세요" @input="search($event.target.value)" />
  <div class="post-header" v-for="(a, i) in follower" :key="i">
    <div class="profile" :style="`background-image: url(${a.image})`"></div>
    <span class="profile-name">{{ a.name }}</span>
  </div>
  <p>여기여기  {{ follower }}</p>
</div>
</template>

<script>
import { onMounted, ref, reactive, toRefs, watch, computed, useStore } from 'vue';
import axios from 'axios';

export default {
  name: 'MyPage',
  
  props: {
    post: Array,
    step: Number,
    image: String,
    one: Number,
  },
  setup(props, context) {
    let follower = ref([]);
    let followerOriginal = ref([]);
    let test = reactive({name : 'kim'});
    
    test;
    let { one } = toRefs(props);
    // console.log(one.value);

    watch(one, () => {
      
    });

    let result = computed( ()=> {
      return follower.value.length;
    });
    // console.log(result.value);

    // let store = useStore();
    // console.log(store.state.name);
    
    function search(word){
      let newFollower = follower.value.filter((a)=>{
          return a.name.indexOf(word) != -1
      });

      // console.log(newFollower);
      follower.value = [...newFollower];

      console.log(newFollower);
    }

    onMounted(() => {      
      axios.get('/follower.json').then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    return {follower, search}
  },
  data() {
    return {

    }
  },

}
</script>

<style>

</style>