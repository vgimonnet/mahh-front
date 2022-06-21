<template>
  <section ref="museum" class="museum">
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-1.png" alt="">
      <button class="museum__btn">test</button>
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-2.png" alt="">
    </div>
    <div class="museum__slide">
      <img class="museum__pic" src="@/assets/slide-3.png" alt="">
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-4.png" alt="">
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-5.png" alt="">
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-6.png" alt="">
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-7.png" alt="">
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-8.png" alt="">
    </div>
    <div class="museum__slide">
      <img loading="lazy" class="museum__pic" src="@/assets/slide-9.png" alt="">
    </div>
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
