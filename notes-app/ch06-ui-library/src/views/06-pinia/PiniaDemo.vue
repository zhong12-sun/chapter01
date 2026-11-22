<template>
  <div class="page-container">
    <div class="page-header">
      <div class="title-block">
        <h2>Pinia 计数器</h2>
        <p class="subtitle">Pinia 状态管理演示，对比 Vuex，简化 mutation 写法</p>
      </div>
      <div class="header-meta">
        <span class="tag">Pinia</span>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Pinia 计数器（对照左边 Vuex 页）</span>
      </div>
      <div class="form-wrap counter-wrap">
        <p class="count-num">
          {{ count }}　<small class="double-text">× 2 = {{ double }}</small>
        </p>
        <div class="btn-group">
          <button class="counter-btn plus-btn" @click="increment">+1</button>
          <button class="counter-btn minus-btn" @click="decrement">-1</button>
        </div>
        <p class="muted">
          没有 mutations、没有 $store、没有 commit——mapState 直接抄数据，actions 当方法调
        </p>
      </div>
    </div>

    <div class="panel">
      <UserCard />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../../store/counter'
import UserCard from './UserCard.vue'

export default {
  name: 'PiniaDemo',
  components: { UserCard },
  computed: {
    // pinia 的 mapState：state 成员（count）和 getters 成员（double）都能抄
    ...mapState(useCounterStore, ['count', 'double'])    // 补全：把 getters 成员也抄进来（数组第二项）
  },
  methods: {
    // pinia 的 mapActions：把仓库里的 actions 挂成本组件的方法
    ...mapActions(useCounterStore, ['increment', 'decrement'])
  }
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
.double-text {
  font-size: 18px;
  font-weight: 400;
  color: #6b7280;
}
.btn-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
}
.counter-btn {
  width: 80px;
  height: 48px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.plus-btn {
  background: #52c41a;
  color: #fff;
}
.plus-btn:hover {
  background: #389e0d;
  transform: translateY(-1px);
}
.minus-btn {
  background: #ff4d4f;
  color: #fff;
}
.minus-btn:hover {
  background: #d9363e;
  transform: translateY(-1px);
}

.muted {
  color: #4e5969;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}
</style>
