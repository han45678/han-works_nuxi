// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },

  // 🚀 GitHub Pages / 子目錄部署設定
  ssr: false, // 關掉 SSR，只輸出靜態檔案
  nitro: {
    preset: 'github-pages' // GitHub Pages 專用
  },
  app: {
    baseURL: '/HanWorks/' // ⚠️ 一定要和你的 repo 名稱一致
  }
})
