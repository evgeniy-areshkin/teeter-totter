<template>
  <div :ref="getId" :style="styles" class="tt-figure tt-text" :class="[`tt-figure__${type}`]">{{weight}}</div>
</template>

<script>

export default {
  name: 'StaticFigure',
  props: ['id', 'type', 'weight', 'color', 'positionX'],
  computed: {
    getId() {
      return `static_figure_${this.id}`
    },
    styles() {
      return `
        left: ${this.positionX * 25}%;
        background-color: #${this.color};
        border-color: ${ this.type == 'triangle' ? `transparent transparent #${this.color} transparent` : 'none'};
      `
    }
  },
}

</script>

<style src="./figures.scss" lang="scss" />
