import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
//   define: {
//     YEC: process.env.VITE_YEC,
//   },
// })

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [svelte()],
    define: {
      __TWITCH_API_CLIENTID__: JSON.stringify(env.TWITCH_API_CLIENTID),
      __TWITCH_API_CLIENTSECRET__: JSON.stringify(env.TWITCH_API_CLIENTSECRET),
      
    },
  }
})