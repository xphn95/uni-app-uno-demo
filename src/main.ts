import { createSSRApp } from 'vue'
import App from './App.vue'
// import 'uno.css'

export function createApp (): any {
  const app = createSSRApp(App)
  return {
    app
  }
}
