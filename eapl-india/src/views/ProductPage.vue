<template>
  <div class="home">
    <div class="lds-ripple" v-if="!parts"><div></div><div></div></div>
    <div v-else class="push-top">
      <h3 class="subtitle is-2">PRODUCT PAGE</h3>
      <div class="container">
        <div class="columns is-centered pad-50">
          <div v-for="part in parts.timers" :key="part.id" class="column">
              <router-link :to="{name: 'TimersInfo', params: {id: part.id}}">
                <img class="image is-128x128 box" :src="require(('../assets/products/').concat(part.imgSrc))" @click="selectedPart = part"/>
                <div class="cart-val">{{part.selected}}</div>
                
              </router-link>
          </div>
        </div>    
      </div>
      <div class="container" style="margin-top: 20px !important;">
        <router-view/>
      </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'productPage',
  created() {
    setTimeout(()=>this.$store.dispatch('getParts'), 2500);
  },
  computed: {
    parts() {
      return this.$store.state.parts
    }
  },
  data () { 
    return {
      selectedPart: {}
    }
  }
}
</script>
<style>
  .cart-val {
    background-color: #ffbc00;
    color: black;
    border-radius: 103px;
    width: 24px;
    position: relative;
    top: -165px;
    left: 115px;
  }
  .lds-ripple {
    display: inline-flex;
    position: absolute;
    top: 250px;
    width: 64px;
    height: 64px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid rgb(0, 0, 0);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -28px;
      left: -21px;
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }

</style>
