<template>
  <div id="app">
    <p class="muted">第 03 课下半场（3.1–3.7）：两种 API</p>
    <nav class="lab-nav">
      <a href="#exp-01">01 两种API</a>
      <a href="#exp-02">02 生命周期</a>
    </nav>
    <!-- 把两个计数器组件放这里 -->
    <CountOptions />
    <CountSetup />
    <LifecycleLab />
    <LifecycleDemo />
    <LocalDemo/>
    <ScopedChild />
    <ScopedLab />
    <PriceBox/>
    <PropsLab />
    <SendCard/>
    <EmitLab/>
    <GrandChild/>
    <MiddleChild/>
    <ProvideInjectLab/>
  </div>
</template>

<script>
import CountOptions from './components/experiment/01-apis/CountOptions.vue'
import CountSetup from './components/experiment/01-apis/CountSetup.vue'
import LifecycleLab from './components/experiment/02-lifecycle/LifecycleLab.vue'
import LifecycleDemo from './components/experiment/02-lifecycle/LifecycleDemo.vue'
import LocalDemo from './components/experiment/03-register/LocalDemo.vue'
import ScopedChild from './components/experiment/04-scoped/ScopedChild.vue'
import ScopedLab from './components/experiment/04-scoped/ScopedLab.vue'
import PriceBox from './components/experiment/05-props/PriceBox.vue'
import PropsLab from './components/experiment/05-props/PropsLab.vue'
import SendCard from './components/experiment/06-emit/SendCard.vue'
import EmitLab from './components/experiment/06-emit/EmitLab.vue'
import GrandChild from './components/experiment/07-provide-inject/GrandChild.vue'
import MiddleChild from './components/experiment/07-provide-inject/MiddleChild.vue'
import ProvideInjectLab from './components/experiment/07-provide-inject/ProvideInjectLab.vue'

export default {
  name: 'App',
  components: {
    CountOptions,
    CountSetup,
    LifecycleLab,
    LifecycleDemo,
    LocalDemo,
    ScopedChild,
    ScopedLab,
    PriceBox,
    PropsLab,
    SendCard,
    EmitLab,
    GrandChild,
    MiddleChild,
    ProvideInjectLab
  }
}
</script>

<style scoped>

</style>
