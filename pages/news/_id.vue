<template>
  <main>
    <awsl-header />
    <awsl-banner title="新闻中心" />
    <awsl-main>
      <awsl-article>
        <awsl-markdown v-if="newsId !== null" :title="title" :path="newsPath" />
      </awsl-article>
    </awsl-main>
    <awsl-footer />
  </main>
</template>

<script>
import awslMarkdown from '../../components/awsl-markdown.vue'
export default {
  name: 'PageNews',
  components: { awslMarkdown },
  data () {
    return {
      title: '',
      newsId: null
    }
  },
  head () {
    return {
      title: `${this.title || '新闻中心'} | 冬尘月艺术司`
    }
  },
  computed: {
    newsPath () {
      return `news/${this.newsId}`
    }
  },
  async mounted () {
    const newsId = Number(this.$route.params.id)
    let newsList = await this.$axios.$get('/data/news/news_list.json')
    newsList = newsList.filter(news => news.id === newsId)
    if (newsList.length < 1) {
      return this.$nuxt.error({ statusCode: 404, message: '找不到相关新闻' })
    }
    const newsInfo = newsList[0]
    this.title = newsInfo.title
    this.newsId = newsInfo.id
    console.log(newsInfo)
    this.members = await this.$axios.$get('/data/about/members.json')
  }
}
</script>
