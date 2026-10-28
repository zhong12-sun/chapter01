<template>
  <nav class="navbar">
    <span class="title">ch05-routing | 第5章实验台</span>
    <div class="nav-group">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/named">命名路由</router-link>
      <router-link to="/program">编程式导航</router-link>
      <router-link to="/center">用户中心</router-link>
      <router-link to="/login">登录</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 99;
}
.title {
  font-size: 18px;
  font-weight: 600;
}
.nav-group {
  display: flex;
  gap: 26px;
}
.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  /* 过渡动画 */
  transition: all 0.3s ease;
}
/* hover悬浮效果 */
.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
/* 当前路由选中高亮（vue-router自带类 router-link-active） */
.navbar a.router-link-active {
  background-color: rgba(255, 255, 255, 0.35);
  font-weight: bold;
}
</style>
