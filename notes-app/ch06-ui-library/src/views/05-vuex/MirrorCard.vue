<template>
  <div class="page-container">
    <div class="page-header">
      <div class="title-block">
        <h2>Vuex 重置卡片</h2>
        <p class="subtitle">同一份全局 state，reset mutation 重置计数器，和左侧计数器联动</p>
      </div>
      <div class="header-meta">
        <span class="tag">Vuex</span>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">隔壁卡（只有重置，也能影响左卡）</span>
      </div>
      <div class="form-wrap counter-wrap">
        <p class="count-num">{{ $store.state.count }}</p>
        <div class="btn-group">
          <button class="reset-btn" @click="$store.commit('reset')">清零</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MirrorCard'
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

.panel {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 22px;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #eef1f6;
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

.counter-wrap {
  text-align: center;
}
.count-num {
  font-size: 48px;
  font-weight: 700;
  color: #1f2937;
  margin: 12px 0 24px;
}
.btn-group {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.reset-btn {
  width: 80px;
  height: 48px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: #722ed1;
  color: #fff;
  transition: all 0.15s ease;
}
.reset-btn:hover {
  background: #531dab;
  transform: translateY(-1px);
}
</style>
