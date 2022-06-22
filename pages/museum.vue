<template>
  <main>
    <Museum />
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
