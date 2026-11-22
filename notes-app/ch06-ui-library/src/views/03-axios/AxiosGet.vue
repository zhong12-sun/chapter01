<template>
  <div class="page-container">
    <!-- 顶部标题 -->
    <div class="page-header">
      <div class="title-block">
        <h2>Axios GET</h2>
        <p class="subtitle">向 json-server 发起 GET 请求，并将响应数据渲染到页面</p >
      </div>
      <div class="header-meta">
        <span class="tag">GET</span>
        <span class="tag url-tag">{{ url }}</span>
      </div>
    </div>

    <!-- 概念说明卡片 -->
    <div class="panel intro-panel">
      <div class="intro-left">
        <h3>请求流程</h3>
        <ol class="step-list">
          <li>点击“发 GET 请求”按钮</li>
          <li>axios 调用 <code>axios.get(url)</code></li>
          <li>服务端返回响应对象 <code>res</code></li>
          <li>从 <code>res.data</code> 取出图书数组</li>
          <li>赋值给 <code>books</code>，页面自动更新</li>
        </ol>
      </div>

      <div class="intro-right">
        <h3>响应对象 res</h3>
        <div class="res-card">
          <div class="res-item">
            <span class="res-key">res.status</span>
            <span class="res-value">HTTP 状态码</span>
          </div>
          <div class="res-item highlight">
            <span class="res-key">res.data</span>
            <span class="res-value">真正返回的数据</span>
          </div>
          <div class="res-item">
            <span class="res-key">res.config</span>
            <span class="res-value">请求配置信息</span>
          </div>
        </div>
        <p class="tip">课堂重点：绝大多数接口请求，我们只需要取 <b>res.data</b>。</p >
      </div>
    </div>

    <!-- 请求操作卡片 -->
    <div class="panel action-panel">
      <div class="panel-header">
        <span class="panel-title">接口请求</span>
        <span class="panel-subtitle">点击按钮发起请求</span>
      </div>

      <div class="action-area">
        <button class="primary-btn" @click="loadBooks">
          {{ loaded ? '重新请求' : '发 GET 请求' }}
        </button>

        <div class="status-row">
          <div class="status-item">
            <span class="status-label">请求地址</span>
            <span class="status-value">{{ url }}</span>
          </div>
          <div class="status-item">
            <span class="status-label">响应状态</span>
            <span class="status-value">{{ status || '未请求' }}</span>
          </div>
          <div class="status-item">
            <span class="status-label">图书数量</span>
            <span class="status-value">{{ books.length }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回结果卡片 -->
    <div class="panel result-panel">
      <div class="panel-header">
        <span class="panel-title">返回结果</span>
        <span class="panel-subtitle">res.data 渲染结果</span>
      </div>

      <div v-if="loaded" class="result-area">
        <div class="result-toolbar">
          <span class="dot"></span>
          <span class="result-filename">books.json</span>
        </div>
        <pre class="result-code">{{ JSON.stringify(books, null, 2) }}</pre>
      </div>

      <div v-else class="empty-area">
        <div class="empty-icon">📡</div>
        <p>还没有收到响应数据</p >
        <p class="empty-tip">请先确认 json-server 已在 <code>http://localhost:3001</code> 运行，再点击“发 GET 请求”。</p >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AxiosGet',
  data() {
    return {
      url: 'http://localhost:3001/books',
      books: [],
      status: null,
      loaded: false
    }
  },
  methods: {
    loadBooks() {
      axios
        .get(this.url)
        .then((res) => {
          this.status = res.status
          this.books = res.data
          this.loaded = true
        })
        .catch((err) => {
          alert('请求失败：' + err.message + '\n请确认 json-server 已在 3001 端口运行')
        })
    }
  }
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

.url-tag {
  background: #f1f3f5;
  color: #4e5969;
  font-weight: 500;
}

/* ========== 白色卡片统一 ========== */
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

.panel-subtitle {
  font-size: 12px;
  color: #8a93a6;
}

/* ========== 概念说明卡片 ========== */
.intro-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.intro-left h3,
.intro-right h3 {
  margin: 0 0 12px;
  font-size: 14px;
  color: #1f2937;
}

.step-list {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #4e5969;
  line-height: 2;
}

.step-list code {
  background: #e8ecf6;
  color: #254b99;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.res-card {
  background: #fafbfe;
  border: 1px dashed #d7e0f0;
  border-radius: 10px;
  padding: 12px;
}

.res-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 13px;
}

.res-item.highlight {
  background: #ecf5ff;
}

.res-key {
  color: #254b99;
  font-weight: 600;
  font-family: monospace;
}

.res-value {
  color: #4e5969;
}

.tip {
  margin: 12px 0 0;
  font-size: 12px;
  color: #8a93a6;
  line-height: 1.6;
}

/* ========== 请求操作区 ========== */
.action-area {
  padding: 16px;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.primary-btn {
  align-self: flex-start;
  padding: 10px 22px;
  background: linear-gradient(135deg, #3b78f6, #2562dd);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(37, 98, 221, 0.3);
  transition: transform 0.15s ease;
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.status-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.status-item {
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #eef1f6;
}

.status-label {
  display: block;
  font-size: 12px;
  color: #8a93a6;
  margin-bottom: 4px;
}

.status-value {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  font-family: monospace;
}

/* ========== 返回结果区 ========== */
.result-area {
  padding: 16px;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
}

.result-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #52c41a;
}

.result-filename {
  font-size: 12px;
  color: #4e5969;
  font-family: monospace;
}

.result-code {
  margin: 0;
  padding: 14px;
  background: #1d2129;
  color: #fff;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
  line-height: 1.6;
  max-height: 420px;
  overflow: auto;
}

/* ========== 空状态 ========== */
.empty-area {
  padding: 40px 20px;
  text-align: center;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
}

.empty-icon {
  font-size: 28px;
  margin-bottom: 8px;
}

.empty-area p {
  margin: 4px 0;
  color: #4e5969;
  font-size: 14px;
}

.empty-tip {
  color: #8a93a6 !important;
  font-size: 12px !important;
}

.empty-tip code {
  background: #e8ecf6;
  color: #254b99;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

/* ========== 响应式：屏幕窄时上下堆叠 ========== */
@media (max-width: 900px) {
  .intro-panel {
    grid-template-columns: 1fr;
  }

  .status-row {
    grid-template-columns: 1fr;
  }
}
</style>