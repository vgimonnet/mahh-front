<template>
  <section ref="museum" class="museum">
    <img class="museum__bg" src="@/assets/museum.png" alt="">
  </section>
</template>

<script>
export default {
  name: 'MuseumComponent',
  mounted () {
    window.addEventListener('wheel', this.scrollHorizontally)
  },
  methods: {
    scrollHorizontally (event) {
      window.scrollBy({
        left: event.deltaY < 0 ? -60 : 60
      })
    }
  }
}
</script>
