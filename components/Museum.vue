<template>
  <section class="outer-wrapper">
    <div class="museum">
      <div class="museum__slide --one">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-1.png" alt="">
        <a class="museum__logo" href="/">
          <img loading="lazy" src="@/assets/logo.svg" alt="">
        </a>
        <div class="content">
          <h1 class="title">le voyage<br/>au-delà des normes</h1>
          <p class="desc">Bienvenue dans l’exposition interactive sur le handicap. Là où le handicap est une force.</p>
          <a class="enter-btn btn --big" href="#two">Entrez</a>
          <p class="credits">Créé par<br/><u>observatoire des politique du handicap</u></p>
        </div>
        <button class="sound-btn"></button>
        <div class="btn-wrapper">
          <button class="guide-btn btn">Visite guidée</button>
          <NuxtLink class="accessibility-btn btn" to="/accessibilite">Accessibilité</NuxtLink>
        </div>
      </div>
      <div id="two" class="museum__slide --two">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-2.png" alt="">
        <div class="timeline">
          <input
            type="range"
            name=""
            id="timeline-range"
            min="0"
            max="50"
            :v-model="timeline"
          >
        </div>
      </div>
      <div class="museum__slide --three">
        <img class="museum__pic" src="@/assets/slide-3.png" alt="">

        <span class="anchor --first zoom-in"></span>
        <span class="anchor --first zoom-out"></span>

        <button aria-label="Voir plus de détail" @click="showDetail(0)" class="btn__detail --first">
          <img src="@/assets/plus.svg" alt="Afficher plus de détail">
        </button>
        <button aria-label="Aggrandir l'oeuvre" @click="zoom($event)" class="btn__zoom --first">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!zoomActif"
          >
            <path d="M12.214 0.628371H17.9117V6.58463H18.2864V0.253662H12.214L12.214 0.628371Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M6.55087 17.9118H0.628351V12.2441H0.253662V18.2865H6.55089L6.55087 17.9118Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M17.8372 0.976596L11.733 7.08085L11.4679 6.81572L17.5721 0.711468L17.8372 0.976596Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M0.429321 17.781L6.35318 11.8572L6.6102 12.1142L0.686343 18.0381L0.429321 17.781Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <path d="M18.5403 7.70635L12.8426 7.70635V1.75009H12.4679V8.08105H18.5403L18.5403 7.70635Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M12.917 7.35788L19.0213 1.25362L19.2864 1.51875L13.1822 7.623L12.917 7.35788Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M1.31302 13.2323H7.23554L7.23554 18.8999H7.61023L7.61023 12.8576H1.313L1.31302 13.2323Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M7.43457 13.3628L1.51071 19.2866L1.25369 19.0296L7.17755 13.1057L7.43457 13.3628Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
          </svg>
        </button>
      </div>
      <div class="museum__slide --four">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-4.png" alt="">
        <a href="#" id="decouvrir">
          <div>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.97998 1.29272H11.4545V11.7673" stroke="#191919"/>
              <line x1="0.782189" y1="11.9907" x2="11.1012" y2="1.67172" stroke="#191919"/>
            </svg>
            <img loading="lazy" class="museum__decouvrir" src="@/assets/decouvrir.svg" alt="Découvrir le jeu">
          </div>
        </a>
      </div>
      <div class="museum__slide --five">
        <img loading="lazy" class="museum__pic" src="@/assets/slide-5.png" alt="">

        <span class="anchor --second zoom-in"></span>
        <span class="anchor --second zoom-out"></span>

        <button aria-label="Voir plus de détail" @click="showDetail(1)" class="btn__detail --second">
          <img src="@/assets/plus.svg" alt="Afficher plus de détail">
        </button>
        <button aria-label="Aggrandir l'oeuvre" @click="zoom($event)" class="btn__zoom --second">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!zoomActif"
          >
            <path d="M12.214 0.628371H17.9117V6.58463H18.2864V0.253662H12.214L12.214 0.628371Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M6.55087 17.9118H0.628351V12.2441H0.253662V18.2865H6.55089L6.55087 17.9118Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M17.8372 0.976596L11.733 7.08085L11.4679 6.81572L17.5721 0.711468L17.8372 0.976596Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M0.429321 17.781L6.35318 11.8572L6.6102 12.1142L0.686343 18.0381L0.429321 17.781Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <path d="M18.5403 7.70635L12.8426 7.70635V1.75009H12.4679V8.08105H18.5403L18.5403 7.70635Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M12.917 7.35788L19.0213 1.25362L19.2864 1.51875L13.1822 7.623L12.917 7.35788Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M1.31302 13.2323H7.23554L7.23554 18.8999H7.61023L7.61023 12.8576H1.313L1.31302 13.2323Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
            <path d="M7.43457 13.3628L1.51071 19.2866L1.25369 19.0296L7.17755 13.1057L7.43457 13.3628Z" fill="#191919" stroke="#191919" stroke-width="0.5"/>
          </svg>
        </button>

        <div class="btn-line-wrapper">
          <button class="movie-btn btn-line">Visionnez le film</button>
        </div>
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

    <ModalDetail :data="oeuvre" :showModal="showModal" :index="indexOeuvre" @close-modal="closeModal" />
  </section>
</template>

<script>
import oeuvres from '../data/oeuvres.json'
import ModalDetail from './ModalDetail.vue'
export default {
  name: 'MuseumComponent',
  data () {
    return {
      timeline: 0,
      oeuvres,
      oeuvre: {
        date: null,
        title: null,
        content: null
      },
      showModal: false,
      zoomActif: false,
      indexOeuvre: 0
    }
  },
  components: { ModalDetail },
  methods: {
    closeModal () {
      this.showModal = false
    },
    showDetail (index) {
      this.indexOeuvre = index
      this.oeuvre = this.oeuvres[index]
      this.showModal = !this.showModal
    },
    zoom (event) {
      this.zoomActif = !this.zoomActif
      const museum = document.querySelector('.museum')
      // const buttonZoom = event.currentTarget
      // const buttonDetail = event.currentTarget.parentElement.querySelector('.btn__detail')

      let anchorClassName = '.zoom-out'
      if (this.zoomActif) {
        anchorClassName = '.zoom-in'
      }
      const anchor = event.currentTarget.parentElement.querySelector(anchorClassName)

      const wrapper = document.querySelector('.outer-wrapper')

      const scrollPosition = event.currentTarget.parentElement.offsetLeft + anchor.offsetLeft
      console.log(scrollPosition, 't')

      if (museum.classList.contains('zoom')) {
        museum.classList.remove('zoom')
        // buttonZoom.classList.remove('zoom')
        // buttonDetail.classList.remove('zoom')
        wrapper.scrollTop = (scrollPosition / 2)
      } else {
        museum.classList.add('zoom')
        // buttonZoom.classList.add('zoom')
        // buttonDetail.classList.add('zoom')
        wrapper.scrollTop = (scrollPosition * 2)
      }
    }
  }
}
</script>
