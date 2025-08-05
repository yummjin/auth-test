import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],

  // 개발 서버 설정
  server: {
    port: 5173,
    host: true,
    // CORS 설정 (API 요청을 위해)
    cors: true,
  },

  // 빌드 설정
  build: {
    // 소스맵 생성
    sourcemap: true,
    // 청크 크기 경고 임계값
    chunkSizeWarningLimit: 1000,
    // Tree shaking 활성화
    rollupOptions: {
      treeshake: true,
    },
  },

  // 최적화 설정
  optimizeDeps: {
    include: ["svelte"],
  },
});
