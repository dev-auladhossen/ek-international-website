import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import scrollReveal from './directives/scrollReveal'
import { routerOptions } from './router'

export const createApp = ViteSSG(App, routerOptions, ({ app }) => {
  app.directive('reveal', scrollReveal)
})
