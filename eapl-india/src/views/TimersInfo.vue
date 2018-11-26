<template>
  <div class="home">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <div class="box">
            <figure class="image is-64x64">
              <img :src="require(('../assets/products/').concat(selectedTimer.imgSrc))" alt="Image" class="img2">
            </figure>
          </div>  
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{selectedTimer.name}}</strong>
              <div class="is-pulled-right">
                <button class="button" @click="change='down'">-</button><input type="number" class="input" style="width: 80px;" v-model="selectedVal"><button class="button" @click="change='up'">+</button>
              </div>
              <br/>
              {{selectedTimer.info}}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import parts from '@/data/parts.js'
// let myParts = parts;
export default {
  name: 'TimersInfo',
  // components: {
  //   flipBoard
  // }
  props: ['id'],
  data (){
    return {
      change: null,
    }
  },
  created () {
    this.selectedTimer = this.parts.timers[this.id]
  },
  computed: {
    parts () {
      return this.$store.state.parts;
    },
    selectedTimer () {
      return this.parts.timers[this.id];
    },
    selectedVal () {
      if(this.change == 'up') 
        this.$store.commit('incrementSelected', {idx: this.selectedTimer.id})
      else if(this.change == 'down')
        this.$store.commit('decrementSelected', {idx: this.selectedTimer.id});
      this.change = null;
      return this.selectedTimer.selected;
    }
  }
}  
</script>
<style>
  figure {
    display: inline-flex;
  }
</style>
