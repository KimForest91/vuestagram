<template>
<div style="padding : 30px 10px 50px 10px; background-color: pink">
   <p>연습연습</p>
   <p >여기여기 {{ test }}</p>
   <button @click="testTest">asdfsdf</button>
</div>
</template>

<script setup>
import { onMounted, ref, reactive, toRefs, watch, computed, useStore } from 'vue';
import axios from 'axios';

    

    function testTest() {
      const test = ref('안녕하세요 테스트중');
      test.value = '바꿔바꿔';
    }















</script>
