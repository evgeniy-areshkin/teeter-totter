<template>
  <div id="app">
    <div class="container">
      <Controls />
      <Teeter />
      <transition name="modal">
        <Modal />
      </transition>
    </div>
  </div>
</template>

<script>
import Teeter from './components/teeter/Teeter.vue'
import Controls from './components/controls/Controls.vue'
import Modal from './components/modal/Modal.vue'

export default {
  name: 'App',
  components: {
    Teeter,
    Controls,
    Modal
  }
}
</script>

<style src="./styles/main.scss" lang="scss" />