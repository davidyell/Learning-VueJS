Vue.component('daves-modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
            <slot></slot>
        </div>
      </div>
      <button class="modal-close is-large" v-on:click="$emit('close')"></button>
    </div>
  `
})

new Vue({
    el: '#example',
    data() {
      return {
        showModal: false
      }
    }
});