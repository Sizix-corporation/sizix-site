export default {
  target: 'static',
  head: {
    title: 'Sizix team',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Sizix team est une communauté de developpeur qui à été mis en place par POUPOIN AKA connu sosu le nom de yatachi code . Cette commaunté essaie de développer des technologies pour proposer au granjd public sans contrainte . ',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }],
  },

  loading: {
    color: 'white',
    height: '5px',
  },

  generate: {
    fallback: '404.html',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://sizix-team.org',
    gzip: true,
    route: ['/', 'projets', '/team', '/abonner', '/entreprise'],
    sitemaps: [
      {
        routes:['/'],
        path:'/sitemap-index.xml',
        gzip:true,
        priority:1
      },
      {
        routes:['/abonner'],
        path:'/sitemap-abonner.xml',
        gzip:true,
        priority:0.7
      },      {
        routes:['/entreprise'],
        path:'/sitemap-entreprise.xml',
        gzip:true,
        priority:0.9
      },      {
        routes:['/team'],
        path:'/sitemap-team.xml',
        gzip:true,
        priority:0.8
      },
    ],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
