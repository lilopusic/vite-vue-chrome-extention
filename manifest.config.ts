import { defineManifest } from 'rollup-plugin-chrome-extension'
import { version } from './package.json'

const names = {
  build: 'Vue Extension',
  serve: '[INTERNAL] Vue Extension',
}

// import to `vite.config.ts`

export default defineManifest({
  manifest_version: 3,
  name: names.build,
  version,
  action: {
    default_popup: 'index.html',
  },
})
