<template>
  <div class="event-lab">
    <h3>事件实验室 · 2.4 事件对象 · 2.5 事件修饰符</h3>

    <button @click="showEvent">打印事件对象（不传参）</button>
    <button @click="showEventArg($event, 66)">showEventArg($event, 66)</button>

    <a href="https://vuejs.org" @click.prevent="goVue">Vue官网链接（prevent阻止跳转）</a>

    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'EventLab',
  data() {
    return {
      logs: []
    }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)
      console.log(msg)
    },
    showEvent(e) {
      this.log('不传参：事件类型 = ' + e.type)
    },
    showEventArg(e, num) {
      this.log(`传参：事件类型${e.type}，传入数字=${num}`)
    },
    goVue() {
      this.log('点击链接，阻止页面跳转')
    }
  }
}
</script>

<style scoped>
.event-lab{
  margin-top:20px;
  padding:16px;
  border:1px solid #ccc;
}
button,a{
  margin:6px;
  display:block;
  width:fit-content;
}
.logs{
  padding-left:20px;
}
</style>
