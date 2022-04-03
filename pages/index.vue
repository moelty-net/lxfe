<template>
  <main>
    <awsl-header></awsl-header>
    <div class="aw-alert index-banner">
    <div class="index-banner-inner">
      <h1>冬尘月艺术司</h1>
      <h2 class="subtitle">让中文 VOCALOID 绽放光辉</h2>
    </div>
  </div>
    <awsl-main>
      <awsl-article>
        <h2>最近新闻</h2>
        <ul class="news aw-ellipsis">
          <li v-for="article in news" :key="article.id">
            {{article.date}}&emsp;
            <NuxtLink :to="`/news/${article.id}`">
              {{article.title}}
            </NuxtLink>
          </li>
        </ul>
      </awsl-article>
    </awsl-main>
    <awsl-footer></awsl-footer>
  </main>
</template>

<script>
export default {
  name: 'page-index',
  head: {
    title: '冬尘月艺术司 - 让中文 VOCALOID 绽放光辉'
  },
  data () {
    return {
      news: []
    }
  },
  async mounted () {
    this.news = await this.$axios.$get('/data/news/news_list.json')
  }
}
</script>

<style scoped>
.index-banner {
  background: #1537a7;
  height: 100vh;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 100px;
}

.index-banner h1 {
  font-size: 92px;
  font-weight: 400;
  letter-spacing: .25em;
  text-align: center;
}

.index-banner h2 {
  font-size: 48px;
  font-weight: 400;
  text-align: center;
}

.index-banner-inner {
  margin-top: 20vh;
}

@media (max-width: 1279px) {
  .index-banner {
    height: 600px;
  }

  .index-banner-inner {
    margin-top: 200px;
  }

  .index-banner h1 {
    font-size: 48px;
  }

  .index-banner h2 {
    font-size: 32px;
  }
}

.news {
  white-space: nowrap;
}
</style>
