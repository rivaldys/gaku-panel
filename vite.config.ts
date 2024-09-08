import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())

    return defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                "gaku/assets": "/src/assets/index.ts",
                "gaku/images": "/src/assets/images/index.ts",
                "gaku/components": "/src/components/index.ts",
                "gaku/pages": "/src/pages/index.ts",
                "gaku/router": "/src/router/index.tsx",
                "gaku/services/actions": "/src/services/actions/index.ts",
                "gaku/services": "/src/services/index.ts",
                "gaku/types": "/src/types/index.ts",
                "gaku/utils": "/src/utils/index.ts",
                "gaku/package": "/package.json"
            }
        },
        server: {
            port: parseInt(env.VITE_APP_PORT)
        }
    })
}
