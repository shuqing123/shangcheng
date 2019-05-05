import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    login:false || localStorage.getItem("login"),
    user:'' || localStorage.getItem("user"),
    allGoods: [],
    details:[],
    list:[]
  },
  mutations: {
    isLogin(state, data){
      state.login = data.login;
      state.user = data.user;
    },
    setGoods(state, goods){
      state.allGoods = goods
    },
    setList(state, list){
      state.list = list
    }
  },
  actions: {
    getDetails({commit,dispatch},id){
      $.ajax({
        url: `http://localhost:3000/details`,
        type: 'post',
        dataType: 'json',
        data: {
          id: id
        },
        success(data){
          console.log(data);
          self.detail = data;
        }
      })
    }
  }
});


export default store;
















