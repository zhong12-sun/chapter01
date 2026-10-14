<template>
  <div class="mini">
    <h3>全局注册</h3>
    <p>我在 <b>main.js</b> 里注册（app.component），App 没 import 我也能用——但代价是始终会打进包里。</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalDemo'
}
</script>

<style scoped>
.mini {
  border: 1px dashed var(--primary);
  border-radius: 8px;
  padding: 10px 14px;
}
</style>