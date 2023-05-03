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
         <li v-if="step == 1" @click="step++">Next</li>
         <li v-if="step == 2" @click="publish">발행</li>
       </ul>
       <img src="./assets/logo.svg" class="logo" />
     </div>
   
     <ContainerView :image="image" :post="post" :step="step" />
     <button @click="more">더보기</button>
   
     <div class="footer">
       <ul class="footer-button-plus">
         <input @change="upload" type="file" id="file" class="inputfile" />
         <label for="file" class="input-plus">+</label>
       </ul>
    </div>

    <div v-if="step === 0">내용0</div>
    <div v-if="step === 1">내용1</div>
    <div v-if="step === 2">내용2</div>
    <button @click="step = 0">버튼0</button>
    <button @click="step = 1">버튼1</button>
    <button @click="step = 2">버튼2</button>
    <div style="margin-top : 500px;"></div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      post: data,
      count: 0,
      step: 3,
      image: '',
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
/*       .catch(()=>{
      //실패시 실행할 코드
        console.log('뭔가 이상이 있음');
      }) */
    },
    upload(e){
      console.log(e);
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      //console.log(file);
      this.image = url;
      this.step++;
    },
    publish() {
      let myPost = {
        name: "Kim Soo",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 3000,
        date: "April 27",
        liked: false,
        content: this.myPost,
        filter: "perpetua",
      };
      this.post.unshift(myPost);
      this.step = 0;
    }
  },
}
</script>

