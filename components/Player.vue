<template>
  <div>
    <button ref="soundBtn" class="sound-btn" @click="handlePlayer" />
    <audio ref="audio">
      <source src="/music.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'PlayerComponent',
  data () {
    return {
      playing: false
    }
  },
  methods: {
    handlePlayer () {
      this.playing = !this.playing
      if (this.playing) {
        console.log('play')
        this.$refs.audio.play()
        this.$refs.soundBtn.classList.add('--active')
        this.$refs.audio.volume = 0.2
      } else {
        console.log('pause')
        this.$refs.audio.pause()
        this.$refs.soundBtn.classList.remove('--active')
      }
    }
  }
}
</script>
