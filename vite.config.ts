import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from '@unocss/vite'
import presetWind from '@unocss/preset-wind'
import Icons from 'unplugin-icons/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetWind(),
      ],
    }),
		Icons({
			compiler: 'jsx',
			jsx: 'react',
			autoInstall: true,
		}),
    react()
  ],
})
