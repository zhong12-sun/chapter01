<template>
  <div class="page-container">
    <!-- 顶部标题区 -->
    <div class="page-header">
      <div class="title-block">
        <h2>第 06 章：UI 组件库</h2>
        <p class="subtitle">Element Plus 按钮与表格组件示例</p >
      </div>
      <div class="header-actions">
        <el-button :icon="Refresh" circle></el-button>
        <el-button type="primary" :icon="Setting">设置</el-button>
      </div>
    </div>

    <!-- 按钮操作卡片 -->
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">1. Button 按钮</span>
        <el-tag size="small" type="info">基础按钮</el-tag>
      </div>

      <div class="button-toolbar">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">绿色按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button>默认按钮</el-button>
      </div>
    </div>

    <!-- 表格数据卡片 -->
    <div class="panel">
      <div class="panel-header">
        <div>
          <span class="panel-title">2. Table 表格</span>
          <p class="panel-desc">tableData 里放对象，el-table-column 的 prop 决定每一列显示哪个键</p >
        </div>
        <div class="table-actions">
          <el-input
            v-model="searchText"
            placeholder="搜索姓名 / 地址"
            :prefix-icon="Search"
            style="width: 240px"
            clearable
          ></el-input>
          <el-button type="primary" :icon="Plus">新增</el-button>
        </div>
      </div>

      <el-table :data="filteredData" border stripe style="width: 100%">
        <el-table-column type="index" label="#" width="60" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名" width="140"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作" width="140" align="center">
          <template #default="scope">
            <el-button size="small" type="primary" link>查看</el-button>
            <el-button size="small" type="danger" link>删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="table-footer">
        <span class="muted">共 {{ filteredData.length }} 条数据</span>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="filteredData.length"
          :page-size="10"
          current-page="1"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { Refresh, Setting, Search, Plus } from '@element-plus/icons-vue'

export default {
  name: 'ElementDemo',
  setup() {
    const searchText = ref('')

    const tableData = ref([
      { date: '2026-11-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2026-11-02', name: '李小花', address: '北京市海淀区中关村大街 100 号' },
      { date: '2026-11-03', name: '赵小明', address: '成都市成华区二仙桥东三路 1 号' }
    ])

    const filteredData = computed(() => {
      if (!searchText.value) return tableData.value
      const keyword = searchText.value.toLowerCase()
      return tableData.value.filter(
        item =>
          item.name.toLowerCase().includes(keyword) ||
          item.address.toLowerCase().includes(keyword)
      )
    })

    return {
      searchText,
      tableData,
      filteredData,
      Refresh,
      Setting,
      Search,
      Plus
    }
  }
}
</script>
<style scoped>
/* 页面外层，增加背景和整体宽度 */
.page-container {
  min-height: calc(100vh - 40px);
  background: linear-gradient(180deg, #f0f4ff 0%, #f7f9fc 100%);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
}

/* 顶部标题区 */
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
  gap: 10px;
}

/* 卡片面板 */
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

.table-actions {
  display: flex;
  gap: 10px;
}

/* 按钮区 */
.button-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background: #fafbfe;
  border-radius: 10px;
  border: 1px dashed #d7e0f0;
}

/* 表格样式升级 */
:deep(.el-table) {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eef1f6;
}

:deep(.el-table__header tr) {
  background-color: #f7f9fc;
}

:deep(.el-table__header th) {
  background-color: #f7f9fc;
  color: #1f2937;
  font-weight: 600;
}

:deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
  background-color: #f0f7ff;
}

/* 表格底部 */
.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding: 0 4px;
}

.muted {
  font-size: 12px;
  color: #8a93a6;
}
</style>