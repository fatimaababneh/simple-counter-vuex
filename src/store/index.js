import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    colorCode:''
  },
  getters: {},
  mutations: {
    decrease(state, randomNumber) {
      state.count-= randomNumber;
    },
    increase(state, randomNumber) {
      state.count += randomNumber;
    },
    setColorCode(state, newValue){
      state.colorCode = newValue;
    }
  },
  actions: {
    increase({ commit }) {
      console.log("hello");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increase", response.data);
      });
    },
    decrease({ commit }) {
      console.log("hello");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("decrease", response.data);
      });
    }

  },
  getters:{
    squarecounter(state){
      return state.count * state.count ;

    }
  },
  modules: {},
});
