<template>
  <div class="container-wrapper">
    <div class="layer1"></div>
    <div class="layer2"></div>
    <div class="layer3"></div>
    <div class="layer4"></div>
    <div class="layer5"></div>
    <div class="title">Sass 星空</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "sass:math";

$n: 5;
$duration: 400;
$count: 1000;

@function star($n) {
  $result: '#{random(100)}vw #{random(100)}vh #fff';
  @for $i from 2 through $n {
    $result: '#{$result},#{random(100)}vw #{random(100)}vh #fff'
  }
  @return unquote($result) ;
}

.container-wrapper {
  background-color: black;
  height: 100%;

  .title {
    margin: 0 auto;
    text-align: center;
    padding-top: 350px;
    color: white;
    font-size: 32px;
  }

  @for $i from 1 through $n {
    $duration: floor(math.div($duration,2));
    $count: floor(math.div($count,2));
    .layer#{$i} {
      position: fixed;
      left: 0;
      top: 0;
      width: #{$i}px;
      height: #{$i}px;
      border-radius: 50%;
      box-shadow: star($count);
      animation: moveUp #{$duration}s linear infinite;
    }
    .layer#{$i}::after {
      left: 0;
      top: 100vh;
      content: "";
      position: inherit;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      box-shadow: inherit;
    }
  }


}



@keyframes moveUp {
  to {
    transform: translateY(-100vh);
  }
}

</style>