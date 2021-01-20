<template>
  <div class="tt-controls">
    <button :disabled="isInProgress || isEnded" @click.prevent="addFigure">Start</button>
    <button :disabled="isEnded || !isInProgress" @click.prevent="pauseSimulation">{{ isOnPause ? 'Resume' : 'Pause' }}</button>
    <button @click.prevent="reset">Reset</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'Controls',
  computed: {
    ...mapState('figures', ['isOnPause', 'isInProgress', 'isEnded']),
  },
  methods: {
    ...mapActions('figures', ['addFigure', 'resetFigures', 'pauseSimulation']),
    ...mapActions('teeter', ['resetBalance']),
    reset() {
      this.resetFigures()
      this.resetBalance()
    }
  },
}
</script>

<style scoped lang="scss">
  .tt-controls {
    position: relative;
    z-index: 100;
  }
</style>
