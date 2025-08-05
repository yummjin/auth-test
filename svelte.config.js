import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Svelte 컴파일러 옵션
  compilerOptions: {
    dev: process.env.NODE_ENV === "development",
    css: "external",
    runes: false,
  },

  // 전처리기 설정
  preprocess: [
    vitePreprocess({
      typescript: true,
      scss: true,
      postcss: true,
    }),
  ],
};

export default config;
