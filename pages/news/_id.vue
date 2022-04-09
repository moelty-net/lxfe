<template>
  <div class="page">
    <main v-if="$saas.manifest">
      <awsl-header :manifest="$saas.manifest" />
      <awsl-banner :manifest="$saas.manifest" title="新闻中心" />
      <awsl-container>
        <awsl-article>
          <awsl-markdown v-if="newsId !== null" :title="title" :path="newsPath" />
        </awsl-article>
      </awsl-container>
      <awsl-footer :manifest="$saas.manifest" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PageNews',
  data () {
    return {
      title: '',
      newsId: null
    }
  },
  head () {
    return {
      title: `${this.title || '新闻中心'} | ${this.$saas.manifest?.title}`
    }
  },
  computed: {
    newsPath () {
      return `${this.$saas.endpoint}/news/content/${this.newsId}`
    }
  },
  async mounted () {
    const newsId = this.$route.params.id
    await this.$saas.start()
    let newsList = await this.$axios.$get(`${this.$saas.endpoint}/news/news.json`)
    newsList = newsList.filter(news => news.id === newsId)
    if (newsList.length < 1) {
      return this.$nuxt.error({ statusCode: 404, message: '找不到相关新闻' })
    }
    const newsInfo = newsList[0]
    this.title = newsInfo.title
    this.newsId = newsInfo.id
  }
}
</script>
