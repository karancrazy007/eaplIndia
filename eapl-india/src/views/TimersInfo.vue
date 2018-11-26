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
            <section>
              <strong>{{selectedTimer.name}}</strong>
              <div class="is-pulled-right">
                <button class="button" @click="decrementSelected()">-</button><input type="number" class="input" style="width: 80px;" v-model="selectedVal"><button class="button" @click="incrementSelected()">+</button>
              </div>
              <br/>
              {{selectedTimer.info}}
            </section>
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
      selectedVal: 0
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
    }
  },
  methods: {
    incrementSelected (){
      this.$store.commit('incrementSelected', {idx: this.selectedTimer.id});
      this.selectedVal = this.selectedTimer.selected;
    },
    decrementSelected (){
      this.$store.commit('decrementSelected', {idx: this.selectedTimer.id});
      this.selectedVal = this.selectedTimer.selected;
    }
  }
}  
</script>
<style>
  figure {
    display: inline-flex;
  }
</style>
