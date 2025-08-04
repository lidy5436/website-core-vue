<template>
  <div class="container-wrapper">
    <div class="main-wrapper">
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804001.png" alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804002.png" alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804003.png" alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804004.png" alt="图片"/></div>
      <div class="item"><img src="https://lidy-1300763668.cos.ap-nanjing.myqcloud.com/image/20250804005.png" alt="图片"/></div>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$size: 600px;
$imgSize: 128px;
$n: 5;
$pDeg: 360deg / $n;

.container-wrapper{
  background-color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-wrapper {
    border: black solid 1px;
    border-radius: 50%;
    width: $size;
    height: $size;
    position: relative;
    animation: rotation 20s linear infinite;
    .item {
      img {
        width: $imgSize;
        height: $imgSize;
        border-radius: 50%;
      }
      position: absolute;
      top: 0;
      left: 50%;
      transform-origin: center ($imgSize/2 + $size/2);
      transform: translateY(-50%) translateX(-50%);

      @for $i from 1 through $n {
        &:nth-child(#{$i}) {
          $deg: $pDeg * ($i - 1);
          transform:
              translate(-50%, -50%) rotate($deg) ;
          img {
            --initial: -#{$deg};
            transform: rotate(-$deg);
            animation: rotation 20s linear infinite reverse;
          }
        }
      }
    }
  }
}

@keyframes rotation {
  to {
    transform: rotate(calc(360deg + var(--initial,0deg)) );
  }
}


</style>