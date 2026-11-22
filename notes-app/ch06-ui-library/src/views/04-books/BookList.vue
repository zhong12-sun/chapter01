<template>
  <div class="page-container">
    <div class="page-header">
      <div class="title-block">
        <h2>图书列表 POST</h2>
        <p class="subtitle">json-server 列表自动加载 + POST新增图书演示</p >
      </div>
      <div class="header-meta">
        <span class="tag">GET + POST</span>
        <span class="tag url-tag">{{ url }}</span>
      </div>
    </div>

    <!-- 表格卡片 -->
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">图书列表（数据来自 json-server）</span>
      </div>
      <div class="form-wrap">
        <p class="muted">进页面（mounted）自动发 GET；表格只是"货架"，货是 axios 搬回来的</p >
        <el-table :data="books" border stripe>
          <el-table-column prop="id" label="编号" width="70" />
          <el-table-column prop="name" label="书名" />
          <el-table-column prop="author" label="作者" width="150" />
          <el-table-column prop="price" label="单价（元）" width="110" />
        </el-table>
      </div>
    </div>

    <!-- POST新增卡片 -->
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">POST 新增一本书</span>
      </div>
      <div class="form-wrap">
        <p class="muted">axios.post(url, 数据对象) ——第二个参数就是要"寄出去"的货</p >
        <el-form :inline="true" :model="newBook">
          <el-form-item label="书名">
            <el-input v-model="newBook.name" placeholder="请输入书名" clearable />
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="newBook.author" placeholder="请输入作者" clearable />
          </el-form-item>
          <el-form-item label="单价">
            <el-input v-model.number="newBook.price" placeholder="如 59.8" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addBook">上架</el-button>
          </el-form-item>
        </el-form>
        <div class="console">{{ postLog }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookList',
  data() {
    return {
      url: 'http://localhost:3001/books',
      books: [],
      newBook: { name: '', author: '', price: null },
      postLog: '// 上架后这里显示 POST 的结果'
    }
  },
  mounted() {
    this.loadBooks()
  },
  methods: {
    loadBooks() {
      axios
        .get(this.url)
        .then((res) => {
          this.books = res.data
        })
        .catch((err) => {
          this.postLog = 'GET 失败：' + err.message + '（json-server 开了吗？）'
        })
    },
    addBook() {
      if (!this.newBook.name || !this.newBook.author) {
        this.postLog = '书名和作者都要填哦'
        return
      }
      axios
        .post(this.url, this.newBook)
        .then((res) => {
          this.postLog = 'POST 成功！服务器存下了：' + JSON.stringify(res.data)
          this.newBook = { name: '', author: '', price: null }
          this.loadBooks()
        })
        .catch((err) => {
          this.postLog = 'POST 失败：' + err.message
        })
    }
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
.url-tag {
  background: #f1f3f5;
  color: #4e5969;
  font-weight: 500;
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

.muted {
  color: #4e5969;
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 16px;
}

.console {
  margin-top: 16px;
  padding: 14px;
  background: #1d2129;
  color: #fff;
  border-radius: 8px;
  font-family: monospace;
  font-size:13px;
  line-height:1.6;
  white-space: pre-wrap;
  overflow-x: auto;
}
</style>