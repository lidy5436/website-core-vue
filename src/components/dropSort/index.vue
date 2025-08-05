<template>
  <div class="container-wrapper">
    <div class="list">
      <div :draggable="true" class="list-item">1</div>
      <div :draggable="true" class="list-item">2</div>
      <div :draggable="true" class="list-item">3</div>
      <div :draggable="true" class="list-item">4</div>
      <div :draggable="true" class="list-item">5</div>
    </div>
  </div>
</template>

<script setup>



import {onMounted} from "vue";

const initPage = () => {
  const list = document.querySelector('.list');
  let sourceNode = null;

  list.ondragover = (e) => {
    e.preventDefault();
  }

  list.ondragstart = (e) => {
    setTimeout(() => {
      e.target.classList.add('moving');
    },0);
    sourceNode = e.target;
  }

  list.ondragenter = (e) => {
    if (e.target === list || e.target === sourceNode) {
      return;
    }
    const children = [...list.children]
    const sourceIndex =children.indexOf(sourceNode);
    const targetIndex =children.indexOf(e.target);
    if (sourceIndex > targetIndex) {
      list.insertBefore(sourceNode,e.target);
    }else {
      list.insertBefore(sourceNode,e.target.nextElementSibling);
    }
  }
  list.ondragend = (e) => {
    e.target.classList.remove('moving');
  }
}

onMounted(()=> {
  initPage();
})



</script>

<style scoped>
.container-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
    width: 450px;
    background-color: white;
    .list-item {
      height: 46px;
      line-height: 46px;
      text-align: center;
      background: linear-gradient(to right,#409eff,#3a8ee6);
      color: white;
      border-radius: 5px;
      margin: 5px;
    }
    .list-item.moving {
      background: transparent;
      color: transparent;
      border: 1px dashed #cccccc;
    }
  }
}
</style>