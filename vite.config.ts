import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())

    return defineConfig({
        plugins: [
            react(),
            tailwindcss()
        ],
        resolve: {
            alias: {
                "gaku/assets": "/src/assets",
                "gaku/images": "/src/assets/images",
                "gaku/components": "/src/components",
                "gaku/pages": "/src/pages",
                "gaku/router": "/src/router",
                "gaku/services/api": "/src/services/api",
                "gaku/services/slices": "/src/services/slices",
                "gaku/services/store": "/src/services/store",
                "gaku/shared/constants": "/src/shared/constants",
                "gaku/shared/hooks": "/src/shared/hooks",
                "gaku/shared/types": "/src/shared/types",
                "gaku/shared/utils": "/src/shared/utils",
                "gaku/package": "./package.json"
            }
        },
        server: {
            port: parseInt(env.VITE_APP_PORT)
        }
    })
}
