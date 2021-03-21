<template>
  <div class="tt-controls">
    <button>Start</button>
    <button>{{ isOnPause ? 'Resume' : 'Pause' }}</button>
    <button>Reset</button>
  </div>
</template>

<script>

export default {
  name: 'Controls',
  data: () => ({
    isOnPause: false
  }),
  computed: {},
  methods: {},
}
</script>

<style scoped lang="scss">
  .tt-controls {
    position: relative;
    z-index: 100;
  }
</style>
