<template>
  <div class="page">
    <main v-if="$saas.manifest">
      <awsl-header :manifest="$saas.manifest" />
      <awsl-banner :manifest="$saas.manifest" :title="page.name" />
      <awsl-container>
        <awsl-article v-if="$saas.manifest && page.url">
          <awsl-markdown :path="`${$saas.endpoint}/pages/${page.url}`" class="welcome" />
        </awsl-article>
      </awsl-container>
      <awsl-footer :manifest="$saas.manifest" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PageDefault',
  data () {
    return {
      title: '加载中...',
      page: {},
      pageUrl: ''
    }
  },
  head () {
    return {
      title: this.title,
      link: [{ rel: 'icon', href: '/api/favcion.ico' }]
    }
  },
  async mounted () {
    await this.$saas.start()
    const foundPages = this.$saas.manifest.pages.filter((p) => { return this.$route.path.substring(1) === p.url })
    if (foundPages.length > 1) {
      return this.$nuxt.error({ statusCode: 500, message: '服务器配置不正确 - 多个页面 ID 重复' })
    }
    if (foundPages.length < 1) {
      return this.$nuxt.error({ statusCode: 404, message: '找不到相关页面' })
    }
    this.page = foundPages[0]
    this.title = `${this.page.name} | ${this.$saas.manifest.title}`
  }
}
</script>
