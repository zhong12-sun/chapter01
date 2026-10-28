<template>
  <div class="page">
    <h3>🆔 用户详情</h3>

    <div class="info-card">
      <p>用户ID：</p>
      <span class="id">{ $route.params.id}</span>
    </div>

    <p>从用户1直接点去用户2：地址变了、参数也变了——但组件没有重新创建。</p>
    <p class="tip-text">本组件被复用观看了 1 次（mounted只跑一次；参数变化走 watch）</p>

    <router-link to="/users" class="back">← 返回用户列表</router-link>
  </div>
</template>

<style scoped>
.info-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
  border-radius: 12px;
  margin-bottom: 16px;
}

.id {
  font-size: 22px;
  font-weight: bold;
  color: #0284c7;
}

.tip-text {
  padding: 12px;
  background: #f3f4f6;
  border-radius: 8px;
  color: #4b5563;
}

.back {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 18px;
  background: #409eff;
  color: #fff;
  border-radius: 8px;
  transition: all 0.25s;
}

.back:hover {
  background: #66b1ff;
  text-decoration: none;
  transform: translateY(-1px);
}
</style>
