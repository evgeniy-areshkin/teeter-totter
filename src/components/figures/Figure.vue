<template>
  <div :ref="getId" :style="styles" class="tt-figure tt-text" :class="[`tt-figure__${type}`]">{{weight}}Kg</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"

export default {
  name: 'Figure',
  data: () => ({
    shiftY: -window.innerHeight + 200,
    shiftX: 0,
    stepX: 25,
    stepY: 10
  }),
  props: ['id', 'type', 'weight', 'color', 'positionX'],
  computed: {
    ...mapState('figures', ['figures', 'isOnPause', 'isEnded']),
    ...mapState('teeter', ['balance']),
    styles() {
      return `
        transform: ${this.figurePositionY};
        left: ${this.shiftX}%;
        background-color: #${this.color};
        border-color: ${this.borderColorForTriangle};
      `
    },
    figurePositionY() {
      return `translate(${this.compensateRotation}px, ${this.shiftY}px) scale(${this.scaleByWeight})`
    },
    compensateRotation() {
      return this.shiftY * (this.balance / 100)
    },
    scaleByWeight() {
      return 1 + this.weight / 10
    },
    borderColorForTriangle() {
      return this.type == 'triangle' ? `transparent transparent #${this.color} transparent` : 'none'
    },
    getId() {
      return `figure_${this.id}`
    },
    containerWidth() {
      return this.$parent.$refs.teeterContainer.clientHeight
    },
    placed() {
      return this.shiftY >= 0
    }
  },
  methods: {
    ...mapActions('figures', ['addFigure', 'figuresInStack']),
    ...mapActions('teeter', ['calculateBalance']),
    ...mapMutations('figures', ['setFigureWeight']),
    updatePosition() {
      this.shiftX = this.positionX * this.stepX;
      const positionInterval = setInterval(() => {
        if(!this.isOnPause) {
          let shift = this.shiftY + this.stepY
          this.shiftY = shift > 0 ? 0 : shift
        }
        if(this.placed) {
          this.calculateBalance()
          setTimeout(() => {
            if(this.isEnded) return
            this.addFigure()
          }, 1000);
          clearInterval(positionInterval)
        }
      }, 100);
    },
    handleArrows(e) {
      if(this.placed) return

      if(e.keyCode == '39') {
        this.moveFigureRight();
      }
      if(e.keyCode == '37'){
        this.moveFigureLeft();
      }
    },
    moveFigureRight() {
      let acc = this.shiftX + this.stepX;
      this.shiftX = acc >= 100 ? 100 : acc
      this.setFigureWeight( {id: this.id, newPositionX: this.shiftX / this.stepX} )
    },
    moveFigureLeft() {
      let acc = this.shiftX - this.stepX;
      this.shiftX = acc <= 0 ? 0 : acc
      this.setFigureWeight( {id: this.id, newPositionX: this.shiftX / this.stepX} )
    },
    increaseGameSpeed() {
      this.stepY += this.figures.length * 2
    }
  },
  mounted() {
    this.updatePosition()
    this.increaseGameSpeed()
  },
  created() {
    window.addEventListener('keydown', this.handleArrows)
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleArrows)
  }
}

</script>

<style src="./figures.scss" lang="scss" />
