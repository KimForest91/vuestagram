<script setup>
import ContainerView from './components/ContainerView.vue';
import data from './assets/data.js';
import axios from 'axios';

</script>

<template>
  <div>
    <div class="header">
       <ul class="header-button-left">
         <li>Cancel</li>
       </ul>
       <ul class="header-button-right">
         <li>Next</li>
       </ul>
       <img src="./assets/logo.svg" class="logo" />
     </div>
   
     <ContainerView :post="post" />
     <button @click="more">더보기</button>
   
     <div class="footer">
       <ul class="footer-button-plus">
         <input type="file" id="file" class="inputfile" />
         <label for="file" class="input-plus">+</label>
       </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      post : data,
      count : 0,
    }
  },
  components: {
    ContainerView,
  },
  methods : {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then( result => {
        console.log(result.data);
        this.post.push(result.data);
        this.count++;
      })
      .catch(()=>{
      /* 실패시 실행할 코드 */
        console.log('뭔가 이상이 있음');
      })
    }  
  },
}
</script>

<style>

</style>
