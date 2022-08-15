import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      directives: true,
      resolvers: [
        {
          type: 'directive',
          resolve(name) {
            if (name === 'Color') {
              return {
                name: 'vColor',
                from: './directives/color.ts',
              }
            }
          },
        },
      ],
    }),
  ],
})
