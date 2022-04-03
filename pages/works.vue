<template>
  <main>
    <awsl-header></awsl-header>
    <awsl-banner title="作品展示"></awsl-banner>
    <awsl-main>
      <awsl-article>
        <section>
          <h2>我们的作品</h2>
          <works-list :works="works"></works-list>
        </section>
      </awsl-article>
    </awsl-main>
    <awsl-footer></awsl-footer>
  </main>
</template>

<script>
export default {
  name: 'page-works',
  head: {
    title: '作品展示 | 冬尘月艺术司'
  },
  data () {
    return {
      works: []
    }
  },
  async mounted () {
    this.works = await this.$axios.$get('/data/works/works.json')
  }
}
</script>
