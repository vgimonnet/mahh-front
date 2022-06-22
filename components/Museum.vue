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
        <div class="content">

        </div>
        <div class="btn-line-wrapper">
          <button class="movie-btn btn-line">Visonnez le film</button>
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
  </section>
</template>

<script>
export default {
  name: 'MuseumComponent',
  data () {
    return {
      timeline: 0
    }
  }
}
</script>
