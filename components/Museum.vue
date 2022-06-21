<template>
  <section class="outer-wrapper">
    <div class="museum">
      <div class="museum__slide --one">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-1.png" alt="">
        <div class="museum__content">

        </div>
      </div>
      <div class="museum__slide --two">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-2.png" alt="">
      </div>
      <div class="museum__slide --three">
        <img class="museum__pic" src="@/assets/slide-3.png" alt="">
      </div>
      <div class="museum__slide --four">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-4.png" alt="">
      </div>
      <div class="museum__slide --five">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-5.png" alt="">
      </div>
      <div class="museum__slide --six">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-6.png" alt="">
      </div>
      <div class="museum__slide --seven">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-7.png" alt="">
      </div>
      <div class="museum__slide --height">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-8.png" alt="">
      </div>
      <div class="museum__slide --nine">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-9.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MuseumComponent',
  mounted () {
    const slider = document.querySelector('.museum')
    slider.style.width = slider.offsetHeight * slider.children.length + 'px'
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', (e) => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })
    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) {
        return
      }
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 3 // scroll-fast
      slider.scrollLeft = scrollLeft - walk
    })
  }
}
</script>
