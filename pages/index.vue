<template>
  <div class="page">
    <main v-if="$saas.manifest">
      <awsl-header :manifest="$saas.manifest" />
      <awsl-banner :index="true" :manifest="$saas.manifest" />
      <awsl-container>
        <awsl-article v-if="$saas.manifest">
          <div class="news">
            <h2>最近新闻</h2>
            <ul>
              <li v-for="newsItem in news" :key="newsItem.id">
                <div class="news-link-box aw-ellipsis">
                  <NuxtLink :to="`/news/${newsItem.id}`">
                    {{ newsItem.title }}
                  </NuxtLink>
                </div>
                <span>{{ newsItem.date }}</span>
              </li>
            </ul>
          </div>
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
      title: '加载中...',
      news: []
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
    this.news = await this.$axios.$get(`${this.$saas.endpoint}/news/news.json`)
  }
}
</script>

<style scoped>
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
