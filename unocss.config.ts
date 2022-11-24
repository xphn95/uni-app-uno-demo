import { defineConfig, presetAttributify } from 'unocss'
// import { theme } from '@unocss/preset-mini'
// import { entriesToCss } from '@unocss/core'
// import presetWeapp from 'unocss-preset-weapp'
// import { transformerAttributify /* transformerClass */ } from 'unocss-preset-weapp/transformer'
import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify
} from 'unocss-applet'

const isH5 = process.env.UNI_PLATFORM === 'h5'
// const isWeixin = process.env.UNI_PLATFORM === 'mp-weixin'

export default defineConfig({
  theme: {
    preflightBase: undefined
  },
  /*   preflights: [
    {
      getCSS: () => {
        const css = entriesToCss(Object.entries(theme.preflightBase ?? {}))
        const selector = isWeixin
          ? ':not(not)'
          : '*'
        return `${selector},::before,::after{${css}}::backdrop{${css}}`
      }
    }
  ], */
  presets: [
    // presetWeapp()
    // presetMini()
    presetApplet({ enable: !isH5 }),
    presetAttributify(),
    presetRemToRpx({ enable: !isH5 })
  ],
  transformers: [
    // transformerAttributify()
    // transformerClass()
    // Don't change the following order
    transformerAttributify(),
    transformerApplet()
  ]
})
