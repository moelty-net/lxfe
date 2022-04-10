<template>
  <div class="news">
    <h2>最近新闻</h2>
    <ul>
      <li v-for="(newsItem, newsItemIndex) in news" :key="newsItemIndex">
        <div class="news-link-box aw-ellipsis">
          <NuxtLink :to="`/news/${newsItem.id}`">
            {{ newsItem.title }}
          </NuxtLink>
        </div>
        <span>{{ newsItem.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: []
    }
  },
  async mounted () {
    await this.$saas.start()
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
