<template>
  <div ref="teeterContainer"  class="tt-teeter">
    <div class="tt-base"></div>
    <div ref="plank" class="tt-plank" :style="rotation"></div>
    <div class="tt-figure-container" :style="rotation">
      <div class="tt-figure-side tt-figure-side__left">
        <Figure 
          v-for="(figure, index) in figures" :key="index"
          :id="figure.id"
          :type="figure.type"
          :weight="figure.weight"
          :color="figure.color"
          :positionX="figure.positionX" />
      </div>
      <div class="tt-figure-side tt-figure-side__right">
        <StaticFigure 
          v-for="(figure, index) in staticFigures" :key="index"
          :id="figure.id"
          :type="figure.type"
          :weight="figure.weight"
          :color="figure.color"
          :positionX="figure.positionX" />
      </div>
    </div>
  </div>
</template>

<script>
import Figure from '../figures/Figure.vue'
import StaticFigure from '../figures/StaticFigure.vue'
import { mapState } from "vuex";

export default {
  name: 'Teeter',
  data: () => ({}),
  computed: {
    ...mapState('figures', ['figures', 'staticFigures']),
    ...mapState('teeter', ['balance']),
    rotation() {
      return `
        transform: rotate(${this.balance}deg);
      `
    }
  },
  components: {
    Figure,
    StaticFigure
  }
}
</script>

<style src="./teeter.scss" lang="scss" />