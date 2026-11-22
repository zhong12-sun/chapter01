<template>
  <div class="page-container">
    <div class="page-header">
      <div class="title-block">
        <h2>表单与菜单</h2>
        <p class="subtitle">Form 表单 + Menu 导航菜单组件示例</p >
      </div>
    </div>

    <!-- Form表单卡片 -->
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Form 表单</span>
        <el-tag size="small" type="info">用户名密码登录</el-tag>
      </div>
      <div class="form-wrap">
        <el-form :model="formData" ref="formRef">
          <el-form-item label="用户名">
            <el-input v-model="formData.username" placeholder="请输入用户名" clearable />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formData.password" placeholder="请输入密码" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="onReset">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="result-block">
          <span>// 提交后这里会显示表单数据：{{ formResult }}</span>
        </div>
      </div>
    </div>

    <!-- Menu菜单卡片 -->
    <div class="panel">
      <div class="panel-header">
        <div>
          <span class="panel-title">Menu 菜单：横向导航 + 垂直侧边栏</span>
          <p class="panel-desc">default-active 是点亮项；垂直菜单的“我的”是 el-sub-menu，可展开折叠</p >
        </div>
      </div>
      <div class="menu-wrap">
        <el-menu
          mode="horizontal"
          :default-active="activeIndexH"
          class="demo-menu"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">商品管理</el-menu-item>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>

        <div class="vertical-menu-box">
          <el-menu
            :default-active="activeIndexV"
            class="demo-vertical-menu"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-sub-menu index="2">
              <template #title>我的</template>
              <el-menu-item index="2-1">个人信息</el-menu-item>
              <el-menu-item index="2-2">设置</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">订单管理</el-menu-item>
          </el-menu>
          <div class="menu-tip">最近选中：{{ activeIndexV }} 号菜单项</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formRef = ref(null)
const formData = ref({
  username: '',
  password: ''
})
const formResult = ref('')
const activeIndexH = ref('1')
const activeIndexV = ref('1')

const onSubmit = () => {
  console.log(formData.value)
  formResult.value = JSON.stringify(formData.value)
}
const onReset = () => {
  formRef.value.resetFields()
  formResult.value = ''
}
</script>

<style scoped>
/* 外层渐变背景，和另外两个页面统一 */
.page-container {
  min-height: calc(100vh - 40px);
  background: linear-gradient(180deg, #f0f4ff 0%, #f7f9fc 100%);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
}

.page-header {
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

/* 卡片面板，统一样式 */
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
  align-items: flex-start;
  margin-bottom: 16px;
}
.panel-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  display: block;
  margin-bottom: 4px;
}
.panel-desc {
  margin: 0;
  font-size: 12px;
  color: #8a93a6;
}

/* 表单内部虚线容器，和按钮区风格统一 */
.form-wrap {
  padding: 16px;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
}
.result-block {
  margin-top:12px;
  padding: 10px 14px;
  background-color: #1d2129;
  color: #fff;
  border-radius: 8px;
  font-family: monospace;
  font-size:13px;
}

.menu-wrap {
  padding: 16px;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
}
.demo-menu {
  margin-bottom: 16px;
  border-radius: 8px;
}
.vertical-menu-box {
  display: flex;
  align-items: flex-start;
  gap:24px;
}
.demo-vertical-menu {
  width: 200px;
  border-radius: 8px;
  overflow:hidden;
}
.menu-tip {
  padding-top:8px;
  color:#606266;
  font-size:14px;
}

/* 菜单激活高亮，统一蓝色 */
:deep(.el-menu-item.is-active) {
  background-color: #ecf5ff !important;
  color: #409eff !important;
}
</style>