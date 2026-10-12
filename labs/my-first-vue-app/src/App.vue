<template>
  <div class="container">
    <div class="left">
      <h2>我的第一个Vue应用 -</h2>
      <p>32605150603</p>
      <p>钟利萍</p>
    </div>
    <div class="right">
      <h1>You did it!</h1>
      <p>You've successfully<br>created a project<br>with Vite + Vue 3.</p>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const name = ref("钟利萍")
</script>
<style scoped>
.container{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:40px;
  min-height:90vh;
}
.left h2{
  font-size:28px;
  font-weight:normal;
}
.right h1{
  color:#42b983;
  font-size:36px;
}
</style>