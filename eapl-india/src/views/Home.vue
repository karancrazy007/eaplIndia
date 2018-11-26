<template>
  <div class="home">
    <div class="push-top">
      <h2 class="title is-3">Approval & Clientele</h2>
      <flip-board class="pad-50"></flip-board>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import flipBoard from '@/components/flipBoard.vue'

export default {
  name: 'home',
  components: {
    flipBoard,
  }
}
</script>
