<template>
  <main id="accessibilite">
    <header>
      <a class="" href="/">
        <img loading="lazy" src="@/assets/logo.svg" alt="">
      </a>
      <nav>
        <a href="/museum">Musée virtuel</a>
        <a href="#" class="active">Accessibilité</a>
        <a href="#">Actualités</a>
        <a href="#">Contact</a>
        <a href="#">Comment venir ?</a>
        <a href="#" id="btn__billeterie">Billeterie</a>
      </nav>
    </header>
    <h1>Accessibilité</h1>
    <section v-for="(oeuvre, index) in oeuvres" :key="index">
      <img loading="lazy" :src="require(`../assets/oeuvres/oeuvre-${ index + 1 }.jpg`)" alt="Photographie de l'oeuvre">
      <div>
        <h2>{{ oeuvre.date }}</h2>
        <h3>{{ oeuvre.title }}</h3>
        <p>{{ oeuvre.content }}</p>
        <audio controls>
          <source src="/enregistrement_oeuvre.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
    <footer>Footer</footer>
  </main>
</template>

<script>
import oeuvres from '../data/oeuvres.json'

export default {
  name: 'AccessibilityPage',
  data () {
    return {
      oeuvres
    }
  },
  mounted () {
    document.querySelector('body').classList.add('accessibilite')
  }
}
</script>
