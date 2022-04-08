import Vue from 'vue'

Vue.use({
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          $saas: {}
        }
      },
      created () {
        this.$saas = {
          endpoint: (process.env.NODE_ENV === 'production') ? '/api' : 'https://stag.lx.saas.luotianyi.eu.org/api'
        }
        this.$saas.start = async () => {
          this.$saas.manifest = await this.$axios.$get(`${this.$saas.endpoint}/manifest.json`)
          this.$forceUpdate()
        }
      }
    })
  }
})
