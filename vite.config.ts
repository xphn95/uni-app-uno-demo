import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
import path from 'node:path'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': pathSrc
    }
  },
  plugins: [
    uni(),
    Unocss({
      mode: 'vue-scoped'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros'
      ],
      dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
      eslintrc: {
        enabled: true,
        filepath: './auto-imports.d.ts',
        globalsPropValue: true
      }
    })
    /* Components({
      dts: path.resolve(pathSrc, 'typings', 'components.d.ts')
    }) */
  ]
})
