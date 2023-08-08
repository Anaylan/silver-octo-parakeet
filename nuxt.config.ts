// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/scss/main.scss'],
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  googleFonts: {
    families: {
      'Nunito': true,
    },
  },
  colorMode: {
    classSuffix: ''
  }
})
