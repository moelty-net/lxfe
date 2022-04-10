<template>
  <div class="page">
    <main v-if="$saas.manifest">
      <awsl-header :manifest="$saas.manifest" />
      <awsl-banner :index="true" :manifest="$saas.manifest" />
      <awsl-container>
        <awsl-article v-if="$saas.manifest">
          <md-news />
        </awsl-article>
      </awsl-container>
      <awsl-footer :manifest="$saas.manifest" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      title: '加载中...'
    }
  },
  head () {
    return {
      title: `${this.title}`
    }
  },
  async mounted () {
    await this.$saas.start()
    this.title = `${this.$saas.manifest.title} - ${this.$saas.manifest.subtitle}`
  }
}
</script>
