<template>
  <div class="modal" id="modalDetail" v-if="showModal" @click="onClickOut($event)">
    <div class="modal-dialog" :style="position">

      <button aria-label="Fermer la fenêtre de détail" class="btn__close" @click="closeModal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="17.4156" y1="6.49174" x2="6.20859" y2="17.6987" stroke="#191919"/>
          <line x1="17.4555" y1="17.6985" x2="6.24855" y2="6.49155" stroke="#191919"/>
        </svg>
      </button>

      <div class="modal-header">
        <h2>
          {{ data.date }}
        </h2>
      </div>

      <section class="modal-content">
        <h3 v-html="data.title"></h3>
        <p v-html="data.content"></p>
      </section>

      <div class="modal-footer">
        <a href="#" @click="closeModal()">
          Acheter un billet
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.97998 1.29272H11.4545V11.7673" stroke="#191919"/>
            <line x1="0.782189" y1="11.9907" x2="11.1012" y2="1.67172" stroke="#191919"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

const positions = {
  0: 'top: 200%'
}

export default {
  name: 'ModalDetail',
  props: ['showModal', 'data', 'index'],
  data () {
    return {
      position: positions[this.index]
    }
  },
  emits: ['close-modal'],
  methods: {
    closeModal () {
      this.$emit('close-modal')
    },
    onClickOut (event) {
      if (event.target.id === 'modalDetail') {
        this.closeModal()
      }
    }
  }
}
</script>
