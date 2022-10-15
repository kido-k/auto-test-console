// const environment = process.env.NODE_ENV || 'local'
const envSet = require(`./env.js`)

export default {
  srcDir: 'src',
  generate: { dir: 'dist' },
  ssr: false,
  vue: {
    config: {
      devtools: true
    },
  },
  server: {
    port: 3001,
  },
  target: 'static',
  head: {
    title: 'reception-web',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },
  css: [],
  env: envSet,
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  build: {
    postcss: null,
  },
}
