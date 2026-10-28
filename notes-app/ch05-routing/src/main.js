import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app')   // 补全：把上面 import 的路由器实例交给应用