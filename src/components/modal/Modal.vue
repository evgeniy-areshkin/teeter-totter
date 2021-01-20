<template>
  <div class="modal-mask" v-if="isEnded">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            Game Over
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="reset">
              Try Again
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'Modal',
  computed: {
    ...mapState('figures', ['isEnded']),
  },
  methods: {
    ...mapActions('figures', ['resetFigures']),
    ...mapActions('teeter', ['resetBalance']),
    reset() {
      this.resetFigures()
      this.resetBalance()
    }
  }
}
</script>

<style src="./modal.scss" lang="scss" />