<template>
<div style="padding : 30px 10px 50px 10px; background-color: pink">
   <p>연습연습</p>
   <p>여기여기 {{ test }}</p>
   <button @click="testTest">asdfsdf</button>
</div>
</template>

<script>
import { onMounted, ref, reactive, toRefs, watch, computed, useStore } from 'vue';
import axios from 'axios';

export default {
  name: 'SampleCode',
  
  props: {
    post: Array,
    step: Number,
    image: String,
    one: Number,
  },
  setup(props, context) {
      

  onMounted(() => {      
  let test = ref('안녕하세요 테스트중');
  console.log(test.value);
});

  return {}
  }

}













</script>
