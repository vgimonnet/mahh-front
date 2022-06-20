<template>
  <section class="intro">
    <h1>Introduction entrée musée<br/>Lorem ipsum dolor set amet</h1>
    <button class="btn" @click="enterMuseum">Tap to enter</button>
  </section>
</template>

<script>
export default {
  name: 'IntroComponent',
  methods: {
    enterMuseum () {
      this.$store.commit('museum/enter')
    }
  }
}
</script>
