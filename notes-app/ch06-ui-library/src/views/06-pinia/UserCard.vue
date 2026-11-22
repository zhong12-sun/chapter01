<template>
  <div class="card">
    <h2>用户仓库：{{ name }}，{{ age }} 岁</h2>
    <p class="muted">
      persist.pick 只存了 age——刷新后"年龄记得住、名字忘了"，这就是部分持久化
    </p>
    <input v-model="newName" placeholder="改成什么名字？" />
    <button @click="rename">改名</button>
    <button @click="grow">长一岁</button>
    <button @click="showStorage">看看 localStorage</button>
    <div class="console" style="margin-top: 10px">{{ storageText }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '../../store/user'

export default {
  name: 'UserCard',
  data() {
    return {
      newName: '',
      storageText: '// 点"看看 localStorage"查看仓库实际存下的内容'
    }
  },
  computed: {
    ...mapState(useUserStore, ['name', 'age'])
  },
  methods: {
    ...mapActions(useUserStore, ['setName', 'grow']),
    rename() {
      if (!this.newName) return
      this.setName(this.newName)
    },
    // localStorage 非响应式：方法里现读现显示（第 05 课守卫页同款处理）
    showStorage() {
      const raw = localStorage.getItem('user')
      this.storageText = 'localStorage["user"] = ' + (raw === null ? 'null（还没存过）' : raw)
    }
  }
}
</script>