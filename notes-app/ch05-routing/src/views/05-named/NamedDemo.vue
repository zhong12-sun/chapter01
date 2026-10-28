<template>
  <div class="page">
    <h2>🍊 命名路由（5.4）</h2>
    <p>同一个目标，两种写法：</p>

    <ul class="link-list">
      <li>
        <router-link to="/user/9527" class="link-card">
          路径写法 to="/user/9527"
        </router-link>
        <span class="muted">—直观，但路径写死了</span>
      </li>
      <li>
        <router-link :to="{ name: 'user', params: { id: 9527 } }" class="link-card">
          命名写法
        </router-link>
        <span class="muted">—按 name 找路由，参数交给 params</span>
      </li>
    </ul>

    <div class="tip">
      好处在“改路径”的时候：把路由表里 <code>/user/:id</code> 改成 <code>/member/:id</code>，路径写法全断、命名写法照常——跳转与路径解耦。
    </div>
  </div>
</template>

<style scoped>
.link-list {
  list-style: none;
  padding: 0;
}

.link-list li {
  margin-bottom: 14px;
  padding: 14px;
  background: #f7f9fc;
  border-radius: 12px;
  border-left: 4px solid #409eff;
}

.link-card {
  display: inline-block;
  padding: 6px 14px;
  background: #ecf5ff;
  border-radius: 8px;
  font-weight: 600;
  margin-right: 10px;
}

.link-card:hover {
  background: #d9ecff;
  text-decoration: none;
}

.muted {
  color: #909399;
  font-size: 13px;
}

.tip {
  margin-top: 20px;
  padding: 16px;
  background: #fdf6ec;
  border-left: 4px solid #e6a23c;
  border-radius: 10px;
  color: #b88230;
  line-height: 1.7;
}

code {
  background: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
</style>
