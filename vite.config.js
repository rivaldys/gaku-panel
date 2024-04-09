import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())}

    return defineConfig({
        plugins: [react()],
        server: {
            port: parseInt(process.env.VITE_APP_PORT),
        }
    })
}
