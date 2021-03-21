<template>
  <div ref="teeterContainer"  class="tt-teeter">
    <div class="tt-base"></div>
    <div ref="plank" class="tt-plank"></div>
    <div class="tt-figure-container">
      <div class="tt-figure-side tt-figure-side__left">
        
      </div>
      <div class="tt-figure-side tt-figure-side__right">
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Teeter',
  data: () => ({}),
  computed: {},
  components: {}
}
</script>

<style src="./teeter.scss" lang="scss" />