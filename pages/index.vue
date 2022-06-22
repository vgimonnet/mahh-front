<template>
  <main id="loader">
    <img src="@/assets/logo.gif" alt="Logo MAHH">
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    setTimeout(() => {
      this.$router.push('museum')
    }, 3000)
  }
}
</script>
