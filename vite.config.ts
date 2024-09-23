import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())

    return defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                "gaku/assets": "/src/assets",
                "gaku/images": "/src/assets/images",
                "gaku/components": "/src/components",
                "gaku/hooks": "/src/utils/_hooks",
                "gaku/pages": "/src/pages",
                "gaku/router": "/src/router",
                "gaku/services/actions": "/src/services/actions",
                "gaku/services": "/src/services",
                "gaku/types": "/src/utils/_types",
                "gaku/utils": "/src/utils",
                "gaku/utils/hooks": "/src/utils/_hooks",
                "gaku/utils/types": "/src/utils/_types",
                "gaku/package": "/package.json"
            }
        },
        server: {
            port: parseInt(env.VITE_APP_PORT)
        }
    })
}
