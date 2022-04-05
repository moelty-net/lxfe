<template>
  <main>
    <awsl-header />
    <div class="aw-alert index-banner">
      <div class="index-banner-inner">
        <h1>冬尘月艺术司</h1>
        <h2 class="subtitle">
          让中文 VOCALOID 绽放光辉
        </h2>
      </div>
    </div>
    <awsl-main>
      <awsl-article>
        <div class="news">
          <h2>最近新闻</h2>
          <ul>
            <li v-for="article in news" :key="article.id">
              <div class="news-link-box aw-ellipsis">
                <NuxtLink :to="`/news/${article.id}`">
                  {{ article.title }}
                </NuxtLink>
              </div>
              <span>{{ article.date }}&emsp;</span>
            </li>
          </ul>
        </div>
      </awsl-article>
    </awsl-main>
    <awsl-footer />
  </main>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      news: []
    }
  },
  head: {
    title: '冬尘月艺术司 - 让中文 VOCALOID 绽放光辉'
  },
  async mounted () {
    this.news = await this.$axios.$get('/data/news/news_list.json')
  }
}
</script>

<style scoped>
.index-banner {
  background: linear-gradient(135deg, #1537a7, #53adf0);
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
  margin-top: 33vh;
}

@media (min-width: 539px) and (max-width: 1279px) {
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

@media (max-width: 539px) {
  .index-banner {
    height: 300px;
  }

  .index-banner-inner {
    margin-top: 100px;
  }

  .index-banner h1 {
    font-size: 32px;
  }

  .index-banner h2 {
    font-size: 16px;
  }
}

.news {
  border: none;
  box-shadow: none;
}

.news a {
  display: inline;
}

.news h2 {
  padding-left: 16px;
}

.news ul {
  white-space: nowrap;
  list-style-type: none;
  padding-left: 0;
}

.news li {
  display: grid;
  grid-template-columns: auto 8em;
  padding: 8px 16px;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
}

.news li:hover {
  background: #f5f5f5;
}

.news span {
  text-align: right;
  width: 8em;
}

@media (max-width: 539px) {
  .news li {
    grid-template-columns: 100%;
  }

  .news .news-link-box {
    width: 90%;
  }

  .news span {
    text-align: left;
    font-size: 14px;
    color: #9c9c9c;
  }
}
</style>
