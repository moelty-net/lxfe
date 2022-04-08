import exec from 'child_process'
const commitHash = exec.execSync('git rev-parse --short HEAD')
console.log('Build Version: ', commitHash.toString())
console.log('NODE_ENV: ', process.env.NODE_ENV)

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    COMMIT_REF: commitHash.toString() || 'dev',
    NODE_ENV: process.env.NODE_ENV
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  css: [
    '@/assets/css/common.css',
    '@/assets/css/awsl.min.css'
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({ path: '*', component: resolve(__dirname, 'pages/page.vue') })
    }
  },

  plugins: [
    '~/plugins/app',
    '~/plugins/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  axios: {
    baseUrl: '/'
  }
}
