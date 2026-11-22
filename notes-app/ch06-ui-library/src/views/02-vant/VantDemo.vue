<template>
  <div class="page-container">
    <!-- 顶部标题区 -->
    <div class="page-header">
      <div class="title-block">
        <h2>Vant 移动端小样</h2>
        <p class="subtitle">Button 按钮与 Form 表单校验演示</p >
      </div>
      <div class="header-actions">
        <el-tag type="info" size="small">Vant 4</el-tag>
        <el-tag size="small">Mobile Preview</el-tag>
      </div>
    </div>

    <!-- 主体：左侧说明 + 右侧手机预览 -->
    <div class="demo-layout">
      <!-- 手机预览区 -->
      <div class="phone-panel">
        <div class="phone-frame">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div class="mobile-header">
              <span class="mobile-title">Vant 移动端小样</span>
            </div>

            <div class="mobile-content">
              <div class="button-group">
                <van-button type="primary" size="normal">主要按钮</van-button>
                <van-button type="success" size="normal">成功按钮</van-button>
                <van-button type="default" size="normal">默认按钮</van-button>
                <van-button type="warning" size="normal">警告按钮</van-button>
                <van-button type="danger" size="normal">危险按钮</van-button>
              </div>

              <div class="section-divider"></div>

              <van-form @submit="onSubmit" class="van-form">
                <van-field
                  v-model="form.name"
                  name="name"
                  label="姓名"
                  placeholder="请输入姓名"
                  :rules="[{ required: true, message: '姓名不能为空' }]"
                />
                <van-field
                  v-model="form.phone"
                  name="phone"
                  label="手机号"
                  placeholder="请输入手机号"
                  :rules="[{ required: true, message: '手机号不能为空' }]"
                />

                <div class="submit-area">
                  <van-button round block type="primary" native-type="submit">
                    提交表单
                  </van-button>
                </div>
              </van-form>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧说明卡片 -->
      <div class="info-panel">
        <div class="info-card">
          <h3>本次实验要点</h3>
          <ul>
            <li>Vant 按钮类型：primary / success / default / warning / danger</li>
            <li>type="warning" 对应警告按钮</li>
            <li>van-form 结合 van-field 实现表单校验</li>
            <li>rules 配置 required 必填提示</li>
            <li>移动端预览宽度 375px</li>
          </ul>
        </div>

        <div class="info-card">
          <h3>提交结果</h3>
          <pre class="result-code">{{ formResult }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: ''
})

const formResult = ref('等待提交...')

const onSubmit = (values) => {
  console.log('表单提交数据：', values)
  formResult.value = JSON.stringify(values, null, 2)
}
</script>
<style scoped>
/* ========== 全局统一背景 ========== */
.page-container {
  min-height: calc(100vh - 40px);
  background: linear-gradient(180deg, #f0f4ff 0%, #f7f9fc 100%);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
}

/* ========== 顶部标题区 ========== */
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

.header-actions {
  display: flex;
  gap: 8px;
}

/* ========== 主体布局：手机预览 + 说明 ========== */
.demo-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 20px;
  align-items: flex-start;
}

/* ========== 手机预览区 ========== */
.phone-panel {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #eef1f6;
}

.phone-frame {
  width: 375px;
  margin: 0 auto;
  background: #0b0f17;
  border-radius: 40px;
  padding: 12px;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.25),
    0 0 0 2px rgba(255, 255, 255, 0.06) inset;
}

.phone-notch {
  width: 110px;
  height: 24px;
  background: #000;
  border-radius: 0 0 18px 18px;
  margin: 0 auto 10px;
}

.phone-screen {
  background: #f7f8fa;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mobile-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 14px 16px;
  text-align: center;
}

.mobile-title {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.mobile-content {
  padding: 16px 14px;
}

/* 手机内按钮组 */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 12px;
}

.button-group :deep(.van-button) {
  flex: 1 1 calc(50% - 10px);
}

/* 分隔线 */
.section-divider {
  height: 1px;
  background: #ebedf0;
  margin: 12px 0;
}
</style>