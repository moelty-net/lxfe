<template>
  <main>
    <awsl-header></awsl-header>
    <awsl-banner title="新闻中心"></awsl-banner>
    <awsl-main>
      <awsl-article>
        <awsl-markdown :title="title" :path="newsPath" v-if="newsId !== null"></awsl-markdown>
      </awsl-article>
    </awsl-main>
    <awsl-footer></awsl-footer>
  </main>
</template>

<script>
import awslMarkdown from '../../components/awsl-markdown.vue'
export default {
  components: { awslMarkdown },
  name: 'page-news',
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
  data () {
    return {
      title: '',
      newsId: null
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
