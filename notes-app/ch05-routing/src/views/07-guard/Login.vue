<template>
  <div class="login-box">
    <h3>🔐 登录页面</h3>
    <p>输入任意文字模拟登录</p>
    <input v-model="username" placeholder="请输入用户名">
    <button @click="handleLogin">登录</button>
    <p v-if="tip">{{ tip }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const username = ref('')
const tip = ref('')

const handleLogin = () => {
  if (!username.value.trim()) {
    tip.value = '请输入用户名'
    return
  }
  localStorage.setItem('token', 'demo-token')
  tip.value = '登录成功，即将跳转'
  const redirectUrl = route.query.redirect || '/center'
  setTimeout(() => {
    router.push(redirectUrl)
  }, 600)
}
</script>

<style scoped>
.login-box{
  max-width: 460px;
  margin:40px auto;
  padding:30px;
  background:#fff;
  border-radius:14px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}
input{
  width:70%;
  padding:10px 14px;
  border:1px solid #ddd;
  border-radius:8px;
  margin:10px 0;
}
button{
  padding:10px 18px;
  background:#409eff;
  color:white;
  border:none;
  border-radius:8px;
  cursor:pointer;
}
</style>
