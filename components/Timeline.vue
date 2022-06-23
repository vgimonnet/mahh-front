<template>
  <ul class="timeline">
    <li id="timeline-anchor-0">
      <button @click="scroll('#zoom-modal-0', 0)">Pléistocène</button>
    </li>
    <li id="timeline-anchor-1">
      <button @click="scroll('#zoom-modal-1', 1)">Antiquité</button>
    </li>
    <li id="timeline-anchor-2">
      <button @click="scroll('#zoom-modal-2', 2)">Moderne</button>
    </li>
    <li id="timeline-anchor-3">
      <button @click="scroll('#zoom-modal-3', 3)">19ème</button>
    </li>
    <li id="timeline-anchor-4">
      <button @click="scroll('#zoom-modal-5', 4)">20ème</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TimeLine',
  methods: {
    scroll (anchor, index) {
      document.querySelectorAll('.timeline li').forEach((button) => {
        button.classList.remove('--active')
      })
      document.querySelector(anchor).scrollIntoView()
      for (let i = 0; i <= index; i++) {
        document.querySelector(`#timeline-anchor-${i}`).classList.add('--active')
      }
    }
  }
}
</script>
