export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    dir: 'docs',
  },
  router: {
    base: '/knee-physio/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Knee Physio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/assets/favicons/favicon.ico' }],
    script: [{ src: 'node_modules/nhsuk-frontend/dist/nhsuk.min.js', defer: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/node_modules/nhsuk-frontend/packages/nhsuk'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};