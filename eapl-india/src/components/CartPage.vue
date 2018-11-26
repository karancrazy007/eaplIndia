<template>
  <div>
    <vue-table :fields="['name', 'cost', 'selected']" :api-mode='false' :data="cart"></vue-table>
  </div>
</template>

<script>
export default {
  name: 'cartPage',
  // data () {
  //   return{
  //     fields: ['name', 'cost', 'selected'],
  //     //   {
  //     //     name: 'cost',
  //     //     title: 'cost'
  //     //   },
  //     //   {
  //     //     name: 'selected',
  //     //     title: 'selected'
  //     //   }
  //     // ]
  //   }  
  // },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    }
  }
}
</script>

<style>

</style>
