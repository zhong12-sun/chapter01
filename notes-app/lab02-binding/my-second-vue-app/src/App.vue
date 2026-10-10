<template>
  <div id="app">
    <h1>记事本 notes-app · 第 2 章实验</h1>
    <NoteCard />
    <hr />
    <h2>记事本雏形（综合任务）</h2>

    <input v-model="newNote" placeholder="输入笔记内容" @keyup.enter="addNote"/>
    <button @click="addNote">添加</button>
    <br />

    <label><input type="radio" value="高" v-model="priority" /> 高</label>
    <label><input type="radio" value="中" v-model="priority" /> 中</label>
    <label><input type="radio" value="低" v-model="priority" /> 低</label>
    <br />

    <label><input type="checkbox" value="待办" v-model="tags" />待办</label>
    <label><input type="checkbox" value="灵感" v-model="tags" />灵感</label>

    <p>实时展示 → 内容：{{ newNote }} | 优先级：{{ priority }} | 标签：{{ tags }}</p>

    <ul>
      <li v-for="(note, index) in notes" :key="note.id">
        {{ index + 1 }}、 {{ note.text }} 【{{ note.priority }}】{{ note.tags }}
        <button @click="notes.splice(index, 1)">删除</button>
      </li>
    </ul>

    <p v-if="notes.length === 0">暂无笔记，快添加一条吧</p>
    <p v-show="notes.length > 0">共 {{ notes.length }} 条</p>

    <!-- 事件实验室 -->
    <hr>
    <EventLab />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NoteCard from './components/noteCard.vue'
import EventLab from './components/eventLab.vue'

const newNote = ref('')
const priority = ref('中')
const tags = ref([])
const notes = ref([])

function addNote() {
  if (!newNote.value.trim()) return
  notes.value.push({
    id: Date.now(),
    text: newNote.value,
    priority: priority.value,
    tags: tags.value.join(',')
  })
  newNote.value = ''
}
</script>

<style>
#app {
  padding: 20px;
  font-family: sans-serif;
}
li {
  margin: 8px 0;
}
button {
  margin-left:10px;
}
</style>