<template>

  <div class="container-wrapper">
    <div class="container">
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804006.png"
                             alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804007.png"
                             alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804008.png"
                             alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804009.png"
                             alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804010.png"
                             alt="图片"/></div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>
.container-wrapper {
  background-color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template:
      'A A B'
      'C D B'
      'C E E';
    gap: 10px;
    animation: rotation 10s infinite linear;

    .item:nth-child(1) {
      grid-area: A;
    }

    .item:nth-child(2) {
      grid-area: B;
    }

    .item:nth-child(3) {
      grid-area: C;
    }

    .item:nth-child(4) {
      grid-area: D;
    }

    .item:nth-child(5) {
      grid-area: E;
    }

    .item {
      overflow: hidden;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 260%;
        height: 260%;
        object-fit: cover;
        animation: rotation 10s infinite linear reverse;
      }
    }
  }
}


@keyframes rotation {
  to {
    transform: rotate(360deg);
  }
}

</style>