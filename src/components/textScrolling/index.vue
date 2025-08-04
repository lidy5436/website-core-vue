<template>
  <div class="container-wrapper">
    <div class="main-wrapper">
      <span class="text-wrapper">C</span>
      <span class="text-wrapper">O</span>
      <span class="text-wrapper">L</span>
      <span class="text-wrapper">O</span>
      <span class="text-wrapper">R</span>
      <span class="text-wrapper">F</span>
      <span class="text-wrapper">U</span>
      <span class="text-wrapper">L</span>
    </div>
  </div>
</template>

<script setup>

</script>



<style lang="scss" scoped>
.container-wrapper {
  background-color: black;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @for $i from 1 through 8 {
    .text-wrapper:nth-child(#{$i}) {
      animation-delay: ($i - 1) * 0.1s;
    }
  }
  .text-wrapper {
    font-size: 96px;
    margin: 0 12px;
    color: #faebd7;
    animation: colorChange 1s infinite ease-in-out alternate;
  }
}


@keyframes colorChange {
  to {
    color: #ff4500;
  }
}

</style>