<template>
  <div class="page-container">
    <div class="page-header">
      <div class="title-block">
        <h2>Vuex 计数器演示</h2>
        <p class="subtitle">Vuex 全局仓库，兄弟组件共享同一份状态数据</p>
      </div>
      <div class="header-meta">
        <span class="tag">Vuex</span>
      </div>
    </div>

    <div class="row-two">
      <div class="panel">
        <CounterCard />
      </div>
      <div class="panel">
        <MirrorCard />
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">为什么需要 Vuex？</span>
      </div>
      <div class="form-wrap">
        <p class="muted">
          上面的两张卡互不认识（不是父子、不传 props），但点左卡的 +1，右卡的数字也跟着变——
          因为它们读的是<b>同一间仓库</b>里的同一个 <code>count</code>。
          props/emit 只能"父子相邻传话"，跨层级、兄弟组件共享数据就要靠集中仓库。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CounterCard from './CounterCard.vue'
import MirrorCard from './MirrorCard.vue'

export default {
  name: 'VuexDemo',
  components: { CounterCard, MirrorCard }
}
</script>

<style scoped>
.page-container {
  min-height: calc(100vh - 40px);
  background: linear-gradient(180deg, #f0f4ff 0%, #f7f9fc 100%);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 4px 4px 16px;
  border-bottom: 1px solid #eef1f6;
}

.title-block h2 {
  margin: 0;
  font-size: 22px;
  color: #1f2937;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.subtitle {
  margin: 4px 0 0;
  font-size: 13px;
  color: #8a93a6;
}

.header-meta {
  display: flex;
  gap: 8px;
  align-items: center;
}
.tag {
  padding: 4px 10px;
  background: #e8f3ff;
  color: #1f6feb;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.row-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #eef1f6;
}
/* 下面解释卡片 */
.panel + .panel {
  margin-top: 0;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.panel-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.form-wrap {
  padding: 16px;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
}

.muted {
  color: #4e5969;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}
.muted code {
  background: #e8ecf6;
  color: #254b99;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

@media (max-width: 768px) {
  .row-two {
    grid-template-columns: 1fr;
  }
}
</style>
