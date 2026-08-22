import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())

    return defineConfig({
        plugins: [react(), tailwindcss()],
        resolve: {
            tsconfigPaths: true
        },
        server: {
            port: parseInt(env.VITE_APP_PORT)
        }
    })
}
