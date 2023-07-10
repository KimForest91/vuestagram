<script setup>
import ContainerView from './components/ContainerView.vue';
import SampleCode from './components/SampleCode.vue';
import data from './assets/data.js';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';


</script>

<template>
  <div>
    
    <SampleCode />
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

    <h4>Vuex 테스트 너의 이름은 {{ $store.state.name }} 너의 나이는 {{ $store.state.age }}</h4>
    <!-- <button @click="$store.state.name = 'park'">버튼</button> -->
    <!-- 위와같이 state변경을 직접해주는 형식은 지양함. 컴포넌트 안에서 직접 수정하기 금지.
    미리 수정방법을 store.js에 정해두고 그 방법으로 컴포넌트에서 소환해서 수정해야 함. -->
    <button @click="$store.commit('chageName')">버튼</button>
    <button @click="addAge(10)">한살 더 먹지요 냠냠</button>

    <h3>{{ now2 }} {{ counter }}</h3>
    <button @click="plus()">computed 버튼</button>

    <h3>state에 활용해보기👉 {{ name }}</h3>
    <h4>{{ name }} {{ age }} {{ likes }}</h4>
    <h4>{{ newName }}</h4>
    
    <!-- <ContainerView :class="selected" :image="image" :post="post" :step="step" /> -->
    <button @click="more">더보기</button>

    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">vuex action 활용한 더보기버튼</button>
   
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
    <div style="margin-top : 100px;"></div>
    
    <SampleCode />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      post: data,
      count: 0,
      step: 0,
      image: '',
      selected: '',
      counter: 0,
    }
  },
  mounted() {
    this.emitter.on('filterSelect', (a) => {
      this.selected = a;
    });
  },
  components: {
    
    SampleCode,
    
  },
  computed: {
    //methos 함수를 쓸 때는 매번 실행되지만, computed 함수는 사용해도 실행되지 않고, 값만 간직하고 있다가 함수가 호출 될 때 값을 뱉어줌. 함수라기보다는 데이터 저장 용도로 활용한다고 보면 됨.
    now2() {
      return new Date();
    },
    name() {
      return this.$store.state.name;
    },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ newName : 'forest', }),
  },
  methods : {
    ...mapMutations(['setMore', 'like', 'addAge']),
    now() {
      return new Date();
    },
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
        filter: this.selected,
      };
      this.post.unshift(myPost);
      this.step = 0;
    }
  },
}
</script>

