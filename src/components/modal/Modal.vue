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
            <button class="modal-default-button">
              Try Again
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  data: () => ({
    isEnded: false
  }),
  computed: {},
  methods: {}
}
</script>

<style src="./modal.scss" lang="scss" />