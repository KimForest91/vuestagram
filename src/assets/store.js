import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 10,
      onLikes : false,
      more: {},
    }
  },
  mutations: {
    chageName(state) {
      state.name = 'park',
      state.age = 200,
      state.likes = 20;
    },
    addAge(state, data) {
      state.age += data;
    },
    like(state) {
      if (state.onLikes === false) {
        state.likes++;
        state.onLikes = true;
      } else {
        state.likes--;
        state.onLikes = false;
      }
    },
    setMore(state, data) {
      state.more = data;
    }
  },
  actions: {
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((a) => {
        // console.log(a.data);
        context.commit('setMore', a.data); //mutations 에 있는 함수를 가져오는 과정 context는 $store와 같음. 데이터는 dispatch로 감시하고 받아옴
      });
    },
  },
})

export default store;