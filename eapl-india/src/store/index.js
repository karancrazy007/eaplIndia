import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    parts: null,
    cart: [],
  },
  mutations: {
    updateParts(state, data){
      state.parts = {timers: data.timers};
    },
    incrementSelected(state, data) {
      ++state.parts.timers[data.idx].selected;
      this.dispatch('updateCart');
    },
    decrementSelected(state, data) {
      --state.parts.timers[data.idx].selected;
      this.commit('decrementCart', data);
    },
    incrementCart(state, data) {
      state.cart.push(data);
    },  
    decrementCart(state, data) {
      state.cart.splice(state.cart.findIndex( item => {return item.id == data.idx;}), 1);
    }
  },
  getters: {
    getCart(state) {
      return state.parts.timers.filter(timer => {return timer.selected;});
    }  
  },
  actions: {
    getParts({commit}) {
      axios.get('/api/parts').then(result => {
        commit('updateParts', result.data);
      });
    },
    updateCart({commit, state}, part) {
      const cart = [...state.cart, part];
      axios.post('/api/cart', cart)
        .then(()=>{
          commit('incrementCart', part);
        })
        .catch(()=> {
          alert("Error while updating cart!!");
        });
    }
  }
})