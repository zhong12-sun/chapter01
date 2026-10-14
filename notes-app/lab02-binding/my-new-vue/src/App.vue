<template>
  <div id="app">
    <h1>ch03-components｜第 3 章实验台</h1>
    <p class="muted">第 03 课下半场（3.1—3.7）：两种 API · 生命周期 · 注册 · 样式冲突 · props / emit / inject</p>

    <nav class="lab-nav">
      <a href="#exp-01">01 两种API</a>
      <a href="#exp-02">02 生命周期</a>
      <a href="#exp-03">03 注册</a>
      <a href="#exp-04">04 样式冲突</a>
      <a href="#exp-05">05 props</a>
      <a href="#exp-06">06 emit</a>
      <a href="#exp-07">07 provide/inject</a>
    </nav>

    <!-- 一个小实验一个 section：先占位、逐实验填充 -->
    <section id="exp-01"><p class="muted">（任务 5 填充：CountOptions + CountSetup）</p></section>
    <section id="exp-02"><p class="muted">（任务 6 完成后挂载 LifecycleDemo）</p></section>
    <section id="exp-03"><p class="muted">（任务 7 填充：LocalDemo + GlobalDemo）</p></section>
    <section id="exp-04"><p class="muted">（任务 8 完成后挂载 ScopedLab）</p></section>
    <section id="exp-05"><p class="muted">（任务 9 完成后挂载 PropsLab）</p></section>
    <section id="exp-06"><p class="muted">（任务 10 完成后挂载 EmitLab）</p></section>
    <section id="exp-07"><p class="muted">（任务 11 完成后挂载 ProvideInjectLab）</p></section>
  </div>
</template>
 
<script>
 import CountSetup from './experiments/01-apis/CountSetup.vue'
import CountOptions from './experiments/01-apis/CountOptions.vue'
  export default {
    name: 'App',
   components: { CountOptions, CountSetup }
  }
</script>

<style scoped>
.lab-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 20px;
}

.lab-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}

.lab-nav a:hover {
  background: var(--primary-bg);
}

section {
  margin: 18px 0;
}

.muted {
  color: var(--muted);
  margin-top: 0;
}
</style>