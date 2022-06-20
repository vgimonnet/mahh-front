<template>
  <main>
    <Intro v-if="!entered" />
    <Museum v-else />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    entered () {
      return this.$store.state.museum.entered
    }
  }
}
</script>
