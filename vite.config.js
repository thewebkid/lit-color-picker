import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('color-picker') || tag.includes('hue-bar') || tag.includes('hsl-canvas') || tag.includes('color-input-channel')
      }
    }
  })]
})