
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'}
    ],
    script:[
      { src:'https://code.jquery.com/jquery-3.4.1.slim.min.js', type: 'text/javascript' },
      { src:'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', type: 'text/javascript' },
      { src:'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', type: 'text/javascript' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login:{url:'http://127.0.0.1:8000/api/login', method:'post', propertyName: 'meta.token'},
          user:{url:'http://127.0.0.1:8000/api/user', method:'get', propertyName:'name'},
          logout:{url:'http://127.0.0.1:8000/api/logout', method:'post'}
        }
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
